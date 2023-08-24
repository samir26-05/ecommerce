import {
  Div,
  ContainerPrincipal,
  ContainerCard,
  Card,
  CardMedia,
  Tiltle,
  CardContent,
  Price,
} from "./StyledProductList";
import { useState } from "react";
import { data } from "../../../../data";
import "../../../../car.css";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

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
            <Card>
            <Link to={"/infoProducts"}>

              <CardMedia src={product.img} alt={product.nameProduct}/>
            </Link>
              <CardContent>
                <Tiltle>{product.nameProduct}</Tiltle>
                <Price>
                  ${product.price}
                  <GiShoppingBag
                    onClick={() => onAddProduct(product)}
                    style={{}}
                    />
                </Price>
              </CardContent>
            </Card>
          </ContainerCard>
        ))}
      </ContainerPrincipal>
    </Div>
  );
};

export default ProductList;
