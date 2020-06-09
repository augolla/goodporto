import React from 'react'

function SkillList(props) {
  return(
    <div className='col-12 col-md-4'>
      <div className='SkillDiv'>{props.icon}</div>
      <div className='SkillDiv'><h5>{props.title}</h5></div>
      <div className='SkillDiv'><p>{props.description}</p></div>
      <div className='SkillDiv'>
        <div></div>
        <h6 style={{color:'#292F38'}}>{props.tools}</h6><
      /div>
    </div>
  )
}

export default SkillList
