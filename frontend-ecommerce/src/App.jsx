import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import RegisterLogin from "./pages/Login/Register.jsx";
import HomePage from "./pages/home/Home.jsx";
import UserPage from "./pages/user/UserPage.jsx";
import Payment from "./pages/processPayment/Payment.jsx";
import InfoProducts from "./pages/infoProducts/InfoProducts.jsx";
import Sections from "./pages/section/Sections.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterLogin />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/infoProducts/:name" element={<InfoProducts />} />
      <Route path="/section/:page" element={<Sections />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
