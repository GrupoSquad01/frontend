import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import MenuInicial from "./Pages/MenuInicial"
import Perfil from "./Pages/Perfil"

export default function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/login" element={ <Login />}></Route>
                <Route path="/menuinicial" element={ <MenuInicial />}></Route>
                <Route path="/perfil" element={ <Perfil />}></Route>
            </Routes>
        </BrowserRouter>
    )
}