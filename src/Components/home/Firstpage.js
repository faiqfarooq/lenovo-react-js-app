import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Firstpage = () => {
    return ( 
        <div>
        <div className=" position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal text_des">Lenovo</h1>
          
          <p className="lead fw-normal">We Produce world fastest and stylish phones , Latops and Tabs. Lets Explore the world with us.</p>
          <Link className="btn btn-outline-secondary text_des" to="/form">Start Here</Link>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        
      </div>





        </div>
     );
}
 
export default Firstpage;