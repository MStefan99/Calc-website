let wrapper = document.getElementById('loader-wrapper');
let loader = document.getElementById('loader');
let aboutPopup = document.getElementById('aboutPopup');

time = setTimeout(load, 1000);

function load() {
    wrapper.classList.remove('loaded');
    loader.classList.remove('loaded');
}

function bodyClick(e) {
    if (e.target.id === 'about') {
        aboutPopup.classList.toggle('hidden');
    } else if (e.target.id === 'aboutPopup') {
    } else{
        aboutPopup.classList.add('hidden');
    }
}

window.onload = function() {
    wrapper.classList.add('loaded');
    loader.classList.add('loaded');
    clearTimeout(time);
}