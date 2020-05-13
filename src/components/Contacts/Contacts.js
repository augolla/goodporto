import React from 'react'
import NavBar from '../NavBar/NavBar'
import EmailContact from './EmailContact'
import MobileContact from './MobileContact'

function Contacts() {
  return (
    <div>
     <NavBar/>
     <br/>
     <div className="jumbotron bg bg-white" style={{}}></div>
     <div className="d-flex justify-content-center">
       <div className='d-flex align-items-center justify-content-center'
         style={{height:'65px',width:"20%",background:"#1D1D1D"}}>
         <h3 style={{color:"white"}}>CONTACT ME</h3>
       </div>
     </div>
     <div className="container-md d-flex justify-content-center"
       style={{height:'400px',marginTop:"-30px",background:"#212022"}}>
       <EmailContact/>
     </div>
    </div>
  );
}

export default Contacts
