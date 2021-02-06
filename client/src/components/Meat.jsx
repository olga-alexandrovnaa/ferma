import React, {useEffect} from 'react';
import Card from './Card'

     const getCards = ({products, id}) => {
       let content = [];
       for (let i = id*3; (i < products.length) && (i<id+3); i++) {
         const item = products[i];
         content.push(<Card item={item}/>);
       }
       return content;
     };
     
      const getProducts = ({products}) => {
        let content = [];
        let Bottons = [];
        let Cards = [];
        let sliders=Math.ceil(products.length/3); 
        for (let i = 0; i < sliders; i++) {
            Cards = getCards(products, i);
            Bottons.push(<a class="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href={"#slide-"+(i+1)}>{i+1}</a>);
            if(i===sliders-1){
                content.push(
                    <div class=" snap-start w-full h-full flex items-center justify-center flex-shrink-0 flex flex-col" id={"slide-"+(i+1)}>
                    <div className="-mb-8 text-4xl font-serif font-light mt-5" style={{'text-shadow': '1px 1px 2px gray'}}>Фермерское Мясо</div>
                    <div className="flex flex-row">
                    {Cards}
                    </div>
                    <div class="flex mt-6 mb-5">
                    {Bottons}
                    </div>
                    </div>
                )
            }
        }
        return content;
      };
     
     
   

function Meat(props) {
  //console.log(props.products)
    let products= Array.from(props.products);
    products.filter((o) => o.type_id == "2");
    

    
    return (
        <div class="flex flex-col items-center " style = {{margin: "-50px auto 0", background: "rgba(166, 182, 198, 0.44)"}}>

        <div class="w-full rounded overflow-x-hidden overflow-y-hidden flex snap-x" style={{height: "80vh"}}>
            {/*getProducts(products)*/}
        </div>
        </div>
       
    );
}

export default Meat;
