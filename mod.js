// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,a,y,f,c;if(null==t)return n.call(t);a=t[o],c=o,e=null!=(f=t)&&r.call(f,c);try{t[o]=void 0}catch(r){return n.call(t)}return y=n.call(t),e?t[o]=a:delete t[o],y}:function(t){return n.call(t)},a="function"==typeof Int16Array;var y="function"==typeof Int16Array?Int16Array:null;var f="function"==typeof Int16Array?Int16Array:void 0;var c=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y([1,3.14,-3.14,32768]),r=n,t=(a&&r instanceof Int16Array||"[object Int16Array]"===e(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-32768===n[3]}catch(n){t=!1}return t}()?f:function(){throw new Error("not implemented")},i="function"==typeof Int32Array;var u="function"==typeof Int32Array?Int32Array:null;var l,p="function"==typeof Int32Array?Int32Array:void 0;l=function(){var t,n,r;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,2147483648]),r=n,t=(i&&r instanceof Int32Array||"[object Int32Array]"===e(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-2147483648===n[3]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")};var v="function"==typeof Int8Array;var A="function"==typeof Int8Array?Int8Array:null;var I="function"==typeof Int8Array?Int8Array:void 0;var m={int16:c,int32:l,int8:function(){var t,n,r;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,128]),r=n,t=(v&&r instanceof Int8Array||"[object Int8Array]"===e(r))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")}};function b(t){return m[t]||null}export{b as default};
//# sourceMappingURL=mod.js.map
