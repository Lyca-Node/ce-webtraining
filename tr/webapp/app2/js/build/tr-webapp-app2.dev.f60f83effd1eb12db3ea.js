(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["cs-web-components-base", "cs-web-components-externals", "Immutable", "React", "ReactBootstrap"], factory);
	else if(typeof exports === 'object')
		exports["tr-webapp-app2"] = factory(require("cs-web-components-base"), require("cs-web-components-externals"), require("Immutable"), require("React"), require("ReactBootstrap"));
	else
		root["tr-webapp-app2"] = factory(root["cs-web-components-base"], root["cs-web-components-externals"], root["Immutable"], root["React"], root["ReactBootstrap"]);
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
/*! exports provided: ADD_TODO, ADD_TODO_DONE, ADD_TODO_ERROR, addTodo, addTodoDone, addTodoError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO_DONE", function() { return ADD_TODO_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO_ERROR", function() { return ADD_TODO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoDone", function() { return addTodoDone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoError", function() { return addTodoError; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");

var ADD_TODO = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])("ADD_TODO");
var ADD_TODO_DONE = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])("ADD_TODO_DONE");
var ADD_TODO_ERROR = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["prefixNS"])("ADD_TODO_ERROR");
function addTodo(item) {
  return {
    type: ADD_TODO,
    payload: {
      item: item
    }
  };
}
function addTodoDone(item) {
  return {
    type: ADD_TODO_DONE,
    payload: {
      item: item
    }
  };
}
function addTodoError(error) {
  return {
    type: ADD_TODO_ERROR,
    payload: {
      error: error
    }
  };
}

/***/ }),

/***/ "./src/components/DialogTable.jsx":
/*!****************************************!*\
  !*** ./src/components/DialogTable.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__);




var columns = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.fromJS([{
  width: 200,
  label: "ID",
  tooltip: "Tooltip for col1",
  id: "col1"
}, {
  label: "Title",
  tooltip: "Tooltip for col2",
  id: "col2"
}]);
var orderedColumns = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.OrderedSet(columns.map(function (c) {
  return c.get('id');
}));
var rows = immutable__WEBPACK_IMPORTED_MODULE_1___default.a.fromJS([{
  id: "0",
  columns: ["1", "Hallo Welt"]
}, {
  id: "1",
  columns: ["2", "Guten Morgen Erde"]
}, {
  id: "2",
  columns: ["3", "Hallo Erde"]
}, {
  id: "3",
  columns: ["4", "Guten Morgen Welt"]
}]);
var MyTable = cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Table"].PredefinedTables.DefaultTable();

var _CreateProjectButton = function _CreateProjectButton(_ref) {
  var operations = _ref.operations,
      runOperation = _ref.runOperation,
      contextObject = _ref.contextObject;
  var opInfo = operations.first();
  var currentSearchId = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_3__["ReactRedux"].useSelector(function (state) {
    return state["currentTabByClass"].get("cdbpcs_project");
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["Button"].IconTextButton, {
    iconSrc: opInfo.get("icon"),
    label: opInfo.get("label"),
    title: opInfo.get("tooltip"),
    buttonStyle: "primary",
    onClick: function onClick() {
      return runOperation(opInfo, {
        contextObjects: immutable__WEBPACK_IMPORTED_MODULE_1___default.a.List([contextObject]),
        //parameters: Immutable.fromJS({"project_name": 'Your new project'}),
        successActions: [cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["SearchApi"].Actions.repeatSearch(currentSearchId)]
      });
    }
  });
};

var CreateProjectButton = Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["WithOperationTrigger"])(Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["WithOperations"])(_CreateProjectButton, {
  contextType: "cdbpcs_project",
  operationNames: ["CDB_Modify"]
}));

var DialogTable = function DialogTable(_ref2) {
  var contextObject = _ref2.contextObject;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Test Table"), contextObject ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["ContentOperationToolbar"], {
    contextObject: contextObject
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "No Operations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "1em"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateProjectButton, {
    contextObject: contextObject
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTable, {
    rows: rows,
    title: "Table Example",
    columns: columns,
    orderedColumns: orderedColumns,
    contentHeight: "200px"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DialogTable);

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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var TodoItem = function TodoItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["prefixNS"])("todo-item")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, item));
};

TodoItem.propTypes = {
  item: cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string
};

var TodoList = function TodoList() {
  var state = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ReactRedux"].useSelector(function (state) {
    return state["tr-webapp-app2-reducer"];
  });
  var items = state.get('todos');
  var error = state.get('error');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["prefixNS"])("todo-list")
  }, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TodoItem, {
      key: index,
      item: item
    });
  }), error !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    bsStyle: "warning"
  }, error) : null);
};

var TodoInput = function TodoInput() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var dispatch = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ReactRedux"].useDispatch();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["prefixNS"])("todo-input")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["FormControl"].TextInput, {
    placeholder: "New todo item",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    value: value
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Button"].TextButton, {
    buttonStyle: "primary",
    block: true,
    onClick: function onClick() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["addTodo"])(value));
      setValue("");
    },
    label: "Add"
  }));
};

var dropdownItems = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Overlays"].MenuItem, {
  key: "menuItem1"
}, "Currently"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Overlays"].MenuItem, {
  key: "menuItem2"
}, "Still uses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Overlays"].MenuItem, {
  key: "menuItem3"
}, "React MenuItem")];
var columns = Immutable.fromJS([{
  width: 200,
  label: "ID",
  tooltip: "Tooltip for col1",
  id: "col1"
}, {
  label: "Title",
  tooltip: "Tooltip for col2",
  id: "col2"
}]);
var orderedColumns = Immutable.OrderedSet(columns.map(function (c) {
  return c.get('id');
}));
var rows = Immutable.fromJS([{
  id: "0",
  columns: ["1", "Hallo Welt"]
}, {
  id: "1",
  columns: ["2", "Guten Morgen Erde"]
}, {
  id: "2",
  columns: ["3", "Hallo Erde"]
}, {
  id: "3",
  columns: ["4", "Guten Morgen Welt"]
}]);

var ComponentDemo = function ComponentDemo() {
  var MyTable = cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Table"].PredefinedTables.DefaultTable();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["ContentBlock"], {
    title: 'ContentBlock with Toolbar'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["ContentBlock"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["ButtonToolbar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Button"].IconButton, {
    iconName: 'CDBWin Info',
    buttonStyle: 'info',
    title: "IconButton"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Button"].IconButton, {
    iconName: 'cdb_ok',
    title: "IconButton",
    buttonStyle: 'success'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Button"].IconButton, {
    iconSrc: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij4NCiAgPGNpcy1uYW1lPmRvd25sb2FkPC9jaXMtbmFtZT4NCiAgPHJlY3Qgb3BhY2l0eT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+DQogIDxwYXRoIGZpbGw9IiM5OTk5OTkiIGQ9Ik02LDIuNUM2LDIuMiw2LjIsMiw2LjUsMmgyQzguOCwyLDksMi4yLDksMi41VjZoMi40YzAuMywwLDAuMywwLjIsMC4yLDAuNGwtMy44LDQuMyAgYy0wLjIsMC4yLTAuNSwwLjItMC43LDBMMy4zLDYuNEMzLjEsNi4yLDMuMiw2LDMuNSw2SDZWMi41eiBNMTMsMTEuNVYxNEgydi0yLjVDMiwxMS4yLDIuMiwxMSwyLjUsMTFoMTBDMTIuOCwxMSwxMywxMS4yLDEzLDExLjV6ICAgTTEyLDEyaC0xdjAuNWgxVjEyeiIvPg0KPC9zdmc+',
    title: "IconButton",
    buttonStyle: 'info'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["Overlays"].DropdownIconButton, {
    key: "DropdownIconButton",
    iconName: 'csweb_option_horizontal',
    noCaret: true,
    title: "DropdownIconButton",
    buttonStyle: 'primary',
    id: "DropdownIconButton"
  }, dropdownItems)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_5__["ContentBlock"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyTable, {
    rows: rows,
    title: "Table Example",
    columns: columns,
    orderedColumns: orderedColumns,
    contentHeight: "100%"
  })));
};

var HelloWorld = function HelloWorld() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showChart = _useState4[0],
      setShowChart = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["prefixNS"])("todo-app")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Todo List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TodoList, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TodoInput, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentDemo, null));
}; //<Line data={data} options={options} />


/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["SinglePage"], {
        frameComponent: cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["PageFrame"].ApplicationFrame,
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
  return "".concat("tr-webapp-app2", "-").concat(name);
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
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/reducers */ "./src/reducers/reducers.js");
/* harmony import */ var _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/MainComponent */ "./src/containers/MainComponent.jsx");
/* harmony import */ var _components_DialogTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DialogTable */ "./src/components/DialogTable.jsx");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");






cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('MainComponent'), _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerComponent(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('DialogTable'), _components_DialogTable__WEBPACK_IMPORTED_MODULE_6__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerReducer(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["prefixNS"])('reducer'), _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__["Registry"].registerSaga(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // function projectDialogHook(ctx) {
//     const value = ctx.getValue("cdbpcs_project.project_name");
//     if (value.startsWith("P")) {
//         ctx.preventSubmit();
//     } else {
//         ctx.allowSubmit();
//     }
// }
// Registry.registerFunction(prefixNS("projectDialogHook"), projectDialogHook);

/* harmony default export */ __webpack_exports__["default"] = ({
  MainComponent: _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Reducer Template
 */



var DEFAULT_TODOS = immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS({
  todos: Object(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__["getAppSetup"])().getIn(["tr-webapp-app2", "todo_items"]),
  error: null
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TODOS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO_DONE"]:
      var todos = state.get("todos").push(action.payload.item);
      return state.set('todos', todos).set('error', null);

    case _actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TODO_ERROR"]:
      return state.set('error', action.payload.error);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-externals */ "cs-web-components-externals");
/* harmony import */ var cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(addTodo),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);




var _ReduxSaga$effects = cs_web_components_externals__WEBPACK_IMPORTED_MODULE_2__["ReduxSaga"].effects,
    takeEvery = _ReduxSaga$effects.takeEvery,
    put = _ReduxSaga$effects.put,
    call = _ReduxSaga$effects.call;

function addTodo(action) {
  var item, result;
  return regeneratorRuntime.wrap(function addTodo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          item = action.payload.item;
          _context.prev = 1;
          _context.next = 4;
          return call(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__["postJSON"], '/tr.webapp/tr-webapp-app2/items', {
            text: item
          });

        case 4:
          result = _context.sent;
          console.log('result', result);
          _context.next = 8;
          return put(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["addTodoDone"])(result.text));

        case 8:
          _context.next = 15;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
          _context.next = 15;
          return put(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["addTodoError"])(_context.t0.message));

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 10]]);
}

;
function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeEvery(_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"], addTodo);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

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
//# sourceMappingURL=tr-webapp-app2.dev.f60f83effd1eb12db3ea.js.map