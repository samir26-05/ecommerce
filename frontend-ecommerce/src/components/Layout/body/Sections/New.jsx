/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Swiper from "swiper/bundle";
import "./NewStyled.css";
import { Div, NewsImg, Title } from "./NewStyled";
import Slider1_1 from "../../../../assets/Img/Slider1.1-min.jpg";
import Slider1_2 from "../../../../assets/Img/Slider1.2-min.jpg";
import Slider2_1 from "../../../../assets/Img/Slider2.1-min.jpg";
import Slider2_2 from "../../../../assets/Img/Slider2.2-min.jpg";
import Slider3_1 from "../../../../assets/Img/Slider3.1-min.jpg";
import Slider3_2 from "../../../../assets/Img/Slider3.2-min.jpg";
import Slider4_1 from "../../../../assets/Img/Slider4.1-min.jpg";
import Slider4_2 from "../../../../assets/Img/Slider4.2-min.jpg";
import Slider5_1 from "../../../../assets/Img/Slider5.1-min.jpeg";
import Slider5_2 from "../../../../assets/Img/Slider5.2-min.jpeg";
import Slider6_1 from "../../../../assets/Img/Slider6.1-min.jpg";
import Slider6_2 from "../../../../assets/Img/Slider6.2-min.jpg";
import Slider7_1 from "../../../../assets/Img/Slider7.1-min.jpg";
import Slider7_2 from "../../../../assets/Img/Slider7.2-min.jpg";
import Slider8_1 from "../../../../assets/Img/Slider8.1-min.jpg";
import Slider8_2 from "../../../../assets/Img/Slider8.2-min.jpg";
import Slider9_1 from "../../../../assets/Img/Slider9.1-min.jpg";
import Slider9_2 from "../../../../assets/Img/Slider9.2-min.jpg";
import Slider10_1 from "../../../../assets/Img/Slider10.1-min.jpg";
import Slider10_2 from "../../../../assets/Img/Slider10.2-min.jpg";

const sliderData = [
  {
    name: "Ropa Oversize",
    img1: Slider1_1,
    img2: Slider1_2,
  },
  {
    name: "Sensual y casual",
    img1: Slider3_1,
    img2: Slider3_2,
  },
  {
    name: "Moda Deportiva",
    img1: Slider4_1,
    img2: Slider4_2,
  },
  {
    name: "Tonos Neutros",
    img1: Slider5_1,
    img2: Slider5_2,
  },
  {
    name: "Ropa Sostenible",
    img1: Slider6_1,
    img2: Slider6_2,
  },
  {
    name: "Estilo Retro de los años 90",
    img1: Slider7_1,
    img2: Slider7_2,
  },
  {
    name: "Estilo Bohemio",
    img1: Slider8_1,
    img2: Slider8_2,
  },
  {
    name: "Tejidos Texturizados",
    img1: Slider9_1,
    img2: Slider9_2,
  },
  {
    name: "Sastrería Moderna",
    img1: Slider10_1,
    img2: Slider10_2,
  },
  {
    name: "Estampados de Animales",
    img1: Slider2_1,
    img2: Slider2_2,
  },
];

const Contacto = () => {

  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 10,
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
        }
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <Title>Novedades que no te puedes perder</Title>
      <Div style={{ backgroundColor: "#ffffff" }}>
        <div className="slide-container swiper">
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {sliderData.map((item, index) => (
                <div className="card swiper-slide" key={index}>
                  <div className="image-content">
                    <span className="overlay"></span>
                    <NewsImg img1={item.img1} img2={item.img2}></NewsImg>
                  </div>
                  <div className="card-content">
                    <h2 className="name">{item.name}</h2>
                  </div>
                </div>
              ))}
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
