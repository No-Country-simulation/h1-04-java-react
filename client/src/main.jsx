import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DoctorProvider } from "./context/DoctorContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DoctorProvider>
      <App />
    </DoctorProvider>
  </React.StrictMode>
);