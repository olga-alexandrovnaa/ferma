import React, {useEffect} from 'react';


function BottomBar() {
    return (
        <div className="flex flex-row justify-center items-end bg-white mb-3">
                <a href="#sectionTwo"><img className = "" src="images/meat.png" alt=""/></a>
                <a href="#section4"><img className = "ml-20" src="images/chicken.png" alt=""/></a>
                <a href="#sectionThree"><img className = "ml-20" src="images/egg.png" alt=""/></a>
        </div>
    );
}

export default BottomBar;
