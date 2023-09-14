import styled from "styled-components";

export const Div = styled.div`
  margin: 5% 0 5% 0;
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
  width: 100%;
  margin: 1%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.171);
  backdrop-filter: blur(6px);
  text-align: center;
  cursor: pointer;
  transition: all 0.6s;
  display: flex;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;

  :hover {
    border: 1px solid black;
  }

  :active {
    transform: scale(0.95);
  }
`;

export const CardMedia = styled.img``;

export const CardContent = styled.div`
text-align: start;
margin: 0 3%;
padding-bottom: 2%;

`;

export const Tiltle = styled.h1`
  font-size: 0.75rem;
  color: #636363;
`;

export const Price = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
