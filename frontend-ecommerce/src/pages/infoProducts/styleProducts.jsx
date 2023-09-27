import styled from "styled-components";

export const MainDiv = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
`;

export const BoxMain = styled.div`
  padding-top: 3.5%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
`;

export const Section1 = styled.div`
  width: 100%;
  height: 69.2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  box-sizing: border-box;
`;

export const Section2 = styled.div`
  width: 100%;
  height: 69.2%;
  box-sizing: border-box;
  display: grid;
  grid-column: 1fr;
  grid-template-rows: 6fr 5fr 5fr 5fr 5fr 5fr;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  .Tiltle {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 2px;
  }

  .Reference {
    width: 100%;
    height: 10%;
    padding-left: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    font-size: 0.7rem;
    color: #636363;
    font-weight: 600;
  }

  .Price {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const ColorProducts = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  display: flex;
  align-items: start;
  flex-direction: column;
  .Tiltle {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0.5% 0;
  }
  .ColoresBox {
    display: flex;
    gap: 1%;
    width: 100%;
    height: 100%;
  }
  .Colores {
    display: flex;
    width: 7%;
    height: 80%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    :hover {
      border: 1.5px solid #000000;
      cursor: pointer;
    }
  }
`;

export const Sizes = styled.ul`
  margin-top: 2%;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  display: flex;
  align-items: start;
  flex-direction: column;
  .Tiltle {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0.5% 0;
  }
  .SizeBox {
    margin: 0.5% 0;
    display: flex;
    flex-direction: row;
    gap: 1%;
    width: 100%;
  }
  .Size {
    background-color: transparent;
    border: 1.5px solid #777777;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    cursor: pointer;
    font-size: 1rem;
    :hover {
      border: 1.5px solid #000000;
    }
  }
`;

export const ButtonBuys = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  display: flex;
  align-items: start;
  font-weight: 600;
`;
export const Buys = styled.button`
  transition: all 0.2s ease-in;
  display: inline-block;
  position: relative;
  overflow: hidden;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 17px;
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

export const Favorites = styled.div``;
