import styled from "styled-components";

export const Car = styled.div`
  .icon-cart,
  .icon-user {
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (max-width: 768px) {
      position: relative;
      width: 35px;
      height: 35px;
      left: 30px;
    }
  }

  .Count {
    background-color: #000;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    position: fixed;
    top: 40px;
    right: 83px;
    z-index: 10;
    transition: ease 0.5s;
    cursor: pointer;
    span {
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 2px;
      font-size: 90%;
      user-select: none;
      :hover {
        bottom: 1px;
        transform: scale(0.8);
      }
    }
    @media (max-width: 768px) {
      right: 48px;
    }
  }

  .BoxProducts {
    position: absolute;
    left: 73%;
    top: 69%;
    background-color: #ffffff;
    z-index: 5;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.39);
    width: 400px;
    height: 60vh;
    overflow: auto;
    @media (max-width: 768px) {
      width: 300px;
      height: 55vh;
      top: 55px;
      left: 53px;
    }
  }

  .ProductsOff {
    display: none;
  }

  .Products {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .Product {
    width: 100%;
  }

  .infoProduct {
    display: flex;
    padding: 5%;
    border-bottom: #00000037 solid 1px;

    .Imgn {
      height: 100%;
      width: 35%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.8s;
        cursor: pointer;
      }

      img:hover {
        transform: scale(1.2);
        transition: ease 0.8s;
      }
    }
    .cantidad {
      width: 10%;
      display: grid;
      align-content: center;
      justify-content: center;

      span {
        color: #000000;
        font-weight: 600;
      }
    }
    .Infoon-product {
      width: 70%;
      color: #000000;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      font-size: 1rem;

      .link {
        text-decoration: none;
      }

      .Tiltle {
        width: 100%;
        letter-spacing: 1px;
      }

      .Price {
        width: 100%;
        font-weight: 600;
        font-size: 1rem;
      }

      .Size {
        width: 100%;
        font-weight: 600;
        font-size: 0.9rem;
      }
    }
  }

  .Buttons {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .btnAdd {
    border: none;
    background: none;
    .iconAdd {
      transform: scale(1.2);
      transition: 0.2s linear;
    }
    .iconAdd:hover {
      transform: scale(1.4);
    }
    :hover > .iconAdd path {
      color: rgb(7, 168, 55);
    }
  }

  .btnDell {
    width: 100%;
    border: none;
    background: none;
    .iconDell {
      transform: scale(1.2);
      transition: 0.2s linear;
    }
    .iconDell:hover {
      transform: scale(1.4);
    }
    :hover > .iconDell path {
      color: rgb(168, 7, 7);
    }
  }

  .btndele {
    width: 100%;
    border: none;
    background: none;
    .iconDele {
      transform: scale(1.2);
      transition: 0.2s linear;
    }
    .iconDele:hover {
      transform: scale(1.4);
    }
    :hover > .iconDele path {
      fill: rgb(168, 7, 7);
    }
  }

  .Total {
    display: flex;
    flex-direction: row;
    padding: 5%;
    .Tiltle {
      width: 100%;
      height: 100%;
      text-align: center;
      h3 {
        height: 100%;
        color: #000;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
  }

  .fancy {
    width: 80%;
    margin: 3% auto;
    background-color: transparent;
    border: 2px solid #000000;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 0.08em;
    outline: none;
    overflow: visible;
    padding: 1.25em 2em;
    position: relative;
    transition: all 0.1s ease-in-out;
    font-size: 13px;
  }

  .pa {
    width: 80%;
    margin: 3% auto;
    background-color: transparent;
    border: 2px solid #000000;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 0.08em;
    outline: none;
    overflow: visible;
    padding: 1.25em 2em;
    position: relative;
    transition: all 0.1s ease-in-out;
    font-size: 13px;
  }

  .fancy::before {
    content: "";
    width: 10%;
    height: 2px;
    background: rgb(0, 0, 0);
    top: 50%;
    left: 20%;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: 0.3s linear;
    @media (max-width: 768px) {
      left: 10%;
    }
  }

  .pa::before {
    content: "";
    width: 10%;
    height: 2px;
    background: rgb(0, 0, 0);
    top: 50%;
    left: 32%;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: 0.3s linear;
    @media (max-width: 768px) {
      left: 25%;
    }
  }

  .fancy .text {
    font-size: 1.12em;
    line-height: 1.33em;
    padding-left: 2em;
    display: block;
    text-align: center;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    color: black;
  }

  .fancy .top-key {
    height: 2px;
    width: 5rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #ffffff;
    transition: 0.5s ease-out, left 0.3s ease-out;
  }

  .fancy .bottom-key-1 {
    height: 2px;
    width: 5rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #ffffff;
    transition: 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.225rem;
    bottom: -2px;
    position: absolute;
    background: #ffffff;
    transition: 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy:hover {
    background: rgb(0, 0, 0);
    border-color: #000;
  }

  .fancy:hover::before {
    width: 0.9375rem;
    background: rgb(255, 255, 255);
  }

  .fancy:hover .text {
    color: rgb(255, 255, 255);
    padding-left: 1.5em;
  }

  .fancy:hover .top-key {
    left: -2px;
    width: 0px;
  }

  .fancy:hover .bottom-key-1,
  .fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }

  .Vacio {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 100;
    user-select: none;
    .VacioImg {
      width: 50%;
    }
    .Tiltle {
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin: 1%;
    }
    .Text {
      text-align: center;
    }
  }
`;
