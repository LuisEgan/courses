module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "9862");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "//IY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./queries/index.js + 3 modules
var queries = __webpack_require__("9hRF");

// EXTERNAL MODULE: ./lib/actions/index.js + 2 modules
var actions = __webpack_require__("iC29");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/App.js + 1 modules
var App = __webpack_require__("3aVm");

// EXTERNAL MODULE: ./components/Breadcrumbs.js
var Breadcrumbs = __webpack_require__("K0ya");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./mutations/index.js + 4 modules
var mutations = __webpack_require__("DJaw");

// EXTERNAL MODULE: ./components/Form.js
var Form = __webpack_require__("Rymt");

// EXTERNAL MODULE: ./components/Popup.js
var Popup = __webpack_require__("wDHI");

// EXTERNAL MODULE: ./components/inputs/TextInput.jsx
var TextInput = __webpack_require__("PLCg");

// CONCATENATED MODULE: ./components/Popups/EditGroupPopup.js








var createUser = mutations["a" /* default */].createUser,
    loginUser = mutations["a" /* default */].loginUser;
var initialValues = {
  name: '',
  description: ''
};
/* harmony default export */ var EditGroupPopup = (Object(external_react_apollo_["graphql"])(loginUser)(function (props) {
  var show = props.show,
      togglePopup = props.togglePopup,
      group = props.group;

  var _ref = group || {},
      name = _ref.name,
      description = _ref.description;

  var validate = function validate(values) {
    var errors = {};

    for (var input in values) {
      if (!values[input] || values[input] === '') {
        errors[input] = 'We need this';
      }
    }

    return errors;
  };

  var onSubmit = function onSubmit(values, mutation) {
    console.log('mutation: ', mutation);
    console.log('values: ', values); // mutation(values);
  };

  var onDelete =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(id) {
      var mutate;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              mutate = props.mutate;
              _context.next = 4;
              return mutate({
                variables: {
                  id: id
                }
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log('error: ', _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function onDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement(Popup["a" /* default */], {
    showPopup: show,
    togglePopup: togglePopup
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "popup-title"
  }, "Edit group details"), external_react_default.a.createElement("div", {
    id: "campaign-new-popup-btns"
  }, external_react_default.a.createElement(Form["a" /* default */], {
    mutation: createUser,
    onError: function onError(e) {
      return console.log(e);
    },
    initialValues: initialValues,
    validate: validate,
    onSubmit: onSubmit
  }, external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "name",
    label: "Group name*"
  }), external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "description",
    label: "Description*"
  }), external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '20px'
    }
  }, external_react_default.a.createElement("button", {
    type: "submit",
    className: "btn gradient-btn",
    style: {
      width: '40%'
    }
  }, "Save"), external_react_default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onDelete('GROUP_ID');
    },
    className: "btn red-btn",
    style: {
      width: '40%'
    }
  }, "Delete"))))));
}));
// CONCATENATED MODULE: ./components/Popups/NewGroupPopup.js





var NewGroupPopup_createUser = mutations["a" /* default */].createUser;
var NewGroupPopup_initialValues = {
  name: '',
  description: ''
};
/* harmony default export */ var NewGroupPopup = (function (_ref) {
  var show = _ref.show,
      togglePopup = _ref.togglePopup;

  var validate = function validate(values) {
    var errors = {};

    for (var input in values) {
      if (!values[input] || values[input] === '') {
        errors[input] = 'We need this';
      }
    }

    return errors;
  };

  var onSubmit = function onSubmit(values, mutation) {
    console.log('mutation: ', mutation);
    console.log('values: ', values); // mutation(values);
  };

  return external_react_default.a.createElement(Popup["a" /* default */], {
    showPopup: show,
    togglePopup: togglePopup
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "popup-title"
  }, "Create new group"), external_react_default.a.createElement("div", {
    id: "campaign-new-popup-btns"
  }, external_react_default.a.createElement(Form["a" /* default */], {
    validate: validate,
    initialValues: NewGroupPopup_initialValues,
    onSubmit: onSubmit,
    mutation: NewGroupPopup_createUser,
    onError: function onError(e) {
      return console.log(e);
    }
  }, external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "name",
    label: "Group name*"
  }), external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "description",
    label: "Description*"
  }), external_react_default.a.createElement("button", {
    type: "submit",
    className: "btn gradient-btn"
  }, "Create")))));
});
// CONCATENATED MODULE: ./components/Popups/EditCreativePopup.js








var EditCreativePopup_createUser = mutations["a" /* default */].createUser,
    EditCreativePopup_loginUser = mutations["a" /* default */].loginUser;
/* harmony default export */ var EditCreativePopup = (Object(external_react_apollo_["graphql"])(EditCreativePopup_loginUser)(function (props) {
  var show = props.show,
      togglePopup = props.togglePopup,
      creative = props.creative;

  var _ref = creative || {},
      name = _ref.name,
      description = _ref.description;

  var validate = function validate(values) {
    var errors = {};

    for (var input in values) {
      if (!values[input] || values[input] === '') {
        errors[input] = 'We need this';
      }
    }

    return errors;
  };

  var onSubmit = function onSubmit(values, mutation) {
    console.log('mutation: ', mutation);
    console.log('values: ', values); // mutation(values);
  };

  var onDelete =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(id) {
      var mutate;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              mutate = props.mutate;
              _context.next = 4;
              return mutate({
                variables: {
                  id: id
                }
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log('error: ', _context.t0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function onDelete(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement(Popup["a" /* default */], {
    showPopup: show,
    togglePopup: togglePopup
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "popup-title"
  }, "Edit creative details"), external_react_default.a.createElement("div", {
    id: "campaign-new-popup-btns"
  }, external_react_default.a.createElement(Form["a" /* default */], {
    initialValues: {
      name: name,
      description: description
    },
    validate: validate,
    onSubmit: onSubmit,
    mutation: EditCreativePopup_createUser,
    onError: function onError(e) {
      return console.log(e);
    }
  }, external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "name",
    label: "Group name*"
  }), external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "description",
    label: "Description*"
  }), external_react_default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '20px'
    }
  }, external_react_default.a.createElement("button", {
    type: "submit",
    className: "btn gradient-btn",
    style: {
      width: '40%'
    }
  }, "Save"), external_react_default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return onDelete('CREATIVE_ID');
    },
    className: "btn red-btn",
    style: {
      width: '40%'
    }
  }, "Delete"))))));
}));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// CONCATENATED MODULE: ./components/inputs/SelectInput.js









