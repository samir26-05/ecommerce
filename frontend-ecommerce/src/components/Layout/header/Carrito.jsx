/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FlexRow } from "../../StyledMain";
import "./car.css";
import cesta from "../../../assets/Img/cesta.png";
import { useCart } from "../body/products/CardContext";

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
    const results = cart.filter((item) => item.id !== product.id);
    updateCart(results);
  };

  const onCleanCart = () => {
    updateCart([]);
  };

  return (
    <header>
      <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
          <svg
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
            className="icon-cart"
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
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.id}>
                    <Link to={`/InfoProducts/${product.id}`}>
                      <div className="info-cart-product">
                        <img
                          src={product.img}
                          alt=""
                          style={{ width: 120, height: 120 }}
                        />
                        <span className="cantidad-producto-carrito">
                          {product.quantity}
                        </span>

                        <div className="Infoon-product">
                          <p className="titulo-producto-carrito">
                            {product.nameProduct}
                          </p>
                          <span className="precio-producto-carrito">
                            $ {product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <button className="btndele">
                      <svg
                        viewBox="0 0 15 17.5"
                        height="17.5"
                        width="15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
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
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total.toFixed(2)}</span>
              </div>
              <Link to={"/payment"}>
                <button className="btn-clear-all">Pagar</button>
              </Link>

              <button className="btn-clear-all" onClick={onCleanCart} style={{marginTop:".8rem"}}>
                Vaciar Carrito
              </button>
              <img src="" alt="" />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "150px",
                }}
              >
                <img src={cesta} alt="" style={{ width: 200 }} />
                <h3 className="cart-empty">El carrito está vacío</h3>
                <h4 className="vacio">
                  Aún no tienes compras en nuestra tienda
                </h4>
                <span className="vacio">
                  Pero puedes ver el catalogo ¡y te lo llevamos a casa!
                </span>
                <br />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
