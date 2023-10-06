/* eslint-disable react/prop-types */
import { useCart } from "../components/Layout/body/products/CardContext";
import Swal from "sweetalert2";

const AddProduct = ({ product, children, stock, selectedSize }) => {
  const { cart, updateCart } = useCart();

  const onAddProduct = (product) => {
    if (selectedSize) {
      Swal.fire({
        icon: "success",
        title: "Producto agregado con éxito",
        iconColor: "#09ff00",
        color: "#000",
        showConfirmButton: false,
        confirmButtonColor: "#000",
        timer: 1000,
      });
      const updatedCart = Array.isArray(cart) ? [...cart] : [];
      const existingProductIndex = updatedCart.findIndex(
        (item) =>
          item.product_id === product.product_id && item.size === selectedSize
      );

      if (existingProductIndex !== -1) {
        if (updatedCart[existingProductIndex].quantity < stock) {
          updatedCart[existingProductIndex].quantity++;
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
          updatedCart.push({ ...product, quantity: 1, size: selectedSize });
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Por favor, selecciona una talla antes de agregar al carrito.",
        iconColor: "#ff0000",
        color: "#000",
        showConfirmButton: false,
        confirmButtonColor: "#000",
        timer: 500,
      });
    }
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={() => onAddProduct(product)}>
      {children}
    </div>
  );
};

export default AddProduct;
