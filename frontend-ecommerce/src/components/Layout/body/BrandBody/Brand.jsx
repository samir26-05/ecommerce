import React from "react";
import { ContainerP, Prueba } from "./StyledBrand";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = ({ images }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <ContainerP>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Prueba key={index}>
            <img
              src={image}
              alt={`Brand ${index}`}
              style={{ objectFit: "contain", width: "100%", height: "50px"}}
            />
          </Prueba>
        ))}
      </Slider>
    </ContainerP>
  );
};

export default Brand;
