import styled from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerPrincipal = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 10% 0 10%;
`;

export const ContainerCard = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: 2%;
  :hover {
    border: #000000 1px solid;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 120ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  overflow: hidden;

  ::after {
    text-align: center;
    /* content: "${({ daata }) => daata || "asdaw"}"; */
    content: "Añadir";
    position: absolute;
    left: 0;
    bottom: -50px;
    background: #000000;
    color: #fff;
    height: 2.5em;
    width: 100%;
    transition: all 90ms;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0;
  }

  :hover::after {
    bottom: 0;
    opacity: 1;
  }

  :active {
    transform: scale(0.97);
  }

  /* :active::after {
    content: "";
    height: 10%;
  } */
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 60%;
`;

export const CardContent = styled.div`
  position: absolute;
`;

export const Tiltle = styled.h3`
  position: relative;
  top: 190px;
`;

export const Typography = styled.div``;
