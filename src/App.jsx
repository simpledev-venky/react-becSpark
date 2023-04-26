import React from 'react'
import {Route,Routes} from "react-router-dom" 
import Bec from './Bec';
import Notfound from './Notf';
import Stddetails from './Stddetails';
import Navbar from './Navbar';
import Dev from './Dev';
import Privateroute from './Privateroute';

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Bec/>}/>
        <Route path='/:id' element={
        <Privateroute>
          <Stddetails/>
        </Privateroute>
      }
        />
        <Route path='/dev' element = {<Dev/>} />
        <Route path='*' element = {<Notfound/>} />
      </Routes>
    </>
  
  )
}



export default App;
