import Logo from "../assets/Logo.svg";
import Sininho from "../assets/Sininho.svg";
import Mensagens from "../assets/Mensagens.svg";
import Flecha from "../assets/Flecha.svg";

export default function Header() {
  return (
    <header className="flex h-20 justify-between bg-slate-50 items-center font-Poppins p-4">
      <section className="flex justify-center items-center bg-slate-50 gap-2">
        <img
          src={Logo}
          alt="Logo da página"
          className="h-10 w-10 bg-slate-50"
        />
        <h1 className="bg-slate-50 text-indigo-950 text-2xl font-bold max-sm:hidden">
          Acerta!
        </h1>
      </section>

      <section className="flex justify-center items-center bg-slate-50 gap-5">
        <div className="flex gap-2 bg-slate-50 mr-4 max-sm:ml-6">
          <button>
            <img
              className="bg-slate-50 h-9 w-9"
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

        <button className="bg-slate-50 h-5 w-5 focus:rotate-180 focus:transition duration-500">
          <img
            className="bg-slate-50 hover:transition-1s"
            src={Flecha}
            alt="Flecha"
          ></img>
        </button>
      </section>
    </header>
  );
}
