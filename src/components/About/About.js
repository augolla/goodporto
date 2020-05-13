import React from 'react'
import NavBar from '../NavBar/NavBar'
import Webdesign from '../Icons/Webdesign'
import AiBrain from '../Icons/AiBrain'
import Code from '../Icons/Code'

function About() {
  return (
    <div className='About'>
     <NavBar/>
     <div className='jumbotron bg bg-white'></div>
     <div className='AboutMe container mt-4 text-center'
       style={{height:'',background:"#8E8E8E",lineHeight:"1.2"}}>
       <h2>Hi!! My name's Austine.</h2>
       <p>I am a full-stack developer,UI/UX designer and Data Scientist from Nairobi, Kenya.</p>
       <p>I design and develop websites and distributed software system.</p>
       <p>I also like working on AI/ML projects and other technical data science work  </p>
       <p>Check out some of my <a href='/projects'>projects</a></p>
       <p>I am open to working on ambitious projects and working remotely.</p>
       <p>Feel free to <a href='/contacts'>contact me.</a></p>
     </div>
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
       style={{height:'350px',background:'#F8DE08'}}>
     </div>
    </div>
  );
}

export default About
