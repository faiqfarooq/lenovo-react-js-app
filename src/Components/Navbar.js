import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <div>
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
          <Link className="nav-link active text_style" aria-current="page" to="/pc-&-tablets">PC & tablets</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link text_style " to="/phones">Phones</Link>
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



<hr style={{height: '2px', width: '100%', borderWidth: 0, color: 'black', backgroundColor: 'black'}} />

        </div>
     );
}
 
export default Navbar;