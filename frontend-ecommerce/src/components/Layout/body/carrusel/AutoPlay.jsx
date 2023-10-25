import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPLay = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const totalSlides = React.Children.count(children);

    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [children]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <div
      style={{
        overflow: "hidden",
        height: "850px",
        position: "sticky",
        top: "0",
        zIndex: "-100",
      }}
    >
      <Slider {...settings}>
        {React.Children.map(children, (child) => (
          <div>{child}</div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPLay;
