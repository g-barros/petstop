const navbar = document.querySelector('.navbar');

 window.addEventListener('scroll', function () {
    console.log('scrolou')
    if ( window.scrollY > 90 ) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
})
//  on('scroll', function () {
//         console.log('scrolou')
//         if ( $(window).scrollTop() > 90 ) {
//             $('.navbar').addClass('active');
//         } else {
//             $('.navbar').removeClass('active');
//         }
//     });
