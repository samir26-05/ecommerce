import { BoxBrand } from "./BrandStyled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
const Brand = ({images}) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <BoxBrand>
      <Slider {...settings}>
        {/* eslint-disable-next-line react/prop-types */}
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Brand ${index}`}
              style={{ objectFit: "contain", width: "100%", height: "50px"}}
            />
          </div>
        ))}
      </Slider>
    </BoxBrand>
  );
};

export default Brand;
