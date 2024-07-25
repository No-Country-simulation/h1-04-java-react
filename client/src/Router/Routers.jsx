import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Login from "../Components/Login/Login.jsx";
import Register from "../Components/Register/Register.jsx";
import Error404 from "../Components/Error404/Error404.jsx";
import HomePatient from "../Components/Patient/HomePatient/HomePaciente.jsx";
import Patients from "../Components/Doctor/Patients/Patients.jsx";
import Turn from "../Components/Patient/Turn/Turn.jsx";
import Treatments from "../Components/Patient/Treatments/Treatments.jsx";
import Treatment from "../Components/Patient/Treatment/Treatment.jsx";
import NewTurn from "../Components/Patient/Turn/NewTurn/NewTurn.jsx";
import TurnCalendar from "../Components/Patient/Turn/TurnCalendar/TurnCalendar.jsx";
import ProfileConfiguration from "../Components/Patient/ProfileConfiguration/ProfileConfiguration.jsx";
import Consultation from "../Components/Doctor/Consultation/Consultation.jsx"
import PreviousConsultation from "../Components/Doctor/PreviousConsultation/PreviousConsultation.jsx"
import Calendar from "../Components/Doctor/Calendar/Calendar.jsx";
import Recipe from "../Components/Doctor/Recipe/Recipe.jsx";
import QueryCompletion from "../Components/Doctor/QueryCompletion/QueryCompletion.jsx";
import { DoctorProvider } from "../context/DoctorContext.jsx";


const DoctorRoutes = () => (
  <DoctorProvider>
    <Routes>
      <Route exact path="/doctorPatient" element={<Patients />} />
      <Route exact path="/doctor-previous-consultation" element={<PreviousConsultation />} />
      <Route exact path="/doctor-consultation" element={<Consultation />} />
      <Route exact path="/doctor-query-completion" element={<QueryCompletion />} />
      <Route exact path="/doctorCalendar" element={<Calendar />} />
      <Route exact path="/doctorRecipe" element={<Recipe />} />
    </Routes>
  </DoctorProvider>
);


const Router = () => {
  const location = useLocation();
  const isDoctorRoute = location.pathname.startsWith('/doctor');

  return (
      <div className='flex flex-col min-h-screen bg-white'>
        {!isDoctorRoute && <NavBar />}
        <div className='flex-grow '>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            
            {/* Patient */}
            <Route exact path='/patient' element={<HomePatient />} />
            <Route exact path='/turn-calendar' element={<TurnCalendar />} />
            <Route exact path='/new-turn' element={<NewTurn />} />
            <Route exact path='/confirm-new-turn' element={<Turn />} />
            <Route exact path='/error-new-turn' element={<Turn />} />
            <Route exact path='/view-turn' element={<Turn />} />
            
            <Route exact path='/treatments' element={<Treatments />} />
            <Route exact path='/treatment-treatment' element={<Treatment />} />
            <Route exact path='/treatment-studies' element={<Treatment />} />
            <Route exact path='/treatment-nutrition' element={<Treatment />} />
            <Route exact path='/treatment-physical-activity' element={<Treatment />} />
            <Route exact path='/treatment-clinical-history' element={<Treatment />} />
            <Route exact path='/treatment-medication' element={<Treatment />} />
            <Route exact path='/treatment-psychology' element={<Treatment />} />
            <Route exact path='/treatment-social-work' element={<Treatment />} />
            <Route exact path='/treatment-physiotherapy' element={<Treatment />} />
            <Route exact path='/treatment-others' element={<Treatment />} />
            
            <Route exact path='/profile-configuration' element={<ProfileConfiguration />} />
            
            {/* Doctor */}
            <Route path="/*" element={<DoctorRoutes />} />
            
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
        {!isDoctorRoute && <Footer />}
      </div>
  );
};

export default Router;