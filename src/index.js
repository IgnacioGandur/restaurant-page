import header from '../src/js/header.js';
import aboutUs from './js/about-us.js';
import createHome from './js/home.js';
import createMenu from './js/menu.js';
import createFooter from './js/footer.js';
import createReservation from './js/reservation.js';
import createContactUs from './js/contact-us.js';


import './styles/styles.css';

header();
createHome();
createFooter();

// Adding event listeners to the navbar items
// Home tab
const home = document.querySelector('.home');
home.addEventListener('click', ()=>{
    if (document.querySelector('.main-content'))
    {
        return
    }
    else
    {
        clearMainSection();
        createHome();
    }
});

// Menu tab
const menu = document.querySelector('.menu');
menu.addEventListener('click', ()=>{
    if (document.querySelector('.menu-section'))
    {
        return
    }
    else
    {
        clearMainSection();
        createMenu();
    }
});

// Reservation tab
const reservation = document.querySelector('.reservation');
reservation.addEventListener('click',()=>{
    if (document.querySelector('.reservation-section'))
    {
        return;
    }
    else
    {
        clearMainSection();
        createReservation();
        

    // Preventing the form button to submit the form
    let formButton = document.querySelector('#reservation-button');
    formButton.addEventListener('click', (e)=>{
        e.preventDefault();
    });
    }
})

// About us
const aboutUsSection = document.querySelector('.about-us');
aboutUsSection.addEventListener('click', ()=> {
    if (document.querySelector('.about-us-section'))
    {
        return;
    }
    else
    {
        clearMainSection();
        aboutUs();
    }
})

// Contact us
const contactUsSection = document.querySelector('.contact-us');
contactUsSection.addEventListener('click', ()=>{
    if(document.querySelector('.contact-us-section'))
    {
        return;
    }
    else
    {
        clearMainSection();
        createContactUs();
    }
})

function clearMainSection ()
{
    const content = document.querySelector('#content');
    let mainSection = content.childNodes[1];
    mainSection.parentNode.removeChild(mainSection);
}
