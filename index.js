const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k4ytc6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const booksCollection = client.db('libroCenter').collection('books');


        app.get('/books', async (req, res) => {
            const cursor = booksCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/allbooks', async (req, res) => {
            let query = {};
            if(req.query?.category){
                query = {category: req.query.category}
            }
            const cursor = booksCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/books/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await booksCollection.findOne(query);
            res.send(result);
        })

        app.post('/books', async (req, res) => {
            const newBook = req.body;
            const result = await booksCollection.insertOne(newBook);
            res.send(result);
        })

        app.put('/books/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedBook = req.body;
            const book = {
                $set: {
                    image: updatedBook.image,
                    name: updatedBook.name,
                    quantity: updatedBook.quantity,
                    author: updatedBook.author,
                    category: updatedBook.category,
                    description: updatedBook.description,
                    rating: updatedBook.rating,
                    content: updatedBook.content,
                }
            }
            const result = await booksCollection.updateOne(filter, book, options);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Book Server is running');
})

app.listen(port, () => {
    console.log(`Book server is running on port ${port}`);
})

