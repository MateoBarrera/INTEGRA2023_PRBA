/*!
* Start Bootstrap - Scrolling Nav v5.0.2 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


    // Activate Bootstrap scrollspy on the main nav element
    console.log("Inicia")
    const mainNav = document.body.querySelector('#mainNav');
    console.log(mainNav)
    if (mainNav) {
/*         new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        }); */
    };

    console.log("acaba")
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function ActivateLink(section){
    document.getElementById('I-'+section).setAttribute('class','nav-item active');
};


var preSectionId = 'main'
function ActiveSection(sectionId) {

    if (sectionId!=preSectionId){
    document.getElementById(preSectionId).hidden = true;
    document.getElementById(sectionId).hidden = false;
    preSectionId = sectionId;
    }
};
