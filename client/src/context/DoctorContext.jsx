// src/context/DoctorContext.js
import React, { createContext, useState, useEffect } from "react";
import { fetchDoctors } from "../services/doctorServices";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

  return (
    <DoctorContext.Provider value={{ doctors, loading, error }}>
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;
