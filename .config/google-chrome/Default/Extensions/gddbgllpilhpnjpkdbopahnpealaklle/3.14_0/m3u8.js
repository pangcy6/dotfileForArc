/*! For license information please see m3u8.js.LICENSE.txt */
(()=>{var t={544:(t,e,r)=>{"use strict";var n=r(203);Object.defineProperty(e,"__esModule",{value:!0}),e.doInit=function(){if(void 0===localStorage[h]||""==localStorage[h]){var t=new Array({ext:"flv",size:10},{ext:"hlv",size:10},{ext:"f4v",size:10},{ext:"mp4",size:10},{ext:"mp3",size:10},{ext:"wma",size:10},{ext:"wav",size:10},{ext:"m4a",size:10},{ext:"webm",size:10},{ext:"ogg",size:10},{ext:"ogv",size:10},{ext:"acc",size:10},{ext:"mov",size:10},{ext:"mkv",size:10},{ext:"m3u8",size:0},{ext:"ts",size:1e11});localStorage[h]=JSON.stringify(t)}if(void 0===localStorage.Type){var e=new Array({Type:"video/*",size:2048},{Type:"audio/*",size:10});localStorage.Type=JSON.stringify(e)}if(void 0===localStorage.BlockedDomains){var r=new Array;localStorage.BlockedDomains=JSON.stringify(r)}void 0===localStorage.repeat&&(localStorage.repeat=!1),void 0===localStorage.repeatReg&&(localStorage.repeatReg="\\?[\\S]+"),void 0===localStorage.Debug&&(localStorage.Debug=!1),void 0===localStorage.TitleName&&(localStorage.TitleName=!1),void 0===localStorage.popListCount&&(localStorage.popListCount=30),void 0===localStorage.showCountOnIcon&&(localStorage.showCountOnIcon=!0)},e.tr=function(t){$("#"+t).html(d(t))},e.getLanguage=m,e.getExtManifest=function(){return p.runtime.getManifest()},e.isActivePro=x,e.getDLMUrl=function(){var t,e=m(),r="://cococut.net/";return t="other"!=e?"dlm.html":"odlm.html",x()&&(r="://pro.cococut.net/",t="dlm.vhtml","other"==e&&(t="odlm.vhtml")),r+"dlm/"+(v.includes(e)?e+"/":"")+t},e.getLoaderUrl=e.DISABLE_DOWNLOADING_FROM_YOUTUBE_REGEXP=e.supportedLanguages=e.t=e.PRE_DEF_EXTS=e.YTDLUIPAGE=e.YTDLPAGE=e.HOMEPAGE=e.ISEDGE=e.PROENV=void 0;var o,i,a,c=n(r(824)),u=n(r(29)),l=r(692),s=r(962),f=(o=(0,u.default)(c.default.mark((function t(){var e,r,n;return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=b()).dailycount||(e.dailycount=20),t.next=4,(0,s.getExpItem)("dailyDlCount");case 4:return(r=t.sent)&&r>e.dailycount&&(n="exceeded.html"),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)}))),function(){return o.apply(this,arguments)}),p=navigator.userAgent.includes("Chrome")?chrome:browser;e.PROENV=!0,e.ISEDGE=!1,e.HOMEPAGE=i,e.YTDLPAGE=a,e.YTDLUIPAGE="https://findit.cococut.net/",e.HOMEPAGE=i="https://cococut.net",e.YTDLPAGE=a="https://pro.cococut.net/yt/";var h="Ext04";e.PRE_DEF_EXTS=h,p.browserAction.setIcon({path:{16:"assets/icons/16x16_gray.png",32:"assets/icons/32x32_gray.png",48:"assets/icons/48x48_gray.png",64:"assets/icons/64x64_gray.png",128:"assets/icons/128x128_gray.png"}});var d=p.i18n.getMessage;e.t=d;var v=["zh_tw","zh_cn"];function m(){var t=p.i18n.getUILanguage();return t.match(/zh-CN/)?"zh_cn":t.match(/zh-TW/)?"zh_tw":t.startsWith("zh")?"zh_cn":t.startsWith("en")?t.substr(0,2):"other"}if(e.supportedLanguages=v,p.runtime.onInstalled.addListener((function(t){var e=m(),r="https://cococut.net/"+(v.includes(e)?e+"/":"")+"installed.html";localStorage.getItem("installed")?chrome.storage.sync.set({installed:"t"}):p.tabs.create({url:r},(function(t){console.log("Hi, wellcome:)"),localStorage.setItem("installed","t"),chrome.storage.sync.set({installed:"t"})}))})),p.runtime.setUninstallURL){var g=m(),y="https://cococut.net/"+(v.includes(g)?g+"/":"")+"uninstalled.html";p.runtime.setUninstallURL(y)}function x(){return!(!localStorage.getItem("pui")||"active"!=(0,l.decipher)("CocoCut pro user")(localStorage.getItem("pui")).split("||")[3])}e.DISABLE_DOWNLOADING_FROM_YOUTUBE_REGEXP=/^https?:\/\/www\.youtube\.com\//;var w,b=function(){var t=localStorage.option,e={counter:0,domain:{}};try{t&&Object.assign(e,JSON.parse(t)),e.counter=Math.max(0,Math.floor(Number(e.counter)||0)),e.rcounterr=Math.max(0,Math.floor(Number(e.rcounterr)||0)),localStorage.option=JSON.stringify(e)}catch(t){console.log(t.stack)}return e},E=(w=(0,u.default)(c.default.mark((function t(){var e,r,n,o,i;return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=m(),r="://cococut.net/",n="other"!==e?"hls.html":"ohls.html",t.next=5,f();case 5:return(o=t.sent)&&(n=o),x()&&(r="://pro.cococut.net/",n="hls.vhtml","other"==e&&(n="ohls.vhtml")),i=r+(v.includes(e)?e+"/":"")+n,t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)}))),function(){return w.apply(this,arguments)});e.getLoaderUrl=E},692:(t,e,r)=>{"use strict";var n=r(203),o=r(501);Object.defineProperty(e,"__esModule",{value:!0}),e.setLocalStoreWithExpiry=function(t,e,r){var n={value:e,expiry:(new Date).getTime()+r};localStorage.setItem(t,JSON.stringify(n))},e.getLocalStoreWithExpiry=function(t){var e=localStorage.getItem(t);if(!e)return null;var r=JSON.parse(e);return(new Date).getTime()>r.expiry?(localStorage.removeItem(t),null):r.value},e.remainTimeMinutes=h,e.plusDlCount=e.decipher=e.cipher=e.fetch_retry=e.fetchWithTimeout=void 0;var i=n(r(824)),a=n(r(29)),c=n(r(231)),u=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!==o(t)&&"function"!=typeof t)return{default:t};var r=l(e);if(r&&r.has(t))return r.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var c=i?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}(r(962));function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(l=function(t){return t?r:e})(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){(0,c.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=new AbortController,o=f({},e,{signal:n.signal});return setTimeout((function(){n.abort()}),r),fetch(t,o).then((function(t){if(!t.ok)throw new Error("".concat(t.status,": ").concat(t.statusText));return t})).catch((function(t){if("AbortError"===t.name)throw new Error("Response timed out");throw new Error(t.message)}))};function h(){return 1440-60*(new Date).getHours()-(new Date).getMinutes()}e.fetchWithTimeout=p,e.fetch_retry=function t(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return p(e,r,n).catch((function(i){if(1===o)throw i;return t(e,r,n,o-1)}))},e.cipher=function(t){var e=function(t){return t.split("").map((function(t){return t.charCodeAt(0)}))},r=function(t){return("0"+Number(t).toString(16)).substr(-2)},n=function(r){return e(t).reduce((function(t,e){return t^e}),r)};return function(t){return t.split("").map(e).map(n).map(r).join("")}},e.decipher=function(t){var e=function(e){return(r=t,r.split("").map((function(t){return t.charCodeAt(0)}))).reduce((function(t,e){return t^e}),e);var r};return function(t){return t.match(/.{1,2}/g).map((function(t){return parseInt(t,16)})).map(e).map((function(t){return String.fromCharCode(t)})).join("")}};var d,v=(d=(0,a.default)(i.default.mark((function t(){var e,r;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getExpItem("dailyDlCount");case 2:e=(e=t.sent)?parseInt(e)+1:1,r=60*h()*1e3,u.setExpItem("dailyDlCount",e,r);case 6:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)});e.plusDlCount=v},842:()=>{},29:t=>{function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},231:(t,e,r)=>{var n=r(40);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},203:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},337:(t,e,r)=>{var n=r(501).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new P(n||[]);return a(i,"_invoke",{value:_(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d={};function v(){}function m(){}function g(){}var y={};f(y,u,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(j([])));w&&w!==r&&i.call(w,u)&&(y=w);var b=g.prototype=v.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,a,c,u){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:D}}function D(){return{value:void 0,done:!0}}return m.prototype=g,a(b,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:m,configurable:!0}),m.displayName=f(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},E(O.prototype),f(O.prototype,l,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),f(b,s,"Generator"),f(b,u,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},27:(t,e,r)=>{var n=r(501).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},40:(t,e,r)=>{var n=r(501).default,o=r(27);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},501:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},824:(t,e,r)=>{var n=r(337)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},962:(t,e,r)=>{"use strict";r.r(e),r.d(e,{getExpItem:()=>s,getItem:()=>o,getLocalItem:()=>i,removeItem:()=>u,setExpItem:()=>l,setItem:()=>a,setLocalItem:()=>c});const n=navigator.userAgent.includes("Chrome")?chrome:browser,o=t=>new Promise(((e,r)=>n.storage.sync.get(t,(o=>n.runtime.lastError?r(Error(n.runtime.lastError.message)):e(o?o[t]:void 0))))),i=t=>new Promise(((e,r)=>n.storage.local.get(t,(o=>n.runtime.lastError?r(Error(n.runtime.lastError.message)):e(o?o[t]:void 0)))));function a(t,e){const r={};return r[t]=e,n.storage.sync.set(r)}function c(t,e){const r={};return r[t]=e,n.storage.local.set(r)}function u(t){return n.storage.sync.remove(t)}function l(t,e,r){a(t,{value:e,expiry:(new Date).getTime()+r})}async function s(t){const e=await o(t);return e?(new Date).getTime()>e.expiry?(u(t),null):e.value:null}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";r(842);var t=r(544);!function(){for(var e=0,r=["TtryPlay","Tm3PageTile","Tm3FileUri","Tm3FileCount","Tm3Des1","Tm3Des2","Tm3Nextm3file","Tm3Nexm3Des","DownText","Text","Aria2Text","WgetText","UrlDecode","Refresh"];e<r.length;e++){var n=r[e];(0,t.tr)(n)}}();var e=new RegExp("[?]m3u8_url=([^\n]*)").exec(window.location.href),n=e[1];if(e=new RegExp("\\.m3u8\\?([^\n]*)").exec(n))var o=e[1];$("#m3u8_url").val(n);var i=n.startsWith("https://")?"https":"http",a=encodeURIComponent(n);$("#tryPlay").attr("href",i+"://m3u8.cococut.net/player.html?m3u8="+a),$.get(n,(function(e){var r=e.split("\n"),n=function(e){void 0===e&&(e="");var n=0;for(var o in $("#html").text(""),r){var i=r[o];if(-1!=i.indexOf("URI=")){var a=/URI="(.*)"/.exec(i);$("#key").html((0,t.t)("Tm3Key")),KeyURL=a[1],f(KeyURL)&&("/"==KeyURL[0]?KeyURL=s+KeyURL:KeyURL=l+KeyURL),p(e+KeyURL)}-1==i.indexOf("#")&&""!==i&&(f(i)&&(i="/"==i[0]?s+i:l+i),$("#num").html(++n),p(e+i),-1!=i.indexOf(".m3u8")&&($("#textarea").hide(),$("button").hide(),$("#next_m3u8_tr").show(),h(i)))}};n(),$("#Text").bind("click",(function(){n()})),$("#WgetText").bind("click",(function(){n("wget ")})),$("#Aria2Text").bind("click",(function(){n("aria2c -c -s10 -x10 ")})),$("#DownText").bind("click",(function(){n();var t=$("#html").html().toString();t=encodeURIComponent(t);var e=document.createElement("a");e.href="data:application/json,".concat(t),e.setAttribute("download","m3u8.txt"),e.dispatchEvent(new MouseEvent("click"))})),$("#UrlDecode").bind("click",(function(){l=u(!1),n()})),$("#Refresh").bind("click",(function(){l=u(!0),n()}))}));var c,u=function(t){var e=decodeURIComponent(n);t||(e=n);var r=(e=e.split("?")[0]).split("/");return r.pop(),"".concat(r.join("/"),"/")},l=u(!0),s=(c=n.split("/"),"".concat(c[0],"//").concat(c[2])),f=function(t){return!new RegExp("^(?:[a-z]+:)?//","i").test(t)},p=function(t){!(e=new RegExp("[?]([^\n]*)").exec(t))&&o&&(t="".concat(t,"?").concat(o));var r="".concat($("#html").text()+t,"\n");$("#html").text(r)},h=function(t){$("#next_m3u8").append('<p><a href="/m3u8.html?m3u8_url='.concat(t,'">').concat(t,"</a></p>"))}})()})();