// Importing all components
import BookNow from "./Components/BookNow";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Review from "./Components/Review";
import HomePage from "./Pages/HomePage";
import InternationalPage from "./Pages/InternationalPage";
import DomesticPage from "./Pages/DomesticPage";
import AllPackagesPage from "./Pages/AllPackagesPage";

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
      element: <AllPackagesPage />,
    },
    {
      path: "/domestic",
      element: <DomesticPage />,
    },
    {
      path: "/international",
      element: <InternationalPage />,
    },

    {
      path: "/booknow",
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
