import React from 'react'
import './NavIcon.css'
import $ from 'jquery'

function NavIcon() {
  const document=$('document')
  console.log(document);
  $(document).ready(function(){
	$('.NavIcon').click(function(){
		$(this).toggleClass('open');
	});
});
  return (
    <div className='NavIcon'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavIcon
