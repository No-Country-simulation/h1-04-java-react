import Router from "./Router/Routers.jsx";
import "./App.css";
import { useContext } from "react";
import DoctorContext from "./context/DoctorContext.jsx";

function App() {
  const { authData } = useContext(DoctorContext);
  console.log(authData);
  return (
    // <div className='flex h-full  justify-center items-center'>
    <Router />
    // </div>
  );
}

export default App;
