import React from 'react'
import './NewProject.css'
import $ from 'jquery'

function NewProject(props) {
  $('.PopupShow').click(function(){
    console.log('clicked');
  })
  return (
    <div className='ProjectZote col-12 col-md-4 d-flex justify-content-center'>
      <div className='ProjectMoja'>
        <div className='MainShow'>
         <header style={{height:'20px',background:'#01B79C',display:'flex',alignItems:'center',color:'white',paddingLeft:'2px'}}>
           <div style={{height:'10px',width:"10px",background:'#FC0853',borderRadius:'50%',marginRight:'3px'}}></div>
           <div style={{height:'10px',width:"10px",background:'#FD5D08',borderRadius:'50%',marginRight:'3px'}}></div>
           <div style={{height:'10px',width:"10px",background:'#FDD808',borderRadius:'50%',marginRight:'3px'}}></div>
           <div><p style={{fontSize:'12px',marginTop:"16px",marginLeft:'10px'}}>{props.name}</p></div>
         </header>
         <img src={props.source} alt="cover" style={{width:'100%'}}/>
        </div>
         <div className='PopupShow'>
          <h4>{props.name}</h4>
          <h5>{props.category}</h5>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-sm mr-2'>Live Preview</button>
            <button className='btn btn-sm ml-2'>View Code</button>
          </div>
          <div className='Technologies'>
            <h6 className='animated fadeInUp'>{props.tech}</h6>
          </div>
         </div>
     </div>
    </div>
  );
}

export default NewProject
