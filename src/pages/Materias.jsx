import Header from "../components/Header";
import Lingua_Portuguesa_Logo from "../assets/Lingua_Portuguesa_Logo.svg";
import Literatura_Logo from "../assets/Literatura_Logo.svg";
import Artes_Logo from "../assets/Artes_Logo.svg";
import Fisica_Logo from "../assets/Fisica_Logo.svg";
import Quimica_Logo from "../assets/Quimica_Logo.svg";
import Biologia_Logo from "../assets/Biologia_Logo.svg";
import Matematica_Logo from "../assets/Matematica_Logo.svg";
import Historia_Logo from "../assets/Historia_Logo.svg";
import Geografia_Logo from "../assets/Geografia_Logo.svg";
import Filosofia_Sociologia_Logo from "../assets/Filosofia_Sociologia_Logo.svg";

export default function Home() {
  return (
    <>
      <Header />

      <section className="m-24 max-sm:m-6">
        <div>
          <h1 className="bg-slate-100 text-black font-bold pt-6 pl-6 text-4xl">
            Matérias
          </h1>
        </div>
        <div className="bg-slate-100 flex justify-center items-center">
          <div className="bg-slate-100 flex flex-col mt-6 mb-6 ml-24 mr-6 gap-6 w-1/2 max-lg:ml-36 max-lg:mr-2 max-sm:ml-44 max-sm:mr-0">
            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Lingua_Portuguesa_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Língua
                  <br />
                  Portuguesa
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col ">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Literatura_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Literatura
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Artes_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Arte
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Fisica_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Física
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Quimica_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Química
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 flex flex-col mt-6 mb-6 ml-24 mr-6 gap-6 w-1/2 max-lg:mr-36 max-lg:ml-2 max-sm:mr-44 max-sm:ml-0">
            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Biologia_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Biologia
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Matematica_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Matemática
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Historia_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  História
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Geografia_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Geografia
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>

            <div className="flex p-4 items-center gap-6 bg-slate-50 rounded-md shadow-lg max-lg:flex-col max-sm:flex-col">
              <div className="flex w-2/3 bg-slate-50 items-center gap-6 max-lg:w-56 max-sm:w-40 max-sm:flex-col max-sm:h-40">
                <img
                  src={Filosofia_Sociologia_Logo}
                  className="h-20 w-20 rounded-full bg-purple-900 max-sm:h-15 max-sm:w-15"
                ></img>
                <h1 className="bg-slate-50 text-black font-semibold text-xl max-sm:text-lg max-sm:text-center">
                  Filisofia/
                  <br />
                  Sociologia
                </h1>
              </div>
              <div className="flex bg-slate-50 w-1/3 max-lg:w-36 max-sm:justify-center">
                <button className="bg-purple-900 font-semibold text-lg p-2 rounded-lg w-36 hover:bg-purple-950 hover:transition transition">
                  Matricular
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
