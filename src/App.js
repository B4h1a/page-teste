import React from "react";
import { TbEdit } from "react-icons/tb";
import { GoMoveToTop } from "react-icons/go";

function App() {
  return (
    <div className="bg-gray-700 text-gray-300 flex flex-col justify-between font-sans min-h-screen overflow-hidden">
    <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold text-white flex flex-row gap-1"><TbEdit />ChatGPT 40 mini</h1>
        <div className="flex gap-4">
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-3xl border-white border-2">Entrar</button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-3xl border-white border-2">Criar conta</button>
        </div>
    </header>

    <main className="flex flex-col items-center justify-center ">
        <div className="w-full max-w-xl pb-16">
            <div className="flex flex-col gap-4">
                <div className="relative h-64 w-full bg-gray-700 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img className="h-20 brightness-200 contrast-125" src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" alt=""/>
                    </div>
                </div>  
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <button className="bg-gray-700x hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl border-white border-2">Sugira atividades divertidas para fazer amigos numa cidade nova</button>
                        <button className="bg-gray-700x hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl border-white border-2">Escreva uma mensagem chamando vizinhos pro churrasco</button>
                    </div>

                    <div class="flex flex-col gap-2">
                        <button className="bg-gray-700x hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl border-white border-2">Planeje um dia para cuidar da mente e me ajudar a relaxar</button>
                        <button className="bg-gray-700x hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-2xl border-white border-2">Ajude-me a escolher uma roupa que fique boa em fotos</button>
                    </div>
                </div>
                <div className="flex items-center bg-gray-800 py-2 px-4 rounded-3xl">
                <input type="text" placeholder='Mensagem ChatGPT' className=" bg-gray-800 w-full font-bold" /><GoMoveToTop />
                </div>
            </div>
        </div>
    </main>
    </div>
  );
}

export default App;
