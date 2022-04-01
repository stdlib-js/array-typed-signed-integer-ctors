// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ctors=t()}(this,(function(){"use strict";var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return n&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(n){return o.call(n)},f=Object.prototype.hasOwnProperty;var i=function(n,t){return null!=n&&f.call(n,t)},u="function"==typeof Symbol?Symbol.toStringTag:"",c=i,a=u,y=r;var l=e,p=function(n){var t,r,o;if(null==n)return y.call(n);r=n[a],t=c(n,a);try{n[a]=void 0}catch(t){return y.call(n)}return o=y.call(n),t?n[a]=r:delete n[a],o},A=t()?p:l,I=A,v="function"==typeof Int16Array;var d="function"==typeof Int16Array?Int16Array:null,m=function(n){return v&&n instanceof Int16Array||"[object Int16Array]"===I(n)},b=d;var s="function"==typeof Int16Array?Int16Array:void 0,h=function(){throw new Error("not implemented")},w=function(){var n,t;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,32768]),n=m(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){n=!1}return n}()?s:h,S=A,g="function"==typeof Int32Array;var j="function"==typeof Int32Array?Int32Array:null,T=function(n){return g&&n instanceof Int32Array||"[object Int32Array]"===S(n)},E=j;var O,x="function"==typeof Int32Array?Int32Array:void 0,P=function(){throw new Error("not implemented")};O=function(){var n,t;if("function"!=typeof E)return!1;try{t=new E([1,3.14,-3.14,2147483648]),n=T(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){n=!1}return n}()?x:P;var k=A,q="function"==typeof Int8Array;var z="function"==typeof Int8Array?Int8Array:null,B=function(n){return q&&n instanceof Int8Array||"[object Int8Array]"===k(n)},C=z;var D="function"==typeof Int8Array?Int8Array:void 0,F=function(){throw new Error("not implemented")},G={int16:w,int32:O,int8:function(){var n,t;if("function"!=typeof C)return!1;try{t=new C([1,3.14,-3.14,128]),n=B(t)&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){n=!1}return n}()?D:F};return function(n){return G[n]||null}}));
//# sourceMappingURL=bundle.js.map
