import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community";
import Blogs from "../Pages/Blogs";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PackageDetails from "../Pages/Home/TravelGuide/OurPackages/PackgeDetails.jsx/PackageDetails";
import TourGuidesProfile from "../Pages/Home/TravelGuide/TourGuides/TourGuidesProfile";
import PrivateRoute from "../SecretRoutes/PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Register></Register>,
      },
      {
        path: "/packageDetails/:id",
        element: <PackageDetails></PackageDetails>
      },
      {
        path: "/tourGuideProfile/:id",
        element: <PrivateRoute><TourGuidesProfile></TourGuidesProfile></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          
        ]
      }
    ],
  },
]);

export default Router;
