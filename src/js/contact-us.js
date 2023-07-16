import  vikingSoldier from './../images/viking-soldier.svg';

function contactUs ()
{
    // Creating the elements 
    const contactUsSection = document.createElement('div');
    contactUsSection.classList.add('contact-us-section');
    // Adding the content to it 
    contactUsSection.innerHTML = `
    <div>
        <img src='${vikingSoldier}'>
    </div>
    <div>
    <h2>We would be delighted to hear from you!</h2>
    <div class='separator'></div>
    <ul>
        <li>
            <h3>Opening hours</h3>
        </li>
        <li>
            <p>Monday to Friday: 9:30AM - 10:00PM.</p>
        </li>
        <li>
            <p>Saturday to Sunday: 9:30AM - 11:00PM.</p>
        </li>
    </ul>
    <p> Have a question, reservation request, or simply want to get in touch? We're here to assist you. Reach out to Odin's Restaurant using the following contact information:</p>
    <ul>
        <li>
            <i class="fa-solid fa-location-dot"></i><p><strong>Lafayette<br>4060 Sarah Drive<br>Louisiana, LA 70506</strong></p>
        </li>
        <li>
            <i class="fa-solid fa-envelope"></i><p><strong>odinsRestaurant@fakemail.com</strong></p>
        </li>
        <li>
            <i class="fa-solid fa-phone"></i><p><strong>+123 456 7890</strong></p>
        </li>
    </ul>
    <p>For general inquiries or special requests, feel free to use the contact form below. Our team will respond to your message promptly. We value your feedback and look forward to providing you with an exceptional dining experience at Odin's Restaurant.
    <form method='post' class='contact-form'>
        <div class='form-line'>
            <label for='name'>Your name</label>
            <input type='text' id='name' name='name'>
        </div>
        <div class='form-line'>
            <label for='message'>Your message</label>
            <input type='text' id='message' name='message'>
        </div>
        <div class='form-line'>
            <label for='email'>Your Email</label>
            <input type='email' id='email' name='email'>
        </div>
        <button class='form-button'>Send feedback</button>
    </form>
    <p>Thank you for considering Odin's Restaurant. Follow us on social media for updates, promotions, and a taste of our Norse-inspired culinary creations.</p>
    <ul>
        <li>
            <i class="fa-brands fa-square-twitter"></i><a href='#'>@odins_restaurant</a>
        </li>
        <li>
            <i class="fa-brands fa-square-instagram"></i><a href='#'>@Odins.Restaurant</a>
        </li>
        <li>
            <i class="fa-brands fa-square-facebook"></i><a href='#'>/odins_restaurant</a>
        </li>
    </ul>
    <p>Visit us at Odin's Restaurant and immerse yourself in a world of divine flavors and enchanting ambiance. We await you presence, eager to make your dining experience truly memorable!</p>
    </div>
    <div></div>
    `;
    // Appending it to the DOM
    const content = document.getElementById('header').parentNode;
    const footer = document.getElementById('footer');
    content.insertBefore(contactUsSection, footer);
    // Preventing the form to be sent
    const formButton = document.querySelector('.form-button');
    formButton.addEventListener('click', (e)=>{
        e.preventDefault();
    })

}

export default contactUs;