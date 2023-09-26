import styled from "styled-components";

export const ContainerFather = styled.div`
  padding: 1% 0 2% 0;
  width: 100%;
  background-color: #f5f5f5;
  box-sizing: border-box;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const DivTitle = styled.div`
  text-align: center;
  width: 100%;
  margin: 1% 0;
  h2 {
    width: 100%;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 100;
  }
`;

export const ContainerH = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .BoxH {
    width: 70%;
    gap: 2%;
    display: flex;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    height: 85%;
    margin-top: 5%;
  }
`;

export const DivCategory = styled.div`
  height: 100%;
`;


export const Card = styled.div`
  letter-spacing: 2px;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: black;

  p {
    margin: 2%;
  }

  cursor: pointer;
  :hover {
    border: 1px solid black;
  }

  .img {
    overflow: hidden;
    width: 100%;
    height: 100%;
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
