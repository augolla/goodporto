import React from 'react'
import Scroll from 'react-scroll'

import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'
import $ from 'jquery'


const scrollLink=Scroll.ScrollLink
function Whole() {
//   $("nav").find("a").click(function(e) {
//     e.preventDefault();
//     var section = $(this).attr("href");
//     $("html, body").animate({
//         scrollTop: $(section).offset().top
//     },400,'linear');
//   });
  return (
    <div className=''>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default Whole
