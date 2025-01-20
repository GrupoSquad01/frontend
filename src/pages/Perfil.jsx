import Header from "../components/Header";
import FotoPerfil from "../assets/Foto perfil.png";
import AvatarF1 from "../assets/F1.png";
import AvatarF2 from "../assets/F2.png";
import AvatarF3 from "../assets/F3.png";
import AvatarM1 from "../assets/F3.png";
import AvatarM2 from "../assets/F3.png";
import AvatarM3 from "../assets/F3.png";

export default function Perfil() {
    return(
        <>
        <Header />
        
        <main>

            <div className="mx-2.5 my-6">
                <div>
                 <h1 className="text-white text-xl font-bold mb-2">Configurações</h1>
                </div>

                <div className="bg-white rounded-sm flex-col mb-4">
                    <div className="h-14 indent-5 flex items-center border-b border-cinza-1">
                        <h1 className="text-base font-medium ">Sua foto</h1>
                    </div>
                    
                    <div className="flex mt-6 mx-7 items-center">
                        <a href=""><img src={FotoPerfil} alt="" className="foto_perfil"/></a>
                        <div className="">
                           <h3 className="text-base my-1">Edite a sua foto</h3>
                            <div className="">
                                <button className="btn_foto text-sm mr-2">Excluir</button>
                                <button className="btn_foto text-roxo text-sm ">Atualizar</button>
                            </div> 
                        </div>
                    </div>

                    <div class="avatar">
                        <img src={AvatarF1} alt="Avatar Feminina Op 01" className="img_avatar" />
                        <img src={AvatarF2} alt="Avatar Feminina Op 02" className="img_avatar" />
                        <img src={AvatarF3} alt="Avatar Feminina Op 03" className="img_avatar" />
                        <img src={AvatarM1} alt="Avatar Masculino Op 01" className="img_avatar" />
                        <img src={AvatarM2} alt="Avatar Masculino Op 02" className="img_avatar" />
                        <img src={AvatarM3} alt="Avatar Masculino Op 03" className="img_avatar" />
                    </div>
                </div>
               
                <div className="bg-white rounded-sm flex-col">
                    <div className="h-14 indent-5 flex items-center border-b border-cinza-1">
                         <h1 className="text-base font-medium ">Informações pessoais:</h1>
                    </div>
                    

                    <form action="" method="get" className="mx-7"> 
                        <div className="">
                           <div className="grid">
                                <label htmlFor="" for="name" className="titulo_input">Nome completo</label>
                                <input type="text" name="name" id="name" required placeholder="João Silva" className="input"/>
                            </div>

                            <div className="grid">
                                <label htmlFor="" for="telephone" className="titulo_input">Telefone</label>
                                <input type="tel" id="telephone" name="telephone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required placeholder="(xx) xxxxx-xxxx" className="input"/>
                            </div> 
                        </div>

                        <div className="grid">
                            <label htmlFor="" for="username" className="titulo_input">Username</label>
                            <input type="text" name="username" id="username" required placeholder="joazinho" className="input"/>
                        </div>
                        
                        <div className="grid">
                            <label htmlFor="" for="email" className="titulo_input">E-mail</label>
                            <input type="email" name="email" id="email" required placeholder="username@gmail.com" className="input"/>
                        </div>

                        <div className="grid">
                            <label htmlFor="" for="password" className="titulo_input">Senha</label>
                            <input type="password" name="password" id="password" required className="input"/>
                        </div>

                        <div className="flex justify-end gap-3 py-6">
                            <button className="btn_branco">Cancelar</button>
                            <button className="btn_roxo">Salvar</button>
                        </div>
                        
                    </form>
                </div> 
            </div>
            

            

        </main>
        </>
    )
}