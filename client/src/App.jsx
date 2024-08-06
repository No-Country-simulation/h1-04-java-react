import Router from "./Router/Routers.jsx";
import { useContext } from "react";
import DoctorContext from "./context/DoctorContext.jsx";
import "./App.css";

function App() {
  const { authData } = useContext(DoctorContext);
  console.log(authData);

  return <Router />;
}

export default App;
