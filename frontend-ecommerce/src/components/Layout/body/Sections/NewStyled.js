import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 2%;
`;

export const NewsImg = styled.div`
  transition: all 0.2s ease-in-out;
  background-image: url(${({ img1 }) => img1});
  background-size: cover;
  height: 30rem;
  width: 100%;
  border-radius: 25px 25px 0 0;
  :hover {
    background-image: url(${({ img2 }) => img2});
  }
`;

export const Div = styled.div`
  /* Google Fonts - Poppins */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

  * {
    margin: 0;
  }

  .slide-container {
    width: 100%;
    padding: 40px 0;
  }
  .slide-content {
    margin: 0 40px;
    overflow: hidden;
    border-radius: 25px;
  }
  .card {
    border-radius: 25px;
    background-color: #fff;
  }
  /* 
  .card:hover {
    border: #000 1px solid;
  } */
  .image-content,
  .card-content {
    display: flex;
    flex-direction: column;
  }
  .card-content {
    padding: 1rem;
    gap: 10px;
  }
  .image-content {
    position: relative;
    z-index: -1;
    row-gap: 5px;
    padding: 0;
  }
  .overlay {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .overlay::before,
  .overlay::after {
    content: "";
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
  }
  .overlay::after {
    border-radius: 0 25px 0 0;
    background-color: #fff;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
    color: #5a5a5a;
  }
  .description {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }

  .swiper-navBtn {
    color: #5a5a5a;
    transition: color 0.3s ease;
  }
  .swiper-navBtn:hover {
    color: #000;
  }
  .swiper-navBtn::before,
  .swiper-navBtn::after {
    font-size: 35px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-pagination-bullet {
    background-color: #aaaaaa;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #000;
  }

  @media screen and (max-width: 768px) {
    .slide-content {
      margin: 0 10px;
    }
    .swiper-navBtn {
      display: none;
    }
  }
`;
