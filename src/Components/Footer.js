import React from 'react';
const Footer = () => {
    return ( 
        <div>
          
             <div className=" bg-light">
             <hr style={{height: '2px', width: '100%', borderWidth: 0, color: 'black', backgroundColor: 'black'}} />
        <footer className="container py-5">
          <div className="row">
            <div className="col-2">
              <h5>Products</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Phone</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tablets</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mobile Phones</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Accesseries</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gaming & VR</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact US</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Policy FAQ</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Return policy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Technical Support</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Provide Feedback</a></li>
              </ul>
            </div>
            <div className="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved by FAIQA FAROOQ.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
        </div>
     );
}
 
export default Footer;