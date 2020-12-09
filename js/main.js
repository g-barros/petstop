const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if ( window.scrollY > 90 ) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
})