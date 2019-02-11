let wrapper = document.getElementById('loader-wrapper');
let loader = document.getElementById('loader');
let aboutPopup = document.getElementById('aboutPopup');
let line1 = 'Annushka Project\'s';
let line2 = 'Calculator';
let line3 = 'The last calculator you\'ll ever need';
let buttons = document.getElementsByClassName('button');
let phone = document.getElementById('phone');
let timer = document.getElementById('timer');

charTime = 70;
var i = 0;
var typingDelay = 200;
time = setTimeout(load, 1000);

function load() {
    wrapper.classList.remove('loaded');
    loader.classList.remove('loaded');
    typingDelay = 800;
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
    setTimeout(typeWriter1, typingDelay);
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
        startTimer();
        setTimeout(showPhone, 100);
    }
}

function showButtons() {
    Array.from(buttons).forEach(function (el) {
        el.classList.remove('hidden');
    });
}

function hideButtons() {
    Array.from(buttons).forEach(function (el) {
        el.classList.add('hidden');
    });
}

function showPhone() {
    phone.classList.remove('hidden');
}

function startTimer() {
// Set the date we're counting down to
var countDownDate = new Date("March 13, 2019 09:00:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        timer.innerHTML = "Launching in: <br>" + days + " days " + hours + " hours <br>"
            + minutes + " minutes " + seconds + " seconds ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            timer.classList.add("hidden");
            showButtons();
        } else {
            timer.classList.remove("hidden");
            hideButtons();
        }
    }, 1000);
}