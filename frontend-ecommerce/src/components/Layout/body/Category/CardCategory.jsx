import React from "react";
import { Card, DivCategory, Img, Text } from "./StyledCategory";

const CardCategory = ({ array }) => {
  return (
    <>
      {array.map((item, index) => (
        <DivCategory key={index}> 
          <Card key={index}>
          <Img src={item.img} alt=""  />
          </Card>
              
            <Text>{item.name}</Text>

          
        </DivCategory>
      ))}
    </>
  );
};

export default CardCategory;
