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
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/menu */ \"./scripts/menu.js\");\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/field */ \"./scripts/field.js\");\n/* harmony import */ var _scripts_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_field__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/field.js":
/*!**************************!*\
  !*** ./scripts/field.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menu = document.querySelector('.tic-tac-toe__menu');\nvar buttonStart = document.querySelector('.tic-tac-toe__button-start');\nvar selectStyle = document.querySelector('.tic-tac-toe__select_type_style');\nvar selectMode = document.querySelector('.tic-tac-toe__select_type_mode');\nvar field = document.querySelector('.tic-tac-toe__field');\nvar cells = document.querySelectorAll('.tic-tac-toe__cell');\nvar cellsArr = Array.prototype.slice.call(cells);\nvar buttonRestart = document.querySelector('.tic-tac-toe__button-restart');\nvar style = 'classic';\nvar mode = '';\nvar resultArr = [];\nvar arrActive = [];\nvar counter = 0;\nvar computerCell = 0;\nvar itСontinues = true;\nbuttonStart.addEventListener('click', startGame);\nbuttonRestart.addEventListener('click', restartGame);\nselectStyle.addEventListener('change', addStyle);\nselectMode.addEventListener('change', addMode);\n\nfunction addStyle() {\n  if (selectStyle.value === 'Classic') {\n    style = 'classic';\n    field.classList.remove('tic-tac-toe__field_style_modern');\n    cellsArr.forEach(function (someCell) {\n      someCell.classList.remove('tic-tac-toe__cell_type_modern');\n    });\n  } else {\n    style = 'modern';\n    field.classList.add('tic-tac-toe__field_style_modern');\n    cellsArr.forEach(function (someCell) {\n      someCell.classList.add('tic-tac-toe__cell_type_modern');\n    });\n  }\n}\n\nfunction addMode() {\n  if (selectMode.value === 'User vs computer') {\n    field.addEventListener('click', addStepUser);\n  } else if (selectMode.value === 'Computer vs user') {\n    1;\n  } else {\n    field.addEventListener('click', addStep);\n  }\n}\n\nfunction startGame() {\n  addMode();\n  selectStyle.setAttribute('disabled', 'disabled');\n  selectMode.setAttribute('disabled', 'disabled');\n  menu.classList.add('tic-tac-toe__menu_type_desabled');\n  buttonStart.classList.add('tic-tac-toe__button-start_type_desabled');\n  selectStyle.classList.add('tic-tac-toe__select_type_desabled');\n  selectMode.classList.add('tic-tac-toe__select_type_desabled');\n  field.classList.remove('tic-tac-toe__field_type_desabled');\n}\n\nfunction addButtonRestart() {\n  field.removeEventListener('click', addStep);\n  field.removeEventListener('click', addStepUser);\n  buttonRestart.classList.add('tic-tac-toe__button-restart_type_active');\n  itСontinues = !itСontinues;\n}\n\nfunction addWin(winNumberItemArr) {\n  cellsArr.forEach(function (cell) {\n    cell.classList.remove('tic-tac-toe__cell_type_active');\n  });\n  winNumberItemArr.forEach(function (position) {\n    cellsArr[position].classList.add('tic-tac-toe__cell_type_win');\n  });\n  addButtonRestart();\n}\n\nfunction checksLocation(turn) {\n  cellsArr.forEach(function (someCell) {\n    if (someCell.classList.contains(\"tic-tac-toe__cell_style_\".concat(style, \"-\").concat(turn))) {\n      resultArr.push(1);\n    } else {\n      resultArr.push(0);\n    }\n  });\n  console.log('Вход в проверку ' + turn);\n  console.log(resultArr + turn);\n\n  if (resultArr[0] && resultArr[1] && resultArr[2]) {\n    var winNumberItemArr = [0, 1, 2];\n    addWin(winNumberItemArr);\n  }\n\n  ;\n\n  if (resultArr[3] && resultArr[4] && resultArr[5]) {\n    var _winNumberItemArr = [3, 4, 5];\n    addWin(_winNumberItemArr);\n  }\n\n  ;\n\n  if (resultArr[6] && resultArr[7] && resultArr[8]) {\n    var _winNumberItemArr2 = [6, 7, 8];\n    addWin(_winNumberItemArr2);\n  }\n\n  ;\n\n  if (resultArr[0] && resultArr[3] && resultArr[6]) {\n    var _winNumberItemArr3 = [0, 3, 6];\n    addWin(_winNumberItemArr3);\n  }\n\n  ;\n\n  if (resultArr[1] && resultArr[4] && resultArr[7]) {\n    var _winNumberItemArr4 = [1, 4, 7];\n    addWin(_winNumberItemArr4);\n  }\n\n  ;\n\n  if (resultArr[2] && resultArr[5] && resultArr[8]) {\n    var _winNumberItemArr5 = [2, 5, 8];\n    addWin(_winNumberItemArr5);\n  }\n\n  ;\n\n  if (resultArr[0] && resultArr[4] && resultArr[8]) {\n    var _winNumberItemArr6 = [0, 4, 8];\n    addWin(_winNumberItemArr6);\n  }\n\n  ;\n\n  if (resultArr[2] && resultArr[4] && resultArr[6]) {\n    var _winNumberItemArr7 = [2, 4, 6];\n    addWin(_winNumberItemArr7);\n  }\n\n  ;\n}\n\nfunction addStep(e) {\n  var cell = event.target;\n\n  if (cell != field && !cell.classList.contains('tic-tac-toe__cell_type_used')) {\n    counter++;\n    cell.classList.remove('tic-tac-toe__cell_type_active');\n    cell.classList.add('tic-tac-toe__cell_type_used');\n\n    if (counter % 2 == 0) {\n      cell.classList.add(\"tic-tac-toe__cell_style_\".concat(style, \"-o\"));\n      checksLocation('o');\n    } else {\n      cell.classList.add(\"tic-tac-toe__cell_style_\".concat(style, \"-x\"));\n      checksLocation('x');\n    }\n  }\n\n  resultArr.length = 0;\n\n  if (counter === 9) {\n    addButtonRestart();\n  }\n}\n\nfunction addStepUser(e) {\n  var cell = event.target;\n\n  if (cell != field && !cell.classList.contains('tic-tac-toe__cell_type_used')) {\n    counter++;\n    cell.classList.remove('tic-tac-toe__cell_type_active');\n    cell.classList.add('tic-tac-toe__cell_type_used');\n    cell.classList.add(\"tic-tac-toe__cell_style_\".concat(style, \"-x\"));\n    console.log('перед проверкой х' + counter);\n    checksLocation('x');\n    field.removeEventListener('click', addStepUser);\n    resultArr.length = 0;\n\n    if (counter === 9 && itСontinues === true) {\n      addButtonRestart();\n    }\n\n    console.log('перед автовызовом ' + counter);\n    console.log(itСontinues);\n\n    if (itСontinues) {\n      setTimeout(addAutoStep, 500);\n    }\n  }\n}\n\nfunction addAutoStep() {\n  var i = 0;\n  console.log('автовызов ' + counter);\n  arrActive.length = 0;\n  cellsArr.forEach(function (cell) {\n    i++;\n\n    if (cell.classList.contains('tic-tac-toe__cell_type_active')) {\n      arrActive.push(i);\n    }\n  });\n  console.log('перед генерацией' + counter);\n  console.log('массив активных ячеек ' + arrActive);\n  computerCell = Math.floor(Math.random() * (9 - counter) + 1);\n  console.log('счетчик ходов ' + counter);\n  console.log(9 - counter);\n  cellsArr[arrActive[computerCell - 1] - 1].classList.remove('tic-tac-toe__cell_type_active');\n  cellsArr[arrActive[computerCell - 1] - 1].classList.add('tic-tac-toe__cell_type_used');\n  cellsArr[arrActive[computerCell - 1] - 1].classList.add(\"tic-tac-toe__cell_style_\".concat(style, \"-o\"));\n  console.log('перед проверкой о' + counter);\n  checksLocation('o');\n\n  if (itСontinues) {\n    field.addEventListener('click', addStepUser);\n  }\n\n  resultArr.length = 0;\n  counter++;\n}\n\nfunction restartGame() {\n  cellsArr.forEach(function (cell) {\n    cell.removeAttribute('class');\n    cell.setAttribute('class', 'tic-tac-toe__cell tic-tac-toe__cell_type_active');\n  });\n  field.classList.add('tic-tac-toe__field_type_desabled');\n  buttonRestart.classList.remove('tic-tac-toe__button-restart_type_active');\n  counter = 0;\n  itСontinues = !itСontinues;\n  menu.classList.remove('tic-tac-toe__menu_type_desabled');\n  buttonStart.classList.remove('tic-tac-toe__button-start_type_desabled');\n  selectStyle.classList.remove('tic-tac-toe__select_type_desabled');\n  selectMode.classList.remove('tic-tac-toe__select_type_desabled');\n  selectStyle.removeAttribute('disabled');\n  selectMode.removeAttribute('disabled');\n  addStyle();\n}\n\n//# sourceURL=webpack:///./scripts/field.js?");

/***/ }),

/***/ "./scripts/menu.js":
/*!*************************!*\
  !*** ./scripts/menu.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./scripts/menu.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.scss?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });