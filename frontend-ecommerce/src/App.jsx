import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/Home'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/home" element={<HomePage />} />
		</Route>
	)
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
