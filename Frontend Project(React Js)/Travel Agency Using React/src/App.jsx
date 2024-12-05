import BookNow from "./Components/BookNow";
import Contact from "./Components/Contact";
import Domestic from "./Components/Domestic";
import Gallery from "./Components/Gallery";
import International from "./Components/International";
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
      element: <Domestic />,
    },
    {
      path: "/international",
      element: <International />,
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
