import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Login from "../Components/Login/Login.jsx";
import Register from "../Components/Register/Register.jsx";
import Error404 from "../Components/Error404/Error404.jsx";
import HomePatient from "../Components/Patient/HomePatient/HomePaciente.jsx";
import HomeDoctor from "../Components/Doctor/HomeDoctor/HomeDoctor.jsx";
import Turn from "../Components/Patient/Turn/Turn.jsx";
import Treatments from "../Components/Patient/Treatments/Treatments.jsx";
import Treatment from "../Components/Patient/Treatment/Treatment.jsx";
import NewTurn from "../Components/Patient/Turn/NewTurn/NewTurn.jsx";
import TurnCalendar from "../Components/Patient/Turn/TurnCalendar/TurnCalendar.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <div className='bg-white w-[360px] h-[800px] flex flex-col justify-between'> */}
        <NavBar />
        {/* <div className='h-full'> */}
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />

            <Route exact path='/patient' element={<HomePatient />} />
            <Route exact path='/turn-calendar' element={<TurnCalendar />} />
            <Route exact path='/new-turn' element={<NewTurn />} />
            <Route exact path='/confirm-new-turn' element={<Turn />} />
            <Route exact path='/error-new-turn' element={<Turn />} />
            <Route exact path='/view-turn' element={<Turn />} />
            
            <Route exact path='/treatments' element={<Treatments />} />
            <Route exact path='/treatment-nutrition' element={<Treatment />} />
            <Route exact path='/treatment-physical-activity' element={<Treatment />} />
            <Route exact path='/treatment-clinical-history'element={<Treatment />} />
            <Route exact path='/treatment-medication' element={<Treatment />} />
            <Route exact path='/treatment-psychology' element={<Treatment />} />
            <Route exact path='/treatment-social-work' element={<Treatment />} />
            <Route exact path='/treatment-physiotherapy' element={<Treatment />} />
            <Route exact path='/treatment-others' element={<Treatment />} />

            <Route exact path='/doctor' element={<HomeDoctor />} />

            <Route path='*' element={<Error404 />} />
          </Routes>
        {/* </div> */}
        <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
};

export default Router;