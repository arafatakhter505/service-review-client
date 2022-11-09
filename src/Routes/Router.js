import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "./../Pages/ServiceDetails/ServiceDetails";
import MyReviews from "./../Pages/MyReviews/MyReviews";
import EditReview from "./../Pages/EditReview/EditReview";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () =>
          fetch("https://tooth-fixers-server.vercel.app/homeservices"),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
        loader: async () =>
          fetch("https://tooth-fixers-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: async ({ params }) =>
          fetch(`https://tooth-fixers-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/editreview/:id",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`https://tooth-fixers-server.vercel.app/review/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
