import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
const BookDetails = () => {
  const book = useLoaderData();
  const {
    _id,
    image,
    name,
    quantity,
    author,
    category,
    description,
    rating,
    content,
  } = book;

  const { user } = useContext(AuthContext);
  const [quantityState, setQuantityState] = useState(quantity);
  const [books, setBooks] = useState([]);
  //   console.log(_id);

  const handlefirstbutton = () => {
    fetch(`http://localhost:5000/borrowedbooks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        const available = data.find((book) => book._id == _id);
        if (available) {
          Swal.fire({
            title: "Error!",
            text: "You can not borrow 2 piece of same books!",
            icon: "error",
          });
        } else {
          document.getElementById("my_modal_2").showModal();
        }
      });
    console.log("click");
    console.log(books);
  };

  const handleBorrowedBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const returndate = form.returndate.value;
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const borrowdate = `${year}-${month + 1}-${date}`;
    const borrowedBook = {
      _id,
      image,
      name,
      category,
      borrowdate,
      returndate,
      email: user.email,
    };

    fetch("http://localhost:5000/borrowedbooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrowedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You Have Successfully borrowed this book!",
            icon: "success",
          });

          fetch(`http://localhost:5000/quantitydecrease/${_id}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
          setQuantityState(quantityState - 1);
          event.target.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-7 mt-9 text-center">
        <h1 className="text-5xl font-bold">Book Details</h1>
        {/* <h3 className="text-sm">Add new book in the library.</h3> */}
        <div className="flex items-center mt-3 justify-center">
          <p className="bg-[#76b748e3] text-white text-lg font-medium py-1 px-3">
            Home &#10141; Books &#10141; {name}{" "}
          </p>
        </div>
      </div>
      <hr />

      <div className="mt-6 flex gap-7">
        <div>
          <img className="max-h-[800px]" src={image} alt="" />
        </div>
        <div className="grow">
          <div className="mb-6">
            <h3 className="py-2 text-2xl">{category}</h3>
            <hr />
            <h1 className="text-4xl font-medium py-6 leading-6">{name}</h1>
            <p className="text-xl">By: {author}</p>
            <p>
              <Rating style={{ maxWidth: 120 }} readOnly value={rating} />
            </p>
          </div>
          <hr />
          <div>
            <h3 className="font-semibold mt-3">Description:</h3>
            <p>{description}</p>
          </div>
          <div>
            <h3 className="font-semibold mt-3">Content of the Book:</h3>
            <p>{content}</p>
            <p className="pt-3 font-semibold text-lg">
              Available Quantity:{" "}
              <span className="text-blue-500">{quantityState}</span>{" "}
            </p>
          </div>
          <div>
            <button
              onClick={handlefirstbutton}
              className={`border ${quantityState > 0 ? "" : "btn-disabled"}  btn rounded-sm text-center my-2 w-full text-[#666666] font-normal text-sm py-0 hover:bg-[#76b748e3] hover:text-white`}
            >
              Borrow
            </button>
          </div>
        </div>
      </div>

      {/* modal  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box lg:p-12">
          <div className=" flex gap-5">
            <div>
              <img src={image} className="max-h-20" alt="" />
            </div>
            <div>
              <h1 className="text-xl">{name}</h1>
              <p>By: {author}</p>
              <p>Available Quantity: {quantityState}</p>
            </div>
          </div>
          <div className="mt-2">
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div>

          <form method="dialog" onSubmit={handleBorrowedBook}>
            <div className="form-control border-b-4">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Return Date
                </span>
              </label>
              <input
                type="date"
                name="returndate"
                className="input rounded-none"
                required
              />
            </div>
            <div className="form-control  mt-6 lg:col-span-2">
              <input
                className="btn text-white font-semibold bg-[#77b748]"
                type="submit"
                value="Borrow"
              />
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BookDetails;
