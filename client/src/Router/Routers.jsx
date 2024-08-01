import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const PatientLayout = ({ children }) => (
  <div className='flex flex-col min-h-screen bg-white'>
    <NavBar />
    <div className='flex-grow '>{children}</div>
    <Footer />
  </div>
);

const DoctorLayout = ({ children }) => (
  <div className='flex flex-col min-h-screen bg-white'>
    <div className='flex-grow '>{children}</div>
    <DoctorFooter />
  </div>
);

const Router = () => {
  return (
    <BrowserRouter>
      {/* <div className='w-full flex justify-center'>
        <div className='w-[400px]'> */}
      <Routes>
        <Route exact path='/' element={<Login />} />
        {/* Landing Page */}
        <Route exact path='/landing' element={<Landing />} />
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
          path='/confirm-new-turn'
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
          path='/error-new-turn'
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
          path='/treatment-psychology'
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
          path='/treatment-social-work'
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
          path='/treatment-physiotherapy'
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
          path='/treatment-others'
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