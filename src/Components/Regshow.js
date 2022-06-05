import React from 'react';
import { Link } from 'react-router-dom';
const Formshow = (props) => {
    return ( <div>
          <nav className=" navbar-white ">
  <div className="container-fluid">
    <div className='row'>
      <div className='col'><Link className="" to={'/'}>
      <img src={process.env.PUBLIC_URL + "/images/download.png"} alt="" width="124px" height="40px"/>
    </Link></div>
      <div className='col'></div>
      <div className='col'><p>Lenovo<strong style={{whiteSpace: 'normal', color: 'black'}}>PRO</strong>&nbsp;Small Business Store</p></div>
    </div>
    
    
  </div>
</nav>
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid ">
    
   
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav    mb-2 ">
        <li className="nav-item mx-5">
          <Link className="nav-link active text_style" aria-current="page" to="*">PC & tablets</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text_style " to="*">Phones</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link  text_style" to="/newcomponent">New Compt </Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text_style" to={'/registration-form'}>Registration</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text_style" to={'/show'}>Show</Link>
        </li>

        
      
      </ul>
     
    </div>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary text_style" type="submit">Search</button>
      </form>
  </div>
</nav>





































<div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
            <th scope="col">Gender</th>
            <th scope="col">User</th>
            <th scope="col">Password</th>
            <th scope="col">Picture</th>
            <th scope="col">New Component</th>

          </tr>
        </thead>
        <tbody>
   
            
            <th>{props.hero.map((info,i)=>(
              <th>   index={i} name={info.name} email={info.email} country={info.country} gender={info.gender} userstatus={info.userstatus} password={info.password} picture={info.picture} New component={info.newcom}</th>
             
              
            ))}</th>
       
          {/* <tr>
            <th scope="row">{props.hero.index}</th>
            <td>{props.hero[0].name}</td>
            <td>{props.hero[0].email}</td>
            <td>{props.hero[0].country}</td>
            <td>{props.hero[0].gender}</td>
            <td>{props.hero[0].userstatus}</td>
            <td>{props.hero[0].password}</td>
            <td>{props.hero[0].picture}</td>
            <td>{props.hero[0].newcom}</td>
          </tr>
           */}
        </tbody>
      </table>
                </div>
                <div className='col-2'></div>
            </div>













































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
    </div> );
}
 
export default Formshow;