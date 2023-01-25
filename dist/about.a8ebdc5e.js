(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire46ec"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire46ec"] = parcelRequire;
}
parcelRequire.register("l13Ms", function(module, exports) {

var $40Bba = parcelRequire("40Bba");
const modalWindow = [
    ...document[0, $40Bba._querySelectorAll]("[data-modal]")
];
const modalWindowBtnOpen = [
    ...document[0, $40Bba._querySelectorAll]("[data-modal-open]")
];
const modalWindowBtnClose = [
    ...document[0, $40Bba._querySelectorAll]("[data-modal-close]")
];
const closeModalWindow = (btnToCloseModal)=>{
    let openModal = btnToCloseModal.closest("[data-modal]");
    openModal[0, $40Bba._classList][0, $40Bba._add]("hide");
    setTimeout(()=>{
        openModal[0, $40Bba._classList][0, $40Bba._remove]("hide");
        modalWindow.forEach((modal)=>{
            modal.close();
        });
    }, 600);
};
if (modalWindowBtnOpen.length <= 0) return;
modalWindowBtnOpen.forEach((modalBtn)=>{
    modalBtn.addEventListener("click", (e)=>{
        let modalOpenBtnName = e.target.dataset.modalOpen;
        modalWindow.forEach((modal)=>{
            if (modal.dataset.modal !== modalOpenBtnName) return;
            modal.show();
        });
    });
});
if (modalWindowBtnClose.length <= 0) return;
modalWindowBtnClose.forEach((closeModalBtn)=>{
    closeModalBtn.addEventListener("click", (e)=>{
        const closeModal = e.target;
        closeModalWindow(closeModal);
    });
});

});
parcelRequire.register("40Bba", function(module, exports) {

$parcel$export(module.exports, "_classList", function () { return $2eb40086c2a60ec9$export$5ccb867f293e3c4c; });
$parcel$export(module.exports, "_add", function () { return $2eb40086c2a60ec9$export$eb19ebbec1ff9510; });
$parcel$export(module.exports, "_remove", function () { return $2eb40086c2a60ec9$export$7be779bc7f76622c; });
$parcel$export(module.exports, "_toggle", function () { return $2eb40086c2a60ec9$export$4b515c6f72c0fb7e; });
$parcel$export(module.exports, "_querySelectorAll", function () { return $2eb40086c2a60ec9$export$7a240564ed1f29c7; });
$parcel$export(module.exports, "_querySelector", function () { return $2eb40086c2a60ec9$export$242934abc2863db9; });
const $2eb40086c2a60ec9$export$c6742064fd272eef = "document", $2eb40086c2a60ec9$export$5ccb867f293e3c4c = "classList", $2eb40086c2a60ec9$export$eb19ebbec1ff9510 = "add", $2eb40086c2a60ec9$export$7be779bc7f76622c = "remove", $2eb40086c2a60ec9$export$4b515c6f72c0fb7e = "toggle", $2eb40086c2a60ec9$export$7a240564ed1f29c7 = "querySelectorAll", $2eb40086c2a60ec9$export$242934abc2863db9 = "querySelector";

});


parcelRequire.register("iCICe", function(module, exports) {

var $40Bba = parcelRequire("40Bba");
let tabsBtn = [
    ...document[0, $40Bba._querySelectorAll](".tabs__btn")
];
let tabsContent = [
    ...document[0, $40Bba._querySelectorAll](".tabs__panel")
];
if (tabsBtn.length <= 0) return;
for(let i = 0; i < tabsBtn.length; i += 1){
    tabsBtn[i].index = i;
    tabsBtn[i].addEventListener("click", tabSwitcher);
}
function tabSwitcher() {
    tabsBtn.forEach((item)=>item.classList.remove("tabs__btn--active"));
    tabsContent.forEach((item)=>item.classList.remove("tabs__panel--active"));
    tabsContent[this.index].classList.add("tabs__panel--active");
    this.classList.add("tabs__btn--active");
}

});

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */ function $4f50619a1c07ce9e$var$applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesAllowlist = {
        text: true,
        search: true,
        url: true,
        tel: true,
        email: true,
        password: true,
        number: true,
        date: true,
        month: true,
        week: true,
        time: true,
        datetime: true,
        "datetime-local": true
    };
    /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */ function isValidFocusTarget(el) {
        if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) return true;
        return false;
    }
    /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */ function focusTriggersKeyboardModality(el) {
        var type = el.type;
        var tagName = el.tagName;
        if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) return true;
        if (tagName === "TEXTAREA" && !el.readOnly) return true;
        if (el.isContentEditable) return true;
        return false;
    }
    /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */ function addFocusVisibleClass(el) {
        if (el.classList.contains("focus-visible")) return;
        el.classList.add("focus-visible");
        el.setAttribute("data-focus-visible-added", "");
    }
    /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */ function removeFocusVisibleClass(el) {
        if (!el.hasAttribute("data-focus-visible-added")) return;
        el.classList.remove("focus-visible");
        el.removeAttribute("data-focus-visible-added");
    }
    /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */ function onKeyDown(e) {
        if (e.metaKey || e.altKey || e.ctrlKey) return;
        if (isValidFocusTarget(scope.activeElement)) addFocusVisibleClass(scope.activeElement);
        hadKeyboardEvent = true;
    }
    /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */ function onPointerDown(e) {
        hadKeyboardEvent = false;
    }
    /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */ function onFocus(e) {
        // Prevent IE from focusing the document or HTML element.
        if (!isValidFocusTarget(e.target)) return;
        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) addFocusVisibleClass(e.target);
    }
    /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */ function onBlur(e) {
        if (!isValidFocusTarget(e.target)) return;
        if (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) {
            // To detect a tab/window switch, we look for a blur event followed
            // rapidly by a visibility change.
            // If we don't see a visibility change within 100ms, it's probably a
            // regular focus change.
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
            }, 100);
            removeFocusVisibleClass(e.target);
        }
    }
    /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */ function onVisibilityChange(e) {
        if (document.visibilityState === "hidden") {
            // If the tab becomes active again, the browser will handle calling focus
            // on the element (Safari actually calls it twice).
            // If this tab change caused a blur on an element with focus-visible,
            // re-apply the class when the user switches back to the tab.
            if (hadFocusVisibleRecently) hadKeyboardEvent = true;
            addInitialPointerMoveListeners();
        }
    }
    /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */ function addInitialPointerMoveListeners() {
        document.addEventListener("mousemove", onInitialPointerMove);
        document.addEventListener("mousedown", onInitialPointerMove);
        document.addEventListener("mouseup", onInitialPointerMove);
        document.addEventListener("pointermove", onInitialPointerMove);
        document.addEventListener("pointerdown", onInitialPointerMove);
        document.addEventListener("pointerup", onInitialPointerMove);
        document.addEventListener("touchmove", onInitialPointerMove);
        document.addEventListener("touchstart", onInitialPointerMove);
        document.addEventListener("touchend", onInitialPointerMove);
    }
    function removeInitialPointerMoveListeners() {
        document.removeEventListener("mousemove", onInitialPointerMove);
        document.removeEventListener("mousedown", onInitialPointerMove);
        document.removeEventListener("mouseup", onInitialPointerMove);
        document.removeEventListener("pointermove", onInitialPointerMove);
        document.removeEventListener("pointerdown", onInitialPointerMove);
        document.removeEventListener("pointerup", onInitialPointerMove);
        document.removeEventListener("touchmove", onInitialPointerMove);
        document.removeEventListener("touchstart", onInitialPointerMove);
        document.removeEventListener("touchend", onInitialPointerMove);
    }
    /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */ function onInitialPointerMove(e) {
        // Work around a Safari quirk that fires a mousemove on <html> whenever the
        // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
        if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") return;
        hadKeyboardEvent = false;
        removeInitialPointerMoveListeners();
    }
    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("mousedown", onPointerDown, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("touchstart", onPointerDown, true);
    document.addEventListener("visibilitychange", onVisibilityChange, true);
    addInitialPointerMoveListeners();
    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener("focus", onFocus, true);
    scope.addEventListener("blur", onBlur, true);
    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute("data-js-focus-visible", "");
    else if (scope.nodeType === Node.DOCUMENT_NODE) {
        document.documentElement.classList.add("js-focus-visible");
        document.documentElement.setAttribute("data-js-focus-visible", "");
    }
}
// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = $4f50619a1c07ce9e$var$applyFocusVisiblePolyfill;
    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var $4f50619a1c07ce9e$var$event;
    try {
        $4f50619a1c07ce9e$var$event = new CustomEvent("focus-visible-polyfill-ready");
    } catch (error) {
        // IE11 does not support using CustomEvent as a constructor directly:
        $4f50619a1c07ce9e$var$event = document.createEvent("CustomEvent");
        $4f50619a1c07ce9e$var$event.initCustomEvent("focus-visible-polyfill-ready", false, false, {});
    }
    window.dispatchEvent($4f50619a1c07ce9e$var$event);
}
if (typeof document !== "undefined") // Apply the polyfill to the global document, so that no JavaScript
// coordination is required to use the polyfill in the top-level document:
$4f50619a1c07ce9e$var$applyFocusVisiblePolyfill(document);


