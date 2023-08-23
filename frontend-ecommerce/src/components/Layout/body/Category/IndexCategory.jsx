import React from "react";
import { ContainerFather, ContainerH, Card } from "./StyledCategory";
import CardCategory from "./CardCategory";

import Camisetas from "./ImgCategory/Camisetas.jpg";
import Camisas from "./ImgCategory/Camisas.jpg";
import Jeans from "./ImgCategory/Jeans.jpg";
import Sudaderas from "./ImgCategory/Sudaderas.jpg";
import Zapatillas from "./ImgCategory/Zapatillas.jpg"; 

const IndexCategory = () => {
  const card = [
    { name: "Camisetas", img: Camisetas },
    { name: "Camisas", img: Camisas },
    { name: "Sudaderas", img: Jeans },
    { name: "Jeans", img: Sudaderas },
    { name: "Zapatillas", img: Zapatillas },
  ];
  return (
    <ContainerFather>
      <div>
        <h2>Categorias</h2>
      </div>
      <ContainerH>
        <CardCategory array={card}/>
      </ContainerH>
    </ContainerFather>
  );
};

export default IndexCategory;
