import { Div } from "./styled";
import Footer from "../footer/Footer";
import DemoAutoPlay from "./DemoAutoPlay";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { ProductList } from "../header/ProductList";
import "../header/styled.css";
import "../../../car.css";
import SectionsBody from "./Sections/SectionsBody";
import Header from "../header/Header";
import IndexCategory from "./Category/IndexCategory";
import AppBrand from "./BrandBody/AppBrand";

export default function Body() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
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
