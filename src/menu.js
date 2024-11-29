import "./menu.css";

export default function menufn() {
    const content = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = `Our Restaurent's Menu :`;
    menuContainer.appendChild(heading);
    const foodItems = document.createElement('div');
    foodItems.classList.add('foodItems');


    const burger = document.createElement('div');
    const burgerImg = document.createElement('div');
    burgerImg.classList.add('burgerImg');
    burger.appendChild(burgerImg);
    const burgerText = document.createElement('div');
    burgerText.classList.add('burgerText')
    burgerText.textContent = "Hamburger ($5.99)";
    burger.appendChild(burgerText);
    burger.classList.add('burger');
    foodItems.appendChild(burger);


    const steak = document.createElement('div');
    const steakImg = document.createElement('div');
    steakImg.classList.add('steakImg');
    const steakText = document.createElement('div');
    steakText.classList.add('steakText');
    steakText.textContent = "Wagyu Steak ($5.99)";
    steak.appendChild(steakImg);
    steak.appendChild(steakText);
    steak.classList.add('steak');
    foodItems.appendChild(steak);

    const salad = document.createElement('div');
    const saladImg = document.createElement('div');
    saladImg.classList.add('saladImg');
    const saladText = document.createElement('div');
    saladText.classList.add('saladText');
    saladText.textContent = "Salad Bowl ($5.99)";
    salad.appendChild(saladImg);
    salad.appendChild(saladText);
    salad.classList.add('salad');
    foodItems.appendChild(salad);


    const chicken = document.createElement('div');
    const chickenImg = document.createElement('div');
    chickenImg.classList.add('chickenImg');
    const chickenText = document.createElement('div');
    chickenText.classList.add('chickenText');
    chickenText.textContent = "Fried Chicken ($5.99)";
    chicken.appendChild(chickenImg);
    chicken.appendChild(chickenText);
    chicken.classList.add('chicken');
    foodItems.appendChild(chicken);

    menuContainer.appendChild(foodItems);
    content.appendChild(menuContainer);
}