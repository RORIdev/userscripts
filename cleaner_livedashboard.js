// ==UserScript==
// @name         Remove COPPA / Live Studio
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       roridev
// @match        https://www.youtube.com/live_dashboard?nv=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Removes Live Studio
    document.getElementsByClassName("navless-header-info-message")[0].remove();
    document.getElementsByClassName("live-lcr-promo-text")[0].remove();
    document.getElementsByClassName("back-to-studio-button")[0].remove();
    var argv = document.getElementsByClassName("yt-alert-actionable");
    var argc = argv.length;
    for(var i = 0; i <= argc; i++)
    {
        argv[0].remove();
    }
})();
