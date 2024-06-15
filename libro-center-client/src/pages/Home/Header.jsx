import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/bgparallax-04.jpg";
import img3 from "../../assets/bgparallax-05.jpg";

const Header = () => {
  return (
    <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AutoplaySlider>
    </div>
  );
};

export default Header;
