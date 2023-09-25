import styled from "styled-components";

export const Header = styled.div`
  .container-icon {
    position: relative;
  }

  .icon-cart,
  .icon-user {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .count-products {
    position: absolute;
    top: 55%;
    right: 0;
    background-color: #000;
    color: #fff;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  #contador-productos {
    color: #fff;
  }

  .container-cart-products {
    position: absolute;
    top: 95%;
    right: 90%;
    background-color: #ffffff;
    z-index: 1;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.39);
    width: 400px;
    height: 60vh;
    overflow: auto;
  }

  .hidden-cart {
    display: none;
  }

  .cart-product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .info-cart-product {
    display: flex;
    justify-content: space-between;
  }

  .info-cart-product > img {
    object-fit: contain;
    margin-right: 5%;
    transition: all 0.8s;
    cursor: pointer;
  }

  .info-cart-product > img:hover {
    transform: scale(1.2);
    transition: ease 0.8s;
  }

  .cantidad-producto-carrito {
    color: #000000;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Infoon-product {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .titulo-producto-carrito {
    color: #000000;
    font-size: 0.85rem;
    letter-spacing: 1px;
    font-weight: 400;
  }

  .precio-producto-carrito {
    color: #000;
    font-weight: 800;
    margin-top: 3%;
  }

  .containerButtons {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .btnAdd {
    background-color: transparent;
    border: none;
  }

  .iconAdd {
    transform: scale(1.2);
    transition: 0.2s linear;
  }

  .btnAdd:hover > .iconAdd {
    transform: scale(1.7);
  }

  .btnAdd:hover > .iconAdd path {
    color: rgb(7, 168, 55);
  }

  .btnDell {
    background-color: transparent;
    border: none;
    position: relative;
    bottom: 40%;
  }

  .iconDell {
    transform: scale(1.2);
    transition: 0.2s linear;
  }

  .btnDell:hover > .iconDell {
    transform: scale(1.7);
  }

  .btnDell:hover > .iconDell path {
    color: rgb(168, 7, 7);
  }

  .btndele {
    background-color: transparent;
    border: none;
  }

  .icon {
    transform: scale(1.2);
    transition: 0.2s linear;
  }

  .btndele:hover > .icon {
    transform: scale(1.5);
  }

  .btndele:hover > .icon path {
    fill: rgb(168, 7, 7);
  }

  .O {
    outline: none !important;
  }

  .cart-total {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    gap: 10px;
  }

  .cart-total h3 {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }

  .total-pagar {
    color: #000;
    font-size: 20px;
    font-weight: 700;
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
`;