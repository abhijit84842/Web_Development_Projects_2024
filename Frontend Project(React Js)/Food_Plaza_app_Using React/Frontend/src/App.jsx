// import { useEffect, useState } from "react";

// Page import
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import CreateAc from "./pages/CreateAc";
import AddFoodsPage from "./pages/AddFoodsPage";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // Routing in react
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/admin/adminlogin",
      element: <AdminLoginPage />,
    },
    {
      path: "/admin/createac",
      element: <CreateAc />,
    },
    {
      path: "/admin/addfoods",
      element: <AddFoodsPage />,
    },
  ]);

  // const [foodList, setFoodList] = useState(null);
  // const handleCallApi = async () => {
  //   try {
  //     let res = await fetch("http://localhost:3000/fooddata");
  //     let data = await res.json();
  //     // console.log(data);
  //     setFoodList(data);
  //   } catch (err) {
  //     console.log("cant not get data");
  //   }
  // };

  // useEffect(() => {
  //   handleCallApi();
  // }, []);
  // // console.log(foodList);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
