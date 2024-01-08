import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./main.css";
import AppRoutes from "./AppRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <AppRoutes />
  </Provider>
  // </React.StrictMode>
);
