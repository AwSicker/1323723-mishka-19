!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,r=document.createElement("source"),s=function(e){var t,s,n=e.parentNode;"PICTURE"===n.nodeName.toUpperCase()?(t=r.cloneNode(),n.insertBefore(t,n.firstElementChild),setTimeout((function(){n.removeChild(t)}))):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,s=e.sizes,e.sizes+=",100vw",setTimeout((function(){e.sizes=s})))},n=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])},i=function(){clearTimeout(t),t=setTimeout(n,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,t,r){"use strict";function s(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function n(e,t,r,s){var n,i,c;return"saveData"===S.algorithm?e>2.7?c=r+1:(i=(t-r)*(n=Math.pow(e-.6,1.5)),s&&(i+=.1*n),c=e+i):c=r>1?Math.sqrt(e*t):e,c>r}function i(e,t){return e.res-t.res}function c(e,t,r){var s;return!r&&t&&(r=(r=e[f.ns].sets)&&r[r.length-1]),(s=a(t,r))&&(t=f.makeUrl(t),e[f.ns].curSrc=t,e[f.ns].curCan=s,s.res||j(s,s.set.sizes)),s}function a(e,t){var r,s,n;if(e&&t)for(n=f.parseSet(t),e=f.makeUrl(e),r=0;r<n.length;r++)if(e===f.makeUrl(n[r].url)){s=n[r];break}return s}t.createElement("picture");var u,o,l,f={},d=!1,p=function(){},A=t.createElement("img"),m=A.getAttribute,h=A.setAttribute,g=A.removeAttribute,v=t.documentElement,w={},S={algorithm:""},x="data-pfsrc",y=x+"set",E=navigator.userAgent,z=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,b="currentSrc",T=/\s+\+?\d+(e\d+)?w/,C=/(\([^)]+\))?\s*(.+)/,R=e.picturefillCFG,L="font-size:100%!important;",M=!0,P={},D={},B=e.devicePixelRatio,I={px:1,in:96},U=t.createElement("a"),$=!1,k=/^[ \t\n\r\u000c]+/,W=/^[, \t\n\r\u000c]+/,Q=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,H=/^\d+$/,F=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,N=function(e,t,r,s){e.addEventListener?e.addEventListener(t,r,s||!1):e.attachEvent&&e.attachEvent("on"+t,r)},O=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},q=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=O((function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}));return function(r,s){var n;if(!(r in P))if(P[r]=!1,s&&(n=r.match(e)))P[r]=n[1]*I[n[2]];else try{P[r]=new Function("e",t(r))(I)}catch(e){}return P[r]}}(),j=function(e,t){return e.w?(e.cWidth=f.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},V=function(e){if(d){var r,s,n,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=(r=i.elements||f.qsa(i.context||t,i.reevaluate||i.reselect?f.sel:f.selShort)).length){for(f.setupRun(i),$=!0,s=0;n>s;s++)f.fillImg(r[s],i);f.teardownRun(i)}}};e.console&&console.warn,b in A||(b="src"),w["image/jpeg"]=!0,w["image/gif"]=!0,w["image/png"]=!0,w["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),f.ns=("pf"+(new Date).getTime()).substr(0,9),f.supSrcset="srcset"in A,f.supSizes="sizes"in A,f.supPicture=!!e.HTMLPictureElement,f.supSrcset&&f.supPicture&&!f.supSizes&&function(e){A.srcset="data:,a",e.src="data:,a",f.supSrcset=A.complete===e.complete,f.supPicture=f.supSrcset&&f.supPicture}(t.createElement("img")),f.supSrcset&&!f.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",r=t.createElement("img"),s=function(){2===r.width&&(f.supSizes=!0),o=f.supSrcset&&!f.supSizes,d=!0,setTimeout(V)};r.onload=s,r.onerror=s,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",r.src=e}():d=!0,f.selShort="picture>img,img[srcset]",f.sel=f.selShort,f.cfg=S,f.DPR=B||1,f.u=I,f.types=w,f.setSize=p,f.makeUrl=O((function(e){return U.href=e,U.href})),f.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},f.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?f.matchesMedia=function(e){return!e||matchMedia(e).matches}:f.matchesMedia=f.mMQ,f.matchesMedia.apply(this,arguments)},f.mMQ=function(e){return!e||q(e)},f.calcLength=function(e){var t=q(e,!0)||!1;return 0>t&&(t=!1),t},f.supportsType=function(e){return!e||w[e]},f.parseSize=O((function(e){var t=(e||"").match(C);return{media:t&&t[1],length:t&&t[2]}})),f.parseSet=function(e){return e.cands||(e.cands=function(e,t){function r(t){var r,s=t.exec(e.substring(d));return s?(r=s[0],d+=r.length,r):void 0}function n(){var e,r,s,n,i,u,o,l,f,d=!1,A={};for(n=0;n<a.length;n++)u=(i=a[n])[i.length-1],o=i.substring(0,i.length-1),l=parseInt(o,10),f=parseFloat(o),H.test(o)&&"w"===u?((e||r)&&(d=!0),0===l?d=!0:e=l):F.test(o)&&"x"===u?((e||r||s)&&(d=!0),0>f?d=!0:r=f):H.test(o)&&"h"===u?((s||r)&&(d=!0),0===l?d=!0:s=l):d=!0;d||(A.url=c,e&&(A.w=e),r&&(A.d=r),s&&(A.h=s),s||r||e||(A.d=1),1===A.d&&(t.has1x=!0),A.set=t,p.push(A))}function i(){for(r(k),u="",o="in descriptor";;){if(l=e.charAt(d),"in descriptor"===o)if(s(l))u&&(a.push(u),u="",o="after descriptor");else{if(","===l)return d+=1,u&&a.push(u),void n();if("("===l)u+=l,o="in parens";else{if(""===l)return u&&a.push(u),void n();u+=l}}else if("in parens"===o)if(")"===l)u+=l,o="in descriptor";else{if(""===l)return a.push(u),void n();u+=l}else if("after descriptor"===o)if(s(l));else{if(""===l)return void n();o="in descriptor",d-=1}d+=1}}for(var c,a,u,o,l,f=e.length,d=0,p=[];;){if(r(W),d>=f)return p;c=r(Q),a=[],","===c.slice(-1)?(c=c.replace(G,""),n()):i()}}(e.srcset,e)),e.cands},f.getEmValue=function(){var e;if(!u&&(e=t.body)){var r=t.createElement("div"),s=v.style.cssText,n=e.style.cssText;r.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",v.style.cssText=L,e.style.cssText=L,e.appendChild(r),u=r.offsetWidth,e.removeChild(r),u=parseFloat(u,10),v.style.cssText=s,e.style.cssText=n}return u||16},f.calcListLength=function(e){if(!(e in D)||S.uT){var t=f.calcLength(function(e){function t(e){return!!(o.test(e)&&parseFloat(e)>=0)||(!!l.test(e)||("0"===e||"-0"===e||"+0"===e))}var r,n,i,c,a,u,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=function(e){function t(){i&&(c.push(i),i="")}function r(){c[0]&&(a.push(c),c=[])}for(var n,i="",c=[],a=[],u=0,o=0,l=!1;;){if(""===(n=e.charAt(o)))return t(),r(),a;if(l){if("*"===n&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(s(n)){if(e.charAt(o-1)&&s(e.charAt(o-1))||!i){o+=1;continue}if(0===u){t(),o+=1;continue}n=" "}else if("("===n)u+=1;else if(")"===n)u-=1;else{if(","===n){t(),r(),o+=1;continue}if("/"===n&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}i+=n,o+=1}}}(e),i=n.length,r=0;i>r;r++)if(t(a=(c=n[r])[c.length-1])){if(u=a,c.pop(),0===c.length)return u;if(c=c.join(" "),f.matchesMedia(c))return u}return"100vw"}(e));D[e]=t||I.width}return D[e]},f.setRes=function(e){var t;if(e)for(var r=0,s=(t=f.parseSet(e)).length;s>r;r++)j(t[r],e.sizes);return t},f.setRes.res=j,f.applySetCandidate=function(e,t){if(e.length){var r,s,a,u,o,l,d,p,A,m=t[f.ns],h=f.DPR;if(l=m.curSrc||t[b],(d=m.curCan||c(t,l,e[0].set))&&d.set===e[0].set&&((A=z&&!t.complete&&d.res-.1>h)||(d.cached=!0,d.res>=h&&(o=d))),!o)for(e.sort(i),o=e[(u=e.length)-1],s=0;u>s;s++)if((r=e[s]).res>=h){o=e[a=s-1]&&(A||l!==f.makeUrl(r.url))&&n(e[a].res,r.res,h,e[a].cached)?e[a]:r;break}o&&(p=f.makeUrl(o.url),m.curSrc=p,m.curCan=o,p!==l&&f.setSrc(t,o),f.setSize(t))}},f.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},f.getSet=function(e){var t,r,s,n=!1,i=e[f.ns].sets;for(t=0;t<i.length&&!n;t++)if((r=i[t]).srcset&&f.matchesMedia(r.media)&&(s=f.supportsType(r.type))){"pending"===s&&(r=s),n=r;break}return n},f.parseSets=function(e,t,s){var n,i,c,u,l=t&&"PICTURE"===t.nodeName.toUpperCase(),d=e[f.ns];(d.src===r||s.src)&&(d.src=m.call(e,"src"),d.src?h.call(e,x,d.src):g.call(e,x)),(d.srcset===r||s.srcset||!f.supSrcset||e.srcset)&&(n=m.call(e,"srcset"),d.srcset=n,u=!0),d.sets=[],l&&(d.pic=!0,function(e,t){var r,s,n,i,c=e.getElementsByTagName("source");for(r=0,s=c.length;s>r;r++)(n=c[r])[f.ns]=!0,(i=n.getAttribute("srcset"))&&t.push({srcset:i,media:n.getAttribute("media"),type:n.getAttribute("type"),sizes:n.getAttribute("sizes")})}(t,d.sets)),d.srcset?(i={srcset:d.srcset,sizes:m.call(e,"sizes")},d.sets.push(i),(c=(o||d.src)&&T.test(d.srcset||""))||!d.src||a(d.src,i)||i.has1x||(i.srcset+=", "+d.src,i.cands.push({url:d.src,d:1,set:i}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=r,d.supported=!(l||i&&!f.supSrcset||c&&!f.supSizes),u&&f.supSrcset&&!d.supported&&(n?(h.call(e,y,n),e.srcset=""):g.call(e,y)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!==f.makeUrl(d.src))&&(null===d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0},f.fillImg=function(e,t){var r,s=t.reselect||t.reevaluate;e[f.ns]||(e[f.ns]={}),r=e[f.ns],(s||r.evaled!==l)&&((!r.parsed||t.reevaluate)&&f.parseSets(e,e.parentNode,t),r.supported?r.evaled=l:function(e){var t,r=f.getSet(e),s=!1;"pending"!==r&&(s=l,r&&(t=f.setRes(r),f.applySetCandidate(t,e))),e[f.ns].evaled=s}(e))},f.setupRun=function(){(!$||M||B!==e.devicePixelRatio)&&(M=!1,B=e.devicePixelRatio,P={},D={},f.DPR=B||1,I.width=Math.max(e.innerWidth||0,v.clientWidth),I.height=Math.max(e.innerHeight||0,v.clientHeight),I.vw=I.width/100,I.vh=I.height/100,l=[I.height,I.width,B].join("-"),I.em=f.getEmValue(),I.rem=I.em)},f.supPicture?(V=p,f.fillImg=p):function(){var r,s=e.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var e=t.readyState||"";i=setTimeout(n,"loading"===e?200:999),t.body&&(f.fillImgs(),(r=r||s.test(e))&&clearTimeout(i))},i=setTimeout(n,t.body?9:99),c=v.clientHeight;N(e,"resize",function(e,t){var r,s,n=function(){var i=new Date-s;t>i?r=setTimeout(n,t-i):(r=null,e())};return function(){s=new Date,r||(r=setTimeout(n,t))}}((function(){M=Math.max(e.innerWidth||0,v.clientWidth)!==I.width||v.clientHeight!==c,c=v.clientHeight,M&&f.fillImgs()}),99)),N(t,"readystatechange",n)}(),f.picturefill=V,f.fillImgs=V,f.teardownRun=p,V._=f,e.picturefillCFG={pf:f,push:function(e){var t=e.shift();"function"==typeof f[t]?f[t].apply(f,e):(S[t]=e[0],$&&f.fillImgs({reselect:!0}))}};for(;R&&R.length;)e.picturefillCFG.push(R.shift());e.picturefill=V,"object"==typeof module&&"object"==typeof module.exports?module.exports=V:"function"==typeof define&&define.amd&&define("picturefill",(function(){return V})),f.supPicture||(w["image/webp"]=function(t,r){var s=new e.Image;return s.onerror=function(){w[t]=!1,V()},s.onload=function(){w[t]=1===s.width,V()},s.src=r,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),setListner=function(n,e,a){n&&n.addEventListener(e,a)};navMain.classList.remove("main-nav--nojs"),setListner(navToggle,"click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))}));for(var cartButtons=document.querySelectorAll(".catalog-item__button"),myModal=document.querySelector(".modal"),i=0;i<cartButtons.length;i++)setListner(cartButtons[i],"click",(function(n){n.preventDefault(),myModal.classList.add("modal__open"),myModal.classList.contains("modal__open")&&window.addEventListener("click",(function(n){n.target===myModal&&myModal.classList.remove("modal__open")}))}));var indexButton=document.querySelector(".button--offer");setListner(indexButton,"click",(function(n){n.preventDefault(),myModal.classList.add("modal__open"),myModal.classList.contains("modal__open")&&window.addEventListener("click",(function(n){n.target===myModal&&myModal.classList.remove("modal__open")}))})),document.querySelector("#map")&&ymaps.ready((function(){var n=new ymaps.Map("map",{center:[59.938635,30.323118],zoom:16,controls:["zoomControl"]},{suppressMapOpenBlock:!0}),e=new ymaps.Placemark(n.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"Это красивая метка"},{iconLayout:"default#image",iconImageHref:"img/icon-map-pin.svg",iconImageSize:[67,100],iconImageOffset:[-30,-90]});n.geoObjects.add(e)}));