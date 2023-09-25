import { useState, useEffect } from "react";
import {
  ContainerPrincipal,
  ContainerCard,
  Card,
  CardMedia,
  Tiltle,
  CardContent,
  Price,
  ProductTituloTextH2,
} from "./StyledProductList";
import { GiShoppingBag } from "react-icons/gi";
import { Form, Link } from "react-router-dom";
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


  return (
    <>
      <ProductTituloTextH2>
        Productos Destacados
      </ProductTituloTextH2>
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
