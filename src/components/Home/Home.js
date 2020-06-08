import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'

import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='container-fluid Home' style={{height:'800px',background:'#292F38',color:'#CACACA'}}>
      <NavBar/>
      <div className='main'>
        <h2 className='display-4 name'>AUSTIN OGOLA</h2>
        <div className='d-flex mainp' style={{color:'#F8DE08'}}>
          <p>Software Engineer&nbsp;</p>
          <p>|</p>
          <p>&nbsp;FullStack Developer&nbsp;</p>
          <p>|</p>
          <p>&nbsp;Data Scientist</p>
        </div>
        <div className='d-flex align-items-centre justify-content-center mt-5'>
          <span className='homebtn btn'title='See projects and Skills'>
            <Link to='/projects'>Learn More</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home
