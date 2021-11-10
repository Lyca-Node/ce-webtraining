(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["cs-web-components-base", "cs-web-components-externals", "Immutable", "React", "ReactBootstrap"], factory);
	else if(typeof exports === 'object')
		exports["tr-webapp-newapp"] = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else
		root["tr-webapp-newapp"] = factory(root["cs-web-components-base"], root["cs-web-components-externals"], root["Immutable"], root["React"], root["ReactBootstrap"]);
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

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: ADD_TODO_ITEM, TOGGLE_TODO_ITEM_DONE, FETCH_CHART_DATA_DONE, FETCH_CHART_DATA_ERROR, addTodoItem, toggleTodoItemDone, fetchChartDataDone, fetchChartDataError, fetchChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO_ITEM", function() { return ADD_TODO_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO_ITEM_DONE", function() { return TOGGLE_TODO_ITEM_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHART_DATA_DONE", function() { return FETCH_CHART_DATA_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CHART_DATA_ERROR", function() { return FETCH_CHART_DATA_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoItem", function() { return addTodoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTodoItemDone", function() { return toggleTodoItemDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChartDataDone", function() { return fetchChartDataDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChartDataError", function() { return fetchChartDataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchChartData", function() { return fetchChartData; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);


var ADD_TODO_ITEM = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('ADD_TODO_ITEM');
var TOGGLE_TODO_ITEM_DONE = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('TOGGLE_TODO_ITEM_DONE');
var FETCH_CHART_DATA_DONE = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('FETCH_CHART_DATA_DONE');
var FETCH_CHART_DATA_ERROR = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('FETCH_CHART_DATA_ERROR');
function addTodoItem(itemText) {
  return {
    type: ADD_TODO_ITEM,
    payload: {
      text: itemText
    }
  };
}
function toggleTodoItemDone(index) {
  return {
    type: TOGGLE_TODO_ITEM_DONE,
    payload: {
      index: index
    }
  };
}
function fetchChartDataDone(data) {
  return {
    type: FETCH_CHART_DATA_DONE,
    payload: {
      data: data
    }
  };
}
function fetchChartDataError(err) {
  return {
    type: FETCH_CHART_DATA_ERROR,
    payload: {
      err: err
    }
  };
}
function fetchChartData() {
  return function (dispatch) {
    Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["getJSON"])("/tr.webapp/newapp/userdocs").then(function (data) {
      dispatch(fetchChartDataDone(data));
    }, function (err) {
      dispatch(fetchChartDataError(err));
    });
  };
}

/***/ }),

/***/ "./src/components/Chart.jsx":
/*!**********************************!*\
  !*** ./src/components/Chart.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors */ "./src/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");






var Chart = function Chart() {
  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var dispatch = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ReactRedux"].useDispatch();
  var chartData = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["ReactRedux"].useSelector(_selectors__WEBPACK_IMPORTED_MODULE_3__["getChartData"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchChartData"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!chartData.isEmpty()) {
      var ctx = canvas.current.getContext('2d');
      var currentUser = Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["getAppSetup"])().getIn(["tr-webapp-newapp", "current_user"]);
      var chart = new window.Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.getIn(["data", "users"]).map(function (x) {
            return x.get("name");
          }).toJS(),
          datasets: [{
            label: '# of Documents',
            data: chartData.getIn(["data", "doc_count"]).toJS(),
            backgroundColor: chartData.getIn(["data", "users"]).map(function (x) {
              return x.get("persno") === currentUser ? 'rgba(54, 162, 235, 0.2)' : 'rgba(200, 200, 200, 0.2)';
            }).toJS(),
            borderColor: chartData.getIn(["data", "users"]).map(function (x) {
              return x.get("persno") === currentUser ? 'rgba(54, 162, 235, 1)' : 'rgba(200, 200, 200, 1)';
            }).toJS(),
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      return function () {
        chart.destroy();
      };
    }
  }, [chartData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container",
    style: {
      position: "relative",
      height: "40vh",
      width: "80vw"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    id: "myChart",
    width: "400",
    height: "400",
    ref: canvas
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/components/TodoItem.jsx":
/*!*************************************!*\
  !*** ./src/components/TodoItem.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");



var TodoItem = function TodoItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])("item") + " " + (item.get("done") ? Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])("item--done") : ""),
    onClick: onClick
  }, item.get("text"));
};

/* harmony default export */ __webpack_exports__["default"] = (TodoItem);

/***/ }),

/***/ "./src/components/TodoList.jsx":
/*!*************************************!*\
  !*** ./src/components/TodoList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoItem */ "./src/components/TodoItem.jsx");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart */ "./src/components/Chart.jsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectors */ "./src/selectors.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var OperationButton = function OperationButton(_ref) {
  var runOperation = _ref.runOperation,
      operations = _ref.operations;
  var succededAction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (a, b) {
    console.log("Project created!", a, b);
  }, []);
  var failedAction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (a, b) {
    console.error("Project creation failed!", a, b);
  }, []);
  var clickHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (operations.size > 0) {
      var _operation = operations.get(0);

      if (runOperation && _operation) {
        runOperation(_operation, {
          successActions: [succededAction],
          failedActions: [failedAction]
        });
      }
    }
  }, [runOperation, operations]);

  if (!runOperation || !operations || operations.size === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["Throbber"], null);
  }

  var operation = operations.get(0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["Button"].IconTextButton, {
    onClick: clickHandler,
    buttonStyle: "default",
    iconSrc: operation.get('icon'),
    title: operation.get('tooltip'),
    label: operation.get('label')
  });
};

