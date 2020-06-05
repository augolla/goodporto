import React from 'react'
import NavBar from '../NavBar/NavBar'
import './About.css'
import Webdesign from '../Icons/Webdesign'
import AiBrain from '../Icons/AiBrain'
import Code from '../Icons/Code'

function About() {
  return (
    <div className='About'>
     <NavBar/>
     <div className='AboutMe container mt-4 text-center'>
       <div className='AboutHeader'>A<span>BOU</span>T</div>
       <div style={{height:'40px'}}></div>
       <h2>Hi!! My name's Austine.</h2>
       <p>I am a full-stack developer,UI/UX designer and Data Scientist from Nairobi</p>
       <p>I design and develop websites and distributed software systems.</p>
       <p>I also like working on AI/ML projects and other technical data science work </p>
     </div>
     <div style={{height:'40px'}}></div>
     <div className='container-md d-flex justify-content-center'>
       <div className='row p-0 d-flex justify-content-center' style={{width:'95%',color:'#CACACA',marginBottom:"-280px"}}>
         <div className='col-12 col-md-4 text-center d-flex justify-content-center mb-2'style={{}}>
           <div style={{background:"#212022",height:'350px',width:'120%',borderRadius:'2%',padding:'10px'}}>
             <h5>Full-Stack Web Development</h5>
             <Code/>
           </div>
         </div>
         <div className='col-12 col-md-4 text-center d-flex justify-content-center mb-2'>
           <div style={{background:"#212022",height:'350px',width:'120%',borderRadius:'2%',padding:'10px'}}>
             <h5>Responsive Web Design</h5>
             <Webdesign/>
             <br/>
             <br/>
             <p>Clean,snappy,responsive designs-optimized for performance,SEO and conversions.</p>
          </div>
         </div>
         <div className='col-12 col-md-4 text-center d-flex justify-content-center mb-2'>
          <div style={{background:"#212022",height:'350px',width:'120%',borderRadius:'2%',padding:'10px'}}>
            <h5>Artificial Intelligence</h5>
            <AiBrain color="white"/>
          </div>
         </div>
       </div>
     </div>
     <div className='AboutMe-Services container jumbotron'
       style={{height:'350px',background:'#08FDD8'}}>
     </div>
     <p>Check out some of my <a href='/projects'>projects</a></p>
     <p>I am open to working on ambitious projects and working remotely.</p>
     <p>Feel free to <a href='/contacts'>contact me.</a></p>
    </div>
  );
}

export default About
