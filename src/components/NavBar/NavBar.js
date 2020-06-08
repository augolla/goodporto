import React from 'react'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import NavIcon from './NavIcon'

function NavBar() {
 return(
   <div>
     <nav className='navbar fixed-top navbar-expand- '>
       <i className='navbar-brand'></i>
       <div className='d-flex justify-content-center align-items-center mt-3'
         style={{height:'1.8rem',width:'2.3rem'}}>
         <label title='menu' data-toggle='collapse' data-target="#everything2">
           <NavIcon/>{/*hamburger icon*/}
         </label>
       </div>
       {/* Whatever is in the 'everything' div will show/collapse when CLICK is clicked*/}
       <div className='collapse navbar-collapse justify-content-end' id='everything2'>
         <nav className='navbar-nav'style={{backgroundColor:'#08FDD8',height:'380px',color:'#212022',border:"white 2px"}}>
           <NavLink className='nav-link ' to='/home'>HOME</NavLink>
           <NavLink className='nav-link ' to='/about'>ABOUT ME</NavLink>
           <NavLink className='nav-link ' to='/projects'>PORTFOLIO(MY WORK)</NavLink>
           <NavLink className='nav-link ' to='/contacts'>CONTACT ME</NavLink>
         </nav>
       </div>
     </nav>
   </div>
 )
}


export default NavBar
