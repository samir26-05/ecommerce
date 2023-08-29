import { useState, useEffect } from "react";
/* material ui */
import AppBar from "@mui/material/AppBar";

/* components */
import DemoAutoPlay from "./carrusel/DemoAutoPlay";
import { ProductList } from "./products/ProductList";
import SectionsBody from "./Sections/SectionsBody";
import IndexCategory from "./Category/IndexCategory";
import AppBrand from "./BrandBody/AppBrand";

import Header from "../header/Header";
import Footer from "../footer/Footer";

{/* styles */}
import { Div } from "./styled";
import "../header/header.css";
import "../header/car.css";


export default function Body() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [userEnter, setUserEnter] = useState(false);
  const verifyEnter = () => {
    return true
  };
  
  useEffect(() => {
    const trueEnter = verifyEnter();
    setUserEnter(trueEnter);
    
    return () => {
      setUserEnter(false);
    };
  }, []);
  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#ffffff" }}>
        <Header
          products={allProducts}
          newProducts={setAllProducts}
          inTotal={total}
          newTotal={setTotal}
          cantProducts={countProducts}
          newCantProducts={setCountProducts}
          isUsedBody={userEnter}
        />
        <Div>
          <DemoAutoPlay />
          <IndexCategory></IndexCategory>
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <SectionsBody />
          <AppBrand></AppBrand>
          <Footer />
        </Div>
      </AppBar>
    </>
  );
}
