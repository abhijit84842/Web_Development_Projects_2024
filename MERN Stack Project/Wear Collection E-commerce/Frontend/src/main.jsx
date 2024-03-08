import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import ShopConextProvider from "./Context/ShopContext.jsx";
import { Provider } from "react-redux";
import wearCollectionsStore from "./Store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={wearCollectionsStore}>
      <ShopConextProvider>
        <App />
      </ShopConextProvider>
    </Provider>
  </React.StrictMode>
);
