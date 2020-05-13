import React from 'react'
import NavBar from '../NavBar/NavBar'

function NewProject(props) {
  return (
    <div className='col-12 col-md-4 d-flex justify-content-center' style={{minHeight:'180px',marginBottom:'25px'}}>
      <div style={{background:"red",width:'100%'}}>
         <img src={props.imageSource} alt="cover image here" style={{width:'100%'}}/>
         <div>
          <div>Description</div>
          <div>Live Preview</div>
          <div>View Code</div>
          <footer></footer>
         </div>
       </div>
    </div>
  );
}

export default NewProject
