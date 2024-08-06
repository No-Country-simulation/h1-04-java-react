import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import DoctorContext from "../context/DoctorContext";

const PrivateRoute = ({ children, role }) => {
  const { authData } = useContext(DoctorContext);

  // Si authData es null, muestra un indicador de carga
  if (authData === null) {
    return <div>Loading...</div>; // Puedes reemplazar esto con un spinner de carga o cualquier otro indicador
  }

  if (!authData) {
    return <Navigate to='/' />;
  }

  if (authData.role !== role) {
    return <Navigate to='/' />;
  }

  return children;
};

export default PrivateRoute;
