!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=c||d||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,a,o,u,f,l,c=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=a;return r=a=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),d?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=o}function O(){var e=y();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?p(n,o-(e-c)):n}(e))}function T(e){return f=void 0,s&&r?b(e):(r=a=void 0,u)}function h(){var e=y(),n=j(e);if(r=arguments,a=this,l=e,n){if(void 0===f)return S(l);if(m)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=x(t)||0,g(n)&&(d=!!n.leading,o=(m="maxWait"in n)?v(x(n.maxWait)||0,t):o,s="trailing"in n?!!n.trailing:s),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=a=f=void 0},h.flush=function(){return void 0===f?u:T(y())},h}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:r,maxWait:t,trailing:a})};var S={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input[type=email]"),textarea:document.querySelector(".feedback-form textarea"),button:document.querySelector(".feedback-form button")},j="feedback-form-state";S.email.addEventListener("input",e(t)(T,500)),S.textarea.addEventListener("input",e(t)(T,500)),S.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(j)}));var O={email:"",textarea:""};function T(e){var t=e.target;"email"===t.type?(S.email=t.value,O.email=S.email,localStorage.setItem(j,JSON.stringify(O))):"textarea"===t.type&&(S.textarea=t.value,O.textarea=S.textarea,localStorage.setItem(j,JSON.stringify(O))),function(){var e=localStorage.getItem(j),t=JSON.parse(e);O={email:t.email,textarea:t.textarea};S.email.value=O.email,S.textarea.value=O.textarea}()}}();
//# sourceMappingURL=03-feedback.0e5de6fa.js.map
