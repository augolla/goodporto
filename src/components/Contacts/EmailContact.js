import React,{useState} from 'react'

function EmailContact() {
  const [inputStyle,setInputStyle]=useState({
    borderRadius:"1px",
    background:"#2B2B2B",
    borderTop:'0',
    borderRight:"0",
    borderLeft:"0",
    borderColor:"red"
  })
  return (
      <div className='Email'
      style={{marginTop:'40px',marginRight:'2px',width:'75%',background:'#212022',color:'#CACACA',padding:'20PX'}}>
        <div>
          <h4>Email:</h4><h6>austinandogola@gmail.com</h6>
        </div>
        <div className='d-flex justify-content-center'>
          <form className='row' style={{width:'75%'}}>
            <div className='form-group col-12 col-md-6' >
              <label>Name:</label>
              <input style={inputStyle}placeholder="Your name(Optional)" className='form-control' />
            </div>
            <div className='form-group col-12 col-md-6'>
              <label style={{color:"#757575"}}>Email:</label>
              <input style={inputStyle} type='email' placeholder="Email" className='form-control' />
            </div>
            <div className='form-group col-12 '>
              <input style={inputStyle} type='text' id='' placeholder="Subject" className='form-control' />
            </div>
            <div className='form-group col-12' >
              <textarea style={inputStyle} placeholder="Message" className='form-control form-control-lg' ></textarea>
            </div>
            <div className='col-4'>
              <button type="submit" className="btn btn-warning">Send</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default EmailContact
