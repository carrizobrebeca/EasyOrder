import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Order = () => {
 const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("products");
    
  const seccionRef = useRef(null);

  const irASeccion = () => {
    seccionRef.current.scrollIntoView({
      behavior: 'smooth', // hace el scroll suave
      block: 'start'      // alinea al inicio de la sección
    });
  };

  const [selectedMonth, setSelectedMonth] = useState("");

  const optionsArray = [

    { value: 'A-Z', label: 'A-Z' },
    { value: 'Z-A', label: 'Z-A' },
    { value: 'Mayor Precio', label: 'Mayor Precio' },
    { value: 'Menor Precio', label: 'Menor Precio' },


  ];

  return (
    <div class="flex flex-col min-h-screen bg-slate-100">
      <header className="bg-emerald-500">
        <div className="flex justify-between items-center pl-2">
          <div className="flex justify-start items-center pl-2 p-2 cursor-pointer" onClick={() => navigate("/home")}>
            <h2 className="bg-emerald-100 rounded-full p-2" >
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

          <div className="flex justify-around items-center pl-2">
            <div className="flex justify-start items-center pr-2">
              <h2 className="lg:bg-emerald-100 rounded-full p-1 bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="lg:size-6 size-0 text-emerald-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
              </h2>
              <h2 className="lg:text-emerald-100 lg:pl-1 text-transparent">
                Dirección
              </h2>
            </div>
            <div className="flex justify-start items-center pr-2">
              <h2 className="lg:bg-emerald-100 rounded-full p-1 bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="lg:size-6 size-0 text-emerald-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </h2>
              <h2 className="lg:text-emerald-100 lg:pl-1 text-transparent">
                Nombre usuario
              </h2>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 lg:pl-[200px] lg:pr-[200px] lg:pb-10 lg:pt-10 p-4 overflow-hidden h-fullscreen">


        {activeTab === "products" && (
          <div >
            <button onClick={irASeccion} className="fixed bottom-0 right-0 pr-4 pb-4  ">
              <h2 className="bg-emerald-300 rounded-full pl-2 pr-2 flex justify-center items-center aspect-[4/4]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
              </h2>
            </button>
            <section ref={seccionRef} className="border-2 border-slate-300 mt-4  grid cols-1 rounded-full p-2 bg-white ">
              <div className="w-full flex justify-center items-center rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-emerald-5 rounded-xl">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" className="w-full  rounded-xl p-2" />
              </div>

            </section>


            <div className="flex justify-around pt-4 pb-4" >
              <div className="flex justify-center items-center pt-4 pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-emerald-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                </svg>
                <h2 >Novedades</h2>
              </div>

              <div className="flex justify-center items-center pt-4 pb-4 cursor-pointer" onClick={() => navigate("/combo")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-emerald-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <h2 >Combos</h2>
              </div>

              <div className="flex justify-center items-center pt-4 pb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-emerald-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <h2 >Sugeridos</h2>
              </div>

              <div className="flex justify-center items-center pt-4 pb-4 cursor-pointer" onClick={() => navigate("/ofertas")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <h2 >Ofertas</h2>
              </div>
            </div>


            <div className=" border-2 border-t-2 border-b-0 border-r-0 border-l-0  bg-gradient-to-b from-gray-300 pb-4">

              <div className="flex justify-around pt-2 pb-2 lg:text-base text-sm" >
                <button className="lg:w-[100px] w-[85px] flex justify-center items-center p-2 border-2 border-slate-300 rounded-full bg-white text-slate-500">
                  <h2>Gaseosas</h2>
                </button>
                <button className="lg:w-[100px] w-[85px] flex justify-center items-center p-2  border-2 border-slate-300 rounded-full bg-white text-slate-500">
                  <h2>Aguas</h2>
                </button>
                <button className="lg:w-[100px] w-[85px] flex justify-center items-center p-2  border-2 border-slate-300 rounded-full bg-white text-slate-500">
                  <h2>Saborizadas</h2>
                </button>

              </div>
              <div className="flex justify-around pt-2 pb-2 lg:text-base text-sm" >

                <button className="lg:w-[100px] w-[85px] flex justify-center items-center p-2  border-2 border-slate-300 rounded-full bg-white text-slate-500">
                  <h2>Deportivas</h2>
                </button>
                <button className="lg:w-[100px] w-[85px] flex justify-center items-center p-2  border-2 border-slate-300 rounded-full bg-white text-slate-500">
                  <h2>Energéticas</h2>

                </button>
                <button className="lg:w-[100px] w-[85px] flex justify-center items-center p-2  border-2 border-slate-300 rounded-full bg-white text-slate-500">
                  <h2>Jugos</h2>
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-4 pb-4 pl-2 pr-2 ">
              <h2 className="text-emerald-400 font-bold lg:text-xl text-base">Catálogo de productos</h2>
             
                <select
                  className="border-2 border-slate-300 rounded-xl p-1 col-span-7"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="" hidden>
                    Ordenar
                  </option>

                  {optionsArray.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
            

            </div>

            <div className="w-full flex justify-between pt-2">
              <div className="w-full grid lg:grid-cols-4 lg:gap-6 grid-cols-1 gap-2">

                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>
                <div className="flex justify-center items-center">
                  <Card />
                </div>

              </div>
            </div>



          </div>)}
      </main>

      <footer className="flex justify-center items-center bg-emerald-500 bottom-0 text-emerald-300">
        <button> Rebeca Carrizo Bourlot</button>
      </footer>

    </div>
  )
}

export default Order
