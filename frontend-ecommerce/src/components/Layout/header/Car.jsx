/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import cesta from "../../../assets/Img/cesta.png";
import { useCart } from "../body/products/CardContext";
import { MdAdd } from "react-icons/Md";
import { PiHandbag } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/Ai";
import { Car } from "./CarStyled";
import AddProduct from "../../../utils";

export const Carrito = ({ hover, pageUsed, pagePayment, color }) => {
  const [active, setActive] = useState(false);
  const { cart, updateCart } = useCart();

  const allProducts = cart;
  const countProducts = Array.isArray(cart)
    ? cart.reduce((count, product) => count + product.quantity, 0)
    : 0;
  const total = Array.isArray(cart)
    ? cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )
    : 0;

  const onDeleteProduct = (product) => {
    const results = cart.filter(
      (item) => item.product_id !== product.product_id
    );
    updateCart(results);
  };

  const onDellProduct = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(
      (item) => item.product_id === product.product_id
    );
    if (existingProduct) {
      if (existingProduct.quantity > 0) {
        existingProduct.quantity--;
      }
    } else {
      alert("La cantidad mínima permitida es 1.");
      // updatedCart.push({ ...product, quantity: 1 });
    }

    updateCart(updatedCart);
  };

  const onCleanCart = () => {
    updateCart([]);
  };

  return (
    <Car>
      <PiHandbag
        onClick={() => setActive(!active)}
        style={{
          fill: hover
            ? "#000"
            : "#fff" && pageUsed
            ? "#000"
            : color && pagePayment
            ? "#000"
            : color,
          fontSize: "39px",
          paddingTop: "10%",
          cursor: "pointer"
        }}
      />
      <div className="Count">
        <span>{countProducts}</span>
      </div>
      <div className={`BoxProducts ${active ? "" : "ProductsOff"}`}>
        {allProducts.length ? (
          <>
            <div className="Products">
              {allProducts.map((product) => (
                <div className="Product" key={product.product_id}>
                  {" "}
                  {/* Aqui se cambió key={product.id} para quitar los errores de key*/}
                  <div className="infoProduct">
                    <div className="Imgn">
                      <Link to={`/InfoProducts/${product.name}`}>
                        <img src={product.img_video} alt={product.name} />
                      </Link>
                    </div>
                    <div className="cantidad">
                      <span>{product.quantity}</span>
                    </div>
                    <div className="Infoon-product">
                      <Link
                        to={`/InfoProducts/${product.name}`}
                        className="link"
                      >
                        <p className="Tiltle">{product.name}</p>
                        <span className="Size">Talla: {product.size.size}</span>
                      </Link>
                      <span className="Price">$ {product.price}</span>
                    </div>
                    <div className="Buttons">
                      <AddProduct product={product} stock={product.stock}>
                        <button className="btnAdd">
                          <MdAdd
                            className="iconAdd"
                            id="Fill"
                            size={"14.5px"}
                          />
                        </button>
                      </AddProduct>
                      <button className="btnDell">
                        <AiOutlineMinus
                          className="iconDell"
                          onClick={() =>
                            product.quantity === 1
                              ? onDeleteProduct(product)
                              : onDellProduct(product)
                          }
                          id="Fill"
                          size={"14px"}
                        />
                      </button>
                      <button className="btndele">
                        <svg
                          viewBox="0 0 15 17.5"
                          height="15"
                          width="12.5"
                          xmlns="http://www.w3.org/2000/svg"
                          className="iconDele"
                          onClick={() => onDeleteProduct(product)}
                        >
                          <path
                            transform="translate(-2.5 -1.25)"
                            d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                            id="Fill"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="Total">
              <div className="Tiltle">
                <h3>
                  Total:{" "}
                  {total.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 0,
                  })}
                </h3>
              </div>
            </div>
            <div className="btns">
              <Link to={"/payment"} style={{ textDecoration: "none" }}>
                <button className="fancy pa">
                  <span className="top-key"></span>
                  <span className="text">Pagar</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </button>
              </Link>
              <button className="fancy" onClick={onCleanCart}>
                <span className="top-key"></span>
                <span className="text">Vaciar Carrito</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="Vacio">
              <img src={cesta} alt="Img Cesta" className="VacioImg" />
              <p className="Tiltle">El carrito está vacío</p>
              <p className="Text">
                Aún no tienes compras en nuestra tienda
                <br />
                <span>
                  Pero puedes ver el catalogo ¡y te lo llevamos a casa!
                </span>
              </p>
              <br />
            </div>
          </>
        )}
      </div>
    </Car>
  );
};
