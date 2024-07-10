import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../Components/NavBar/NavBar.jsx"
import Footer from "../Components/Footer/Footer.jsx"
import Home from "../Components/Home/Home.jsx"
import Login from "../Components/Login/Login.jsx"
import Register from "../Components/Register/Register.jsx"
import Error404 from "../Components/Error404/Error404.jsx"
import Pacient from "../Components/Pacient/Pacient.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/register' element={<Register/>} />
                    <Route exact path='/pacient' element={<Pacient/>} />
                    <Route path='*' element={<Error404/>} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router
