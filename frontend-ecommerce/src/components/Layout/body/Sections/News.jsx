// Importa el paquete swiper/bundle ## npm install swiper npm install react react-dom
import { useEffect, /* useState */ } from "react";
import Swiper from "swiper/bundle";
import "./swiper-bundle.min.css";
import { Div, NewsImg, Title } from "./Styled";
// import * as SliderImg from '../../../../assets/Img/indexSlider'
import Slider1_1 from "../../../../assets/Img/Slider1.1.jpg";
import Slider1_2 from "../../../../assets/Img/Slider1.2.jpg";
import Slider2_1 from "../../../../assets/Img/Slider2.1.jpg";
import Slider2_2 from "../../../../assets/Img/Slider2.2.jpg";
import Slider3_1 from "../../../../assets/Img/Slider3.1.jpg";
import Slider3_2 from "../../../../assets/Img/Slider3.2.jpg";
import Slider4_1 from "../../../../assets/Img/Slider4.1.jpg";
import Slider4_2 from "../../../../assets/Img/Slider4.2.jpg";
import Slider5_1 from "../../../../assets/Img/Slider5.1.jpeg";
import Slider5_2 from "../../../../assets/Img/Slider5.2.jpeg";
import Slider6_1 from "../../../../assets/Img/Slider6.1.jpg";
import Slider6_2 from "../../../../assets/Img/Slider6.2.jpg";
import Slider7_1 from "../../../../assets/Img/Slider7.1.jpg";
import Slider7_2 from "../../../../assets/Img/Slider7.2.jpg";
import Slider8_1 from "../../../../assets/Img/Slider8.1.jpg";
import Slider8_2 from "../../../../assets/Img/Slider8.2.jpg";
import Slider9_1 from "../../../../assets/Img/Slider9.1.jpg";
import Slider9_2 from "../../../../assets/Img/Slider9.2.jpg";
import Slider10_1 from "../../../../assets/Img/Slider10.1.jpg";
import Slider10_2 from "../../../../assets/Img/Slider10.2.jpg";


function Contacto() {
  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 5,
      spaceBetween: 8,
      loop: true,
      centerSlide: true,
      fadeEffect: {
        crossFade: true,
      },
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        380: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        750: {
          slidesPerView: 4,
        },
        950: {
          slidesPerView: 5,
        },
      },
    });

    return () => {
      swiper.destroy(); // Destruye el Swiper cuando el componente se desmonta
    };
  }, []);
/* 
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  }; */

  return (
    <>
      <Title>Novedades que no te puedes perder</Title>

      <Div>
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider1_1}
                    img2={Slider1_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider3_1}
                    img2={Slider3_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider4_1}
                    img2={Slider4_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider5_1}
                    img2={Slider5_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider6_1}
                    img2={Slider6_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider7_1}
                    img2={Slider7_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider8_1}
                    img2={Slider8_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider9_1}
                    img2={Slider9_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider10_1}
                    img2={Slider10_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
              <div className="card swiper-slide">
                <div className="image-content">
                  <span className="overlay"></span>

                  <NewsImg
                    className="card-image"
                    img1={Slider2_1}
                    img2={Slider2_2}
                  ></NewsImg>
                </div>

                <div className="card-content">
                  <h2 className="name">David Dell</h2>
                  <p className="description">The lorem text the section that</p>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-button-next swiper-navBtn"></div>
          <div className="swiper-button-prev swiper-navBtn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Div>
    </>
  );
}

export default Contacto;
