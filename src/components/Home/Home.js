import React from 'react'
import NavBar from '../NavBar/NavBar'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import MenuLine from '../Icons/MenuLine'

function Home() {
  return (
    <div className='container-fluid Home' style={{height:'800px',background:'#212022',color:'#CACACA'}}>
      <NavBar/>
      <div className='main'>
        <h2 className='display-4 name' style={{fontFamily:'Bebas Neue',letterSpacing:'.9rem'}}>
          AUSTiN OGOLA
        </h2>
        <div className='d-flex mainp' style={{color:'#F8DE08'}}>
          <p>Software Engineer&nbsp;</p>
          <p>|</p>
          <p>&nbsp;FullStack Developer&nbsp;</p>
          <p>|</p>
          <p>&nbsp;Data Scientist</p>
        </div>
        <div className='d-flex align-items-centre justify-content-center mt-5'>
          <span className='homebtn btn animated pulse'title='See projects and Skills' type='submit'
            style={{borderColor:"#F8DE08",borderWidth:'1.3px',borderRadius:'4px',fontWeight:'bold',cursor:'pointer'}}>
            Learn More
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home
