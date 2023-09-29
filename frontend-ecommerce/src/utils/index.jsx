/* eslint-disable react/prop-types */
import { useCart } from "../components/Layout/body/products/CardContext";
import Swal from "sweetalert2";
const AddProduct = ({ product, children, stock }) => {
  const { cart, updateCart } = useCart();

  const onAddProduct = (product) => {
    const updatedCart = Array.isArray(cart) ? [...cart] : [];
    const existingProduct = updatedCart.find(
      (item) => item.product_id === product.product_id
    );

    if (existingProduct) {
      if (existingProduct.quantity < stock) {
        existingProduct.quantity++;
        updateCart(updatedCart);
      } else {
        Swal.fire({
          icon: "error",
          title: "Cantidad de producto no disponible.",
          confirmButtonColor: "#000",
          iconColor: "red",
          color: "#000",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } else {
      if (stock > 0) {
        updatedCart.push({ ...product, quantity: 1 });
        updateCart(updatedCart);
      } else {
        Swal.fire({
          icon: "error",
          title: "Cantidad de producto no disponible.",
          confirmButtonColor: "#000",
          iconColor: "red",
          color: "#000",
        });
      }
    }
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={() => onAddProduct(product)}>
      {children}
    </div>
  );
};

export default AddProduct;
