export default function load() {
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = "My restaurant";
    content.appendChild(heading);
    const text = document.createElement('p');
    text.textContent = 'Lorem ipsum color sit amet consectetur adipisicing elit. Voluptates, illo aliquam? Voluptatem sit dolore assumenda debitis qui veniam, iusto asperiores nemo, consequuntur quae et reprehenderit nihil, harum suscipit quos cupiditate ipsum in distinctio maiores dolorum id porro esse aspernatur! Cum sequi, a nemo quasi minus corrupti tempore laborum saepe porro!';
    content.appendChild(text);

}