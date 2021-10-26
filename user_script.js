// ==UserScript==
// @name         fuck-csdn
// @namespace    https://blog.csdn.net/
// @version      0.1
// @description  去你妈的老子要复制粘贴
// @author       clarkqwq
// @match        https://blog.csdn.net/*
// @grant        none
// @license      MIT
// @supportURL   https://github.com/ClarkQAQ/fuck-csdn
// ==/UserScript==

(function() {
    'use strict';

    let tags = ["pre", "code"];
    const style = "webkit-user-select: auto;user-select: auto;"

    for (let i = 0; i < tags.length; i++) {
        let d = document.getElementsByTagName(tags[i]);
        for(let j = 0; j < d.length; j++) {
            d[j].setAttribute("style", style)
        }
    }
})();
