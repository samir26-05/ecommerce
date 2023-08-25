import React from "react";
import { Card, DivCategory } from "./StyledCategory";

const CardCategory = ({ array }) => {
  return (
    <>
      {array.map((item, index) => (
        <DivCategory key={index}> 
          <Card key={index} backg={item.img}></Card>

            <p>{item.name}</p>

          
        </DivCategory>
      ))}
    </>
  );
};

export default CardCategory;
