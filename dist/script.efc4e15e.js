parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sA32":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t,exports.kyle=exports.jacky=void 0;var e=exports.kyle={name:"Kyle"},o=exports.jacky={name:"Jacky"};function t(e){console.log(e.name)}
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=t(require("./user.js"));function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function t(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var u={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&{}.hasOwnProperty.call(e,f)){var o=a?Object.getOwnPropertyDescriptor(e,f):null;o&&(o.get||o.set)?Object.defineProperty(u,f,o):u[f]=e[f]}return u.default=e,n&&n.set(e,u),u}(0,e.default)(e.jacky);
},{"./user.js":"sA32"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.efc4e15e.js.map