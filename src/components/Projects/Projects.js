import React from 'react'
import NavBar from '../NavBar/NavBar'
import NewProject from './NewProject'

function Projects() {
  return (
    <div style={{height:'800px',background:'#212022'}}>
     <NavBar/>
     <div className="jumbotron" style={{height:'100px'}}></div>
     <div className='AllProjects row ' style={{paddingLeft:'25px',paddingRight:'25px'}}>
       <NewProject imageSource={"code1h.jpg"}/>
       <NewProject/>
       <NewProject/>
       <NewProject/>
       <NewProject/>
       <NewProject/>
       <NewProject/>
     </div>
    </div>
  );
}

export default Projects
