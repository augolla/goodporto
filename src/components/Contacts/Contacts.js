import React from 'react'
import './Contacts.css'
import {FiPhone,FiAtSign} from 'react-icons/fi'
import NavBar from '../NavBar/NavBar'
import EmailContact from './EmailContact'

function Contacts() {
  return (
    <div>
     <NavBar/>
     <br/>
     <div className="jumbotron bg bg-white" style={{}}></div>
     <div className='container d-flex justify-content-center align-items-center'>
       <div className='ContactMe d-flex align-items-center justify-content-center pl-3'>
         CONTACT ME
       </div>
     </div>
     <div className='ContactMain container'>
       <div className=' pt-4' style={{marginTop:'100px'}}>
         <h5>Reach Me:</h5>
         <h6><span><FiAtSign color="#08FDD8"/>: </span> austinandogola@gmail.com</h6>
         <h6><span><FiPhone color="#08FDD8"/>: </span>+254706459913</h6>
         <div className='container'>
           <EmailContact/>
         </div>
       </div>
     </div>

     {/*/ <div className="d-flex justify-content-center">
     //   <div className='d-flex align-items-center justify-content-center ContactMe'
     //     style={{height:'65px',width:"30%",background:"#1D1D1D"}}>
     //     <h2 className='h6 text-white'>CONTACT ME</h2>
     //   </div>
     // </div>
     // <div className="container-md d-flex justify-content-center"
     //   style={{height:'600px',marginTop:"-30px",background:"#212022"}}>
     //   <EmailContact/>
     // </div>*/}
    </div>
  );
}

export default Contacts
