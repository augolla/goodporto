import React from 'react'
import './About.css'

function SkillCard() {
  return(
    <div className='container-md d-flex justify-content-center'>
      <div className='row p-0 d-flex justify-content-center' style={{width:'95%',color:'#CACACA',marginBottom:"-280px"}}>
        <div className='col-12 col-md-4 text-center d-flex justify-content-center mb-2'style={{}}>
          <div className='Card'>
            <h5>Full-Stack Web Development</h5>
            <Code/>
          </div>
        </div>
        <div className='col-12 col-md-4 text-center d-flex justify-content-center mb-2'>
          <div className='Card'>
            <h5>Responsive Web Design</h5>
            <Webdesign/>
            <br/>
            <br/>
            <p>Clean,snappy,responsive designs-optimized for performance,SEO and conversions.</p>
         </div>
        </div>
        <div className='col-12 col-md-4 text-center d-flex justify-content-center mb-2'>
         <div className='Card'>
           <h5>Artificial Intelligence</h5>
           <AiBrain color="white"/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
