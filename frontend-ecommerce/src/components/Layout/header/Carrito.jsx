/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FlexRow } from "../../StyledMain";
import "../../../car.css";
import cesta from "../../../assets/Img/cesta.png";

export const Carrito = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  color,
  hover,
  pageUsed,
  pagePayment,
}) => {
  const [active, setActive] = useState(false);
  allProducts = [];

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
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
                    <div className="info-cart-product">
                      <img
                        src={product.img}
                        alt=""
                        style={{ width: 120, height: 120 }}
                      />
                      <span className="cantidad-producto-carrito">
                        {product.quantity}
                      </span>

                      <div
                        style={{
                          display: FlexRow,
                          justifyContent: "space-around",
                          marginTop: 30,
                          textAlign: "center",
                        }}
                      >
                        <p className="titulo-producto-carrito">
                          {product.nameProduct}
                        </p>
                        <span className="precio-producto-carrito">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              <Link to={"/payment"}>
                <button className="btn-clear-all">Pagar</button>
              </Link>

              <button className="btn-clear-all" onClick={onCleanCart}>
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
                <h4>Aún no tienes compras en tienda</h4>
                <span>
                  Pero puedes hacer tu pedido online ¡y te lo mandamos a casa!
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
