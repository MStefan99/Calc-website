let wrapper = document.getElementById('loader-wrapper');
let loader = document.getElementById('loader');
let aboutPopup = document.getElementById('aboutPopup');

time = setTimeout(load, 1000);

function load() {
    wrapper.classList.remove('loaded');
    loader.classList.remove('loaded');
}

function aboutClicked(){
    aboutPopup.classList.toggle('hidden');
}

window.onload = function() {
    wrapper.classList.add('loaded');
    loader.classList.add('loaded');
    clearTimeout(time);
};