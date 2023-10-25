import styled from "styled-components";

export const ContainerFather = styled.div`
  padding: 1% 0 2% 0;
  width: 100%;
  background-color: #f5f5f5;
  box-sizing: border-box;
 
`;

export const DivTitle = styled.div`
  text-align: center;
  width: 100%;
  padding: 1% 0;
  span {
    font-size: 1.8rem;
    width: 100%;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 400;
  }
`;

export const ContainerH = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const DivCards = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-gap: 1%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2 1fr;
    padding-bottom: 1.5%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
  :hover {
    border: 1px solid black;
  }

  .Img {
    overflow: hidden;
    width: 100%;
    height: 90%;
    img {
      height: 100%;
      transition: transform 900ms;
      :hover {
        transform: scale(1.2);
      }
    }
  }

  .Text {
    width: 100%;
    height: 10%;
    p {
      letter-spacing: 2px;
      text-align: center;
      font-size: 1rem;
      padding-bottom: 5%;
    }
  }
`;
