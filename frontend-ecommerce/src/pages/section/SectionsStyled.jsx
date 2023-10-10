import styled from "styled-components";

export const PageSections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .Tiltle {
    background-color: #ffffff;
    width: 100%;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 100;
    padding: 5% 0 1% 0;
    margin: 0;
    @media (max-width: 768px) {
      padding: 20% 0 1% 0;
  }
  }
  .Category {
    z-index: 100;
    position: sticky;
    top: 7.9%;
    background-color: #ffffff;
    box-shadow: ${({ ShadowColor }) =>
      ShadowColor !== "#fff" ? "0px 0px 3px 2px #0000003b" : "none"};
    width: 100%;
    display: flex;
    justify-content: center;
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
      color: #000;
    }
    .css-1aquho2-MuiTabs-indicator {
      background-color: #000000;
    }
    @media (max-width: 768px) {
      top: 8%;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  min-height: 74vh;
  background-color: #ffffff;
  padding: 1% 10% 2% 10%;
`;

export const DivCards = styled.div`
  background-color: #ffffff;
  width: 100%;
  margin-bottom: 1%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContainerCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
`;

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.171);
  user-select: none;
  font-weight: bolder;
  font-size: 1rem;
  color: black;
  :hover {
    border: 1px solid black;
  }
  .BoxImg {
    height: 100%;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardMedia = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  text-align: start;
  margin: 0 3%;
  padding-bottom: 2%;
`;

export const Tiltle = styled.h1`
  font-size: 0.85rem;
  margin: 1% 0;
  color: #636363;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  div {
    font-size: 1.8rem;
  }
`;
