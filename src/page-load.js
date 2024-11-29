export default function load() {
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = "Odin's Kitchen";
    content.appendChild(heading);
    const text = document.createElement('p');
    text.textContent = `Welcome to Odin's Kitchen, where flavor meets comfort! Indulge in our delicious, freshly prepared dishes made with the finest ingredients. Whether you're craving classic favorites or something new, our menu offers a variety of options for every taste. Join us for an unforgettable dining experience!`;
    content.appendChild(text);

}