import { createBrowserRouter } from "react-router-dom";
import HeartFitPage from "../pages/HeartfitPage";
import VsCorePage from "../pages/VscorePage";
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
