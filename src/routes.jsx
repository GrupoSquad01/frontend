import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./Pages/Login"
import MenuInicial from "./Pages/MenuInicial"
import Perfil from "./Pages/Perfil"
import Exercises from "./Pages/Exercises"
import ResultPage from "./Pages/ResultPage"
import Materias from "./Pages/Materias"


export default function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}></Route>
                <Route path="/login" element={ <Login />}></Route>
                <Route path="/menuinicial" element={ <MenuInicial />}></Route>
                <Route path="/perfil" element={ <Perfil />}></Route>
                <Route path="/exercises" element={ <Exercises />}></Route>
                <Route path="/result" element={ <ResultPage />}></Route>
                <Route path="/materias" element={ <Materias />}></Route>
            </Routes>
        </BrowserRouter>
    )
}