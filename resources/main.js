
let wrapper = document.getElementById('loader-wrapper');
let loader = document.getElementById('loader');
let aboutPopup = document.getElementById('aboutPopup');
let line1 = 'Annushka Project\'s';
let line2 = 'Calculator';
let line3 = 'The last calculator you\'ll ever need';
let buttons = document.getElementsByClassName('button');
charTime = 70;
var i = 0;

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
    typeWriter1();
};

function typeWriter1() {
    if (i < line1.length) {
        document.getElementById("line1").innerHTML += line1.charAt(i);
        i++;
        setTimeout(typeWriter1, charTime + 10);
    } else {
        i = 0;
        typeWriter2();
    }
}

function typeWriter2() {
    if (i < line2.length) {
        document.getElementById("line2").innerHTML += line2.charAt(i);
        i++;
        setTimeout(typeWriter2, charTime + 30);
    } else {
        i = 0;
        typeWriter3();
    }

}

function typeWriter3() {
    if (i < line3.length) {
        document.getElementById("line3").innerHTML += line3.charAt(i);
        i++;
        setTimeout(typeWriter3, charTime);
    } else {
        showButtons();
    }
}

function showButtons(){
    Array.from(buttons).forEach(function (el) {
        el.classList.remove('hidden');
    });
}