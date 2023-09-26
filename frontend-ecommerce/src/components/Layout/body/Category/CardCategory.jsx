import { Link } from "react-router-dom";
import { Card, Img } from "./StyledCategory";

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
          <Card key={index}>
            <div className="Img">
              <Img src={item.img} alt={item.name} />
            </div>
            <div className="Text">
              <p>{item.name}</p>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default CardCategory;
