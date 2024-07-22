import Router from "./Router/Routers.jsx";
import "./App.css";
import { useContext } from "react";
import DoctorContext from "./context/DoctorContext.jsx";

function App() {
  const { authData } = useContext(DoctorContext);
  console.log(authData);
  return (
    <Router />
  );
}

export default App;
