import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import RegisterLogin from "./pages/Login/Register.jsx";
import HomePage from "./pages/home/Home.jsx";
import UserPage from "./pages/user/UserPage.jsx";
import Payment from "./pages/processPayment/Payment.jsx";
import InfoProducts from "./pages/infoProducts/InfoProducts.jsx";
import Sections from "./pages/section/Sections.jsx";
import PageNotFound from "../src/components/PageNotFound/PageNotFound.jsx";
import {  BubblyContainer } from "react-bubbly-transitions";

const App = () => {
  return (
    <Router>
      <BubblyContainer/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/infoProducts/:name" element={<InfoProducts />} />
        <Route path="/section/:page" element={<Sections />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;