function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},i=t.parcelRequire46ec;function o(e){var t=!0,s=!1,n=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function l(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(s){s.metaKey||s.altKey||s.ctrlKey||(o(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(s&&(t=!0),l())}),!0),l(),e.addEventListener("focus",(function(e){var s,n,a;o(e.target)&&(t||(s=e.target,n=s.type,"INPUT"===(a=s.tagName)&&i[n]&&!s.readOnly||"TEXTAREA"===a&&!s.readOnly||s.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(s=!0,window.clearTimeout(n),n=window.setTimeout((function(){s=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire46ec=i),i.register("hbpw3",(function(e,t){var s=i("5SEZ9");const n=[...document[s._querySelectorAll]("[data-modal]")],o=[...document[s._querySelectorAll]("[data-modal-open]")],r=[...document[s._querySelectorAll]("[data-modal-close]")];o.length<=0||(o.forEach((e=>{e.addEventListener("click",(e=>{let t=e.target.dataset.modalOpen;n.forEach((e=>{e.dataset.modal===t&&e.show()}))}))})),r.length<=0||r.forEach((e=>{e.addEventListener("click",(e=>{(e=>{let t=e.closest("[data-modal]");t[s._classList][s._add]("hide"),setTimeout((()=>{t[s._classList][s._remove]("hide"),n.forEach((e=>{e.close()}))}),600)})(e.target)}))})))})),i.register("5SEZ9",(function(t,s){e(t.exports,"_classList",(function(){return n})),e(t.exports,"_add",(function(){return i})),e(t.exports,"_remove",(function(){return o})),e(t.exports,"_toggle",(function(){return r})),e(t.exports,"_querySelectorAll",(function(){return a})),e(t.exports,"_querySelector",(function(){return l}));const n="classList",i="add",o="remove",r="toggle",a="querySelectorAll",l="querySelector"})),i.register("27t3j",(function(e,t){var s=i("5SEZ9");let n=[...document[s._querySelectorAll](".tabs__btn")],o=[...document[s._querySelectorAll](".tabs__panel")];if(!(n.length<=0))for(let e=0;e<n.length;e+=1)n[e].index=e,n[e].addEventListener("click",r);function r(){n.forEach((e=>e.classList.remove("tabs__btn--active"))),o.forEach((e=>e.classList.remove("tabs__panel--active"))),o[this.index].classList.add("tabs__panel--active"),this.classList.add("tabs__btn--active")}})),"undefined"!=typeof window&&"undefined"!=typeof document){var r;window.applyFocusVisiblePolyfill=o;try{r=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(r=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(r)}"undefined"!=typeof document&&o(document);var a=i("5SEZ9");const l=()=>{const e=document[a._querySelector](".header")?.offsetHeight;return document.documentElement.style.setProperty("--header-height",`${e}px`),e};window.addEventListener("resize",l),l(),i("5SEZ9");a=i("5SEZ9");const c=(e,t)=>{document[a._querySelector](e)?.[a._classList][a._add](t)},d=(e,t)=>{document[a._querySelector](e)?.[a._classList][a._remove](t)};let u,m,v=l();const h=()=>{u=window.scrollY,c(".header","scroll"),v<u&&u>m?(c(".header","hide"),c(".header","scroll")):m>u&&d(".header","hide"),u<v&&d(".header","scroll"),m=u};window.addEventListener("scroll",(e=>{h()})),h(),i("hbpw3"),i("27t3j");class g{open(e){const t=this.details[e],s=this.toggles[e],n=this.contents[e];if(this.settings.one_visible)for(let t=0;t<this.toggles.length;t++)e!==t&&this.close(t);t.classList.remove("is-closing");const i=s.clientHeight;t.setAttribute("open",!0);const o=n.clientHeight;t.removeAttribute("open"),t.style.height=i+o+"px",t.setAttribute("open",!0)}close(e){const t=this.details[e],s=this.toggles[e];t.classList.add("is-closing");const n=s.clientHeight;t.style.height=n+"px",setTimeout((()=>{t.classList.contains("is-closing")&&t.removeAttribute("open"),t.classList.remove("is-closing")}),this.settings.speed)}constructor(e,t){this.group=e,this.details=this.group.getElementsByClassName("accordion__box"),this.toggles=this.group.getElementsByClassName("accordion__summary"),this.contents=this.group.getElementsByClassName("accordion__content"),this.settings=Object.assign({speed:300,one_visible:!1},t);for(let e=0;e<this.details.length;e++){const t=this.details[e],s=this.toggles[e],n=this.contents[e];t.style.transitionDuration=this.settings.speed+"ms",t.hasAttribute("open")?t.style.height=s.clientHeight+n.clientHeight+"px":t.style.height=s.clientHeight+"px"}this.group.addEventListener("click",(e=>{if(e.target.classList.contains("accordion__summary")){e.preventDefault();let t=0;for(let s=0;s<this.toggles.length;s++)if(this.toggles[s]===e.target){t=s;break}e.target.parentNode.hasAttribute("open")?this.close(t):this.open(t)}}))}}(()=>{const e=document.getElementsByClassName("accordion__item");for(let t=0;t<e.length;t++){new g(e[t],{speed:500,one_visible:!0})}})();let p=((e,t=250)=>{let s=!1,n=null,i=null;return function o(...r){if(s)return n=r,void(i=this);e.apply(this,r),s=!0,setTimeout((()=>{s=!1,i&&(o.apply(i,n),i=null,n=null)}),t)}})((()=>{let e=.01*window.innerHeight;document.querySelector(":root").style.setProperty("--vh",`${e}px`)}));p(),window.addEventListener("resize",p),$("select.form__input").selectric(),$(".tabs-select select").selectric(),$(".lang").selectric({disableOnMobile:!1,nativeOnMobile:!1,optionsItemBuilder:function(e,t,s){$(".selectric-items").removeAttr("style");var n=e.value.toLowerCase(),i=n.toLowerCase();return"zh-TW"==n?i="cn":"yi"==n?i="in":"ja"==n?i="jp":"ar"==n?i="ae":"vi"==n&&(i="vn"),t.val().length?'<a class="selectric-link" href="#"><img class="selectric-flag" src="./icons/'+i+'.svg" alt=""><span>'+e.text+"</span></a>":e.text},labelBuilder:function(e){var t=e.value.toLowerCase(),s=t.toLowerCase();return"zh-TW"==t?s="cn":"yi"==t?s="in":"ja"==t?s="jp":"ar"==t?s="ae":"vi"==t&&(s="vn"),'<img class="selectric-flag" src="./icons/'+s+'.svg" alt=""><span>'+e.text+"</span>"},onOpen:function(){$(".selectric-items").removeAttr("style").addClass("item-active")},onClose:function(){$(".selectric-items").removeClass("item-active")}}),$(".charts").slick({slidesToShow:3,slidesToScroll:1,infinite:!0,variableWidth:!0,autoplay:!0,arrows:!1,dots:!1,responsive:[{breakpoint:476,settings:{slidesToShow:2,variableWidth:!1}},{breakpoint:576,settings:{slidesToShow:3,variableWidth:!1}}]}),$(".news__list").slick({slidesToScroll:1,infinite:!0,draggable:!0,arrows:!1,dots:!0,variableWidth:!0,adaptiveHeight:!0,centerMode:!1,responsive:[{breakpoint:768,settings:{centerMode:!0,slidesToShow:2}},{breakpoint:476,settings:{slidesToShow:1}}]});
//# sourceMappingURL=about.718e22a2.js.map
