// ==UserScript==
// @name         hamster kombat cheat
// @namespace    https://discord.gg/7radMBMnNZ
// @version      v3.1
// @description  homyak podrub!!!
// @author       ulybaka1337
// @match        https://hamsterkombatgame.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/ulybaka1337/hamster-kombat-cheat/main/main.js
// @updateURL    https://raw.githubusercontent.com/ulybaka1337/hamster-kombat-cheat/main/main.js
// ==/UserScript==

// ченжлог
// v1 - релиз, функции - выклик, сменить биржу, вкачать карту
// v1.1 - проверка на пустой токен
// v2.0 - чит сам забирает токен и вам не надо ничего вводить
// v3.0 - смена языка на английский, проверка на ошибки
// v3.1 - юрлы

(function() {
    'use strict'
    //alert("Внимание!! Чтобы мод меню на хомячка работало вам надо скачать расширение\n\nхром - https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino\n\nфайрфокс - https://addons.mozilla.org/ru/firefox/addon/cors-unblock/")
    alert("RU: Напоминание: проверьте что у вас установлено и включено расширение CORS Unblock!\n\nEN: Reminder: make sure u have installed CORS Unblock extension and enabled it!")

    let lang = "ru";
    let token = "Bearer " + localStorage.getItem("authToken");
    let exchangeId = "";
    let cardId = "";

    let err_emptyExchangeId = "";
    let err_emptyCardId = "";
    let responseSuccess = "";
    let responseFailure = "";
    let err_emptyCps = "";
    let isClicking = false;
    let startClicking = "";


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
    instaClickBtn.innerText = "";
    async function instaClick() {
        //if (lang == "ru") {
        //alert("перезагрузите страницу для изменений");
        let response = await fetch("https://api.hamsterkombatgame.io/clicker/tap", {
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
        });
        if (!response.ok) {
                alert(responseFailure + "\nBody:" + response.text)
            } else {
                alert(responseSuccess + "\nBody:" + response.text)
            }
    }
    instaClickBtn.setAttribute("style", "position: relative; z-index: 999");
    document.body.appendChild(instaClickBtn);
    instaClickBtn.addEventListener('click', instaClick);

    let exchangeIdInput = document.createElement("INPUT");
    exchangeIdInput.setAttribute("type", "text");
    exchangeIdInput.placeholder = "";
    exchangeIdInput.size = 8;
    exchangeIdInput.setAttribute("style", "position: relative; z-index: 999");
    document.body.appendChild(exchangeIdInput);

    const applyExchangeBtn = document.createElement('button');
    applyExchangeBtn.innerText = "";
    applyExchangeBtn.setAttribute("style", "position: relative; z-index: 999");

    async function applyExchange() {
        exchangeId = exchangeIdInput.value;
        if (exchangeId.length === 0) {
            alert(err_emptyExchangeId);
        } else {
        // ignore that error, tampermonkey is outdated af
        let response = await fetch("https://api.hamsterkombatgame.io/clicker/select-exchange", {
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
        if (!response.ok) {
            alert(responseFailure + "\nBody:" + response.text)
        } else {
            alert(responseSuccess + "\nBody:" + response.text)
        }
        exchangeIdInput.value = "";

    }}
    document.body.appendChild(applyExchangeBtn);
    applyExchangeBtn.addEventListener('click', applyExchange);

    let cardIdInput = document.createElement("INPUT");
    cardIdInput.setAttribute("type", "text");
    cardIdInput.placeholder = "";
    cardIdInput.size = 10;
    cardIdInput.setAttribute("style", "position: relative; z-index: 999")
    document.body.appendChild(cardIdInput);

    const upgradeCardBtn = document.createElement('button');
    upgradeCardBtn.innerText = "";
    upgradeCardBtn.setAttribute("style", "position: relative; z-index: 999");

    async function upgradeCard() {
        cardId = cardIdInput.value;
        if (cardId.length === 0) {
            alert(err_emptyCardId);
        } else {
        //alert("вы улучшили карту - " + cardId + ", перезагрузите страницу для изменений");
        let response = await fetch("https://api.hamsterkombatgame.io/clicker/buy-upgrade", {
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
            if (!response.ok) {
                alert(responseFailure + "\nBody:" + response.text)
            } else {
                alert(responseSuccess + "\nBody:" + response.text)
            }
            cardIdInput.value = "";
    }}
    document.body.appendChild(upgradeCardBtn);
    upgradeCardBtn.addEventListener('click', upgradeCard);

    const switchLangBtn = document.createElement('button');
    switchLangBtn.innerText = "";
    switchLangBtn.setAttribute("style", "position: relative; z-index: 999");
    function flipLang(){
      if (lang == "ru") {
          setLang("en");
      } else {
          setLang("ru");
      }
    }

    document.body.appendChild(switchLangBtn);
    switchLangBtn.addEventListener('click', flipLang);

    /*let cpsInput = document.createElement("INPUT");
    cpsInput.setAttribute("type", "number");
    cpsInput.placeholder = "";
    cpsInput.size = 12;
    cpsInput.setAttribute("style", "position: relative; z-index: 999")
    document.body.appendChild(cardIdInput);

    const autoclickerBtn = document.createElement('button');
    autoclickerBtn.innerText = "";

    function autoclick(){

    }*/

    function setLang(tolang){
        if (tolang == "ru") {
            instaClickBtn.innerText = "выкликать всю энергию";
            cardIdInput.placeholder = "айди карты";
            upgradeCardBtn.innerText = "улучшить карту";
            exchangeIdInput.placeholder = "айди биржи";
            applyExchangeBtn.innerText = "применить  биржу";
            err_emptyExchangeId = "нужна допомога!!! пустой айди биржи!!";
            err_emptyCardId = "нужна допомога!!! пустой айди карты!!";
            responseSuccess = "Отлично! Вот код и ответ от сервера:";
            responseFailure = "Ошибка! Думаю что в ответе от сервера будет все понятно:";
            switchLangBtn.innerText = "switch to english";
            lang = "ru";
        } else if (tolang == "en") {
            instaClickBtn.innerText = "instaclick";
            cardIdInput.placeholder = "card id";
            upgradeCardBtn.innerText = "upgrade card";
            exchangeIdInput.placeholder = "exchange id";
            applyExchangeBtn.innerText = "change exchange";
            err_emptyExchangeId = "exchange id is empty!!";
            err_emptyCardId = "card id is empty!!";
            responseSuccess = "Success! Here is the code and server answer:";
            responseFailure = "Damn! Error! Check out server's response:";
            switchLangBtn.innerText = "пом. язык на русский";
            lang = "en";
        }
    }

    setLang("ru");
})();
