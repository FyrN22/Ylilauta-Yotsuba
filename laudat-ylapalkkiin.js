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
    button.addEventListener('click', function(event) {
        if (text === "/" || text === "[" || text === "]") {
            event.preventDefault();
        } else {
            window.location.href = url;
        }
    });
    return button;
}

const boardAbbreviations = {
    "satunnainen": "b",
    "masiinat": "m",
    "pelit": "g",
    "bigbrother": "bb",
    "kasityot": "fap",
    "international": "int",
    "taide": "art",
    "televisio": "tv",
    "huumeet": "h",
    "matkustus": "coco",
    "paranormaali": "x",
    "juorut": "j",
    "videot": "mp4",
    "rikokset": "r",
    "tubetus": "yt",
    "uutiset": "u",
    "suhteet": "sopo",
    "opiskelu": "o",
    "terveys": "t",
    "harrastukset": "h",
    "kirjallisuus": "k",
    "arkisto": "epic",
    "luonto": "l",
    "nikotiinipussit": "niksa",
    "penkkiurheilu": "pu",
    "tekoaly": "ai",
    "ruokajajuoma": "nom",
    "uhkapelit": "win",
    "aihevapaa": "av",
    "akuankka": "aku",
    "kryptovaluutat": "crypto",
    "ohjelmointi": "dev",
    "ajoneuvot":  "auto",
    "yhteiskunta": "pol",
    "joulukalenteri": "joulu",
    "bilderberg": "roll",
    "tiede": "sci",
    "ninja": "n",
    "koronavirus": "covid",
    "homoseksuaalisuus": "fag",
};

const hidden = ["koronavirus", "homoseksuaalisuus", "turri", "hisparefugio", "lusofono", "casinofoorumi", "meemivala", "de", "tyo", "uskonnot", "seksuaalisuus", "mielenterveys"];

var buttonContainer = document.createElement('div');
buttonContainer.classList.add('navbar-buttons');

buttonContainer.appendChild(createButton("[", "navbar-button", "merkki"));

const boards = [...document.getElementById('nav-boards').getElementsByTagName("p")]
    .map(board => board.getAttribute('data-board'))
    .filter(board => !hidden.includes(board));

for (var i = 0; i < boards.length; i++) {
    const boardName = boards[i];
    const abbreviation = boardAbbreviations[boardName] || boardName;
    buttonContainer.appendChild(createButton(abbreviation, "https://ylilauta.org/" + boardName + "/", "navbar-button"));
    if (i < boards.length - 1) {
        buttonContainer.appendChild(createButton("/", "navbar-button", "merkki"));
    }
}

buttonContainer.appendChild(createButton("]", "navbar-button", "merkki"));

navbar.appendChild(buttonContainer);

navbar.insertBefore(buttonContainer, navbar.children[1]);
navbar.insertBefore(createButton("[", "navbar-button", "merkki"), navbar.children[3]);
navbar.insertBefore(createButton("Asetukset", "https://ylilauta.org/user/", "navbar-button"), navbar.children[4]);
navbar.insertBefore(createButton("/", "navbar-button", "merkki"), navbar.children[5]);