/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/ /*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ /*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ function $4cfe9cc08074fd0e$var$isDomNode(x) {
    return typeof window.Node === "object" ? x instanceof window.Node : x !== null && typeof x === "object" && typeof x.nodeType === "number" && typeof x.nodeName === "string";
}
var $4cfe9cc08074fd0e$export$2e2bcd8739ae039 = $4cfe9cc08074fd0e$var$isDomNode;


/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ 
function $f9be0ec4eddf9ba3$var$isDomNodeList(x) {
    var prototypeToString = Object.prototype.toString.call(x);
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return typeof window.NodeList === "object" ? x instanceof window.NodeList : x !== null && typeof x === "object" && typeof x.length === "number" && regex.test(prototypeToString) && (x.length === 0 || (0, $4cfe9cc08074fd0e$export$2e2bcd8739ae039)(x[0]));
}
var $f9be0ec4eddf9ba3$export$2e2bcd8739ae039 = $f9be0ec4eddf9ba3$var$isDomNodeList;


function $00a34a966c4e6935$var$tealight(target, context) {
    if (context === void 0) context = document;
    if (target instanceof Array) return target.filter((0, $4cfe9cc08074fd0e$export$2e2bcd8739ae039));
    if ((0, $4cfe9cc08074fd0e$export$2e2bcd8739ae039)(target)) return [
        target
    ];
    if ((0, $f9be0ec4eddf9ba3$export$2e2bcd8739ae039)(target)) return Array.prototype.slice.call(target);
    if (typeof target === "string") try {
        var query = context.querySelectorAll(target);
        return Array.prototype.slice.call(query);
    } catch (err) {
        return [];
    }
    return [];
}
var $00a34a966c4e6935$export$2e2bcd8739ae039 = $00a34a966c4e6935$var$tealight;


/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/ /**
 * @module Rematrix
 */ /**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$d9468344d3651243(source) {
    if (source.constructor !== Array) throw new TypeError("Expected array.");
    if (source.length === 16) return source;
    if (source.length === 6) {
        var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
        matrix[0] = source[0];
        matrix[1] = source[1];
        matrix[4] = source[2];
        matrix[5] = source[3];
        matrix[12] = source[4];
        matrix[13] = source[5];
        return matrix;
    }
    throw new RangeError("Expected array with either 6 or 16 values.");
}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */ function $c7418fcfc39e1af7$export$f0954fd7d5368655() {
    var matrix = [];
    for(var i = 0; i < 16; i++)i % 5 == 0 ? matrix.push(1) : matrix.push(0);
    return matrix;
}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$70ae2c07e401031b(source) {
    var m = $c7418fcfc39e1af7$export$d9468344d3651243(source);
    var s0 = m[0] * m[5] - m[4] * m[1];
    var s1 = m[0] * m[6] - m[4] * m[2];
    var s2 = m[0] * m[7] - m[4] * m[3];
    var s3 = m[1] * m[6] - m[5] * m[2];
    var s4 = m[1] * m[7] - m[5] * m[3];
    var s5 = m[2] * m[7] - m[6] * m[3];
    var c5 = m[10] * m[15] - m[14] * m[11];
    var c4 = m[9] * m[15] - m[13] * m[11];
    var c3 = m[9] * m[14] - m[13] * m[10];
    var c2 = m[8] * m[15] - m[12] * m[11];
    var c1 = m[8] * m[14] - m[12] * m[10];
    var c0 = m[8] * m[13] - m[12] * m[9];
    var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);
    if (isNaN(determinant) || determinant === Infinity) throw new Error("Inverse determinant attempted to divide by zero.");
    return [
        (m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
        (-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
        (m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
        (-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,
        (-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
        (m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
        (-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
        (m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,
        (m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
        (-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
        (m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
        (-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,
        (-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
        (m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
        (-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
        (m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
    ];
}
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$2060d2db72cce88f(m, x) {
    var fm = $c7418fcfc39e1af7$export$d9468344d3651243(m);
    var fx = $c7418fcfc39e1af7$export$d9468344d3651243(x);
    var product = [];
    for(var i = 0; i < 4; i++){
        var row = [
            fm[i],
            fm[i + 4],
            fm[i + 8],
            fm[i + 12]
        ];
        for(var j = 0; j < 4; j++){
            var k = j * 4;
            var col = [
                fx[k],
                fx[k + 1],
                fx[k + 2],
                fx[k + 3]
            ];
            var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
            product[i + k] = result;
        }
    }
    return product;
}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$98e6a39c04603d36(source) {
    if (typeof source === "string") {
        var match = source.match(/matrix(3d)?\(([^)]+)\)/);
        if (match) {
            var raw = match[2].split(", ").map(parseFloat);
            return $c7418fcfc39e1af7$export$d9468344d3651243(raw);
        }
    }
    return $c7418fcfc39e1af7$export$f0954fd7d5368655();
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$bb628a54ab399bc9(angle) {
    return $c7418fcfc39e1af7$export$ea6eae3365de5b9c(angle);
}
/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$a59c8716592e09af(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[5] = matrix[10] = Math.cos(theta);
    matrix[6] = matrix[9] = Math.sin(theta);
    matrix[9] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$cf71e4d4ca4d1cfd(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[0] = matrix[10] = Math.cos(theta);
    matrix[2] = matrix[8] = Math.sin(theta);
    matrix[2] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$ea6eae3365de5b9c(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[0] = matrix[5] = Math.cos(theta);
    matrix[1] = matrix[4] = Math.sin(theta);
    matrix[4] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$dcdf75081b88279d(scalar, scalarY) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[0] = scalar;
    matrix[5] = typeof scalarY === "number" ? scalarY : scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$55295ade51f88202(scalar) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[0] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$2092e2a44ac13bb2(scalar) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[5] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$13034b1ece9569d5(scalar) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[10] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$dd2d5a892675faf1(angleX, angleY) {
    var thetaX = Math.PI / 180 * angleX;
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[4] = Math.tan(thetaX);
    if (angleY) {
        var thetaY = Math.PI / 180 * angleY;
        matrix[1] = Math.tan(thetaY);
    }
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$e446fc4c2803fd1b(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[4] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */ function $c7418fcfc39e1af7$export$1649e48e73861f36(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[1] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */ function $c7418fcfc39e1af7$export$f84e8e69fd4488a5(source) {
    return "matrix3d(" + $c7418fcfc39e1af7$export$d9468344d3651243(source).join(", ") + ")";
}
/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$d73ee8ef04f5226a(distanceX, distanceY) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[12] = distanceX;
    if (distanceY) matrix[13] = distanceY;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$5667f2d3f182f284(distance) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[12] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$a1f0f3245f0cf0a4(distance) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[13] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function $c7418fcfc39e1af7$export$6e43fd17fc519956(distance) {
    var matrix = $c7418fcfc39e1af7$export$f0954fd7d5368655();
    matrix[14] = distance;
    return matrix;
}


/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var $fdceacf8a2b16095$var$polyfill = function() {
    var clock = Date.now();
    return function(callback) {
        var currentTime = Date.now();
        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else setTimeout(function() {
            return $fdceacf8a2b16095$var$polyfill(callback);
        }, 0);
    };
}();
var $fdceacf8a2b16095$var$index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || $fdceacf8a2b16095$var$polyfill;
var $fdceacf8a2b16095$export$2e2bcd8739ae039 = $fdceacf8a2b16095$var$index;


var $c09468ba0256c94a$var$defaults = {
    delay: 0,
    distance: "0",
    duration: 600,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 0,
    opacity: 0,
    origin: "bottom",
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
};
function $c09468ba0256c94a$var$failure() {
    document.documentElement.classList.remove("sr");
    return {
        clean: function clean() {},
        destroy: function destroy() {},
        reveal: function reveal() {},
        sync: function sync() {},
        get noop () {
            return true;
        }
    };
}
function $c09468ba0256c94a$var$success() {
    document.documentElement.classList.add("sr");
    if (document.body) document.body.style.height = "100%";
    else document.addEventListener("DOMContentLoaded", function() {
        document.body.style.height = "100%";
    });
}
var $c09468ba0256c94a$var$mount = {
    success: $c09468ba0256c94a$var$success,
    failure: $c09468ba0256c94a$var$failure
};
function $c09468ba0256c94a$var$isObject(x) {
    return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === "[object Object]");
}
function $c09468ba0256c94a$var$each(collection, callback) {
    if ($c09468ba0256c94a$var$isObject(collection)) {
        var keys = Object.keys(collection);
        return keys.forEach(function(key) {
            return callback(collection[key], key, collection);
        });
    }
    if (collection instanceof Array) return collection.forEach(function(item, i) {
        return callback(item, i, collection);
    });
    throw new TypeError("Expected either an array or object literal.");
}
function $c09468ba0256c94a$var$logger(message) {
    var details = [], len = arguments.length - 1;
    while(len-- > 0)details[len] = arguments[len + 1];
    if (this.constructor.debug && console) {
        var report = "%cScrollReveal: " + message;
        details.forEach(function(detail) {
            return report += "\n — " + detail;
        });
        console.log(report, "color: #ea654b;"); // eslint-disable-line no-console
    }
}
function $c09468ba0256c94a$var$rinse() {
    var this$1 = this;
    var struct = function() {
        return {
            active: [],
            stale: []
        };
    };
    var elementIds = struct();
    var sequenceIds = struct();
    var containerIds = struct();
    /**
	 * Take stock of active element IDs.
	 */ try {
        $c09468ba0256c94a$var$each((0, $00a34a966c4e6935$export$2e2bcd8739ae039)("[data-sr-id]"), function(node) {
            var id = parseInt(node.getAttribute("data-sr-id"));
            elementIds.active.push(id);
        });
    } catch (e) {
        throw e;
    }
    /**
	 * Destroy stale elements.
	 */ $c09468ba0256c94a$var$each(this.store.elements, function(element) {
        if (elementIds.active.indexOf(element.id) === -1) elementIds.stale.push(element.id);
    });
    $c09468ba0256c94a$var$each(elementIds.stale, function(staleId) {
        return delete this$1.store.elements[staleId];
    });
    /**
	 * Take stock of active container and sequence IDs.
	 */ $c09468ba0256c94a$var$each(this.store.elements, function(element) {
        if (containerIds.active.indexOf(element.containerId) === -1) containerIds.active.push(element.containerId);
        if (element.hasOwnProperty("sequence")) {
            if (sequenceIds.active.indexOf(element.sequence.id) === -1) sequenceIds.active.push(element.sequence.id);
        }
    });
    /**
	 * Destroy stale containers.
	 */ $c09468ba0256c94a$var$each(this.store.containers, function(container) {
        if (containerIds.active.indexOf(container.id) === -1) containerIds.stale.push(container.id);
    });
    $c09468ba0256c94a$var$each(containerIds.stale, function(staleId) {
        var stale = this$1.store.containers[staleId].node;
        stale.removeEventListener("scroll", this$1.delegate);
        stale.removeEventListener("resize", this$1.delegate);
        delete this$1.store.containers[staleId];
    });
    /**
	 * Destroy stale sequences.
	 */ $c09468ba0256c94a$var$each(this.store.sequences, function(sequence) {
        if (sequenceIds.active.indexOf(sequence.id) === -1) sequenceIds.stale.push(sequence.id);
    });
    $c09468ba0256c94a$var$each(sequenceIds.stale, function(staleId) {
        return delete this$1.store.sequences[staleId];
    });
}
var $c09468ba0256c94a$var$getPrefixedCssProp = function() {
    var properties = {};
    var style = document.documentElement.style;
    function getPrefixedCssProperty(name, source) {
        if (source === void 0) source = style;
        if (name && typeof name === "string") {
            if (properties[name]) return properties[name];
            if (typeof source[name] === "string") return properties[name] = name;
            if (typeof source["-webkit-" + name] === "string") return properties[name] = "-webkit-" + name;
            throw new RangeError('Unable to find "' + name + '" style property.');
        }
        throw new TypeError("Expected a string.");
    }
    getPrefixedCssProperty.clearCache = function() {
        return properties = {};
    };
    return getPrefixedCssProperty;
}();
function $c09468ba0256c94a$var$style(element) {
    var computed = window.getComputedStyle(element.node);
    var position = computed.position;
    var config = element.config;
    /**
	 * Generate inline styles
	 */ var inline = {};
    var inlineStyle = element.node.getAttribute("style") || "";
    var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    inline.computed = inlineMatch ? inlineMatch.map(function(m) {
        return m.trim();
    }).join("; ") + ";" : "";
    inline.generated = inlineMatch.some(function(m) {
        return m.match(/visibility\s?:\s?visible/i);
    }) ? inline.computed : inlineMatch.concat([
        "visibility: visible"
    ]).map(function(m) {
        return m.trim();
    }).join("; ") + ";";
    /**
	 * Generate opacity styles
	 */ var computedOpacity = parseFloat(computed.opacity);
    var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
    var opacity = {
        computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : "",
        generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ""
    };
    /**
	 * Generate transformation styles
	 */ var transformations = [];
    if (parseFloat(config.distance)) {
        var axis = config.origin === "top" || config.origin === "bottom" ? "Y" : "X";
        /**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */ var distance = config.distance;
        if (config.origin === "top" || config.origin === "left") distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
        var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
        var value = ref[0];
        var unit = ref[1];
        switch(unit){
            case "em":
                distance = parseInt(computed.fontSize) * value;
                break;
            case "px":
                distance = value;
                break;
            case "%":
                /**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */ distance = axis === "Y" ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
                break;
            default:
                throw new RangeError("Unrecognized or missing distance unit.");
        }
        if (axis === "Y") transformations.push((0, $c7418fcfc39e1af7$export$a1f0f3245f0cf0a4)(distance));
        else transformations.push((0, $c7418fcfc39e1af7$export$5667f2d3f182f284)(distance));
    }
    if (config.rotate.x) transformations.push((0, $c7418fcfc39e1af7$export$a59c8716592e09af)(config.rotate.x));
    if (config.rotate.y) transformations.push((0, $c7418fcfc39e1af7$export$cf71e4d4ca4d1cfd)(config.rotate.y));
    if (config.rotate.z) transformations.push((0, $c7418fcfc39e1af7$export$ea6eae3365de5b9c)(config.rotate.z));
    if (config.scale !== 1) {
        if (config.scale === 0) /**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */ transformations.push((0, $c7418fcfc39e1af7$export$dcdf75081b88279d)(0.0002));
        else transformations.push((0, $c7418fcfc39e1af7$export$dcdf75081b88279d)(config.scale));
    }
    var transform = {};
    if (transformations.length) {
        transform.property = $c09468ba0256c94a$var$getPrefixedCssProp("transform");
        /**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */ transform.computed = {
            raw: computed[transform.property],
            matrix: (0, $c7418fcfc39e1af7$export$98e6a39c04603d36)(computed[transform.property])
        };
        transformations.unshift(transform.computed.matrix);
        var product = transformations.reduce((0, $c7418fcfc39e1af7$export$2060d2db72cce88f));
        transform.generated = {
            initial: transform.property + ": matrix3d(" + product.join(", ") + ");",
            final: transform.property + ": matrix3d(" + transform.computed.matrix.join(", ") + ");"
        };
    } else transform.generated = {
        initial: "",
        final: ""
    };
    /**
	 * Generate transition styles
	 */ var transition = {};
    if (opacity.generated || transform.generated.initial) {
        transition.property = $c09468ba0256c94a$var$getPrefixedCssProp("transition");
        transition.computed = computed[transition.property];
        transition.fragments = [];
        var delay = config.delay;
        var duration = config.duration;
        var easing = config.easing;
        if (opacity.generated) transition.fragments.push({
            delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
            instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
        });
        if (transform.generated.initial) transition.fragments.push({
            delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
            instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
        });
        /**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */ var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);
        if (hasCustomTransition) transition.fragments.unshift({
            delayed: transition.computed,
            instant: transition.computed
        });
        var composed = transition.fragments.reduce(function(composition, fragment, i) {
            composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
            composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
            return composition;
        }, {
            delayed: "",
            instant: ""
        });
        transition.generated = {
            delayed: transition.property + ": " + composed.delayed + ";",
            instant: transition.property + ": " + composed.instant + ";"
        };
    } else transition.generated = {
        delayed: "",
        instant: ""
    };
    return {
        inline: inline,
        opacity: opacity,
        position: position,
        transform: transform,
        transition: transition
    };
}
/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */ function $c09468ba0256c94a$var$applyStyle(el, declaration) {
    declaration.split(";").forEach(function(pair) {
        var ref = pair.split(":");
        var property = ref[0];
        var value = ref.slice(1);
        if (property && value) el.style[property.trim()] = value.join(":");
    });
}
function $c09468ba0256c94a$var$clean(target) {
    var this$1 = this;
    var dirty;
    try {
        $c09468ba0256c94a$var$each((0, $00a34a966c4e6935$export$2e2bcd8739ae039)(target), function(node) {
            var id = node.getAttribute("data-sr-id");
            if (id !== null) {
                dirty = true;
                var element = this$1.store.elements[id];
                if (element.callbackTimer) window.clearTimeout(element.callbackTimer.clock);
                $c09468ba0256c94a$var$applyStyle(element.node, element.styles.inline.generated);
                node.removeAttribute("data-sr-id");
                delete this$1.store.elements[id];
            }
        });
    } catch (e) {
        return $c09468ba0256c94a$var$logger.call(this, "Clean failed.", e.message);
    }
    if (dirty) try {
        $c09468ba0256c94a$var$rinse.call(this);
    } catch (e1) {
        return $c09468ba0256c94a$var$logger.call(this, "Clean failed.", e1.message);
    }
}
function $c09468ba0256c94a$var$destroy() {
    var this$1 = this;
    /**
	 * Remove all generated styles and element ids
	 */ $c09468ba0256c94a$var$each(this.store.elements, function(element) {
        $c09468ba0256c94a$var$applyStyle(element.node, element.styles.inline.generated);
        element.node.removeAttribute("data-sr-id");
    });
    /**
	 * Remove all event listeners.
	 */ $c09468ba0256c94a$var$each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.removeEventListener("scroll", this$1.delegate);
        target.removeEventListener("resize", this$1.delegate);
    });
    /**
	 * Clear all data from the store
	 */ this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
}
function $c09468ba0256c94a$var$deepAssign(target) {
    var sources = [], len = arguments.length - 1;
    while(len-- > 0)sources[len] = arguments[len + 1];
    if ($c09468ba0256c94a$var$isObject(target)) {
        $c09468ba0256c94a$var$each(sources, function(source) {
            $c09468ba0256c94a$var$each(source, function(data, key) {
                if ($c09468ba0256c94a$var$isObject(data)) {
                    if (!target[key] || !$c09468ba0256c94a$var$isObject(target[key])) target[key] = {};
                    $c09468ba0256c94a$var$deepAssign(target[key], data);
                } else target[key] = data;
            });
        });
        return target;
    } else throw new TypeError("Target must be an object literal.");
}
function $c09468ba0256c94a$var$isMobile(agent) {
    if (agent === void 0) agent = navigator.userAgent;
    return /Android|iPhone|iPad|iPod/i.test(agent);
}
var $c09468ba0256c94a$var$nextUniqueId = function() {
    var uid = 0;
    return function() {
        return uid++;
    };
}();
function $c09468ba0256c94a$var$initialize() {
    var this$1 = this;
    $c09468ba0256c94a$var$rinse.call(this);
    $c09468ba0256c94a$var$each(this.store.elements, function(element) {
        var styles = [
            element.styles.inline.generated
        ];
        if (element.visible) {
            styles.push(element.styles.opacity.computed);
            styles.push(element.styles.transform.generated.final);
            element.revealed = true;
        } else {
            styles.push(element.styles.opacity.generated);
            styles.push(element.styles.transform.generated.initial);
            element.revealed = false;
        }
        $c09468ba0256c94a$var$applyStyle(element.node, styles.filter(function(s) {
            return s !== "";
        }).join(" "));
    });
    $c09468ba0256c94a$var$each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.addEventListener("scroll", this$1.delegate);
        target.addEventListener("resize", this$1.delegate);
    });
    /**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */ this.delegate();
    /**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */ this.initTimeout = null;
}
function $c09468ba0256c94a$var$animate(element, force) {
    if (force === void 0) force = {};
    var pristine = force.pristine || this.pristine;
    var delayed = element.config.useDelay === "always" || element.config.useDelay === "onload" && pristine || element.config.useDelay === "once" && !element.seen;
    var shouldReveal = element.visible && !element.revealed;
    var shouldReset = !element.visible && element.revealed && element.config.reset;
    if (force.reveal || shouldReveal) return $c09468ba0256c94a$var$triggerReveal.call(this, element, delayed);
    if (force.reset || shouldReset) return $c09468ba0256c94a$var$triggerReset.call(this, element);
}
function $c09468ba0256c94a$var$triggerReveal(element, delayed) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.computed,
        element.styles.transform.generated.final
    ];
    if (delayed) styles.push(element.styles.transition.generated.delayed);
    else styles.push(element.styles.transition.generated.instant);
    element.revealed = element.seen = true;
    $c09468ba0256c94a$var$applyStyle(element.node, styles.filter(function(s) {
        return s !== "";
    }).join(" "));
    $c09468ba0256c94a$var$registerCallbacks.call(this, element, delayed);
}
function $c09468ba0256c94a$var$triggerReset(element) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.generated,
        element.styles.transform.generated.initial,
        element.styles.transition.generated.instant
    ];
    element.revealed = false;
    $c09468ba0256c94a$var$applyStyle(element.node, styles.filter(function(s) {
        return s !== "";
    }).join(" "));
    $c09468ba0256c94a$var$registerCallbacks.call(this, element);
}
function $c09468ba0256c94a$var$registerCallbacks(element, isDelayed) {
    var this$1 = this;
    var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
    var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
    var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
    var elapsed = 0;
    if (element.callbackTimer) {
        elapsed = Date.now() - element.callbackTimer.start;
        window.clearTimeout(element.callbackTimer.clock);
    }
    beforeCallback(element.node);
    element.callbackTimer = {
        start: Date.now(),
        clock: window.setTimeout(function() {
            afterCallback(element.node);
            element.callbackTimer = null;
            if (element.revealed && !element.config.reset && element.config.cleanup) $c09468ba0256c94a$var$clean.call(this$1, element.node);
        }, duration - elapsed)
    };
}
function $c09468ba0256c94a$var$sequence(element, pristine) {
    if (pristine === void 0) pristine = this.pristine;
    /**
	 * We first check if the element should reset.
	 */ if (!element.visible && element.revealed && element.config.reset) return $c09468ba0256c94a$var$animate.call(this, element, {
        reset: true
    });
    var seq = this.store.sequences[element.sequence.id];
    var i = element.sequence.index;
    if (seq) {
        var visible = new $c09468ba0256c94a$var$SequenceModel(seq, "visible", this.store);
        var revealed = new $c09468ba0256c94a$var$SequenceModel(seq, "revealed", this.store);
        seq.models = {
            visible: visible,
            revealed: revealed
        };
        /**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */ if (!revealed.body.length) {
            var nextId = seq.members[visible.body[0]];
            var nextElement = this.store.elements[nextId];
            if (nextElement) {
                $c09468ba0256c94a$var$cue.call(this, seq, visible.body[0], -1, pristine);
                $c09468ba0256c94a$var$cue.call(this, seq, visible.body[0], 1, pristine);
                return $c09468ba0256c94a$var$animate.call(this, nextElement, {
                    reveal: true,
                    pristine: pristine
                });
            }
        }
        /**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */ if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
            $c09468ba0256c94a$var$cue.call(this, seq, i, -1, pristine);
            return $c09468ba0256c94a$var$animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
        if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
            $c09468ba0256c94a$var$cue.call(this, seq, i, 1, pristine);
            return $c09468ba0256c94a$var$animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
    }
}
function $c09468ba0256c94a$var$Sequence(interval) {
    var i = Math.abs(interval);
    if (!isNaN(i)) {
        this.id = $c09468ba0256c94a$var$nextUniqueId();
        this.interval = Math.max(i, 16);
        this.members = [];
        this.models = {};
        this.blocked = {
            head: false,
            foot: false
        };
    } else throw new RangeError("Invalid sequence interval.");
}
function $c09468ba0256c94a$var$SequenceModel(seq, prop, store) {
    var this$1 = this;
    this.head = [];
    this.body = [];
    this.foot = [];
    $c09468ba0256c94a$var$each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && element[prop]) this$1.body.push(index);
    });
    if (this.body.length) $c09468ba0256c94a$var$each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && !element[prop]) {
            if (index < this$1.body[0]) this$1.head.push(index);
            else this$1.foot.push(index);
        }
    });
}
function $c09468ba0256c94a$var$cue(seq, i, direction, pristine) {
    var this$1 = this;
    var blocked = [
        "head",
        null,
        "foot"
    ][1 + direction];
    var nextId = seq.members[i + direction];
    var nextElement = this.store.elements[nextId];
    seq.blocked[blocked] = true;
    setTimeout(function() {
        seq.blocked[blocked] = false;
        if (nextElement) $c09468ba0256c94a$var$sequence.call(this$1, nextElement, pristine);
    }, seq.interval);
}
function $c09468ba0256c94a$var$reveal(target, options, syncing) {
    var this$1 = this;
    if (options === void 0) options = {};
    if (syncing === void 0) syncing = false;
    var containerBuffer = [];
    var sequence$$1;
    var interval = options.interval || $c09468ba0256c94a$var$defaults.interval;
    try {
        if (interval) sequence$$1 = new $c09468ba0256c94a$var$Sequence(interval);
        var nodes = (0, $00a34a966c4e6935$export$2e2bcd8739ae039)(target);
        if (!nodes.length) throw new Error("Invalid reveal target.");
        var elements = nodes.reduce(function(elementBuffer, elementNode) {
            var element = {};
            var existingId = elementNode.getAttribute("data-sr-id");
            if (existingId) {
                $c09468ba0256c94a$var$deepAssign(element, this$1.store.elements[existingId]);
                /**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */ $c09468ba0256c94a$var$applyStyle(element.node, element.styles.inline.computed);
            } else {
                element.id = $c09468ba0256c94a$var$nextUniqueId();
                element.node = elementNode;
                element.seen = false;
                element.revealed = false;
                element.visible = false;
            }
            var config = $c09468ba0256c94a$var$deepAssign({}, element.config || this$1.defaults, options);
            if (!config.mobile && $c09468ba0256c94a$var$isMobile() || !config.desktop && !$c09468ba0256c94a$var$isMobile()) {
                if (existingId) $c09468ba0256c94a$var$clean.call(this$1, element);
                return elementBuffer // skip elements that are disabled
                ;
            }
            var containerNode = (0, $00a34a966c4e6935$export$2e2bcd8739ae039)(config.container)[0];
            if (!containerNode) throw new Error("Invalid container.");
            if (!containerNode.contains(elementNode)) return elementBuffer // skip elements found outside the container
            ;
            var containerId;
            containerId = $c09468ba0256c94a$var$getContainerId(containerNode, containerBuffer, this$1.store.containers);
            if (containerId === null) {
                containerId = $c09468ba0256c94a$var$nextUniqueId();
                containerBuffer.push({
                    id: containerId,
                    node: containerNode
                });
            }
            element.config = config;
            element.containerId = containerId;
            element.styles = $c09468ba0256c94a$var$style(element);
            if (sequence$$1) {
                element.sequence = {
                    id: sequence$$1.id,
                    index: sequence$$1.members.length
                };
                sequence$$1.members.push(element.id);
            }
            elementBuffer.push(element);
            return elementBuffer;
        }, []);
        /**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */ $c09468ba0256c94a$var$each(elements, function(element) {
            this$1.store.elements[element.id] = element;
            element.node.setAttribute("data-sr-id", element.id);
        });
    } catch (e) {
        return $c09468ba0256c94a$var$logger.call(this, "Reveal failed.", e.message);
    }
    /**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */ $c09468ba0256c94a$var$each(containerBuffer, function(container) {
        this$1.store.containers[container.id] = {
            id: container.id,
            node: container.node
        };
    });
    if (sequence$$1) this.store.sequences[sequence$$1.id] = sequence$$1;
    /**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */ if (syncing !== true) {
        this.store.history.push({
            target: target,
            options: options
        });
        /**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */ if (this.initTimeout) window.clearTimeout(this.initTimeout);
        this.initTimeout = window.setTimeout($c09468ba0256c94a$var$initialize.bind(this), 0);
    }
}
function $c09468ba0256c94a$var$getContainerId(node) {
    var collections = [], len = arguments.length - 1;
    while(len-- > 0)collections[len] = arguments[len + 1];
    var id = null;
    $c09468ba0256c94a$var$each(collections, function(collection) {
        $c09468ba0256c94a$var$each(collection, function(container) {
            if (id === null && container.node === node) id = container.id;
        });
    });
    return id;
}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */ function $c09468ba0256c94a$var$sync() {
    var this$1 = this;
    $c09468ba0256c94a$var$each(this.store.history, function(record) {
        $c09468ba0256c94a$var$reveal.call(this$1, record.target, record.options, true);
    });
    $c09468ba0256c94a$var$initialize.call(this);
}
var $c09468ba0256c94a$var$polyfill = function(x) {
    return (x > 0) - (x < 0) || +x;
};
var $c09468ba0256c94a$var$mathSign = Math.sign || $c09468ba0256c94a$var$polyfill;
function $c09468ba0256c94a$var$getGeometry(target, isContainer) {
    /**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */ var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
    var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
    var offsetTop = 0;
    var offsetLeft = 0;
    var node = target.node;
    do {
        if (!isNaN(node.offsetTop)) offsetTop += node.offsetTop;
        if (!isNaN(node.offsetLeft)) offsetLeft += node.offsetLeft;
        node = node.offsetParent;
    }while (node);
    return {
        bounds: {
            top: offsetTop,
            right: offsetLeft + width,
            bottom: offsetTop + height,
            left: offsetLeft
        },
        height: height,
        width: width
    };
}
function $c09468ba0256c94a$var$getScrolled(container) {
    var top, left;
    if (container.node === document.documentElement) {
        top = window.pageYOffset;
        left = window.pageXOffset;
    } else {
        top = container.node.scrollTop;
        left = container.node.scrollLeft;
    }
    return {
        top: top,
        left: left
    };
}
function $c09468ba0256c94a$var$isElementVisible(element) {
    if (element === void 0) element = {};
    var container = this.store.containers[element.containerId];
    if (!container) return;
    var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
    var viewOffset = element.config.viewOffset;
    var elementBounds = {
        top: element.geometry.bounds.top + element.geometry.height * viewFactor,
        right: element.geometry.bounds.right - element.geometry.width * viewFactor,
        bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
        left: element.geometry.bounds.left + element.geometry.width * viewFactor
    };
    var containerBounds = {
        top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
        right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
        bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
        left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
    };
    return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === "fixed";
}
function $c09468ba0256c94a$var$delegate(event, elements) {
    var this$1 = this;
    if (event === void 0) event = {
        type: "init"
    };
    if (elements === void 0) elements = this.store.elements;
    (0, $fdceacf8a2b16095$export$2e2bcd8739ae039)(function() {
        var stale = event.type === "init" || event.type === "resize";
        $c09468ba0256c94a$var$each(this$1.store.containers, function(container) {
            if (stale) container.geometry = $c09468ba0256c94a$var$getGeometry.call(this$1, container, true);
            var scroll = $c09468ba0256c94a$var$getScrolled.call(this$1, container);
            if (container.scroll) container.direction = {
                x: $c09468ba0256c94a$var$mathSign(scroll.left - container.scroll.left),
                y: $c09468ba0256c94a$var$mathSign(scroll.top - container.scroll.top)
            };
            container.scroll = scroll;
        });
        /**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */ $c09468ba0256c94a$var$each(elements, function(element) {
            if (stale || element.geometry === undefined) element.geometry = $c09468ba0256c94a$var$getGeometry.call(this$1, element);
            element.visible = $c09468ba0256c94a$var$isElementVisible.call(this$1, element);
        });
        $c09468ba0256c94a$var$each(elements, function(element) {
            if (element.sequence) $c09468ba0256c94a$var$sequence.call(this$1, element);
            else $c09468ba0256c94a$var$animate.call(this$1, element);
        });
        this$1.pristine = false;
    });
}
function $c09468ba0256c94a$var$isTransformSupported() {
    var style = document.documentElement.style;
    return "transform" in style || "WebkitTransform" in style;
}
function $c09468ba0256c94a$var$isTransitionSupported() {
    var style = document.documentElement.style;
    return "transition" in style || "WebkitTransition" in style;
}
var $c09468ba0256c94a$var$version = "4.0.9";
var $c09468ba0256c94a$var$boundDelegate;
var $c09468ba0256c94a$var$boundDestroy;
var $c09468ba0256c94a$var$boundReveal;
var $c09468ba0256c94a$var$boundClean;
var $c09468ba0256c94a$var$boundSync;
var $c09468ba0256c94a$var$config;
var $c09468ba0256c94a$var$debug;
var $c09468ba0256c94a$var$instance;
function $c09468ba0256c94a$var$ScrollReveal(options) {
    if (options === void 0) options = {};
    var invokedWithoutNew = typeof this === "undefined" || Object.getPrototypeOf(this) !== $c09468ba0256c94a$var$ScrollReveal.prototype;
    if (invokedWithoutNew) return new $c09468ba0256c94a$var$ScrollReveal(options);
    if (!$c09468ba0256c94a$var$ScrollReveal.isSupported()) {
        $c09468ba0256c94a$var$logger.call(this, "Instantiation failed.", "This browser is not supported.");
        return $c09468ba0256c94a$var$mount.failure();
    }
    var buffer;
    try {
        buffer = $c09468ba0256c94a$var$config ? $c09468ba0256c94a$var$deepAssign({}, $c09468ba0256c94a$var$config, options) : $c09468ba0256c94a$var$deepAssign({}, $c09468ba0256c94a$var$defaults, options);
    } catch (e) {
        $c09468ba0256c94a$var$logger.call(this, "Invalid configuration.", e.message);
        return $c09468ba0256c94a$var$mount.failure();
    }
    try {
        var container = (0, $00a34a966c4e6935$export$2e2bcd8739ae039)(buffer.container)[0];
        if (!container) throw new Error("Invalid container.");
    } catch (e1) {
        $c09468ba0256c94a$var$logger.call(this, e1.message);
        return $c09468ba0256c94a$var$mount.failure();
    }
    $c09468ba0256c94a$var$config = buffer;
    if (!$c09468ba0256c94a$var$config.mobile && $c09468ba0256c94a$var$isMobile() || !$c09468ba0256c94a$var$config.desktop && !$c09468ba0256c94a$var$isMobile()) {
        $c09468ba0256c94a$var$logger.call(this, "This device is disabled.", "desktop: " + $c09468ba0256c94a$var$config.desktop, "mobile: " + $c09468ba0256c94a$var$config.mobile);
        return $c09468ba0256c94a$var$mount.failure();
    }
    $c09468ba0256c94a$var$mount.success();
    this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
    this.pristine = true;
    $c09468ba0256c94a$var$boundDelegate = $c09468ba0256c94a$var$boundDelegate || $c09468ba0256c94a$var$delegate.bind(this);
    $c09468ba0256c94a$var$boundDestroy = $c09468ba0256c94a$var$boundDestroy || $c09468ba0256c94a$var$destroy.bind(this);
    $c09468ba0256c94a$var$boundReveal = $c09468ba0256c94a$var$boundReveal || $c09468ba0256c94a$var$reveal.bind(this);
    $c09468ba0256c94a$var$boundClean = $c09468ba0256c94a$var$boundClean || $c09468ba0256c94a$var$clean.bind(this);
    $c09468ba0256c94a$var$boundSync = $c09468ba0256c94a$var$boundSync || $c09468ba0256c94a$var$sync.bind(this);
    Object.defineProperty(this, "delegate", {
        get: function() {
            return $c09468ba0256c94a$var$boundDelegate;
        }
    });
    Object.defineProperty(this, "destroy", {
        get: function() {
            return $c09468ba0256c94a$var$boundDestroy;
        }
    });
    Object.defineProperty(this, "reveal", {
        get: function() {
            return $c09468ba0256c94a$var$boundReveal;
        }
    });
    Object.defineProperty(this, "clean", {
        get: function() {
            return $c09468ba0256c94a$var$boundClean;
        }
    });
    Object.defineProperty(this, "sync", {
        get: function() {
            return $c09468ba0256c94a$var$boundSync;
        }
    });
    Object.defineProperty(this, "defaults", {
        get: function() {
            return $c09468ba0256c94a$var$config;
        }
    });
    Object.defineProperty(this, "version", {
        get: function() {
            return $c09468ba0256c94a$var$version;
        }
    });
    Object.defineProperty(this, "noop", {
        get: function() {
            return false;
        }
    });
    return $c09468ba0256c94a$var$instance ? $c09468ba0256c94a$var$instance : $c09468ba0256c94a$var$instance = this;
}
$c09468ba0256c94a$var$ScrollReveal.isSupported = function() {
    return $c09468ba0256c94a$var$isTransformSupported() && $c09468ba0256c94a$var$isTransitionSupported();
};
Object.defineProperty($c09468ba0256c94a$var$ScrollReveal, "debug", {
    get: function() {
        return $c09468ba0256c94a$var$debug || false;
    },
    set: function(value) {
        return $c09468ba0256c94a$var$debug = typeof value === "boolean" ? value : $c09468ba0256c94a$var$debug;
    }
});
$c09468ba0256c94a$var$ScrollReveal();
var $c09468ba0256c94a$export$2e2bcd8739ae039 = $c09468ba0256c94a$var$ScrollReveal;


window.sr = (0, $c09468ba0256c94a$export$2e2bcd8739ae039)();



var $40Bba = parcelRequire("40Bba");
const $61b4e5ecd72168e5$export$98ba287114e9d0c3 = ()=>{
    const headerHeight = document[0, $40Bba._querySelector](".header")?.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    return headerHeight;
};
window.addEventListener("resize", $61b4e5ecd72168e5$export$98ba287114e9d0c3);
$61b4e5ecd72168e5$export$98ba287114e9d0c3();


parcelRequire("40Bba");

var $40Bba = parcelRequire("40Bba");
const $3b5ee66258cd79d2$export$6e6f8e21af33b231 = (item, className)=>{
    document[0, $40Bba._querySelector](item)?.[0, $40Bba._classList][0, $40Bba._add](className);
};
const $3b5ee66258cd79d2$export$21b4674b9a6e7161 = (item, className)=>{
    document[0, $40Bba._querySelector](item)?.[0, $40Bba._classList][0, $40Bba._remove](className);
};
const $3b5ee66258cd79d2$export$5401572fb47f69f8 = (item, className)=>{
    document[0, $40Bba._querySelector](item)?.[0, $40Bba._classList][0, $40Bba._toggle](className);
};



let $52d9ac04d2cdab40$var$lastHeaderPosition;
let $52d9ac04d2cdab40$var$newHeaderPosition;
let $52d9ac04d2cdab40$var$headerHeight = (0, $61b4e5ecd72168e5$export$98ba287114e9d0c3)();
const $52d9ac04d2cdab40$var$hideHeaderOnScroll = ()=>{
    $52d9ac04d2cdab40$var$lastHeaderPosition = window.scrollY;
    (0, $3b5ee66258cd79d2$export$6e6f8e21af33b231)(".header", "scroll");
    if ($52d9ac04d2cdab40$var$headerHeight < $52d9ac04d2cdab40$var$lastHeaderPosition && $52d9ac04d2cdab40$var$lastHeaderPosition > $52d9ac04d2cdab40$var$newHeaderPosition) {
        (0, $3b5ee66258cd79d2$export$6e6f8e21af33b231)(".header", "hide");
        (0, $3b5ee66258cd79d2$export$6e6f8e21af33b231)(".header", "scroll");
    } else if ($52d9ac04d2cdab40$var$newHeaderPosition > $52d9ac04d2cdab40$var$lastHeaderPosition) (0, $3b5ee66258cd79d2$export$21b4674b9a6e7161)(".header", "hide");
    if ($52d9ac04d2cdab40$var$lastHeaderPosition < $52d9ac04d2cdab40$var$headerHeight) (0, $3b5ee66258cd79d2$export$21b4674b9a6e7161)(".header", "scroll");
    $52d9ac04d2cdab40$var$newHeaderPosition = $52d9ac04d2cdab40$var$lastHeaderPosition;
};
window.addEventListener("scroll", (e)=>{
    $52d9ac04d2cdab40$var$hideHeaderOnScroll();
});
$52d9ac04d2cdab40$var$hideHeaderOnScroll();


parcelRequire("l13Ms");
parcelRequire("iCICe");
class $adb9425207bd967b$var$Details {
    open(i) {
        const detail = this.details[i];
        const toggle = this.toggles[i];
        const content = this.contents[i];
        // If applicable, hide all the other details first
        if (this.settings.one_visible) {
            for(let a = 0; a < this.toggles.length; a++)if (i !== a) this.close(a);
        }
        // Update class
        detail.classList.remove("is-closing");
        // Get height of toggle
        const toggle_height = toggle.clientHeight;
        // Momentarily show the contents just to get the height
        detail.setAttribute("open", true);
        const content_height = content.clientHeight;
        detail.removeAttribute("open");
        // Set the correct height and let CSS transition it
        detail.style.height = toggle_height + content_height + "px";
        // Finally set the open attr
        detail.setAttribute("open", true);
    }
    close(i) {
        const detail = this.details[i];
        const toggle = this.toggles[i];
        // Update class
        detail.classList.add("is-closing");
        // Get height of toggle
        const toggle_height = toggle.clientHeight;
        // Set the height so only the toggle is visible
        detail.style.height = toggle_height + "px";
        setTimeout(()=>{
            // Check if still closing
            if (detail.classList.contains("is-closing")) detail.removeAttribute("open");
            detail.classList.remove("is-closing");
        }, this.settings.speed);
    }
    constructor(el, settings){
        this.group = el;
        this.details = this.group.getElementsByClassName("accordion__box");
        this.toggles = this.group.getElementsByClassName("accordion__summary");
        this.contents = this.group.getElementsByClassName("accordion__content");
        // Set default settings if necessary
        this.settings = Object.assign({
            speed: 300,
            one_visible: false
        }, settings);
        // Setup inital positions
        for(let i = 0; i < this.details.length; i++){
            const detail = this.details[i];
            const toggle = this.toggles[i];
            const content = this.contents[i];
            // Set transition-duration to match JS setting
            detail.style.transitionDuration = this.settings.speed + "ms";
            // Set initial height to transition from
            if (!detail.hasAttribute("open")) detail.style.height = toggle.clientHeight + "px";
            else detail.style.height = toggle.clientHeight + content.clientHeight + "px";
        }
        // Setup click handler
        this.group.addEventListener("click", (e)=>{
            if (e.target.classList.contains("accordion__summary")) {
                e.preventDefault();
                let num = 0;
                for(let i = 0; i < this.toggles.length; i++)if (this.toggles[i] === e.target) {
                    num = i;
                    break;
                }
                if (!e.target.parentNode.hasAttribute("open")) this.open(num);
                else this.close(num);
            }
        });
    }
}
(()=>{
    const els = document.getElementsByClassName("accordion__item");
    for(let i = 0; i < els.length; i++){
        const details = new $adb9425207bd967b$var$Details(els[i], {
            speed: 500,
            one_visible: true
        });
    }
})();


const $44bb4fdd344713ce$export$de363e709c412c8a = (func, delay = 250)=>{
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;
    return function wrap(...args) {
        if (isThrottled) {
            savedArgs = args, savedThis = this;
            return;
        }
        func.apply(this, args);
        isThrottled = true;
        setTimeout(()=>{
            isThrottled = false;
            if (savedThis) {
                wrap.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, delay);
    };
};


const $3127bf736e84da51$var$fixFullheight = ()=>{
    let vh = window.innerHeight * 0.01;
    document.querySelector(":root").style.setProperty("--vh", `${vh}px`);
};
let $3127bf736e84da51$var$fixHeight = (0, $44bb4fdd344713ce$export$de363e709c412c8a)($3127bf736e84da51$var$fixFullheight);
$3127bf736e84da51$var$fixHeight();
window.addEventListener("resize", $3127bf736e84da51$var$fixHeight);





var $40Bba = parcelRequire("40Bba");

document[0, $40Bba._querySelector]("[data-burger]")?.addEventListener("click", (e)=>{
    (0, $3b5ee66258cd79d2$export$5401572fb47f69f8)(".page", "page--menu");
});
document[0, $40Bba._querySelector]("span.nav__link")?.addEventListener("click", (e)=>{
    e.target.classList.toggle("nav__link--hover");
});


$("select.form__input").select2({
    minimumResultsForSearch: -1,
    width: "100%"
});
$(".tabs-select select").select2({
    minimumResultsForSearch: -1,
    width: "100%"
});


const $5b76ff02b6ecc78a$var$setOption = (opt, container)=>{
    if (!opt.id) return opt.text.toUpperCase();
    let $opt = $(opt.element);
    $(container).addClass("lang-switch__option");
    let img = $opt.attr("data-image");
    if (!img) return opt.text;
    else return $('<span><img src="' + img + '" width="38" /><span> ' + opt.text + "</span> </span>");
};
const $5b76ff02b6ecc78a$var$langSwitcher = function() {
    $(".lang-switch").select2({
        minimumResultsForSearch: -1,
        width: "100%",
        templateResult: $5b76ff02b6ecc78a$var$setOption,
        templateSelection: $5b76ff02b6ecc78a$var$setOption
    });
    $(".lang-switch").on("change", (evt)=>{
        let options = evt.currentTarget.options;
        let index = evt.currentTarget.selectedIndex;
        let href = $(options[index]).data("href");
        if (href) window.location = href;
    });
};
$5b76ff02b6ecc78a$var$langSwitcher();


$(".charts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 476,
            settings: {
                slidesToShow: 2,
                variableWidth: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                variableWidth: false
            }
        }
    ]
});


$(".news__list").slick({
    slidesToScroll: 1,
    infinite: true,
    draggable: true,
    arrows: false,
    dots: true,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 476,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


sr.reveal(".header", {
    duration: 700,
    distance: "20px",
    easing: "ease",
    delay: "700",
    origin: "top",
    mobile: false
});
sr.reveal(".title--secondary,.wellcome__title, .footer__top,.contact__form,.sign__form ", {
    duration: 500,
    distance: "30px",
    easing: "ease",
    origin: "top",
    mobile: false
});
sr.reveal(".instruments__list > *, .get-started__picture,.investment > *", {
    duration: 700,
    distance: "100px",
    interval: 200,
    easing: "ease",
    origin: "left",
    mobile: false
});
sr.reveal(".hero__content > *, .start__steps > *, .news .slick-track > *, .get-started__content > *,.single__navigation > *,.contact__list > *, .social > *", {
    duration: 700,
    distance: "20px",
    easing: "ease",
    interval: 200,
    delay: "200",
    origin: "top",
    mobile: false
});
sr.reveal(".single__content >*:not(.investment,.articles,.classification,.single__list,.strengths), .articles> *,.classification>*,.single__list > *", {
    duration: 700,
    distance: "20px",
    easing: "ease",
    interval: 200,
    delay: "50",
    origin: "top",
    mobile: false
});
sr.reveal(".trade-with__list > *,.contact__map,.strengths__list >*", {
    duration: 800,
    easing: "ease",
    interval: 200,
    delay: "200",
    mobile: false
});
sr.reveal(".charts, .footer__bottom", {
    duration: 1000,
    distance: "20px",
    easing: "ease",
    delay: "800",
    origin: "bottom",
    mobile: false
});




if (null) null.accept();

})();
//# sourceMappingURL=about.a8ebdc5e.js.map
