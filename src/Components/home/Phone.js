import React from 'react';
import imagep1 from '../../images/pho.jpg';
const Phone = (props) => {
    return (
        <div>
           
            <div className="row row-cols-1 row-cols-md-3 g-3">
        <div className="col">
        <div className="card" style={{width: '24rem'}}>
  <img src={imagep1} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p class="card-text">{props.pric}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
      </div>

        </div>
     );
}
 
export default Phone;