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

import { useState } from "react";

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* CABEÇALHO DA PAGINA */}
      <header className="relative flex flex-col md:flex-row h-auto items-center justify-between font-Poppins p-8 mb-12">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            src={LogoAcerta}
            alt="Logo do Acerta com Alvo"
            className="h-20 w-20 md:h-20 md:w-20 max-w-xs ml-10"
          />
        </div>

        {/* Menu Hamburguer para telas pequenas */}
        <button
          className="md:hidden absolute top-8 right-8 p-4 text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Botões de navegação - Para telas grandes, sempre visível, e para telas pequenas, controlado pelo estado */}
        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-8 w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}
        >
          <button className="hover:underline">Início</button>
          <button className="hover:underline">Sobre</button>
          <button className="hover:underline">Depoimentos</button>
          <button className="hover:underline">Contato</button>

          {/* Botões de login e sign-in */}
          <button
            className="p-2 w-full md:w-24 rounded-3xl border hover:bg-blue-950 transition hover:transition mt-4 md:mt-0"
          >
            Log in
          </button>
          <button
            className="p-3 w-full md:w-40 bg-purple-800 rounded-3xl transition hover:transition hover:bg-purple-700 mt-4 md:mt-0"
          >
            Sign in
          </button>
        </div>
      </header>

      {/*PRIMEIRA PARTE*/}
      <section className="relative">
        <div className="flex flex-wrap w-full h-auto relative z-10 mb-24 md:mb-16 lg:mb-32 mt-24 sm:mt-28 md:mt-20">
          {/* Coluna da imagem de fundo e texto */}
          <div className="w-full md:w-1/3 bg-cover bg-center relative" style={{ backgroundImage: `url(${Efeitos_De_Fundo})` }}>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-4 w-full text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-snug md:leading-normal">
                <span className="text-purple-800">Acerte</span> no melhor método para os seus estudos
              </h1>
              <p className="text-gray-600 font-semibold mt-6 sm:mt-8 lg:mt-8 mb-12 sm:mb-16">
                Prepare-se para o ENEM e os grandes vestibulares com os métodos de estudo gamificado da Acerta!
              </p>
            </div>
          </div>

          {/* Coluna da imagem principal */}
          <div className="w-full md:w-2/3 flex items-center justify-center relative lg:mt-8 md:mt-0 sm:mt-20 mt-20">
            <img src={Bonequinhos} alt="Bonequinhos" className="h-auto max-w-full" />
          </div>
        </div>
      </section>

      {/*QUADRADO ROXO NO MEIO*/}
      <section>
        <div className="bg-purple-900 flex flex-col lg:flex-row p-10 rounded-lg ml-10 mr-10 md:ml-15 md:mr-15 mt-24 lg:mt-20 relative">
          <div className="flex lg:w-1/3 lg:mb-0 mb-12 justify-center items-center bg-purple-900">
            <div className="flex w-1/3 bg-purple-900">
              <img
                src={Icone_De_PC}
                alt="Icone de PC"
                className="flex h-28 w-28 bg-purple-900"
              ></img>
            </div>
            <div className="flex flex-col lg:ml-5 md:ml-0 ml-4 w-2/3 lg:mr-6 bg-purple-900">
              <h1 className="bg-purple-900 text-3xl font-bold mb-4">
                Estude no seu tempo
              </h1>
              <p className="bg-purple-900 text-gray-400 font-semibold">
                Avance no seu ritmo, sem pressão! Estude de forma flexível e
                no momento que for melhor para você.
              </p>
            </div>
          </div>
          <div className="flex lg:w-1/3 lg:mb-0 mb-12 justify-center items-center bg-purple-900">
            <div className="w-1/3 bg-purple-900">
              <img
                src={Icone_De_Prova}
                alt="Icone de PC"
                className="h-28 w-28 bg-purple-900"
              ></img>
            </div>
            <div className="flex flex-col lg:ml-5 md:ml-0 ml-4 w-2/3 lg:mr-6 bg-purple-900">
              <h1 className="bg-purple-900 text-3xl font-bold mb-4">
                Aprenda e se divirta!
              </h1>
              <p className="bg-purple-900 text-gray-400 font-semibold">
                Transforme seus estudos em uma jornada leve e envolvente!
                Aprenda de forma interativa enquanto se diverte.
              </p>
            </div>
          </div>
          <div className="flex lg:w-1/3 justify-center items-center bg-purple-900">
            <div className="w-1/3 bg-purple-900">
              <img
                src={Icone_De_Certificado}
                alt="Icone de PC"
                className="h-28 w-28 bg-purple-900"
              ></img>
            </div>
            <div className="flex flex-col lg:ml-5 md:ml-0 ml-4 w-2/3 lg:mr-6 bg-purple-900">
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
      <section className="mt-6">
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

          <div className="flex flex-wrap justify-center gap-5 w-full bg-slate-100">
            {/* Primeira linha */}
            <div className="flex flex-wrap justify-center items-center gap-5 w-full bg-slate-100">
              {/* Item 1 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Lingua_Portuguesa_Logo}
                  alt="Lingua Portuguesa Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Língua Portuguesa
                </h2>
              </div>

              {/* Item 2 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Literatura_Logo}
                  alt="Literatura Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Literatura
                </h2>
              </div>

              {/* Item 3 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Artes_Logo}
                  alt="Artes Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Artes
                </h2>
              </div>

              {/* Item 4 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Fisica_Logo}
                  alt="Física Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Física
                </h2>
              </div>

              {/* Item 5 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Quimica_Logo}
                  alt="Química Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Química
                </h2>
              </div>
            </div>

            {/* Segunda linha */}
            <div className="flex flex-wrap justify-center items-center gap-5 w-full bg-slate-100">
              {/* Item 6 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Biologia_Logo}
                  alt="Biologia Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Biologia
                </h2>
              </div>

              {/* Item 7 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Matematica_Logo}
                  alt="Matemática Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Matemática
                </h2>
              </div>

              {/* Item 8 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Historia_Logo}
                  alt="História Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  História
                </h2>
              </div>

              {/* Item 9 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Geografia_Logo}
                  alt="Geografia Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Geografia
                </h2>
              </div>

              {/* Item 10 */}
              <div className="flex items-center text-center bg-white w-80 sm:w-2/3 md:w-1/3 lg:w-1/6 min-w-[240px] h-40 rounded-lg shadow-lg">
                <img
                  src={Filosofia_Sociologia_Logo}
                  alt="Filosofia Logo"
                  className="h-20 w-20 ml-4 rounded-full mr-3"
                />
                <h2 className="bg-white text-black text-xl font-semibold flex-grow">
                  Filosofia /<br /> Sociologia
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*TERCEIRA PARTE*/}
      <section>
        <div className="flex flex-col lg:flex-row p-12 ml-24 mr-24">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <img src={Menina_No_PC} alt="Menina no PC" className="w-full" />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-16 mt-8 lg:mt-24 leading-tight text-center lg:text-left">
              Perguntas <br /> geradas por{" "}
              <span className="text-purple-800">IA</span>
            </h1>
            <div>
              <div className="flex mb-8 lg:mb-12 items-center">
                <img src={Coracao} alt="Coração" className="w-16 h-16 lg:w-24 lg:h-24" />
                <div className="flex flex-col ml-4 lg:ml-6">
                  <h1 className="text-xl lg:text-2xl mb-1 font-bold">Perguntas Inteligentes</h1>
                  <p className="text-base lg:text-lg text-gray-500 font-semibold">
                    Receba questões personalizadas geradas por IA para testar seu conhecimento de forma dinâmica.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={Quebra_Cabeca} alt="Quebra Cabeça" className="w-16 h-16 lg:w-24 lg:h-24" />
                <div className="flex flex-col ml-4 lg:ml-6">
                  <h1 className="text-xl lg:text-2xl mb-1 font-bold">Variedade de Conteúdos</h1>
                  <p className="text-base lg:text-lg text-gray-500 font-semibold">
                    Explore uma ampla seleção de perguntas criadas com IA, cobrindo diversos temas e níveis de dificuldade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*RODAPÉ DA PÁGINA*/}
      <footer>
        <div className="flex flex-wrap justify-between ml-20 mr-16 gap-6">
          <div className="w-full sm:w-1/6 flex flex-col text-justify mb-6 sm:mb-0">
            <img
              src={LogoAcerta}
              alt="Logo do Acerta!"
              className="h-20 w-20 mb-6 mx-auto sm:mx-0"
            />
            <p className="text-gray-400">
              O Acerta! é um app de educação gamificada que usa trilhas
              interativas e desafios para tornar os estudos mais dinâmico e
              divertido.
            </p>
          </div>
          <div className="w-full sm:w-1/6 flex flex-col items-center mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold mt-6 mb-8 text-center sm:text-left">
              Institucional
            </h1>
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
              className="text-gray-400 text-justify mb-8 hover:underline hover:cursor-pointer"
            >
              Carreira
            </a>
          </div>
          <div className="w-full sm:w-1/6 flex flex-col items-center mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold mt-6 mb-8 text-center sm:text-left">
              Conteúdo
            </h1>
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
          <div className="w-full sm:w-1/6 flex flex-col items-center mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold mt-6 mb-8 text-center sm:text-left">
              Ajuda
            </h1>
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
          <div className="w-full sm:w-1/6 flex flex-col items-center mb-6 sm:mb-0">
            <h1 className="text-2xl font-bold mt-6 mb-4 text-center sm:text-left">
              Contato
            </h1>
            <a
              href="mailto:acertacursos@gmail.com"
              className="text-gray-400 text-justify hover:underline hover:cursor-pointer"
            >
              acertacursos@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center border-t p-6">
          <h1 className="text-gray-400 text-center">
            Acerta! All Right Reserved, 2024 &copy;
          </h1>
        </div>
      </footer>

    </>
  );
}
