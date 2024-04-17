import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBR7d6JG1DDeB3dne1NYuZ-rfkgOX2xzk9eDI9xqy0g&s",
    "https://images01.nicepagecdn.com/page/51/09/website-template-preview-510917.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIw_A1HYL_gSthenSwe7qpgnpw6Hhv__mTzy-C4AXWLA&s",
    "https://images01.nicepagecdn.com/page/50/01/website-template-preview-500107.jpg",
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full ">
      <img
        className="h-[344px] w-[90%] mt-[20px] mb-[20px] m-auto"
        src={slides[currentSlide]}
        alt=""
      />
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full focus:outline-none ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
