import React, {useEffect} from 'react';


function Navbar() {
    return (
        <nav id="menu" className="bg-white h-16 shadow-md flex flex-row">
                <div className="flex flex-row m-4" style = {{width: "1200px", margin: "20px auto"}}>
                    <div className="-mb-px flex justify-start">
                        <li className = "list-none"> <a href="/admin"><img className = "w-62 -mt-1" src="images/logo.png" alt=""/> </a></li>
                    </div>
                    <div className="flex-col">
                            <div className="flex flex-row justify-end mb-2 -mt-3 text-xs">
                                <li className = "list-none text-gray-400">Ленинградская область, гор.Тихвин</li>
                                <li className = "list-none ml-7 text-gray-400">+7 (911) 989-31-20 | +7 (965) 079-79-90</li>
                                <li className = "list-none ml-7 text-gray-400" ><a href=""><img className = "w-4" src="images/insta.jpg" alt=""/></a></li>
                                <li className = "list-none ml-2 text-gray-400"><a href=""><img className = "w-4" src="images/vk.png" alt=""/></a></li> 
                            </div>
                            <img className = "w-screen" src="images/Line 4.png" alt=""/>
                            <div className="flex justify-center">
                                <li className = "  list-none " data-menuanchor="block1"><a href="#sectionOne">Главная</a></li>
                                <li className = "list-none ml-40" data-menuanchor="block5"><a href="#section5">О нас</a></li>
                                <li className = "list-none ml-40" data-menuanchor="block6"><a href="#section6">Корзина</a></li>
                                <li className = "list-none ml-40" data-menuanchor="block7"><a href="#section7">Доставка</a></li>
                                <li className = "list-none ml-40" data-menuanchor="block8"><a href="#section8">Карта</a></li>
                            </div>
                    </div>
                </div>
</nav>
       
    );
}

export default Navbar;
