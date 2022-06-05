import React from 'react';
import { Link } from 'react-router-dom';
const NewCompoent = () => {
    return ( 
        <div>
             <hr style={{height: '2px', width: '100%', borderWidth: 0, color: 'black', backgroundColor: 'black'}} />
            <h1 className='text-center py-3 text_des'>Our Latest Products</h1>
            <div className='row py-3'>
                <div className='col-3'>
                <div className="card" style={{height: '30rem'}} >
      <Link to={"/*"}> <img src={process.env.PUBLIC_URL + '/images/laptop1.jpg'} className="card-img-top new_size" alt="..." /></Link> 
        <div className="card-body">
        <h5 class="card-title">Lenovo IdeaPad Flex 7 82HS003QGE</h5>
          <p className="card-text">Das 35,6 cm (14") IdeaPad™  5 Mobilprozessor der AMD Ryzen™ 7 4000 Serie.</p>
        </div>
      </div>
                </div>
                <div className='col-3'>
                <div className="card" style={{height: '30rem'}} >
       <Link to={'/*'}><img src={process.env.PUBLIC_URL + '/images/lap1.jpg'} className="card-img-top new_size" alt="..." /></Link> 
        <div className="card-body">
        <h5 class="card-title">Lenovo IdeaPad Flex 5 82HS003QGE</h5>
          <p className="card-text">Das 35,6 cm (14") IdeaPad™  5 Mobilprozessor der AMD Ryzen™ 7 4000 Serie.</p>
        </div>
      </div>
     
                </div>
                <div className='col-3'>
                <div className="card" style={{height: '30rem'}}>
    <Link to={"/*"}>    <img src={process.env.PUBLIC_URL + '/images/pho.jpg'} className="card-img-top new_size" alt="..." /></ Link>
        <div className="card-body">
        <h5 class="card-title">Lenovo IdeaPad Flex 5 82HS003QGE</h5>
          <p className="card-text">Das 35,6 cm (14") IdeaPad™  5 Mobilprozessor der AMD Ryzen™ 7 4000 Serie.</p>
        </div>
      </div>
                </div>
                <div className='col-3'>
                <div className="card" style={{height: '30rem'}}>
       <Link to={"/*"}> <img src={process.env.PUBLIC_URL + '/images/tablet.png'} className="card-img-top new_size" alt="..." /></Link>
        <div className="card-body">
        <h5 class="card-title">Lenovo IdeaPad Flex 5 82HS003QGE</h5>
          <p className="card-text">Das 35,6 cm (14") IdeaPad™  5 Mobilprozessor der AMD Ryzen™ 7 4000 Serie.</p>
        </div>
      </div>
                </div>
                
                

            </div>
            
        </div>
     );
}
 
export default NewCompoent;