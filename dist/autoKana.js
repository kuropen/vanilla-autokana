!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AutoKana=e():t.AutoKana=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=104)}([function(t,e,n){"use strict";var r=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=r)},function(t,e,n){"use strict";t.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,n){"use strict";var r=n(43),i=n(30);t.exports=function(t){return r(i(t))}},function(t,e,n){"use strict";var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,n){"use strict";var r,i=n(13),u=(r=i)&&r.__esModule?r:{default:r};t.exports=function(t){return"object"===(void 0===t?"undefined":(0,u.default)(t))?null!==t:"function"==typeof t}},function(t,e,n){"use strict";var r,i=n(49),u=(r=i)&&r.__esModule?r:{default:r};var o=n(18),s=n(32),c=n(19),f=u.default;e.f=n(1)?u.default:function(t,e,n){if(o(t),e=c(e,!0),o(n),s)try{return f(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";var r=n(2),i=n(0),u=n(100),o=n(11),s=n(4),c=function t(e,n,c){var f,a,l,p=e&t.F,v=e&t.G,d=e&t.S,h=e&t.P,y=e&t.B,g=e&t.W,_=v?i:i[n]||(i[n]={}),b=_.prototype,x=v?r:d?r[n]:(r[n]||{}).prototype;for(f in v&&(c=n),c)(a=!p&&x&&void 0!==x[f])&&s(_,f)||(l=a?x[f]:c[f],_[f]=v&&"function"!=typeof x[f]?c[f]:y&&a?u(l,r):g&&x[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?u(Function.call,l):l,h&&((_.virtual||(_.virtual={}))[f]=l,e&t.R&&b&&!b[f]&&o(b,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){"use strict";var r=n(25)("wks"),i=n(16),u=n(2).Symbol,o="function"==typeof u;(t.exports=function(t){return r[t]||(r[t]=o&&u[t]||(o?u:i)("Symbol."+t))}).store=r},function(t,e,n){"use strict";var r=n(7),i=n(0),u=n(10);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",o)}},function(t,e,n){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";var r=n(6),i=n(15);t.exports=n(1)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){"use strict";var r,i=n(45),u=(r=i)&&r.__esModule?r:{default:r};var o=n(44),s=n(24);t.exports=u.default||function(t){return o(t,s)}},function(t,e,n){"use strict";var r,i=n(13),u=(r=i)&&r.__esModule?r:{default:r};e.__esModule=!0;var o=f(n(96)),s=f(n(39)),c="function"==typeof s.default&&"symbol"===(0,u.default)(o.default)?function(t){return void 0===t?"undefined":(0,u.default)(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":(0,u.default)(t)};function f(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof s.default&&"symbol"===c(o.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,e,n){"use strict";e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+i).toString(36))}},function(t,e,n){"use strict";var r=n(30);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){"use strict";var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){"use strict";var r,i=n(64),u=(r=i)&&r.__esModule?r:{default:r};e.f=u.default},function(t,e,n){"use strict";var r=n(2),i=n(0),u=n(29),o=n(22),s=n(6).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},function(t,e,n){"use strict";e.f=n(8)},function(t,e,n){"use strict";var r=n(6).f,i=n(4),u=n(8)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){"use strict";var r=n(2),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){"use strict";var r=n(25)("keys"),i=n(16);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){"use strict";var r,i=n(91),u=(r=i)&&r.__esModule?r:{default:r};var o=n(18),s=n(46),c=n(24),f=n(26)("IE_PROTO"),a=function(){},l=function(){var t,e=n(41)("iframe"),r=c.length;for(e.style.display="none",n(80).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[c[r]];return l()};t.exports=u.default||function(t,e){var n;return null!==t?(a.prototype=o(t),n=new a,a.prototype=null,n[f]=t):n=l(),void 0===e?n:s(n,e)}},function(t,e,n){"use strict";t.exports={}},function(t,e,n){"use strict";t.exports=!0},function(t,e,n){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:r)(t)}},function(t,e,n){"use strict";t.exports=!n(1)&&!n(10)(function(){return 7!=Object.defineProperty(n(41)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r,i=n(59),u=(r=i)&&r.__esModule?r:{default:r};var o=n(14),s=n(15),c=n(3),f=n(19),a=n(4),l=n(32),p=u.default;e.f=n(1)?p:function(t,e){if(t=c(t),e=f(e,!0),l)try{return p(t,e)}catch(t){}if(a(t,e))return s(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r,i=n(35),u=(r=i)&&r.__esModule?r:{default:r};var o=n(44),s=n(24).concat("length","prototype");e.f=u.default||function(t){return o(t,s)}},function(t,e,n){"use strict";t.exports={default:n(61),__esModule:!0}},function(t,e,n){"use strict";var r=u(n(35)),i=u(n(13));function u(t){return t&&t.__esModule?t:{default:t}}var o=n(3),s=n(34).f,c={}.toString,f="object"==("undefined"==typeof window?"undefined":(0,i.default)(window))&&window&&r.default?(0,r.default)(window):[];t.exports.f=function(t){return f&&"[object Window]"==c.call(t)?function(t){try{return s(t)}catch(t){return f.slice()}}(t):s(o(t))}},function(t,e,n){"use strict";var r=o(n(13)),i=o(n(71)),u=o(n(68));function o(t){return t&&t.__esModule?t:{default:t}}var s=n(16)("meta"),c=n(5),f=n(4),a=n(6).f,l=0,p=u.default||function(){return!0},v=!n(10)(function(){return p((0,i.default)({}))}),d=function(t){a(t,s,{value:{i:"O"+ ++l,w:{}}})},h=t.exports={KEY:s,NEED:!1,fastKey:function(t,e){if(!c(t))return"symbol"==(void 0===t?"undefined":(0,r.default)(t))?t:("string"==typeof t?"S":"P")+t;if(!f(t,s)){if(!p(t))return"F";if(!e)return"E";d(t)}return t[s].i},getWeak:function(t,e){if(!f(t,s)){if(!p(t))return!0;if(!e)return!1;d(t)}return t[s].w},onFreeze:function(t){return v&&h.NEED&&p(t)&&!f(t,s)&&d(t),t}}},function(t,e,n){"use strict";var r,i=n(13),u=(r=i)&&r.__esModule?r:{default:r};var o=n(2),s=n(4),c=n(1),f=n(7),a=n(47),l=n(37).KEY,p=n(10),v=n(25),d=n(23),h=n(16),y=n(8),g=n(22),_=n(21),b=n(65),x=n(62),m=n(18),S=n(5),O=n(3),w=n(19),M=n(15),j=n(27),k=n(36),E=n(33),P=n(6),L=n(12),C=E.f,F=P.f,T=k.f,I=o.Symbol,N=o.JSON,A=N&&N.stringify,K=y("_hidden"),V=y("toPrimitive"),D={}.propertyIsEnumerable,R=v("symbol-registry"),G=v("symbols"),z=v("op-symbols"),W=Object.prototype,B="function"==typeof I,H=o.QObject,J=!H||!H.prototype||!H.prototype.findChild,q=c&&p(function(){return 7!=j(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=C(W,e);r&&delete W[e],F(t,e,n),r&&t!==W&&F(W,e,r)}:F,Y=function(t){var e=G[t]=j(I.prototype);return e._k=t,e},$=B&&"symbol"==(0,u.default)(I.iterator)?function(t){return"symbol"==(void 0===t?"undefined":(0,u.default)(t))}:function(t){return t instanceof I},Q=function(t,e,n){return t===W&&Q(z,e,n),m(t),e=w(e,!0),m(n),s(G,e)?(n.enumerable?(s(t,K)&&t[K][e]&&(t[K][e]=!1),n=j(n,{enumerable:M(0,!1)})):(s(t,K)||F(t,K,M(1,{})),t[K][e]=!0),q(t,e,n)):F(t,e,n)},U=function(t,e){m(t);for(var n,r=b(e=O(e)),i=0,u=r.length;u>i;)Q(t,n=r[i++],e[n]);return t},X=function(t){var e=D.call(this,t=w(t,!0));return!(this===W&&s(G,t)&&!s(z,t))&&(!(e||!s(this,t)||!s(G,t)||s(this,K)&&this[K][t])||e)},Z=function(t,e){if(t=O(t),e=w(e,!0),t!==W||!s(G,e)||s(z,e)){var n=C(t,e);return!n||!s(G,e)||s(t,K)&&t[K][e]||(n.enumerable=!0),n}},tt=function(t){for(var e,n=T(O(t)),r=[],i=0;n.length>i;)s(G,e=n[i++])||e==K||e==l||r.push(e);return r},et=function(t){for(var e,n=t===W,r=T(n?z:O(t)),i=[],u=0;r.length>u;)!s(G,e=r[u++])||n&&!s(W,e)||i.push(G[e]);return i};B||(a((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0);return c&&J&&q(W,t,{configurable:!0,set:function e(n){this===W&&e.call(z,n),s(this,K)&&s(this[K],t)&&(this[K][t]=!1),q(this,t,M(1,n))}}),Y(t)}).prototype,"toString",function(){return this._k}),E.f=Z,P.f=Q,n(34).f=k.f=tt,n(14).f=X,n(20).f=et,c&&!n(29)&&a(W,"propertyIsEnumerable",X,!0),g.f=function(t){return Y(y(t))}),f(f.G+f.W+f.F*!B,{Symbol:I});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)y(nt[rt++]);for(var it=L(y.store),ut=0;it.length>ut;)_(it[ut++]);f(f.S+f.F*!B,"Symbol",{for:function(t){return s(R,t+="")?R[t]:R[t]=I(t)},keyFor:function(t){if(!$(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){J=!0},useSimple:function(){J=!1}}),f(f.S+f.F*!B,"Object",{create:function(t,e){return void 0===e?j(t):U(j(t),e)},defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:Z,getOwnPropertyNames:tt,getOwnPropertySymbols:et}),N&&f(f.S+f.F*(!B||p(function(){var t=I();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(S(e)||void 0!==t)&&!$(t))return x(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!$(e))return e}),r[1]=e,A.apply(N,r)}}),I.prototype[V]||n(11)(I.prototype,V,I.prototype.valueOf),d(I,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},function(t,e,n){"use strict";t.exports={default:n(72),__esModule:!0}},function(t,e,n){"use strict";var r,i=n(79),u=(r=i)&&r.__esModule?r:{default:r};var o=n(4),s=n(17),c=n(26)("IE_PROTO"),f=Object.prototype;t.exports=u.default||function(t){return t=s(t),o(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?f:null}},function(t,e,n){"use strict";var r=n(5),i=n(2).document,u=r(i)&&r(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){"use strict";var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,n){"use strict";var r=n(42);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(4),i=n(3),u=n(83)(!1),o=n(26)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),c=0,f=[];for(n in s)n!=o&&r(s,n)&&f.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~u(f,n)||f.push(n));return f}},function(t,e,n){"use strict";t.exports={default:n(85),__esModule:!0}},function(t,e,n){"use strict";var r,i=n(88),u=(r=i)&&r.__esModule?r:{default:r};var o=n(6),s=n(18),c=n(12);t.exports=n(1)?u.default:function(t,e){s(t);for(var n,r=c(e),i=r.length,u=0;i>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){"use strict";t.exports=n(11)},function(t,e,n){"use strict";var r=n(29),i=n(7),u=n(47),o=n(11),s=n(28),c=n(92),f=n(23),a=n(40),l=n(8)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,h,y,g){c(n,e,d);var _,b,x,m=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",O="values"==h,w=!1,M=t.prototype,j=M[l]||M["@@iterator"]||h&&M[h],k=j||m(h),E=h?O?m("entries"):k:void 0,P="Array"==e&&M.entries||j;if(P&&(x=a(P.call(new t)))!==Object.prototype&&x.next&&(f(x,S,!0),r||"function"==typeof x[l]||o(x,l,v)),O&&j&&"values"!==j.name&&(w=!0,k=function(){return j.call(this)}),r&&!g||!p&&!w&&M[l]||o(M,l,k),s[e]=k,s[S]=v,h)if(_={values:O?k:m("values"),keys:y?k:m("keys"),entries:E},g)for(b in _)b in M||u(M,b,_[b]);else i(i.P+i.F*(p||w),e,_);return _}},function(t,e,n){"use strict";t.exports={default:n(98),__esModule:!0}},function(t,e,n){"use strict";t.exports={default:n(102),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(49),u=(r=i)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";var r=o(n(45)),i=o(n(39)),u=o(n(50));function o(t){return t&&t.__esModule?t:{default:t}}var s=n(12),c=n(20),f=n(14),a=n(17),l=n(43),p=u.default;t.exports=!p||n(10)(function(){var t={},e={},n=(0,i.default)(),u="abcdefghijklmnopqrst";return t[n]=7,u.split("").forEach(function(t){e[t]=t}),7!=p({},t)[n]||(0,r.default)(p({},e)).join("")!=u})?function(t,e){for(var n=a(t),r=arguments.length,i=1,u=c.f,o=f.f;r>i;)for(var p,v=l(arguments[i++]),d=u?s(v).concat(u(v)):s(v),h=d.length,y=0;h>y;)o.call(v,p=d[y++])&&(n[p]=v[p]);return n}:p},function(t,e,n){"use strict";n(21)("observable")},function(t,e,n){"use strict";n(21)("asyncIterator")},function(t,e,n){"use strict"},function(t,e,n){"use strict";var r=n(3),i=n(33).f;n(9)("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},function(t,e,n){"use strict";n(57);var r=n(0).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e,n){"use strict";t.exports={default:n(58),__esModule:!0}},function(t,e,n){"use strict";n(9)("getOwnPropertyNames",function(){return n(36).f})},function(t,e,n){"use strict";n(60);var r=n(0).Object;t.exports=function(t){return r.getOwnPropertyNames(t)}},function(t,e,n){"use strict";var r=n(42);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";n(38),t.exports=n(0).Object.getOwnPropertySymbols},function(t,e,n){"use strict";t.exports={default:n(63),__esModule:!0}},function(t,e,n){"use strict";var r=n(12),i=n(20),u=n(14);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var o,s=n(t),c=u.f,f=0;s.length>f;)c.call(t,o=s[f++])&&e.push(o);return e}},function(t,e,n){"use strict";var r=n(5);n(9)("isExtensible",function(t){return function(e){return!!r(e)&&(!t||t(e))}})},function(t,e,n){"use strict";n(66),t.exports=n(0).Object.isExtensible},function(t,e,n){"use strict";t.exports={default:n(67),__esModule:!0}},function(t,e,n){"use strict";var r=n(5),i=n(37).onFreeze;n(9)("preventExtensions",function(t){return function(e){return t&&r(e)?t(i(e)):e}})},function(t,e,n){"use strict";n(69),t.exports=n(0).Object.preventExtensions},function(t,e,n){"use strict";t.exports={default:n(70),__esModule:!0}},function(t,e,n){"use strict";n(38),n(56),n(55),n(54),t.exports=n(0).Symbol},function(t,e,n){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";var r=n(74),i=n(73),u=n(28),o=n(3);t.exports=n(48)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e,n){"use strict";n(75);for(var r=n(2),i=n(11),u=n(28),o=n(8)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var f=s[c],a=r[f],l=a&&a.prototype;l&&!l[o]&&i(l,o,f),u[f]=u.Array}},function(t,e,n){"use strict";var r=n(17),i=n(40);n(9)("getPrototypeOf",function(){return function(t){return i(r(t))}})},function(t,e,n){"use strict";n(77),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){"use strict";t.exports={default:n(78),__esModule:!0}},function(t,e,n){"use strict";var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){"use strict";var r=n(31),i=Math.max,u=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):u(t,e)}},function(t,e,n){"use strict";var r=n(31),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(3),i=n(82),u=n(81);t.exports=function(t){return function(e,n,o){var s,c=r(e),f=i(c.length),a=u(o,f);if(t&&n!=n){for(;f>a;)if((s=c[a++])!=s)return!0}else for(;f>a;a++)if((t||a in c)&&c[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(17),i=n(12);n(9)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){"use strict";n(84),t.exports=n(0).Object.keys},function(t,e,n){"use strict";var r=n(7);r(r.S+r.F*!n(1),"Object",{defineProperties:n(46)})},function(t,e,n){"use strict";n(86);var r=n(0).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},function(t,e,n){"use strict";t.exports={default:n(87),__esModule:!0}},function(t,e,n){"use strict";var r=n(7);r(r.S,"Object",{create:n(27)})},function(t,e,n){"use strict";n(89);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){"use strict";t.exports={default:n(90),__esModule:!0}},function(t,e,n){"use strict";var r=n(27),i=n(15),u=n(23),o={};n(11)(o,n(8)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:i(1,n)}),u(t,e+" Iterator")}},function(t,e,n){"use strict";var r=n(31),i=n(30);t.exports=function(t){return function(e,n){var u,o,s=String(i(e)),c=r(n),f=s.length;return c<0||c>=f?t?"":void 0:(u=s.charCodeAt(c))<55296||u>56319||c+1===f||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):u:t?s.slice(c,c+2):o-56320+(u-55296<<10)+65536}}},function(t,e,n){"use strict";var r=n(93)(!0);n(48)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";n(94),n(76),t.exports=n(22).f("iterator")},function(t,e,n){"use strict";t.exports={default:n(95),__esModule:!0}},function(t,e,n){"use strict";var r=n(7);r(r.S+r.F*!n(1),"Object",{defineProperty:n(6).f})},function(t,e,n){"use strict";n(97);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(99);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var r=n(7);r(r.S+r.F,"Object",{assign:n(53)})},function(t,e,n){"use strict";n(101),t.exports=n(0).Object.assign},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(50)),i=o(n(52)),u=o(n(51));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){e=e?e.replace(/([[\]().?/*{}+$^:])/g,"$1"):" \\s ";var n=new RegExp("^["+e+"]+","g");return t.replace(n,"")}var c=/[^ 　ぁあ-んー]/g,f=/[ぁぃぅぇぉっゃゅょ]/g,a=function(){function t(e,n){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,i.default)(this,t);var o=document.getElementById(s(e,"#")),c=document.getElementById(s(n,"#"));if(!o)throw new Error("Element not found: "+e);if(!c)throw new Error("Element not found: "+n);this.elName=o,this.elFurigana=c,this.option=(0,r.default)({katakana:!1,checkInterval:30},u),this.active=!0,this.timer=null,this.initializeValues(),this.registerEvents()}return(0,u.default)(t,[{key:"initializeValues",value:function(){this.baseKana="",this.isConverting=!1,this.ignoreString="",this.input="",this.values=[]}},{key:"registerEvents",value:function(){var t=this;this.elName.addEventListener("blur",function(){t.clearInterval()}),this.elName.addEventListener("focus",function(){t.onInput(),t.setInterval()}),this.elName.addEventListener("keydown",function(){t.isConverting&&t.onInput()})}},{key:"start",value:function(){this.active=!0}},{key:"stop",value:function(){this.active=!1}},{key:"toggle",value:function(t){if(t){var e=Event.element(t);e&&(this.active=e.checked)}else this.active=!this.active}},{key:"clearInterval",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){this.timer&&clearInterval(this.timer)})},{key:"toKatakana",value:function(t){return this.option.katakana,t}},{key:"setFurigana",value:function(t){this.isConverting||(t&&(this.values=t),this.active&&(this.elFurigana.value=this.toKatakana(this.baseKana+this.values.join(""))))}},{key:"removeString",value:function(t){if(-1!==t.indexOf(this.ignoreString))return t.replace(this.ignoreString,"");for(var e=this.ignoreString.split(""),n=t.split(""),r=0;r<e.length;r+=1)e[r]===n[r]&&(n[r]="");return n}},{key:"checkConvert",value:function(t){if(!this.isConverting)if(Math.abs(this.values.length-t.length)>1){var e=t.join("").replace(f,"").split("");Math.abs(this.values.length-e.length)>1&&this.onConvert()}else this.values.length===this.input.length&&this.values.join("")!==this.input&&this.input.match(c)&&this.onConvert()}},{key:"checkValue",value:function(){var t=void 0;if(""===(t=this.elName.value))this.initializeValues(),this.setFurigana();else{if(t=this.removeString(t),this.input===t)return;if(this.input=t,!this.isConverting){var e=t.replace(c,"").split("");this.checkConvert(e),this.setFurigana(e)}}}},{key:"setInterval",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){this.timer=setInterval(this.checkValue.bind(this),this.option.checkInterval)})},{key:"onInput",value:function(){this.baseKana=this.elFurigana.value,this.isConverting=!1,this.ignoreString=this.elName.value}},{key:"onConvert",value:function(){this.baseKana=this.baseKana+this.values.join(""),this.isConverting=!0,this.values=[]}}]),t}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.bind=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new u.default(t,e,n)};var r,i=n(103),u=(r=i)&&r.__esModule?r:{default:r}}])});