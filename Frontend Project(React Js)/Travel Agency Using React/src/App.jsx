import BookNow from "./Components/BookNow";
import Contact from "./Components/Contact";
import DomesticComp from "./Components/DomesticComp";

import Gallery from "./Components/Gallery";

import Packages from "./Components/Packages";
import Review from "./Components/Review";
import HomePage from "./Pages/HomePage";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/packages",
      element: <Packages />,
    },
    {
      path: "/domestic",
      element: <DomesticComp />,
    },

    {
      path: "/Booknow",
      element: <BookNow />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/review",
      element: <Review />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
