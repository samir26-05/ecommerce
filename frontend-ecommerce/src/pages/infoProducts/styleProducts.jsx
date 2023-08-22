import styled from "styled-components";

export const MainDiv = styled.div`
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
height: 100vh;
width: 100vw;
`;

export const BoxMain = styled.div`
width: 100%;
height: 87%;
box-sizing: border-box;
display: flex;
flex-direction: row;
`;

export const Section1 = styled.div`
width: 50%;
height: 100%;
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
`; 

export const Video = styled.video`
height: 100%;
box-sizing: border-box;
margin: 0;
object-fit: cover;
`;

export const Section2 = styled.div`
width: 50%;
height: 100%;
box-sizing: border-box;
margin: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Title = styled.div`
width: 80%;
font-size: 2.5rem;
position: relative;
bottom: 25%;
font-weight: 600;
font-family: 'Times New Roman', Times, serif;
`;

export const Reference = styled.div`
width: 80%;
font-size: 0.8rem;
position: relative;
bottom: 25%;
color: #747474;
font-weight: 700;
`;

export const Price = styled.div`
width: 80%;
font-size: 1.5rem;
position: relative;
bottom: 23%;
font-weight: 500;
`;

export const TitleSize = styled.div`
width: 80%;
font-size: 1.3rem;
position: relative;
bottom: 15%;
font-weight: 600;
`;

export const Sizes = styled.ul`
width: 60%;
font-size: 1.2rem;
position: relative;
bottom: 10%;
font-weight: 600;
display: flex;
justify-content: space-between;
`;

export const Size = styled.button`
background-color: #fff;
border: 1.5px solid #8f8f8f;
width: 40px;
height: 40px;
border-radius: 50px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-weight: 300;
cursor: pointer;
font-size: 1rem ;
:hover{
    border: 1.5px solid #000000;
    cursor: pointer;
}
`;

export const ButtonBuys = styled.button`
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 17px;
  border-radius: 0.5em;
  background: transparent;
  border: 1px solid #000000;

:active {
  color: #000000;
}

:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #000000;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

:hover {
    border: none;
  color: #ffffff;
  border: 1px solid #000000;
}

:hover:before {
    border: none;
  top: -35%;
  background-color: #000000;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

:hover:after {
    border: none;
  top: -45%;
  background-color: #000000;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
`;

export const Favorites = styled.div`

`;



