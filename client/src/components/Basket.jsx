import React, {useEffect} from 'react';


function Basket() {
    return (
        
       <>
       <div style = {{height: "80vh", margin: "10px auto ", background: "rgba(166, 182, 198, 0.44)"}}>
        <div className="text-4xl pt-8 font-serif font-light text-center" style={{'text-shadow': '1px 1px 2px gray'}}>Корзина</div>

        <div class="container mx-auto max-w-lg h-screen flex flex-col space-y-4 justify-center items-center">
            <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex p-3">
                    <div class="font-semibold  pt-4 text-gray-700">
                        Мясо бройлера 1кг
                    </div>
                    <div className="">
                    <button  type="button" className="border w-50 border-white-500 bg-white text-black rounded-md px-4 py-2 mr-2 transition duration-500 ease select-none hover:bg-white-600 focus:outline-none focus:shadow-outline" >
                    -
                    </button>
                    1
                    <button  type="button" className="border w-50 border-white-500 bg-white text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white-600 focus:outline-none focus:shadow-outline" >
                    +
                    </button>
                    </div>
                </div>
    
            </div>
        </div>
  
       </div>
       </>       
       
    );
}

export default Basket;
