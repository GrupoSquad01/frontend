import LogoPagina from "../assets/Logo Acerta!.png"

export default function Header () {
    
    return (
        <header className="flex justify-between h-20 items-center font-Poppins bg-white">
            <img src={LogoPagina} alt="Logo da página" className="h-14 pl-3" />

            <div className="pr-3">
                <img src="" alt="Foto perfil do usuário"/>
                <button>Editar perfil</button>
                <button>Sair</button>
            </div>
        </header>
    )
}