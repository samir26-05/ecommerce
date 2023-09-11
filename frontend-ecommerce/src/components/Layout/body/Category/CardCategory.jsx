import { Card, DivCategory, Img } from "./StyledCategory";

// eslint-disable-next-line react/prop-types
const CardCategory = ({ array }) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {array.map((item, index) => (
        <DivCategory key={index}>
          <Card key={index}>
            <div className="img">
              <Img src={item.img} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
            </div>
          </Card>
        </DivCategory>
      ))}
    </>
  );
};

export default CardCategory;
