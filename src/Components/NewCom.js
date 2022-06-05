import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import Laptopdata from './home/Laptopdata';

const NewCom = (props) => {
    return ( 
        <div>
            <Navbar/>
           <Laptopdata/>
            <Footer/>
        </div>
     );
}
 
export default NewCom;