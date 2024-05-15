import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const BookCategories = () => {
  const { setcategoryName } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(categoryName);
  const handleButton = (category) => {
    setcategoryName(category);
    navigate(`/category/${category}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-20 mb-6">
        <h1 className="text-3xl font-medium">Categories</h1>
        <h3 className="text-sm">
          Find Your suitable book finding by Categories
        </h3>
      </div>

      <hr />

      <div className="grid mt-2 grid-cols-4 gap-9">
        <div
          className="cursor-pointer hover:bg-[#76b74817] p-5 flex flex-col justify-between text-center"
          onClick={() => handleButton("Novel")}
        >
          <div>
            <img
              className="p-5"
              src="https://i.ibb.co/pdZrqjx/24122021-6832755.jpg"
              alt=""
            />
            <hr />
            <h1 className="py-5 text-2xl font-semibold">Novel</h1>
            <p className="text-sm">
              Engaging narratives exploring human experiences, emotions, and
              relationships within various settings, often delving deep into
              character development and societal themes.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleButton("Novel")}
              className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white"
            >
              View Books
            </button>
          </div>
        </div>
        <div
          className="cursor-pointer hover:bg-[#76b74817] p-5 flex flex-col justify-between text-center"
          onClick={() => handleButton("Fantasy")}
        >
          <div>
            <img
              className="p-5"
              src="https://i.ibb.co/FmhJt8s/23437331-6783312.jpg"
              alt=""
            />
            <hr />
            <h1 className="py-5 text-2xl font-semibold">Fantasy</h1>
            <p className="text-sm">
              Immerse yourself in magical realms, mythical creatures, and epic
              adventures, where heroes battle dark forces and embark on quests
              of destiny.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleButton("Fantasy")}
              className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white"
            >
              View Books
            </button>
          </div>
        </div>
        <div
          className="cursor-pointer hover:bg-[#76b74817] p-5 flex flex-col justify-between text-center"
          onClick={() => handleButton("Fiction")}
        >
          <div>
            <img
              className="p-5"
              src="https://i.ibb.co/gS0k3xj/24013627-6881717.jpg"
              alt=""
            />
            <hr />
            <h1 className="py-5 text-2xl font-semibold">Fiction</h1>
            <p className="text-sm">
              Diverse stories crafted from the imagination, spanning genres and
              themes, offering readers escapes into alternate realities,
              thought-provoking reflections, and emotional journeys.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleButton("Fiction")}
              className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white"
            >
              View Books
            </button>
          </div>
        </div>
        <div
          className="cursor-pointer hover:bg-[#76b74817] p-5 flex flex-col justify-between text-center"
          onClick={() => handleButton("Epic")}
        >
          <div>
            <img
              className="p-5"
              src="https://i.ibb.co/xSBq23n/24998001-7007264.jpg"
              alt=""
            />
            <hr />
            <h1 className="py-5 text-2xl font-semibold">Epic</h1>
            <p className="text-sm">
              Grand tales of heroism, conquests, and legendary figures set
              against sweeping landscapes, showcasing the triumph of the human
              spirit amidst monumental challenges.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleButton("Epic")}
              className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white"
            >
              View Books
            </button>
          </div>
        </div>
        <div
          className="cursor-pointer hover:bg-[#76b74817] p-5 flex flex-col justify-between text-center"
          onClick={() => handleButton("Science Fiction")}
        >
          <div>
            <img
              className="p-5"
              src="https://i.ibb.co/ftSsfGR/23870759-6851552.jpg"
              alt=""
            />
            <hr />
            <h1 className="py-5 text-2xl font-semibold">Science Fiction</h1>
            <p className="text-sm">
              Journey to futuristic worlds, exploring speculative technologies,
              alien civilizations, and the impact of scientific advancements on
              society and the human condition.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleButton("Science Fiction")}
              className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white"
            >
              View Books
            </button>
          </div>
        </div>
        <div
          className="cursor-pointer hover:bg-[#76b74817] p-5  flex flex-col justify-between text-center"
          onClick={() => handleButton("Gothic")}
        >
          <div>
            <img
              className="p-5"
              src="https://i.ibb.co/KKMH5w6/8651954.jpg"
              alt=""
            />
            <hr />
            <h1 className="py-5 text-2xl font-semibold">Gothic</h1>
            <p className="text-sm">
              Engaging narratives exploring human experiences, emotions, and
              relationships within various settings, often delving deep into
              character development and societal themes.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleButton("Gothic")}
              className="border rounded-full text-center my-6 w-full text-[#666666] font-normal text-sm py-2 hover:bg-[#76b748e3] hover:text-white"
            >
              View Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCategories;
