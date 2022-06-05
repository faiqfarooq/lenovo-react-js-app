import React from 'react';
import star from '../../images/star.png';
import laptop1 from '../../images/lap1.jpg'
const Laptop = (props) => {
    return ( 
        <div>
            <div className="row     g-4">
        <div className="col">
          <div className="card h-100">
            <img src={laptop1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.modelo}</h5>
              <p className="card-text">Starting at 
<span className='text-danger price_font'> {" "}${props.priceo}</span></p>
            </div>
            <div className="card-footer">
              <small className="text-muted"><img src={star} className="star_size" alt="" /><img src={star} className="star_size" alt="" /><img src={star} className="star_size" alt="" /><img src={star} className="star_size" alt="" /></small>
            </div>
          </div>
        </div>
        
    
      </div>
      
        </div>
     );
}
 
export default Laptop;