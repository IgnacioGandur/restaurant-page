import pic1 from './../images/burger.jpg';
import pic4 from './../images/cook.jpg';
import pic2 from './../images/pancakes.jpg';
import pic3 from './../images/pasta.jpg';
import pic5 from './../images/salad.jpg';
import pic6 from './../images/sandwich.jpg';
import decoBottom from './../images/bottom-deco-gold.svg';
import crow from './../images/crow.svg';
import feather2 from './../images/feather-2-gold.svg';

function aboutUs ()
{
    // Creating the about us section
    const aboutUsSection = document.createElement('div');
    aboutUsSection.classList.add('change-tab-animation', 'about-us-section');
    // Adding the content to it
    aboutUsSection.innerHTML =     // Creating the image slider
    `
    <div id='slider'>
            <div class='slides'>
                <img src='${pic1}' width='100%'>
            </div>
            <div class='slides'>
                <img src='${pic2}' width='100%'>
            </div>
            <div class='slides'>
                <img src='${pic3}' width='100%'>
            </div>
            <div class='slides'>
                <img src='${pic4}' width='100%'>
            </div>
            <div class='slides'>
                <img src='${pic5}' width='100%'>
            </div>
            <div class='slides'>
                <img src='${pic6}' width='100%'>
            </div>
            <div id='dot'>
                <span class='dot'></span><span class='dot'></span><span class='dot'></span><span class='dot'></span><span class='dot'></span><span class='dot'></span><span class='dot'></span>
            </div>
    </div>
    <div class='info-container'>
        <div class='side-images left'>
            <div>
                <img src='${feather2}'>
            </div>
            <div>
                <img src='${feather2}'>
            </div>
            <div>
                <img src='${feather2}'>
            </div>
            <div>
                <img src='${feather2}'>
            </div>
            <div>
                <img src='${feather2}'>
            </div>
        </div>
        <div class='paragraphs-container'>
        <h2>Welcome to Odin's restaurant</h2>
        <div class='separator'></div>
        <p>Where culinary excellence meets mythological inspiration. Situated in the heart of a bustling city, Odin's Restaurant offers an unforgettable dining experience that combines exquisite cuisine, warm hospitality, and an ambiance that transports you to a realm of Norse legends.</p>
        <p>At Odin's Restaurant, we take pride in creating a unique and immersive atmosphere that pays homage to the mighty Norse god, Odin. Our restaurant is adorned with intricately carved wooden furniture, rustic décor, and subtle nods to Norse mythology, enveloping you in a dining experience unlike any other. Step into our realm and embark on a culinary journey fit for gods and mortals alike.</p>
        <p>Led by our team of passionate and talented chefs, Odin's Restaurant offers a menu that showcases the finest flavors from the Nordic region and beyond. Drawing inspiration from the rich culinary traditions of Scandinavia, our carefully crafted dishes capture the essence of freshness, authenticity, and innovation. From delicate seafood creations to hearty game dishes, our menu is a testament to our commitment to quality and creativity.</p>
        <p>We believe that exceptional food deserves an equally extraordinary setting, which is why Odin's Restaurant provides a dining space that is both elegant and inviting. Whether you are joining us for a romantic evening, a celebratory gathering, or simply a memorable meal with friends and family, our attentive staff will ensure your every need is met with the utmost care and attention to detail.</p>
        <p>In addition to our remarkable menu, Odin's Restaurant boasts an extensive selection of handpicked wines, craft beers, and artisanal cocktails. Our sommeliers are passionate about pairing the perfect libation with your chosen dish, elevating your dining experience to new heights. From local favorites to international treasures, our beverage offerings cater to all tastes and preferences.</p>
        <p>At Odin's Restaurant, we believe that dining is an art form, and every guest is a cherished part of our journey. Whether you are an avid food enthusiast or a curious traveler, we invite you to step into our realm and savor the flavors of the North in a truly enchanting setting. Unleash your inner Viking and embark on an epicurean adventure that will leave you longing to return to Odin's Restaurant time and time again.</p>
        <p>Join us at Odin's Restaurant, where the divine meets the delectable, and let us guide you on a culinary odyssey that will awaken your senses and create memories that will last a lifetime.</p>        
        <img src='${decoBottom}'>
        </div>
        <div class='side-images right'>
            <img src='${crow}'>
        </div>
    </div>
    `;
    // Appending it to the DOM
    const content = document.getElementById('header').parentNode;
    const footer = document.getElementById('footer');
    content.insertBefore(aboutUsSection, footer);

    // Image slider js section
    let index = 0;
    let slides = document.querySelectorAll('.slides');
    let dot = document.querySelectorAll('.dot');

    function changeSlide ()
    {
        if (index<0)
        {
            index = slides.length-1;
        }

        if (index>slides.length-1)
        {
            index=0;
        }
        
        for(let i=0; i<slides.length;i++)
        {
            slides[i].style.display = 'none';
            dot[i].classList.remove('active');
        }
        
        slides[index].style.display = 'block';
        dot[index].classList.add('active');

        index++;

        setTimeout(changeSlide, 3500);
    }
    changeSlide();
}

export default aboutUs;