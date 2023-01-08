import { createBrowserRouter, createHashRouter, Link } from "react-router-dom";
import HeartFitPage from "../pages/HeartFitPage";
import VsCorePage from "../pages/VsCorePage";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/heart-fit",
    element: <HeartFitPage />,
  },
  {
    path: "/vs-core",
    element: <VsCorePage />,
  },
]);

export default router;
