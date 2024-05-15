import { useEffect, useState } from "react";
import CategoryWiseBookCard from "../Shared/CategoryWiseBookCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className="max-w-7xl mt-12 mx-auto">
      <div className="my-7">
        <h3 className="text-sm">People&#8217;s Choice</h3>
        <h1 className="text-3xl font-medium">Bestselling Books</h1>
      </div>
      <hr />
      <div>
        <Slider {...settings}>
          {books.slice(0,10).map((book) => (
            <CategoryWiseBookCard
              key={book._id}
              book={book}
            ></CategoryWiseBookCard>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularBooks;
