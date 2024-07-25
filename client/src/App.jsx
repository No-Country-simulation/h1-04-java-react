import Router from "./Router/Routers.jsx";
import { useContext } from "react";
import DoctorContext from "./context/DoctorContext.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { authData } = useContext(DoctorContext);
  console.log(authData);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;