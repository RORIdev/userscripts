// ==UserScript==
// @name         Replace Live Studio with (old) Live Dashboard
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       RORIdev
// @match        https://studio.youtube.com/channel/*/livestreaming
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Redirects to old live_dashboard
    window.location.replace("https://www.youtube.com/live_dashboard?nv=1")

})();
