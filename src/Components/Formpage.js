import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Form from './home/Form';

    const Formpage = (props) => {
        const faiq =(value)=>{
            props.faiq(value);
         
        }
    return ( 
        <div>
           <Navbar/>
           <Form func={faiq}/>
           <Footer/>
        </div>
     );
}
 
export default Formpage;