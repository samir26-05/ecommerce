import { Div, ContainerPrincipal, ContainerCard, Card, CardMedia, Tiltle, CardContent, Price } from "./StyledProductList";
import { data } from "../../../../data";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCart } from './CardContext';
import "../../header/car.css";

export const ProductList = () => {

  const { cart, updateCart } = useCart();

  const onAddProduct = (product) => {
    const updatedCart = Array.isArray(cart) ? [...cart] : [];
    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    updateCart(updatedCart);
  };

  return (
    <Div>
      <ContainerPrincipal>
        {data.map((product) => (
          <ContainerCard key={product.id}>
            <Card>
            <Link to={`/InfoProducts/${product.id}`}>
              <CardMedia src={product.img} alt={product.nameProduct}/>
            </Link>
              <CardContent>
                <Tiltle>{product.nameProduct}</Tiltle>
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
    </Div>
  );
};


export default ProductList;