var SelectInput_Select =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Select, _React$Component);

  function Select(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Select);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Select).call(this, props));
    _this.state = {
      focused: false,
      displayError: false,
      touched: false
    };
    _this.forceFocus = _this.forceFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onFocus = _this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.onBlur = _this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Select, [{
    key: "onFocus",
    value: function onFocus() {
      var onFocus = this.props.onFocus;
      this.setState({
        focused: true,
        touched: true
      }, function () {
        onFocus && onFocus();
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var onBlur = this.props.onBlur;
      this.setState({
        focused: false,
        hasBlurred: true
      }, function () {
        onBlur && onBlur();
      });
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      this.input.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          icon = _this$props.icon,
          guideline = _this$props.guideline,
          name = _this$props.name,
          errors = _this$props.errors,
          options = _this$props.options;
      var _this$state = this.state,
          focused = _this$state.focused,
          displayError = _this$state.displayError,
          touched = _this$state.touched;
      if (!errors) return null;
      var inputStyle = {};
      var guidelineStyle = {};

      if (displayError) {
        inputStyle = {
          borderColor: 'red'
        };
      } else {
        inputStyle = focused ? {
          borderColor: '#14B9BE'
        } : {};
      }

      if (touched) {
        guidelineStyle = displayError ? {
          color: 'red'
        } : {
          color: 'green'
        };
      }

      return external_react_default.a.createElement("div", {
        className: "input mb",
        role: "input",
        onClick: this.forceFocus
      }, external_react_default.a.createElement("div", {
        className: "input-label"
      }, external_react_default.a.createElement("span", {
        className: "input-label"
      }, label)), external_react_default.a.createElement("div", {
        className: "input-body",
        style: inputStyle
      }, icon && external_react_default.a.createElement("div", {
        id: "input-icon"
      }, icon), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_formik_["Field"], {
        name: name,
        component: "select",
        innerRef: function innerRef(i) {
          _this2.input = i;
        }
      }, external_react_default.a.createElement("option", {
        value: ""
      }), options.map(function (opt) {
        return external_react_default.a.createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.label);
      }))), displayError && external_react_default.a.createElement("span", {
        className: "asyncError"
      }, errors[name])), external_react_default.a.createElement("div", {
        className: "input-guideline",
        style: guidelineStyle
      }, guideline));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var name = props.name,
          errors = props.errors,
          submitCount = props.submitCount;
      var hasBlurred = state.hasBlurred;
      var newState = {};
      newState.displayError = errors && !!errors[name] && (hasBlurred || submitCount > 0);
      return newState;
    }
  }]);

  return Select;
}(external_react_default.a.Component);

/* harmony default export */ var SelectInput = (SelectInput_Select);
// CONCATENATED MODULE: ./components/Popups/NewCreativePopup.js






var NewCreativePopup_createUser = mutations["a" /* default */].createUser;
var NewCreativePopup_initialValues = {
  name: '',
  description: '',
  iab: '',
  size: ''
};
/* harmony default export */ var NewCreativePopup = (function (_ref) {
  var show = _ref.show,
      togglePopup = _ref.togglePopup;

  var validate = function validate(values) {
    var errors = {};

    for (var input in NewCreativePopup_initialValues) {
      if (values[input] === '') {
        errors[input] = 'We need this';
      }
    }

    return errors;
  };

  var onSubmit = function onSubmit(values, mutation) {
    console.log('mutation: ', mutation);
    console.log('values: ', values);
    mutation(values);
  };

  return external_react_default.a.createElement(Popup["a" /* default */], {
    showPopup: show,
    togglePopup: togglePopup
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "popup-title"
  }, "New creative"), external_react_default.a.createElement("div", {
    id: "campaign-new-popup-btns"
  }, external_react_default.a.createElement(Form["a" /* default */], {
    validate: validate,
    onSubmit: onSubmit,
    initialValues: NewCreativePopup_initialValues,
    mutation: NewCreativePopup_createUser,
    onError: function onError(e) {
      return console.log(e);
    }
  }, external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "name",
    label: "Creative name*"
  }), external_react_default.a.createElement(TextInput["a" /* default */], {
    name: "description",
    label: "Description"
  }), external_react_default.a.createElement(SelectInput, {
    name: "iab",
    label: "IAB",
    options: [{
      label: 'opt1',
      value: 1
    }, {
      label: 'opt2',
      value: 2
    }]
  }), external_react_default.a.createElement(SelectInput, {
    name: "size",
    label: "Creative size in the real world",
    options: [{
      label: 'opt1',
      value: 1
    }, {
      label: 'opt2',
      value: 2
    }]
  }), external_react_default.a.createElement("button", {
    type: "submit",
    className: "btn gradient-btn"
  }, "Create")))));
});
// CONCATENATED MODULE: ./pages/groups.js
















var groups_CogSVG = function CogSVG(props) {
  return external_react_default.a.createElement("svg", props, external_react_default.a.createElement("path", {
    d: "M11.469.969l-.563 3.562A8.707 8.707 0 0 0 8.5 5.5L5.562 3.406 3.438 5.531 5.5 8.47a8.777 8.777 0 0 0-1 2.406l-3.531.594v3l3.531.625c.215.86.555 1.668 1 2.406l-2.094 2.938 2.125 2.125L8.47 20.5c.734.441 1.55.758 2.406.969l.594 3.562h3l.656-3.562a8.582 8.582 0 0 0 2.375-1l2.969 2.093 2.125-2.125-2.125-2.937c.437-.73.789-1.527 1-2.375l3.562-.656v-3l-3.562-.594a8.752 8.752 0 0 0-1-2.375l2.093-2.969-2.125-2.125L17.5 5.531a8.848 8.848 0 0 0-2.406-1L14.469.97zM13 6.469A6.533 6.533 0 0 1 19.531 13 6.533 6.533 0 0 1 13 19.531 6.536 6.536 0 0 1 6.469 13 6.536 6.536 0 0 1 13 6.469zm0 1.593A4.948 4.948 0 0 0 8.062 13 4.948 4.948 0 0 0 13 17.938 4.948 4.948 0 0 0 17.938 13 4.948 4.948 0 0 0 13 8.062zm-.031 2.876c1.144 0 2.094.914 2.094 2.062 0 1.145-.95 2.063-2.094 2.063A2.056 2.056 0 0 1 10.906 13c0-1.148.918-2.063 2.063-2.063z"
  }));
};

groups_CogSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 26 26",
  width: "52",
  height: "52"
};

var groups_PlusSVG = function PlusSVG(props) {
  return external_react_default.a.createElement("svg", props, external_react_default.a.createElement("path", {
    d: "M11 2v9H2v2h9v9h2v-9h9v-2h-9V2z",
    fillRule: "evenodd"
  }));
};

