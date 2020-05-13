import React,{useState} from 'react'
import{FiMenu,FiX} from 'react-icons/fi'
import {animateScroll as scroll } from "react-scroll";
import {Link,NavLink} from 'react-router-dom'
import NavIcon from './NavIcon'
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
       <div className='d-flex justify-content-center align-items-center mt-4'
         style={{height:'1.8rem',width:'2.3rem'}}>
         <label className='animated swing' style={{cursor:"pointer"}}
           title='menu' data-toggle='collapse' data-target="#everything2">
           <NavIcon className='navbar-toggler barz' color='white' size=''/>{/*hamburger icon*/}
         </label>
       </div>
       {/* Whatever is in the 'everything' div will show/collapse when CLICK is clicked*/}
       <div className='collapse navbar-collapse justify-content-end' id='everything2'>
         <nav className='navbar-nav'style={{backgroundColor:'#F8DE08',height:'380px',color:'#212022',border:"white 2px"}}>
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
