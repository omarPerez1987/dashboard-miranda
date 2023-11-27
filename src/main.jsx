import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import AppRoutes from "./Routes.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
