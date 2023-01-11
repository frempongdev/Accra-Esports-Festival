const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.nav-bg');


hamburger.addEventListener('click', function(){
    mobileNav.classList.remove('hide-class');
    body.style.overflowY ='hidden';
});

closeBtn.addEventListener('click', function(){
    mobileNav.classList.add('hide-class');
    body.style.overflowY ='visible';
});



