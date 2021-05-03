/* hamburger menu animation toggle */
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});

/* hamburger menu open */
const menu_toggle = document.querySelector('.hamburger');
const mobile_menu_display = document.querySelector('.mobile-nav');
const hide_header = document.querySelector('.header-bottom-row')

menu_toggle.addEventListener('click', function () {
	mobile_menu_display.classList.toggle('is-active'); /* init .mobile-nav.is-active */
    hide_header.classList.toggle('is-active'); /* init .header-bottom-row.is-active */
    menu_toggle.classList.toggle('is-active'); /* init .is-active on .hamburger */
})
/*----------------------*/

/* prevents the hamburger menu from scrolling while open */
jQuery('.hamburger').click(function(){
    var menu_active = jQuery(this).hasClass('is-active');
    if(menu_active){
        jQuery('body').css('position','fixed');
    } 
    else {
       jQuery('body').css('position','static');
    }
});

/* ALTERNATIVE WAY TO HIDE TEXT BASED ON A CONDITION */
// jQuery('.hamburger').click(function(){
//     var menu_active = jQuery(this).hasClass('is-active');
//     if(menu_active){
//         jQuery('.header-bottom-row').css('display', 'none');
//     } 
//     else {
//        jQuery('.header-bottom-row').css('display','flex');
//     }
// });

