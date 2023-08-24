import {
  Div,
  ContainerPrincipal,
  ContainerCard,
  Card,
  CardMedia
} from "./StyledProductList";
import { useState } from "react";
import { data } from "../../../../data";
import "../../../../car.css";

// eslint-disable-next-line react/prop-types
export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [shoppingCarProducts, setShoppingCarProducts] = useState(
    window.localStorage.getItem("productList")
  );

  const setLocalStorage = (value) => {
    try {
      setShoppingCarProducts(...shoppingCarProducts, value);
      window.localStorage.setItem("productList", value);
      console.log(window.localStorage.getItem("productList"));
    } catch (error) {
      console.error(error.message);
    }
  };

  const onAddProduct = (product) => {
    setLocalStorage(product);
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <Div>
      <ContainerPrincipal>
        {data.map((product) => (
          <ContainerCard key={product.id}>
            <Card onClick={() => onAddProduct(product)} >
              <CardMedia src={product.img} alt={product.nameProduct} daata={product.nameProduct} />
              {/* <CardContent>
                <Tiltle>{product.nameProduct}</Tiltle>
                <Typography>Ref 5403/171/800.</Typography>
                <Typography>${product.price}</Typography>
              </CardContent> */}
            </Card>
          </ContainerCard>
        ))}
      </ContainerPrincipal>
    </Div>
  );
};

export default ProductList;
