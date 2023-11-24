import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-5xl font-thin">Hello world <span className="font-Rancho">Travelia!</span></div>,
  },
]);

export default Router;
