import React from "react";
import Slider from "react-slick";
import Button from "../components/Button";

import img1 from "../assets/f1.jpg";
import img2 from "../assets/f2.jpg";
import img3 from "../assets/f3.jpg";
import img4 from "../assets/f4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Array of images and corresponding texts
  const slides = [
    {
      img: img1,
      text: "Welcome to Your Family Hub",
      subText: "Where love, care, and memories come alive.",
    },
    {
      img: img2,
      text: "Cherish Every Moment",
      subText: "Stay connected with your loved ones.",
    },
    {
      img: img3,
      text: "Create New Memories",
      subText: "Organize, share, and celebrate together.",
    },
    {
      img: img4,
      text: "Your Family, Your World",
      subText: "Safe, joyful, and always together.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <Slider {...settings} className="absolute inset-0 z-0">
        {slides.map(({ img }, index) => (
          <div key={index} className="h-screen w-full">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="object-cover w-full h-screen"
              style={{ filter: "brightness(0.5)" }}
            />
          </div>
        ))}
      </Slider>

      {/* Fixed Buttons Top Right */}
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <Button label="Sign In" className="bg-white text-indigo-700 hover:bg-indigo-100" />
        <Button label="Sign Up" className="bg-white text-indigo-700 hover:bg-indigo-100" />
      </div>

      {/* Text Slider (sync with images) */}
      <Slider
        {...settings}
        arrows={false}
        dots={false}
        className="relative z-10 max-w-xl mx-auto h-screen flex items-center"
      >
        {slides.map(({ text, subText }, index) => (
          <div key={index} className="text-center px-6">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
              {text}
            </h1>
            <p className="text-xl text-white drop-shadow-md">{subText}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
