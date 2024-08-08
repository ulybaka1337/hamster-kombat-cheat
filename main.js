// ==UserScript==
// @name         hamster kombat cheat
// @namespace    https://discord.gg/7radMBMnNZ
// @version      v2.0
// @description  homyak podrub!!!
// @author       ulybaka1337
// @match        https://hamsterkombatgame.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// ченжлог
// v1 - релиз, функции - выклик, сменить биржу, вкачать карту
// v1.1 - проверка на пустой токен
// v2.0 - чит сам забирает токен и вам не надо ничего вводить

(function() {
    'use strict'
    alert("Внимание!! Чтобы мод меню на хомячка работало вам надо скачать расширение\n\nхром - https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino\n\nфайрфокс - https://addons.mozilla.org/ru/firefox/addon/cors-unblock/")


    let token = "Bearer " + localStorage.getItem("authToken");
    let exchangeId = "";
    let cardId = "";

    /*let tokenInput = document.createElement("INPUT");
    tokenInput.setAttribute("type", "text");
    tokenInput.placeholder = "ваш токин \(я не умею его брать самому\)";
    tokenInput.size = 32;
    tokenInput.setAttribute("style", "position: relative; z-index: 999")
    document.body.appendChild(tokenInput);

    const applyTokenBtn = document.createElement('button');
    applyTokenBtn.innerText = "применить токен";
    applyTokenBtn.setAttribute("style", "position: relative; z-index: 999");
    function applyToken() {
        token = tokenInput.value;
        if (token.length === 0) {
            alert("перемога!!! токен пустой!!");
        } else {
        alert("Ваш токен: " + token);
        tokenInput.value = ""
        }
    }
    document.body.appendChild(applyTokenBtn);
    applyTokenBtn.addEventListener('click', applyToken);*/

    const instaClickBtn = document.createElement('button');
    instaClickBtn.innerText = "выкликать всю энергию";
    function instaClick() {
        alert("перезагрузите страницу для изменений");
        fetch("https://api.hamsterkombatgame.io/clicker/tap", {
            "headers": {
                "accept": "application/json",
                     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                     "access-control-allow-headers": "",
                     "authorization": token,
                     "content-type": "application/json",
                     "priority": "u=1, i",
                     "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
                     "sec-ch-ua-mobile": "?0",
                     "sec-ch-ua-platform": "\"Windows\"",
                     "sec-fetch-dest": "empty",
                     "sec-fetch-mode": "cors",
                     "sec-fetch-site": "same-site"
                    },
            "referrer": "https://hamsterkombatgame.io/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"count\":99999999999999,\"availableTaps\":0,\"timestamp\":" + Date.now() +"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });}
    instaClickBtn.setAttribute("style", "position: relative; z-index: 999")
    document.body.appendChild(instaClickBtn);
    instaClickBtn.addEventListener('click', instaClick);

    let exchangeIdInput = document.createElement("INPUT");
    exchangeIdInput.setAttribute("type", "text");
    exchangeIdInput.placeholder = "айди биржи";
    exchangeIdInput.size = 8;
    exchangeIdInput.setAttribute("style", "position: relative; z-index: 999")
    document.body.appendChild(exchangeIdInput);

    const applyExchangeBtn = document.createElement('button');
    applyExchangeBtn.innerText = "применить  биржу";
    applyExchangeBtn.setAttribute("style", "position: relative; z-index: 999");
    function applyExchange() {
        exchangeId = exchangeIdInput.value;
        if (exchangeId.length === 0) {
            alert("перемога!!! пустой айди биржи!!");
        } else {
        alert("ваша новая биржа - " + exchangeId + ", перезагрузите страницу для изменений");
        fetch("https://api.hamsterkombatgame.io/clicker/select-exchange", {
            "headers": {
                "accept": "application/json",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "authorization": token,
                "content-type": "application/json",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
                "referrer": "https://hamsterkombatgame.io/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"exchangeId\":\"" + exchangeId + "\"}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
        });
        exchangeIdInput.value = "";
    }}
    document.body.appendChild(applyExchangeBtn);
    applyExchangeBtn.addEventListener('click', applyExchange);

    let cardIdInput = document.createElement("INPUT");
    cardIdInput.setAttribute("type", "text");
    cardIdInput.placeholder = "айди карты";
    cardIdInput.size = 10;
    cardIdInput.setAttribute("style", "position: relative; z-index: 999")
    document.body.appendChild(cardIdInput);

    const upgradeCardBtn = document.createElement('button');
    upgradeCardBtn.innerText = "улучшить карту";
    upgradeCardBtn.setAttribute("style", "position: relative; z-index: 999");
    function upgradeCard() {
        cardId = cardIdInput.value;
        if (cardId.length === 0) {
            alert("перемога!!! пустой айди карты!!");
        } else {
        alert("вы улучшили карту - " + cardId + ", перезагрузите страницу для изменений");
        fetch("https://api.hamsterkombatgame.io/clicker/buy-upgrade", {
            "headers": {
                "accept": "application/json",
                "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
                "authorization": token,
                "content-type": "application/json",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
                "referrer": "https://hamsterkombatgame.io/",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"upgradeId\":\"" + cardId + "\",\"timestamp\":" + Date.now() + "}",
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
        });
            cardIdInput.value = "";
    }}
    document.body.appendChild(upgradeCardBtn);
    upgradeCardBtn.addEventListener('click', upgradeCard);
})();
