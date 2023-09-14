import { Link } from "react-router-dom";
import { Card, DivCategory, Img } from "./StyledCategory";

// eslint-disable-next-line react/prop-types
const CardCategory = ({ array }) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {array.map((item, index) => (
        <Link to={`/section/${item.name}`} key={index}>
          <DivCategory>
            <Card key={index}>
              <div className="img">
                <Img src={item.img} alt={item.name} />
              </div>
              <div>
                <p className="CateText">{item.name}</p>
              </div>
            </Card>
          </DivCategory>
        </Link>
      ))}
    </>
  );
};

export default CardCategory;
