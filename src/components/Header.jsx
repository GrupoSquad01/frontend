import Logo from "../assets/Logo.svg";
import Sininho from "../assets/Sininho.svg";
import Mensagens from "../assets/Mensagens.svg";
import Flecha from "../assets/Flecha.svg";

import { useState, useRef, useEffect } from "react";

export default function Header() {
  // Estado para controlar a visibilidade do menu dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Referência para o menu dropdown
  const dropdownRef = useRef(null);

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);

  // Função para fechar o dropdown ao clicar fora
  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Adiciona o event listener de clique fora do dropdown ao montar o componente
  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <header className="flex h-20 justify-between bg-slate-50 items-center font-Poppins p-4">
      <section className="flex justify-center items-center bg-slate-50 gap-2">
        <img
          src={Logo}
          alt="Logo da página"
          className="h-10 w-10 bg-slate-50"
        />
        <h1 className="bg-slate-50 text-indigo-950 text-2xl font-bold">
          Acerta!
        </h1>
      </section>

      <section className="flex justify-center items-center bg-slate-50 gap-5">
        <div className="flex gap-2 bg-slate-50 mr-4">
          <button>
            <img
              className="bg-slate-50 h-9 w-9 hover:bg-slate-'950"
              src={Sininho}
              alt="Sininho"
            />
          </button>

          <button>
            <img
              className="bg-slate-50 h-9 w-9"
              src={Mensagens}
              alt="Mensagens"
            />
          </button>
        </div>

        <h2 className="bg-slate-50 text-indigo-950 font-medium text-lg">
          (Nome)
        </h2>

        <img
          className="h-12 w-12 rounded-3xl bg-slate-50"
          src="https://i.pinimg.com/736x/50/5d/5f/505d5f99390a5ad7b1faebd8b10d44b2.jpg"
          alt="Foto de perfil"
        />
        <div className="relative bg-slate-50">
          <button onClick={toggleDropdown} className="bg-slate-50 h-3 w-3">
            <img
              className={`bg-slate-50 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-300 ease-in-out`}
              src={Flecha}
              alt="Flecha"
            ></img>
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-950 bg-gray-500 duration-200 hover:text-white hover:bg-purple-800 hover:duration-200"
                >
                  Editar Perfil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-950 bg-gray-500 duration-200 hover:text-white hover:bg-purple-800 hover:duration-200"
                >
                  Sair
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </header>
  );
}
