// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,f,y,i,c;if(null==t)return r.call(t);f=t[e],c=e,n=null!=(i=t)&&o.call(i,c);try{t[e]=void 0}catch(n){return r.call(t)}return y=r.call(t),n?t[e]=f:delete t[e],y}:function(t){return r.call(t)},y="function"==typeof Int16Array,i="function"==typeof Int16Array?Int16Array:null,c="function"==typeof Int16Array?Int16Array:void 0,u=function(){var t,n,r;if("function"!=typeof i)return!1;try{n=new i([1,3.14,-3.14,32768]),r=n,t=(y&&r instanceof Int16Array||"[object Int16Array]"===f(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-32768===n[3]}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")},a="function"==typeof Int32Array,l="function"==typeof Int32Array?Int32Array:null,p="function"==typeof Int32Array?Int32Array:void 0;t=function(){var t,n,r;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,2147483648]),r=n,t=(a&&r instanceof Int32Array||"[object Int32Array]"===f(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-2147483648===n[3]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")};var A="function"==typeof Int8Array,I="function"==typeof Int8Array?Int8Array:null,d="function"==typeof Int8Array?Int8Array:void 0,m={int16:u,int32:t,int8:function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,128]),r=n,t=(A&&r instanceof Int8Array||"[object Int8Array]"===f(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")}};return function(t){return m[t]||null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).ctors=n();
//# sourceMappingURL=browser.js.map
