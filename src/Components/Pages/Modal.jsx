import React from 'react'
import { useNavigate } from 'react-router-dom';

const Modal = ({onClose}) => {
     const navigate = useNavigate();
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-4'>
            <div className='flex justify-center items-center'>
                <div className='w-[400px] h-[500px] bg-slate-200 rounded-xl p-4'>
                    <div className='flex justify-end p-4'>
                        <button onClick={onClose} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div>
                        <div className='bg-slate-100 rounded-xl p-2  shadow-md'>
                            <div className='flex justify-start'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-500 size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                                <h2 className='pb-2 pl-2 font-bold'>Dirección de entrega</h2></div>
                            <h2 className='pt-2 border-top-4 border-bottom-0 border-left-0 border-t rigth-0 pl-4'>Calle falsa 123</h2>
                        </div>
                        <div className='bg-slate-100 rounded-xl p-2 mt-6  shadow-md'>
                            <form action="">
                                <div className='flex justify-start'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-red-500 size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                    <h2 className='pb-2 pl-2 font-bold'>Fecha de entrega</h2></div>

                                <div className='pt-2 border-top-4 border-bottom-0 border-left-0 border-t rigth-0'></div>

                                <div className='p-4 '>
                                    <input type="checkbox" className='p-2' /><label className='pl-2 ' htmlFor="">Martes 4 Nov</label>
                                </div>
                                <div className='p-4 '>
                                    <input type="checkbox" className='p-2' /><label className='pl-2 ' htmlFor="">Martes 4 Nov</label>
                                </div>
                            </form>
                        </div>
                        <div className='bg-slate-100 rounded-xl p-2 mt-6  shadow-md'>
                            <div className='flex justify-center items-center'>
                                <button onClick={() => navigate("/order")} className='bg-red-400 p-2 text-white rounded-xl shadow-md'>Iniciar pedido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
