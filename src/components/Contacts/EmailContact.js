import React,{useState} from 'react'

function EmailContact() {
  const [inputStyle,setInputStyle]=useState({
    borderRadius:"1px",
    background:"#2B2B2B",
    borderTop:'0',
    borderRight:"0",
    borderLeft:"0",
    borderColor:"#F8DE08",
    minHeight:'50px',
    caretColor:'#F8DE08'
  })
  return (
      <div className='Email'
      style={{marginTop:'40px',marginRight:'2px',width:'90%',background:'#212022',color:'#CACACA',padding:'20PX'}}>
        <div>
          <h4>Email:</h4><h6>austinandogola@gmail.com</h6>
        </div>
        <div className='d-flex justify-content-center'>
          <form className='row' style={{width:'100%'}}>
            <div className='form-group col-12 col-md-6' >
              <label>Name:</label>
              <input style={inputStyle}placeholder="Your name(Optional)" className='form-control' />
            </div>
            <div className='form-group col-12 col-md-6'>
              <label >Email:</label>
              <input style={inputStyle} type='email' placeholder="Email" className='form-control' />
            </div>
            <div className='form-group col-12 '>
              <input style={inputStyle} type='text' id='' placeholder="Subject" className='form-control' />
            </div>
            <div className='form-group col-12' >
              <textarea style={inputStyle} placeholder="Message" className='form-control form-control-lg' ></textarea>
            </div>
            <div className='col-4'>
              <span className='submitbtn btn 'title='See projects and Skills'
                style={{borderColor:"#F8DE08",borderWidth:'1.1px',borderRadius:'2px',fontWeight:'bold',cursor:'pointer'}}>
                Send
              </span>
            </div>
          </form>
        </div>
      </div>
  );
}

export default EmailContact
