(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["class-list"] = factory();
	else
		root["class-list"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Return the classList property of e, if it has one.
	 * Otherwise, return an object that simulates the DOMTokenList API for e.
	 * The returned object has contains(), add(), remove(), toggle() and toString()
	 * methods for testing and altering the set of classes of the element e.
	 * If the classList property is natively supported, the returned object is
	 * array-like and has length and array index properties. The simulated
	 * DOMTokenList is not array-like, but has a toArray() method that returns
	 * a true-array snapshot of the element's class names.
	 */
	
	// CSSClassList is a JavaScript class that simulates DOMTokenList
	function CSSClassList(e) {
	  this.e = e;
	}
	
	function classList(e) {
	  if (e.classList) {
	    return e.classList;
	  }
	
	  return new CSSClassList(e);
	}
	
	// Return true if e.className contains the class c, false otherwise
	CSSClassList.prototype.contains = function contains(c) {
	  // Check common cases first
	  var classes = this.e.className;
	
	  // Check that c is a valid class name
	  if (c.length === 0 || c.indexOf(' ') !== -1) {
	    throw new Error('Invalid class name: "' + c + '"');
	  }
	
	  if (!classes) {
	    return false; // e has no classes at all
	  }
	
	  if (classes === c) {
	    return true; // e has one class that matches exactly
	  }
	
	  // Otherwise, use a RegExp to search for c as a word by itself
	  // \b in a regular expression requires a match at a word boundary.
	  return classes.search('\\b' + c + '\\b') !== -1;
	};
	
	// Add c to the e.className if it is not already present
	CSSClassList.prototype.add = function add(c) {
	
	  var classes = this.e.className;
	  if (this.contains(c)) {
	    return; // Do nothing if already present
	  }
	
	  if (classes && classes[classes.length - 1] !== ' ') {
	    /*eslint no-param-reassign:0*/
	    c = ' ' + c; // Add a space if we need one
	  }
	
	  this.e.className += c; // Add c to the className
	};
	
	// Remove all occurrences of c from e.className
	CSSClassList.prototype.remove = function remove(c) {
	
	  // Remove all occurances of c as a word, plus any trailing space
	  var pattern = new RegExp('\\b' + c + '\\b\\s*', 'g');
	
	  // Make sure c is a valid class name
	  if (c.length === 0 || c.indexOf(' ') !== -1) {
	    throw new Error('Invalid class name: "' + c + '"');
	  }
	
	  this.e.className = this.e.className.replace(pattern, '');
	};
	
	// Add c to e.className if it is not already present and return true.
	// Otherwise, remove all occurrences of c from e.className and return false.
	CSSClassList.prototype.toggle = function toggle(c) {
	  if (this.contains(c)) {
	    // If e.className contains c
	    this.remove(c); // then remove it.
	    return false;
	  }
	
	  this.add(c); // add it.
	  return true;
	};
	
	// Return e.className itself
	CSSClassList.prototype.toString = function toString() {
	  return this.e.className;
	};
	
	// Return of the names in e.className
	CSSClassList.prototype.toArray = function toArray() {
	  return this.e.className.match(/\b\w+\b/g) || [];
	};
	
	exports.default = classList;
	
	//# sourceMappingURL=index.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map