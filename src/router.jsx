import { createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound";
import MainLayout from "./layout/MainLayout";
import HomePage from "./views/HomePage";
import TrendingPage from "./views/TrendingPage";
import DetailMoviePage from "./views/DetailMoviePage";
import SearchMoviePage from "./views/SearchMoviePage";
import SearchAnalyticsMoviePage from "./views/SearchAnalyticsMoviePage";
import SearchAnalyticsMoviePageResult from "./views/SearchAnalyticsMoviePageResult";

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
      {
        path: "/movie/search",
        element: <SearchMoviePage />,
      },
      {
        path: "/movie/search-analytics",
        element: <SearchAnalyticsMoviePage />,
      },
      {
        path: "/movie/search-analytics/result",
        element: <SearchAnalyticsMoviePageResult />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
