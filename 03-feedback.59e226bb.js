!function(){function e(e){return e&&e.__esModule?e.default:e}var t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,r){var n,a,i,u,f,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var r=n,o=a;return n=a=void 0,c=t,u=e.apply(o,r)}function S(e){return c=e,f=setTimeout(j,t),d?b(e):u}function O(e){var r=e-l;return void 0===l||r>=t||r<0||m&&e-c>=i}function j(){var e=y();if(O(e))return h(e);f=setTimeout(j,function(e){var r=t-(e-l);return m?p(r,i-(e-c)):r}(e))}function h(e){return f=void 0,s&&n?b(e):(n=a=void 0,u)}function T(){var e=y(),r=O(e);if(n=arguments,a=this,l=e,r){if(void 0===f)return S(l);if(m)return f=setTimeout(j,t),b(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=x(t)||0,g(r)&&(d=!!r.leading,i=(m="maxWait"in r)?v(x(r.maxWait)||0,t):i,s="trailing"in r?!!r.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,n=l=a=f=void 0},T.flush=function(){return void 0===f?u:h(y())},T}function g(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=g(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):i.test(t)?NaN:+t}t=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(o);return g(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),b(e,t,{leading:n,maxWait:t,trailing:a})};var S={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input[type=email]"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},O="feedback-form-state";S.email.addEventListener("input",e(t)(h,500)),S.textarea.addEventListener("input",e(t)(h,500)),S.form.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem(O),r=JSON.parse(t);localStorage.removeItem(O),e.currentTarget.reset(),r||(console.log("form not completed"),j.email="",j.textarea="");console.log(j)}));var j={email:"",textarea:""};function h(e){var t=e.target;"email"===t.type?(S.email=t.value,j.email=S.email,localStorage.setItem(O,JSON.stringify(j))):"textarea"===t.type&&(S.textarea=t.value,j.textarea=S.textarea,localStorage.setItem(O,JSON.stringify(j)))}!function(){try{var e=localStorage.getItem(O),t=JSON.parse(e);t&&(j.email=t.email,j.textarea=t.textarea,S.email.value=j.email,S.textarea.value=j.textarea)}catch(e){console.error("error")}}()}();
//# sourceMappingURL=03-feedback.59e226bb.js.map
