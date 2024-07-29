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
    const getDoctors = async (token) => {
      try {
        const data = await fetchDoctors(token);
        setDoctors(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Restaurar authData desde localStorage
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      const parsedAuthData = JSON.parse(storedAuthData);
      setAuthData(parsedAuthData);
      getDoctors(parsedAuthData.token);
    } else {
      getDoctors(null);
    }
  }, []);

  return (
    <DoctorContext.Provider
      value={{ doctors, loading, error, authData, login, logout, notes, setNotes }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;
