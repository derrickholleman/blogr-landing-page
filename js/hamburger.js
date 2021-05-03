/* hamburger menu animation toggle */
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

/* hamburger menu open */
const menu_btn = document.querySelector('#hamburger');
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

/* hides text under hamburger menu for cleaner look */
jQuery('#hamburger').click(function(){
    var menu_active = jQuery(this).hasClass('is-active');
    if(menu_active){
        jQuery('.header-bottom-row').css('display', 'none');
    } 
    else {
       jQuery('.header-bottom-row').css('display','flex');
    }
});

