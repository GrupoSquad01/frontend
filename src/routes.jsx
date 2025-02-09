import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MenuInicial from "./pages/MenuInicial"
import Perfil from "./pages/Perfil"
import Exercises from "./pages/Exercises"
import ResultPage from "./pages/ResultPage"

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
                <Route path="/Home" element={ <Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}