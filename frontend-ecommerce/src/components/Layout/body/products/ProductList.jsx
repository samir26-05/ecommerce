import { useState, useEffect } from "react";
import {
  ContainerPrincipal,
  ContainerCard,
  Card,
  CardMedia,
  Tiltle,
  CardContent,
  Price,
} from "./StyledProductList";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "axios";
import AddProduct from "../../../../utils";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/product/");
        setProducts(response.data.result);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }

    // Llama a la función fetchProducts dentro del efecto
    fetchProducts();
  }, []);

  const textStyle = {
    textAlign: "center",
    padding: "3.5% 0 0.5% 0",
    margin: 0,
    letterSpacing: "4px",
    fontWeight: "350",
    backgroundColor: "#fff",
  };

  return (
    <>
      <h1 style={textStyle}>Productos Destacados</h1>
      <ContainerPrincipal>
        {products.slice(0, 8).map((product) => (
          <ContainerCard key={product.product_id}>
            <Card>
              <div className="BoxImg">
                <Link to={`/InfoProducts/${product.name}`}>
                  <CardMedia src={product.img_video} alt={product.name} />
                </Link>
              </div>
              <CardContent>
                <Tiltle>{product.name}</Tiltle>
                <Price>
                  ${product.price}
                  <AddProduct product={product}>
                    <GiShoppingBag />
                  </AddProduct>
                </Price>
              </CardContent>
            </Card>
          </ContainerCard>
        ))}
      </ContainerPrincipal>
    </>
  );
};

export default ProductList;
