import React, { useState } from 'react'

const CardSale = () => {
    const [activeButton, setActiveButton] = useState("nofav");
    const [activeAdd, setActiveAdd] = useState("noadd");
 const [total, setTotal] = useState(0);

  const restar = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };

  const sumar = () => {
    setTotal(total + 1);
  };
    return (
        <div className='w-[200px] w-min-[300px] bg-white rounded-xl border-2 b-slate-300'>
            <div class="relative text-gray-600 flex items-center ">
                <h2 className=" ">
                    <img src="https://static.vecteezy.com/system/resources/previews/042/542/509/non_2x/ai-generated-water-bottle-png.png" alt="" />
                </h2>
                {activeButton === "fav" && (
                    <div class="h-full w-full absolute -top-[0] p-4">
                        <button onClick={() => setActiveButton("nofav")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="size-5">
                                <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                            </svg>
                        </button>
                    </div>
                )}
                {activeButton === "nofav" && (
                    <div class="h-full w-full absolute -top-[0] p-4">
                        <button onClick={() => setActiveButton("fav")}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor" className="size-5">
                                <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
            <h2 className='font-bold p-2'>Nombre producto</h2>
            <div className='flex justify-center items-center'>
   <h2 className=' p-2 line-through'>$1982,56</h2>   <h2 className=' p-2 text-emerald-600'>$1982,56</h2>
            </div>
         
            <div className='flex justify-center items-center' >
                <button className='pl-4 pr-4 pt-2 pb-2 border-2 b-slate-300'  onClick={restar}>-</button><button className='pl-4 pr-4 pt-2 pb-2 border-2 b-slate-300'>{total}</button ><button className='pl-4 pr-4 pt-2 pb-2 border-2 b-slate-300' onClick={sumar}>+</button>
            </div>

             {activeAdd === "noadd" && (
            <div className='flex justify-center items-center p-2 border-2 border-red-700 rounded-xl p-2 text-red-700 m-4' onClick={() => setActiveAdd("add")}>

                <button className=''>Agregar
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>


            </div>
             )}
             
             {activeAdd === "add" && (
            <div className='flex justify-center items-center p-2 border-2 border-emerald-500 rounded-xl p-2 text-emerald-500 m-4' onClick={() => setActiveAdd("noadd")}>

                <button className=''>Agregado
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-emerald-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>


            </div>
             )}



        </div>
    )
}

export default CardSale

