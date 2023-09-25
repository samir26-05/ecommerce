/* eslint-disable react/prop-types */
import { Card, CardContent } from "@mui/material";
import { ContainerCard, Tiltle } from "../../components/Layout/body/products/StyledProductList";
import { Link } from "react-router-dom";
import { Price } from "../infoProducts/styleProducts";
import AddProduct from "../../utils";
import { GiShoppingBag } from "react-icons/gi";
import { Imagen } from "./SectionsStyled";

const ShowProducts = ({ products, currentPage, productsPerPage }) => {
  // Calcular el índice de inicio y fin en función de la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <>
      {products.map((item) => (
        <ContainerCard key={item.id} style={{ width: "19.5%" }}>
          <Card>
            <Link to={`/InfoProducts/${item.name}`}>
              <Imagen src={item.img_video} alt={item.name} style={{ width: "100%", objectFit: "cover" }}/>
            </Link>
            <CardContent>
              <Tiltle>{item.name}</Tiltle>
              <Price style={{ justifyContent: "space-between", display: "flex" }}>
                ${item.price}
                <AddProduct product={item}>
                  <GiShoppingBag/>
                </AddProduct>
              </Price>
            </CardContent>
          </Card>
        </ContainerCard>
      ))}
    </>
  );
};

export default ShowProducts;
