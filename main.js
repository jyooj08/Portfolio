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
    console.log(window.scrollY, '/', navbar_height);
    if(window.scrollY > navbar_height){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});