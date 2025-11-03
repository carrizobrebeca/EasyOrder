import React, { useState } from 'react'

const CardOfertas = () => {
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
        <div className='h-[300px] w-[500px] bg-white border-2 b-slate-300'>
            <div className='flex justify-center items-center bg-orange-400'>
                 <h2 className='font-bold p-2 text-white'>Agua 500cc + Agua 2Lt</h2> 
            </div>
           <div class="relative text-gray-600 flex items-center bg-orange-300 m-2">
                 <div className='flex justify-center items-center bg-orange-400'>
                 <h2 className='font-bold p-2 text-white'>Agua 500cc + Agua 2Lt</h2> 
            </div>
                <h2 className="flex justify-center items-center pl-6">
                    <img className='h-[200px]' src="https://static.vecteezy.com/system/resources/previews/042/542/509/non_2x/ai-generated-water-bottle-png.png" alt="" />
                    <h2 className='text-red-500 font-bold text-4xl'>+</h2>
                    <img className='h-[200px]' src="https://static.vecteezy.com/system/resources/previews/042/542/509/non_2x/ai-generated-water-bottle-png.png" alt="" />
                </h2>

                <div class="h-full w-full absolute -top-[0] p-4">
                    <h2 className='text-red-500 font-bold text-4xl'>-30%</h2>
                </div>

            </div>
            <div className='flex justify-center items-center bg-orange-400'>
                 <h2 className='font-bold p-2 text-white'>Agua 500cc + Agua 2Lt</h2> 
            </div>
          
      
           

        

           



        </div>
    )
}

export default CardOfertas

