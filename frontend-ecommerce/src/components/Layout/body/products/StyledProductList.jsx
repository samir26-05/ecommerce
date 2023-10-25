import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  padding: 0 0 2% 0;
  display: grid;
  text-align: center;
  background-color: #fff;
  grid-template-columns: repeat(4, minmax(25%, 1fr));
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  img {
    max-width: 100%;
  }
`;

export const ContainerCard = styled.div`
  box-sizing: border-box;
  margin: 2rem auto;
  width: 80%;
  background-color: #fff;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Card = styled.div`

  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.171);
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
    width: 90%;
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
  font-size: 0.75rem;
  margin: 1% 0;
  color: #636363;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  div{
    font-size: 1.8rem;
  }
`;

export const ProductTituloTextH2 = styled.h2`
  text-align: center;
  margin: 4% 0 1% 0;
  letter-spacing: 3px;

`;
