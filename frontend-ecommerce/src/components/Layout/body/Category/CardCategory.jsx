import { Link } from "react-router-dom";
import { Card, DivCategory, Img } from "./StyledCategory";

// eslint-disable-next-line react/prop-types
const CardCategory = ({ array }) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {array.map((item, index) => (
        <Link
          to={`/section/${item.name}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <DivCategory>
            <Card key={index}>
              <div>
                <div className="img">
                  <Img src={item.img} alt={item.name} />
                </div>
              </div>
              <div className="kaka">
                <div>
                  <p className="CateText">{item.name}</p>
                </div>
              </div>
            </Card>
          </DivCategory>
        </Link>
      ))}
    </>
  );
};

export default CardCategory;
