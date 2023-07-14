import bkgImg from './../images/background-image.jpg';

function reservation()
{
    // Creating the reservation section
    const reservationSection = document.createElement('div');
    reservationSection.classList.add('reservation-section');
    
    // Adding content to the reservation section
    reservationSection.innerHTML = `
    <div class='form-container'>
            <div class='title'>
            <h2>Reserve a Table</h2>
            <h5>Please fill the form below accurately to enable us serve you better.</h5>
        </div>
        <form method='post'>
            <div class='form-line'>
                <p>Full Name</p>
                <div class='names'>
                    <div>
                        <input type='text' id='first_name' name='first_name' class='name'>
                        <label for='first_name'>First name</label>
                    </div>
                    <div>
                        <input type='text' id='last_name' name='last_name' class='name'>
                        <label for='last_name'>Last name</label>
                    </div>
                </div>
            </div>
            <div class='form-line-type2'>
                <label for='email'>E-mail</label>
                <input type='email' id='email' name='email' placeholder='your.email@email.com'>
            </div>
            <div class='form-line-type2'>
                <label for='phone'>Phone</label>
                <input type='tel' id='phone' name='phone'>
            </div>
            <div class='form-line-type2'>
                <label for='number_of_guests'>Number of guests</label>
                <input type='number' id='number_of_guests' name='number_of_guests'>
            </div>
            <div class='form-line-type2'>
                <label for='reservation_type'>Reservation type</label>
                <select name='reservation_type' id='reservation_type' id='reservation_type'>
                    <option value=''>Choose a reservation type...</option>
                    <option value='dinner'>Dinner</option>
                    <option value='birthday_anniversary'>Birthday / Anniversary</option>
                    <option value='private'>Private</option>
                    <option value='wedding'>Wedding</option>
                    <option value='corporate'>Corporate</option>
                    <option value='holiday'>Holiday</option>
                </select>
            </div>
            <div class='form-line-type2'>
                <label for='specific_reservation_type'>If other above, please specify</label>
                <input type='text' id='specific_reservation_type' name='specific_reservation_type'>
            </div>
            <div class='form-line-type2'>
                <label for='special_request'>Any special request</label>
                <textarea name='special_request' id='special_request'></textarea>
            </div>
            <button id='reservation-button'>Make reservation</button>
        </form>
    </div>
    `;
    
    // Adding the background image
    reservationSection.setAttribute('style', `background-image:linear-gradient(#00000033, #00000033), url(${bkgImg});`);
    // Appending it to the DOM
    const content = document.getElementById('header').parentNode;
    const footer = document.getElementById('footer');
    content.insertBefore(reservationSection, footer);
}

export default reservation;