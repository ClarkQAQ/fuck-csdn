// ==UserScript==
// @name         fuck-csdn
// @namespace    https://blog.csdn.net/
// @version      0.3
// @description  (2023-05-17 更新) 去你妈的老子要复制粘贴
// @author       clarkqwq
// @match        https://blog.csdn.net/*
// @grant        none
// @license      MIT
// @supportURL   https://github.com/ClarkQAQ/fuck-csdn
// ==/UserScript==

(function() {
    'use strict';

    ["pre", "code"].forEach((name) => document.querySelectorAll(name).forEach((item) => item.setAttribute("style", "webkit-user-select: auto;user-select: auto;")));
    document.querySelectorAll("article")?.forEach((item) => (item.innerHTML = item.innerHTML));
    document.addEventListener("copy", (e) => (e.preventDefault() || e.clipboardData.setData("text/plain", window.getSelection().toString())));
})();
