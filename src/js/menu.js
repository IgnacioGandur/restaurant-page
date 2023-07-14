import decoration from './../images/decoration-gold.svg';
import goldLeaf from './../images/leaf-decoration-1-gold.svg';
import breakfastSvg from './../images/breakfast.svg';
import dinner from './../images/dinner.svg';
import flowerDecoration from './../images/flower-gold.svg';

function createMenu()
{
    // CREATING THE MENU SECTION
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    menuSection.innerHTML = `
        <div class='image-side left'>
            <div>
                <img src='${breakfastSvg}'>
            </div>
            <div>
                <img src='${goldLeaf}'>
            </div>
            <div>
                <img src='${dinner}'> 
            </div>
        </div>
        <div class='menu-info'>
            <h2>Brunch</h2>
            <div class='separator'></div>
            <div class='item-container'>
                <p class='title'>Pancakes /</p>
                <p class='info'>Buttermilk pancakes with fresh blueberries, topped with your choice of maple syrup.</p>
                <p class='price'>$5.99</p>
            </div>
            <div class='item-container'>
                <p class='title'>sausage & egg McMuffin /</p>
                <p class='info'>smoky grilled sausages with you choice of eggs, bacon, meat.</p>
                <p class='price'>$6.99</p>
            </div>
            <div class='item-container'>
                <p class='title'>Quiche /</p>
                <p class='info'>Heavy creams, eggs, green onions & biscuits</p>
                <p class='price'>$7.50</p>
            </div>
            <div class='item-container'>
                <p class='title'>Beverages /</p>
                <p class='info'>Orange juice, strawberry lemonade, coffee, ice tea</p>
                <p class='price'>$2.49</p>
            </div>
            <h2>Midday</h2>
            <div class='separator'></div>
            <h3>Salads</h3>
            <div class='item-container'>
                <p class='title'>House salad /</p>
                <p class='info'>Romaine, iceberg, red cabbage, carrots, cucumbers and cherry tomatoes.</p>
                <p class='price'>$6.50</p>
            </div>
            <div class='item-container'>
                <p class='title'>Turkey & Ham salad /</p>
                <p class='info'>Romaine, smoked turkey, honey ham, tomato, egg and cucumber. Served with your choice of dressing.</p>
                <p class='price'>$7.00</p>
            </div>
            <h3>Soups</h3>
            <div class='item-container'>
                <p class='title'>Portobello blue cheese soup /</p>
                <p class='info'>Grilled portobellos in a rich mushroom broth paired with smoky blue cheese.</p>
                <p class='price'>$6.50</p>
            </div>
            <div class='item-container'>
                <p class='title'>Main lobster bisque /</p>
                <p class='info'>Large chunks of fresh lobster in a rich lobster stock blended with heavy cream laced with Cognac.</p>
                <p class='price'>$9.50</p>
            </div>
            <h3>Sandwiches</h3>
            <div class='item-container'>
                <p class='title'>BLT /</p>
                <p class='info'>Bacon, lettuce, tomato and your choice of bread. Served with your choice of side.</p>
                <p class='price'>$10.25</p>
            </div>
            <div class='item-container'>
                <p class='title'>American Sub Sandwich /</p>
                <p class='info'>Turkey breast, ham, your choice of cheese, shredded lettuce, tomatoes and and green peppers. Served with your choice of side.</p>
                <p class='price'>$11.25</p>
            </div>
            <h3>Burgers</h3>
            <div class='item-container'>
                <p class='title'>Bacon cheese burger /</p>
                <p class='info'>Fresh ground beef, hickory bacon, Swiss, mozzarella or American cheddar.</p>
                <p class='price'>$8.60</p>
            </div>
            <div class='item-container'>
                <p class='title'>Blue cheeseburger /</p>
                <p class='info'>Fresh ground beef, red chilli, melted cheddar.</p>
                <p class='price'>$9.00</p>
            </div>
            <h3>Pasta</h3>
            <div class='item-container'>
                <p class='title'>Spaghetti /</p>
                <p class='info'>With meaty tomato bolognese sauce.</p>
                <p class='price'>$8.50</p>
            </div>
            <div class='item-container'>
                <p class='title'>Shrimp fettuccine Alfredo /</p>
                <p class='info'>Butterfly shrimp in Alfredo sauce, tapped with parmesan.</p>
                <p class='price'>$9.50</p>
            </div>
            <h2>Dinner</h2>
            <div class='separator'></div>
            <div class='item-container'>
                <p class='title'>Filet Bearnaise /</p>
                <p class='info'>Grilled certified Angus filet topped with artichoke hearts, lump crabmeat and bearnaise sauce.</p>
                <p class='price'>$26.00</p>
            </div>
            <div class='item-container'>
                <p class='title'>Mushroom Filet /</p>
                <p class='info'>Grilled certified Angus filet topped with caramelized onions, portobello mushrooms and blue cheese herb butter.</p>
                <p class='price'>$22.00</p>
            </div>
            <div class='item-container'>
                <p class='title'>Crab cakes /</p>
                <p class='info'>Pan sautéed or fried crab cakes with Cajun horseradish sauce.</p>
                <p class='price'>$15.00</p>
            </div>
            <div class='item-container'>
                <p class='title'>Sicilian pizza /</p>
                <p class='info'>Pepperoni, mushrooms, onion, parmesan and mozzarella.</p>
                <p class='price'>$12.00</p>
            </div>
            <div class='item-container'>
                <p class='title'>Grilled tuna /</p>
                <p class='info'>Grilled tuna with ginger, soy and scallion sauce.</p>
                <p class='price'>$16.00</p>
            </div>
            <div class='item-container'>
                <p class='title'>Ribeye /</p>
                <p class='info'>Grilled certified Angus ribeye with marsala glazed portobello mushrooms.</p>
                <p class='price'>$19.00</p>
            </div>

        </div> 
        <div class='image-side right'>
            <div>
                <img src='${decoration}'>
            </div>
            <div>
                <img src='${flowerDecoration}'>
            </div>
        </div>
    `;
    
    // REFERENCE NODE TO APPEND IT INTO THE DOM
    const content = document.getElementById('header').parentNode;
    const footer = document.getElementById('footer');
    content.insertBefore(menuSection, footer );
}

export default createMenu;