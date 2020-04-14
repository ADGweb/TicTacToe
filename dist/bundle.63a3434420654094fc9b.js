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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./style/rules.css */ \"../node_modules/css-loader/dist/cjs.js!./style/rules.css\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/classic/x.jpg */ \"./img/classic/x.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./img/classic/o.jpg */ \"./img/classic/o.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"body {\\n  background-color: #a9a9a9;\\n  margin: 0;\\n}\\n\\n.tic-tac-toe {\\n  text-align: center;\\n}\\n.tic-tac-toe__title {\\n  font-family: \\\"Schwabacher\\\", sans-serif;\\n  font-size: 36px;\\n  letter-spacing: 2px;\\n}\\n.tic-tac-toe__menu {\\n  margin-bottom: 48px;\\n  padding: 12px;\\n  box-shadow: 0px 8px 48px;\\n}\\n.tic-tac-toe__menu_type_desabled {\\n  box-shadow: none;\\n}\\n.tic-tac-toe__select {\\n  width: 120px;\\n  height: 36px;\\n  font-family: \\\"Schwabacher\\\", sans-serif;\\n  font-size: 18px;\\n  background-color: #a9a9a9;\\n  border: 2px solid #122821;\\n  border-radius: 5px;\\n  outline: none;\\n}\\n.tic-tac-toe__select:hover {\\n  background-color: #c4c4c4;\\n}\\n.tic-tac-toe__select_type_desabled {\\n  opacity: 0.5;\\n}\\n.tic-tac-toe__info-wrapper {\\n  height: 60px;\\n  margin-top: 24px;\\n}\\n.tic-tac-toe__button-start {\\n  display: block;\\n  width: 60px;\\n  height: 60px;\\n  margin: auto;\\n  font-family: \\\"Schwabacher\\\", sans-serif;\\n  font-size: 18px;\\n  background-color: #a9a9a9;\\n  border: 2px solid #122821;\\n  border-radius: 30px;\\n  box-shadow: 2px 2px 5px;\\n  outline: none;\\n}\\n.tic-tac-toe__button-start:hover {\\n  background-color: #c4c4c4;\\n}\\n.tic-tac-toe__button-start:active {\\n  box-shadow: none;\\n}\\n.tic-tac-toe__button-start_type_desabled {\\n  display: none;\\n}\\n.tic-tac-toe__info {\\n  display: none;\\n  font-family: \\\"Schwabacher\\\", sans-serif;\\n  font-size: 18px;\\n  margin: 0;\\n}\\n.tic-tac-toe__info_type_active {\\n  display: block;\\n}\\n.tic-tac-toe__field {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 304px;\\n  height: 304px;\\n  border: 2px solid #122821;\\n  margin: auto;\\n  padding: 12px;\\n  box-sizing: border-box;\\n}\\n.tic-tac-toe__field_type_desabled {\\n  opacity: 0.5;\\n}\\n.tic-tac-toe__field_style_modern {\\n  border-radius: 152px;\\n}\\n.tic-tac-toe__cell {\\n  background-color: #a3adc0;\\n  width: 80px;\\n  height: 80px;\\n  margin: 6px;\\n  box-shadow: 3px 3px 6px;\\n  background-size: cover;\\n}\\n.tic-tac-toe__cell_type_active:hover {\\n  background-color: #c5d1e8;\\n}\\n.tic-tac-toe__cell_type_used {\\n  box-shadow: none;\\n}\\n.tic-tac-toe__cell_type_win {\\n  box-shadow: 0 0 10px #fcff6b;\\n}\\n.tic-tac-toe__cell_style_classic-x {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n.tic-tac-toe__cell_style_classic-o {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.tic-tac-toe__cell_style_modern-x {\\n  background-color: #122821;\\n}\\n.tic-tac-toe__cell_style_modern-o {\\n  background-color: #ffffff;\\n}\\n.tic-tac-toe__button-restart {\\n  display: none;\\n  width: 144px;\\n  height: 48px;\\n  font-family: \\\"Schwabacher\\\", sans-serif;\\n  font-size: 24px;\\n  margin: 24px auto;\\n  background-color: #69e0ba;\\n  border: none;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px 5px;\\n}\\n.tic-tac-toe__button-restart:hover {\\n  background-color: #a4ead3;\\n}\\n.tic-tac-toe__button-restart:active {\\n  box-shadow: none;\\n}\\n.tic-tac-toe__button-restart_type_active {\\n  display: block;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./style/rules.css":
/*!****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style/rules.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Schwabacher.ttf */ \"./assets/fonts/Schwabacher.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"@font-face {\\n    font-family: 'Schwabacher';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype')\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style/rules.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./assets/fonts/Schwabacher.ttf":
/*!**************************************!*\
  !*** ./assets/fonts/Schwabacher.ttf ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"405a9a583aa00973187852a4b62b1b64.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Schwabacher.ttf?");

/***/ }),

/***/ "./img/classic/o.jpg":
/*!***************************!*\
  !*** ./img/classic/o.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5d485e152461d4fe5f7af2e2a331bb3d.jpg\");\n\n//# sourceURL=webpack:///./img/classic/o.jpg?");

/***/ }),

/***/ "./img/classic/x.jpg":
/*!***************************!*\
  !*** ./img/classic/x.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"00b2690b4158ef73fbd2e54191ad7964.jpg\");\n\n//# sourceURL=webpack:///./img/classic/x.jpg?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/menu */ \"./scripts/menu.js\");\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/field */ \"./scripts/field.js\");\n/* harmony import */ var _scripts_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_field__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/field.js":
