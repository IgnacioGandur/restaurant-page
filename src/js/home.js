import svg1 from './../images/nordic-symbol.svg';
import svg2 from './../images/wood-axe.svg';

function createHome ()
{
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    mainContent.innerHTML = `
    <div class='image-side'>
        <div>
            <img src='${svg1}' class='filter'>
        </div>
    </div>
    <div class='home-info'>
        <h1>Lafayette</h1>
        <div class='separator'></div>
        <h5> 4060 Sarah Drive, Louisiana, LA 70506</h5> 
        <div class='business-hours'>
                <h2><i>Brunch /</i></h2>
            <p class=''>monday - sunday :</p>
            <p class=''>9:30 am - 4:30 pm</p>
        </div>
        <div class='business-hours'>
                <h2><i>Midday /</i></h2>
            <p class=''>monday - sunday :</p>
            <p class=''>4:30 am - 6:00 pm</p>
        </div>
        <div class='business-hours'>
                <h2><i>Dinner /</i></h2>
            <p class=''>Sunday - Thursday :</p>
            <p class=''>6:00 AM - 10:00 PM</p>
            <br>
            <p class=''>Friday - Saturday :</p>
            <p class=''>6:00 AM - 11:00 PM</p>
        </div>
        <br>
        <p>(All the information used in the creation of the restaurant is fake, randomly generated.)<p>
    </div>
    <div class='image-side'>
        <div>
            <img src='${svg2}' class='filter'>
        </div>
    </div>
    `;
    // CREATING A REFERENCE AND APPENDING THE CONTENT INTO THE PAGE
    const content = document.getElementById('header').parentNode;
    const footer = document.getElementById('footer');
    content.insertBefore(mainContent, footer);
}

export default createHome;