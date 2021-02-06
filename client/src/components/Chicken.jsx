import React, { useEffect } from 'react';
import Card from './Card'

function Chicken() {
  return (
    <div className="flex flex-col items-center " style = {{margin: "-50px auto 0", background: "rgba(166, 182, 198, 0.44)"}}>

      <div className="w-full rounded overflow-x-hidden overflow-y-hidden flex snap-x" style={{height: "80vh"}}>

        <div className=" snap-start w-full h-full flex items-center justify-center flex-shrink-0 flex flex-col" id="slide-1">
          <div className="-mb-8 text-4xl font-serif font-light mt-5" style={{textShadow: '1px 1px 2px gray'}}>Цыплята</div>
          <div className="flex flex-row">
            <Card/>
            <div className="ml-6"> <Card/> </div>
            <div className="ml-6"> <Card/> </div>
          </div>
          <div className="flex mt-6 mb-5">
            <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-1">1</a>
            <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-2">2</a>
          </div>
        </div>

        <div className=" snap-start w-full h-full flex items-center justify-center flex-shrink-0 flex flex-col" id="slide-2">
          <div className="-mb-8 text-4xl font-serif font-light mt-5" style={{textShadow: '1px 1px 2px gray'}}>Цыплята</div>
          <div className="flex flex-row">
            <Card/>
            <div className="ml-6"> <Card/> </div>
          </div>
          <div className="flex mt-6">
            <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-1">1</a>
            <a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href="#slide-2">2</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chicken;
