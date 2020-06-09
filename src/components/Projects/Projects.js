import React from 'react'
import './Projects.css'
import NavBar from '../NavBar/NavBar'
import NewProject from './NewProject'

function Projects() {
  return (
    <div style={{height:'800px',background:'#292F38'}}>
     <NavBar/>
     <div className="jumbotron" style={{height:'100px'}}></div>
     <div className='AllProjects row '>
       <NewProject
         source="https://picsum.photos/250/122" name='Project one'/>
       <NewProject
         source="https://picsum.photos/250/122" name='Project two'/>
       <NewProject
         source="https://picsum.photos/250/122" name='Project three'/>
       <NewProject
         source="https://picsum.photos/250/122" name='Project four'/>
       <NewProject
         source="https://picsum.photos/250/122" name='Project five'/>
       <NewProject
         source="https://picsum.photos/250/122" name='Project six'/>
       <NewProject
         source="https://picsum.photos/250/122" name='Project sev'/>
     </div>
    </div>
  );
}

export default Projects
