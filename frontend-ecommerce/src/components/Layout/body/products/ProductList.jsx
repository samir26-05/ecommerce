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
import { useCart } from "./CardContext";
import axios from "axios";
import "../../header/car.css";

export const ProductList = () => {
  const { cart, updateCart } = useCart();
  const [products, setProducts] = useState([]);

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
  };

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
      <h1 style={{ textAlign: "center", margin: "4% 0 1% 0", letterSpacing:"3px"}}>
        Productos Destacados
      </h1>
      <ContainerPrincipal>
        {products.slice(0, 8).map((product) => (
          <ContainerCard key={product.id}>
            <Card>
              <div className="BoxImg">
                <Link to={`/InfoProducts/${product.id}`}>
                  <CardMedia src={product.img_video} alt={product.name} />
                </Link>
              </div>
              <CardContent>
                <Tiltle>{product.name}</Tiltle>
                <Price>
                  ${product.price}
                  <GiShoppingBag
                    onClick={() => onAddProduct(product)}
                    size={"10%"}
                  />
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
