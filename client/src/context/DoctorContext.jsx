/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { fetchDoctors } from "../services/doctorServices";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState("");

  const [authData, setAuthData] = useState(null);

  const login = (data) => {
    setAuthData(data);
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("authData");
  };

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDoctors();

    // Restaurar authData desde localStorage
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      setAuthData(JSON.parse(storedAuthData));
    }
  }, []);

  return (
    <DoctorContext.Provider
      value={{
        doctors,
        loading,
        error,
        authData,
        login,
        logout,
        notes,
        setNotes,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;