groups_PlusSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "48",
  height: "48"
};
var groupById = queries["a" /* default */].groupById;
var setSelected = actions["a" /* default */].setSelected;
var dbGroups = [{
  name: 'Group 1',
  creatives: [{
    image: 'https://i.kinja-img.com/gawker-media/image/upload/s--1JGOVben--/c_scale,f_auto,fl_progressive,q_80,w_800/twe4zfllglsnvgopqmeg.png',
    name: 'Creative 1'
  }, {
    image: 'https://media.mmo-champion.com/images/news/2013/november/Nagrand_Landscape.jpg',
    name: 'Creativesaaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaa a2'
  }, {
    image: 'http://vgtribune.com/VGTribune/wp-content/uploads/2015/05/env-tuskarr-full-820x380.jpg',
    name: 'Creative 3'
  }]
}, {
  name: 'Group 2',
  creatives: [{
    image: 'https://cdna.artstation.com/p/assets/images/images/000/133/820/large/toby-lewin-paint-318-draenor.jpg?1405392736',
    name: 'Creativesaaaaaa  aaaaaaaaaaaaaa a2'
  }, {
    image: 'https://i.kinja-img.com/gawker-media/image/upload/s--1JGOVben--/c_scale,f_auto,fl_progressive,q_80,w_800/twe4zfllglsnvgopqmeg.png',
    name: 'Creative x'
  }, {
    image: 'http://vgtribune.com/VGTribune/wp-content/uploads/2015/05/env-tuskarr-full-820x380.jpg',
    name: 'Creative 3234'
  }, {
    image: 'https://media.mmo-champion.com/images/news/2013/november/Nagrand_Landscape.jpg',
    name: 'Creativesaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaa a2'
  }]
}];
var initialState = {
  showNewGroup: false,
  showEditGroup: false,
  showNewCreative: false,
  showEditCreative: false,
  clickedGroup: {}
};

var groups_Groups = function Groups(props) {
  // console.log('props: ', props);
  var groups = props.data.groups;

  var _useReducer = Object(external_react_["useReducer"])(function (state, newState) {
    return Object(objectSpread["a" /* default */])({}, state, newState);
  }, initialState),
      _useReducer2 = Object(slicedToArray["a" /* default */])(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var _togglePopup = function togglePopup(popup, clickedOn) {
    var _setState;

    var _ref = clickedOn || {},
        group = _ref.group,
        creative = _ref.creative;

    setState((_setState = {}, Object(defineProperty["a" /* default */])(_setState, popup, !state[popup]), Object(defineProperty["a" /* default */])(_setState, "clickedGroup", group), Object(defineProperty["a" /* default */])(_setState, "clickedCreative", creative), _setState));
  };

  var renderGroup = function renderGroup(group) {
    var name = group.name,
        creatives = group.creatives;
    return external_react_default.a.createElement("div", {
      className: "group",
      key: name
    }, external_react_default.a.createElement("div", {
      className: "group-name mb"
    }, name, " \xA0 ", external_react_default.a.createElement(groups_CogSVG, {
      onClick: function onClick() {
        return _togglePopup('showEditGroup', {
          group: group
        });
      }
    })), external_react_default.a.createElement("div", {
      className: "group-creatives"
    }, creatives.map(function (creative) {
      var image = creative.image,
          name = creative.name;
      return external_react_default.a.createElement("div", {
        className: "group-creative",
        key: name,
        style: {
          backgroundImage: "url(".concat(image, ")")
        }
      }, external_react_default.a.createElement("div", {
        className: "creative-title"
      }, external_react_default.a.createElement("span", null, name), external_react_default.a.createElement(groups_CogSVG, {
        onClick: function onClick() {
          return _togglePopup('showEditCreative', {
            creative: creative
          });
        }
      })));
    }), external_react_default.a.createElement("div", {
      className: "group-creative group-creative-new mb",
      onClick: function onClick() {
        return _togglePopup('showNewCreative');
      }
    }, external_react_default.a.createElement(groups_PlusSVG, null), external_react_default.a.createElement("span", null, "New creative"), external_react_default.a.createElement(link_default.a, {
      href: "/about"
    }, external_react_default.a.createElement("a", null, "here")))));
  };

  var setBreadcrumbs = function setBreadcrumbs() {
    return [{
      title: 'My campaigns',
      route: '/campaigns'
    }, {
      title: 'NatGeo Mars Season 2',
      route: '/groups'
    }, {
      title: 'Edit',
      route: '/groups'
    }];
  };

  return external_react_default.a.createElement(App["a" /* default */], null, external_react_default.a.createElement(EditGroupPopup, {
    show: state.showEditGroup,
    togglePopup: function togglePopup() {
      return _togglePopup('showEditGroup', {
        group: state.clickedGroup
      });
    },
    group: state.clickedGroup
  }), external_react_default.a.createElement(NewGroupPopup, {
    show: state.showNewGroup,
    togglePopup: function togglePopup() {
      return _togglePopup('showNewGroup');
    }
  }), external_react_default.a.createElement(EditCreativePopup, {
    show: state.showEditCreative,
    togglePopup: function togglePopup() {
      return _togglePopup('showEditCreative', {
        creative: state.clickedCreative
      });
    },
    creative: state.clickedCreative
  }), external_react_default.a.createElement(NewCreativePopup, {
    show: state.showNewCreative,
    togglePopup: function togglePopup() {
      return _togglePopup('showNewCreative');
    }
  }), external_react_default.a.createElement("div", {
    className: "step-container",
    id: "groups"
  }, external_react_default.a.createElement("div", {
    id: "apps-header",
    className: "step-title"
  }, external_react_default.a.createElement(Breadcrumbs["a" /* default */], {
    breadcrumbs: setBreadcrumbs()
  }), external_react_default.a.createElement("h3", {
    className: "st sc-h3"
  }, "Groups")), external_react_default.a.createElement("div", {
    id: "groups-content"
  }, dbGroups.map(function (group) {
    return renderGroup(group);
  }), external_react_default.a.createElement("button", {
    className: "blue-btn mb",
    onClick: function onClick() {
      return _togglePopup('showNewGroup');
    }
  }, external_react_default.a.createElement(groups_PlusSVG, null), " \xA0 New group"))));
};

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectGroup: function selectGroup(groupId) {
      dispatch(setSelected({
        selectItem: 'group',
        value: groupId
      }));
    }
  };
};

var gqlOpts = {
  options: function options(props) {
    console.log('props: ', props);
    return {// variables: { id },
    };
  }
};
groups_Groups = Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(groups_Groups);
groups_Groups = Object(external_react_apollo_["graphql"])(groupById, gqlOpts)(groups_Groups);
/* harmony default export */ var pages_groups = __webpack_exports__["default"] = (groups_Groups);

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "3aVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./lib/actions/index.js + 2 modules
var actions = __webpack_require__("iC29");

// EXTERNAL MODULE: ./assets/img/logo-vertical.png
var logo_vertical = __webpack_require__("n0Fv");
var logo_vertical_default = /*#__PURE__*/__webpack_require__.n(logo_vertical);

// CONCATENATED MODULE: ./components/SideMenu.js














