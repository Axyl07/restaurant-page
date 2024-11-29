import "./index.css";
import load from "./page-load";
import aboutfn from "./about";
import menufn from "./menu";



load();
alert("Helloo");

const content = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
home.addEventListener('click', () => {
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
    load();
})
about.addEventListener('click', () => {
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
    aboutfn();
})
menu.addEventListener('click', () => {
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
    menufn();
})