/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Login from "../Components/Login/Login.jsx";
import Admin from "../Components/Admin/Admin.jsx";
import Error404 from "../Components/Error404/Error404.jsx";
import HomePatient from "../Components/Patient/HomePatient/HomePaciente.jsx";
import Patients from "../Components/Doctor/Patients/Patients.jsx";
import Turn from "../Components/Patient/Turn/Turn.jsx";
import Treatments from "../Components/Patient/Treatments/Treatments.jsx";
import Treatment from "../Components/Patient/Treatment/Treatment.jsx";
import NewTurn from "../Components/Patient/Turn/NewTurn/NewTurn.jsx";
import TurnCalendar from "../Components/Patient/Turn/TurnCalendar/TurnCalendar.jsx";
import ProfileConfiguration from "../Components/Patient/ProfileConfiguration/ProfileConfiguration.jsx";
import Consultation from "../Components/Doctor/Consultation/Consultation.jsx";
import PreviousConsultation from "../Components/Doctor/PreviousConsultation/PreviousConsultation.jsx";
import Calendar from "../Components/Doctor/Calendar/Calendar.jsx";
import Recipe from "../Components/Doctor/Recipe/Recipe.jsx";
import QueryCompletion from "../Components/Doctor/QueryCompletion/QueryCompletion.jsx";
import Landing from "../Components/Landing/Landing.jsx";
import DoctorFooter from "../Components/Doctor/DoctorFooter/DoctorFooter.jsx";
import PatientRecords from "../Components/Doctor/PatientRecords/PatientRecords.jsx";
import MedicalHistory from "../Components/Doctor/PatientRecord/MedicalHistory/MedicalHistory.jsx";
import TreatmentFollowUp from "../Components/Doctor/PatientRecord/TreatmentFollowUp/TreatmentFollowUp.jsx";
import PatientStudy from "../Components/Doctor/PatientRecord/PatientStudy/PatientStudy.jsx";
import PatientMedication from "../Components/Doctor/PatientRecord/PatientMedication/PatientMedication.jsx";
import PrivateRoute from "./PrivateRoute"; // Asegúrate de importar el componente
import DoctorConfiguration from "../Components/Doctor/DoctorConfiguration/DoctorConfiguration.jsx";
import PatientList from "../Components/Doctor/PatientList/PatientList.jsx";
import OtherNavBar from "../Components/OtherNavBar/OtherNavBar.jsx";
import Download from "../Components/Download/Download.jsx";
import OtherNavBarDoctor from "../Components/OtherNavBarDoctor/OtherNavBarDoctor.jsx";
import TransplantHome from "../Components/Doctor/Transplant/TransplantHome.jsx";
import TransplantProfile from "../Components/Doctor/Transplant/TransplantProfile.jsx";
import TransplantMedicalData from "../Components/Doctor/Transplant/TransplantMedicalData.jsx";
import TransplantSearch from "../Components/Doctor/Transplant/TransplantSearch.jsx";

const PatientLayout = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 500);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[500px]'>
        <div className='flex flex-col h-screen'>
          {!isSmallScreen && <NavBar />}
          {isSmallScreen && <OtherNavBar />}
          {isSmallScreen ? (
            <div className='flex-grow ml-12'>{children}</div>
          ) : (
            <div className='flex-grow overflow-scroll'>{children}</div>
          )}
          {!isSmallScreen && <Footer />}
        </div>
      </div>
    </div>
  );
};

const DoctorLayout = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 500);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='w-full flex justify-center'>
      <div className='w-[500px]'>
        <div className='flex flex-col h-screen'>
          {isSmallScreen && <OtherNavBarDoctor />}
          {isSmallScreen ? (
            <div className='flex-grow p-5  ml-12'>{children}</div>
          ) : (
            <div className='flex-grow overflow-scroll h-full w-full p-5'>
              {children}
            </div>
          )}
          {!isSmallScreen && <DoctorFooter />}
        </div>
      </div>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route exact path='/' element={<Landing />} />
        {/* Login */}
        <Route exact path='/login' element={<Login />} />
        {/* Download */}
        <Route exact path='/download' element={<Download />} />
        {/* Admin */}
        <Route
          exact
          path='/admin'
          element={
            <PrivateRoute role='ADMIN'>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* Patient */}
        <Route
          exact
          path='/patient'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <HomePatient />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/turn-calendar'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <TurnCalendar />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/new-turn'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <NewTurn />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/view-turn'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Turn />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatments'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatments />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatment-treatment'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatment />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatment-clinical-history'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatment />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatment-studies'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatment />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatment-medication'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatment />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatment-physical-activity'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatment />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatment-nutrition'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <Treatment />
              </PatientLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/profile-configuration'
          element={
            <PrivateRoute role='PATIENT'>
              <PatientLayout>
                <ProfileConfiguration />
              </PatientLayout>
            </PrivateRoute>
          }
        />

        {/* Doctor */}
        <Route
          exact
          path='/doctorPatient'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <Patients />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/doctorConfiguration'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <DoctorConfiguration />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/transplantHome'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <TransplantHome />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/transplantProfile/:id'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <TransplantProfile />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/transplantMedicalData/:id'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <TransplantMedicalData />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/transplantSearch/:id'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <TransplantSearch />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/previous-consultation'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <PreviousConsultation />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/consultation'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <Consultation />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/query-completion'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <QueryCompletion />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/doctorCalendar'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <Calendar />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/doctorRecipe'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <Recipe />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/patientLists'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <PatientList />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/patientRecord'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <PatientRecords />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/medicalHistory'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <MedicalHistory />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/treatmentFollowUp'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <TreatmentFollowUp />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/patientStudy'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <PatientStudy />
              </DoctorLayout>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/patientMedication'
          element={
            <PrivateRoute role='DOCTOR'>
              <DoctorLayout>
                <PatientMedication />
              </DoctorLayout>
            </PrivateRoute>
          }
        />

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;