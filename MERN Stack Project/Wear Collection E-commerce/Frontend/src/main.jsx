import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import ShopConextProvider from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopConextProvider>
      <App />
    </ShopConextProvider>
  </React.StrictMode>
);
