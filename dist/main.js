/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return css; });\nfunction css(name) {\n\n    const cssString = `.${name} {\n        position: relative;\n        display: flex;\n        max-width: 700px;\n     } \n    \n      .${name} > li {\n             flex: 1;\n             border: 1px solid white;\n      }\n    \n       .${name} > li a {\n           color:black;\n           text-decoration: none;\n           padding: 5px;\n           display: block;\n           border:1px solid;\n           background-color:white;\n         \n       }\n    \n           .${name} li.has-sub > a:after {\n            content: \"►\";\n            float:right;\n    \n        } \n    \n    \n     .${name}  ul {\n         display: none;\n         margin-left: 0;\n         padding: 0;\n         width: 200px;\n         background-color: white;\n    \n         border: 1px solid;\n         position: absolute;\n        \n     }\n    \n      .${name}  li {\n        list-style: none;\n      }\n    \n      .${name}  li.has-sub {\n             position: relative\n      }\n    \n    \n    \n     .${name}  ul ul {\n         left: 100%;\n         top:0;\n     }\n    `\n\n    return cssString;\n}\n\n\n//# sourceURL=webpack:///./src/css.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\nwindow.simpleMenu = _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fn; });\n/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ \"./src/css.js\");\n\n\n /**\n * What does this class do.. lore  ipisu\n */\nclass SimpleDropdown {\n   \n    hideMenu() {\n        this.submenus.forEach(function(el) {\n            el.style.display = \"none\"\n        })\n        clearInterval(this.interVal)\n    }\n    \n    hasChild( element, name ) {\n        for(let i = 0; i < element.children.length; i++) {\n            if(element.children[i].nodeName === name) {\n                return element.children[i];\n                break;\n            }\n        }\n        return false;\n    }\n    \n    makeAllVisibleInPath(element) {\n    \n        this.submenus.forEach(function (el) {\n            if(el !== element) {\n                el.style.display = \"none\"\n            }\n        })  \n    \n        let ell = element;\n    \n        while(ell !== this.menu) {\n            ell.style.display = \"block\"\n            ell = ell.parentElement;\n            if(ell !== this.menu)  {\n                ell.style.display = \"block\"\n            }\n        }\n    }\n\n\n    initmenu(parent) {\n        const children = parent.children\n        \n            for(let i = 0; i < children.length; i++) {\n        \n                let ul = this.hasChild(children[i], \"UL\")\n                if(ul) {\n                    children[i].classList.add(\"has-sub\")\n                    this.submenus.push(ul)\n                    this.initmenu(ul)\n                }\n            }\n     }\n    \n\n         addListeners() {\n    \n            let that = this;\n       \n         \n             this.menu.addEventListener(\"mouseover\", e=> {\n                 let element = e.target;\n                 if(element.nodeName === \"A\") {\n                     element = element.parentElement\n                 }\n       \n             \n                 if(that.interVal) {\n                     clearInterval(that.interVal);\n                 }\n             \n               \n                 if(element.nodeName === \"LI\") {\n                     if(that.hasChild(element, \"UL\")) {\n                         element = that.hasChild(element, \"UL\");\n                     } \n                     that.makeAllVisibleInPath(element)   \n                 }\n             \n             \n             }, {useCapture:false});\n             \n             this.menu.addEventListener(\"mouseout\",  e => {\n                 window.out = true;\n             \n                 that.interVal = setInterval(this.hideMenu.bind(this), 100)\n             \n             \n             });\n         }\n\n    constructor(menuelement) {\n        this.submenus = []\n        this.menu = menuelement;\n        this.menucass = \"menu_simple_\" + Math.ceil((Math.random()*1000))\n        this.menu.classList.add(this.menucass)\n        this.initmenu(this.menu)\n        document.write(`<style type='text/css'>${Object(_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menucass )}</style>`);\n        this.addListeners();\n    }\n}\n\nfunction fn (el) {\n    return new SimpleDropdown(el)\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });