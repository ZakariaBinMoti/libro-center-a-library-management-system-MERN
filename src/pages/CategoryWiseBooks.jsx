import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import CategoryWiseBookCard from "./Shared/CategoryWiseBookCard";

const CategoryWiseBooks = () => {
  const { categoryName } = useContext(AuthContext);
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/allbooks?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [categoryName]);

//   console.log(books);

  return (
    <div>
      <div className="mb-7 mt-9 text-center">
        <h1 className="text-5xl font-bold">{categoryName}</h1>
        {/* <h3 className="text-sm">Add new book in the library.</h3> */}
        <div className="flex items-center mt-3 justify-center">
          <p className="bg-[#76b748e3] text-white text-lg font-medium py-1 px-3">
            Home &#10141; Category &#10141; {categoryName}{" "}
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-4 max-w-7xl mx-auto gap-8 mt-8">
        {
            books?.map(book=>  <CategoryWiseBookCard key={book._id} book={book}></CategoryWiseBookCard>)
        }
      </div>
    </div>
  );
};

export default CategoryWiseBooks;
