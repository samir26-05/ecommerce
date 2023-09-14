import styled from "styled-components";

export const Div = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
`;

export const BoxUser = styled.div`
  width: 100%;
  height: 100%;

  .Header {
    height: 12.5%;
  }

  .Nav {
    height: 87.5%;
    overflow: auto;
  }


  .Main {
    width: 100%;
  }

  .Footer {
    margin-top: 6%;
  }
`;

export const BoxLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .loader {
    width: 80px;
    height: 70px;
    border: 5px solid #000;
    padding: 0 8px;
    box-sizing: border-box;
    background: linear-gradient(#fff 0 0) 0 0/8px 20px,
      linear-gradient(#fff 0 0) 100% 0/8px 20px,
      radial-gradient(farthest-side, #fff 90%, #0000) 0 5px/8px 8px content-box,
      #000;
    background-repeat: no-repeat;
    animation: l3 2s infinite linear;
  }

  @keyframes l3 {
    25% {
      background-position: 0 0, 100% 100%, 100% calc(100% - 5px);
    }

    50% {
      background-position: 0 100%, 100% 100%, 0 calc(100% - 5px);
    }

    75% {
      background-position: 0 100%, 100% 0, 100% 5px;
    }
  }

  .LoadingTitle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    font-size: 28px;
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
  }

  .spinner.center {
    margin: 10%;
  }

  .spinner .spinner-blade {
    position: absolute;
    left: 0.4629em;
    bottom: 0;
    width: 0.074em;
    height: 0.2777em;
    border-radius: 0.0555em;
    background-color: transparent;
    -webkit-transform-origin: center -0.2222em;
    -ms-transform-origin: center -0.2222em;
    transform-origin: center -0.2222em;
    animation: spinner-fade9234 1s infinite linear;
  }

  .spinner .spinner-blade:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  .spinner .spinner-blade:nth-child(2) {
    -webkit-animation-delay: 0.083s;
    animation-delay: 0.083s;
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
  }

  .spinner .spinner-blade:nth-child(3) {
    -webkit-animation-delay: 0.166s;
    animation-delay: 0.166s;
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
  }

  .spinner .spinner-blade:nth-child(4) {
    -webkit-animation-delay: 0.249s;
    animation-delay: 0.249s;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .spinner .spinner-blade:nth-child(5) {
    -webkit-animation-delay: 0.332s;
    animation-delay: 0.332s;
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
  }

  .spinner .spinner-blade:nth-child(6) {
    -webkit-animation-delay: 0.415s;
    animation-delay: 0.415s;
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
  }

  .spinner .spinner-blade:nth-child(7) {
    -webkit-animation-delay: 0.498s;
    animation-delay: 0.498s;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .spinner .spinner-blade:nth-child(8) {
    -webkit-animation-delay: 0.581s;
    animation-delay: 0.581s;
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);
  }

  .spinner .spinner-blade:nth-child(9) {
    -webkit-animation-delay: 0.664s;
    animation-delay: 0.664s;
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
  }

  .spinner .spinner-blade:nth-child(10) {
    -webkit-animation-delay: 0.747s;
    animation-delay: 0.747s;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  .spinner .spinner-blade:nth-child(11) {
    -webkit-animation-delay: 0.83s;
    animation-delay: 0.83s;
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);
  }

  .spinner .spinner-blade:nth-child(12) {
    -webkit-animation-delay: 0.913s;
    animation-delay: 0.913s;
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);
  }

  @keyframes spinner-fade9234 {
    0% {
      background-color: #69717d;
    }

    100% {
      background-color: transparent;
    }
  }
`;