var SideMenu_ProfileSVG = function ProfileSVG(props) {
  return external_react_default.a.createElement("svg", props, external_react_default.a.createElement("path", {
    d: "M18.5 7.5C18.5 3.36 15.14 0 11 0 6.86 0 3.5 3.36 3.5 7.5a7.483 7.483 0 0 0 2.625 5.7A10.49 10.49 0 0 0 .5 22.5a1.5 1.5 0 0 0 3 0c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a1.5 1.5 0 0 0 3 0c0-4.04-2.28-7.545-5.625-9.3A7.483 7.483 0 0 0 18.5 7.5zM11 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z",
    fill: "#FFF"
  }));
};

SideMenu_ProfileSVG.defaultProps = {
  width: "22",
  height: "24",
  viewBox: "0 0 22 24"
};

var SideMenu_CampaignsSVG = function CampaignsSVG(props) {
  return external_react_default.a.createElement("svg", props, external_react_default.a.createElement("path", {
    d: "M21 24h-4.5a3 3 0 0 1-3-3v-4.5a3 3 0 0 1 3-3H21a3 3 0 0 1 3 3V21a3 3 0 0 1-3 3zm0-7.5h-4.5V21H21v-4.5zm0-6h-4.5a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3H21a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3zM21 3h-4.5v4.5H21V3zM7.5 24H3a3 3 0 0 1-3-3v-4.5a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3V21a3 3 0 0 1-3 3zm0-7.5H3V21h4.5v-4.5zm0-6H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3zm0-7.5H3v4.5h4.5V3z",
    fill: "#FFF"
  }));
};

SideMenu_CampaignsSVG.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var SideMenu_BellSVG = function BellSVG(props) {
  return external_react_default.a.createElement("svg", props, external_react_default.a.createElement("style", null, ".st0", "{", "display:none", "}"), external_react_default.a.createElement("switch", null, external_react_default.a.createElement("g", null, external_react_default.a.createElement("image", {
    width: "226",
    height: "306",
    xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEApwCnAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAANWAAAFmQAAChj/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIATQA4wMBIgACEQEDEQH/ xACpAAEAAwADAQAAAAAAAAAAAAAAAQYHAgQFAwEBAQAAAAAAAAAAAAAAAAAAAAEQAAAFAwMEAQQD AAAAAAAAAAECAwQFABEGMEAHIBIWFxRwgDE1EBMVEQACAQIBBgcMCAYDAAAAAAABAgMRBAAwQCEx QRJRYYGRodGSIHGxIjJCstITNAU1cGJyM0NzkyQQweFSghWiI1MSAQAAAAAAAAAAAAAAAAAAAID/ 2gAMAwEAAhEDEQAAAL+gSgSgSgSgSgSgSgSgSgSgSgSgSgSgAAAAAAAAAAAAAAAAAAAACqFrZZBq jMruesAAAAAAAAAAADxcf0zMkAd7oybxy6vaUAAAAAAAAAAeKdSmep4h6LwPkli6Xn+kan2KHa19 EAAAAAAAADqcsgPTrIgAADlxF50DBrgulgAAAAAAHnlCqPLigAAAAAGp2jHdiUAAAAABRb1kpXgg AAAAAE7Ri2llwCgAAAAMP2jDjiEAAAAAAXWlWQ1cKAAAAB5mL69kKAAAAAAAPY8fum3BQAAAAK7k 2n5ggAAAAAAD7/DkbxPy+qgAAAAUzN73REAAAAAAATA2/ueR66gAAAD4GaVbs9ZAAAAAAAANStOX 6goAAADObljRxCAAAAAAAATrmReqbMFAAAqeYb1WjKmhwmetCGetC+JQ11FKXUUpdRSl17Zn7Qhn rQhnvLR/fO59xQAAAAAFbskGCvb8RAAPtuFGvygAAAAAAAAAAdXNtTGCxufVMcvF65gAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2gAIAQIAAQUA+yz/2gAIAQMAAQUA+yz/ 2gAIAQEAAQUAvV6vV6vV6vV6vV6vV6vV6vV6vV6vV6vV6vV6vV6vV6v9AMhztrGLG5DyETewsjpr yRMpmgcjYTiO3y6UPFwgiJh/mGklouRTUKqntuSf0vQH5iv1m2zuPeyEWhgWRrUHHE2NeuJmjccz gUvhOSIVGkOnHbT8VK5dCRZn/Jbo5nGZ5G4MrOTC1f6clSU1Loi1znImwsOTC1GZBEyobKSlGUW2 n83kZQwiIj1pqKJHxvP1ExTUIqTXkZBtGtJ6ddzbzTwrKxYKgICGtn08L19q4LOjJR2rPyIRkSc5 lD6uJygxc1q8lvxKlrAIgOOvvnwupnTv5OQ6/Gzv+yK0zD2lllxcyevxm47ZDTkVRRYHMJz6+Ari lkWnkioIwewxJYEch081N245sIU3bL6eeHAuO7BgcE3pTAYulyMa0HsExso1N3NtLktUAjtgA2GH VBaK0uTlQFXY4msC2PaXIbgFp3Y8duQVgtF88RYtJF6pIPtjgEyVjKaPIOQ/IX2RTGKbEJ8JqN68 klgiIlRQ6h9njcypDSpTAYvVyMgsrC7RNM6h2CSiLDqOQhyv+P4B4objBrf1g3r1g3r1g3r1g3px x5GNQ8JgK8JgK8JgK8JgK8JgK8JgK8JgKT40aKk9YN69YN69YN69YN6R4ziy1GY3CxQ62ex5nsD1 NGyjt00blatdochFCZTj6sJIdPH+OHKfbSMazk2s5gkpHHMUxDU1Zu3iuOcfGIcpSlLuHMewd0XG 4ApkUEUCfR//2gAIAQICBj8AFn//2gAIAQMCBj8AFn//2gAIAQEBBj8A+hxrSzQXNymh2r4iHg4z glWiUbB7MHHlxfpjANzHFOu0Abh6MFrc7kyfeQt5S8fGM4nniNJnpHGeAvoryYLMak6STtPcQ3kJ oUYbw2Mp1g4SVNKuoZe8RUZvD+ePRPcjFn+RF6AzeGGyhaeQTAlUFaCh04BaBYgdruo6K1xplgXi LHqx99B2j1Y8V4X4g1PCMVNoXA/82D+icWsbgq6QxqynWCFAIzXTgxzT+0mH4UXjty00DlwV+H2y xrseU7zdlevBJuzGD5sYCjwE4rJezHvOR4KY97m/UfrxvR3swI4XY+EnGm4E44JVB9HdwF+I2hHD JCa/8Wpj9ncKz7Yz4rj/ABOZm5vJBGg1Dax4AMNDak2tpqCqaOw+swxU68gJImKOpqrKaEHC2nxk 76akuRrH2+vCyRsHRhVWGkEHMJLy5bdjjFeMnYBhriYkRAkQxbEXryi/Db5ybSQ0ic/hsf5HFRpB 1Zf/AF0DftrY+PTU0m3myxtJ2rc2gC1Oto/NPJqy1zd1oyqRHxu2gYaRzVnJZjwk5aCUmkMh9lNw braK8mvLWvw9T5ZMrjiGgZcEaxpGLS5JqzRhXO3eTxT4MrMoNVgAjA4CNeYT2pNTDLvAcAcf0yhP AK4upzreVj00zC6ttkkYblU/1ylxKNaRsejDOdbEnnzCFdkquh5q5S9cmn/URXv5jZOTQGQL2tGU u+MAdOY2bcEyHpyk4J0sygc+YwOdAWRTXlwGGoio5cmi/wB0q9GYofrDw4hbhRTzgZO2i2tITzDM QeDFpKPOhT0QMnZRV1BmI6MysmBrRN099SRk/Zg1EMaqe+dJzIw+dBKwPebSMlLdzndjhUsSeLZi e8k8qZy3eGwZkbOY0hvKKCdQkHk8+rJD4RbPWGE1uCPOfYvJmYZTRlNQRwjA9q37y3ok42twPy5C a6H3tNyIfXbQMNI53nclmJ2k5pDcgn2DEJcLsaNtB5teAymqkVB4j3aPGpZIpA0lNgOiuarHGpZ3 IVVGkknUBi2hl+8jijR/tKoB7so6hlYUZSKgjjGDLGslozaSIWG5X7LhqcmPEvpANlUBPhx7+/YH Xj39+wOvHv79gdePf37A68Kbr4sIA5oplCJU8W8wx89h7UXr4+ew9qL18fPYe1F6+PnsPai9fHz2 HtRevj57D2ovXx89h7UXr4EkXxEujCquqqQRxENj39+wOvHv79gdePf37A68e/v2B14rPdTycS7i DpVsB7O2VZR+M1Xk5GatOTLvIg3pLVhMBxDQ3Qe7itohvSTOEUDhJpiG2TyYUVB/iKZq0bjeRgQw O0HDIFJs5SWt5NlP7Dxjuv8AdXabooRaK22ugyU8GbvaXkYkifnU7GU7DhpbJTe2msFBWVR9ZBr5 MFXBVhoKkUI/gIbSF55D5salj0YS7+NU8WhW0U1/UYeAYCqAqqKADQABnP7u2in/ADEV/SBxvD4d b144lI5iMbkEaxIPNRQo5h9EH//Z",
    transform: "matrix(.432 0 0 .432 1.036 -15.333)",
    overflow: "visible",
    id: "Layer_1",
    className: "st0"
  }), external_react_default.a.createElement("g", {
    id: "Layer_2"
  }, external_react_default.a.createElement("path", {
    d: "M58.3 60.1c-3.9-7.6-.8-16.4-5.1-32.8C49.4 12.7 35 12.5 31.7 12.7c-3.2-.1-17.7.1-21.5 14.6C5.9 43.7 9 52.5 5.1 60.1s-5.5 9.8 3.1 9.8H55.3c8.6 0 6.9-2.2 3-9.8zM31.7 11c1.3-.1 4.4-.1 7.9.9V5.7c0-2.3-1.8-4.1-4.1-4.1H28c-2.3 0-4.1 1.8-4.1 4.1v6.2c3.4-.9 6.5-.9 7.8-.9zM31.1 71.6h-9.9c0 5.8 4.7 10.6 10.6 10.6s10.6-4.7 10.6-10.6H31.1z"
  })))));
};

