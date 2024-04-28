import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import UserPage from "../pages/UserPage/UserPage";
import App from "../App";
import ProductsPage from "../pages/productsPage/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      { path: "user", element: <UserPage /> },
      { path: "product", element: <ProductsPage /> },
      { path: "*", element: <div>404</div> },
    ],
  },
]);
