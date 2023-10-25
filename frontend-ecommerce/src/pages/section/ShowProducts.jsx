/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DivCards, ContainerCard, Tiltle, Card, CardContent, CardMedia, Price } from "./SectionsStyled";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import FormatPrice from "../../utils/formatPrices";

const ShowProducts = ({ products, currentPage, productsPerPage }) => {
  // Calcular el índice de inicio y fin en función de la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  // const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <DivCards>
      {products.map((item) => (
        <ContainerCard key={item.id}>
          <Card>
            <div className="BoxImg">
              <Link
                to={`/InfoProducts/${item.name}`}
                style={{ textDecoration: "none" }}
              >
                <CardMedia src={item.img_video} alt={item.name} />
              </Link>
            </div>
            <CardContent>
              <Tiltle>{item.name}</Tiltle>
              <Price>
                <FormatPrice price={item.price}/>
                <Link to={`/InfoProducts/${item.name}`}>
                  <GiShoppingBag />
                </Link>
              </Price>
            </CardContent>
          </Card>
        </ContainerCard>
      ))}
    </DivCards>
  );
};

export default ShowProducts;