SideMenu_BellSVG.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 64 84.5"
};

var SideMenu_DocumentationSVG = function DocumentationSVG(props) {
  return external_react_default.a.createElement("svg", props, external_react_default.a.createElement("title", null, "Group"), external_react_default.a.createElement("g", {
    fill: "#000",
    fillRule: "evenodd"
  }, external_react_default.a.createElement("path", {
    d: "M18.462 16.406H5.538c-.764 0-1.384.63-1.384 1.407 0 .776.62 1.406 1.384 1.406h12.924c.764 0 1.384-.63 1.384-1.407 0-.776-.62-1.406-1.384-1.406zM15.692 21.094H5.538c-.764 0-1.384.63-1.384 1.406 0 .776.62 1.406 1.384 1.406h10.154c.765 0 1.385-.63 1.385-1.406 0-.776-.62-1.406-1.385-1.406z"
  }), external_react_default.a.createElement("path", {
    d: "M0 3.281V26.72C0 28.529 1.45 30 3.23 30h17.54c1.78 0 3.23-1.472 3.23-3.281V9.562c0-.024-.006-.046-.007-.07a1.418 1.418 0 0 0-.4-1.112L15.749.412a1.364 1.364 0 0 0-.946-.397C14.754.009 14.705 0 14.654 0H3.23C1.449 0 0 1.472 0 3.281zm20.77 23.907H3.23a.467.467 0 0 1-.46-.47V3.282c0-.258.207-.469.46-.469h10.155V7.5c0 1.81 1.449 3.281 3.23 3.281h4.616V26.72a.467.467 0 0 1-.462.468zM16.153 4.8l3.119 3.168h-2.658a.467.467 0 0 1-.461-.469V4.8z",
    fillRule: "nonzero"
  })));
};

SideMenu_DocumentationSVG.defaultProps = {
  width: "24",
  height: "30",
  viewBox: "0 0 24 30",
  xmlns: "http://www.w3.org/2000/svg"
};
var _logout = actions["a" /* default */].logout;

function openInNewTab(url) {
  var sideMenu = document.getElementById("sideMenu");
  var a = document.createElement("a");
  sideMenu.appendChild(a);
  a.target = "_blank";
  a.href = url;
  a.click();
  sideMenu.removeChild(a);
}

var sections = [{
  icon: external_react_default.a.createElement(SideMenu_CampaignsSVG, null),
  title: "My campaigns",
  pathname: "/campaigns"
}, {
  icon: external_react_default.a.createElement(SideMenu_DocumentationSVG, null),
  title: "Documentation",
  pathname: "https://docs.admix.in/"
}, {
  icon: external_react_default.a.createElement(SideMenu_DocumentationSVG, null),
  title: "Notifications",
  pathname: "/"
}, {
  icon: external_react_default.a.createElement(SideMenu_ProfileSVG, null),
  title: "My profile",
  pathname: "/"
}];

