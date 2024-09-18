(()=>{"use strict";var n={462:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,":root {\n    --primary-color: orange;\n}\n\n.red { background-color: #ff5f57; }\n.yellow { background-color: #ffbd44; }\n.green { background-color: #28c841; }\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n}\n\n.calculator {\n    width: 300px;\n    margin: 50px auto;\n    background-color: #333;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n}\n\n.window {\n    padding: 10px;\n    border-bottom: 1px solid #555;\n}\n\n.buttons {\n    display: flex;\n    column-gap: 8px;\n    padding-bottom: 10px;\n}\n\n.button {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n}\n\n.display {\n    font-size: 2em;\n    color: white;\n    text-align: right;\n    padding: 20px;\n    background-color: #222;\n    border-radius: 5px;\n}\n\n.keys {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 1px;\n}\n\n.row {\n    display: contents;\n}\n\n.key {\n    background-color: #444;\n    border: none;\n    color: white;\n    font-size: 1.2em;\n    padding: 20px;\n    cursor: pointer;\n}\n\n.key.zero {\n    grid-column: span 2;\n}\n\n.key:hover {\n    background-color: #555;\n}\n\n.key.primary {\n    background-color: var(--primary-color);\n}\n\n.key.primary:hover {\n    background-color: var(--primary-color);\n    opacity: 0.9;\n}\n",""]);const s=i},131:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,".settings-container {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n}\n\n.icon-settings {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    transition: transform 0.5s ease;\n}\n\n.icon-rotate {\n    animation: spin 1s infinite linear;\n}\n\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.palette {\n    display: none;\n    width: 150px;\n    height: 150px;\n    background-color: #f0f0f0;\n    border-radius: 10px;\n    padding: 10px;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 10px;\n    justify-items: center;\n    align-items: center;\n}\n\n.color-circle {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: transform 0.2s;\n}\n\n.color-circle:hover {\n    transform: scale(1.1);\n}\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),d=t.n(l),u=t(540),p=t.n(u),f=t(113),m=t.n(f),y=t(462),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(y.A,g),y.A&&y.A.locals&&y.A.locals;var v="overflow",h="error";function b(n){return n===v||n===h?{isValid:!1,message:n}:"NaN"===n||"Infinity"===n||"-Infinity"===n?{isValid:!1,message:h}:{isValid:!0,message:n}}function x(n,e,t){var r,o=parseFloat(n),a=parseFloat(e);switch(t){case"+":r=o+a;break;case"-":r=o-a;break;case"×":r=o*a;break;case"÷":r=o/a;break;default:return o.toString()}var i=parseFloat(r.toPrecision(10)).toFixed(10).replace(/\.?0+$/,"");return i.length>14?{isValid:!1,message:v}:b(i)}var k=document.querySelector(".display"),w=document.querySelector(".keys"),A="0",E="",S="";function C(){A="0",E="",S=""}w.addEventListener("click",(function(n){var e=n.target;if(e.matches("button")){var t=e.textContent;switch(b(A).isValid||C(),t){case"AC":C();break;case"+/-":"0"!==A&&(A=A.startsWith("-")?A.slice(1):"-".concat(A));break;case"%":A=String(E&&S?parseFloat(E)*parseFloat(A)/100:parseFloat(A)/100);break;case"+":case"-":case"×":case"÷":!function(n){if(E&&S){var e=x(E,A,S);A=e.message}S=n,E=A,A="0"}(t);break;case"=":!function(){if(E&&S){var n=x(E,A,S);A=n.message,E="",S=""}}();break;default:!function(n){"."===n?A.includes(".")||(A+="."):A.length<14&&(A="0"===A?n:A+n)}(t)}k.textContent=A}}));var I=t(131),T={};T.styleTagTransform=m(),T.setAttributes=d(),T.insert=c().bind(null,"head"),T.domAPI=i(),T.insertStyleElement=p(),o()(I.A,T),I.A&&I.A.locals&&I.A.locals;var F=document.getElementById("icon-settings"),L=document.getElementById("palette");function M(){"none"===L.style.display||""===L.style.display?(F.classList.remove("icon-rotate"),L.style.display="grid",F.style.display="none"):(L.style.display="none",F.style.display="flex",F.classList.add("icon-rotate"))}F.addEventListener("click",M),document.querySelectorAll(".color-circle").forEach((function(n){n.addEventListener("click",(function(n){var e=n.target.getAttribute("data-color");document.documentElement.style.setProperty("--primary-color",e),M()}))})),document.documentElement.style.setProperty("--primary-color","orange")})();