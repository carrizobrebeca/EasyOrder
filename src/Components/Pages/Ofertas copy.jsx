

import { useNavigate } from "react-router-dom";

import CardOfertas from "./CardOfertas";

const Ofertas = () => {
    const navigate = useNavigate();
    
   
  return (
    <div class="flex flex-col min-h-screen bg-slate-100">
      <header className="bg-emerald-500">
        <div className="flex justify-between items-center pl-2">
          <div className="flex justify-start items-center pl-2 p-2 cursor-pointer" onClick={() => navigate("/home")}>
            <h2 className="bg-emerald-100 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 lg:size-10 text-emerald-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </h2>

            <h2 className="text-emerald-100 font-bold lg:text-3xl text-sm p-2">
              EasyOrder
            </h2>
          </div>

          
        </div>
      </header>

      <main class="flex-1 lg:pl-[200px] lg:pr-[200px] lg:pb-10 lg:pt-10 p-4 overflow-hidden h-fullscreen">
       
          <div>
            <div>
              <h2 className="font-bold text-emerald-700 ">
                Hola, Nombre de Usuario!
              </h2>
              <h3 className="text-emerald-700">
                Dirección: <span className="font-bold">djaskdasdssdakdsk</span>
              </h3>
            </div>
           

            <div className="flex justify-start pt-4 pb-4">
              <h2 className="text-emerald-400 font-bold lg:text-xl text-base">Aprovechá estos combos de productos</h2>
            </div>

            <div className="w-full flex justify-between">
              <div className="w-full grid lg:grid-cols-2 lg:gap-4 grid-cols-1 gap-2">

                <div className="flex justify-center items-center">
                  <CardOfertas />
                </div>
                <div className="flex justify-center items-center">
                  <CardOfertas />
                </div>
                <div className="flex justify-center items-center">
                   <CardOfertas />
                </div>
                <div className="flex justify-center items-center">
                   <CardOfertas />
                </div>

              </div>
            </div>

            <div className="flex justify-end pt-4 pb-4">
              <div className='flex justify-center items-center ' >
                <div className='flex justify-center items-center p-2 bg-red-500 rounded-xl text-white m-2 font-bold'>
                  <button className=''>Agregar Todos </button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </div>
                <button className='p-2 border-2 border-emerald-500 rounded-xl text-emerald-500 m-2 font-bold' >Todos los productos</button>
              </div>
            </div>

          </div>


        
      </main>

      <footer className="flex justify-center items-center bg-emerald-500 bottom-0 text-emerald-300">
        <button> Rebeca Carrizo Bourlot</button>
      </footer>
    </div>
  );
};

export default Ofertas;
