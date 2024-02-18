// ==UserScript==
// @name        laudat-yläpalkkiin
// @namespace   Violentmonkey Scripts
// @match       https://ylilauta.org/*
// @grant       none
// @version     1.0
// @author      -
// @description 2/14/2024, 4:19:24 PM
// ==/UserScript==

var navbar = document.getElementById('navbar');

function createButton(text, url, className) {
    var button = document.createElement('button');
    button.innerText = text;
    button.classList.add('nappi');
    button.classList.add(className);
    button.addEventListener('click', function() {
        window.location.href = url;
    });
    return button;
}

var buttonContainer = document.createElement('div');
buttonContainer.classList.add('navbar-buttons');

buttonContainer.appendChild(createButton("[", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("ukko", "https://ylilauta.org/thread/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("b", "https://ylilauta.org/satunnainen/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("m", "https://ylilauta.org/masiinat/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("tubetus", "https://ylilauta.org/tubetus/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("n", "https://ylilauta.org/ninja/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("fap", "https://ylilauta.org/kasityot/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("hikky", "https://ylilauta.org/hikky/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("g", "https://ylilauta.org/pelit/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("h", "https://ylilauta.org/huumeet/", "navbar-button"));
buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
buttonContainer.appendChild(createButton("epic", "https://ylilauta.org/arkisto/", "navbar-button"));
buttonContainer.appendChild(createButton("]", "navbar-button", "merkki"));

navbar.insertBefore(buttonContainer, navbar.children[1]);
navbar.insertBefore(createButton("[", "navbar-button", "merkki"), navbar.children[3]);
navbar.insertBefore(createButton("Asetukset", "https://ylilauta.org/user/", "navbar-button"), navbar.children[4]);
navbar.insertBefore(createButton("/", "navbar-button", "merkki"), navbar.children[5]);
