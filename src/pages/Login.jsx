import Header from "../components/Header";
import Google from '../assets/icone google.png'

export default function Login() {
    return(

        <>
        <Header />
        
        <main className="font-Poppins flex justify-center items-center">
            <div className="w-1/3 h-[calc(100vh-80px)] flex flex-col justify-center">
               <h1 className="text-2xl text-center font-semibold">Login</h1>

            <div className="my-6">
                <h3 className="py-2">Usuário:</h3>
                <input type="text" name="name" className="bg-slate-50/75 rounded p-1 w-full"/>
            </div>

            <div className="my-6">
                <h3 className="py-2">Senha:</h3>
                <input type="password" className="bg-slate-50/75 rounded p-1 w-full"/>
            </div>

            <button className="my-6 px-3 py-2 text-black bg-slate-100 rounded-md mx-40">Entrar</button>
            
            <a href="" className="flex justify-center text-black bg-slate-100 rounded-md p-2 my-6 mx-28
            "><img src={Google} alt="Simbolo Google" className="h-6 pr-3 text-black bg-slate-100 rounded-md" />Entrar com o Google</a> 
            
            </div>
        </main>

        </>
    )
}