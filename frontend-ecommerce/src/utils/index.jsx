/* eslint-disable react/prop-types */
import { useCart } from "../components/Layout/body/products/CardContext";
// import { useEffect, useState } from "react";
// import axios from "axios";

const AddProduct = ({ product, children }) => {
  const { cart, updateCart } = useCart();
  // const [stock, setStock] = useState(null);

  // useEffect(() => {
  //   async function fetchProductStock() {
  //     try {
  //       const response = await axios.get(
  //         `/product/${product.product_id}/stock`
  //       );
  //       setStock(response.data.stock);
  //     } catch (error) {
  //       console.error("Error al obtener el stock del producto:", error);
  //     }
  //   }

  //   fetchProductStock();
  // }, [product.product_id]);

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

  return (
    <div style={{ cursor: "pointer" }} onClick={() => onAddProduct(product)}>
      {children}
    </div>
  );
};

export default AddProduct;
