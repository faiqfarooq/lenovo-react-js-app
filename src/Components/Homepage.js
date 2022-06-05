import React from 'react';
import Footer from './Footer';
import Cardlenovo from './home/Cardlenovo';
import Firstpage from './home/Firstpage';
import Navbar from './Navbar';
import NewCompoent from './NewComponent';
const Homepage = () => {
    return ( 
        <div>
            <Navbar/>
            <Firstpage/>
            <Cardlenovo/>
            <NewCompoent/>
            <Footer/>
        </div>
     );
}
 
export default Homepage;