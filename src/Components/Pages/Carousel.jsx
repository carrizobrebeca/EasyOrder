import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const [activeTab, setActiveTab] = useState("actual");
    useEffect(() => {
    const tabs = ["actual", "next", "other"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % tabs.length; // avanza y vuelve a 0 al final
      setActiveTab(tabs[index]);
    }, 4000); // cada 7 segundos

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);
    return (
         <>
         <div>

        {activeTab === "actual" && (
        <div className="lg:h-[200px] flex flex-row h-[100px] text-sm font-mono  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

            <button className='pl-2' onClick={() => setActiveTab("next")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
            </button>
         

  
            <div className="flex w-full w-1/2 justify-center items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/042/542/509/non_2x/ai-generated-water-bottle-png.png" alt="" className='lg:h-[200px] h-[100px] animate-pulse' />
            </div>
               <div className="flex w-1/2 justify-center items-center ">
                <div >
                    <h2 className=' text-white lg:text-xl  text-center'>Refrescá tu negocio con el regreso de</h2>
                    <h2 className=' text-white lg:text-4xl text-base font-bold text-center animate-pulse'>Sprite Ice</h2>
                    <h2 className=' text-white lg:text-xl  text-center'>edición limitada</h2>
                </div>

            </div>
            <button className='pr-2' onClick={() => setActiveTab("other")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </button>
        </div>      
    )}   
            {activeTab === "next" && (
        <div className="lg:h-[200px] flex flex-row h-[100px] text-sm font-mono  bg-gradient-to-r from-black via-teal-500  to-teal-300">

            <button className='pl-2' onClick={() => setActiveTab("other")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
            </button>
            <div className="flex w-1/2 justify-center items-center ">
                <div >
                    <h2 className=' text-white lg:text-xl  text-center'>Refrescá tu negocio con el regreso de</h2>
                    <h2 className=' text-white lg:text-4xl text-base font-bold text-center animate-pulse'>Sprite Ice</h2>
                    <h2 className=' text-white lg:text-xl  text-center'>edición limitada</h2>
                </div>

            </div>

  
            <div className="flex w-full w-1/2 justify-center items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/042/542/509/non_2x/ai-generated-water-bottle-png.png" alt="" className='lg:h-[200px] h-[100px] animate-pulse' />
            </div>
            <button className='pr-2' onClick={() => setActiveTab("actual")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </button>
        </div>      
    )} 
     {activeTab === "other" && (
        <div className="lg:h-[200px] flex flex-row h-[100px] text-sm font-mono  bg-gradient-to-r from-teal-300 via-gray-800  to-black">

            <button className='pl-2' onClick={() => setActiveTab("actual")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
            </button>
        

  
            <div className="flex w-full w-1/2 justify-center items-center">
                <img src="https://static.vecteezy.com/system/resources/previews/042/542/509/non_2x/ai-generated-water-bottle-png.png" alt="" className='lg:h-[200px] h-[100px] animate-pulse' />
            </div>
                <div className="flex w-1/2 justify-center items-center ">
                <div >
                    <h2 className=' text-white lg:text-xl  text-center'>Refrescá tu negocio con el regreso de</h2>
                    <h2 className=' text-white lg:text-4xl text-base font-bold text-center animate-pulse'>Sprite Ice</h2>
                    <h2 className=' text-white lg:text-xl  text-center'>edición limitada</h2>
                </div>

            </div>
            <button className='pr-2' onClick={() => setActiveTab("next")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </button>
        </div>      
    )} 
        </div>
        </>
    );
};
export default Carousel
