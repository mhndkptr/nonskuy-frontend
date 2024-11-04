import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import MainLayout from "./layout/MainLayout";
import HomePage from "./views/HomePage";
import TrendingPage from "./views/TrendingPage";
import DetailMoviePage from "./views/DetailMoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/trending",
        element: <TrendingPage />,
      },
      {
        path: "/movie/:id",
        element: <DetailMoviePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
