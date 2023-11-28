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
import Profile from "../Pages/Dashboard/TouristSection/TouristProfile";
import Booking from "../Pages/Dashboard/TouristSection/Booking";
import Wishlist from "../Pages/Dashboard/TouristSection/Wishlist";
import TourGuideProfile from "../Pages/Dashboard/TourGuideSection/TourGuideProfile";
import TourGuideAssigned from "../Pages/Dashboard/TourGuideSection/TourGuideAssigned";
import AdminProfile from "../Pages/Dashboard/AdminSection/AdminProfile";
import AddPackage from "../Pages/Dashboard/AdminSection/AddPackage";
import ManageUser from "../Pages/Dashboard/AdminSection/ManageUser";
import AllPackages from "../Pages/AllPackages/AllPackages";
import TouristStoryDetails from "../Pages/Home/TouristStory/TouristStoryDetails";
import AllStory from "../Pages/AllStory.jsx/AllStory";
import TourTypeDetails from "../Pages/Home/TourType/TourTypeDetails";
import Payment from "../Pages/Payment/Payment";
import AdminRoute from "../SecretRoutes/AdminRoute/AdminRoute";
import TourGuideRoute from "../SecretRoutes/TourGuideRoute/TourGuideRoute";


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
        path: "/allPackages",
        element: <AllPackages></AllPackages>
      },
      {
        path: "/tourGuideProfile/:id",
        element: <PrivateRoute><TourGuidesProfile></TourGuidesProfile></PrivateRoute>
      },
      {
        path: "/storyDetails/:id",
        element: <TouristStoryDetails></TouristStoryDetails>
      },
      {
        path: "/allStory",
        element: <AllStory></AllStory>
      },
      {
        path: "/tourType/:type",
        element: <TourTypeDetails></TourTypeDetails>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: '/dashboard/touristProfile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
          },
          {
            path: '/dashboard/bookings',
            element: <PrivateRoute><Booking></Booking></PrivateRoute>
          },
          {
            path: '/dashboard/wishlist',
            element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
          },
          {
            path: '/dashboard/tourGuideProfile',
            element: <TourGuideRoute><TourGuideProfile></TourGuideProfile></TourGuideRoute>
          },
          {
            path: '/dashboard/tourGuideAssigned',
            element: <TourGuideRoute><TourGuideAssigned></TourGuideAssigned></TourGuideRoute>
          },
          {
            path: '/dashboard/adminProfile',
            element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
          },
          {
            path: '/dashboard/addPackage',
            element: <AdminRoute><AddPackage></AddPackage></AdminRoute>
          },
          {
            path: '/dashboard/manageUser',
            element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
          },
          {
            path: '/dashboard/payment/:id',
            element: <Payment></Payment>
          },
        ]
      }
    ],
  },
]);

export default Router;
