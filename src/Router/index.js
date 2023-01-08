import { createBrowserRouter, Link, useRouteError } from "react-router-dom";
import HeartFitPage from "../pages/HeartFitPage";
import VsCorePage from "../pages/VsCorePage";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement:<ErrorBoundary />
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

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

export default router;
