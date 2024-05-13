import { useEffect, useState } from "react";
import AllBookCard from "./Shared/AllBookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
        
       <div className="my-7">
       <h1 className="text-3xl font-medium">All Books</h1>
        <h3 className="text-sm">A huge and tremendios collection of</h3>
       </div>
        <hr />
        <div className="my-5 grid grid-cols-6 gap-8">
            {
                books.map(book=><AllBookCard key={book._id} book={book} ></AllBookCard>)
            }
        </div>
    </div>
  );
};

export default AllBooks;
