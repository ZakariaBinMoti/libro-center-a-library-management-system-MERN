import BookCategories from "./BookCategories";
import Header from "./Header";
import PopularBooks from "./PopularBooks";
import img from "../../assets/img-02.png";
import img2 from "../../assets/imag-01.jpg";
import { GoBook, GoPeople } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="lg:relative">
        <Header></Header>

        <div className="lg:absolute z-50  my-4 lg:my-0 right-0 left-0 top-0 bottom-0 m-auto max-w-3xl ">
          <div className="flex flex-col space-y-5 items-center justify-center mt-36 ">
            <img className="rounded-full border-2 p-3" src={img2} alt="" />
            <h1 className="text-5xl font-semibold">Jude Morfew</h1>
            <h3 className="text-3xl">Latest 2024 Release</h3>
            <p>
              Set in the 1930s in Maycomb, Alabama, To Kill a Mockingbird
              follows young Scout Finch as she navigates the complexities of
              racism and morality, particularly through the trial of Tom
              Robinson.
            </p>
            <div className="space-x-2">
              <button className="p-3 border border-[#77b748]  btn hover:bg-[#77b748]">
                Categories
              </button>
              <button className=" p-3 border border-[#77b748]  btn hover:bg-[#77b748]">
                View Books
              </button>
            </div>
          </div>
        </div>

        <div className="grid mx-3 lg:absolute bottom-20 z-50 left-0 right-0  font-medium text-2xl grid-cols-1 lg:grid-cols-3 gap-6 text-center max-w-7xl lg:mx-auto ">
          <div className={`p-3 bg-[#4988cf4b] bg-fixed bg-[url('')]`}>
            <div className="border-2 space-y-1 p-12 flex flex-col items-center justify-center">
              <p className="text-white">
                <GoBook />
              </p>
              <h3 className="text-white">Books We have</h3>
              <p className="text-white">24,179,213</p>
            </div>
          </div>
          <div className={` bg-[#cf7a498a] p-3`}>
            <div className="border-2  space-y-1 p-12 flex flex-col items-center justify-center">
              <p className="text-white">
                <GoPeople />
              </p>
              <h3 className="text-white">Total Members</h3>
              <p className="text-white">24,179,213</p>
            </div>
          </div>
          <div className={` bg-[#9949cf77] p-3 flex flex-col`}>
            {" "}
            <div className="border-2 space-y-1 p-12 flex flex-col items-center justify-center">
              <p className="text-white">
                <CiHeart />
              </p>
              <h3 className="text-white">Happy Users</h3>
              <p className="text-white">24,179,213</p>
            </div>{" "}
          </div>
        </div>
      </div>

      <BookCategories></BookCategories>
      <PopularBooks></PopularBooks>

      <div className="lg:relative my-28">
        <div className="bg-base-200 p-24">
          <div className="max-w-3xl lg:pl-60 space-y-1 mx-auto">
            <h2 className="bg-red-400 px-1 text-sm flex w-fit text-white">
              FEATURED
            </h2>
            <h1 className="text-4xl font-bold">
              Things To Know About <br /> Green Flat Design
            </h1>
            <p className="text-lg">By: Farrah Whisenhunt</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <img className="lg:absolute -top-8" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
