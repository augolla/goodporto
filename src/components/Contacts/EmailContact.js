import React,{useState} from 'react'
import {FiCheck} from 'react-icons/fi'
import * as emailjs from 'emailjs-com'
import './Contacts.css'

function EmailContact() {
  const [form,setForm]=useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })
  const [sent,setSent]=useState(true)

  const handleName=(event)=>{
    event.preventDefault()
    setForm({name:event.target.value})
  }
  const handleEmail=(event)=>{
    event.preventDefault()
    setForm({...form,email:event.target.value})
  }
  const handleSubject=(event)=>{
    event.preventDefault()
    setForm({...form,[event.target.name]:event.target.value})
  }
  const handleMessage=(event)=>{
    event.preventDefault()
    setForm({...form,message:event.target.value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    emailjs
      .sendForm(
        "gmail",
        "porto",
        event.target,
        "user_YDlHVhyqP9huIEsiGShhs"
      )
      .then()
      .catch()
      setSent(false)
      console.log(form);
  }

  return (
      <div className='Email'>
        {sent?<div className='d-flex justify-content-center'>
          <form className="EmailForm row" id='email_form' onSubmit={handleSubmit}>
            <div className='col-12 col-md-6 mb-4'>
              <label className='m-0'>Name</label>
              <input className='form-control shadow-none'placeholder='Your name(optional)' name='name' type='text'
              onChange={handleName}/>
            </div>
            <div className='col-12 col-md-6 mb-2'>
              <label className='m-0'>Email</label>
              <input className='form-control shadow-none'placeholder='Email address' name='email' type='email'
                onChange={handleEmail}/>
            </div>
            <div className='col-12 col-md-6 mb-2'>
              <label className='m-0'>Subject</label>
              <input className='form-control shadow-none 'placeholder='Subject(optional)' name='subject' type='text'
                onChange={handleSubject}/>
            </div>
            <div className='col-5'></div>
            <div className='col-12 col-md-6 mb-2'>
              <label className='m-0'>Message</label>
              <textarea className='form-control shadow-none'placeholder='Message' name='message' type='text'
                onChange={handleMessage}/>
            </div>
            <div className='col-12'>
              <button className='submitbtn btn 'title='Send email' type='submit'>
                Send
              </button>
            </div>
          </form>
        </div>:
        <h1 className='d-1 d-flex justify-content-center mr'
          style={{color:'#0DE0C2',fontWeight:'bolder'}}>
          Message Sent Successfully <FiCheck className='ml-3' /><FiCheck/>
        </h1>}
      </div>
  );
}

export default EmailContact
