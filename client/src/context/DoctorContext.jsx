/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { fetchDoctors, getDoctorById } from "../services/doctorServices";
import { getPatientById } from "../services/patientServices";

const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState("");
  const [authData, setAuthData] = useState(null);
  const [recognizedText, setRecognizedText] = useState("");

  const login = (data) => {
    setAuthData(data);
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const logout = () => {
    setAuthData(null);
    localStorage.removeItem("authData");
  };

  useEffect(() => {
    // Restaurar authData desde localStorage
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      setAuthData(JSON.parse(storedAuthData));
    }
  }, []);

  useEffect(() => {
    if (authData) {
      const getDoctors = async () => {
        setLoading(true);
        try {
          const data = await fetchDoctors(authData.token);
          setDoctors(data);
        } catch (error) {
          if (error.message === "Error fetching doctor data") {
            // Token might be invalid or expired
            logout();
          } else {
            setError(error.message);
          }
        } finally {
          setLoading(false);
        }
      };

      getDoctors();
    }
  }, [authData]);

  const fetchPatientById = async (id) => {
    if (!authData) {
      throw new Error("No authentication data available");
    }
    try {
      const patientData = await getPatientById(authData.token, id);
      return patientData;
    } catch (error) {
      if (error.message === "Error fetching patient data") {
        // Token might be invalid or expired
        logout();
      }
      throw error;
    }
  };

  const fetchDoctorById = async (id) => {
    if (!authData) {
      throw new Error("No authentication data available");
    }
    try {
      const doctorData = await getDoctorById(authData.token, id);
      return doctorData;
    } catch (error) {
      if (error.message === "Error fetching doctor data") {
        // Token might be invalid or expired
        logout();
      }
      throw error;
    }
  };

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
        setRecognizedText,
        recognizedText,
        fetchPatientById,
        fetchDoctorById,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;

// import { createContext, useState, useEffect } from "react";
// import { fetchDoctors } from "../services/doctorServices";

// const DoctorContext = createContext();

// export const DoctorProvider = ({ children }) => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [notes, setNotes] = useState("");
//   const [authData, setAuthData] = useState(null);

//   const login = (data) => {
//     setAuthData(data);
//     localStorage.setItem("authData", JSON.stringify(data));
//   };

//   const logout = () => {
//     setAuthData(null);
//     localStorage.removeItem("authData");
//   };

//   useEffect(() => {
//     // Restaurar authData desde localStorage
//     const storedAuthData = localStorage.getItem("authData");
//     if (storedAuthData) {
//       setAuthData(JSON.parse(storedAuthData));
//     }
//   }, []);

//   useEffect(() => {
//     if (authData) {
//       const getDoctors = async () => {
//         setLoading(true);
//         try {
//           const data = await fetchDoctors(authData.token);
//           setDoctors(data);
//         } catch (error) {
//           if (error.message === "Error fetching doctor data") {
//             // Token might be invalid or expired
//             logout();
//           } else {
//             setError(error.message);
//           }
//         } finally {
//           setLoading(false);
//         }
//       };

//       getDoctors();
//     }
//   }, [authData]);

//   return (
//     <DoctorContext.Provider
//       value={{
//         doctors,
//         loading,
//         error,
//         authData,
//         login,
//         logout,
//         notes,
//         setNotes,
//       }}
//     >
//       {children}
//     </DoctorContext.Provider>
//   );
// };

// export default DoctorContext;
