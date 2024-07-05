import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "../Components/Home/Home.jsx"
import Footer from "../Components/Home/Home.jsx"
import Home from "../Components/Home/Home.jsx"
import Login from "../Components/Home/Home.jsx"
import Register from "../Components/Home/Home.jsx"
import Error404 from "../Components/Home/Home.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<Login/>} />
                    <Route exact path='/register' element={<Register/>} />
                    <Route path='*' element={<Error404/>} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router