'use strict';
/*var navbar = document.getElementById('navbar');
document.addEventListener('scroll', function(){
    var cur_scroll = document.documentElement.scrollTop;
    var nav_height = navbar.clientHeight;

    if(cur_scroll >= nav_height) {
        navbar.style.backgroundColor = '#feb546';
    } else{
        navbar.style.backgroundColor = 'transparent';
    }
});*/

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbar_height = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(window.scrollY, navbar_height, document.documentElement.scrollTop);
    if(window.scrollY > navbar_height){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
/*const home_position = document.querySelector('#home').scrollTop;
const home_link = document.querySelector('li[0]');
home_link.addEventListener('click', ()=>{
    console.log('click');
    window.scrollTo(0, home_position)
});*/
const navbar_menu = document.querySelector('.navbar__menu');
navbar_menu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;

    if(link == null) return;

    const scroll_to = document.querySelector(link);
    scroll_to.scrollIntoView({behavior: 'smooth'});
    /*
    --Yujin's solution!--
    const scroll_to = document.querySelector(link).offsetTop;
    window.scrollTo({top:scroll_to - 40, behavior: 'smooth'});
    */
});