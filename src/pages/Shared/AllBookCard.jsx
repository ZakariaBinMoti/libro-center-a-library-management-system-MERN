import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const AllBookCard = ({ book }) => {
  const { _id,image, name, author, category, rating } = book;
  console.log(book);
  return (
    <div className="flex flex-col justify-between">
      <div>
        <img src={image}  alt=""/>
        <h3 className="py-2 text-sm">{category}</h3>
        <hr />
        <h1 className="text-lg font-medium py-3 leading-6">{name}</h1>
        <p className="text-sm">By: {author}</p>
        <p>
          <Rating style={{ maxWidth: 80 }} readOnly value={rating} />
        </p>
      </div>
      <div>
        <Link to={`/updatebook/${_id}`}><button className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white">
          Update
        </button></Link>
      </div>
    </div>
  );
};

export default AllBookCard;
