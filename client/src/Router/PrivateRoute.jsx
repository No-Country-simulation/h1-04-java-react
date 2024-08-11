/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import DoctorContext from "../context/DoctorContext";

const PrivateRoute = ({ children, role }) => {
  const { authData } = useContext(DoctorContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí asumimos que authData puede estar en proceso de carga
    if (authData !== null) {
      setLoading(false);
    }
  }, [authData]);

  if (loading) {
    // Mientras se está verificando la autenticación, podrías mostrar un loader o una pantalla en blanco
    return <div>Loading...</div>;
  }

  // Si authData es null, redirige a '/'
  if (authData === null) {
    return <Navigate to='/' />;
  }

  // Si el rol no coincide, redirige a '/'
  if (authData.role !== role) {
    return <Navigate to='/' />;
  }

  // Si todo está bien, muestra los hijos
  return children;
};

export default PrivateRoute;