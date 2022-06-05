import React,{useState} from 'react';
import { useFormik } from 'formik';
const Form = (props) => {
  const [user, setUser] = useState(
    {
     index:"", name:"",email:"",country:"",gender:'',picture:"",userstatus:'',password:"",newcom:''
    }
  );
   let name, value;
  const handleInputs = (e) =>{
    name= e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value });
  }
  const handleSubmit =(value)=>{
   value .preventDefault();
   props.func(user);

  }
 const formik = useFormik({
  validate : (value ) => {
    let errors = {};
  
    if (!value.name) {
      errors.name = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.name)) {
      errors.name = 'Invalid Name';
    }
  
  
  
    return errors;
  }
 });
 

  
    return (
        <div>
            <form onSubmit={handleSubmit}>
              
              <div className='row py-3 bg-whitesmoke'>
                <div className='col-3'></div>
                <div className='col-6 py-3'>
                <h2 className='text-center '>Register <span className='text_des text-danger'>YOURSEF </span> To the <span className='text_des text-danger'>FUTURE</span> </h2>
                <div className="row mb-3 py-3">
    <label htmlFor="exampleInputname" className="col-sm-2 col-form-label"> Full Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="name" value={user.name}  onChange={handleInputs} id="exampleInputname"/>
     
     
    </div>
  </div>
  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputEmail" className="col-sm-2 col-form-label"> Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" name="email" value={user.email}required  onChange={handleInputs} id="exampleInputEmail2"/>
      <div id="emailHelp" className="form-text">'Email' is required</div>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputnewcom" className="col-sm-2 col-form-label"> New Component</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" name="newcom" value={user.newcom} required onChange={handleInputs} id="exampleInputnewcom"/>
      <div id="newHelp" className="form-text">'New component' is required</div>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputcountry" className="col-sm-2 col-form-label">Country</label>
    <div className="col-sm-10">
    <select className="form-select" name="country" value={user.country} onChange={handleInputs}required aria-label="select example">
      <option value="">Select Country</option>
      <option value="China">China</option>
      <option value="india">India</option>
      <option value="Japan">Japan</option>
      <option value="Pakistabn">Pakistan</option>
      <option value="South Korea">South Korea</option>
      <option value="Turkey">Turkey</option>
      <option value="United State">United State</option>

    </select>
      <div id="countryHelp" className="form-text">'Program Name' is required</div>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputradio" className="col-sm-2 col-form-label">Gender</label>
    <div className="col-sm-10">
    
  <div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="male"  onChange={handleInputs} id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleInputs} id="flexRadioDefault2"/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Female
  </label>
 
</div>
<div id="radioHelp" className="form-text">'Gender' is required</div>
     
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputcheckbox" className="col-sm-2 col-form-label"></label>
    <div className="col-sm-10">
    
  
  <input className="form-check-input" type="checkbox" value='new user' name="userstatus" id="defaultCheck1"/>{"   "}
  <label className="form-check-label" htmlFor="defaultCheck1">
    New User 
  </label>

  {"   "}
  <input className="form-check-input" type="checkbox" value="old user" name="userstatus" id="defaultCheck2"/>{"   "}
  <label className="form-check-label" htmlFor="defaultCheck2">
    Old User
  </label>
 
<div id="checkboxHelp" className="form-text">'User is using lenovo products' is required</div>
     
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>

  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputpicture" className="col-sm-2 col-form-label">Picture</label>
    <div className="col-sm-10">
      <input type="file" className="form-control" name='picture' value={user.picture}  onChange={handleInputs} id="exampleInputpicture" accept=" image/png"/>
      <div id="pictureHelp1" className="form-text">'User Picture' is required</div>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  
  <div className="row mb-3 py-3">
    <label htmlFor="exampleInputpassword" className="col-sm-2 col-form-label"> Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" name='password' value={user.password} required onChange={handleInputs} id="exampleInputpassword"/>
      <div id="passwordHelp" className="form-text">'Password' is required</div>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
 








  
  
  <button type="submit" className="btn btn-primary">Submit</button>

                </div>
                <div className='col-3'></div>
              </div>
 
</form>
<div>
</div>


        </div>
      );
}
 
export default Form;