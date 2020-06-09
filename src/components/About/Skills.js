import React from 'react'
import './About.css'
import SkillList from './SkillList'
import Code from '../Icons/Code'
import Webdesign from '../Icons/Webdesign'
import AiBrain from '../Icons/AiBrain'

function Skills() {
  return (
    <div>
      <div className='Skills d-flex justify-content-center'>
        <div>
          W<span>hat I </span>do
        </div>
      </div>
      <div className='row'>
        <SkillList icon=<Webdesign/>
        title="Responsive Webdesign"
        tools="HTML/CSS | Bootstrap | Photoshop | AdobeXD"/>
        <SkillList icon=<Code/>
        title="Full-Stack Development"
        tools='HTML/CSS | Javascript | React | Node | GrpahQl | Express | JQuery | MongoDB | MySQL'/>
        <SkillList icon=<AiBrain/>
        title="Artificial Intelligence"
        tools='Python | Tensorflow | Pytorch | OpenCV | Pandas | Numpy | Scipy'/>
      </div>
    </div>
  );
}

export default Skills
