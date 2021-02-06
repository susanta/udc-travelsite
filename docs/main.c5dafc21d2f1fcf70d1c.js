/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"1":"modal"}[chunkId]||chunkId) + "." + {"1":"1e65b2762e59beefa1e8"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([15,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./app/assets/styles/styles.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(5);

// CONCATENATED MODULE: ./app/assets/scripts/modules/MobileMenu.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.menuContent = document.querySelector('.site-header__menu-content');
    this.siteHeader = document.querySelector('.site-header');
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.menuIcon.addEventListener('click', function () {
        return _this.toggleTheMenu();
      });
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menuContent.classList.toggle('site-header__menu-content--is-visible');
      this.siteHeader.classList.toggle('site-header--is-expanded');
      this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ var modules_MobileMenu = (MobileMenu);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(1);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(0);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./app/assets/scripts/modules/RevealOnScroll.js
function RevealOnScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RevealOnScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RevealOnScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) RevealOnScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) RevealOnScroll_defineProperties(Constructor, staticProps); return Constructor; }




var RevealOnScroll_RevealOnScroll = /*#__PURE__*/function () {
  function RevealOnScroll(els, thresholdPercent) {
    RevealOnScroll_classCallCheck(this, RevealOnScroll);

    this.thresholdPercent = thresholdPercent;
    this.itemsToReveal = els;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle_default()(this.calCaller, 200).bind(this);
    this.events();
  }

  RevealOnScroll_createClass(RevealOnScroll, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener('scroll', this.scrollThrottle);
      window.addEventListener('resize', debounce_default()(function () {
        // console.log('Resize just ran');
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }, {
    key: "calCaller",
    value: function calCaller() {
      var _this2 = this;

      // console.log('Scroll function ran');
      this.itemsToReveal.forEach(function (el) {
        if (el.isRevealed == false) {
          _this2.calculateIfScrolledTo(el);
        }
      });
    }
  }, {
    key: "calculateIfScrolledTo",
    value: function calculateIfScrolledTo(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop) {
        // console.log(el.getBoundingClientRect().top);
        //   console.log('Element was calculated');
        var scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;

        if (scrollPercent < this.thresholdPercent) {
          el.classList.add('reveal-item--is-visible');
          el.isRevealed = true;

          if (el.isLastItem) {
            window.removeEventListener('scroll', this.scrollThrottle);
          }
        }
      }
    }
  }, {
    key: "hideInitially",
    value: function hideInitially() {
      this.itemsToReveal.forEach(function (el) {
        el.classList.add('reveal-item');
        el.isRevealed = false;
      });
      this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ var modules_RevealOnScroll = (RevealOnScroll_RevealOnScroll);
// CONCATENATED MODULE: ./app/assets/scripts/modules/StickyHeader.js
function StickyHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StickyHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StickyHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) StickyHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) StickyHeader_defineProperties(Constructor, staticProps); return Constructor; }




var StickyHeader_StickyHeader = /*#__PURE__*/function () {
  function StickyHeader() {
    StickyHeader_classCallCheck(this, StickyHeader);

    this.siteHeader = document.querySelector('.site-header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  StickyHeader_createClass(StickyHeader, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener('scroll', throttle_default()(function () {
        return _this.runOnScroll();
      }, 200));
      window.addEventListener('resize', debounce_default()(function () {
        // console.log('Resize just ran');
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }, {
    key: "runOnScroll",
    value: function runOnScroll() {
      var _this2 = this;

      this.determineScrollDirection();

      if (window.scrollY > 60) {
        this.siteHeader.classList.add('site-header--dark');
      } else {
        this.siteHeader.classList.remove('site-header--dark');
      }

      this.pageSections.forEach(function (el) {
        return _this2.calcSection(el);
      });
    }
  }, {
    key: "determineScrollDirection",
    value: function determineScrollDirection() {
      if (window.scrollY > this.previousScrollY) {
        this.scrollDirection = 'down';
      } else {
        this.scrollDirection = 'up';
      }

      this.previousScrollY = window.scrollY;
    } //   calcSection(el) {
    //     if (
    //       window.scrollY + this.browserHeight > el.offsetTop &&
    //       window.scrollY < el.offsetTop + el.offsetHeight
    //     ) {
    //       let scrollPercent =
    //         (el.getBoundingClientRect().y / this.browserHeight) * 100;
    //       if (
    //         (scrollPercent < 18 &&
    //           scrollPercent > -0.1 &&
    //           this.scrollDirection == 'down') ||
    //         (scrollPercent < 33 && this.scrollDirection == 'up')
    //       ) {
    //         let matchingLink = el.getAttribute('data-matching-link');
    //         document
    //           .querySelectorAll(`.primary-nav a:not(${matchingLink})`)
    //           .forEach((el) => el.classList.remove('is-current-link'));
    //         document.querySelector(matchingLink).classList.add('is-current-link');
    //       }
    //     }
    //   }

  }, {
    key: "calcSection",
    value: function calcSection(el) {
      if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
        var scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100;

        if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
          var matchingLink = el.getAttribute('data-matching-link');
          document.querySelectorAll(".primary-nav a:not(".concat(matchingLink, ")")).forEach(function (el) {
            return el.classList.remove('is-current-link');
          });
          document.querySelector(matchingLink).classList.add('is-current-link');
        } else if (scrollPercent > 38 && this.scrollDirection == 'up') {
          document.querySelector('#our-beginning-link').classList.remove('is-current-link');
        }
      }
    }
  }]);

  return StickyHeader;
}();

/* harmony default export */ var modules_StickyHeader = (StickyHeader_StickyHeader);
// CONCATENATED MODULE: ./app/assets/scripts/App.js




 // import Modal from './modules/Modal';
// new Modal();

new modules_StickyHeader();
new modules_RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new modules_RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
new modules_MobileMenu();
var modal;
document.querySelectorAll('.open-modal').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    if (typeof modal == 'undefined') {
      __webpack_require__.e(/* import() | modal */ 1).then(__webpack_require__.bind(null, 16)).then(function (x) {
        modal = new x["default"]();
        setTimeout(function () {
          return modal.openTheModal();
        }, 20);
      })["catch"](function () {
        return console.log('There was a problem');
      });
    } else {
      modal.openTheModal();
    }
  });
});

if (false) {}

/***/ })

/******/ });