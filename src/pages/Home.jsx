import LogoAcerta from "../assets/Logo_Acerta_BRANCO.svg";
import Efeitos_De_Fundo from "../assets/Efeitos_De_Fundo.svg";
import Bonequinhos from "../assets/Bonequinhos.svg";
import Icone_De_PC from "../assets/Icone_De_PC.svg";
import Icone_De_Prova from "../assets/Icone_De_Prova.svg";
import Icone_De_Certificado from "../assets/Icone_De_Certificado.svg";
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
import Menina_No_PC from "../assets/Menina_No_PC.svg";
import Coracao from "../assets/Coracao.svg";
import Quebra_Cabeca from "../assets/Quebra_Cabeca.svg";

export default function Home() {
  return (
    <>
      <body>
        {/* CABEÇALHO DA PAGINA */}
        <header className="flex h-20 items-center justify-between font-Poppins p-8 mb-12">
          <div>
            <img
              src={LogoAcerta}
              alt="Logo do Acerta com Alvo"
              className="h-20 w-20 mt-10 ml-10"
            ></img>
          </div>
          <div className="flex gap-8">
            <button href="" className="hover:underline">
              Início
            </button>
            <button href="" className="hover:underline">
              Sobre
            </button>
            <button href="" className="hover:underline">
              Depoimentos
            </button>
            <button href="" className="hover:underline">
              Contato
            </button>
            <button
              href=""
              className="p-2 w-24 rounded-3xl border hover:bg-blue-950 transition hover:transition"
            >
              Log in
            </button>
            <button
              href=""
              className="p-3 w-40 bg-purple-800 rounded-3xl transition hover:transition hover:bg-purple-700"
            >
              Sign in
            </button>
          </div>
        </header>
        {/*PRIMEIRA PARTE*/}
        <section>
          <div className="flex w-full h-full ml-12 realtive z-10 mb-40">
            <div
              className="w-1/3 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${Efeitos_De_Fundo})` }}
            >
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-4">
                <h1 className="text-6xl font-bold leading-normal">
                  <span className="text-purple-800">Acerte</span> no melhor
                  método para os seus estudos
                </h1>
                <p className="text-gray-600 font-semibold">
                  Prepare-se para o ENEM e os grandes vestibulares com os
                  métodos de estudo gamificado da Acerta!
                </p>
              </div>
            </div>
            <div
              className="w-2/3 flex items-center justify-center relative"
              style={{ backgroundImage: `url(${Efeitos_De_Fundo})` }}
            >
              <img
                src={Bonequinhos}
                alt="Bonequinhos"
                className="h-auto max-w-full"
              />
            </div>
          </div>
        </section>
        {/*QUADRADO ROXO NO MEIO*/}
        <section>
          <div className="bg-purple-900 flex p-10 rounded-lg ml-20 mr-20 absolute z-20 top-[calc(100vh/2-75px] left-0 tranform -translate-y-1/2">
            <div className="flex w-1/3 justify-center items-center bg-purple-900">
              <div className="w-1/3 bg-purple-900">
                <img
                  src={Icone_De_PC}
                  alt="Icone de PC"
                  className="h-28 w-28 bg-purple-900"
                ></img>
              </div>
              <div className="w-2/3 -ml-6 mr-6 bg-purple-900">
                <h1 className="bg-purple-900 text-3xl font-bold mb-4">
                  Estude no seu tempo
                </h1>
                <p className="bg-purple-900 text-gray-400 font-semibold">
                  Avance no seu ritmo, sem pressão! Estude de forma flexível e
                  no momento que for melhor para você.
                </p>
              </div>
            </div>
            <div className="flex w-1/3 justify-center items-center bg-purple-900">
              <div className="w-1/3 bg-purple-900">
                <img
                  src={Icone_De_Prova}
                  alt="Icone de PC"
                  className="h-28 w-28 bg-purple-900"
                ></img>
              </div>
              <div className="w-2/3 -ml-6 bg-purple-900">
                <h1 className="bg-purple-900 text-3xl font-bold mb-4">
                  Aprenda e se divirta!
                </h1>
                <p className="bg-purple-900 text-gray-400 font-semibold">
                  Transforme seus estudos em uma jornada leve e envolvente!
                  Aprenda de forma interativa enquanto se diverte.
                </p>
              </div>
            </div>
            <div className="flex w-1/3 justify-center items-center bg-purple-900">
              <div className="w-1/3 bg-purple-900">
                <img
                  src={Icone_De_Certificado}
                  alt="Icone de PC"
                  className="h-28 w-28 bg-purple-900"
                ></img>
              </div>
              <div className="w-2/3 -ml-6 -mr-6 bg-purple-900">
                <h1 className="bg-purple-900 text-3xl font-bold mb-4">
                  Tudo registrado!
                </h1>
                <p className="bg-purple-900 text-gray-400 font-semibold">
                  Através da dashboard da Acerta! Você consegue acompanhar todo
                  o seu progresso nos estudos.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*SEGUNDA PARTE*/}
        <section>
          <div className="bg-slate-100 w-full p-20 relative z-10 flex flex-col justify-center items-center">
            <div className="mt-40 flex flex-col justify-center items-center text-center bg-slate-100 mb-20">
              <h1 className="bg-slate-100 text-black font-bold text-6xl mb-6">
                Tudo em um só lugar
              </h1>
              <p className="bg-slate-100 text-gray-500 font-semibold text-lg w-2/3">
                Estude quantas matérias quiser, de maneira divertida e gratuita!
                O acerta disponibiliza todas as matérias de ensino médio, para
                os seus estudos!
              </p>
            </div>
            <div className="bg-slate-100 w-full">
              <div className="flex justify-around items-center mb-12 bg-slate-100">
                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Lingua_Portuguesa_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold">
                    Língua Portuguesa
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Literatura_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Literatura
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Artes_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Artes
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Fisica_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Física
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Quimica_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Química
                  </h2>
                </div>
              </div>
              <div className="flex justify-around bg-slate-100">
                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Biologia_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Biologia
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Matematica_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Matemática
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Historia_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    História
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Geografia_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Geografia
                  </h2>
                </div>

                <div className="flex items-center text-center bg-white w-60 h-40 rounded-lg shadow-lg">
                  <img
                    src={Filosofia_Sociologia_Logo}
                    alt="Lingua Portuguesa Logo"
                    className="h-20 w-20 ml-4 rounded-full"
                  ></img>
                  <h2 className="bg-white text-black text-xl font-semibold ml-5">
                    Filosofia /<br />
                    Sociologia
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*TERCEIRA PARTE*/}
        <section>
          <div className="flex p-12 ml-24 mr-24">
            <div className="w-1/2">
              <img src={Menina_No_PC} alt="Menina no PC"></img>
            </div>
            <div className="w-1/2">
              <h1 className="text-6xl font-bold mb-16 mt-24 leading-tight">
                Perguntas <br /> geradas por{" "}
                <span className="text-purple-800">IA</span>
              </h1>
              <div>
                <div className="flex mb-12">
                  <img src={Coracao} alt="Coração" className="w-24 h-24"></img>
                  <div className="flex flex-col ml-6">
                    <h1 className="text-2xl mb-1 font-bold">
                      Perguntas Inteligentes
                    </h1>
                    <p className="text-lg text-gray-500 font-semibold">
                      Receba questões personalizadas geradas por IA para testar
                      seu conhecimento de forma dinâmica.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    src={Quebra_Cabeca}
                    alt="Quebra Cabeça"
                    className="w-24 h-24"
                  ></img>
                  <div className="flex flex-col ml-6">
                    <h1 className="text-2xl mb-1 font-bold">
                      Variedade de Conteúdos
                    </h1>
                    <p className="text-lg text-gray-500 font-semibold">
                      Explore uma ampla seleção de perguntas criadas com IA,
                      cobrindo diversos temas e níveis de dificuldade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*RODAPÉ DA PÁGINA*/}
        <footer>
          <div className="flex ml-20 mr-16">
            <div className="w-1/5 flex flex-col text-justify">
              <img
                src={LogoAcerta}
                alt="Logo do Acerta!"
                className="h-20 w-20 mb-6"
              ></img>
              <p className="text-gray-400">
                O Acerta! é um app de educação gamificada que usa trilhas
                interativas e desafios para tornar os estudos mais dinâmico e
                divertido.
              </p>
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <h1 className="text-2xl font-bold mt-6 mb-8">Instituicional</h1>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Sobre nós
              </a>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Equipe
              </a>
              <a
                href=""
                className="text-gray-400 text-justify hover:underline hover:cursor-pointer"
              >
                Carreira
              </a>
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <h1 className="text-2xl font-bold mt-6 mb-8">Conteúdo</h1>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Cursos
              </a>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Missão
              </a>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Método
              </a>
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <h1 className="text-2xl font-bold mt-6 mb-8">Ajuda</h1>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                FAQ
              </a>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Ajuda
              </a>
              <a
                href=""
                className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
              >
                Dúvidas
              </a>
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <h1 className="text-2xl font-bold mt-6 mb-4">Contato</h1>
              <a
                href=""
                className="text-gray-400 text-justify hover:underline hover:cursor-pointer"
              >
                acertacursos@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center border-t p-6">
            <h1 className="text-gray-400">
              Acerta! All Right Reserved, 2024 &copy;
            </h1>
          </div>
        </footer>
      </body>
    </>
  );
}
