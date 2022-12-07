// ==UserScript==
// @name         Auto skip video for ranked users
// @namespace    https://github.com/LucasHenriqueDiniz
// @version      0.11
// @description  auto skip :>
// @author       Lucas Diniz

// @match        *://rewards.hypixel.net/claim-reward/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hypixel.net
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.1.min.js

// @homepageURL  https://github.com/LucasHenriqueDiniz/HypixelAutoSkipDaily
// @supportURL   https://github.com/LucasHenriqueDiniz/HypixelAutoSkipDaily/issues
// @downloadURL  https://github.com/LucasHenriqueDiniz/HypixelAutoSkipDaily/raw/main/HypixelAutoSkipDaily.user.js
// @updateURL    https://github.com/LucasHenriqueDiniz/HypixelAutoSkipDaily/raw/main/HypixelAutoSkipDaily.user.js

// ==/UserScript==
    var $ = window.jQuery;
function AutoSkip() {
    'use strict';
    $(".index__skipButton___3ihHt").click();
}
$( document ).ready(function() {
   AutoSkip()
});
