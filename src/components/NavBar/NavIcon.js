import React,{useState} from 'react'

function NavIcon() {
  const [angle1,setAngle1]=useState(0)
  const [angle2,setAngle2]=useState(0)
  const [translate1,setTranslate1]=useState(0,0)
  const [translate2,setTranslate2]=useState(0,0)
  const [display,setDisplay]=useState('block')

  const rotate=()=>{
    if (angle1==0) {
      setAngle1(45);
      setAngle2(-45);
      setTranslate1(9,20)
      setTranslate2(8,-20)
      setDisplay('none')
    }else {
      setAngle1(0);
      setAngle2(0);
      setTranslate1(0,0)
      setTranslate2(0,0)
      setDisplay('block')
    }
  }
  return (
    <div className='NavIcon' onClick={rotate}>
      <div className='burgerline line1' style={{display:`${display}`}} >
      </div>
      <div className='burgerline line2'style={{transform:`rotate(${angle1}deg) translate(${translate1}px)`}} >
      </div>
      <div className='burgerline'style={{transform:`rotate(${angle2}deg) translate(${translate2}px)`}}>
      </div>
    </div>
  );
}

export default NavIcon
