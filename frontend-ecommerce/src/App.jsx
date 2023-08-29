import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/Home.jsx';
import UserPage from './pages/user/UserPage.jsx';
import Payment from './pages/processPayment/Payment.jsx'
import InfoProducts from './pages/infoProducts/InfoProducts.jsx';
import Sections from './pages/section/Sections.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<HomePage />} />
			<Route path="/user" element={<UserPage />} />
			<Route path="/payment" element={<Payment />} />
			<Route path="/infoProducts" element={<InfoProducts />} />
			<Route path="/section" element={<Sections />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
