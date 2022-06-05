import {useState} from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import Formpage from './Components/Formpage';
import Regshow from './Components/Regshow';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Farmshowpage from './Components/Farmshowpage';
import NewCom from './Components/NewCom';
import Phonecomp from './Components/Phonecomp';



function App() {
  const [values,setValues]=useState([]);
  const faiqfarooq=(value)=>
  {
    setValues((prev) =>{
  return [...prev,value];

}

);

  }

  return (
    <div>
<BrowserRouter>

<Routes>

<Route path='/' element={<Homepage />} />

<Route path='/registration-form' element={<Formpage faiq={faiqfarooq}/>}/>
<Route path='/show' element={<Regshow hero={values}/>}/>
<Route path="*" element={<Farmshowpage />} />
<Route path='/pc-&-tablets' element={<NewCom />}/>
<Route path='/phones' element={<Phonecomp />}/>





</Routes>

</BrowserRouter>

    {/* <Homepage/> */}
    {/* <Formpage/> */}
    </div>
  );
}

export default App;
