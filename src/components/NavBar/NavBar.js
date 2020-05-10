import React,{useState} from 'react'
import{FiMenu,FiX} from 'react-icons/fi'
import {animateScroll as scroll } from "react-scroll";
import {Link,NavLink} from 'react-router-dom'
import $ from 'jquery'

function NavBar() {
const[showX,setShowX]=useState(true)
const toggleX=()=>{
  setShowX(!showX)
}

 return(
   <div>
     <nav className='navbar fixed-top navbar-expand-xl'>
       <i className='navbar-brand'></i>
       <div className='d-flex justify-content-center align-items-center'
         style={{height:'3rem',width:'3rem',backgroundColor:'',borderRadius:'50%'}}>
         <label onClick={toggleX} className='navbar-toggler animated swing mt-2' style={{cursor:"pointer"}}
           title='menu' data-toggle='collapse' data-target="#everything2">
           {showX?<FiMenu className='bars' color='white' size='2rem'/>:""}{/*hamburger icon*/}
           {!showX?<FiX className='x animated' color='white' size='2rem'/>:""}
         </label>
       </div>
       {/* Whatever is in the 'everything' div will show/collapse when CLICK is clicked*/}
       <div className='collapse navbar-collapse justify-content-end' id='everything2'>
         <nav className='navbar-nav' style={{backgroundColor:'#F8DE08',height:'380px',color:'#212022'}}>
           <NavLink className='nav-link ' to='/home'>HOME</NavLink>
           <NavLink className='nav-link ' to='/about'>ABOUT ME</NavLink>
           <NavLink className='nav-link ' to='/projects'>PORTFOLIO</NavLink>
           <NavLink className='nav-link ' to='/contacts'>CONTACT ME</NavLink>
         </nav>
       </div>
     </nav>
   </div>
 )
}


export default NavBar
