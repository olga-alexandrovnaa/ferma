import React, {useEffect} from 'react';
import Card from './Card'

function Egg() {
    return (
        <div class="flex flex-col items-center " style = {{ margin: "-80px auto 0"}}>

        <div class="w-full  rounded overflow-x-hidden overflow-y-hidden flex snap-x" style={{height: "80vh"}}>
            <div class=" snap-start w-full h-full flex items-center justify-center flex-shrink-0 flex flex-col" id="slide-1">
            <div className="-mb-8 text-4xl font-serif font-light mt-5" style={{'text-shadow': '1px 1px 2px gray'}}>Яйца</div>
            <div className="flex flex-row">
            <Card/>
            <div class="ml-6"> <Card/> </div>
            </div>
            </div>
        </div>
        </div>

        
       
    );
}

export default Egg;
