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
        <SkillList icon=<Webdesign/> title="Responsive Webdesign" />
        <SkillList icon=<Code/> title="Full-Stack Development"/>
        <SkillList icon=<AiBrain/> title="Artificial Intelligence"/>
      </div>
    </div>
  );
}

export default Skills
