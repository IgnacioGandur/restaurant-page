import texture from './../images/marble-texture.jpg';

function header()
{
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.classList.add('header');
    header.innerHTML = `
    <h1>Odin's Restaurant</h1>
    <ul class='nav-bar'> 
        <li class='home'>Home</li>
        <li class='menu'>Menu</li>
        <li class='reservation'>Make a Reservation</li>
        <li class='about-us'>About Us</li>
        <li class='contact-us'>Contact Us</li>
    </ul>
    `;
    content.appendChild(header);

}

export default header;