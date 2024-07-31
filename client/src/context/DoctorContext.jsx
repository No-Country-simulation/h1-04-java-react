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
    sessionStorage.setItem("authData", JSON.stringify(data));
  };

  const logout = () => {
    setAuthData(null);
    sessionStorage.removeItem("authData");
  };

  useEffect(() => {
    // Restaurar authData desde sessionStorage
    const storedAuthData = sessionStorage.getItem("authData");
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
