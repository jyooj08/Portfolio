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

    scrollIntoView(link);
});

//Handle click on "contact me" button on home
const home_contact_btn = document.querySelector('.home__contact');
home_contact_btn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});
/*
--Yujin's solution!--
const contact_btn = document.querySelector('.home__contact');
contact_btn.addEventListener('click', ()=>{
    const contact = document.querySelector('#contact');
    contact.scrollIntoView({behavior: 'smooth'});
});
*/

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const home_height = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY/home_height;
});


function scrollIntoView(selector){
    const scroll_to = document.querySelector(selector);
    scroll_to.scrollIntoView({behavior:'smooth'});
    /*
    --Yujin's solution!--
    const scroll_to = document.querySelector(link).offsetTop;
    window.scrollTo({top:scroll_to - 40, behavior: 'smooth'});
    */
}