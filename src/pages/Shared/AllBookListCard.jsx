import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AllBookListCard = ({ book, idx }) => {
  const { _id, image, name, author, category, rating } = book;
  return (
    <tr className="hover:bg-[#76b74817]">
      <th>{idx + 1}</th>
      <th><img src={image} className={`h-5 hover:h-10`} alt="" /></th>
      <td>{name}</td>
      <td>{author}</td>
      <td>{category}</td>
      <td><Rating style={{ maxWidth: 80 }} readOnly value={rating} /></td>
      <td>
        <Link to={`/updatebook/${_id}`}>
          <button className="border  text-center text-[#666666] font-normal text-sm px-2 py-1 hover:bg-[#76b748e3] hover:text-white">
            Update
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllBookListCard;
