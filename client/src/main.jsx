import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DoctorProvider } from "./context/DoctorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DoctorProvider>
      <App />
    </DoctorProvider>
  </React.StrictMode>
);
