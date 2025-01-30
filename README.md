# Acerta! - Frontend

## 📌 Sobre o projeto
O **Acerta!** é uma aplicação web destinada ao estudo de vestibulares, concursos, etc, que utiliza gamificação e IA para ajudar os usuários a se prepararem de maneira eficaz. 

A principal proposta do AppAcerta é proporcionar aos usuários uma experiência de aprendizado dinâmica, com questões personalizadas pela IA, além de um sistema de XP (experiência) para incentivar o engajamento contínuo com os estudos.

Este repositório contém o código-fonte do **frontend**, construído com **React, Vite e Tailwind CSS**.




## 🚀 Tecnologias utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## 📂 Estrutura do projeto
```bash
frontend/
├── public/                  # Arquivos públicos
│   ├── mock-data.json       # Dados mockados para teste
│
├── src/                     # Código-fonte principal
│   ├── assets/              # Imagens e ícones
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   ├── pages/               # Páginas do app
│   │   ├── Exercise.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MainInicial.jsx
│   │   ├── Perfil.jsx
│   │   ├── ResultPage.jsx
│   ├── App.jsx              # Componente principal
│   ├── Routes.jsx           # Definição das rotas
│   ├── main.jsx             # Ponto de entrada da aplicação
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Como rodar o projeto
### 🔹 Pré-requisitos
Antes de começar, certifique-se de ter o **Node.js** instalado. Se não tiver, baixe em [nodejs.org](https://nodejs.org/).

### 🔹 Instalação e execução
```sh
git clone https://github.com/GrupoSquad01/appacerta.git
cd appacerta/frontend
npm install
npm run dev
```
Acesse no navegador: `http://localhost:5173`

## 🔄 Configuração de ambiente
Caso o projeto precise de variáveis de ambiente, crie um arquivo `.env` na raiz do frontend e adicione as chaves necessárias. Exemplo:
```env
VITE_API_URL=http://localhost:8080/api
```

## 🎯 Funcionalidades principais
- ✅ Login e autenticação de usuários  
- ✅ Navegação entre páginas usando React Router  
- ✅ Interface responsiva com Tailwind CSS  
- ✅ Comunicação com o backend via API REST  

## 📜 Licença
Este projeto é de código aberto e está sob a licença MIT.
