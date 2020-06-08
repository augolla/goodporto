import React from 'react'
import NavBar from '../NavBar/NavBar'
import './About.css'
import Webdesign from '../Icons/Webdesign'
import AiBrain from '../Icons/AiBrain'
import Code from '../Icons/Code'
import AboutHeader from './AboutHeader'
import AboutParagraph from './AboutParagraph'
import Skills from './Skills'

function About() {
  return (
    <div className='About'>
     <NavBar/>
     <div className='AboutMe container-fluid mt-4 row'>
       <div className='col-12'><AboutHeader /></div>
       <div className='col-12'><AboutParagraph/></div>
     </div>
     <div className='WhatIDo'>
       <Skills/>
     </div>
     {/*<div style={{height:'40px'}}></div>

     <div className='AboutMe-Services container jumbotron'
       style={{height:'350px',background:'#08FDD8'}}>
     </div>
     <p>Check out some of my <a href='/projects'>projects</a></p>
     <p>I am open to working on ambitious projects and working remotely.</p>
     <p>Feel free to <a href='/contacts'>contact me.</a></p>*/}
  </div>
  );
}

export default About
