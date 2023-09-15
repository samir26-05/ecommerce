/* eslint-disable react/prop-types */
import { Card, CardContent } from "@mui/material";
import { ContainerCard, Tiltle } from "../../components/Layout/body/products/StyledProductList";
import { Link } from "react-router-dom";
import { Price } from "../infoProducts/styleProducts";
import AddProduct from "../../utils";
import { GiShoppingBag } from "react-icons/gi";
import { Imagen } from "./StyledSections";

const ShowProducts = ({ products, currentPage, productsPerPage }) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      {currentProducts.map((item) => (
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
}

export default ShowProducts;