var SideMenu_SideMenu =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SideMenu, _Component);

  function SideMenu(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SideMenu);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SideMenu).call(this, props));
    _this.state = {};
    _this.renderSections = _this.renderSections.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.redirectTo = _this.redirectTo.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(SideMenu, [{
    key: "redirectTo",
    value: function redirectTo(pathname) {
      if (pathname.indexOf("http") >= 0) {
        openInNewTab(pathname);
      }
    }
  }, {
    key: "renderSections",
    value: function renderSections() {
      var pathname = "/";
      var isSelected;
      return external_react_default.a.createElement("div", {
        id: "sideMenu-body"
      }, sections.map(function (section) {
        isSelected = section.pathname === pathname ? "selectedSection" : "";
        return external_react_default.a.createElement("div", {
          key: section.title
        }, external_react_default.a.createElement(link_default.a, {
          prefetch: true,
          href: section.pathname,
          key: section.title
        }, external_react_default.a.createElement("a", {
          target: section.title === "Documentation" ? "__blank" : null
        }, external_react_default.a.createElement("div", null, section.icon), section.title)));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logout = _this$props.logout,
          isLoggedIn = _this$props.isLoggedIn;
      if (!isLoggedIn) return null;
      return external_react_default.a.createElement("div", {
        id: "sideMenu"
      }, external_react_default.a.createElement("div", {
        id: "sideMenu-header"
      }, external_react_default.a.createElement("img", {
        src: logo_vertical_default.a,
        alt: "logo",
        onClick: logout
      })), this.renderSections());
    }
  }]);

  return SideMenu;
}(external_react_["Component"]);

var SideMenu_mapStateToProps = function mapStateToProps(state) {
  var auth = state.auth;
  return Object(objectSpread["a" /* default */])({}, auth);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch(_logout());
    }
  };
};

SideMenu_SideMenu = Object(router_["withRouter"])(SideMenu_SideMenu);
SideMenu_SideMenu = Object(external_react_redux_["connect"])(SideMenu_mapStateToProps, mapDispatchToProps)(SideMenu_SideMenu);
/* harmony default export */ var components_SideMenu = (SideMenu_SideMenu);
// EXTERNAL MODULE: ./assets/img/favicon.png
var favicon = __webpack_require__("vQ70");
var favicon_default = /*#__PURE__*/__webpack_require__.n(favicon);

// CONCATENATED MODULE: ./components/App.js













var App_AppWrapper =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AppWrapper, _React$Component);

  function AppWrapper() {
    Object(classCallCheck["a" /* default */])(this, AppWrapper);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(AppWrapper).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(AppWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isLoggedIn = _this$props.isLoggedIn;
      var pathname = router_default.a.router.pathname;

      if (!isLoggedIn && pathname !== "/login") {
        router_default.a.push("/login");
        return null;
      }

      return external_react_default.a.createElement("main", {
        className: "jsx-1821865502"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
        className: "jsx-1821865502"
      }, "Admix - 3D Studio"), external_react_default.a.createElement("link", {
        rel: "shortcut icon",
        href: favicon_default.a,
        className: "jsx-1821865502"
      }), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-1821865502"
      })), external_react_default.a.createElement(components_SideMenu, null), children, external_react_default.a.createElement(style_default.a, {
        id: "1821865502"
      }, ["main.jsx-1821865502{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;}"]));
    }
  }]);

  return AppWrapper;
}(external_react_default.a.Component);

var App_mapStateToProps = function mapStateToProps(state) {
  var isLoggedIn = state.auth.isLoggedIn;
  return {
    isLoggedIn: isLoggedIn
  };
};

/* harmony default export */ var App = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(App_mapStateToProps)(App_AppWrapper));

/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "9862":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("//IY");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9hRF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./queries/users.js
var users = __webpack_require__("yubH");
var users_default = /*#__PURE__*/__webpack_require__.n(users);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./queries/campaigns.js