var CreateProjectButton = Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["WithOperations"])(Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["WithOperationTrigger"])(OperationButton), {
  operationNames: ['CDB_Create'],
  contextType: "cdbpcs_project"
});

var TodoList = function TodoList(_ref2) {
  var contextObject = _ref2.contextObject;
  var items = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__["ReactRedux"].useSelector(_selectors__WEBPACK_IMPORTED_MODULE_9__["getTodoItems"]);
  var dispatch = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__["ReactRedux"].useDispatch();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      newTodo = _useState2[0],
      setNewTodo = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["prefixNS"])("todo-list")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Todo List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["ContentBlock"], {
    title: "Chart"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["ContentBlock"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateProjectButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["ContentOperationToolbar"], {
    operationContextName: "cdbpcs_project"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_4__["ContentBlock"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chart__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
}; // {items.map(
//     (item, index) => <TodoItem item={item} key={index}
//         onClick={() => dispatch(toggleTodoItemDone(index))}
//     />
// )}
// <form onSubmit={(e) => {
//     dispatch(addTodoItem(newTodo));
//     setNewTodo("");
//     e.preventDefault();
// }}>
//     <input placeholder="New Todo" value={newTodo} name="todoentry"
//         onChange={(e) => setNewTodo(e.target.value)}
//     />
// </form>
// User ID: {getAppSetup().getIn(["tr-webapp-newapp", "user_id"])}


/* harmony default export */ __webpack_exports__["default"] = (TodoList);

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
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TodoList */ "./src/components/TodoList.jsx");
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
      var _this = this;

      var EmbeddedFrame = cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["Registry"].findComponent("cs-web-components-base-EmbeddedEmptyFrame");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["SinglePage"], {
        frameComponent: EmbeddedFrame,
        pageContent: function pageContent() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__["default"], _this.props);
        }
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
  return "".concat("tr-webapp-newapp", "-").concat(name);
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
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _containers_MainComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/MainComponent */ "./src/containers/MainComponent.jsx");





cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["prefixNS"])('MainComponent'), _containers_MainComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerReducer(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["prefixNS"])('reducer'), Object(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_3__));

function projectDialogHook(ctx) {
  var value = ctx.getValue("cdbpcs_project.project_name");

  if (value.startsWith("P")) {
    ctx.preventSubmit();
  } else {
    ctx.allowSubmit();
  }
}

cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerFunction(Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["prefixNS"])("projectDialogHook"), projectDialogHook);
/* harmony default export */ __webpack_exports__["default"] = ({
  MainComponent: _containers_MainComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: todo_items, chart_data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todo_items", function() { return todo_items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chart_data", function() { return chart_data; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/**
 * Reducer Template
 */


var DEFAULT_TODO_ITEMS = immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS([{
  text: "Hello",
  done: false
}, {
  text: "Lorem Ipsum",
  done: true
}, {
  text: "New Todo",
  done: false
}]);

var toggleItemDone = function toggleItemDone(item) {
  var oldDone = item.get('done');
  return item.set('done', !oldDone);
};

function todo_items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TODO_ITEMS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO_ITEM"]:
      return state.push(immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS({
        text: action.payload.text,
        done: false
      }));

    case _actions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TODO_ITEM_DONE"]:
      var itemIndex = action.payload.index;
      return state.set(itemIndex, toggleItemDone(state.get(itemIndex)));

    default:
      return state;
  }
}
function chart_data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : immutable__WEBPACK_IMPORTED_MODULE_0___default.a.Map();
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_CHART_DATA_DONE"]:
      return immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS(action.payload.data);

    case _actions__WEBPACK_IMPORTED_MODULE_1__["FETCH_CHART_DATA_ERROR"]:
      return immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS({
        error: action.payload.err
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/selectors.js":
/*!**************************!*\
  !*** ./src/selectors.js ***!
  \**************************/
/*! exports provided: getAppState, getTodoItems, getChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodoItems", function() { return getTodoItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartData", function() { return getChartData; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

var getAppState = function getAppState(state) {
  return state[Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])('reducer')];
};
var getTodoItems = function getTodoItems(state) {
  return getAppState(state)["todo_items"];
};
var getChartData = function getChartData(state) {
  return getAppState(state)["chart_data"];
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
//# sourceMappingURL=tr-webapp-newapp.dev.1c4262889b668ff6e354.js.map