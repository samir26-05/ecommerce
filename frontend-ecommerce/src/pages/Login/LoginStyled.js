import styled from "styled-components";

//********************************
//Componentes Principales

export const MainDiv = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

export const Section1 = styled.div`
  box-sizing: border-box;
  width: 50%;
  overflow: hidden;
`;

export const Section2 = styled.div`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//********************************
//Componentes Secundarios

export const LoginBox = styled.div`
  box-sizing: border-box;
  width: 50%;
  padding: 5%;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);

  .LoginBoxTiltle {
    margin-bottom: 70px;
    color: #000000;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
  }

  form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: #000000;
    font-size: 17px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 3px;
  }

  a:hover {
    background: #000000;
    color: #ffffff;
  }

  a span {
    position: absolute;
    display: block;
  }

  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #000000);
    animation: btn-anim1 1.5s linear infinite;
  }

  a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #000000);
    animation: btn-anim2 1.5s linear infinite;
    animation-delay: 0.375s;
  }

  a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #000000);
    animation: btn-anim3 1.5s linear infinite;
    animation-delay: 0.75s;
  }

  a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #ffffff);
    animation: btn-anim4 1.5s linear infinite;
    animation-delay: 1.125s;
  }

  p:last-child {
    margin: 0;
    margin-top: 5%;
    color: #000000;
    font-size: 14px;
  }
  a.a2 {
    color: #4e4e4e;
    text-decoration: none;
    background-color: transparent;
  }
  a.a2:hover {
    background: #fff;
    color: #000000;
  }
`;

export const LoginBoxInput = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 15px 0;
    font-size: 16px;
    color: #000000;
    margin-bottom: 40px;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
    background: transparent;
  }
  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 20px;
    color: #000000;
    pointer-events: none;
    transition: 0.2s;
  }
  input:focus ~ label,
  input:valid ~ label {
    top: -30px;
    left: 0;
    color: #000000;
    font-size: 15px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    50%,
    100% {
      left: 100%;
    }
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }

    50%,
    100% {
      top: 100%;
    }
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }

    50%,
    100% {
      right: 100%;
    }
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }

    50%,
    100% {
      bottom: 100%;
    }
  }
`;

export const Redes = styled.div`
  position: relative;
  top: 40px;

  .socail-media {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 20px;
    list-style: none;
  }

  .socail-media li a {
    width: 35px;
    height: 35px;
    background-color: #000000;
    display: flex;
    overflow: hidden;
    align-items: center;
    align-content: center;
    justify-content: center;
    position: relative;
    z-index: 9;
    border: 1px solid #000000;
  }

  .socail-media li a:hover {
    background-color: #ffffff;
    border: 1px solid #000000;
  }

  .socail-media li a svg {
    width: 18px;
    height: 18px;
    -o-object-fit: contain;
    object-fit: contain;
    filter: invert(100%) sepia(0%) saturate(7455%) hue-rotate(57deg)
      brightness(108%) contrast(105%);
  }

  .socail-media li a:hover svg {
    animation: fadeInLeft 0.3s linear both;
    filter: invert(52%) sepia(85%) saturate(2286%) hue-rotate(54deg)
      brightness(0%) contrast(100%);
    color: red;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
`;

export const Error = styled.div`
  position: relative;
  bottom: 40px;
  font-size: 0.8rem;

  div {
    color: #bd0d0d;
  }
`;
