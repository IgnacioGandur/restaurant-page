
function createFooter ()
{
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.classList.add('footer');
    footer.innerHTML = `
        <p>Created by Ignacio Gandur for The Odin Project <a href='https://github.com/IgnacioGandur/restaurant-page' target='__blank'><i class="fa-brands fa-github footer-icon"></i></a></p>
    `;
    content.appendChild(footer);
}

export default createFooter;