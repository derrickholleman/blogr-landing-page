/* hamburger menu animation toggle */
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

/* hamburger menu open */
const menu_btn = document.getElementById('hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
})

/* prevents the hamburger menu from scrolling while open */
jQuery('#hamburger').click(function(){
    var menu_active = jQuery(this).hasClass('is-active');
    if(menu_active){
        jQuery('body').css('position','fixed');
    } 
    else {
       jQuery('body').css('position','static');
    }
});

jQuery('.dropdown-menu dropdown-btn').hover(
    function() {
      jQuery('ul', this).stop().slideDown(100);
    },
    function() {
      jQuery('ul', this).stop().slideUp(100);
    }
  );
  
  jQuery('.dropdown-menu dropdown-btn').on('click',
    function() {
      jQuery('ul', this).stop().slideToggle(50);
    }
  );
  
