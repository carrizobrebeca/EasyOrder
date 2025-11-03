import React from 'react'
import { useNavigate } from 'react-router-dom';

const OldOrders = () => {
    const navigate = useNavigate();

    return (
        <div class="flex flex-col gap-4 min-h-screen bg-slate-100">
            <header className="bg-emerald-500">
                <div className="flex justify-between items-center pl-2">
                    <div className="flex justify-start items-center pl-2 p-2 cursor-pointer">
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


            <main class="flex-1 lg:pl-[200px] lg:pr-[200px] lg:pb-10 lg:pt-10 p-4 overflow-hidden h-fullscreen bg-slate-100">
                <div>
                    <div>
                        <div className="flex justify-start pl-2">
                            <h2 className="font-bold text-emerald-700 lg:text-3xl text-sm lg:pb-4 pb-2">
                                Historial de pedidos
                            </h2>
                        </div>
                    </div>

                    <div className='flex justify-center items-center  pb-4'>
                        <div className="gird cols-1 w-[580px] h-[220px] bg-white border-2 rounded-xl p-4 w-full">
                            <div>
                                <h2 className="text-emerald-400 font-bold lg:text-xl text-base">#34657869</h2>
                            </div>

                            <div className='pb-4 pt-2'>
                                <div className='flex justify-between items-center'>
                                    <h2 className=" ">21/10/2025</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Repetir pedido</button>
                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between  items-center p-4 border-t-2  border-b-0 border-r-0 border-l-0'>
                                    <h2 className='bg-emerald-300 text-emerald-700 rounded-full p-2'>Entregado</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base' onClick={() => navigate("/historial/detalle")}>Ver detalle</button>
                                </div>
                                <div>
                                    <h2 className="lg:text-xl text-base">Monto total:<span className='font-bold '> $335764,89</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center  pb-4'>
                        <div className="gird cols-1 w-[580px] h-[220px] bg-white border-2 rounded-xl p-4 w-full">
                            <div>
                                <h2 className="text-emerald-400 font-bold lg:text-xl text-base">#34657869</h2>
                            </div>

                            <div className='pb-4 pt-2'>
                                <div className='flex justify-between items-center'>
                                    <h2 className=" ">21/10/2025</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Repetir pedido</button>
                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between  items-center p-4 border-t-2  border-b-0 border-r-0 border-l-0'>
                                    <h2 className='bg-orange-300 text-orange-700 rounded-full p-2'>En tránsito</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Ver detalle</button>
                                </div>
                                <div>
                                    <h2 className="lg:text-xl text-base">Monto total:<span className='font-bold '> $335764,89</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className='flex justify-center items-center  pb-4'>
                        <div className="gird cols-1 w-[580px] h-[220px] bg-white border-2 rounded-xl p-4 w-full">
                            <div>
                                <h2 className="text-emerald-400 font-bold lg:text-xl text-base">#34657869</h2>
                            </div>

                            <div className='pb-4 pt-2'>
                                <div className='flex justify-between items-center'>
                                    <h2 className=" ">21/10/2025</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Repetir pedido</button>
                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between  items-center p-4 border-t-2  border-b-0 border-r-0 border-l-0'>
                                    <h2 className='bg-red-300 text-red-700 rounded-full p-2'>Cancelado</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Ver detalle</button>
                                </div>
                                <div>
                                    <h2 className="lg:text-xl text-base">Monto total:<span className='font-bold '> $335764,89</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

 <div className='flex justify-center items-center  pb-4'>
                        <div className="gird cols-1 w-[580px] h-[220px] bg-white border-2 rounded-xl p-4 w-full">
                            <div>
                                <h2 className="text-emerald-400 font-bold lg:text-xl text-base">#34657869</h2>
                            </div>

                            <div className='pb-4 pt-2'>
                                <div className='flex justify-between items-center'>
                                    <h2 className=" ">21/10/2025</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Repetir pedido</button>
                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between  items-center p-4 border-t-2  border-b-0 border-r-0 border-l-0'>
                                    <h2 className='bg-emerald-300 text-emerald-700 rounded-full p-2'>Entregado</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Ver detalle</button>
                                </div>
                                <div>
                                    <h2 className="lg:text-xl text-base">Monto total:<span className='font-bold '> $335764,89</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className='flex justify-center items-center  pb-4'>
                        <div className="gird cols-1 w-[580px] h-[220px] bg-white border-2 rounded-xl p-4 w-full">
                            <div>
                                <h2 className="text-emerald-400 font-bold lg:text-xl text-base">#34657869</h2>
                            </div>

                            <div className='pb-4 pt-2'>
                                <div className='flex justify-between items-center'>
                                    <h2 className=" ">21/10/2025</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Repetir pedido</button>
                                </div>
                            </div>
                            <div >
                                <div className='flex justify-between  items-center p-4 border-t-2  border-b-0 border-r-0 border-l-0'>
                                    <h2 className='bg-emerald-300 text-emerald-700 rounded-full p-2'>Entregado</h2>
                                    <button className='flex justify-end text-emerald-500 lg:text-xl text-base'>Ver detalle</button>
                                </div>
                                <div>
                                    <h2 className="lg:text-xl text-base">Monto total:<span className='font-bold '> $335764,89</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </main>

            <footer className="flex justify-center items-center bg-emerald-500 bottom-0 text-emerald-300">
                <button> Rebeca Carrizo Bourlot</button>
            </footer>
        </div>
    )
}

export default OldOrders
