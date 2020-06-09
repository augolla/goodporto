import React from 'react'
import {Link} from 'react-router-dom'
import './About.css'

function AboutParagraph() {
  return (
      <div className='AboutParagraph'>
        <div className='text-center'>
          <h3 style={{color:'white',fontWeight:'bolder'}}>Hello,my name is Austine.</h3>
          <p style={{lineHeight:'16px',color:'#CACACA'}}>I am a full-stack developer,UI/UX designer and Data Scientist from Nairobi</p>
          <p style={{lineHeight:'16px',color:'#CACACA'}}>I design and develop websites and distributed software systems.</p>
          <p style={{lineHeight:'16px',color:'#CACACA'}}>I also like working on AI/ML projects and other technical data science work </p>
          <p style={{lineHeight:'16px',color:'#CACACA'}}>Check out some of my recent work on the<button className='animated headShake btn1'><Link to='/projects'> my work page</Link></button>.</p>
          <p style={{lineHeight:'16px',color:'#CACACA'}}>Have a project, idea or problem you'd like to discuss?Feel free to <button className='animated headShake btn2'><Link to='/contacts'> contact me</Link></button>.</p>
        </div>
      </div>
  );
}

export default AboutParagraph
