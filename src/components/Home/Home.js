import React from 'react'
import NavBar from '../NavBar/NavBar'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

function Home() {
  return (
    <div className='container-fluid Home' style={{height:'600px',background:'#212022',color:'#CACACA'}}>
      <NavBar/>
      <div className='main'>
        <h2 className='display-4' style={{fontFamily:'Bebas Neue',letterSpacing:'1rem'}}>
          AUSTiN OGOLA
        </h2>
        <p style={{color:'#F8DE08'}}>
          Software Engineer  |  FullStack Developer  |  Data Scientist
        </p>
        <div className='d-flex align-items-centre justify-content-center mt-5'>
          <span className='btn animated bounce'title='See projects and Skills'
            style={{borderColor:"#F8DE08",borderWidth:'1.3px',borderRadius:'2px',fontWeight:'bold',cursor:'pointer'}}>
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home
