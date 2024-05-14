import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import BorrowBookCard from "./Shared/BorrowBookCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/borrowedbooks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-7">
        <h1 className="text-3xl font-medium">Borrowed Books</h1>
        <h3 className="text-sm">A huge and tremendios collection of Books.</h3>
      </div>
      <hr />
      <div className="mt-10 grid gap-7 grid-cols-5">
        {books.map((book) => (
          <BorrowBookCard
            key={book._id}
            book={book}
            books={books}
            setBooks={setBooks}
          ></BorrowBookCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
