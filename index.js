const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://libro-center.web.app',
        'https://libro-center.firebaseapp.com'
    ],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k4ytc6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// middlewares
const logger = (req, res, next) => {
    console.log('log info:', req.method, req.url);
    next();
}


const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    // console.log('token in the middleware:', token);
    if (!token) {
        return res.status(401).send({ message: 'unauthorized access' })
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized access' })
        }
        req.user = decoded;
        next();
    })
}

const cookieOption = {
    httpOnly: true,
    sameSite: process.env.NODE_ENV == "production" ? "none" : "strict",
    secure: process.env.NODE_ENV == "production" ? true : false,
}

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const booksCollection = client.db('libroCenter').collection('books');
        const borrowBooksCollection = client.db('libroCenter').collection('borrowedBooks');


        app.post('/jwt', async (req, res) => {
            const user = req.body;
            // console.log('user for token', user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
            res.cookie('token', token, cookieOption)
                .send({ success: true });
        })

        app.post('/logout', async (req, res) => {
            const user = req.body;
            console.log('loging out', user);
            res.clearCookie('token', { ...cookieOption, maxAge: 0 }).send({ success: true })
        })


        app.get('/books', logger, verifyToken, async (req, res) => {
            // console.log('cooookies', req.cookies);
            const cursor = booksCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/allbooks', async (req, res) => {
            let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
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

        app.put('/quantitydecrease/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const book = {
                $inc: {
                    quantity: -1,
                }
            }
            const result = await booksCollection.updateOne(filter, book);
            res.send(result);
        })

        app.put('/quantityincrease/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const book = {
                $inc: {
                    quantity: 1,
                }
            }
            const result = await booksCollection.updateOne(filter, book);
            res.send(result);
        })


        app.get('/borrowedbooks', async (req, res) => {
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            const result = await borrowBooksCollection.find(query).toArray();
            res.send(result);
        })

        app.post('/borrowedbooks', async (req, res) => {
            const borrowBook = req.body;
            const result = await borrowBooksCollection.insertOne(borrowBook);
            res.send(result);
        })

        app.delete('/borrowedbooks/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: id };
            const result = await borrowBooksCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
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

