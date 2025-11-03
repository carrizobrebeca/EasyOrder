import React, { useState } from 'react'

const CardSugerido = () => {
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
                
            </div>
            <h2 className=' p-2'>Agua mineral Glaciar</h2>
            <h2 className=' pl-2'>2 Lt 1x6</h2>
            <h2 className=' p-2 font-bold'>$13336,52</h2>
                 <h2 className=' p-2'>$1111,38 c/u</h2>

         



        </div>
    )
}

export default CardSugerido