function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    query GetCampaignsById($campaign: ID!) {\n      campaignById(campaign: $campaign) {\n        id\n        name\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    query GetAllCampaigns {\n      campaigns {\n        id\n        name\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var campaigns = ({
  campaigns: Object(external_apollo_boost_["gql"])(_templateObject()),
  campaignById: Object(external_apollo_boost_["gql"])(_templateObject2())
});
// CONCATENATED MODULE: ./queries/creatives.js


function creatives_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    query GetCreativesById($creative: ID!) {\n      creativeById(creative: $creative) {\n        id\n        name\n      }\n    }\n  "]);

  creatives_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function creatives_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    query GetAllCreatives {\n      creatives {\n        id\n        name\n      }\n    }\n  "]);

  creatives_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var creatives = ({
  creatives: Object(external_apollo_boost_["gql"])(creatives_templateObject()),
  creativeById: Object(external_apollo_boost_["gql"])(creatives_templateObject2())
});
// CONCATENATED MODULE: ./queries/groups.js


function groups_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    query GetGroupById($group: ID!) {\n      groupById(group: $group) {\n        id\n        name\n      }\n    }\n  "]);

  groups_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function groups_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    query GetAllGroups {\n      groups {\n        id\n        name\n      }\n    }\n  "]);

  groups_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var groups = ({
  groups: Object(external_apollo_boost_["gql"])(groups_templateObject()),
  groupById: Object(external_apollo_boost_["gql"])(groups_templateObject2())
});
// CONCATENATED MODULE: ./queries/index.js





/* harmony default export */ var queries = __webpack_exports__["a"] = (Object(objectSpread["a" /* default */])({}, users_default.a, campaigns, creatives, groups));

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "DJaw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./mutations/users.js


function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation CreateUser(\n      $name: String!\n      $email: String!\n      $password: String!\n      $company: String\n    ) {\n      createUser(\n        name: $name\n        email: $email\n        password: $password\n        company: $company\n      ) {\n        id\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation LoginUser($email: String!, $password: String!) {\n      loginUser(email: $email, password: $password) {\n        token\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var users = ({
  loginUser: Object(external_apollo_boost_["gql"])(_templateObject()),
  createUser: Object(external_apollo_boost_["gql"])(_templateObject2())
});
// CONCATENATED MODULE: ./mutations/campaigns.js


function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation DeleteCampaing($user: ID!, $campaign: ID!) {\n      deleteCampaign(campaign: $campaign, user: $user)\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation EditCampaing(\n      $user: ID!\n      $campaign: ID!\n      $name: String\n      $state: String\n      $advertiser: String\n      $description: String\n      $startDate: String\n      $endDate: String\n    ) {\n      editCampaign(\n        user: $user\n        campaign: $campaign\n        name: $name\n        state: $state\n        advertiser: $advertiser\n        description: $description\n        startDate: $startDate\n        endDate: $endDate\n      ) {\n        ...CampaignsFragment\n      }\n    }\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function campaigns_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation CreateCampaing($user: ID!, $name: String!, $advertiser: String!) {\n      createCampaign(user: $user, name: $name, advertiser: $advertiser) {\n        ...CampaignsFragment\n      }\n    }\n    ", "\n  "]);

  campaigns_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function campaigns_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  fragment CampaignsFragment on CampaignsType {\n    id\n    name\n    state\n    startDate\n    endDate\n    createdAt\n    updatedAt\n    user {\n      id\n      name\n      company\n      email\n      accessGroups\n    }\n  }\n"]);

  campaigns_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CAMPAIGNS_FRAGMENT = Object(external_apollo_boost_["gql"])(campaigns_templateObject());
/* harmony default export */ var campaigns = ({
  createCampaign: Object(external_apollo_boost_["gql"])(campaigns_templateObject2(), CAMPAIGNS_FRAGMENT),
  editCampaign: Object(external_apollo_boost_["gql"])(_templateObject3(), CAMPAIGNS_FRAGMENT),
  deleteCampaign: Object(external_apollo_boost_["gql"])(_templateObject4())
});
// CONCATENATED MODULE: ./mutations/creatives.js


function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation DeleteCreative($user: ID!, $creative: ID!) {\n      deleteCreative(creative: $creative, user: $user)\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function creatives_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation RemoveGroupsFromCreative($user: ID!, $creative: ID!, $groups: [ID!]) {\n      removeGroupsFromCreative(user: $user, creative: $creative, groups: $groups) {\n        id\n        name\n        groups {\n          id\n          name\n        }\n      }\n    }\n  "]);

  creatives_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function creatives_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation AddGroupsToCreative($user: ID!, $creative: ID!, $groups: [ID!]) {\n      addGroupsToCreative(user: $user, creative: $creative, groups: $groups) {\n        id\n        name\n        groups {\n          id\n          name\n        }\n      }\n    }\n  "]);

  creatives_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function creatives_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation EditCreative(\n      $user: ID!\n      $creative: ID!\n      $name: String\n      $state: String\n      $size: String\n    ) {\n      editCreative(user: $user, creative: $creative, name: $name, state: $state, size: $size) {\n        id\n        name\n        groups {\n          id\n          name\n        }\n      }\n    }\n  "]);

  creatives_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function creatives_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation CreateCreative($user: ID!, $name: String!, $size: Int!, $groups: ID!) {\n      createCreative(user: $user, size: $size, name: $name, groups: $groups) {\n        id\n        name\n        sourceURL\n        thumbURL\n        format\n        state\n        size\n        IAB\n        createdAt\n        updatedAt\n        user {\n          id\n          name\n          company\n          email\n          accessGroups\n        }\n        groups {\n          id\n          name\n          state\n          description\n          createdAt\n          updatedAt\n          campaign {\n            id\n            name\n            state\n            startDate\n            endDate\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  "]);

  creatives_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var creatives = ({
  createCreative: Object(external_apollo_boost_["gql"])(creatives_templateObject()),
  editCreative: Object(external_apollo_boost_["gql"])(creatives_templateObject2()),
  addGroupsToCreative: Object(external_apollo_boost_["gql"])(creatives_templateObject3()),
  removeGroupsFromCreative: Object(external_apollo_boost_["gql"])(creatives_templateObject4()),
  deleteCreative: Object(external_apollo_boost_["gql"])(_templateObject5())
});
// CONCATENATED MODULE: ./mutations/groups.js


function groups_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation DeleteGroup($user: ID!, $group: ID!) {\n      deleteGroup(user: $user, group: $group)\n    }\n  "]);

  groups_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function groups_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation EditGroup(\n      $user: ID!\n      $group: ID!\n      $name: String\n      $state: String\n      $campaign: ID\n      $description: String\n    ) {\n      editGroup(\n        user: $user\n        group: $group\n        name: $name\n        state: $state\n        campaign: $campaign\n        description: $description\n      ) {\n        id\n        name\n        campaign {\n          id\n          name\n        }\n      }\n    }\n  "]);

  groups_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function groups_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    mutation CreateGroup($user: ID!, $name: String!, $campaign: ID!) {\n      createGroup(user: $user, name: $name, campaign: $campaign) {\n        id\n        name\n        campaign {\n          id\n          name\n        }\n      }\n    }\n  "]);

  groups_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var groups = ({
  createGroup: Object(external_apollo_boost_["gql"])(groups_templateObject()),
  editGroup: Object(external_apollo_boost_["gql"])(groups_templateObject2()),
  deleteGroup: Object(external_apollo_boost_["gql"])(groups_templateObject3())
});
// CONCATENATED MODULE: ./mutations/index.js





/* harmony default export */ var mutations = __webpack_exports__["a"] = (Object(objectSpread["a" /* default */])({}, users, campaigns, creatives, groups));

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K0ya":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);









var CaretSVG = function CaretSVG(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Shape"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
    d: "M1 1l5.333 5.333L11.667 1",
    stroke: "#0A1F44",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd"
  }));
};

CaretSVG.defaultProps = {
  width: "13",
  height: "8",
  viewBox: "0 0 13 8",
  xmlns: "http://www.w3.org/2000/svg"
};

var Breadcrumbs =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Breadcrumbs);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Breadcrumbs).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var breadcrumbs = this.props.breadcrumbs;
      var allBreadcrumbs = breadcrumbs ? breadcrumbs.length : 0;
      var linkClass, lastBread;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "breadcrumbs"
      }, breadcrumbs && breadcrumbs.map(function (breadcrumb, i) {
        lastBread = i === allBreadcrumbs - 1;
        linkClass = lastBread ? "last" : "";
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
          key: "".concat(breadcrumb.title, "-").concat(Math.random())
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "".concat(breadcrumb.title, "-").concat(Math.random())
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          prefetch: true,
          href: breadcrumb.route
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, breadcrumb.title))), !lastBread && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "".concat(breadcrumb.title, "-caret")
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CaretSVG, null)));
      }));
    }
  }]);

  return Breadcrumbs;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Breadcrumbs = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Breadcrumbs);
/* harmony default export */ __webpack_exports__["a"] = (Breadcrumbs);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "Mu3t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  ADD: 'ADD',
  TICK: 'TICK',
  SET_LOGIN: 'SET_LOGIN',
  SET_SELECTED: 'SET_SELECTED'
});

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "PLCg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);









