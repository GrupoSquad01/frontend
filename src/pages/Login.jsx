import Logo from "../assets/Logo.svg";
import ImagemGrande from "../assets/ImagemGrande.svg";
import LogoGoogle from "../assets/LogoGoogle.svg";

export default function Login() {
  return (
    <>
      <body className="m-0 flex justify-center items-center h-screen bg-indigo-950">
        <div className="flex flex-col text-center w-5/6 h-5/6 m-auto rounded-sm border border-white-700 lg:flex-row">
          <section className="lg:w-2/4 lg:p-12 lg:border-r-2 lg:border-slate-200 box-border bg-slate-50 w-full h-full">
            <div className="flex justify-center items-center mt-10 bg-slate-50 gap-1">
              <img
                className="Z
                        w-7 h-7 bg-slate-50"
                src={Logo}
                alt="Logo do Acerta"
              />

              <h1 className="text-2xl font-bold text-indigo-950 bg-slate-50">
                Acerta!
              </h1>
            </div>

            <p className="text-base font-medium text-slate-700 mt-6 mb-12 bg-slate-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quam!
            </p>

            <img
              className="m-auto lg:h-80 lg:w-96 h-60 w-76 bg-slate-50"
              src={ImagemGrande}
              alt="Imagem Grande"
            />
          </section>

          <section className="lg:w-2/4 lg:p-12 box-border flex flex-col justify-center space-y-4 bg-slate-50 w-full h-full">
            <h3 className="text-base font-medium text-slate-700 bg-slate-50">
              Comece de graça
            </h3>

            <h1 className="mb-b text-3xl font-bold text-indigo-950 bg-slate-50">
              Entre no Acerta!
            </h1>

            <button className="flex justify-center items-center m-auto w-10/12 h-14 border border-white-700 raunded-lg p-1 bg-slate-100 duration-1000 text-base font-normal text-slate-700 hover:duration-1000 hover:bg-slate-200 cursor-pointer">
              <img className="h-5 w-5 mr-1 bg-slate-50" src={LogoGoogle} />{" "}
              Entre com o Google{" "}
            </button>
          </section>
        </div>
      </body>
    </>
  );
}
