import Header from "../components/Header";
import Conquista1 from "../assets/Conquista1.svg";
import Conquista2 from "../assets/Conquista2.svg";
import Conquista3 from "../assets/Conquista3.svg";
import Conquista4 from "../assets/Conquista4.svg";
import Grafico from "../assets/Grafico.svg";
import BarraDeProgresso from "../assets/BarraDeProgresso.svg";


export default function Dashboard() {
  return (
    <>
      <Header />

      <section className="mt-24 mr-12 ml-12 mb-24 bg-slate-50 p-8 rounded-lg max-sm:mt-12 max-sm:mr-6 max-sm:ml-6 max-sm:mb-12 max-sm:p-6">
        <div className="w-1/3 mb-8 bg-slate-50 max-lg:w-full">
          <h1 className="bg-slate-50 text-3xl font-semibold text-black mb-2 max-sm:text-2xl">
            Bem vindo, (Nome)!
          </h1>
          <p className="bg-slate-50 text-gray-500 max-sm:text-sm">
            Prepare-se para uma jornada de aprendizado gamificada! Escolha sua
            trilha, debloquie consquistas e avance rumo ao seu objetivo. Vamos
            acertar juntos?
          </p>
        </div>

        <div className="flex gap-4 bg-slate-50 mb-8 max-sm:flex-col">
          <div className="bg-slate-50 w-1/4 max-sm:w-full">
            <div className="flex justify-center items-center bg-slate-100 rounded-lg shadow-xl border-2 border-gray-200 h-44 p-4 max-lg:flex-col max-lg:h-80 max-sm:h-52 max-sm:flex-row">
              <div className="flex-col w-2/3 bg-slate-100 max-lg:w-full">
                <h1 className="bg-slate-100 font-semibold text-black">
                  Troféu Disciplina de Ferro
                </h1>
                <h3 className="bg-slate-100 text-gray-500 mb-4 text-sm italic">
                  Compromisso é tudo!
                </h3>
                <p className="bg-slate-100 text-gray-500  text-xs">
                  Conquistada ao por 30 dias seguidos sem faltar nenhum dia.
                </p>
              </div>
              <div className="w-1/3 bg-slate-100 max-lg:flex max-lg:justify-center max-lg:w-full max-lg:p-2">
                <img className="h-24 w-24 bg-slate-100" src={Conquista1}></img>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-1/4 max-sm:w-full">
            <div className="flex justify-center items-center bg-slate-100 rounded-lg shadow-xl border-2 border-gray-200 h-44 p-4 max-lg:flex-col max-lg:h-80 max-sm:h-52 max-sm:flex-row">
              <div className="flex-col w-2/3 bg-slate-100 max-lg:w-full">
                <h1 className="bg-slate-100 font-semibold text-black">
                  Troféu Mestre dos Desafios
                </h1>
                <h3 className="bg-slate-100 text-gray-500 mb-4 text-sm italic">
                  Nada te para!
                </h3>
                <p className="bg-slate-100 text-gray-500  text-xs">
                  Obtido ao acertar 10 questões seguidas em um desafio.
                </p>
              </div>
              <div className="w-1/3 bg-slate-100 max-lg:flex max-lg:justify-center max-lg:w-full max-lg:p-2">
                <img className="h-24 w-24 bg-slate-100" src={Conquista2}></img>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-1/4 max-sm:w-full">
            <div className="flex justify-center items-center bg-slate-100 rounded-lg shadow-xl border-2 border-gray-200 h-44 p-4 max-lg:flex-col max-lg:h-80 max-sm:h-52 max-sm:flex-row">
              <div className="flex-col w-2/3 bg-slate-100 max-lg:w-full">
                <h1 className="bg-slate-100 font-semibold text-black">
                  Troféu Maratona
                </h1>
                <h3 className="bg-slate-100 text-gray-500 mb-4 text-sm italic">
                  Resistência de campeão!
                </h3>
                <p className="bg-slate-100 text-gray-500  text-xs">
                  Ganha ao estudar por 7 dias seguidos sem interrupção.
                </p>
              </div>
              <div className="w-1/3 bg-slate-100 max-lg:flex max-lg:justify-center max-lg:w-full max-lg:p-2">
                <img className="h-24 w-24 bg-slate-100" src={Conquista3}></img>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-1/4 max-sm:w-full">
            <div className="flex justify-center items-center bg-slate-100 rounded-lg shadow-xl border-2 border-gray-200 h-44 p-4 max-lg:flex-col max-lg:h-80 max-sm:h-52 max-sm:flex-row">
              <div className="flex-col w-2/3 bg-slate-100 max-lg:w-full">
                <h1 className="bg-slate-100 font-semibold text-black">
                  Troféu Explorador do Conhecimento.
                </h1>
                <h3 className="bg-slate-100 text-gray-500 mb-4 text-sm italic">
                  Você está pegando o ritmo!
                </h3>
                <p className="bg-slate-100 text-gray-500  text-xs">
                  Conquista ao completar 5% do curso.
                </p>
              </div>
              <div className="w-1/3 bg-slate-100 max-lg:flex max-lg:justify-center max-lg:w-full max-lg:p-2">
                <img className="h-24 w-24 bg-slate-100" src={Conquista4}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-2 bg-slate-50 gap-3 max-sm:flex-col max-sm:h-full">
          <div className="flex-col w-3/5 rounded-lg shadow-xl border-2 border-gray-200 bg-slate-50 max-sm:h-44 max-sm:w-full max-sm:mt-8 max-sm:mb-20">
            <div>
              <h1 className="bg-slate-50 text-2xl font-semibold text-black p-4 max-lg:text-xl">Progresso-Exercícios por dia.</h1>
            </div>
            <div>
              <img className="bg-slate-50 w-full" src={Grafico}></img>
            </div>
          </div>

          <div className="flex-col w-2/5 rounded-lg shadow-xl border-2 border-gray-200 bg-slate-50 max-sm:w-full">
            <div>
              <h1 className="bg-slate-50 text-2xl font-semibold text-black pt-4 pl-4 max-lg:text-xl">Matérias</h1>
              <h2 className="bg-slate-50 text-lg text-gray-500 pl-4 pt-2 pb-4 mb-6 max-lg:text-sm max-lg:mb-2" >Acompanhe o seu progresso por matéria:</h2>
            </div>
            <div>
              <img className="bg-slate-50 w-full" src={BarraDeProgresso}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
