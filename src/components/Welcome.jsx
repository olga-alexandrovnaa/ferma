import React, {useEffect} from 'react';


function Welcome() {
    return (
        <div className="relative flex inline-block justify-center">
                <img className = "lg:w-full" style={{height: "screen"}} src="images/fon.jpg" alt=""/>
                <span className="absolute mt-40 text-white text-lg font-semibold text-shadow-lg text-6xl">ЭКОФЕРМА СЕМЕЙНАЯ</span>
            </div>
       
    );
}

export default Welcome;
