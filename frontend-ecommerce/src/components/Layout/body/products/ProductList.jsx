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
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${urlBackend}/product/`);
        setProducts(response.data.result);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }

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
                  {product.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 0,
                  })}
                  <AddProduct product={product} stock={product.stock}>
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
