/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardContent } from "@mui/material";
import { ContainerCard, Tiltle } from "./SectionsStyled";
import { Link } from "react-router-dom";
import { Imagen } from "./Sections";
import { Price } from "../infoProducts/styleProducts";
import { GiShoppingBag } from "react-icons/gi";
import { useCart } from "../../components/Layout/body/products/CardContext";
import { useState } from "react";

const FilterSections = ({ category, sectionProducts}) => {

  const { cart, updateCart } = useCart();
  const [pages, setPages] = useState(1); // Cambio en el estado de la página actual
  const itemsPerPage = 15;

   // Calcular el índice de inicio y fin en función de la página actual
   const startIndex = (pages - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const visibleProducts = sectionProducts.slice(startIndex, endIndex);

  const onAddProduct = (product) => {
    const updatedCart = Array.isArray(cart) ? [...cart] : [];
    const existingProduct = updatedCart.find(
      (item) => item.product_id === product.product_id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    updateCart(updatedCart);
    // Actualizar la página actual después de agregar un producto
    setPages(Math.ceil((updatedCart.length + 1) / itemsPerPage));
  };
  const filterCategories = sectionProducts.filter((products) => products.category.category === category)

  return (
    <>
      {filterCategories.map((item) => (
        <ContainerCard key={item.id} style={{ width: "18%" }}>
          <Card>
            <Link to={`/InfoProducts/${item.name}`}>
              <Imagen src={item.img_video} alt={item.name} style={{ width: "100%", objectFit: "cover" }}
              />
            </Link>
            <CardContent>
              <Tiltle>{item.name}</Tiltle>
              <Price
                style={{ justifyContent: "space-between", display: "flex" }}
              >
                ${item.price}
                <GiShoppingBag
                  onClick={() => onAddProduct(item)}
                  size={"10%"}
                />
              </Price>
            </CardContent>
          </Card>
        </ContainerCard>
      ))}
    </>
  );
};

export default FilterSections;
