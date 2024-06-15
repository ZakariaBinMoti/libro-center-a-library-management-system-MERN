import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import { FaRegUser } from "react-icons/fa";

const BookReviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://libro-center-server.vercel.app/bookreviews?bookid=${id}`)
      .then((data) => setReviews(data.data));
  }, [id]);

  const handleBookReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewdetails = form.reviewdetails.value;

    const newReview = {
      bookid: id,
      email: user.email,
      reviewdetails,
    };

    axios.post("https://libro-center-server.vercel.app/bookreviews", newReview).then((data) => {
      if (data.data.insertedId) {
        e.target.reset();
      }
    });

    const allreviews = [...reviews, newReview];
    setReviews(allreviews);

  };

  return (
    <div>
      <div>
        <h1 className="text-2xl mt-10 py-2 font-medium">User Reviews</h1>
        <hr />
        <div>
          {reviews.map((review) => (
            <>
              <div className="my-5">
                <div className="flex">  <h3 className="font-semibold bg-gray-50 p-2 flex gap-1 items-center rounded-md border-x border-t">  <FaRegUser />
                  {review.email}
                </h3></div>
                <p className=" py-4 px-2 border-t border-x border-b">
                  {review.reviewdetails}
                </p>
                {/* <hr className="pt-6" /> */}
              </div>
            </>
          ))}
        </div>
      </div>
      <form className="mt-8" onSubmit={handleBookReview}>
        <textarea
          placeholder="Write a review"
          id="reviewdetails"
          name="reviewdetails"
          className="textarea rounded-none textarea-bordered textarea-lg w-full"
        ></textarea>
        <input
          className="btn hover:bg-green-500 hover:text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default BookReviews;
