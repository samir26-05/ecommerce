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
  .BoxH {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1 1fr;
    grid-gap: 1%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 3 1fr;
      padding-bottom: 3%;
    }
  }
  @media (max-width: 768px) {
    height: 105%;
    padding-top: 5%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: black;
  cursor: pointer;
  :hover {
    border: 1px solid black;
  }

  .Img {
    overflow: hidden;
    width: 100%;
    height: 90%;
  }

  .Text {
    overflow: hidden;
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

export const Img = styled.img`
  transition: transform 900ms;
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    transform: scale(1.2);
  }
`;
