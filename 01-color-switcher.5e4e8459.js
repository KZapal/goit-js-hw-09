!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function n(){document.body.style.background="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}var o=null;t.addEventListener("click",(function(){o=setInterval(n,1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.5e4e8459.js.map