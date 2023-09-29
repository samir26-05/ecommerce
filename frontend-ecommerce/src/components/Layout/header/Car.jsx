/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import cesta from "../../../assets/Img/cesta.png";
import { useCart } from "../body/products/CardContext";
import { MdAdd } from "react-icons/Md";
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
    ? cart.reduce((total, product) => product.price * product.quantity, 0)
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
      updatedCart.push({ ...product, quantity: 1 });
    }

    updateCart(updatedCart);
  };
  const onCleanCart = () => {
    updateCart([]);
  };

  return (
    <Car>
      <div className="container-icon">
        <div onClick={() => setActive(!active)}>
          <svg
            className="icon-cart"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={
              hover
                ? "#000"
                : "#fff" && pageUsed
                ? "#000"
                : color && pagePayment
                ? "#000"
                : color
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="count-products">
            <span id="contador-productos">{countProducts}</span>
          </div>
        </div>
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
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
                          <span className="Size">
                            Talla: {product.size.size}
                          </span>
                        </Link>
                        <span className="Price">
                          $ {product.price.toFixed()}
                        </span>
                      </div>
                      <div className="Buttons">
                        <AddProduct product={product}>
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
                  <h3>Total: ${total.toFixed()}</h3>
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
      </div>
    </Car>
  );
};
