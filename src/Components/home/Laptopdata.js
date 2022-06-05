import React,{useState} from 'react';
import Laptop from './Laptop';
const Laptopdata = (props) => {
    const array =[
        {price:"2,525", model:"ThinkPad X1 Carbon Gen 10 (14” Intel) Laptop"},
        {price:"5,234", model:"ThinkPad T15 Gen 2 (15” Intel) Laptop"},
        {price:"8,489", model:"ThinkPad X2 Carbon Gen 11 (17” Intel) Laptop"},
        {price:"3,936", model:"Legend X5 General Gen 9 (14” Intel) Laptop"},
        {price:"7,070", model:"ThinkPad F1 General Gen 9 (14” Intel) Laptop"},
        {price:"9,806", model:"FuturePad X1 Ninja Gen 4 (12” Intel) Laptop"},
        {price:"5,836", model:"NewPad K1 General Gen 9 (16” Intel) Laptop"},
        {price:"1,036", model:"ThinkPad Z1 Hero Gen 9 (14” Intel) Laptop"}
    ]
 
    return ( 
        <div>
        <div className='  '>
             <div className='row'>
                 <div className='col'>
                 <Laptop priceo={array[0].price} modelo={array[0].model}/>
                 </div>
                 <div className='col'>
                 <Laptop priceo={array[1].price} modelo={array[1].model}/>
                 </div>
                 <div className='col'>
                 <Laptop priceo={array[2].price} modelo={array[2].model}/>
                 </div>
                 <div className='col'>
                 <Laptop priceo={array[3].price} modelo={array[3].model}/>
                 </div>
             </div>
             
             <div className='row py-3'>
                 <div className='col'>
                 <Laptop priceo={array[4].price} modelo={array[4].model}/>
                 </div>
                 <div className='col'>
                 <Laptop priceo={array[5].price} modelo={array[5].model}/>
                 </div>
                 <div className='col'>
                 <Laptop priceo={array[6].price} modelo={array[6].model}/>
                 </div>
                 <div className='col'>
                 <Laptop priceo={array[7].price} modelo={array[7].model}/>
                 </div>
             </div>
             
          
        </div>
        <div className=''>
          
             
          
        </div>
        </div>
     );
}
 
export default Laptopdata;