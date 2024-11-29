import "./about.css";

export default function aboutfn() {
    const content = document.querySelector('#content');
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('aboutContainer');
    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = 'This is a simple restaurant page 😉';
    aboutContainer.appendChild(heading);
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = 'Experience the flavors of hypothetical cuisine 😝 at our cozy restaurant. Our chefs prepare fresh, locally-sourced ingredients to create mouth-watering dishes that will leave you wanting more. Join us for a culinary journey that will satisfy your taste buds and leave you feeling full and happy.'
    aboutContainer.appendChild(text);
    content.appendChild(aboutContainer);
}