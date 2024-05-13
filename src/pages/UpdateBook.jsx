import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
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
  console.log(book);

  const handleUpdateBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const quantity = parseInt(form.quantity.value);
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const rating = parseInt(form.rating.value);
    const content = form.content.value;

    const UpdateBook = {
      image,
      name,
      quantity,
      author,
      category,
      description,
      rating,
      content,
    };

    // console.log("this is the form", UpdateBook);

    fetch(`http://localhost:5000/books/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully!",
            icon: "success",
          });
          navigate("/allbooks");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* <h1 className="text-center text-3xl">Type Craft Item Details</h1> */}
      <div className="my-7 text-center">
        <h1 className="text-3xl font-medium">Update Book</h1>
        <h3 className="text-sm">Update the book in the library.</h3>
      </div>
      <hr />

      <div>
        <div className="hero-content bg-[#62665e11] flex-col lg:flex-col mx-10">
          <div className="card shrink-0 w-full shadow-2xl  ">
            {/* form */}
            <form
              onSubmit={handleUpdateBook}
              className="card-body grid grid-cols-1 lg:grid-cols-2 space-x-5"
            >
              <div className="form-control ml-5 lg:col-span-2 border-b-4">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image URL"
                  name="image"
                  defaultValue={image}
                  className="input rounded-none"
                  required
                />
              </div>

              <div className="form-control border-b-4">
                <label className="label">
                  <span className="label-text">Book Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={name}
                  className="input rounded-none"
                  required
                />
              </div>

              <div className="form-control border-b-4">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="quantity"
                  name="quantity"
                  defaultValue={quantity}
                  className="input rounded-none"
                  required
                />
              </div>

              <div className="form-control border-b-4">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input
                  type="text"
                  name="author"
                  defaultValue={author}
                  placeholder="Author name"
                  className="input rounded-none"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select select-bordered w-full"
                >
                  <option>Novel</option>
                  <option>Fantasy</option>
                  <option>Fiction</option>
                  <option>Epic</option>
                  <option>Gothic</option>
                  <option>Adventure</option>
                  <option>Horror</option>
                  <option>Mystery</option>
                  <option>Thriller</option>
                  <option>Historical Fiction</option>
                  <option>Science Fiction</option>
                </select>
              </div>

              <div className="form-control border-b-4">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Short Description"
                  className="input rounded-none"
                  required
                />
              </div>

              <div className="form-control border-b-4">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="rating"
                  defaultValue={rating}
                  name="rating"
                  className="input rounded-none"
                  required
                />
              </div>

              <div className="form-control border-b-2 lg:col-span-2">
                <label className="label">
                  <span className="label-text">Book Content</span>
                </label>
                <textarea
                  name="content"
                  placeholder="Write some book content"
                  className="input rounded-none"
                  required
                  defaultValue={content}
                  id="content"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="form-control  mt-6 lg:col-span-2">
                <input
                  className="btn text-white font-semibold bg-[#77b748]"
                  type="submit"
                  value="Update Book"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
