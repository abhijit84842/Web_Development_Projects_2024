import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import ShopCatagory from "./Pages/ShopCatagory.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Profile from "./Pages/Profile.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/men", element: <ShopCatagory /> },
      { path: "/women", element: <ShopCatagory /> },
      { path: "/kids", element: <ShopCatagory /> },
      { path: "/login", element: <LoginSignup /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
