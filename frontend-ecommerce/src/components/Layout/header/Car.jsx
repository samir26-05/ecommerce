/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import cesta from "../../../assets/Img/cesta.png";
import { useCart } from "../body/products/CardContext";
import { MdAdd } from "react-icons/Md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineMinus } from "react-icons/Ai";
import { Car } from "./CarStyled";
import AddProduct from "../../../utils/addCar";
import FormatPrice from "../../../utils/formatPrices";

const CarBuys = ({ hover, pageUsed, pagePayment, color }) => {
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
    }

    updateCart(updatedCart);
  };

  const onCleanCart = () => {
    updateCart([]);
  };

  return (
    <Car>
      <div>
        <LiaShoppingBagSolid
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
            cursor: "pointer",
          }}
        />
        <div className="Count">
          <span>{countProducts}</span>
        </div>
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
                      <Link to={`/InfoProducts/${product.name}`} className="link">
                        <p className="Tiltle">{product.name}</p>
                        {!product.size ? null : (product.category.category.toLowerCase() === "zapatos") ? <span className="Size">Talla: {product.shoe_size.shoe_size_name}</span> :
                          <span className="Size">Talla: {product.size}</span>}
                      </Link>
                      <span className="Price">
                        <FormatPrice price={product.price}/>
                      </span>
                    </div>
                    <div className="Buttons">
                      <AddProduct
                        product={product}
                        stock={product.stock}
                        selectedSize={true}
                      >
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
                  <FormatPrice price={total}/>
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
                  <svg className="svgIcon" viewBox="0 0 576 512">
                    <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                  </svg>
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

export default CarBuys;