/*!**************************!*\
  !*** ./scripts/field.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const menu          = document.querySelector('.tic-tac-toe__menu');\nconst buttonStart   = document.querySelector('.tic-tac-toe__button-start');\nconst selectStyle   = document.querySelector('.tic-tac-toe__select_type_style');\nconst selectMode    = document.querySelector('.tic-tac-toe__select_type_mode');\nconst field         = document.querySelector('.tic-tac-toe__field');\nconst cells         = document.querySelectorAll('.tic-tac-toe__cell');\nconst cellsArr      = Array.prototype.slice.call( cells );\nconst buttonRestart = document.querySelector('.tic-tac-toe__button-restart');\n\nlet style     = 'classic';\nlet mode      = '';\nlet resultArr = [];\nlet counter   = 0;\n\nbuttonStart.addEventListener( 'click', startGame );\nbuttonRestart.addEventListener( 'click', restartGame );\nselectStyle.addEventListener( 'change', addStyle );\n/* selectMode.addEventListener( 'change', addMode ); */\n\nfunction addStyle() {\n    selectStyle.value === 'Classic' ? style = 'classic' : style = 'modern'\n    field.classList.toggle('tic-tac-toe__field_style_modern');    \n}\n \n\n\n\nfunction startGame() {\n    field.addEventListener( 'click', addStep );\n    selectStyle.setAttribute('disabled', 'disabled');\n    selectMode.setAttribute('disabled', 'disabled');\n\n    menu.classList.add('tic-tac-toe__menu_type_desabled');\n    buttonStart.classList.add('tic-tac-toe__button-start_type_desabled');\n    selectStyle.classList.add('tic-tac-toe__select_type_desabled');\n    selectMode.classList.add('tic-tac-toe__select_type_desabled');\n\n    field.classList.remove('tic-tac-toe__field_type_desabled');\n}\n\nfunction addButtonRestart() {\n    buttonRestart.classList.add('tic-tac-toe__button-restart_type_active');\n}\n\n\nfunction addWin( winNumberItemArr ) {\n    field.removeEventListener( 'click', addStep );\n\n    cellsArr.forEach(cell => {\n        cell.classList.remove('tic-tac-toe__cell_type_active');       \n    });\n\n    winNumberItemArr.forEach(position => {\n        cellsArr[position].classList.add('tic-tac-toe__cell_type_win');\n    });\n\n    addButtonRestart();\n}\n\nfunction checksLocation( turn ) {\n    cellsArr.forEach(someCell => {\n        if (someCell.classList.contains(`tic-tac-toe__cell_style_${style}-${turn}`)) {\n            resultArr.push(1);\n        }\n        else {\n            resultArr.push(0);\n        }\n    });\n\n    if ( resultArr[0] && resultArr[1] && resultArr[2]) {\n        const winNumberItemArr = [0, 1, 2];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[3] && resultArr[4] && resultArr[5]) {\n        const winNumberItemArr = [3, 4, 5];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[6] && resultArr[7] && resultArr[8]) {\n        const winNumberItemArr = [6, 7, 8];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[0] && resultArr[3] && resultArr[6]) {\n        const winNumberItemArr = [0, 3, 6];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[1] && resultArr[4] && resultArr[7]) {\n        const winNumberItemArr = [1, 4, 7];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[2] && resultArr[5] && resultArr[8]) {\n        const winNumberItemArr = [2, 5, 8];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[0] && resultArr[4] && resultArr[8]) {\n        const winNumberItemArr = [0, 4, 8];\n        addWin( winNumberItemArr );\n    };\n    if ( resultArr[2] && resultArr[4] && resultArr[6]) {\n        const winNumberItemArr = [2, 4, 6];\n        addWin( winNumberItemArr );\n    };\n}\n\nfunction addStep( e ) {\n    const cell = event.target;\n\n    if (cell != field && !cell.classList.contains('tic-tac-toe__cell_type_used')) {\n        counter++;\n\n        cell.classList.remove('tic-tac-toe__cell_type_active');\n        cell.classList.add('tic-tac-toe__cell_type_used');\n        if (counter % 2 == 0 ){\n            cell.classList.add(`tic-tac-toe__cell_style_${style}-o`);\n            checksLocation('o');\n        }\n        else {\n            cell.classList.add(`tic-tac-toe__cell_style_${style}-x`);\n            checksLocation('x');\n        }\n    }\n\n    resultArr.length = 0;\n\n    if (counter === 9) {\n        addButtonRestart();\n    }\n}\n\nfunction restartGame() {\n    cellsArr.forEach(cell => {\n        cell.removeAttribute('class');\n        cell.setAttribute('class', 'tic-tac-toe__cell tic-tac-toe__cell_type_active');\n    });\n\n    field.classList.add('tic-tac-toe__field_type_desabled');\n\n    buttonRestart.classList.remove('tic-tac-toe__button-restart_type_active');\n    counter = 0;\n\n    menu.classList.remove('tic-tac-toe__menu_type_desabled');\n    buttonStart.classList.remove('tic-tac-toe__button-start_type_desabled');\n    selectStyle.classList.remove('tic-tac-toe__select_type_desabled');\n    selectMode.classList.remove('tic-tac-toe__select_type_desabled');\n    selectStyle.removeAttribute('disabled');\n    selectMode.removeAttribute('disabled');\n}\n\n//# sourceURL=webpack:///./scripts/field.js?");

/***/ }),

/***/ "./scripts/menu.js":
/*!*************************!*\
  !*** ./scripts/menu.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./scripts/menu.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./style.css?");

/***/ })

/******/ });