import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  console.log(import.meta.env.VITE_RECIPE_URL);
  return (
    <Slider className="mx-5 text-center" {...settings}>
      <div className="bg-green-500 p-10">
        <h3>1</h3>
      </div>
      <div className="bg-red-500 p-10">
        <h3>2</h3>
      </div>
      <div className="bg-blue-500 p-10">
        <h3>3</h3>
      </div>
      <div className="bg-yellow-500 p-10">
        <h3>4</h3>
      </div>
      <div className="bg-purple-500 p-10">
        <h3>5</h3>
      </div>
      <div className="bg-pink-500 p-10">
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default Home;
