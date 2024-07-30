/* eslint-disable react/prop-types */
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
      <Routes>
        <Route exact path='/' element={<Login />} />
        {/* Landing Page */}
        <Route exact path='/landing' element={<Landing />} />
        {/* Admin */}
        <Route exact path='/admin' element={<Admin />} />
        {/* Patient */}
        <Route
          exact
          path='/patient'
          element={
            <PatientLayout>
              <HomePatient />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/turn-calendar'
          element={
            <PatientLayout>
              <TurnCalendar />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/new-turn'
          element={
            <PatientLayout>
              <NewTurn />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/confirm-new-turn'
          element={
            <PatientLayout>
              <Turn />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/error-new-turn'
          element={
            <PatientLayout>
              <Turn />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/view-turn'
          element={
            <PatientLayout>
              <Turn />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatments'
          element={
            <PatientLayout>
              <Treatments />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-treatment'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-studies'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-nutrition'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-physical-activity'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-clinical-history'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-medication'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-psychology'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-social-work'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-physiotherapy'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/treatment-others'
          element={
            <PatientLayout>
              <Treatment />
            </PatientLayout>
          }
        />
        <Route
          exact
          path='/profile-configuration'
          element={
            <PatientLayout>
              <ProfileConfiguration />
            </PatientLayout>
          }
        />

        {/* Doctor */}
        <Route
          exact
          path='/doctorPatient'
          element={
            <DoctorLayout>
              <Patients />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/doctorConfiguration'
          element={
            <DoctorLayout>
              <ProfileConfiguration />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/previous-consultation'
          element={
            <DoctorLayout>
              <PreviousConsultation />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/consultation'
          element={
            <DoctorLayout>
              <Consultation />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/query-completion'
          element={
            <DoctorLayout>
              <QueryCompletion />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/doctorCalendar'
          element={
            <DoctorLayout>
              <Calendar />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/doctorRecipe'
          element={
            <DoctorLayout>
              <Recipe />
            </DoctorLayout>
          }
        />
        <Route
          exact
          path='/patientLists'
          element={<DoctorLayout>{/* <patientLists /> HACER */}</DoctorLayout>}
        />
        <Route
          exact
          path='/patientRecord'
          element={<DoctorLayout>{/* <patientRecord /> HACER */}</DoctorLayout>}
        />
        <Route
          exact
          path='/medicalHistory'
          element={
            <DoctorLayout>{/* <medicalHistory /> HACER */}</DoctorLayout>
          }
        />

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