var Input =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Input, _React$Component);

  function Input(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Input);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Input).call(this, props));
    _this.state = {
      focused: false,
      displayError: false,
      touched: false
    };
    _this.forceFocus = _this.forceFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.onFocus = _this.onFocus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    _this.onBlur = _this.onBlur.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Input, [{
    key: "onFocus",
    value: function onFocus() {
      var onFocus = this.props.onFocus;
      this.setState({
        focused: true,
        touched: true
      }, function () {
        onFocus && onFocus();
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var onBlur = this.props.onBlur;
      this.setState({
        focused: false,
        hasBlurred: true
      }, function () {
        onBlur && onBlur();
      });
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      this.input.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          icon = _this$props.icon,
          guideline = _this$props.guideline,
          name = _this$props.name,
          type = _this$props.type,
          errors = _this$props.errors;
      var _this$state = this.state,
          focused = _this$state.focused,
          displayError = _this$state.displayError,
          touched = _this$state.touched;
      if (!errors) return null;
      var inputStyle = {};
      var guidelineStyle = {};

      if (displayError) {
        inputStyle = {
          borderColor: 'red'
        };
      } else {
        inputStyle = focused ? {
          borderColor: '#14B9BE'
        } : {};
      }

      if (touched) {
        guidelineStyle = displayError ? {
          color: 'red'
        } : {
          color: 'green'
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input mb",
        role: "input",
        onClick: this.forceFocus
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-label"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "input-label"
      }, label)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-body",
        style: inputStyle
      }, icon && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "input-icon"
      }, icon), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        type: type,
        name: name,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        innerRef: function innerRef(i) {
          _this2.input = i;
        }
      })), displayError && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "asyncError"
      }, errors[name])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "input-guideline",
        style: guidelineStyle
      }, guideline));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var name = props.name,
          errors = props.errors,
          submitCount = props.submitCount;
      var hasBlurred = state.hasBlurred;
      var newState = {};
      newState.displayError = errors && !!errors[name] && (hasBlurred || submitCount > 0);
      return newState;
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Rymt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);





var AdmixForm = function AdmixForm(props) {
  var children = props.children,
      validate = props.validate,
      _onSubmit = props.onSubmit,
      initialValues = props.initialValues,
      mutation = props.mutation,
      onCompleted = props.onCompleted,
      onError = props.onError;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: mutation,
    onCompleted: onCompleted,
    onError: onError
  }, function (mutation, _ref) {
    var error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      validate: validate,
      onSubmit: function onSubmit(values) {
        return _onSubmit(values, mutation);
      },
      initialValues: initialValues
    }, function (formProps) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (child) {
        if (typeof child.type !== 'function') return child;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, formProps, {
          mutation: mutation
        }));
      }));
    });
  });
};

AdmixForm = Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])(AdmixForm);
/* harmony default export */ __webpack_exports__["a"] = (AdmixForm);

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iC29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./lib/actions/actionsTypes.js
var actionsTypes = __webpack_require__("Mu3t");

// CONCATENATED MODULE: ./lib/actions/auth.js



var SET_LOGIN = actionsTypes["a" /* default */].SET_LOGIN;

var auth_login = function login(_ref) {
  var email = _ref.email,
      password = _ref.password;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  //  const { accessToken, adminToken } = api.login({email, password});
                  data = {
                    isLoggedIn: true,
                    accessToken: "sfefew",
                    adminToken: "sfefew"
                  };
                  dispatch({
                    type: SET_LOGIN,
                    data: data
                  });
                } catch (error) {
                  console.log("error: ", error);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var logout = function logout() {
  return function (dispatch) {
    var data = {
      isLoggedIn: false,
      accessToken: null,
      adminToken: null
    };
    dispatch({
      type: SET_LOGIN,
      data: data
    });
  };
};

/* harmony default export */ var auth = ({
  login: auth_login,
  logout: logout
});
// CONCATENATED MODULE: ./lib/actions/app.js

var SET_SELECTED = actionsTypes["a" /* default */].SET_SELECTED;

var setSelected = function setSelected(_ref) {
  var selectItem = _ref.selectItem,
      value = _ref.value;
  return function (dispatch) {
    try {
      dispatch({
        type: SET_SELECTED,
        selectItem: selectItem,
        value: value
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };
};

/* harmony default export */ var app = ({
  setSelected: setSelected
});
// CONCATENATED MODULE: ./lib/actions/index.js



/* harmony default export */ var actions = __webpack_exports__["a"] = (Object(objectSpread["a" /* default */])({}, auth, app));

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "n0Fv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-vertical-ad34b9e17fbde6e11e9c60eaeb707966.png";

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vQ70":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAMAAADarb8dAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABblBMVEUAAABlrsleqsJ9ss4tjbUsl7eBwNBWlblUt8lzocMpfK0korpwytJJhLNAt8Npkr0ja6gXrbtk1NZrkLcnbqlfzc5fg7ZjiLVSirUwsL5tzc9d2dh3jbowXaQ3aqhznb8qfq5kx9A9xsYavL921ddYb61gj7lYmb4xo7puydAbvsFIzMxyf7YyTp8zdq5zpMMpibFiustHvMQXvb9v1NZLXKZZlLlYo78rlbVsvssfsL47xMhnda0vf69trsVfrsVIrb1h19VCU6EqP5owTJ8sWqMpYqUjbKgcdqtLlLUjorkXrLoUurwSu7wSu70NubspwsIYga4Yj7IchK8dkbQbdKoehbAfkrQYnbcgd6sdn7cfd6sen7gSqrkZnrcanrciUqAjXqMZgq4bkbQJuLsmVaEkX6QZkLMOt7wQu74oRpwnVqInYaUeaacRub0Su74LubwtQpssSZ4mVaIga6gTq7sUur4Ru74Qu70AAACDnYSlAAAAUXRSTlMASU0F1tsHZ20U5ukYjpUt+/s4Gu9GU0Jxux1FB9/RDOI5guYKckhivRDqeRrs0AvbPnPvHplVYM4R6KA73x4mfECg4uLl4uHlV8nh4eHh46XFAEmFAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAKlJREFUCNdjYIAARiYGFMDMwsqGIsAeGMSBzOfkCg7h5kES4A0NC4/gQ/D5BSLDwqMEheACwiLRYeExsaIwvpi4BFBLnKSUNIQvIysnrxAcHq+opKwCFlBNSFRTT0rW0NRK0QbxdXRT0/T0DdINjTIyjU2AAqZZ2Tm5ZuYWllZ5+QXWDAw2hUXFOSW2dvYOpWX55RWODE7OLq5u7h6eDF7ePr5+/gEM6AAAAgggPsvaFTwAAAAASUVORK5CYII="

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wDHI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var Popup =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Popup, _React$PureComponent);

  function Popup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "closePopup", function () {
      var togglePopup = _this.props.togglePopup;

      if (!togglePopup && "production" === "development") {
        console.error("Warning! No togglePopup() function was provided to Popup");
      } else {
        togglePopup();
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Popup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          showPopup = _this$props.showPopup,
          id = _this$props.id;

      if (!showPopup) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: id,
        className: "popup"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "popup-inner"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "popup-x",
        onClick: this.closePopup
      }, "X"), children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "popup-bg",
        onClick: this.closePopup.bind(this)
      }));
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

Popup.defaultProps = {
  showPopup: false
};
/* harmony default export */ __webpack_exports__["a"] = (Popup);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yubH":
/***/ (function(module, exports) {



/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });