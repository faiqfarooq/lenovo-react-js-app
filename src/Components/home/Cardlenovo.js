import React from 'react';
import { Link } from 'react-router-dom';
const Cardlenovo = () => {
    return ( 
        <div>
          <h2 className="text-center py-5 text_des">Our Products</h2>
     
             
      <div className="row py-3">
        <div className="col-md-4">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">Laptops</strong>
              <h3 className="mb-0 text_des">You Pay What We Pay</h3>
              <div className="mb-1 text-muted">Limited Time Offer</div>
              <p className="card-text mb-auto py-3">Pay what Lenovo employees pay for select PCs and electronics..</p>
              <Link to="/pc-&-tablets" class="btn btn-primary text_des ">Explore More</Link>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img src={process.env. PUBLIC_URL + '/images/laptop.png'} className="bd-placeholder-img" width={200} height={250} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">Tablets</strong>
              <h3 className="mb-0 text_des">Only Legends Know</h3>
              <div className="mb-1 text-muted">Limited Time Offer</div>
              <p className="mb-auto py-3">If you're looking for the best of the best then you are on right place.</p>
              <Link to="/pc-&-tablets" class="btn btn-primary text_des ">Explore More</Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={process.env. PUBLIC_URL + '/images/tablet.png'} className="bd-placeholder-img " width={200} height={250} alt="" />
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-danger">Phones</strong>
              <h3 className="mb-0 text_des">One for You & One for Mom</h3>
              <div className="mb-1 text-muted">Limited Time Offer</div>
              <p className="mb-auto py-3">Buy One, Get One Free! Get Lenovo's 5G phone. Ships Free..</p>
              <a href="#" class="btn btn-primary text_des ">Explore More</a>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img src={process.env. PUBLIC_URL + '/images/phone1.png'} className="bd-placeholder-img " width={200} height={250} alt="" />
            </div>
          </div>
        </div>
      </div>

        </div>
     );
}
 
export default Cardlenovo;