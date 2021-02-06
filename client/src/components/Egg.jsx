import React, { useEffect } from 'react';
import Card from './Card'

function Egg() {
  return (
    <div className="flex flex-col items-center " style = {{ margin: "-80px auto 0" }}>

      <div className="w-full  rounded overflow-x-hidden overflow-y-hidden flex snap-x" style={{ height: "80vh" }}>
        <div className=" snap-start w-full h-full flex items-center justify-center flex-shrink-0 flex flex-col" id="slide-1">
          <div className="-mb-8 text-4xl font-serif font-light mt-5" style={{ textShadow: '1px 1px 2px gray' }}>Яйца</div>
          <div className="flex flex-row">
            <Card />
            <div className="ml-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Egg;
