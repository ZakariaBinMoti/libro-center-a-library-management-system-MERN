import BookCategories from "./BookCategories";
import Header from "./Header";
// import img3 from "../../assets/teenage-girl-reading-book-shelf.jpg";

const Home = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Header></Header>
      {/* <div className="grid text-white font-medium text-2xl grid-cols-1 lg:grid-cols-3 gap-6 text-center max-w-7xl mx-auto absolute lg:bottom-20 lg:left-52 z-50">
        <div className={` bg-[#49bbcf9f] p-3`}>
          <div className="border-2 p-12">
            <h3>Books We have</h3>
            <p>24,179,213</p>
          </div>
        </div>
        <div className={` bg-[#cf7a498a] p-3`}>
          <div className="border-2 p-12">
            <h3>Total Members</h3>
            <p>24,179,213</p>
          </div>
        </div>
        <div className={` bg-[#9949cf77] p-3`}>
          {" "}
          <div className="border-2 p-12">
            <h3>Happy Users</h3>
            <p>24,179,213</p>
          </div>{" "}
        </div>
      </div> */}





      <BookCategories></BookCategories>

    </div>
  );
};

export default Home;
