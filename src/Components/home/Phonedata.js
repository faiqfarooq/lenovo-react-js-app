import React from 'react';
import Laptop from './Laptop';
import Phone from './Phone';
const Phonedata = () => {
  const pho=[
   {price:"670" , model:"faiq "},
   {price:"999" , model:"faiq farooq"},
   {price:"29" , model:"faiq farooq"},
   {price:"99" , model:"faiq farooq"},
   {price:"112" , model:"faiq farooq naich"}
  ]
        
  
    return ( 
      <div>
        <h1 className='text-center'> See our Next generation phones</h1>
        <div  className="row row-cols-1 row-cols-md-3 g-3">

           
            {
              pho.map(phoneo=>
              <Phone pric={phoneo.price}/>)
            }

            {/* <Phone pric={pho.price}/>
            <Phone pric={pho.price}/>
            <Phone pric={pho.price}/>
            <Phone pric={pho.price}/>
            <Phone pric={pho.price}/> */}
        </div>
        </div>
     );
}
 
export default Phonedata;