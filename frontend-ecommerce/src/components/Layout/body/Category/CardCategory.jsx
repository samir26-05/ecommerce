import { Card, DivCategory, Img } from "./StyledCategory";

// eslint-disable-next-line react/prop-types
const CardCategory = ({ array }) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {array.map((item, index) => (
        <DivCategory key={index}>
          <Card key={index}>
            <Img src={item.img} alt="" />
          </Card>
          <p>{item.name}</p>
        </DivCategory>
      ))}
    </>
  );
};

export default CardCategory;
