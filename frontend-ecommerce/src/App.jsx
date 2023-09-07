import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home/Home.jsx";
import UserPage from "./pages/user/UserPage.jsx";
import Payment from "./pages/processPayment/Payment.jsx";
import InfoProducts from "./pages/infoProducts/InfoProducts.jsx";
import Sections from "./pages/section/Sections.jsx";
import NLogin from "./pages/Login/NLogin.jsx";
import RegisterLogin from "./pages/Login/RegisterLogin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<NLogin />} />
      <Route path="/register" element={<RegisterLogin/>} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/infoProducts/:id" element={<InfoProducts />} />
      <Route path="/section/:page" element={<Sections />} />
      <Route path="/register" element={<RegisterLogin/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
