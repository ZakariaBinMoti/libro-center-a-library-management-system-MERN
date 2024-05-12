import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import img1 from "../../assets/3d-rendering-classic-interior.jpg";
import img2 from "../../assets/young-student-looking-book-library.jpg";
import img3 from "../../assets/teenage-girl-reading-book-shelf.jpg";

const Header = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        {/* <div className="relative"> <img src={img1} className="opacity-25 z-10" alt="" /> <p className="z-20 text-5xl  absolute">Hiakjfgha;kjghf;jklqwhfliqwjfhqwjhfwqhfpwqhfuwqgfoi hqwofhwquhfwiqj bgfjwq hbfuiwq</p> </div> */}
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AutoplaySlider>
    </div>
  );
};

export default Header;
