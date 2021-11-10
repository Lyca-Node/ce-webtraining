(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["cs-web-components-base", "cs-web-components-externals", "Immutable", "React", "ReactBootstrap"], factory);
	else if(typeof exports === 'object')
		exports["tr-webapp-test-web"] = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else
		root["tr-webapp-test-web"] = factory(root["cs-web-components-base"], root["cs-web-components-externals"], root["Immutable"], root["React"], root["ReactBootstrap"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_cs_web_components_base__, __WEBPACK_EXTERNAL_MODULE_cs_web_components_externals__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_bootstrap__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! exports provided: DATA_FETCH_SUCCESS, DATA_FETCH_FAILURE, thunkActionCreator, asyncActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_FETCH_SUCCESS", function() { return DATA_FETCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_FETCH_FAILURE", function() { return DATA_FETCH_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thunkActionCreator", function() { return thunkActionCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncActionCreator", function() { return asyncActionCreator; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);


var DATA_FETCH_SUCCESS = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('DATA_FETCH_SUCCESS');
var DATA_FETCH_FAILURE = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('DATA_FETCH_FAILURE');
/*
 Action Creator
  */

function onDataReceived(payload) {
  return {
    type: DATA_FETCH_SUCCESS,
    payload: payload
  };
}
/*
 Action Creator
  */


function onDataFailed(err) {
  return {
    type: DATA_FETCH_FAILURE,
    payload: err,
    error: true
  };
}
/*
 Thunk Action Creator
  */


function thunkActionCreator() {
  return function (dispatch
  /*, getState */
  ) {
    cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["Console"].log("Dispatching ", DATA_FETCH_SUCCESS);
    dispatch(onDataReceived("foo"));
  };
}
/*
 Async Thunk Action Creator

 Use an AJAX call to fetch data from server
  */

function asyncActionCreator() {
  return function (dispatch
  /*, getState */
  ) {
    Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["getJSON"])("/api/v1/i18n/labels/en").then(function (info) {
      dispatch(onDataReceived(info));
    }, function (err) {
      dispatch(onDataFailed(err));
    });
  };
}

/***/ }),

/***/ "./src/components/HelloWorld.jsx":
/*!***************************************!*\
  !*** ./src/components/HelloWorld.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var HelloWorld = /*#__PURE__*/function (_React$Component) {
  _inherits(HelloWorld, _React$Component);

  var _super = _createSuper(HelloWorld);

  function HelloWorld() {
    _classCallCheck(this, HelloWorld);

    return _super.apply(this, arguments);
  }

  _createClass(HelloWorld, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          thunkAction = _this$props.thunkAction,
          asyncAction = _this$props.asyncAction,
          labels = _this$props.labels;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["prefixNS"])("container")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello World!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ButtonToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: thunkAction
      }, "Thunk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: asyncAction
      }, "Async")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Labels count: ", labels.size));
    }
  }]);

  return HelloWorld;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

HelloWorld.propTypes = {
  thunkAction: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  asyncAction: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func,
  labels: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ImmutablePropTypes"].map
};

function mapStateToProps(state
/*, ownProps */
) {
  return {
    labels: state[Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["prefixNS"])("state")]["labels"]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    thunkAction: function thunkAction() {
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["thunkActionCreator"])());
    },
    asyncAction: function asyncAction() {
      dispatch(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_3__["asyncActionCreator"])());
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HelloWorld));

/***/ }),

/***/ "./src/containers/MainComponent.jsx":
/*!******************************************!*\
  !*** ./src/containers/MainComponent.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HelloWorld */ "./src/components/HelloWorld.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Created by cla on 07.04.2016.
 */




var MainComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(MainComponent, _React$Component);

  var _super = _createSuper(MainComponent);

  function MainComponent() {
    _classCallCheck(this, MainComponent);

    return _super.apply(this, arguments);
  }

  _createClass(MainComponent, [{
    key: "render",
    value: function render() {
      var EmbeddedFrame = cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["Registry"].findComponent("cs-web-components-base-EmbeddedEmptyFrame");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["SinglePage"], {
        frameComponent: EmbeddedFrame,
        pageContent: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_2__["default"]
      });
    }
  }]);

  return MainComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: prefixNS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixNS", function() { return prefixNS; });
function prefixNS(name) {
  return "".concat("tr-webapp-test-web", "-").concat(name);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/MainComponent */ "./src/containers/MainComponent.jsx");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_4__);





cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('MainComponent'), _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerReducer(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('state'), Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_2__)); // function todoItemDialogHook(ctx) {
//     console.log("DIALOG_HOOK", ctx);
//     const value = ctx.getValue("cdbpcs_project.project_name");
//     if (value.startsWith("P")) {
//         ctx.preventSubmit();
//     } else {
//         ctx.allowSubmit();
//     }
// }
// will register the dialog hook under tr-webapp-test-web-todoItemDialogHook
//Registry.registerFunction(prefixNS("todoItemDialogHook"), todoItemDialogHook);

/* harmony default export */ __webpack_exports__["default"] = ({
  MainComponent: _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Reducer Template
 */



var labels = function labels() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Console"].log('reducer got ', action.type);

  switch (action.type) {
    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["DATA_FETCH_SUCCESS"]:
      cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Console"].log('Reducing', action.payload);
      return immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS(action.payload);

    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__["DATA_FETCH_FAILURE"]:
      cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Console"].log('Reducing failed');
      return state;

    default:
      return state;
  }
};

/***/ }),

/***/ "cs-web-components-base":
/*!*****************************************!*\
  !*** external "cs-web-components-base" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cs_web_components_base__;

/***/ }),

/***/ "cs-web-components-externals":
/*!**********************************************!*\
  !*** external "cs-web-components-externals" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cs_web_components_externals__;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "Immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-bootstrap":
/*!*********************************!*\
  !*** external "ReactBootstrap" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_bootstrap__;

/***/ })

/******/ });
});
//# sourceMappingURL=tr-webapp-test-web.dev.a4659778ab171f61267a.js.map