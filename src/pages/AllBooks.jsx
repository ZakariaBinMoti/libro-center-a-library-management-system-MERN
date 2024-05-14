import { useEffect, useState } from "react";
import AllBookCard from "./Shared/AllBookCard";
import { MdOutlineGridView } from "react-icons/md";
import { FaListUl } from "react-icons/fa";

const AllBooks = () => {
  const [allbooks, setallBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleCustomfilter = (filter) => {
    if(filter=='Yes'){
      const availablebooks = allbooks.filter((book) => book.quantity > 0);
      setBooks(availablebooks);
    }
    if(filter=="No"){
      setBooks(allbooks);
    }
  };


  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setallBooks(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between">
        <div className="my-7">
          <h1 className="text-3xl font-medium">All Books</h1>
          <h3 className="text-sm">A huge and tremendios collection of</h3>
        </div>
        <div className="flex items-center justify-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" flex p-1 cursor-pointer rounded-sm items-center px-2 text-white m-1 bg-[#77b748]"
            >
              Filter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 8.25L12 15.75L4.5 8.25"
                  stroke="white"
                  className="text-white"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleCustomfilter("Yes")}>
                <a>Show Available Books</a>
              </li>
              <li onClick={() => handleCustomfilter("No")}>
                <a>All Books</a>
              </li>
            </ul>
          </div>
          <div className=" flex border-2 border-[#77b748]   gap-2">
            <button onClick={()=>setToggle(false)} className=" pl-[6px]"><MdOutlineGridView /></button>
            <button onClick={()=>setToggle(true)} className="border-l-2 p-[6px] border-[#77b748]"><FaListUl /></button>
          </div>
        </div>
      </div>

      <hr />
      <div className="my-5 grid grid-cols-6 gap-8">
        {books.map((book) => (
          <AllBookCard key={book._id} book={book}></AllBookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
