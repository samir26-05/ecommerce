import { Link } from "react-router-dom";
import { Card, DivCards } from "./StyledCategory";

// eslint-disable-next-line react/prop-types
const CardCategory = ({ array }) => {
  return (
    <DivCards>
      {/* eslint-disable-next-line react/prop-types */}
      {array.map((item, index) => (
        <Card key={index}>
          <Link
            to={`/section/${item.name}`}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <div className="Img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="Text">
              <p>{item.name}</p>
            </div>
          </Link>
        </Card>
      ))}
    </DivCards>
  );
};

export default CardCategory;
