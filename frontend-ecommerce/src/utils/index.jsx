/* ---------------- IMPORTACIONES ----------------- */
import { useCart } from "../components/Layout/body/products/CardContext";

/* ---------------- IMPORTACIONES ----------------- */

/* ------------- Función para añadir productos al carrito ---------------*/

/* export const OnAddProduct = (product) => {
  const { cart, updateCart } = useCart();
  const updatedCart = [...cart];
  const existingProduct = updatedCart.find(item => item.id === product.id);
  
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }
  
  return updateCart(updatedCart);
  
} */

export const OnAddProduct = (product) => {
  const { cart, updateCart } = useCart();
  const updatedCart = [...cart];
  const existingProduct = updatedCart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }

  // Actualiza el carrito utilizando la función proporcionada por el hook
  updateCart(updatedCart);
};

// Ahora puedes utilizar OnAddProduct en un componente de React
// eslint-disable-next-line no-unused-vars
function MiComponente() {
  // ...
  // eslint-disable-next-line no-undef
  OnAddProduct(product);
  // ...
}

/* ------------- Función para añadir productos al carrito ---------------*/
