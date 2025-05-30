import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
  { path: "/", element: <Layout />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
