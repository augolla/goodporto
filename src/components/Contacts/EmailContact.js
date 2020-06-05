import React,{useState} from 'react'

function EmailContact() {
  const [form,setForm]=useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })
  const handleName=(event)=>{
    setForm({name:event.target.value})
  }
  const handleEmail=(event)=>{
    setForm({name:event.target.value})
  }
  const handleSubject=(event)=>{
    setForm({name:event.target.value})
  }
  const handleMessage=(event)=>{
    setForm({name:event.target.value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(form);
    fetch('http://localhost:3000/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  return (
      <div className='Email'>
        <div className='d-flex justify-content-center'>
          <form className="EmailForm row" onSubmit={handleSubmit}>
            <div className='col-12 col-md-6 mb-4'>
              <label htmlFor='name' className='m-0'>Name</label>
              <input className='form-control shadow-none'placeholder='Your name(optional)' name='name' type='text'
              onChange={handleName}/>
            </div>
            <div className='col-12 col-md-6 mb-2'>
              <label htmlFor='email' className='m-0'>Email</label>
              <input className='form-control shadow-none'placeholder='Email address' name='email' type='email'
                onChange={handleEmail}/>
            </div>
            <div className='col-12 col-md-6 mb-2'>
              <label htmlFor='subject' className='m-0'>Subject</label>
              <input className='form-control shadow-none 'placeholder='Subject(optional)' name='subject' type='text'
                onChange={handleSubject}/>
            </div>
            <div className='col-5'></div>
            <div className='col-12 col-md-6 mb-2'>
              <label htmlFor='message' className='m-0'>Message</label>
              <textarea className='form-control shadow-none'placeholder='Message' name='message' type='text'
                onChange={handleMessage}/>
            </div>
            <div className='col-12'>
              <button className='submitbtn btn 'title='Send email' type='submit'
                style={{borderColor:"#08FDD8",borderWidth:'1.1px',borderRadius:'2px',fontWeight:'bold',cursor:'pointer'}}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default EmailContact
