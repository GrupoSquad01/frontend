import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function MenuInicial() {
    return(
        <>
        <Header />
        <Navbar />
            <div>
                <h1>Bem vindo ao Acerta!</h1>
            </div>
        <Footer />
        </>
    )
}