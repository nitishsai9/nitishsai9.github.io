(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");


var _this = undefined,
    _jsxFileName = "D:\\site-glitch\\components\\avatar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Avatar"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    src: "https://avatars2.githubusercontent.com/u/30683073?s=460&u=3a8c979ba5001c8d816536451563bed786e85a82&v=4",
    alt: "Nitish avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }));
});

/***/ }),

/***/ "./components/fonts.css":
/*!******************************!*\
  !*** ./components/fonts.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/fonts.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/fonts.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./fonts.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/fonts.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/icon.js":
/*!****************************!*\
  !*** ./components/icon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _hackclub_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hackclub/icons */ "./node_modules/@hackclub/icons/dist/index.js");
/* harmony import */ var _hackclub_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hackclub_icons__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "D:\\site-glitch\\components\\icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var sx = _ref.sx,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["sx"]);

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    sx: _objectSpread({
      lineHeight: 0
    }, sx),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(_hackclub_icons__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  })));
});

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: ColorButton, Header, Footer, Rainbow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorButton", function() { return ColorButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rainbow", function() { return Rainbow; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "./components/icon.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar */ "./components/avatar.js");





var _this = undefined,
    _jsxFileName = "D:\\site-glitch\\components\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ColorButton = function ColorButton(_ref) {
  var sx = _ref.sx,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["sx"]);

  var _useColorMode = Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["useColorMode"])(),
      _useColorMode2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useColorMode, 2),
      mode = _useColorMode2[0],
      setMode = _useColorMode2[1];

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["IconButton"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    sx: _objectSpread({
      color: 'primary',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      }
    }, sx),
    onClick: function onClick() {
      return setMode(mode === 'dark' ? 'light' : 'dark');
    },
    title: "Reverse color scheme",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx("svg", {
    viewBox: "0 0 32 32",
    width: "24",
    height: "24",
    fill: "currentcolor",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("circle", {
    cx: "16",
    cy: "16",
    r: "14",
    fill: "none",
    stroke: "currentcolor",
    strokeWidth: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("path", {
    d: "M 16 0 A 16 16 0 0 0 16 32 z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })));
};
var Header = function Header() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    as: "header",
    sx: {
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: 4,
      'a + a': {
        mx: [2, 3]
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }, __jsx(_avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 48,
    sx: {
      mr: 3
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "@Nitishsai")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      mx: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/resume",
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "Resume")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://www.hackthebox.eu/profile/42391",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, "Hackthebox"), __jsx(ColorButton, {
    onClick: function onClick(e) {
      var next = mode === 'dark' ? 'light' : 'dark';
      setMode(next);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }));
};
var Footer = function Footer() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    as: "footer",
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 5,
      a: {
        color: 'primary',
        mx: 2
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }
  }, __jsx(_avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 48,
    sx: {
      height: 48,
      mr: 3
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://twitter.com/Nitishsaik",
    title: "Twitter",
    target: "_blank",
    variant: "styles.NavLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    glyph: "twitter",
    size: 36,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "https://github.com/nitishsai9",
    title: "GitHub",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    glyph: "github",
    size: 36,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "http://instagram.com/nitish_sai",
    title: "Instagram",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    glyph: "instagram",
    size: 36,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    href: "mailto:kommaraju.nitish.9@gmail.com",
    title: "Email",
    variant: "styles.NavLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    glyph: "email",
    size: 36,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  })));
};
var colors = {
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda'
};
var Rainbow = function Rainbow() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      width: '100%',
      height: '4rem',
      display: 'block',
      backgroundImage: "linear-gradient(".concat(colors.red, " 0%, ").concat(colors.red, " 16.6666%, ").concat(colors.orange, " 16.6666%, ").concat(colors.orange, " 33.333%, ").concat(colors.yellow, " 33.333%, ").concat(colors.yellow, " 50%, ").concat(colors.green, " 50%, ").concat(colors.green, " 66.6666%, ").concat(colors.blue, " 66.6666%, ").concat(colors.blue, " 83.3333%, #8067C3 83.3333%, #8067C3 100%)")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 3
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    variant: "copy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, props.children), __jsx(Footer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }));
});

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "D:\\site-glitch\\components\\meta.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var makeTitle = function makeTitle(title, name) {
  return title === name ? title : "".concat(title, " \u2013 ").concat(name);
};

var Meta = function Meta(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'Nitish sai kommaraju' : _ref$name,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '@Nitish' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? 'Full stack developer based in Visakhapatnam,Indai. NYU ’23,Ctf player and hobbiest hacker' : _ref$description,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? 'https://avatars2.githubusercontent.com/u/30683073?s=460&u=3a8c979ba5001c8d816536451563bed786e85a82&v=4' : _ref$image,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ff2467' : _ref$color;
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }, __jsx("meta", {
    key: "og_type",
    property: "og:type",
    content: "website",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), __jsx("meta", {
    key: "og_site",
    property: "og:site_name",
    content: name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx("meta", {
    key: "og_url",
    property: "og:url",
    content: "https://nitishsaikommraju.ml/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx("meta", {
    key: "tw_site",
    name: "twitter:site",
    content: "@nitish",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, makeTitle(title, name)), __jsx("meta", {
    key: "og_title",
    property: "og:title",
    content: makeTitle(title, name),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx("meta", {
    key: "tw_title",
    name: "twitter:title",
    content: makeTitle(title, name),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), description && [__jsx("meta", {
    key: "desc",
    name: "description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("meta", {
    key: "og_desc",
    property: "og:description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("meta", {
    key: "tw_desc",
    name: "twitter:description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  })], image && [__jsx("meta", {
    key: "og_img",
    property: "og:image",
    content: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("meta", {
    key: "tw_card",
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("meta", {
    key: "tw_img",
    name: "twitter:image",
    content: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  })], __jsx("meta", {
    key: "theme_color",
    name: "theme-color",
    content: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx("meta", {
    key: "tile_color",
    name: "msapplication-TileColor",
    content: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("script", {
    key: "heap",
    type: "text/javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||\"https:\"===document.location.protocol,a=document.createElement(\"script\");a.type=\"text/javascript\",a.async=!0,a.src=(r?\"https:\":\"http:\")+\"//cdn.heapanalytics.com/js/heap-\"+e+\".js\";var n=document.getElementsByTagName(\"script\")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=[\"addEventProperties\",\"addUserProperties\",\"clearEventProperties\",\"identify\",\"resetIdentity\",\"removeEventProperty\",\"setEventProperties\",\"track\",\"unsetEventProperty\"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};heap.load(\"2803421074\");"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: palette, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _hackclub_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hackclub/theme */ "./node_modules/@hackclub/theme/dist/index.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var palette = {
  darker: '#121217',
  dark: '#355C7D',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  fuschia: '#ff64ffda',
  pink: '#ff707a',
  lilac: '#849de1',
  yellow: '#ffaf26',
  light: '#ffeaeb',
  indigo: '#3b47a8',
  purple: '#8057c5',
  twitter: '#1da1f2',
  facebook: '#3b5998',
  instagram: '#e1306c'
};

var theme = _objectSpread({}, _hackclub_theme__WEBPACK_IMPORTED_MODULE_1__["default"], {
  colors: _objectSpread({}, palette, {
    text: palette.light,
    background: '#0a3d62',
    elevated: palette.light,
    elevatedText: palette.indigo,
    primary: palette.fuschia,
    secondary: palette.lilac,
    muted: palette.lilac,
    accent: palette.yellow,
    modes: {
      dark: {
        text: palette.light,
        background: '#0c0b0a',
        elevated: palette.darkless,
        elevatedText: palette.light,
        primary: palette.fuschia,
        secondary: '#69F0AE',
        accent: '#69F0AE',
        muted: palette.muted
      }
    }
  }),
  fonts: {
    display: 'WhyteInktrap, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body: 'Whyte, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
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

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/core/package.json":
/*!*************************************************!*\
  !*** ./node_modules/@emotion/core/package.json ***!
  \*************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bundleDependencies, dependencies, deprecated, description, devDependencies, files, license, main, module, name, peerDependencies, preconstruct, publishConfig, repository, scripts, types, umd:main, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@emotion/core@^10.0.0\",\"_id\":\"@emotion/core@10.0.28\",\"_inBundle\":false,\"_integrity\":\"sha512-pH8UueKYO5jgg0Iq+AmCLxBsvuGtvlmiDCOuv8fGNYn3cowFpLN98L8zO56U0H1PjDIyAlXymgL3Wu7u7v6hbA==\",\"_location\":\"/@emotion/core\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"@emotion/core@^10.0.0\",\"name\":\"@emotion/core\",\"escapedName\":\"@emotion%2fcore\",\"scope\":\"@emotion\",\"rawSpec\":\"^10.0.0\",\"saveSpec\":null,\"fetchSpec\":\"^10.0.0\"},\"_requiredBy\":[\"/@theme-ui/color-modes\",\"/@theme-ui/components\",\"/@theme-ui/core\",\"/@theme-ui/mdx\",\"/@theme-ui/theme-provider\"],\"_resolved\":\"https://registry.npmjs.org/@emotion/core/-/core-10.0.28.tgz\",\"_shasum\":\"bb65af7262a234593a9e952c041d0f1c9b9bef3d\",\"_spec\":\"@emotion/core@^10.0.0\",\"_where\":\"D:\\\\site-glitch\\\\node_modules\\\\@theme-ui\\\\color-modes\",\"author\":{\"name\":\"mitchellhamilton\",\"email\":\"mitchell@mitchellhamilton.me\"},\"browser\":{\"./dist/core.cjs.js\":\"./dist/core.browser.cjs.js\",\"./dist/core.esm.js\":\"./dist/core.browser.esm.js\"},\"bundleDependencies\":false,\"dependencies\":{\"@babel/runtime\":\"^7.5.5\",\"@emotion/cache\":\"^10.0.27\",\"@emotion/css\":\"^10.0.27\",\"@emotion/serialize\":\"^0.11.15\",\"@emotion/sheet\":\"0.9.4\",\"@emotion/utils\":\"0.11.3\"},\"deprecated\":false,\"description\":\"> Simple styling in React.\",\"devDependencies\":{\"@emotion/styled\":\"^10.0.27\",\"@types/react\":\"^16.8.20\",\"dtslint\":\"^0.3.0\",\"emotion\":\"^10.0.27\",\"emotion-server\":\"^10.0.27\",\"emotion-theming\":\"^10.0.27\",\"html-tag-names\":\"^1.1.2\",\"react\":\"^16.5.2\",\"svg-tag-names\":\"^1.1.1\"},\"files\":[\"src\",\"dist\",\"types\"],\"license\":\"MIT\",\"main\":\"dist/core.cjs.js\",\"module\":\"dist/core.esm.js\",\"name\":\"@emotion/core\",\"peerDependencies\":{\"react\":\">=16.3.0\"},\"preconstruct\":{\"umdName\":\"emotionCore\"},\"publishConfig\":{\"access\":\"public\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/emotion-js/emotion/tree/master/packages/core\"},\"scripts\":{\"test:typescript\":\"dtslint types\"},\"types\":\"types/index.d.ts\",\"umd:main\":\"dist/core.umd.min.js\",\"version\":\"10.0.28\"}");

/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( true && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/styled/dist/styled.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/styled/dist/styled.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"].bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ __webpack_exports__["default"] = (newStyled);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/@hackclub/icons/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@hackclub/icons/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.glyphNames = exports.glyphs = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _glyphs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var glyphs = (_glyphs = {
  analytics: _react["default"].createElement("g", {
    transform: "translate(9 9)"
  }, _react["default"].createElement("path", {
    d: "M 8 1C 8 0.447693 8.44772 0 9 0C 9.55228 0 10 0.447693 10 1L 10 13C 10 13.5523 9.55228 14 9 14C 8.44772 14 8 13.5523 8 13L 8 1ZM 5 4C 4.44772 4 4 4.44769 4 5L 4 13C 4 13.5523 4.44772 14 5 14C 5.55228 14 6 13.5523 6 13L 6 5C 6 4.44769 5.55228 4 5 4ZM 1 8C 0.447716 8 0 8.44769 0 9L 0 13C 0 13.5523 0.447716 14 1 14C 1.55228 14 2 13.5523 2 13L 2 9C 2 8.44769 1.55228 8 1 8ZM 13 6C 12.4477 6 12 6.44769 12 7L 12 13C 12 13.5523 12.4477 14 13 14C 13.5523 14 14 13.5523 14 13L 14 7C 14 6.44769 13.5523 6 13 6Z"
  })),
  announcement: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M25.6581 10.5613C26.0345 10.3103 26.1925 9.83076 26.0039 9.4195C24.2665 5.63117 20.4405 3 16 3C11.5595 3 7.73351 5.63117 5.99611 9.4195C5.80749 9.83077 5.96545 10.3103 6.34191 10.5613C6.88084 10.9206 7.61467 10.6606 7.8973 10.0778C9.35485 7.07228 12.4354 5 16 5C19.5646 5 22.6451 7.07228 24.1027 10.0778C24.3853 10.6606 25.1191 10.9206 25.6581 10.5613Z"
  }), _react["default"].createElement("path", {
    d: "M22.3049 12.7967C22.6196 12.5869 22.7778 12.2027 22.6613 11.8429C21.7519 9.03244 19.1133 7 16 7C12.8867 7 10.2481 9.03244 9.33867 11.8429C9.22223 12.2027 9.38038 12.5869 9.69507 12.7967C10.2797 13.1865 11.0964 12.79 11.3582 12.138C12.0967 10.2987 13.8967 9 16 9C18.1033 9 19.9033 10.2987 20.6418 12.138C20.9036 12.79 21.7203 13.1865 22.3049 12.7967Z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15ZM16 17C17.6569 17 19 15.6569 19 14C19 12.3431 17.6569 11 16 11C14.3431 11 13 12.3431 13 14C13 15.6569 14.3431 17 16 17Z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.2447 17.8043C18.3714 18.5499 17.2383 19 16 19C14.7618 19 13.6287 18.5499 12.7554 17.8044L9.0637 27.6489C8.86978 28.166 9.13178 28.7424 9.6489 28.9363C10.166 29.1302 10.7424 28.8682 10.9364 28.3511L12.0655 25.3401C13.2981 25.7676 14.6219 25.9999 16 25.9999C17.3781 25.9999 18.702 25.7676 19.9345 25.34L21.0637 28.3511C21.2576 28.8682 21.834 29.1302 22.3512 28.9363C22.8683 28.7424 23.1303 28.166 22.9364 27.6489L19.2447 17.8043ZM12.7682 23.4662L13.8225 20.6546C14.5079 20.8788 15.2398 20.9999 16 20.9999C16.7602 20.9999 17.4922 20.8788 18.1775 20.6546L19.2318 23.4662C18.2181 23.8122 17.1309 23.9999 16 23.9999C14.8691 23.9999 13.782 23.8122 12.7682 23.4662Z"
  })),
  attachment: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M7.17,21.67c-1.381,2.392 -0.562,5.45 1.83,6.83c2.391,1.381 5.449,0.562 6.83,-1.83l4,-6.928l1,-1.732l4,-6.928c1.381,-2.392 0.561,-5.45 -1.83,-6.83c-2.392,-1.381 -5.45,-0.562 -6.83,1.83l-0.5,0.866c-0.276,0.478 -0.113,1.09 0.366,1.366c0.478,0.276 1.09,0.112 1.366,-0.366l0.5,-0.866c0.828,-1.435 2.663,-1.927 4.098,-1.098c1.435,0.828 1.926,2.663 1.098,4.098l-0.5,0.866l-3.5,6.062l-1,1.732l-4,6.928c-0.829,1.435 -2.663,1.927 -4.098,1.098c-1.435,-0.828 -1.927,-2.663 -1.098,-4.098l2,-3.464l4,-6.928c0.276,-0.478 0.887,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-4,6.928c-0.276,0.479 -0.112,1.09 0.366,1.366c0.478,0.276 1.09,0.113 1.366,-0.366l4,-6.928c0.828,-1.435 0.337,-3.27 -1.098,-4.098c-1.435,-0.829 -3.27,-0.337 -4.098,1.098l-4,6.928l-2,3.464Z"
  })),
  bug: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M12.121,4.693c-0.39,-0.391 -1.023,-0.391 -1.414,0c-0.39,0.39 -0.39,1.024 0,1.414l1.414,1.414c0.036,0.036 0.074,0.069 0.113,0.098c-0.245,0.672 -0.15,1.34 0.495,1.824c0.585,0.439 1.624,0.726 3.271,0.726c1.647,0 2.685,-0.287 3.271,-0.726c0.639,-0.479 0.738,-1.139 0.502,-1.805c0.049,-0.034 0.096,-0.073 0.14,-0.117l1.414,-1.414c0.391,-0.39 0.391,-1.024 0,-1.414c-0.39,-0.391 -1.024,-0.391 -1.414,0l-1.346,1.346c-0.745,-0.618 -1.698,-1.053 -2.567,-1.053c-0.862,0 -1.806,0.427 -2.548,1.037l-1.331,-1.33Zm3.879,3.476c-0.761,0 -1.289,-0.072 -1.638,-0.161c-0.021,-0.005 -0.041,-0.01 -0.06,-0.016c0.133,-0.17 0.331,-0.371 0.602,-0.563c0.465,-0.329 0.881,-0.443 1.096,-0.443c0.215,0 0.631,0.114 1.096,0.443c0.271,0.192 0.47,0.393 0.602,0.563c-0.019,0.006 -0.039,0.011 -0.06,0.016c-0.349,0.089 -0.877,0.161 -1.638,0.161Z"
  }), _react["default"].createElement("path", {
    d: "M6.866,10.669c-0.478,-0.276 -1.09,-0.113 -1.366,0.366c-0.276,0.478 -0.112,1.09 0.366,1.366l2.993,1.728c-0.469,0.878 -0.689,1.911 -0.787,3.04l-3.072,0c-0.552,0 -1,0.447 -1,1c0,0.552 0.448,1 1,1l3,0c0,1.04 0.198,2.033 0.559,2.945l-2.693,1.555c-0.478,0.276 -0.642,0.888 -0.366,1.366c0.276,0.478 0.888,0.642 1.366,0.366l2.658,-1.535c1.454,2.002 3.813,3.303 6.476,3.303c2.663,0 5.022,-1.301 6.476,-3.303l2.658,1.535c0.478,0.276 1.09,0.112 1.366,-0.366c0.276,-0.478 0.112,-1.09 -0.366,-1.366l-2.694,-1.555c0.362,-0.912 0.56,-1.905 0.56,-2.945l3,0c0.552,0 1,-0.448 1,-1c0,-0.553 -0.448,-1 -1,-1l-3.072,0c-0.098,-1.129 -0.318,-2.162 -0.787,-3.04l2.993,-1.728c0.478,-0.276 0.642,-0.888 0.366,-1.366c-0.276,-0.479 -0.888,-0.642 -1.366,-0.366l-3.315,1.914c-0.581,-0.436 -1.314,-0.783 -2.238,-1.024c-0.969,-0.253 -2.148,-0.39 -3.581,-0.39c-1.433,0 -2.612,0.137 -3.581,0.39c-0.924,0.241 -1.657,0.588 -2.238,1.024l-3.315,-1.914Zm15.134,8.5c0,3.313 -2.686,6 -6,6c-3.314,0 -6,-2.687 -6,-6c0,-2.245 0.211,-3.603 0.851,-4.459c0.532,-0.71 1.75,-1.541 5.149,-1.541c3.399,0 4.617,0.831 5.149,1.541c0.64,0.856 0.851,2.214 0.851,4.459Z"
  })),
  'bug-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M10.707,4.693c0.391,-0.391 1.024,-0.391 1.414,0l1.331,1.33c0.742,-0.61 1.686,-1.037 2.548,-1.037c0.869,0 1.822,0.435 2.567,1.053l1.346,-1.346c0.39,-0.391 1.024,-0.391 1.414,0c0.391,0.39 0.391,1.024 0,1.414l-1.414,1.414c-0.044,0.044 -0.091,0.083 -0.14,0.117c0.453,1.275 -0.328,2.531 -3.773,2.531c-3.463,0 -4.234,-1.268 -3.766,-2.55c-0.039,-0.029 -0.077,-0.062 -0.113,-0.098l-1.414,-1.414c-0.39,-0.39 -0.39,-1.024 0,-1.414Z"
  }), _react["default"].createElement("path", {
    d: "M23.441,22.114c0.361,-0.912 0.559,-1.905 0.559,-2.945l3,0c0.552,0 1,-0.448 1,-1c0,-0.553 -0.448,-1 -1,-1l-3.072,0c-0.098,-1.129 -0.318,-2.162 -0.787,-3.04l2.993,-1.728c0.478,-0.276 0.642,-0.888 0.366,-1.366c-0.276,-0.479 -0.888,-0.642 -1.366,-0.366l-3.315,1.914c-1.19,-0.892 -3.019,-1.414 -5.819,-1.414c-2.8,0 -4.629,0.522 -5.819,1.414l-3.315,-1.914c-0.478,-0.276 -1.09,-0.113 -1.366,0.366c-0.276,0.478 -0.112,1.09 0.366,1.366l2.993,1.728c-0.469,0.878 -0.689,1.911 -0.787,3.04l-3.072,0c-0.552,0 -1,0.447 -1,1c0,0.552 0.448,1 1,1l3,0c0,1.04 0.198,2.033 0.559,2.945l-2.693,1.555c-0.478,0.276 -0.642,0.887 -0.366,1.366c0.276,0.478 0.888,0.642 1.366,0.366l2.658,-1.535c1.454,2.002 3.813,3.303 6.476,3.303c2.663,0 5.022,-1.301 6.476,-3.303l2.658,1.535c0.478,0.276 1.09,0.112 1.366,-0.366c0.276,-0.479 0.112,-1.09 -0.366,-1.366l-2.694,-1.555Z"
  })),
  channel: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M14.287,10.941c0.143,-0.533 0.692,-0.85 1.225,-0.707c0.534,0.143 0.85,0.692 0.707,1.225l-0.406,1.517l2.052,0l0.545,-2.035c0.143,-0.533 0.691,-0.85 1.225,-0.707c0.533,0.143 0.85,0.692 0.707,1.225l-0.407,1.517l1.085,0c0.553,0 1,0.447 1,1c0,0.552 -0.447,1 -1,1l-1.62,0l-0.536,2l1.156,0c0.553,0 1,0.447 1,1c0,0.552 -0.447,1 -1,1l-1.692,0l-0.574,2.142c-0.143,0.534 -0.692,0.85 -1.225,0.707c-0.534,-0.143 -0.85,-0.691 -0.707,-1.224l0.435,-1.625l-2.052,0l-0.574,2.142c-0.143,0.534 -0.691,0.85 -1.225,0.707c-0.533,-0.143 -0.85,-0.691 -0.707,-1.224l0.436,-1.625l-1.115,0c-0.552,0 -1,-0.448 -1,-1c0,-0.553 0.448,-1 1,-1l1.651,0l0.535,-2l-1.186,0c-0.552,0 -1,-0.448 -1,-1c0,-0.553 0.448,-1 1,-1l1.722,0l0.545,-2.035Zm2.506,6.035l0.536,-2l-2.052,0l-0.536,2l2.052,0Z"
  })),
  'channel-private': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M18.186,9.144c-0.502,-0.122 -1.139,-0.145 -2.186,-0.144c-1.047,-0.001 -1.684,0.022 -2.186,0.144l-0.013,0.002c-0.207,0.044 -0.226,0.048 -0.324,0.111c-0.017,0.007 -0.027,0.011 -0.034,0.012c-0.001,0.005 -0.005,0.013 -0.012,0.024c-0.034,0.043 -0.179,0.265 -0.285,1.008c-0.072,0.487 -0.111,1.06 -0.13,1.773c0.818,-0.057 1.802,-0.074 2.984,-0.074c1.182,0 2.166,0.017 2.984,0.074c-0.019,-0.713 -0.058,-1.286 -0.13,-1.773c-0.106,-0.743 -0.251,-0.965 -0.285,-1.008c-0.007,-0.011 -0.011,-0.019 -0.012,-0.024c-0.007,-0.001 -0.017,-0.005 -0.034,-0.012c-0.098,-0.063 -0.117,-0.067 -0.324,-0.111l-0.013,-0.002Zm2.805,3.252c-0.091,-4.83 -0.908,-5.396 -4.991,-5.396c-4.083,0 -4.9,0.566 -4.991,5.396c-1.808,0.57 -2.009,1.931 -2.009,5.104c0,5 0.5,5.5 7,5.5c6.5,0 7,-0.5 7,-5.5c0,-3.173 -0.201,-4.534 -2.009,-5.104Zm-9.991,5.104c0,-1.218 0.018,-1.992 0.142,-2.58c0.048,-0.261 0.059,-0.309 0.13,-0.428c0.009,-0.022 0.013,-0.035 0.014,-0.043c0.005,-0.001 0.013,-0.005 0.026,-0.012c0.041,-0.033 0.275,-0.189 1.11,-0.297c0.857,-0.115 1.978,-0.14 3.578,-0.14c1.6,0 2.721,0.025 3.578,0.14c0.835,0.108 1.069,0.264 1.11,0.297c0.013,0.007 0.021,0.011 0.026,0.012c0.001,0.008 0.005,0.021 0.014,0.043c0.071,0.119 0.082,0.167 0.13,0.428c0.124,0.588 0.142,1.362 0.142,2.58c0,1.218 -0.018,1.992 -0.142,2.58c-0.048,0.261 -0.059,0.309 -0.13,0.428c-0.009,0.022 -0.013,0.035 -0.014,0.043c-0.005,0.001 -0.013,0.005 -0.026,0.012c-0.041,0.033 -0.275,0.189 -1.11,0.297c-0.857,0.115 -1.978,0.14 -3.578,0.14c-1.6,0 -2.721,-0.025 -3.578,-0.14c-0.835,-0.108 -1.069,-0.264 -1.11,-0.297c-0.013,-0.007 -0.021,-0.011 -0.026,-0.012c-0.001,-0.008 -0.005,-0.021 -0.014,-0.043c-0.071,-0.119 -0.082,-0.167 -0.13,-0.428c-0.124,-0.588 -0.142,-1.362 -0.142,-2.58Z"
  })),
  checkbox: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M22.586,22.586c0.864,-0.864 1.414,-2.572 1.414,-6.586c0,-4.014 -0.55,-5.722 -1.414,-6.586c-0.864,-0.864 -2.572,-1.414 -6.586,-1.414c-4.014,0 -5.722,0.55 -6.586,1.414c-0.864,0.864 -1.414,2.572 -1.414,6.586c0,4.014 0.55,5.722 1.414,6.586c0.864,0.864 2.572,1.414 6.586,1.414c4.014,0 5.722,-0.55 6.586,-1.414Zm-6.586,3.414c8,0 10,-2 10,-10c0,-8 -2,-10 -10,-10c-8,0 -10,2 -10,10c0,8 2,10 10,10Z"
  })),
  checkmark: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,8c2.476,0 4.074,0.209 5.138,0.572c0.414,0.141 0.886,0.076 1.195,-0.234l0.509,-0.508c0.222,-0.222 0.186,-0.593 -0.092,-0.739c-1.527,-0.801 -3.704,-1.091 -6.75,-1.091c-8,0 -10,2 -10,10c0,8 2,10 10,10c8,0 10,-2 10,-10c0,-0.346 -0.004,-0.68 -0.012,-1.004c-0.01,-0.431 -0.526,-0.629 -0.831,-0.324l-0.863,0.862c-0.188,0.189 -0.294,0.444 -0.291,0.711c0.02,2.029 0.074,4.85 -1.417,6.341c-0.864,0.864 -2.572,1.414 -6.586,1.414c-4.014,0 -5.722,-0.55 -6.586,-1.414c-0.864,-0.864 -1.414,-2.572 -1.414,-6.586c0,-4.014 0.55,-5.722 1.414,-6.586c0.864,-0.864 2.572,-1.414 6.586,-1.414Z"
  }), _react["default"].createElement("path", {
    d: "M10.707,14.293c-0.39,0.39 -0.39,1.024 0,1.414l4.586,4.586c0.39,0.39 1.024,0.39 1.414,0l11.586,-11.586c0.39,-0.39 0.39,-1.024 0,-1.414l-0.336,-0.336c-0.39,-0.39 -1.024,-0.39 -1.414,0l-10.543,10.543l-3.543,-3.543c-0.39,-0.39 -1.024,-0.39 -1.414,0l-0.336,0.336Z"
  })),
  code: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M18.634,9.438c0.276,-0.478 0.888,-0.642 1.366,-0.366c0.478,0.276 0.642,0.888 0.366,1.366l-7,12.124c-0.276,0.478 -0.888,0.642 -1.366,0.366c-0.478,-0.276 -0.642,-0.888 -0.366,-1.366l7,-12.124Zm4.348,11.452c-0.354,-0.424 -0.296,-1.055 0.128,-1.408l0.245,-0.205c1.478,-1.236 2.216,-1.854 3.529,-3.277c-1.338,-1.451 -2.052,-2.045 -3.612,-3.347l-0.162,-0.135c-0.424,-0.353 -0.482,-0.984 -0.128,-1.408c0.353,-0.424 0.942,-0.423 1.409,-0.128c1.609,1.018 2.609,2.018 4.2,3.964c0.219,0.312 0.409,0.664 0.409,1.054c0,0.39 -0.19,0.742 -0.409,1.053c-1.591,1.947 -2.591,2.947 -4.2,3.964l-0.001,0.001c-0.424,0.354 -1.055,0.296 -1.408,-0.128Zm-14.092,-1.408c0.424,0.353 0.482,0.984 0.128,1.408c-0.353,0.424 -0.984,0.482 -1.408,0.128l-0.001,-0.001c-1.609,-1.017 -2.609,-2.017 -4.2,-3.964c-0.219,-0.311 -0.409,-0.663 -0.409,-1.053c0,-0.39 0.19,-0.742 0.409,-1.054c1.591,-1.946 2.591,-2.946 4.2,-3.964c0.467,-0.295 1.056,-0.296 1.409,0.128c0.354,0.424 0.296,1.055 -0.128,1.408l-0.162,0.135c-1.56,1.302 -2.274,1.896 -3.612,3.347c1.313,1.423 2.051,2.041 3.529,3.277l0.245,0.205Z"
  })),
  community: _react["default"].createElement("g", {
    fillRule: "non-zero"
  }, _react["default"].createElement("path", {
    d: "M14.821,15c0,-3 -1,-5 1,-5c2,0 1,2 1,5l0,2c0,3 1,5 -1,5c-2,0 -1,-2 -1,-5l0,-2Z"
  }), _react["default"].createElement("path", {
    d: "M16.187,14.634c2.598,-1.5 3.83,-3.367 4.83,-1.634c1,1.732 -1.232,1.866 -3.83,3.366l-1.732,1c-2.598,1.5 -3.83,3.366 -4.83,1.634c-1,-1.733 1.232,-1.866 3.83,-3.366l1.732,-1Z"
  }), _react["default"].createElement("path", {
    d: "M17.187,15.634c2.598,1.5 4.83,1.633 3.83,3.366c-1,1.732 -2.232,-0.134 -4.83,-1.634l-1.732,-1c-2.598,-1.5 -4.83,-1.634 -3.83,-3.366c1,-1.733 2.232,0.134 4.83,1.634l1.732,1Z"
  })),
  controls: _react["default"].createElement("path", {
    d: "M 3 15.7325C 3.5978 15.3867 4 14.7403 4 14C 4 13.2597 3.5978 12.6133 3 12.2675C 2.98457 12.2586 2.96901 12.2499 2.95332 12.2414C 2.66993 12.0875 2.34518 12 2 12C 1.63581 12 1.29436 12.0974 1.00024 12.2674L 1 12.2675C 0.402199 12.6133 0 13.2597 0 14C 0 14.7403 0.402199 15.3867 1 15.7325C 1.01543 15.7414 1.03099 15.7501 1.04668 15.7586C 1.33007 15.9125 1.65482 16 2 16C 2.36419 16 2.70564 15.9026 2.99976 15.7326L 3 15.7325ZM 3 1L 3 11.1707C 2.68722 11.0602 2.35064 11 2 11C 1.64936 11 1.31278 11.0602 1 11.1707L 1 1C 1 0.447723 1.44771 0 2 0C 2.55228 0 3 0.447723 3 1ZM 3 16.8293C 2.68722 16.9398 2.35064 17 2 17C 1.64936 17 1.31278 16.9398 1 16.8293L 1 19C 1 19.5523 1.44771 20 2 20C 2.55228 20 3 19.5523 3 19L 3 16.8293ZM 11 7.73245C 11.5978 7.38666 12 6.7403 12 6C 12 5.2597 11.5978 4.61334 11 4.26755C 10.9846 4.25864 10.969 4.24991 10.9533 4.24139C 10.6699 4.08746 10.3452 4 10 4C 9.63581 4 9.29436 4.09735 9.00024 4.26743L 9 4.26755C 8.4022 4.61334 8 5.2597 8 6C 8 6.7403 8.4022 7.38666 9 7.73245C 9.01543 7.74136 9.03099 7.75009 9.04668 7.75861C 9.33007 7.91254 9.65482 8 10 8C 10.3642 8 10.7056 7.90265 10.9998 7.73257L 11 7.73245ZM 11 1L 11 3.17072C 10.6872 3.06015 10.3506 3 10 3C 9.64936 3 9.31278 3.06015 9 3.17072L 9 1C 9 0.447723 9.44772 0 10 0C 10.5523 0 11 0.447723 11 1ZM 11 8.82928C 10.6872 8.93985 10.3506 9 10 9C 9.64936 9 9.31278 8.93985 9 8.82928L 9 19C 9 19.5523 9.44772 20 10 20C 10.5523 20 11 19.5523 11 19L 11 8.82928ZM 20 10C 20 10.7403 19.5978 11.3867 19 11.7325L 18.9998 11.7326C 18.7056 11.9026 18.3642 12 18 12C 17.6548 12 17.3301 11.9125 17.0467 11.7586C 17.031 11.7501 17.0154 11.7414 17 11.7325C 16.4022 11.3867 16 10.7403 16 10C 16 9.2597 16.4022 8.61334 17 8.26755L 17.0002 8.26743C 17.2944 8.09735 17.6358 8 18 8C 18.3452 8 18.6699 8.08746 18.9533 8.24139C 18.969 8.24991 18.9846 8.25861 19 8.26755C 19.5978 8.61334 20 9.2597 20 10ZM 19 7.17072L 19 1C 19 0.447723 18.5523 0 18 0C 17.4477 0 17 0.447723 17 1L 17 7.17072C 17.3128 7.06015 17.6494 7 18 7C 18.3506 7 18.6872 7.06015 19 7.17072ZM 18 13C 18.3506 13 18.6872 12.9398 19 12.8293L 19 19C 19 19.5523 18.5523 20 18 20C 17.4477 20 17 19.5523 17 19L 17 12.8293C 17.3128 12.9398 17.6494 13 18 13Z",
    transform: "matrix(0 1 -1 0 26 6)"
  }),
  "delete": _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M8.391 12.32c-.636-.131-1.248.368-1.213 1.016.808 14.714 1.271 14.711 7.681 14.669C15.22 28.003 15.6 28 16 28s.78.003 1.141.005c6.41.042 6.873.045 7.681-14.669.035-.648-.577-1.147-1.212-1.016a.975.975 0 0 0-.784.896c-.17 3.094-.323 5.51-.519 7.407-.266 2.584-.588 3.883-.95 4.566-.225.426-.422.586-1.067.701-.716.128-1.615.123-3.019.115h-.002a161.358 161.358 0 0 0-2.538 0h-.001c-1.405.008-2.304.013-3.02-.115-.645-.115-.842-.275-1.067-.701-.362-.683-.684-1.982-.95-4.566-.196-1.897-.349-4.313-.519-7.407a.975.975 0 0 0-.783-.896z"
  }), _react["default"].createElement("path", {
    d: "M6 10a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z",
    fillRule: "nonzero"
  }), _react["default"].createElement("path", {
    d: "M12.25 7.973C12.112 8.185 12 8.5 12 9h-2c0-.81.186-1.525.576-2.121.366-.536.963-1.006 1.525-1.271C13.24 5.087 14.687 5 16 5c1.313 0 2.76.087 3.899.608.562.265 1.158.735 1.525 1.271C21.814 7.475 22 8.19 22 9h-2c0-.5-.112-.815-.25-1.027-.161-.272-.324-.388-.684-.546C18.36 7.103 17.306 7 16 7c-1.306 0-2.36.103-3.066.427-.36.158-.523.274-.684.546z"
  }), _react["default"].createElement("path", {
    d: "M12.044 14.086a1 1 0 1 1 1.998-.087l.349 7.992a1 1 0 0 1-1.998.087l-.349-7.992zM17.956 13.999a1 1 0 0 1 1.998.087l-.348 7.993a1 1 0 0 1-1.999-.088l.349-7.992z",
    fillRule: "nonzero"
  })),
  'door-enter': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M13.707,15.293c0.391,0.39 0.391,1.024 0,1.414l-4,4c-0.39,0.391 -1.024,0.391 -1.414,0c-0.391,-0.39 -0.391,-1.024 0,-1.414l2.293,-2.293l-7.586,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l7.586,0l-2.293,-2.293c-0.391,-0.39 -0.391,-1.024 0,-1.414c0.39,-0.391 1.024,-0.391 1.414,0l4,4Z"
  }), _react["default"].createElement("path", {
    d: "M19.884,8c0,0 -0.001,0 -0.001,0c-1.7,-0.001 -2.86,0.045 -3.77,0.25c-0.005,0.001 -0.01,0.002 -0.015,0.003c-0.79,0.173 -1.104,0.409 -1.292,0.638c0,0 0,0.001 0,0.001c-0.23,0.282 -0.498,0.834 -0.679,2.043c0,0.001 0,0.002 0,0.003c-0.007,0.048 -0.015,0.097 -0.022,0.147c-0.072,0.516 -0.501,0.915 -1.022,0.915c-0.584,0 -1.049,-0.501 -0.973,-1.08c0.566,-4.332 2.406,-4.92 7.773,-4.92c7,0 8,1 8,10c0,9 -1,10 -8,10c-5.367,0 -7.207,-0.588 -7.773,-4.92c-0.076,-0.579 0.389,-1.08 0.973,-1.08c0.521,0 0.95,0.399 1.022,0.915c0.007,0.05 0.015,0.099 0.022,0.147c0,0.001 0,0.002 0,0.003c0.181,1.209 0.449,1.762 0.679,2.044l0,0c0.188,0.229 0.502,0.465 1.292,0.638c0.005,0.001 0.01,0.002 0.015,0.003c0.91,0.204 2.07,0.25 3.77,0.25c0,0 0.001,0 0.001,0c1.7,0 2.86,-0.046 3.77,-0.25c0.005,-0.001 0.01,-0.002 0.015,-0.003c0.79,-0.173 1.104,-0.409 1.291,-0.638l0.001,0c0.23,-0.282 0.498,-0.835 0.678,-2.043c0.001,-0.001 0.001,-0.003 0.001,-0.005c0.189,-1.247 0.244,-2.848 0.243,-5.061c0,0 0,0 0,0c0.001,-2.213 -0.054,-3.814 -0.243,-5.061c0,-0.002 0,-0.004 -0.001,-0.005c-0.18,-1.208 -0.448,-1.76 -0.678,-2.042c0,0 0,-0.001 -0.001,-0.001c-0.187,-0.229 -0.501,-0.465 -1.291,-0.638c-0.005,-0.001 -0.01,-0.002 -0.015,-0.003c-0.91,-0.205 -2.07,-0.251 -3.77,-0.25Z"
  })),
  'door-leave': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M27.708,15.293c0.39,0.39 0.39,1.024 0,1.414l-4,4c-0.391,0.391 -1.024,0.391 -1.415,0c-0.39,-0.39 -0.39,-1.024 0,-1.414l2.293,-2.293l-11.586,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l11.586,0l-2.293,-2.293c-0.39,-0.39 -0.39,-1.024 0,-1.414c0.391,-0.391 1.024,-0.391 1.415,0l4,4Z"
  }), _react["default"].createElement("path", {
    d: "M11.999,8c0.001,0 0.001,0 0.002,0c1.699,-0.001 2.859,0.045 3.77,0.25c0.005,0.001 0.01,0.002 0.015,0.003c0.789,0.173 1.103,0.409 1.291,0.638c0,0 0,0.001 0,0.001c0.231,0.282 0.498,0.834 0.679,2.043c0,0.001 0,0.002 0.001,0.003c0.007,0.048 0.014,0.097 0.021,0.147c0.072,0.516 0.501,0.915 1.022,0.915c0.584,0 1.049,-0.501 0.973,-1.08c-0.566,-4.332 -2.405,-4.92 -7.773,-4.92c-7,0 -8,1 -8,10c0,9 1,10 8,10c5.368,0 7.207,-0.588 7.773,-4.92c0.076,-0.579 -0.389,-1.08 -0.973,-1.08c-0.521,0 -0.95,0.399 -1.022,0.915c-0.007,0.05 -0.014,0.099 -0.021,0.147c-0.001,0.001 -0.001,0.002 -0.001,0.003c-0.181,1.209 -0.448,1.762 -0.679,2.044l0,0c-0.188,0.229 -0.502,0.465 -1.291,0.638c-0.005,0.001 -0.01,0.002 -0.015,0.003c-0.911,0.204 -2.071,0.25 -3.77,0.25c-0.001,0 -0.001,0 -0.002,0c-1.699,0 -2.859,-0.046 -3.77,-0.25c-0.005,-0.001 -0.01,-0.002 -0.015,-0.003c-0.789,-0.173 -1.103,-0.409 -1.291,-0.638l0,0c-0.231,-0.282 -0.498,-0.835 -0.679,-2.043c0,-0.001 0,-0.003 -0.001,-0.005c-0.189,-1.247 -0.243,-2.848 -0.243,-5.061c0,0 0,0 0,0c0,-2.213 0.054,-3.814 0.243,-5.061c0.001,-0.002 0.001,-0.004 0.001,-0.005c0.181,-1.208 0.448,-1.76 0.679,-2.042c0,0 0,-0.001 0,-0.001c0.188,-0.229 0.502,-0.465 1.291,-0.638c0.005,-0.001 0.01,-0.002 0.015,-0.003c0.911,-0.205 2.071,-0.251 3.77,-0.25Z"
  })),
  down: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M21.934,25.636c-1.478,0.284 -3.354,0.365 -5.934,0.364c-2.58,0.001 -4.456,-0.08 -5.934,-0.364c-1.402,-0.264 -2.137,-0.66 -2.589,-1.113c-0.453,-0.452 -0.849,-1.187 -1.113,-2.589c-0.284,-1.478 -0.365,-3.354 -0.364,-5.934c-0.001,-2.58 0.08,-4.456 0.364,-5.934c0.264,-1.402 0.66,-2.137 1.113,-2.589c0.452,-0.453 1.187,-0.849 2.589,-1.113c1.478,-0.284 3.354,-0.364 5.934,-0.364c2.58,0 4.456,0.08 5.934,0.364c1.402,0.264 2.137,0.66 2.589,1.113c0.453,0.452 0.849,1.187 1.113,2.589c0.284,1.478 0.364,3.354 0.364,5.934c0,2.58 -0.08,4.456 -0.364,5.934c-0.264,1.402 -0.66,2.137 -1.113,2.589c-0.452,0.453 -1.187,0.849 -2.589,1.113Zm6.066,-9.636c0,10.5 -1.5,12 -12,12c-10.5,0 -12,-1.5 -12,-12c0,-10.5 1.5,-12 12,-12c10.5,0 12,1.5 12,12Z"
  }), _react["default"].createElement("path", {
    d: "M10.11,12.982c0.424,-0.354 1.055,-0.297 1.408,0.128c1.391,1.636 2.76,3.464 4.482,4.774c1.749,-1.331 3.085,-3.1 4.482,-4.774c0.353,-0.425 0.984,-0.482 1.408,-0.128c0.42,0.349 0.476,0.99 0.127,1.409c-1.505,1.799 -3.031,3.827 -4.964,5.2c-0.311,0.219 -0.663,0.409 -1.053,0.409c-0.39,0 -0.742,-0.19 -1.053,-0.409c-1.914,-1.359 -3.471,-3.41 -4.965,-5.201c-0.354,-0.424 -0.296,-1.055 0.128,-1.408Z"
  })),
  'down-caret': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 0.359841 9.01822C 0.784113 9.37178 1.41467 9.31446 1.76823 8.8902C 3.14518 7.2451 6.52975 3.42464 8.25002 2.11557C 9.99919 3.44663 13.335 7.21555 14.7318 8.8902C 15.0854 9.31446 15.7159 9.37178 16.1402 9.01822C 16.5645 8.66466 16.6215 8.03371 16.2679 7.60943C 14.7363 5.76983 11.2749 1.80977 9.30351 0.408618C 8.99227 0.190441 8.64018 0 8.25002 0C 7.85987 0 7.50778 0.190441 7.19654 0.408618C 5.26486 1.78153 1.73514 5.80788 0.232849 7.60856L 0.231804 7.60982C -0.12176 8.03409 -0.0644362 8.66466 0.359841 9.01822Z",
    transform: "translate(7.12506 20.6251) scale(1 -1)"
  })),
  'down-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,28c10.5,0 12,-1.5 12,-12c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12Zm-4.482,-14.89c-0.353,-0.424 -0.984,-0.482 -1.408,-0.128c-0.424,0.353 -0.482,0.984 -0.128,1.408l0.001,0.001c0.216,0.26 0.433,0.524 0.652,0.79c1.299,1.581 2.658,3.235 4.312,4.41c0.311,0.219 0.663,0.409 1.053,0.409c0.39,0 0.742,-0.19 1.053,-0.409c1.679,-1.192 2.988,-2.79 4.285,-4.374c0.226,-0.277 0.452,-0.553 0.68,-0.826c0.354,-0.425 0.296,-1.056 -0.128,-1.409c-0.424,-0.354 -1.055,-0.296 -1.408,0.128c-0.212,0.254 -0.423,0.511 -0.634,0.768c-1.178,1.434 -2.365,2.878 -3.848,4.006c-1.457,-1.108 -2.673,-2.584 -3.848,-4.009c-0.212,-0.257 -0.423,-0.513 -0.634,-0.765Z"
  })),
  edit: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M11.878,8.479c0.132,-0.242 0.346,-0.479 0.622,-0.479l1.5,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-1,0c-0.552,0 -1,0.448 -1,1l0,10c0,0.552 0.448,1 1,1l1,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-1.5,0c-0.276,0 -0.49,-0.237 -0.622,-0.48c-0.17,-0.31 -0.499,-0.52 -0.878,-0.52c-0.379,0 -0.708,0.21 -0.878,0.52c-0.132,0.243 -0.346,0.48 -0.622,0.48l-1.5,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l1,0c0.552,0 1,-0.448 1,-1l0,-10c0,-0.552 -0.448,-1 -1,-1l-1,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l1.5,0c0.276,0 0.49,0.237 0.622,0.479c0.17,0.311 0.499,0.521 0.878,0.521c0.379,0 0.708,-0.21 0.878,-0.521Zm-3.878,17.521c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l16,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-16,0Z"
  })),
  email: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M25.709,21.048c0.241,-1.212 0.291,-2.792 0.291,-5.048c0,-2.256 -0.05,-3.836 -0.291,-5.048c-0.216,-1.11 -0.533,-1.577 -0.864,-1.853c-0.384,-0.32 -1.094,-0.641 -2.597,-0.844c-1.531,-0.209 -3.522,-0.255 -6.248,-0.255c-2.725,0 -4.717,0.046 -6.248,0.255c-1.503,0.203 -2.213,0.524 -2.597,0.844c-0.331,0.276 -0.648,0.743 -0.864,1.853c-0.241,1.212 -0.291,2.792 -0.291,5.048c0,2.256 0.05,3.836 0.291,5.048c0.216,1.11 0.533,1.577 0.864,1.853c0.384,0.32 1.094,0.641 2.597,0.843c1.531,0.21 3.523,0.256 6.248,0.256c2.726,0 4.717,-0.046 6.248,-0.256c1.503,-0.202 2.213,-0.523 2.597,-0.843c0.331,-0.276 0.648,-0.743 0.864,-1.853Zm-9.709,4.952c11,0 12,-0.833 12,-10c0,-9.167 -1,-10 -12,-10c-11,0 -12,0.833 -12,10c0,9.167 1,10 12,10Zm-8.651,-14.774c0.411,-0.344 1.023,-0.289 1.366,0.124c1.335,1.601 5.617,5.318 7.285,6.592c1.696,-1.296 5.931,-4.963 7.285,-6.592c0.343,-0.413 0.955,-0.468 1.366,-0.124c0.412,0.344 0.467,0.957 0.124,1.37c-0.695,0.838 -2.02,2.129 -3.429,3.404c1.409,1.275 2.734,2.566 3.429,3.404c0.343,0.412 0.288,1.026 -0.124,1.37c-0.411,0.344 -1.023,0.289 -1.366,-0.124c-0.662,-0.798 -2.015,-2.083 -3.422,-3.339c-1.102,0.95 -2.137,1.789 -2.841,2.291c-0.302,0.213 -0.644,0.398 -1.022,0.398c-0.378,0 -0.72,-0.185 -1.021,-0.398c-0.691,-0.492 -1.728,-1.335 -2.835,-2.292c-1.414,1.264 -2.775,2.556 -3.429,3.34c-0.343,0.413 -0.955,0.468 -1.366,0.124c-0.411,-0.344 -0.467,-0.957 -0.124,-1.37l0.001,-0.001c0.683,-0.822 2.018,-2.119 3.436,-3.403c-1.418,-1.284 -2.753,-2.582 -3.436,-3.403l-0.001,-0.001c-0.343,-0.413 -0.287,-1.026 0.124,-1.37Z"
  })),
  'email-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,26c11,0 12,-0.833 12,-10c0,-9.167 -1,-10 -12,-10c-11,0 -12,0.833 -12,10c0,9.167 1,10 12,10Zm-8.651,-14.774c0.411,-0.344 1.023,-0.289 1.366,0.124c1.335,1.601 5.617,5.318 7.285,6.592c1.696,-1.296 5.931,-4.963 7.285,-6.592c0.343,-0.413 0.955,-0.468 1.366,-0.124c0.412,0.344 0.467,0.957 0.124,1.37c-0.695,0.838 -2.02,2.129 -3.429,3.404c1.409,1.275 2.734,2.566 3.429,3.404c0.343,0.412 0.288,1.026 -0.124,1.37c-0.411,0.344 -1.023,0.289 -1.366,-0.124c-0.662,-0.798 -2.015,-2.083 -3.422,-3.339c-1.102,0.95 -2.137,1.789 -2.841,2.291c-0.302,0.213 -0.644,0.398 -1.022,0.398c-0.378,0 -0.72,-0.185 -1.021,-0.398c-0.691,-0.492 -1.728,-1.335 -2.835,-2.292c-1.414,1.264 -2.775,2.556 -3.429,3.34c-0.343,0.413 -0.955,0.468 -1.366,0.124c-0.411,-0.344 -0.467,-0.957 -0.124,-1.37l0.001,-0.001c0.683,-0.822 2.018,-2.119 3.436,-3.403c-1.418,-1.284 -2.753,-2.582 -3.436,-3.403l-0.001,-0.001c-0.343,-0.413 -0.287,-1.026 0.124,-1.37Z"
  })),
  embed: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,6.033c5.1,0 7.247,0.576 8.336,1.665c1.089,1.089 1.664,3.235 1.664,8.335c0,5.1 -0.575,7.247 -1.664,8.336c-1.089,1.089 -3.236,1.664 -8.336,1.664c-5.1,0 -7.247,-0.575 -8.336,-1.664c-1.089,-1.089 -1.664,-3.236 -1.664,-8.336c0,-5.1 0.575,-7.247 1.664,-8.335c1.089,-1.089 3.236,-1.665 8.336,-1.665Zm12,10c0,-10 -2,-12 -12,-12c-10,0 -12,2 -12,12c0,10 2,12 12,12c10,0 12,-2 12,-12Zm-19.25,0c0,0.336 0.175,0.617 0.332,0.825l0.001,0.002c0.836,1.087 2.004,1.978 3.102,2.816c0.09,0.068 0.179,0.137 0.268,0.205l0.079,0.06c0.061,0.047 0.122,0.094 0.183,0.141l0.001,0.001c0.394,0.305 0.977,0.258 1.31,-0.113c0.343,-0.382 0.284,-0.953 -0.121,-1.266c-0.178,-0.138 -0.359,-0.276 -0.54,-0.415c-0.92,-0.703 -1.854,-1.417 -2.579,-2.256c0.734,-0.851 1.651,-1.55 2.576,-2.255c0.181,-0.138 0.363,-0.276 0.543,-0.415c0.404,-0.313 0.464,-0.884 0.121,-1.266c-0.333,-0.372 -0.917,-0.417 -1.31,-0.113c-0.181,0.139 -0.363,0.278 -0.546,0.418l-0.01,0.007c-1.099,0.836 -2.228,1.695 -3.077,2.798l-0.001,0.001c-0.157,0.208 -0.332,0.49 -0.332,0.825Zm14.5,0c0,0.336 -0.175,0.617 -0.332,0.825l-0.001,0.002c-0.836,1.087 -2.004,1.978 -3.102,2.816c-0.179,0.136 -0.356,0.272 -0.53,0.406l-0.001,0.001c-0.394,0.305 -0.977,0.258 -1.31,-0.113c-0.343,-0.382 -0.284,-0.953 0.121,-1.266c0.178,-0.138 0.359,-0.276 0.54,-0.415c0.92,-0.703 1.854,-1.417 2.579,-2.256c-0.734,-0.851 -1.651,-1.55 -2.576,-2.255l-0.002,-0.001c-0.18,-0.137 -0.361,-0.275 -0.541,-0.414c-0.404,-0.313 -0.464,-0.884 -0.121,-1.266c0.333,-0.372 0.917,-0.417 1.31,-0.113c0.184,0.142 0.369,0.283 0.556,0.425c1.099,0.836 2.228,1.695 3.077,2.798l0.001,0.001c0.157,0.208 0.332,0.49 0.332,0.825Z"
  })),
  emoji: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M26,16c0,5.523 -4.477,10 -10,10c-5.523,0 -10,-4.477 -10,-10c0,-5.523 4.477,-10 10,-10c5.523,0 10,4.477 10,10Zm2,0c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-17.5,0c0.829,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.671,-1.5 -1.5,-1.5c-0.829,0 -1.5,0.672 -1.5,1.5c0,0.828 0.671,1.5 1.5,1.5Zm12.5,-1.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5Zm-6.999,8c2.45,0 4.534,-1.715 5,-4c0.232,-1.14 -3,-1.5 -5,-1.5c-2,0 -5.259,0.231 -5,1.5c0.466,2.285 2.549,4 5,4Zm2,-2c0,0 -0.896,0.5 -2,0.5c-1.105,0 -2,-0.5 -2,-0.5c0,0 0.895,-1 2,-1c1.104,0 2,1 2,1Z"
  })),
  enter: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M18.496,10.132c-0.479,-0.274 -1.09,-0.108 -1.364,0.372c-0.274,0.479 -0.108,1.09 0.372,1.364c1.554,0.886 3.031,1.929 4.357,3.132l-13.861,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l13.861,0c-1.326,1.203 -2.803,2.246 -4.357,3.132c-0.48,0.274 -0.646,0.885 -0.372,1.364c0.274,0.48 0.885,0.646 1.364,0.372c2.16,-1.237 4.859,-2.886 6.237,-5.061c0.076,-0.12 0.267,-0.431 0.267,-0.807c0,-0.376 -0.191,-0.687 -0.267,-0.807c-1.403,-2.215 -4.021,-3.792 -6.237,-5.061Z"
  })),
  everything: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,14.591c-0.394,-0.376 -0.939,-0.875 -1.539,-1.365c-0.632,-0.516 -1.383,-1.066 -2.101,-1.472c-0.709,-0.399 -1.545,-0.754 -2.36,-0.754c-2.761,0 -5,2.239 -5,5c0,2.761 2.239,5 5,5c0.815,0 1.651,-0.355 2.36,-0.754c0.718,-0.406 1.469,-0.956 2.101,-1.472c0.6,-0.49 1.145,-0.989 1.539,-1.365c0.394,0.376 0.939,0.875 1.539,1.365c0.632,0.516 1.383,1.066 2.101,1.472c0.709,0.399 1.545,0.754 2.36,0.754c2.761,0 5,-2.239 5,-5c0,-2.761 -2.239,-5 -5,-5c-0.815,0 -1.651,0.355 -2.36,0.754c-0.718,0.406 -1.469,0.956 -2.101,1.472c-0.6,0.491 -1.145,0.989 -1.539,1.365Zm-9,1.409c0,-1.657 1.343,-3 3,-3c0.289,0 0.755,0.145 1.379,0.496c0.614,0.344 1.225,0.794 1.817,1.278c0.539,0.441 1.014,0.874 1.384,1.226c-0.37,0.352 -0.845,0.785 -1.384,1.226c-0.592,0.484 -1.203,0.934 -1.817,1.278c-0.624,0.351 -1.09,0.496 -1.379,0.496c-1.657,0 -3,-1.343 -3,-3Zm18,0c0,-1.657 -1.343,-3 -3,-3c-0.289,0 -0.756,0.145 -1.379,0.496c-0.614,0.344 -1.225,0.794 -1.817,1.278c-0.539,0.441 -1.014,0.874 -1.384,1.226c0.37,0.352 0.845,0.786 1.384,1.226c0.592,0.484 1.203,0.934 1.817,1.278c0.623,0.351 1.09,0.496 1.379,0.496c1.657,0 3,-1.343 3,-3Z"
  })),
  expand: _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.4261 23.4929C13.9761 23.4429 14.4625 23.8483 14.5125 24.3983C14.5625 24.9483 14.1572 25.4347 13.6072 25.4847L13.6055 25.4848C11.7489 25.903 10.3347 25.903 7.83297 25.6519C7.45861 25.5861 7.07499 25.4718 6.7991 25.1959C6.52322 24.92 6.40892 24.5364 6.34311 24.162C6.09202 21.6604 6.09202 20.2462 6.51027 18.3884C6.63158 17.8496 7.04673 17.4325 7.59675 17.4825C8.14676 17.5325 8.5521 18.0189 8.50211 18.5689C8.49565 18.6403 8.48931 18.7102 8.48309 18.779C8.34826 20.2675 8.26727 21.1616 8.26533 22.3155L22.3035 8.27736C21.1495 8.2793 20.2555 8.36029 18.7669 8.49512L18.5569 8.51413C18.0069 8.56413 17.5205 8.15879 17.4705 7.60878C17.4205 7.05876 17.8375 6.64361 18.3763 6.5223C20.2342 6.10404 21.6484 6.10404 24.15 6.35514C24.5244 6.42095 24.908 6.53525 25.1839 6.81113C25.4598 7.08702 25.5741 7.47064 25.6399 7.845C25.891 10.3467 25.891 11.7609 25.4728 13.6176L25.4727 13.6192C25.4227 14.1692 24.9363 14.5745 24.3862 14.5245C23.8362 14.4745 23.4309 13.9881 23.4809 13.4381L23.5092 13.1202C23.6342 11.7164 23.7135 10.8267 23.7167 9.69262L9.68059 23.7287C10.8147 23.7255 11.7044 23.6463 13.1082 23.5212C13.2113 23.512 13.3171 23.5026 13.4261 23.4929Z"
  }),
  explore: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M25.915,15.946c-1.251,0.722 -2.043,1.179 -3.002,0.579l-0.529,0.305l-2.598,1.5c-2.165,1.25 -3.373,1.658 -4.289,1.321l-0.541,0.313l-1.299,0.75c-3.464,2 -5.103,0.286 -5.897,-1.214c-0.795,-1.5 -1.567,-3.715 1.897,-5.715l1.299,-0.75l0.541,-0.312c0.166,-0.962 1.124,-1.804 3.289,-3.054l2.598,-1.5l0.655,-0.378c0.02,-1.166 0.833,-1.636 1.876,-2.238c1.894,-1.093 3.031,-1.75 6.031,3.447c3,5.196 2.242,5.633 -0.031,6.946Zm-2.573,-1.771c-0.471,-0.592 -1.001,-1.418 -1.726,-2.675c-1.412,-2.447 -1.581,-3.388 -1.579,-3.653c0.136,-0.136 0.335,-0.25 0.681,-0.448l0.012,-0.007c0.057,-0.033 0.119,-0.068 0.185,-0.107c0.071,-0.04 0.136,-0.078 0.197,-0.114c0.344,-0.2 0.542,-0.315 0.728,-0.365c0.231,0.131 0.962,0.747 2.374,3.194c0.726,1.256 1.177,2.128 1.454,2.832c0.143,0.347 0.192,0.632 0.215,0.789c-0.16,0.128 -0.392,0.262 -0.753,0.469l-0.001,0.001c-0.067,0.038 -0.138,0.079 -0.214,0.123c-0.076,0.043 -0.147,0.085 -0.213,0.123c-0.361,0.21 -0.593,0.344 -0.784,0.418c-0.124,-0.097 -0.347,-0.283 -0.576,-0.58Zm-1.958,0.923l0.103,-0.06c-0.461,-0.634 -0.984,-1.467 -1.603,-2.538c-0.619,-1.072 -1.062,-1.951 -1.358,-2.68l-0.142,0.081l-2.598,1.5c-1.026,0.591 -1.627,0.989 -2.042,1.377c-0.158,0.133 -0.225,0.228 -0.253,0.28l0,0.001c0.004,0.054 0.015,0.205 0.136,0.475c0.201,0.476 0.528,1.043 0.99,1.843l0.141,0.245c0.463,0.801 0.789,1.367 1.101,1.779c0.174,0.24 0.299,0.325 0.344,0.356l0.001,0c0.059,0.002 0.174,-0.009 0.369,-0.079c0.544,-0.165 1.189,-0.488 2.213,-1.08l2.598,-1.5Zm-9.397,-0.349l-0.031,0.018l-1.299,0.751c-1.398,0.806 -1.539,1.405 -1.566,1.593c-0.045,0.323 0.071,0.763 0.436,1.453c0.306,0.578 0.62,0.88 0.904,0.991c0.196,0.076 0.823,0.236 2.226,-0.573l1.299,-0.75l0.031,-0.019c-0.313,-0.469 -0.643,-1.042 -1.03,-1.711l-0.001,-0.002c-0.387,-0.671 -0.718,-1.244 -0.969,-1.751Z"
  }), _react["default"].createElement("path", {
    d: "M7.027,22.232c-0.478,0.276 -1.089,0.112 -1.366,-0.366l-1,-1.732c-0.276,-0.479 -0.112,-1.09 0.366,-1.367c0.479,-0.276 1.09,-0.112 1.367,0.367l1,1.732c0.276,0.478 0.112,1.089 -0.367,1.366Z"
  }), _react["default"].createElement("path", {
    d: "M19.52,20.258c-0.534,0.143 -0.85,0.692 -0.707,1.225l1.279,4.775c0.117,0.438 0.513,0.742 0.966,0.742c0.658,0 1.136,-0.624 0.966,-1.259l-1.28,-4.775c-0.142,-0.534 -0.691,-0.851 -1.224,-0.708Z"
  }), _react["default"].createElement("path", {
    d: "M16.554,26c0,0.552 -0.448,1 -1,1c-0.553,0 -1,-0.448 -1,-1l0,-3c0,-0.553 0.447,-1 1,-1c0.552,0 1,0.447 1,1l0,3Z"
  }), _react["default"].createElement("path", {
    d: "M11.822,26.258c-0.117,0.438 -0.514,0.742 -0.966,0.742c-0.658,0 -1.136,-0.624 -0.966,-1.259l0.475,-1.775c0.143,-0.534 0.692,-0.851 1.225,-0.708c0.534,0.143 0.85,0.692 0.707,1.225l-0.475,1.775Z"
  })),
  facebook: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19.491,27.944c7.731,-0.319 8.509,-2.242 8.509,-11.944c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,10.985 0.997,11.997 11.956,12l0,-7.667l-2.956,0l0,-3.377l2.956,0l0,-2.491c0,-2.891 1.789,-4.465 4.403,-4.465c1.251,0 2.327,0.092 2.641,0.133l0,3.021l-1.813,0.001c-1.421,0 -1.696,0.666 -1.696,1.644l0,2.157l3.39,0l-0.442,3.377l-2.948,0l0,7.611Z"
  })),
  flag: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M10.953 5.034a1 1 0 0 0-1.225.707L4.034 26.992a1 1 0 1 0 1.932.517l5.694-21.25a1 1 0 0 0-.707-1.225zm2.107 9.005c.425-1.703.798-3.036 1.225-4.079.429-1.058.766-1.43.912-1.532a.216.216 0 0 0 .022-.023l.017.003c.131-.022.133-.021.353.073l.065.028c.584.23 1.492.826 2.826 2.076 1.584 1.462 3.173 2.338 4.36 2.738a9.906 9.906 0 0 0 2.045.4c-.312 1.161-.627 2.297-1.028 3.334-.405 1.061-.756 1.774-1.284 2.307-.385.41-.719.542-1.131.527-.519-.018-1.447-.289-2.901-1.37-1.746-1.291-3.25-2.073-4.327-2.514a17.61 17.61 0 0 0-1.498-.524c.08-.375.193-.838.344-1.444zm12.104-1.615a.522.522 0 0 1 0 0zm-13.21 2.816l.017.008a.08.08 0 0 1-.017-.008zm-.834-1.685c1.727-6.93 3.174-9.634 8.727-4.43 2.833 2.655 4.933 2.646 6.14 2.641 1.16-.005 1.494-.007.86 2.359-1.294 4.83-3.053 10.796-9.5 6-2.638-1.962-4.392-2.486-5.449-2.801-1.526-.456-1.599-.478-.778-3.769z"
  })),
  'flag-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M11.153,4.434c-0.533,-0.143 -1.082,0.174 -1.225,0.707l-5.694,21.251c-0.143,0.533 0.174,1.082 0.707,1.224c0.534,0.143 1.082,-0.173 1.225,-0.707l2.745,-10.242c0.059,0.019 0.122,0.037 0.187,0.057c1.057,0.315 2.811,0.839 5.449,2.801c6.447,4.796 8.206,-1.17 9.5,-6c0.634,-2.366 0.3,-2.364 -0.86,-2.359c-1.207,0.005 -3.307,0.014 -6.14,-2.641c-2.401,-2.25 -4.034,-3.022 -5.255,-2.612l0.068,-0.254c0.143,-0.533 -0.173,-1.082 -0.707,-1.225Z"
  })),
  freeze: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M17,4.923c0,-0.51 -0.448,-0.923 -1,-0.923c-0.552,0 -1,0.413 -1,0.923l0,2.414c-0.471,-0.313 -0.871,-0.673 -1.482,-1.227c-0.354,-0.424 -0.984,-0.482 -1.408,-0.128c-0.425,0.353 -0.482,0.984 -0.128,1.409c0.628,0.685 1.864,1.859 3.018,2.365l0,12.488c-1.154,0.506 -2.39,1.68 -3.018,2.365c-0.354,0.425 -0.297,1.056 0.128,1.409c0.424,0.354 1.054,0.296 1.408,-0.128c0.611,-0.554 1.011,-0.914 1.482,-1.227l0,2.414c0,0.51 0.448,0.923 1,0.923c0.552,0 1,-0.413 1,-0.923l0,-2.414c0.471,0.313 0.87,0.673 1.482,1.227c0.353,0.424 0.984,0.482 1.408,0.128c0.424,-0.353 0.481,-0.984 0.128,-1.409c-0.629,-0.685 -1.864,-1.859 -3.018,-2.365l0,-12.488c1.154,-0.506 2.389,-1.68 3.018,-2.365c0.353,-0.425 0.296,-1.056 -0.128,-1.409c-0.424,-0.354 -1.055,-0.296 -1.408,0.128c-0.612,0.554 -1.011,0.914 -1.482,1.227l0,-2.414Z"
  }), _react["default"].createElement("path", {
    d: "M26.092,11.328c0.442,-0.255 0.576,-0.849 0.3,-1.328c-0.276,-0.478 -0.858,-0.659 -1.3,-0.404l-2.09,1.207c0.035,-0.564 0.148,-1.091 0.322,-1.897c0.191,-0.518 -0.075,-1.093 -0.593,-1.284c-0.519,-0.19 -1.094,0.076 -1.284,0.594c-0.279,0.887 -0.679,2.544 -0.54,3.796l-10.815,6.244c-1.015,-0.746 -2.65,-1.229 -3.557,-1.43c-0.545,-0.094 -1.062,0.27 -1.156,0.815c-0.094,0.544 0.27,1.061 0.815,1.155c0.785,0.252 1.297,0.418 1.803,0.67l-2.09,1.207c-0.442,0.255 -0.576,0.849 -0.3,1.327c0.276,0.479 0.858,0.66 1.3,0.405l2.09,-1.207c-0.035,0.564 -0.147,1.091 -0.322,1.897c-0.19,0.518 0.075,1.093 0.594,1.284c0.518,0.19 1.093,-0.076 1.284,-0.594c0.279,-0.887 0.678,-2.544 0.539,-3.797l10.815,-6.244c1.015,0.747 2.65,1.23 3.558,1.431c0.544,0.094 1.062,-0.27 1.156,-0.815c0.094,-0.544 -0.271,-1.061 -0.815,-1.155c-0.786,-0.253 -1.298,-0.418 -1.804,-0.67l2.09,-1.207Z"
  }), _react["default"].createElement("path", {
    d: "M25.093,22.405c0.441,0.255 1.023,0.074 1.299,-0.405c0.276,-0.478 0.142,-1.072 -0.299,-1.327l-2.091,-1.207c0.507,-0.252 1.018,-0.418 1.804,-0.67c0.544,-0.094 0.909,-0.611 0.815,-1.155c-0.094,-0.545 -0.612,-0.909 -1.156,-0.815c-0.908,0.201 -2.542,0.684 -3.558,1.43l-10.815,-6.244c0.139,-1.252 -0.26,-2.909 -0.539,-3.796c-0.191,-0.518 -0.766,-0.784 -1.284,-0.594c-0.518,0.191 -0.784,0.766 -0.593,1.284c0.174,0.806 0.286,1.333 0.321,1.897l-2.09,-1.207c-0.442,-0.255 -1.023,-0.074 -1.3,0.404c-0.276,0.479 -0.142,1.073 0.3,1.328l2.09,1.207c-0.506,0.252 -1.018,0.417 -1.803,0.67c-0.544,0.094 -0.909,0.611 -0.815,1.155c0.094,0.545 0.612,0.909 1.156,0.815c0.907,-0.201 2.542,-0.684 3.557,-1.43l10.815,6.243c-0.138,1.253 0.261,2.91 0.54,3.797c0.19,0.518 0.765,0.784 1.284,0.594c0.518,-0.191 0.784,-0.766 0.593,-1.284c-0.174,-0.806 -0.287,-1.333 -0.322,-1.897l2.091,1.207Z"
  })),
  friend: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 11.4912 8.97717C 12.3703 8.17303 12.6567 6.87286 12.6567 5C 12.6567 2.23859 10.4181 0 7.65668 0C 4.89526 0 2.65668 2.23859 2.65668 5C 2.65668 6.87286 2.94302 8.17303 3.82211 8.97717C 2.19708 9.86633 0.914429 11.3031 0.222412 13.0393C 0.0597229 13.4474 0.0085144 13.9776 0.38324 14.207C 1.17523 14.692 2.01566 13.7498 2.48837 12.9504C 3.53268 11.1844 5.45636 10 7.65668 10C 7.76151 10 7.86569 10.0027 7.96918 10.008C 9.10062 10.066 10.3418 9.95276 11.209 9.22382C 11.3059 9.14246 11.4006 9.06012 11.4912 8.97717ZM 10.6567 5C 10.6567 6.68262 10.3854 7.24109 10.1871 7.45593C 10.0244 7.63208 9.50742 8 7.65668 8C 5.80594 8 5.28891 7.63208 5.12628 7.45593C 4.92798 7.24109 4.65668 6.68262 4.65668 5C 4.65668 3.34314 5.99982 2 7.65668 2C 9.31354 2 10.6567 3.34314 10.6567 5ZM 12.6567 11.88C 13.9552 10.6 15.2537 10.92 15.9029 11.56C 18.4999 14.12 13.4531 17.5 12.6567 17.5C 11.8602 17.5 6.81342 14.12 9.41043 11.56C 10.0597 10.92 11.3582 10.6 12.6567 11.88Z",
    transform: "translate(8.34332 8)"
  })),
  github: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z"
  })),
  google: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm0.142,-10.558l0,-2.675l6.731,0.01c0.588,2.728 -0.735,8.223 -6.731,8.223c-3.944,0 -7.142,-3.134 -7.142,-7c0,-3.866 3.198,-7 7.142,-7c1.852,0 3.54,0.691 4.81,1.825l-2.01,1.97c-0.754,-0.633 -1.73,-1.017 -2.8,-1.017c-2.379,0 -4.308,1.89 -4.308,4.222c0,2.332 1.929,4.222 4.308,4.222c1.998,0 3.38,-1.159 3.888,-2.78l-3.888,0Z"
  })),
  home: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,5c-0.358,0 -0.736,0.149 -0.997,0.264c-0.297,0.13 -0.676,0.326 -1.077,0.555c-0.789,0.451 -1.798,1.102 -2.878,1.864c-2.149,1.518 -4.715,3.572 -6.755,5.61c-0.391,0.39 -0.391,1.024 0,1.414c0.39,0.391 1.024,0.391 1.414,0c1.96,-1.962 4.394,-3.908 6.495,-5.39c1.045,-0.738 1.974,-1.337 2.716,-1.761c0.365,-0.209 0.649,-0.357 0.887,-0.46c0.091,-0.04 0.154,-0.064 0.195,-0.078c0.041,0.014 0.104,0.038 0.194,0.078c0.239,0.103 0.523,0.251 0.888,0.46c0.742,0.424 1.671,1.023 2.716,1.761c2.101,1.482 4.535,3.428 6.495,5.39c0.39,0.391 1.024,0.391 1.414,0c0.391,-0.39 0.391,-1.024 0,-1.414c-2.04,-2.038 -4.606,-4.092 -6.755,-5.61c-1.08,-0.762 -2.089,-1.413 -2.878,-1.864c-0.401,-0.229 -0.78,-0.425 -1.077,-0.555c-0.262,-0.115 -0.639,-0.264 -0.997,-0.264Zm3.934,19.816c0.184,-0.028 0.358,-0.061 0.524,-0.098l0.014,-0.003c0.923,-0.2 1.291,-0.482 1.522,-0.79c0.292,-0.39 0.589,-1.123 0.774,-2.649l0.001,-0.003c0.165,-1.347 0.218,-3.047 0.229,-5.273c0.002,-0.552 0.45,-1 1.002,-1c0.552,0 1,0.448 0.998,1c-0.052,10.061 -1.005,11 -8.998,11c-7.993,0 -8.946,-0.939 -8.998,-11c-0.002,-0.552 0.446,-1 0.998,-1c0.552,0 1,0.448 1.002,1c0.011,2.226 0.064,3.926 0.229,5.273l0.001,0.003c0.185,1.526 0.482,2.259 0.774,2.649c0.231,0.308 0.599,0.59 1.523,0.79l0.013,0.003c0.166,0.037 0.34,0.07 0.524,0.098c-0.049,-0.788 -0.066,-1.718 -0.066,-2.816c0,-5.133 0.4,-6 4,-6c3.6,0 4,0.867 4,6c0,1.098 -0.017,2.028 -0.066,2.816Zm-2.015,0.16c0.062,-0.782 0.081,-1.74 0.081,-2.976c0,-1.258 -0.02,-2.159 -0.105,-2.87l0,-0.002c-0.081,-0.688 -0.196,-0.921 -0.228,-0.973c-0.001,-0.001 -0.001,-0.002 -0.001,-0.003c-0.002,-0.005 -0.007,-0.009 -0.012,-0.009c-0.019,-0.001 -0.042,-0.003 -0.073,-0.009c-0.004,-0.001 -0.009,-0.002 -0.012,-0.003c-0.338,-0.11 -0.751,-0.133 -1.568,-0.131l-0.002,0c-0.817,-0.002 -1.23,0.021 -1.568,0.131c-0.004,0.001 -0.008,0.002 -0.012,0.003c-0.031,0.006 -0.055,0.008 -0.073,0.009c-0.005,0 -0.01,0.004 -0.012,0.009c0,0.002 0,0.002 -0.001,0.003c-0.032,0.052 -0.147,0.285 -0.228,0.973l0,0.002c-0.085,0.711 -0.105,1.612 -0.105,2.87c0,1.236 0.019,2.194 0.08,2.976c0.569,0.018 1.204,0.024 1.92,0.024l0,0c0.715,0 1.35,-0.006 1.919,-0.024Z"
  })),
  idea: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M15,4c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,2c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1l0,-2Zm-5.879,2.707c-0.39,-0.39 -1.023,-0.39 -1.414,0c-0.39,0.391 -0.39,1.024 0,1.414l1.414,1.415c0.391,0.39 1.024,0.39 1.415,0c0.39,-0.391 0.39,-1.024 0,-1.415l-1.415,-1.414Zm9.688,11.72c0.732,-0.786 1.191,-1.881 1.191,-3.251c0,-2.361 -1.845,-4.176 -4,-4.176c-2.155,0 -4,1.815 -4,4.176c0,1.537 0.335,2.397 1.168,3.224c0.86,0.854 1.674,2.086 1.812,3.6l2.046,0c0.158,-1.539 1.024,-2.757 1.783,-3.573Zm1.464,1.363c-0.703,0.754 -1.273,1.677 -1.273,2.708c0,0.829 -0.672,1.502 -1.502,1.502l-2.95,0c-0.855,0 -1.548,-0.693 -1.548,-1.548c0,-1.009 -0.525,-1.922 -1.241,-2.633c-1.295,-1.286 -1.759,-2.704 -1.759,-4.643c0,-3.411 2.686,-6.176 6,-6.176c3.314,0 6,2.765 6,6.176c0,1.841 -0.628,3.433 -1.727,4.614Zm-3.509,5.21c0.758,0 0.777,0.126 0.046,0.327l-3.45,0.949c-0.182,0.049 -0.36,-0.088 -0.36,-0.276c0,-0.218 0.07,-0.42 0.189,-0.585c0.089,-0.123 0.232,-0.19 0.378,-0.23l0.565,-0.151c0.084,-0.023 0.171,-0.034 0.258,-0.034l2.374,0Zm-3.762,2.534c0.027,0.386 0.474,0.514 0.847,0.414l4.603,-1.234c0.323,-0.086 0.548,-0.379 0.548,-0.714c0,-0.265 -0.287,-0.391 -0.543,-0.322l-5.143,1.378c-0.185,0.049 -0.314,0.217 -0.314,0.409c0,0.023 0.001,0.046 0.002,0.069Zm3.515,1.466c0.088,0 0.175,-0.012 0.259,-0.034l1.137,-0.305c0.105,-0.028 0.205,-0.073 0.296,-0.134l0.346,-0.23c0.278,-0.186 0.445,-0.498 0.445,-0.832c0,-0.066 -0.062,-0.114 -0.126,-0.097l-4.587,1.23c-0.109,0.029 -0.132,0.172 -0.039,0.234c0.164,0.11 0.357,0.168 0.555,0.168l1.714,0Zm8.018,-22.293c-0.39,-0.39 -1.023,-0.39 -1.414,0l-1.414,1.414c-0.39,0.391 -0.39,1.024 0,1.415c0.391,0.39 1.024,0.39 1.414,0l1.415,-1.415c0.39,-0.39 0.39,-1.023 0,-1.414Zm2.464,7.293c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-2,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l2,0Zm-19,1c0,-0.552 -0.448,-1 -1,-1l-2,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,0c0.552,0 1,-0.448 1,-1Z"
  })),
  inserter: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M28,16c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12c10.5,0 12,-1.5 12,-12Zm-14.89,4.482c-0.424,0.353 -0.482,0.984 -0.128,1.408c0.353,0.424 0.984,0.482 1.408,0.128l0.001,-0.001c0.26,-0.216 0.524,-0.433 0.79,-0.652c1.581,-1.299 3.235,-2.658 4.41,-4.311c0.219,-0.312 0.409,-0.664 0.409,-1.054c0,-0.39 -0.19,-0.742 -0.409,-1.053c-1.192,-1.679 -2.79,-2.988 -4.374,-4.285c-0.277,-0.226 -0.553,-0.452 -0.826,-0.68c-0.425,-0.353 -1.056,-0.296 -1.409,0.128c-0.354,0.424 -0.296,1.055 0.128,1.408c0.254,0.213 0.511,0.423 0.768,0.635c1.434,1.178 2.878,2.364 4.007,3.847c-1.109,1.457 -2.584,2.673 -4.009,3.847c-0.258,0.213 -0.514,0.424 -0.766,0.635Z"
  })),
  like: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M15.982 13.578l-1.414-1.414C12.876 10.473 11.364 10 10.232 10c-1.17 0-2.175.503-2.836 1.164-1.592 1.592-1.887 3.022-1.676 4.288.235 1.407 1.152 2.928 2.579 4.412 1.432 1.501 3.108 2.703 4.719 3.616.789.451 1.453.769 2.062 1.001.344.134.65.199.809.233l.093.02.092-.02c.159-.034.466-.099.81-.233.608-.232 1.273-.55 2.062-1.001 1.611-.913 3.287-2.115 4.719-3.616 1.427-1.484 2.344-3.005 2.578-4.412.211-1.266-.083-2.696-1.675-4.288A4.035 4.035 0 0 0 21.732 10c-1.132 0-2.644.473-4.336 2.164l-1.414 1.414zm0-2.828c4-4 8-3 10-1 8 8-7 17-10 17s-18-9-10-17c2-2 6-3 10 1z"
  })),
  'like-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M25.982 9.75c-2-2-6-3-10 1-4-4-8-3-10-1-8 8 7 17 10 17s18-9 10-17z",
    fillRule: "nonzero"
  })),
  link: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16.693,16.664c0.376,-0.375 1.001,-0.413 1.377,-0.038l0.083,0.084c0.358,0.357 0.386,0.93 0.032,1.291c-0.026,0.026 -0.051,0.052 -0.077,0.078c-0.867,0.866 -1.671,1.438 -2.514,1.655c0,0 -0.001,0 -0.001,0c-0.078,0.02 -0.157,0.037 -0.236,0.051c0,0 0,0 0,0c-0.802,0.142 -1.646,-0.036 -2.616,-0.582l0,0c-0.907,-0.511 -1.923,-1.343 -3.119,-2.539c-3.959,-3.959 -3.939,-5.959 -1.414,-8.485c2.526,-2.525 4.526,-2.545 8.485,1.414c0.439,0.439 0.828,0.853 1.171,1.247c0.102,0.117 -0.009,0.3 -0.162,0.28c0,0 0,0 -0.001,0c-0.559,-0.074 -1.083,-0.035 -1.58,0.094c-0.299,0.078 -0.624,0.012 -0.842,-0.206c-1.958,-1.958 -3.035,-2.492 -3.63,-2.571c-0.366,-0.049 -0.902,0.032 -2.027,1.156c-1.124,1.125 -1.205,1.661 -1.156,2.027c0.079,0.595 0.613,1.672 2.571,3.63c0.432,0.433 0.822,0.796 1.173,1.1c0,0 0,0 0,0c0.046,0.04 0.091,0.079 0.136,0.117c0,0 0,0 0,0c0.841,0.712 1.45,1.073 1.891,1.24c0,0 0,0 0,0c0.166,0.062 0.308,0.098 0.429,0.114c0,0 0,0 0,0c0.367,0.049 0.903,-0.032 2.027,-1.157Zm3.07,-1.099c-0.912,-0.79 -1.563,-1.181 -2.027,-1.357c0,0 0,0 0,0c-0.166,-0.063 -0.308,-0.098 -0.43,-0.114c0,0 0,0 0,0c-0.367,-0.049 -0.902,0.032 -2.027,1.156c-0.375,0.376 -1.001,0.414 -1.376,0.038l-0.083,-0.083c-0.358,-0.358 -0.387,-0.931 -0.032,-1.291c0.025,-0.026 0.051,-0.052 0.077,-0.078c0.866,-0.866 1.671,-1.438 2.514,-1.655l0,0c0.873,-0.225 1.786,-0.07 2.853,0.531c0,0 0,0 0,0c0.906,0.51 1.923,1.343 3.118,2.538c3.96,3.96 3.94,5.96 1.414,8.486c-2.525,2.525 -4.525,2.545 -8.485,-1.415c-0.438,-0.438 -0.828,-0.852 -1.171,-1.246c-0.102,-0.117 0.009,-0.301 0.163,-0.28c0.559,0.074 1.083,0.035 1.581,-0.094c0.299,-0.078 0.623,-0.012 0.841,0.206c1.958,1.958 3.035,2.492 3.63,2.571c0.367,0.049 0.903,-0.032 2.027,-1.157c1.125,-1.124 1.206,-1.66 1.157,-2.027c-0.079,-0.595 -0.613,-1.672 -2.571,-3.63c-0.433,-0.432 -0.822,-0.795 -1.173,-1.099Z"
  })),
  spectrum: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M6,14.5c0,0.828 0.672,1.5 1.5,1.5l1.5,0c3.866,0 7,3.134 7,7l0,1.5c0,0.828 0.672,1.5 1.5,1.5l7,0c0.828,0 1.5,-0.672 1.5,-1.5l0,-1.5c0,-9.389 -7.611,-17 -17,-17l-1.5,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,7Z"
  })),
  markdown: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 12 0C 22.5 0 24 1 24 8C 24 15 22.5 16 12 16C 1.5 16 0 15 0 8C 0 1 1.5 0 12 0ZM 4 12L 6 12L 6 7.61032L 7.14252 9.5145L 8 10.9436L 8.85748 9.5145L 10 7.61032L 10 12L 12 12L 12 4L 9.83383 4L 8 7.05635L 6.16617 4L 4 4L 4 12ZM 17 12L 13.5 8L 16 8L 16 4L 18 4L 18 8L 20.5 8L 17 12Z",
    transform: "translate(4 8)"
  })),
  'member-add': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M23.981,7c-0.552,0 -1,0.448 -1,1l0,2l-2,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,0l0,2c0,0.552 0.448,1 1,1c0.553,0 1,-0.448 1,-1l0,-2l2,0c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1l-2,0l0,-2c0,-0.552 -0.447,-1 -1,-1Z"
  }), _react["default"].createElement("path", {
    d: "M16.981,17c0,1.683 -0.271,2.241 -0.469,2.456c-0.163,0.176 -0.68,0.544 -2.531,0.544c-1.85,0 -2.367,-0.368 -2.53,-0.544c-0.198,-0.215 -0.47,-0.773 -0.47,-2.456c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3Zm0.835,3.977c0.879,-0.804 1.165,-2.104 1.165,-3.977c0,-2.761 -2.238,-5 -5,-5c-2.761,0 -5,2.239 -5,5c0,1.873 0.287,3.173 1.166,3.977c-1.665,0.911 -2.97,2.396 -3.649,4.189c-0.124,0.328 -0.154,0.708 0.051,0.993c0.569,0.789 1.674,-0.111 2.13,-0.97c1.008,-1.897 3.004,-3.189 5.302,-3.189c2.298,0 4.295,1.292 5.303,3.189c0.456,0.859 1.561,1.759 2.129,0.97c0.205,-0.285 0.176,-0.665 0.052,-0.993c-0.68,-1.793 -1.985,-3.278 -3.649,-4.189Z"
  })),
  'member-remove': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M21.981,9c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c1.648,0 5,0 6,0c0.553,0 1,-0.448 1,-1c0,-0.552 -0.447,-1 -1,-1c-3.173,0 -2.219,0 -6,0Z"
  }), _react["default"].createElement("path", {
    d: "M16.981,16c0,1.683 -0.271,2.241 -0.469,2.456c-0.163,0.176 -0.68,0.544 -2.531,0.544c-1.85,0 -2.367,-0.368 -2.53,-0.544c-0.198,-0.215 -0.47,-0.773 -0.47,-2.456c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3Zm0.835,3.977c0.879,-0.804 1.165,-2.104 1.165,-3.977c0,-2.761 -2.238,-5 -5,-5c-2.761,0 -5,2.239 -5,5c0,1.873 0.287,3.173 1.166,3.977c-1.665,0.911 -2.97,2.396 -3.649,4.189c-0.124,0.328 -0.154,0.708 0.051,0.993c0.569,0.789 1.674,-0.111 2.13,-0.97c1.008,-1.897 3.004,-3.189 5.302,-3.189c2.298,0 4.295,1.292 5.303,3.189c0.456,0.859 1.561,1.759 2.129,0.97c0.205,-0.285 0.176,-0.665 0.052,-0.993c-0.679,-1.793 -1.985,-3.278 -3.649,-4.189Z"
  })),
  mention: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M22.586,9.414c0.864,0.864 1.414,2.572 1.414,6.586l0,1.5c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5l0,-0.5l0,-1l0,-4c0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1c-0.836,-0.628 -1.874,-1 -3,-1c-2.761,0 -5,2.239 -5,5c0,2.761 2.239,5 5,5c1.416,0 2.694,-0.588 3.604,-1.534c0.63,0.926 1.692,1.534 2.896,1.534c1.933,0 3.5,-1.567 3.5,-3.5l0,-0.5l0,-1c0,-8 -2,-10 -10,-10c-8,0 -10,2 -10,10c0,8 2,10 10,10l6,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-6,0c-4.014,0 -5.722,-0.55 -6.586,-1.414c-0.864,-0.864 -1.414,-2.572 -1.414,-6.586c0,-4.014 0.55,-5.722 1.414,-6.586c0.864,-0.864 2.572,-1.414 6.586,-1.414c4.014,0 5.722,0.55 6.586,1.414Zm-3.586,6.586c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3Z"
  })),
  menu: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M9,10c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"
  }), _react["default"].createElement("path", {
    d: "M9,15c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"
  }), _react["default"].createElement("path", {
    d: "M9,20c0,-0.552 0.448,-1 1,-1l12,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-12,0c-0.552,0 -1,-0.448 -1,-1Z"
  })),
  message: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M14.5,7.021c0.625,-0.014 1.291,-0.021 2,-0.021c10.542,0 11.5,1.5 11.5,8c0,6.5 -0.958,8 -11.5,8c-0.517,0 -1.01,-0.004 -1.482,-0.011c-0.001,0 -0.002,0 -0.002,0.001l-4.461,2.974c-0.665,0.443 -1.555,-0.034 -1.555,-0.833l0,-2.713c0,-0.002 -0.002,-0.004 -0.004,-0.005c-2.969,-0.754 -3.765,-2.347 -3.948,-5.413c-0.036,-0.607 -0.048,-1.272 -0.048,-2c0,-6.063 0.834,-7.776 9.5,-7.979Zm-7.023,12.153c-0.341,-0.732 -0.477,-1.923 -0.477,-4.174c-0.001,-1.579 0.04,-2.656 0.259,-3.523c0.171,-0.791 0.268,-1.008 0.751,-1.324c0.394,-0.301 1.12,-0.62 2.55,-0.84c1.458,-0.228 3.327,-0.312 5.892,-0.313l0.048,0c2.589,-0.001 4.473,0.084 5.94,0.313c1.43,0.22 2.156,0.539 2.55,0.84c0.483,0.316 0.58,0.533 0.751,1.324c0.219,0.867 0.259,1.944 0.259,3.523c0,1.579 -0.04,2.656 -0.259,3.523c-0.171,0.791 -0.268,1.007 -0.751,1.324c-0.394,0.301 -1.12,0.62 -2.55,0.84c-1.467,0.229 -3.351,0.313 -5.94,0.313c-0.509,0 -0.987,-0.004 -1.449,-0.011c-0.303,0.018 -0.882,0.188 -1.145,0.337l-2.906,1.937l0,-0.845c0,-0.96 -0.664,-1.728 -1.512,-1.943c-1.389,-0.353 -1.784,-0.813 -2.011,-1.301Zm4.023,-2.174c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Zm6.5,-1.5c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5Zm3.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"
  })),
  'message-simple': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M20.7414 11.5229C20.96 10.656 21.0005 9.5794 21 8C21.0005 6.4206 20.96 5.344 20.7414 4.47706C20.57 3.68581 20.4733 3.46948 19.9904 3.15288C19.5963 2.85234 18.8701 2.53297 17.4397 2.31262C15.9734 2.08387 14.0894 1.99947 11.5 2C8.91059 1.99947 7.02664 2.08387 5.56035 2.31262C4.12987 2.53297 3.40373 2.85234 3.00961 3.15288C2.52669 3.46948 2.42997 3.68581 2.25863 4.47706C2.03999 5.344 1.99948 6.4206 2 8C2 10.2512 2.13638 11.4423 2.47725 12.174C2.70449 12.6618 3.09917 13.122 4.48824 13.4746C5.33561 13.6897 6 14.4583 6 15.418V16.263L8.90618 14.3255C9.16948 14.1773 9.74784 14.007 10.0507 13.9891C10.5134 13.9965 10.9908 14 11.5 14C14.0894 14.0005 15.9734 13.9161 17.4397 13.6874C18.8701 13.467 19.5963 13.1477 19.9904 12.8471C20.4733 12.5305 20.57 12.3142 20.7414 11.5229ZM23 8C23 14.5 22.0417 16 11.5 16C10.9835 16 10.4899 15.9964 10.0184 15.9888C10.0174 15.9888 10.0164 15.9891 10.0156 15.9896L5.55469 18.9636C4.89014 19.4066 4 18.9302 4 18.1315V15.418C4 15.4157 3.99836 15.4137 3.99614 15.4131C0.43941 14.5103 0 12.4014 0 8C0 1.5 0.958344 0 11.5 0C22.0417 0 23 1.5 23 8Z",
    transform: "translate(5 7)"
  })),
  'message-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M28,15c0,6.5 -0.958,8 -11.5,8c-0.517,0 -1.01,-0.004 -1.482,-0.011c-0.001,0 -0.002,0 -0.002,0.001l-4.461,2.974c-0.665,0.443 -1.555,-0.034 -1.555,-0.833l0,-2.713c0,-0.002 -0.002,-0.004 -0.004,-0.005c-3.557,-0.903 -3.996,-3.012 -3.996,-7.413c0,-6.5 0.958,-8 11.5,-8c10.542,0 11.5,1.5 11.5,8Zm-16.5,2c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Zm10,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Zm-3.5,-1.5c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5Z"
  })),
  'message-new': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M15.5,7c-0.709,0 -1.375,0.007 -2,0.021c-8.666,0.203 -9.5,1.916 -9.5,7.979c0,0.728 0.012,1.393 0.048,2c0.183,3.066 0.979,4.66 3.948,5.413c0.002,0.001 0.004,0.003 0.004,0.005l0,2.713c0,0.799 0.89,1.276 1.555,0.833l4.461,-2.974c0,-0.001 0.001,-0.001 0.002,-0.001c0.472,0.007 0.965,0.011 1.482,0.011c2.312,0 4.163,-0.072 5.644,-0.253c-0.093,-0.231 -0.144,-0.483 -0.144,-0.747c0,-0.507 0.189,-0.969 0.499,-1.322l-0.059,0.009c-1.467,0.229 -3.351,0.314 -5.94,0.313c-0.509,0 -0.987,-0.003 -1.449,-0.011c-0.303,0.018 -0.882,0.188 -1.145,0.337l-2.906,1.937l0,-0.845c0,-0.96 -0.664,-1.728 -1.512,-1.943c-1.389,-0.353 -1.784,-0.813 -2.011,-1.301c-0.341,-0.732 -0.477,-1.923 -0.477,-4.174c-0.001,-1.579 0.04,-2.656 0.259,-3.523c0.171,-0.791 0.268,-1.008 0.751,-1.324c0.394,-0.301 1.12,-0.62 2.55,-0.84c1.458,-0.228 3.327,-0.312 5.892,-0.313l0.048,0c2.589,-0.001 4.473,0.084 5.94,0.313c1.43,0.22 2.156,0.539 2.55,0.84c0.483,0.316 0.58,0.533 0.751,1.324c0.219,0.867 0.259,1.944 0.259,3.523c0,0.921 -0.013,1.672 -0.068,2.309c0.309,-0.196 0.675,-0.309 1.068,-0.309c0.338,0 0.657,0.084 0.937,0.232c0.048,-0.669 0.063,-1.41 0.063,-2.232c0,-6.5 -0.958,-8 -11.5,-8Zm-3.5,8.5c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5Zm5,0c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.828 0.672,-1.5 1.5,-1.5c0.828,0 1.5,0.672 1.5,1.5Zm3.5,1.5c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Zm5.5,1c-0.552,0 -1,0.448 -1,1l0,2l-2,0c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l2,0l0,2c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-2l2,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-2,0l0,-2c0,-0.552 -0.448,-1 -1,-1Z"
  })),
  'message-simple-new': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25 15C25 15.4463 24.9951 15.8531 24.9839 16.2251C25.2924 16.0807 25.6368 16 26 16C26.3512 16 26.6847 16.0754 26.9853 16.2109C26.9959 15.828 27 15.4247 27 15C27 8.5 26.0417 7 15.5 7C4.95833 7 4 8.5 4 15C4 19.4014 4.43941 21.5102 7.99614 22.4131C7.99836 22.4137 8 22.4157 8 22.418V25.1315C8 25.9302 8.89015 26.4066 9.5547 25.9635L14.0156 22.9896C14.0164 22.9891 14.0174 22.9888 14.0184 22.9888C14.4899 22.9964 14.9835 23 15.5 23C17.323 23 18.8594 22.9551 20.1539 22.8473C20.0544 22.5838 20 22.2983 20 22C20 21.5735 20.1113 21.173 20.3063 20.8259C19.0438 20.9462 17.4706 21 15.5 21C14.9927 21 14.51 20.9965 14.0507 20.989C13.643 20.9825 13.2439 21.1003 12.9062 21.3255L10 23.263V22.418C10 21.4583 9.3356 20.6897 8.48825 20.4746C7.09917 20.122 6.7045 19.6618 6.47725 19.174C6.13639 18.4422 6 17.2512 6 15C6 13.3784 6.06527 12.2782 6.25863 11.4771C6.43399 10.7505 6.68274 10.4021 7.0096 10.1529C7.40373 9.85234 8.12986 9.53297 9.56034 9.31262C10.9773 9.09436 12.8903 9 15.5 9C18.1097 9 20.0227 9.09436 21.4397 9.31262C22.8701 9.53297 23.5963 9.85234 23.9904 10.1529C24.3173 10.4021 24.566 10.7505 24.7414 11.4771C24.9347 12.2782 25 13.3784 25 15ZM25 19C25 18.4477 25.4477 18 26 18C26.5523 18 27 18.4477 27 19V21H29C29.5523 21 30 21.4477 30 22C30 22.5523 29.5523 23 29 23H27V25C27 25.5523 26.5523 26 26 26C25.4477 26 25 25.5523 25 25V23H23C22.4477 23 22 22.5523 22 22C22 21.4477 22.4477 21 23 21H25V19Z"
  })),
  minus: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,6c5.1,0 7.247,0.575 8.336,1.664c1.089,1.089 1.664,3.236 1.664,8.336c0,5.1 -0.575,7.247 -1.664,8.336c-1.089,1.089 -3.236,1.664 -8.336,1.664c-5.1,0 -7.247,-0.575 -8.336,-1.664c-1.089,-1.089 -1.664,-3.236 -1.664,-8.336c0,-5.1 0.575,-7.247 1.664,-8.336c1.089,-1.089 3.236,-1.664 8.336,-1.664Zm12,10c0,-10 -2,-12 -12,-12c-10,0 -12,2 -12,12c0,10 2,12 12,12c10,0 12,-2 12,-12Zm-16,-1c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l8,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-8,0Z"
  })),
  'minus-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,4c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-4,11c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l8,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-8,0Z"
  })),
  mute: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.9187 5.61612C17.9187 5.61612 17.9187 5.61612 17.9187 5.61612C17.9777 5.90533 17.7002 6.1181 17.4074 6.08069C17.4074 6.08069 17.4074 6.08069 17.4074 6.08069C16.4521 5.95862 15.4647 5.95859 14.5093 6.08066C14.5093 6.08066 14.5093 6.08066 14.5093 6.08066C14.2165 6.11807 13.939 5.90531 13.9981 5.61609C13.9981 5.61609 13.9981 5.61609 13.9981 5.61608C14.1827 4.71219 14.9928 4 15.9584 4C16.9239 4 17.7341 4.71222 17.9187 5.61612ZM12.0814 25.7795C12.0814 25.7795 12.0814 25.7795 12.0814 25.7795C11.9115 25.2815 12.3963 24.8765 12.9214 24.9111C12.9214 24.9111 12.9214 24.9111 12.9214 24.9111C13.2715 24.9342 13.6248 25.1646 13.9659 25.3871C13.9659 25.3871 13.9659 25.3871 13.9659 25.3871C14.1654 25.5172 14.3608 25.6446 14.549 25.7264C14.5491 25.7264 14.5491 25.7264 14.5491 25.7264C15.0237 25.9324 15.6573 26 15.9584 26C16.2103 26 16.8495 25.9176 17.3386 25.7064C17.5216 25.6273 17.7149 25.5075 17.9133 25.3845C17.9134 25.3844 17.9135 25.3844 17.9135 25.3843C17.9136 25.3843 17.9137 25.3842 17.9138 25.3842C18.2686 25.1643 18.6392 24.9345 18.995 24.911C18.995 24.911 18.995 24.911 18.995 24.911C19.5202 24.8763 20.0052 25.2814 19.8351 25.7795C19.8351 25.7795 19.8351 25.7795 19.8351 25.7795C19.335 27.2447 17.423 28 15.9584 28C14.4941 28 12.5815 27.2447 12.0814 25.7795ZM20.9584 14.4879C20.9584 14.4958 20.9586 14.5041 20.959 14.512C21.0393 16.1501 21.5785 17.2785 22.0494 18.264C22.0494 18.264 22.0494 18.264 22.0494 18.264C22.1524 18.4797 22.2522 18.6886 22.3432 18.8945C22.3437 18.8956 22.3443 18.8968 22.3448 18.898C22.9429 20.2247 22.9444 20.8614 22.8999 21.0825C22.8992 21.0861 22.8985 21.0895 22.8978 21.0932L22.8973 21.0961C22.897 21.0977 22.8967 21.0992 22.8964 21.1008C22.8862 21.1578 22.8618 21.269 22.4903 21.4372C22.4903 21.4372 22.4903 21.4372 22.4903 21.4372C22.0024 21.6581 21.2014 21.8246 20.0018 21.9128C20.0016 21.9128 20.0014 21.9128 20.0012 21.9128C18.8324 22 17.4983 22 16.0247 22C16.0247 22 16.0247 22 16.0247 22H15.9583H15.892C15.892 22 15.892 22 15.892 22C14.4185 22 13.0843 22 11.9156 21.9128C11.9154 21.9128 11.9152 21.9128 11.915 21.9128C10.7154 21.8246 9.91433 21.6582 9.42646 21.4374C9.42645 21.4374 9.42645 21.4374 9.42644 21.4374C9.05569 21.2696 9.03061 21.1585 9.02046 21.1017C9.02013 21.0998 9.01981 21.0981 9.01946 21.0962L9.01895 21.0935C9.0183 21.09 9.01764 21.0868 9.01693 21.0833C8.97245 20.8627 8.97353 20.226 9.5724 18.8983C9.5724 18.8983 9.5724 18.8983 9.5724 18.8983C9.6779 18.6643 9.79385 18.4306 9.91235 18.1918C9.91264 18.1912 9.91292 18.1906 9.9132 18.19C9.91349 18.1894 9.91378 18.1889 9.91406 18.1883C10.4137 17.1812 10.9584 16.083 10.9584 14.5C10.9584 11.7762 11.8638 10.5501 12.7004 9.92774C12.7066 9.92308 12.7127 9.91831 12.7188 9.9134C13.7234 9.10035 14.852 8.99512 15.9561 8.99999C15.9576 9 15.9591 9 15.9606 8.99999C17.0647 8.99512 18.1933 9.10035 19.1979 9.91343C19.204 9.91834 19.2101 9.92311 19.2164 9.92777C20.0517 10.5492 20.9557 11.7726 20.9584 14.4879ZM23.7809 17.2641C23.7808 17.264 23.7808 17.2639 23.7808 17.2639C23.7807 17.2638 23.7807 17.2637 23.7806 17.2636C23.3321 16.3506 22.9584 15.5899 22.9584 14.5C22.9584 8 18.4583 7 15.9583 7C13.4584 7 8.95837 8 8.95837 14.5C8.95837 15.576 8.66201 16.1819 8.20036 17.1257C8.20036 17.1257 8.20036 17.1257 8.20036 17.1257C8.0634 17.4057 7.9119 17.7154 7.74927 18.076C7.74927 18.076 7.74926 18.076 7.74926 18.076C5.07736 24 9.95837 24 15.9583 24C21.9583 24 26.8401 24 24.1671 18.0739C24.1671 18.0739 24.1671 18.0739 24.1671 18.0739C24.0369 17.7851 23.906 17.5187 23.7809 17.2641Z"
  }), _react["default"].createElement("rect", {
    x: "9.85554",
    y: "4.76389",
    width: "26.4285",
    height: "3",
    rx: "1.5",
    transform: "rotate(51.0892 9.85554 4.76389)",
    stroke: "white"
  })),
  notification: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M22.217,19.476c-0.512,-1.149 -1.201,-2.759 -1.201,-4.487c0,-3.12 -0.878,-4.452 -1.642,-5.077c-0.84,-0.687 -2.022,-0.923 -3.359,-0.923c-1.336,0 -2.518,0.236 -3.358,0.923c-0.764,0.625 -1.642,1.957 -1.642,5.077c0,1.729 -0.689,3.339 -1.201,4.488c-0.046,0.103 -0.09,0.202 -0.133,0.298c-0.526,1.178 -0.796,1.782 -0.829,2.235c0,0.002 -0.001,0.004 -0.001,0.006c0.067,0.061 0.207,0.171 0.449,0.258c0.981,0.393 2.968,0.715 6.715,0.715c3.748,0 5.735,-0.322 6.715,-0.715c0.243,-0.087 0.383,-0.198 0.45,-0.259c0,-0.002 -0.001,-0.004 -0.001,-0.006c-0.033,-0.453 -0.303,-1.058 -0.83,-2.238c-0.042,-0.094 -0.086,-0.193 -0.132,-0.295Zm0.97,2.627c-0.003,-0.006 -0.006,-0.03 -0.002,-0.052c0.006,0.047 0.004,0.058 0.002,0.052Zm-14.343,0.001c-0.002,0.006 -0.004,-0.005 0.002,-0.051c0.003,0.022 0,0.045 -0.002,0.051Zm15.38,-3.041c-0.58,-1.285 -1.208,-2.679 -1.208,-4.074c0,-7 -4,-8 -7.001,-8c-2.999,0 -7,1 -7,8c0,1.396 -0.629,2.79 -1.209,4.076c-1.499,3.326 -2.671,5.924 8.209,5.924c10.882,0 9.709,-2.6 8.209,-5.926Z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M17.464,6.081c0.293,0.037 0.57,-0.176 0.511,-0.465c-0.184,-0.904 -0.995,-1.616 -1.96,-1.616c-0.966,0 -1.776,0.712 -1.96,1.616c-0.059,0.289 0.218,0.502 0.511,0.465c0.955,-0.122 1.943,-0.122 2.898,0Z"
  }), _react["default"].createElement("path", {
    d: "M12.978,25.911c-0.525,-0.035 -1.01,0.37 -0.84,0.868c0.5,1.466 2.413,2.221 3.877,2.221c1.465,0 3.376,-0.755 3.877,-2.221c0.17,-0.498 -0.315,-0.903 -0.84,-0.868c-0.555,0.037 -1.146,0.575 -1.657,0.795c-0.489,0.212 -1.128,0.294 -1.38,0.294c-0.301,0 -0.935,-0.068 -1.409,-0.274c-0.511,-0.221 -1.073,-0.778 -1.628,-0.815Z"
  }))),
  'notification-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M24.209,18.074c-0.597,-1.324 -1.209,-2.18 -1.209,-3.574c0,-6.5 -4.5,-7.5 -7,-7.5c-2.5,0 -7,1 -7,7.5c0,1.395 -0.498,2 -1.209,3.576c-2.672,5.924 2.209,5.924 8.209,5.924c6,0 10.882,0 8.209,-5.926Z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M17.449,6.081c0.293,0.037 0.57,-0.176 0.511,-0.465c-0.184,-0.904 -0.995,-1.616 -1.96,-1.616c-0.966,0 -1.776,0.712 -1.96,1.616c-0.059,0.289 0.218,0.502 0.511,0.465c0.955,-0.122 1.943,-0.122 2.898,0Z"
  }), _react["default"].createElement("path", {
    d: "M12.963,24.911c-0.525,-0.035 -1.01,0.37 -0.84,0.868c0.5,1.466 2.413,2.221 3.877,2.221c1.465,0 3.376,-0.755 3.877,-2.221c0.17,-0.498 -0.315,-0.903 -0.84,-0.868c-0.555,0.037 -1.146,0.575 -1.657,0.795c-0.489,0.212 -1.128,0.294 -1.38,0.294c-0.301,0 -0.935,-0.068 -1.409,-0.274c-0.511,-0.221 -1.073,-0.778 -1.628,-0.815Z"
  }))),
  person: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19,13c0,1.683 -0.271,2.241 -0.47,2.456c-0.162,0.176 -0.679,0.544 -2.53,0.544c-1.851,0 -2.368,-0.368 -2.53,-0.544c-0.199,-0.215 -0.47,-0.773 -0.47,-2.456c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3Zm0.835,3.977c0.879,-0.804 1.165,-2.104 1.165,-3.977c0,-2.761 -2.239,-5 -5,-5c-2.761,0 -5,2.239 -5,5c0,1.873 0.286,3.173 1.165,3.977c-1.664,0.911 -2.969,2.396 -3.649,4.189c-0.124,0.328 -0.153,0.708 0.052,0.993c0.568,0.789 1.674,-0.111 2.13,-0.97c1.007,-1.897 3.004,-3.189 5.302,-3.189c2.298,0 4.295,1.292 5.302,3.189c0.456,0.859 1.562,1.759 2.13,0.97c0.205,-0.285 0.176,-0.665 0.052,-0.993c-0.68,-1.793 -1.985,-3.278 -3.649,-4.189Z"
  })),
  photo: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M25.698,22.196c0.248,-1.511 0.302,-3.475 0.302,-6.196c0,-2.716 -0.063,-4.673 -0.324,-6.181c-0.245,-1.442 -0.619,-2.125 -1.019,-2.521c-0.403,-0.397 -1.093,-0.761 -2.534,-0.996c-1.502,-0.249 -3.445,-0.302 -6.123,-0.302c-2.678,0 -4.621,0.053 -6.123,0.302c-1.441,0.235 -2.131,0.599 -2.534,0.996c-0.4,0.396 -0.774,1.079 -1.019,2.521c-0.261,1.508 -0.324,3.465 -0.324,6.181c0,2.721 0.053,4.685 0.302,6.196c0.235,1.45 0.6,2.127 0.987,2.515c0.388,0.387 1.065,0.752 2.515,0.987c1.511,0.249 3.475,0.302 6.196,0.302c2.721,0 4.685,-0.053 6.196,-0.302c1.45,-0.235 2.127,-0.6 2.515,-0.987c0.387,-0.388 0.752,-1.065 0.987,-2.515Zm-9.698,5.804c11,0 12,-1 12,-12c0,-11 -1.169,-12 -12,-12c-10.831,0 -12,1 -12,12c0,11 1,12 12,12Z"
  }), _react["default"].createElement("path", {
    d: "M8.556,20.674c-0.706,-0.103 -1.385,0.459 -1.28,1.164c0.06,0.406 0.379,0.72 0.784,0.784c1.958,0.308 4.539,0.378 7.94,0.378c3.4,0 5.982,-0.07 7.939,-0.378c0.406,-0.064 0.724,-0.378 0.785,-0.784c0.105,-0.705 -0.574,-1.267 -1.28,-1.164c-0.038,0.006 -0.077,0.011 -0.116,0.017c-0.001,0 -0.002,0 -0.002,0c-1.802,0.253 -4.143,0.309 -7.326,0.309c0,0 0,0 0,0c-3.183,0 -5.524,-0.056 -7.326,-0.309c0,0 -0.001,0 -0.002,0c-0.039,-0.006 -0.078,-0.011 -0.116,-0.017Z"
  }), _react["default"].createElement("path", {
    d: "M11.722,10.034c-0.808,-0.186 -1.612,0.319 -1.798,1.126c-0.045,0.195 -0.049,0.39 -0.019,0.576c0.05,0.307 -0.056,0.664 -0.323,0.825c-0.107,0.065 -0.212,0.133 -0.316,0.204c-0.465,0.319 -1.106,0.201 -1.256,-0.343c-0.149,-0.54 -0.169,-1.125 -0.035,-1.71c0.433,-1.884 2.311,-3.06 4.194,-2.627c1.884,0.432 3.061,2.31 2.628,4.194c-0.055,0.241 -0.134,0.471 -0.234,0.687c-0.268,0.58 -1.007,0.479 -1.431,0.001c-0.052,-0.06 -0.107,-0.118 -0.164,-0.174c-0.208,-0.207 -0.25,-0.546 -0.158,-0.825c0.015,-0.044 0.027,-0.09 0.038,-0.136c0.185,-0.808 -0.319,-1.613 -1.126,-1.798Zm1.5,7.742c0.407,0.341 1.013,0.286 1.352,-0.124c0.251,-0.296 0.501,-0.6 0.752,-0.905l0.001,0c1.088,-1.32 2.208,-2.677 3.551,-3.705c1.424,1.09 2.563,2.484 3.694,3.868l0.001,0.001c0.203,0.248 0.405,0.495 0.609,0.741c0.339,0.41 0.945,0.465 1.352,0.124c0.403,-0.338 0.457,-0.957 0.122,-1.361c-0.216,-0.26 -0.432,-0.524 -0.651,-0.791l-0.007,-0.009c-1.239,-1.514 -2.533,-3.095 -4.108,-4.221c-0.299,-0.211 -0.637,-0.394 -1.012,-0.394c-0.375,0 -0.713,0.183 -1.012,0.394c-1.581,1.13 -2.909,2.754 -4.163,4.287l0,0c-0.203,0.248 -0.405,0.494 -0.604,0.735c-0.34,0.41 -0.285,1.018 0.123,1.36Zm-0.421,-2.606c0.275,-0.312 0.271,-0.778 -0.024,-1.072c-0.231,-0.23 -0.483,-0.464 -0.763,-0.704c-0.299,-0.211 -0.637,-0.394 -1.012,-0.394c-0.375,0 -0.728,0.171 -1.012,0.394c-1.441,1.135 -1.99,2.084 -2.767,3.022c-0.34,0.41 -0.285,1.018 0.123,1.36c0.407,0.341 1.013,0.286 1.352,-0.124c0.802,-1.152 1.292,-1.652 2.304,-2.61c0.089,0.084 0.173,0.165 0.254,0.242c0.42,0.401 1.161,0.321 1.545,-0.114Z"
  })),
  'photo-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M28,16c0,11 -1,12 -12,12c-11,0 -12,-1 -12,-12c0,-11 1.169,-12 12,-12c10.831,0 12,1 12,12Zm-18.076,-3.84c0.186,-0.807 0.99,-1.311 1.798,-1.126c0.807,0.186 1.311,0.991 1.126,1.798c-0.011,0.047 -0.023,0.092 -0.038,0.137c-0.092,0.278 -0.05,0.617 0.158,0.824c0.057,0.056 0.112,0.114 0.164,0.174c0.424,0.479 1.163,0.579 1.431,-0.001c0.1,-0.216 0.179,-0.445 0.234,-0.686c0.433,-1.884 -0.744,-3.762 -2.628,-4.195c-1.883,-0.433 -3.761,0.744 -4.194,2.628c-0.134,0.585 -0.114,1.169 0.035,1.71c0.15,0.544 0.791,0.662 1.256,0.343c0.104,-0.071 0.209,-0.14 0.316,-0.205c0.267,-0.16 0.373,-0.517 0.323,-0.824c-0.03,-0.186 -0.026,-0.381 0.019,-0.577Zm3.298,6.616c0.407,0.342 1.013,0.286 1.352,-0.123l0.027,-0.033c0.01,-0.01 0.019,-0.021 0.028,-0.032c0.231,-0.274 0.461,-0.554 0.693,-0.835l0.005,-0.005l0,-0.001c1.088,-1.319 2.208,-2.677 3.551,-3.704c1.424,1.09 2.563,2.483 3.695,3.868l0.005,0.006c0.201,0.246 0.402,0.492 0.604,0.736c0.339,0.409 0.945,0.465 1.352,0.123c0.403,-0.337 0.457,-0.956 0.122,-1.361c-0.218,-0.262 -0.437,-0.529 -0.657,-0.799l0,0l-0.001,0c-1.239,-1.515 -2.533,-3.096 -4.108,-4.221c-0.299,-0.211 -0.637,-0.395 -1.012,-0.395c-0.375,0 -0.713,0.184 -1.012,0.395c-1.484,1.06 -2.746,2.557 -3.932,4.004c-0.4,-0.514 -0.753,-0.918 -1.132,-1.274c-0.008,-0.009 -0.017,-0.018 -0.025,-0.026c-0.231,-0.23 -0.483,-0.465 -0.763,-0.704c-0.289,-0.204 -0.615,-0.383 -0.974,-0.394c-0.031,-0.002 -0.061,-0.001 -0.091,0c-0.354,0.017 -0.674,0.193 -0.959,0.394c-1.292,1.302 -1.99,2.083 -2.767,3.021c-0.34,0.41 -0.285,1.019 0.123,1.36c0.407,0.342 1.013,0.286 1.352,-0.123c0.776,-1.116 1.261,-1.62 2.208,-2.52c0.711,0.503 1.13,1.028 2.062,2.313c0.057,0.124 0.142,0.237 0.254,0.33Z"
  })),
  pin: _react["default"].createElement("g", {
    fillRule: "non-zero"
  }, _react["default"].createElement("path", {
    d: "M7.407,15.978c-0.39,-0.39 -0.39,-1.024 0,-1.414l5.657,-5.657c0.39,-0.39 1.024,-0.39 1.414,0c0.391,0.391 0.391,1.024 0,1.414l-5.657,5.657c-0.39,0.391 -1.023,0.391 -1.414,0Z"
  }), _react["default"].createElement("path", {
    d: "M15.303,22.268c-0.452,0.317 -1.076,0.207 -1.393,-0.245l-4.692,-6.702c-0.317,-0.452 -0.207,-1.076 0.245,-1.392c0.453,-0.317 1.076,-0.207 1.393,0.245l4.693,6.702c0.317,0.452 0.207,1.076 -0.246,1.392Z"
  }), _react["default"].createElement("path", {
    d: "M20.891,16.887c0.317,-0.452 0.207,-1.076 -0.245,-1.393l-6.996,-4.898c-0.453,-0.317 -1.076,-0.207 -1.393,0.245c-0.317,0.453 -0.207,1.076 0.246,1.393l6.996,4.899c0.452,0.317 1.076,0.207 1.392,-0.246Z"
  }), _react["default"].createElement("path", {
    d: "M13.771,23.756c-0.39,-0.39 -0.39,-1.024 0,-1.414l7.071,-7.071c0.391,-0.391 1.024,-0.391 1.414,0c0.391,0.39 0.391,1.024 0,1.414l-7.071,7.071c-0.39,0.391 -1.023,0.391 -1.414,0Z"
  }), _react["default"].createElement("path", {
    d: "M18.721,21.635l1.414,-1.414l3.536,3.535c0.39,0.391 0.39,1.024 0,1.415c-0.391,0.39 -1.024,0.39 -1.414,0l-3.536,-3.536Z"
  })),
  'pin-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M7.993,14.15c-0.391,0.39 -0.391,1.023 0,1.414c0.39,0.39 1.024,0.39 1.414,0l0.504,-0.504l4.586,6.549c0.024,0.035 0.051,0.069 0.079,0.1l-0.219,0.219c-0.391,0.39 -0.391,1.024 0,1.414c0.39,0.391 1.024,0.391 1.414,0l7.071,-7.071c0.391,-0.39 0.391,-1.024 0,-1.414c-0.39,-0.391 -1.024,-0.391 -1.414,0l-0.212,0.212l-6.654,-4.66l0.502,-0.502c0.39,-0.39 0.39,-1.024 0,-1.414c-0.391,-0.391 -1.024,-0.391 -1.414,0l-5.657,5.657Z"
  }), _react["default"].createElement("path", {
    d: "M19.307,21.221l1.414,-1.414l3.536,3.535c0.39,0.391 0.39,1.024 0,1.415c-0.391,0.39 -1.024,0.39 -1.414,0l-3.536,-3.536Z"
  })),
  plus: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,6c5.1,0 7.247,0.575 8.336,1.664c1.089,1.089 1.664,3.236 1.664,8.336c0,5.1 -0.575,7.247 -1.664,8.336c-1.089,1.089 -3.236,1.664 -8.336,1.664c-5.1,0 -7.247,-0.575 -8.336,-1.664c-1.089,-1.089 -1.664,-3.236 -1.664,-8.336c0,-5.1 0.575,-7.247 1.664,-8.336c1.089,-1.089 3.236,-1.664 8.336,-1.664Zm0,-2c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-1,8c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,3l3,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-3,0l0,3c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1l0,-3l-3,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l3,0l0,-3Z"
  })),
  'plus-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,4c10,0 12,2 12,12c0,10 -2,12 -12,12c-10,0 -12,-2 -12,-12c0,-10 2,-12 12,-12Zm-1,8c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1l0,3l3,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1l-3,0l0,3c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1l0,-3l-3,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l3,0l0,-3Z"
  })),
  post: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M26.957,4.886c-0.39,-0.391 -1.024,-0.391 -1.414,0l-10.896,10.896c-0.593,0.593 -1.07,1.291 -1.407,2.058l-0.003,0.006c-0.307,0.7 0.403,1.413 1.104,1.11c0.777,-0.337 1.484,-0.817 2.083,-1.416l10.886,-10.887c0.391,-0.39 0.391,-1.023 0,-1.414l-0.353,-0.353Zm-8.039,3.245c0.311,0.032 0.622,-0.071 0.843,-0.292l0.737,-0.737c0.274,-0.274 0.145,-0.736 -0.236,-0.804c-1.184,-0.21 -2.592,-0.298 -4.262,-0.298c-8,0 -10,2 -10,10c0,8 2,10 10,10c8,0 10,-2 10,-10c0,-1.507 -0.071,-2.801 -0.24,-3.909c-0.059,-0.39 -0.53,-0.529 -0.808,-0.251l-0.757,0.757c-0.215,0.215 -0.319,0.517 -0.293,0.821c0.064,0.734 0.098,1.587 0.098,2.582c0,4.015 -0.55,5.722 -1.414,6.586c-0.864,0.864 -2.572,1.414 -6.586,1.414c-4.014,0 -5.722,-0.55 -6.586,-1.414c-0.864,-0.864 -1.414,-2.571 -1.414,-6.586c0,-4.014 0.55,-5.721 1.414,-6.585c0.864,-0.864 2.572,-1.415 6.586,-1.415c1.151,0 2.112,0.046 2.918,0.131Z"
  })),
  'post-cancel': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M26,16.019c0,8 -2,10 -10,10c-8,0 -10,-2 -10,-10c0,-8 2,-10 10,-10c8,0 10,2 10,10Zm-8.586,-2.828c0.391,-0.39 1.024,-0.39 1.414,0c0.391,0.391 0.391,1.024 0,1.414l-1.414,1.414l1.414,1.414c0.39,0.391 0.391,1.024 0,1.415c-0.39,0.39 -1.024,0.39 -1.414,-0.001l-1.414,-1.413l-1.414,1.414c-0.391,0.39 -1.024,0.39 -1.414,0c-0.391,-0.391 -0.391,-1.024 0,-1.414l1.414,-1.415l-1.414,-1.413c-0.39,-0.391 -0.391,-1.024 0,-1.415c0.39,-0.39 1.024,-0.39 1.414,0.001l1.414,1.413l1.414,-1.414Z"
  })),
  'post-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M26.957,4.843c-0.39,-0.391 -1.024,-0.391 -1.414,0l-10.896,10.896c-0.904,0.96 -1.173,2.243 -1.246,2.744c-0.017,0.115 0.073,0.211 0.189,0.2c0.487,-0.045 1.722,-0.25 2.834,-1.186l10.886,-10.887c0.391,-0.39 0.391,-1.023 0,-1.414l-0.353,-0.353Zm-9.18,14.129l-0.032,0.027l-0.033,0.028c-1.552,1.306 -3.249,1.584 -3.939,1.647c-1.415,0.131 -2.555,-1.095 -2.351,-2.482c0.091,-0.616 0.501,-2.413 1.753,-3.807l0.007,-0.008l0.009,-0.009l0.01,-0.011l0.01,-0.011l0.011,-0.011l0.011,-0.01l7.885,-7.885c-1.343,-0.346 -3.025,-0.483 -5.118,-0.483c-8,0 -10,2 -10,10c0,8 2,10 10,10c8,0 10,-2 10,-10c0,-1.931 -0.117,-3.514 -0.406,-4.802l-7.756,7.756l-0.03,0.03l-0.031,0.031Z"
  })),
  "private": _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19.196 6.238C18.44 6.041 17.479 5.999 16 6c-1.479-.001-2.44.041-3.195.238-.606.15-.826.343-.976.551-.208.291-.451.872-.613 2.111-.119.895-.178 1.972-.202 3.315C12.316 12.052 13.951 12 16 12s3.684.052 4.986.215c-.024-1.343-.083-2.42-.201-3.315-.162-1.239-.406-1.82-.614-2.111-.15-.208-.37-.401-.976-.551zm3.797 6.403C22.894 4.897 21.803 4 16.001 4s-6.893.897-6.992 8.641c-2.604.885-3.008 2.911-3.008 7.359 0 7 1 8 10 8s10-1 10-8c0-4.448-.404-6.474-3.008-7.359zm-5.992 8.092a2 2 0 1 0-2 0V22a1 1 0 0 0 2 0v-1.267z"
  })),
  'private-outline': _react["default"].createElement("g", {
    transform: "translate(6 4)"
  }, _react["default"].createElement("path", {
    d: "M 13.1955 2.23785C 12.44 2.04071 11.4794 1.99933 10 2C 8.52065 1.99933 7.55997 2.04071 6.8045 2.23785C 6.1992 2.38824 5.97868 2.58063 5.82935 2.78922C 5.62134 3.07977 5.37756 3.66086 5.21555 4.8999C 5.09674 5.79526 5.03786 6.87158 5.01379 8.21457C 6.31618 8.05185 7.9507 8 10 8C 12.0493 8 13.6838 8.05185 14.9862 8.21457C 14.9621 6.87158 14.9033 5.79526 14.7845 4.8999C 14.6225 3.66086 14.3787 3.07977 14.1707 2.78922C 14.0213 2.58066 13.8008 2.38824 13.1955 2.23785ZM 16.992 8.64078C 16.893 0.897217 15.8017 0 10 0C 4.19827 0 3.107 0.897217 3.00796 8.64078C 0.403839 9.52625 0 11.5516 0 16C 0 23 1 24 10 24C 19 24 20 23 20 16C 20 11.5516 19.5962 9.52625 16.992 8.64078ZM 2.25122 12.2217C 2.04568 13.1338 1.99948 14.2954 2 16C 1.99948 17.7046 2.04568 18.8662 2.25122 19.7783C 2.42407 20.5734 2.66103 20.8885 2.89148 21.0771C 3.17363 21.3079 3.72681 21.5756 4.93619 21.7563C 6.18376 21.946 7.78571 22.0003 10 22C 12.2143 22.0003 13.8162 21.946 15.0638 21.7563C 16.2732 21.5756 16.8264 21.308 17.1085 21.0771C 17.339 20.8885 17.5759 20.5734 17.7488 19.7783C 17.9543 18.8662 18.0005 17.7046 18 16C 18.0005 14.2954 17.9543 13.1338 17.7488 12.2217C 17.5759 11.4266 17.339 11.1115 17.1085 10.9229C 16.8264 10.692 16.2732 10.4244 15.0638 10.2437C 13.8162 10.054 12.2143 9.99969 10 10C 7.78571 9.99969 6.18376 10.054 4.93619 10.2437C 3.72681 10.4244 3.17363 10.6921 2.89148 10.9229C 2.66103 11.1115 2.42407 11.4266 2.25122 12.2217ZM 11 16.7325C 11.5978 16.3867 12 15.7403 12 15C 12 13.8954 11.1046 13 10 13C 8.89543 13 8 13.8954 8 15C 8 15.7403 8.40221 16.3867 9 16.7325L 9 18C 9 18.5523 9.44772 19 10 19C 10.5523 19 11 18.5523 11 18L 11 16.7325Z"
  })),
  'private-unlocked': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16 5c1.479-.001 2.44.041 3.195.238.606.15.826.343.976.551.208.291.452.872.614 2.111.146 1.108.202 2.492.213 4.316C19.693 12.052 18.055 12 16 12c-9 0-10 1-10 8s1 8 10 8 10-1 10-8c0-4.444-.403-6.47-3-7.357C22.976 3.973 22.043 3 16 3c-5.168 0-6.599.712-6.919 6.342-.036.626.582 1.092 1.199.982a.957.957 0 0 0 .796-.88c.033-.571.078-1.082.14-1.544.162-1.239.405-1.82.613-2.111.15-.208.37-.401.976-.551C13.56 5.041 14.521 4.999 16 5zM8.251 16.222C8.046 17.134 7.999 18.295 8 20c-.001 1.705.046 2.866.251 3.778.173.795.41 1.111.64 1.299.283.231.836.499 2.045.679 1.248.19 2.85.244 5.064.244s3.816-.054 5.064-.244c1.209-.18 1.762-.448 2.044-.679.231-.188.468-.504.641-1.299.205-.912.251-2.073.251-3.778s-.046-2.866-.251-3.778c-.173-.795-.41-1.11-.641-1.299-.282-.231-.835-.499-2.044-.679C19.816 14.054 18.214 14 16 14s-3.816.054-5.064.244c-1.209.18-1.762.448-2.045.679-.23.189-.467.504-.64 1.299zM17 20.733a2 2 0 1 0-2 0V22a1 1 0 0 0 2 0v-1.267z"
  })),
  'private-fill': _react["default"].createElement("g", {
    transform: "translate(6 7)"
  }, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.0919 17.2635C18.4824 16.8729 18.4824 16.2398 18.0919 15.8492L16.2286 13.9859C16.6221 13.708 16.9846 13.416 17.3152 13.1197C18.1483 12.3729 18.7937 11.587 19.2375 10.9046C19.459 10.5639 19.6382 10.237 19.7658 9.94239C19.8795 9.67992 20 9.33716 20 9C20 8.66283 19.8795 8.32008 19.7658 8.05761C19.6382 7.76304 19.459 7.43606 19.2375 7.09543C18.7937 6.41302 18.1483 5.62706 17.3152 4.88034C15.6487 3.38668 13.1709 2 10 2C8.21732 2 6.65369 2.4383 5.33013 3.08749L2.53553 0.292892C2.14501 -0.0976305 1.51184 -0.0976305 1.12132 0.292892C0.730793 0.683417 0.730797 1.31658 1.12132 1.70711L16.6777 17.2635C17.0682 17.654 17.7014 17.654 18.0919 17.2635ZM6.84489 4.60225L8.59259 6.34995C9.01231 6.12657 9.49137 6 10 6C11.6569 6 13 7.34315 13 9C13 9.50863 12.8734 9.98769 12.65 10.4074L14.7894 12.5468C15.2257 12.2613 15.6231 11.9504 15.9803 11.6303C16.6813 11.0021 17.212 10.3505 17.5608 9.81418C17.7356 9.54544 17.8568 9.31773 17.9306 9.14745C17.9598 9.08006 17.9772 9.03153 17.9875 9C17.9772 8.96846 17.9598 8.91994 17.9306 8.85255C17.8568 8.68227 17.7356 8.45456 17.5608 8.18582C17.212 7.64948 16.6813 6.99794 15.9803 6.36966C14.5786 5.11332 12.5564 4 10 4C8.83453 4 7.78011 4.23139 6.84489 4.60225Z"
  }), _react["default"].createElement("path", {
    d: "M2.43916 8.18582C2.62448 7.90088 2.86115 7.58342 3.14742 7.2542C3.32609 7.04873 3.32418 6.73839 3.13164 6.54585L2.42325 5.83747C2.22571 5.63992 1.90372 5.64189 1.71823 5.85078C1.33557 6.28172 1.01615 6.70548 0.762543 7.09543C0.541012 7.43606 0.36179 7.76304 0.234196 8.05761C0.120506 8.32008 0 8.66283 0 9C0 9.33716 0.120506 9.67992 0.234196 9.94239C0.36179 10.237 0.541012 10.5639 0.762543 10.9046C1.20635 11.587 1.85171 12.3729 2.68483 13.1197C4.35131 14.6133 6.82914 16 10 16C10.4956 16 10.9743 15.9661 11.4357 15.9032C11.8258 15.8501 11.9649 15.3791 11.6865 15.1007L10.7275 14.1417C10.6257 14.0399 10.485 13.9877 10.3411 13.9934C10.2285 13.9978 10.1148 14 10 14C7.44358 14 5.42142 12.8867 4.01971 11.6303C3.31874 11.0021 2.78797 10.3505 2.43916 9.81418C2.26439 9.54544 2.14318 9.31773 2.06943 9.14745C2.04023 9.08006 2.02279 9.03153 2.0125 9C2.02279 8.96847 2.04023 8.91994 2.06943 8.85255C2.14318 8.68227 2.26439 8.45456 2.43916 8.18582Z"
  })),
  'product-hunt': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M15.986,27.968c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm-1.84,-11.5l3.06,0c0.895,0 1.62,-0.739 1.62,-1.65c0,-0.911 -0.725,-1.65 -1.62,-1.65l-3.06,0l0,3.3Zm-2.16,-5.5l5.22,0c2.088,0 3.78,1.724 3.78,3.85c0,2.126 -1.692,3.85 -3.78,3.85l-3.06,0l0,3.3l-2.16,0l0,-11Z"
  })),
  profile: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M25.698,22.196c0.248,-1.511 0.302,-3.475 0.302,-6.196c0,-2.721 -0.053,-4.685 -0.302,-6.196c-0.235,-1.45 -0.6,-2.127 -0.987,-2.515c-0.388,-0.387 -1.065,-0.752 -2.515,-0.987c-1.511,-0.249 -3.475,-0.302 -6.196,-0.302c-2.721,0 -4.685,0.053 -6.196,0.302c-1.45,0.235 -2.127,0.6 -2.515,0.987c-0.387,0.388 -0.752,1.065 -0.987,2.515c-0.249,1.511 -0.302,3.475 -0.302,6.196c0,2.721 0.053,4.685 0.302,6.196c0.235,1.45 0.6,2.127 0.987,2.515c0.388,0.387 1.065,0.752 2.515,0.987c1.511,0.249 3.475,0.302 6.196,0.302c2.721,0 4.685,-0.053 6.196,-0.302c1.45,-0.235 2.127,-0.6 2.515,-0.987c0.387,-0.388 0.752,-1.065 0.987,-2.515Zm-9.698,5.804c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Z"
  }), _react["default"].createElement("path", {
    d: "M19,14c0,1.683 -0.271,2.241 -0.469,2.456c-0.163,0.176 -0.68,0.544 -2.531,0.544c-1.85,0 -2.367,-0.368 -2.53,-0.544c-0.198,-0.215 -0.47,-0.773 -0.47,-2.456c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3Zm0.835,3.977c0.879,-0.804 1.165,-2.104 1.165,-3.977c0,-2.761 -2.238,-5 -5,-5c-2.761,0 -5,2.239 -5,5c0,1.873 0.287,3.173 1.166,3.977c-1.665,0.911 -2.97,2.396 -3.649,4.189c-0.124,0.328 -0.154,0.708 0.051,0.993c0.569,0.789 1.674,-0.111 2.13,-0.97c1.008,-1.897 3.004,-3.189 5.302,-3.189c2.298,0 4.295,1.292 5.303,3.189c0.456,0.859 1.561,1.759 2.129,0.97c0.205,-0.285 0.176,-0.665 0.052,-0.993c-0.68,-1.793 -1.985,-3.278 -3.649,-4.189Z"
  })),
  'profile-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M28,15.972c0,11 -1,12 -12,12c-11,0 -12,-1 -12,-12c0,-11 1,-12 12,-12c11,0 12,1 12,12Zm-9.47,0.456c0.199,-0.215 0.47,-0.773 0.47,-2.456c0,-1.657 -1.343,-3 -3,-3c-1.657,0 -3,1.343 -3,3c0,1.683 0.271,2.241 0.47,2.456c0.162,0.176 0.679,0.544 2.53,0.544c1.851,0 2.368,-0.368 2.53,-0.544Zm2.47,-2.456c0,1.873 -0.286,3.173 -1.165,3.977c1.664,0.911 2.969,2.396 3.648,4.189c0.125,0.328 0.154,0.709 -0.051,0.993c-0.568,0.789 -1.674,-0.111 -2.13,-0.97c-1.008,-1.897 -3.004,-3.189 -5.302,-3.189c-2.298,0 -4.295,1.292 -5.302,3.189c-0.456,0.859 -1.562,1.759 -2.13,0.97c-0.205,-0.284 -0.176,-0.665 -0.052,-0.993c0.68,-1.793 1.985,-3.278 3.649,-4.189c-0.879,-0.804 -1.165,-2.104 -1.165,-3.977c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5Z"
  })),
  quote: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M7.222,15.218c0.257,-1.016 0.616,-1.893 1.085,-2.62c1.043,-1.616 2.704,-2.605 5.41,-2.605c0.552,0 1,-0.447 1,-1c0,-0.552 -0.448,-1 -1,-1c-3.294,0 -5.633,1.261 -7.091,3.521c-1.405,2.179 -1.909,5.161 -1.909,8.479c0,4 1,5 5,5c4,0 5,-1 5,-5c0,-4 -1,-5 -5,-5c-1.014,0 -1.834,0.064 -2.495,0.225Z"
  }), _react["default"].createElement("path", {
    d: "M19.222,15.218c0.257,-1.016 0.616,-1.893 1.085,-2.62c1.043,-1.616 2.704,-2.605 5.41,-2.605c0.552,0 1,-0.447 1,-1c0,-0.552 -0.448,-1 -1,-1c-3.294,0 -5.633,1.261 -7.091,3.521c-1.405,2.179 -1.909,5.161 -1.909,8.479c0,4 1,5 5,5c4,0 5,-1 5,-5c0,-4 -1,-5 -5,-5c-1.014,0 -1.834,0.064 -2.495,0.225Z"
  })),
  rep: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19.22,8.687c-0.353,-1.21 -2.087,-1.21 -2.44,0c-0.406,1.393 -0.814,2.183 -1.362,2.731c-0.548,0.548 -1.338,0.956 -2.731,1.362c-1.21,0.353 -1.21,2.087 0,2.44c1.393,0.406 2.183,0.814 2.731,1.362c0.548,0.548 0.956,1.338 1.362,2.731c0.353,1.21 2.087,1.21 2.44,0c0.406,-1.393 0.814,-2.183 1.362,-2.731c0.548,-0.548 1.338,-0.956 2.731,-1.362c1.21,-0.353 1.21,-2.087 0,-2.44c-1.393,-0.406 -2.183,-0.814 -2.731,-1.362c-0.548,-0.548 -0.956,-1.338 -1.362,-2.731Zm-2.388,4.145c0.482,-0.481 0.856,-1.041 1.168,-1.688c0.312,0.647 0.686,1.207 1.168,1.688c0.482,0.482 1.041,0.856 1.688,1.168c-0.647,0.312 -1.206,0.686 -1.688,1.168c-0.482,0.482 -0.856,1.041 -1.168,1.688c-0.312,-0.647 -0.686,-1.206 -1.168,-1.688c-0.481,-0.482 -1.041,-0.856 -1.688,-1.168c0.647,-0.312 1.207,-0.686 1.688,-1.168Z"
  }), _react["default"].createElement("path", {
    d: "M12.852,19.726c-0.26,0.408 -0.444,0.76 -0.553,1.089c-0.059,0.175 -0.095,0.344 -0.11,0.511c-0.011,0.116 -0.011,0.232 0,0.348c0.015,0.167 0.052,0.336 0.11,0.513c0.109,0.328 0.293,0.679 0.553,1.087c0.029,0.046 0.058,0.092 0.089,0.138c0.215,0.327 -0.201,0.744 -0.526,0.529c-0.047,-0.031 -0.093,-0.061 -0.138,-0.09c-0.407,-0.261 -0.758,-0.446 -1.085,-0.555c-0.175,-0.059 -0.343,-0.095 -0.509,-0.11c-0.115,-0.011 -0.23,-0.011 -0.346,0c-0.166,0.015 -0.334,0.051 -0.509,0.11c-0.327,0.109 -0.678,0.294 -1.085,0.555c-0.045,0.029 -0.091,0.059 -0.137,0.09c-0.326,0.215 -0.741,-0.202 -0.526,-0.529c0.03,-0.047 0.06,-0.092 0.089,-0.138c0.256,-0.403 0.439,-0.751 0.547,-1.076c0.058,-0.174 0.095,-0.341 0.11,-0.506c0.011,-0.123 0.011,-0.244 -0.001,-0.367c-0.017,-0.165 -0.055,-0.332 -0.115,-0.506c-0.111,-0.323 -0.297,-0.669 -0.558,-1.07c-0.029,-0.045 -0.06,-0.09 -0.091,-0.136c-0.218,-0.325 0.192,-0.747 0.52,-0.535c0.047,0.03 0.093,0.06 0.139,0.088c0.415,0.26 0.771,0.443 1.103,0.55c0.177,0.057 0.347,0.092 0.516,0.105c0.109,0.009 0.217,0.009 0.326,-0.001c0.169,-0.015 0.339,-0.051 0.515,-0.11c0.331,-0.11 0.686,-0.297 1.097,-0.561c0.045,-0.029 0.091,-0.059 0.138,-0.09c0.325,-0.215 0.741,0.202 0.526,0.529c-0.018,0.027 -0.035,0.053 -0.052,0.079c-0.012,0.02 -0.025,0.039 -0.037,0.059Z"
  })),
  reply: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 5.8902 8.70774C 6.31445 9.0613 6.3718 9.69185 6.01822 10.1161C 5.66464 10.5404 5.03409 10.5977 4.6098 10.2442L 4.60855 10.2431C 3 9.22597 2 8.22597 0.40863 6.27944C 0.19043 5.96819 0 5.61611 0 5.22594C 0 4.83579 0.19043 4.48371 0.40863 4.17246C 2 2.22597 3 1.22597 4.60944 0.20804C 5.0762 -0.0871717 5.66464 -0.0885144 6.01822 0.335756C 6.3718 0.760027 6.31445 1.3906 5.8902 1.74416L 5.72845 1.87903C 4.58041 2.83635 3.8909 3.41132 3.07352 4.22597L 16 4.22597C 18.7614 4.22597 21 6.46454 21 9.22597C 21 11.9874 18.7614 14.226 16 14.226L 12 14.226C 11.4477 14.226 11 13.7783 11 13.226C 11 12.6737 11.4477 12.226 12 12.226L 16 12.226C 17.6569 12.226 19 10.8828 19 9.22597C 19 7.56911 17.6569 6.22597 16 6.22597L 3.07495 6.22597C 3.87918 7.02567 4.56436 7.59874 5.64545 8.50295L 5.8902 8.70774Z",
    transform: "translate(6 9)"
  })),
  sam: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 14 2C 14 2.74028 13.5978 3.38663 13 3.73244L 13 6L 11 6L 11 3.73244C 10.4022 3.38663 10 2.74028 10 2C 10 0.895432 10.8954 0 12 0C 13.1046 0 14 0.895432 14 2ZM 11 7.00577L 11 7L 13 7L 13 7.00577C 22.1347 7.11594 24 8.8546 24 16.5C 24 24.4167 22 26 12 26C 2 26 0 24.4167 0 16.5C 0 8.8546 1.8653 7.11594 11 7.00577ZM 5.5 17C 6.32843 17 7 16.3284 7 15.5C 7 14.6716 6.32843 14 5.5 14C 4.67157 14 4 14.6716 4 15.5C 4 16.3284 4.67157 17 5.5 17ZM 18.5 17C 19.3284 17 20 16.3284 20 15.5C 20 14.6716 19.3284 14 18.5 14C 17.6716 14 17 14.6716 17 15.5C 17 16.3284 17.6716 17 18.5 17ZM 12.0008 21C 13.9558 21 15.6185 19.7531 15.9905 18.0909C 16.176 17.262 13.597 17 12.0011 17C 10.4053 17 7.80522 17.1678 8.01158 18.0909C 8.38356 19.7531 10.0457 21 12.0008 21Z",
    transform: "translate(4 2)"
  })),
  search: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M14,9c-2.761,0 -5,2.239 -5,5c0,2.761 2.239,5 5,5c1.387,0 2.641,-0.564 3.548,-1.477c0.899,-0.905 1.452,-2.148 1.452,-3.523c0,-2.761 -2.239,-5 -5,-5Zm-7,5c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,1.257 -0.332,2.436 -0.912,3.456c-0.244,0.431 -0.212,0.981 0.137,1.332l3.984,4.007c0.389,0.391 0.388,1.025 -0.004,1.414c-0.392,0.389 -1.025,0.388 -1.414,-0.004l-3.97,-3.992c-0.352,-0.354 -0.908,-0.387 -1.341,-0.138c-1.025,0.588 -2.214,0.925 -3.48,0.925c-3.866,0 -7,-3.134 -7,-7Z"
  })),
  send: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M9,8l0,5.287l7.054,1.495c0.628,0.133 0.966,0.665 0.989,1.164c0,0.009 0.001,0.022 0.001,0.034c0,0.004 0,0.008 0,0.012c0,0.005 0,0.009 0,0.013c0,0.012 -0.001,0.025 -0.001,0.034c-0.023,0.498 -0.361,1.031 -0.989,1.164l-7.054,1.495l0,5.627c0.02,0.001 0.049,-0.002 0.09,-0.017c4.386,-1.524 15.41,-7.808 15.41,-8.308c0,-0.5 -11.075,-6.473 -15.41,-7.984c-0.041,-0.014 -0.07,-0.017 -0.09,-0.016Zm17.555,7.992l0,-0.011l0,-0.003c-0.011,-0.698 -0.39,-1.289 -0.925,-1.685c-3.631,-2.688 -11.512,-6.642 -15.882,-8.165c-0.624,-0.218 -1.3,-0.158 -1.843,0.185c-0.554,0.349 -0.905,0.958 -0.905,1.667l0,5.712c0,0.708 0.496,1.32 1.189,1.467l3.931,0.833l-3.931,0.834c-0.693,0.146 -1.189,0.758 -1.189,1.467l0,6.052c0,0.709 0.351,1.317 0.905,1.667c0.543,0.343 1.219,0.403 1.843,0.185c4.371,-1.527 12.29,-5.85 15.881,-8.505c0.536,-0.397 0.915,-0.987 0.925,-1.685l0,-0.003l0.001,-0.012Z"
  })),
  'send-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16.044,15.012c-0.005,-0.104 -0.071,-0.205 -0.198,-0.232l-7.45,-1.579c-0.231,-0.049 -0.396,-0.253 -0.396,-0.489l0,-5.712c0,-0.73 0.698,-1.159 1.419,-0.908c4.295,1.497 12.081,5.408 15.616,8.025c0.34,0.252 0.515,0.573 0.52,0.895c-0.005,0.323 -0.18,0.644 -0.52,0.896c-3.535,2.617 -11.321,6.868 -15.616,8.365c-0.721,0.251 -1.419,-0.178 -1.419,-0.908l0,-6.052c0,-0.236 0.165,-0.44 0.396,-0.489l7.45,-1.579c0.127,-0.027 0.193,-0.129 0.198,-0.233Z"
  })),
  settings: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M9.752,9.489l2.302,0.705c0.552,-0.373 1.161,-0.669 1.81,-0.873l0.885,-2.239c0.397,-0.054 0.803,-0.082 1.216,-0.082c0.413,0 0.819,0.028 1.217,0.082l0.884,2.239c0.649,0.204 1.258,0.5 1.81,0.873l2.302,-0.705c0.588,0.56 1.1,1.2 1.519,1.901l-1.2,2.088c0.238,0.616 0.391,1.274 0.446,1.959l1.987,1.361c-0.073,0.828 -0.257,1.624 -0.539,2.372l-2.383,0.364c-0.341,0.583 -0.764,1.111 -1.253,1.57l0.176,2.403c-0.673,0.446 -1.408,0.804 -2.191,1.057l-1.77,-1.636c-0.328,0.048 -0.664,0.072 -1.005,0.072c-0.341,0 -0.676,-0.024 -1.005,-0.072l-1.77,1.636c-0.782,-0.253 -1.518,-0.611 -2.19,-1.057l0.175,-2.403c-0.489,-0.459 -0.912,-0.987 -1.253,-1.57l-2.383,-0.364c-0.281,-0.748 -0.466,-1.544 -0.539,-2.372l1.987,-1.361c0.055,-0.685 0.208,-1.343 0.446,-1.959l-1.199,-2.088c0.419,-0.701 0.93,-1.341 1.518,-1.901Zm6.213,10.511c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4Z"
  })),
  share: _react["default"].createElement("g", {
    fillRule: "nonzero"
  }, _react["default"].createElement("path", {
    d: "M16.707,5.294c-0.39,-0.39 -1.024,-0.39 -1.414,0l-3,3c-0.391,0.391 -0.391,1.024 0,1.415c0.39,0.39 1.024,0.39 1.414,0l1.293,-1.293l0,9.585c0,0.553 0.448,1 1,1c0.552,0 1,-0.447 1,-1l0,-9.585l1.293,1.293c0.39,0.39 1.024,0.39 1.414,0c0.391,-0.391 0.391,-1.024 0,-1.415l-3,-3Zm-5.817,7.023c0.588,-0.114 1.11,0.36 1.11,0.959l0,0.426c0,0.265 -0.198,0.487 -0.459,0.531l-0.002,0c-1.042,0.17 -1.486,0.416 -1.706,0.612c-0.191,0.171 -0.42,0.489 -0.588,1.31l-0.007,0.03c-0.191,0.926 -0.238,2.106 -0.238,3.815l0,0.003c0,1.709 0.047,2.889 0.238,3.814l0.007,0.031c0.168,0.821 0.397,1.139 0.588,1.309c0.219,0.197 0.662,0.442 1.699,0.612l0.017,0.002c1.094,0.182 2.493,0.231 4.45,0.23l0.002,0c1.957,0.001 3.356,-0.048 4.45,-0.23l0.017,-0.002c1.037,-0.17 1.48,-0.415 1.699,-0.611c0.191,-0.171 0.42,-0.489 0.588,-1.31l0.007,-0.031c0.191,-0.925 0.238,-2.105 0.238,-3.814l0,-0.003c0,-1.709 -0.047,-2.889 -0.238,-3.815l-0.007,-0.03c-0.168,-0.821 -0.397,-1.139 -0.588,-1.31c-0.22,-0.196 -0.664,-0.442 -1.706,-0.612l-0.002,0c-0.262,-0.044 -0.459,-0.266 -0.459,-0.531l0,-0.426c0,-0.599 0.522,-1.073 1.11,-0.959c3.362,0.655 3.89,2.553 3.89,7.684c0,7.059 -1,8 -9,8c-8,0 -9,-0.941 -9,-8c0,-5.131 0.528,-7.029 3.89,-7.684Z"
  })),
  slack: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z",
    fill: "black"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.8667 8C13.6563 8.00019 13.4481 8.04174 13.2538 8.12226C13.0596 8.20278 12.8832 8.3207 12.7346 8.46929C12.586 8.61787 12.4682 8.79421 12.3879 8.98824C12.3076 9.18226 12.2664 9.39017 12.2667 9.60009C12.2665 9.80998 12.3077 10.0179 12.388 10.2118C12.4683 10.4058 12.5861 10.5821 12.7347 10.7307C12.8833 10.8793 13.0597 10.9971 13.2539 11.0776C13.4481 11.1582 13.6564 11.1997 13.8667 11.1999H15.4667V9.60009C15.4669 9.39017 15.4257 9.18226 15.3454 8.98824C15.2651 8.79421 15.1473 8.61787 14.9988 8.46929C14.8502 8.3207 14.6737 8.20278 14.4795 8.12226C14.2852 8.04174 14.077 8.00019 13.8667 8ZM13.8667 12.2668H9.6C9.38969 12.267 9.18148 12.3085 8.98725 12.389C8.79302 12.4695 8.61659 12.5874 8.46801 12.736C8.31944 12.8845 8.20164 13.0608 8.12134 13.2548C8.04104 13.4488 7.99981 13.6567 8 13.8666C7.99977 14.0765 8.04097 14.2844 8.12125 14.4784C8.20154 14.6725 8.31933 14.8488 8.46791 14.9974C8.61649 15.146 8.79294 15.2639 8.98718 15.3444C9.18143 15.4249 9.38967 15.4665 9.6 15.4667H13.8667C14.077 15.4665 14.2852 15.4249 14.4795 15.3444C14.6737 15.2639 14.8502 15.146 14.9988 14.9974C15.1473 14.8488 15.2651 14.6725 15.3454 14.4784C15.4257 14.2844 15.4669 14.0765 15.4667 13.8666C15.4669 13.6567 15.4256 13.4488 15.3453 13.2548C15.265 13.0608 15.1472 12.8845 14.9987 12.736C14.8501 12.5874 14.6736 12.4695 14.4794 12.389C14.2852 12.3085 14.077 12.267 13.8667 12.2668Z",
    fill: "black"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24 13.8666C24.0002 13.6567 23.959 13.4488 23.8787 13.2548C23.7984 13.0608 23.6806 12.8845 23.532 12.736C23.3834 12.5874 23.207 12.4695 23.0127 12.389C22.8185 12.3085 22.6103 12.267 22.4 12.2668C22.1897 12.267 21.9815 12.3085 21.7872 12.389C21.593 12.4695 21.4166 12.5874 21.268 12.736C21.1194 12.8845 21.0016 13.0608 20.9213 13.2548C20.841 13.4488 20.7998 13.6567 20.8 13.8666V15.4667H22.4C22.6103 15.4665 22.8186 15.4249 23.0128 15.3444C23.2071 15.2639 23.3835 15.146 23.5321 14.9974C23.6807 14.8488 23.7985 14.6725 23.8787 14.4784C23.959 14.2844 24.0002 14.0765 24 13.8666ZM19.7333 13.8666V9.60009C19.7336 9.39017 19.6924 9.18226 19.6121 8.98824C19.5318 8.79421 19.414 8.61787 19.2654 8.46929C19.1168 8.3207 18.9404 8.20278 18.7462 8.12226C18.5519 8.04174 18.3437 8.00019 18.1333 8C17.923 8.00019 17.7148 8.04174 17.5205 8.12226C17.3263 8.20278 17.1498 8.3207 17.0012 8.46929C16.8527 8.61787 16.7349 8.79421 16.6546 8.98824C16.5743 9.18226 16.5331 9.39017 16.5333 9.60009V13.8666C16.5331 14.0765 16.5743 14.2844 16.6546 14.4784C16.7349 14.6725 16.8527 14.8488 17.0012 14.9974C17.1498 15.146 17.3263 15.2639 17.5205 15.3444C17.7148 15.4249 17.923 15.4665 18.1333 15.4667C18.3437 15.4665 18.5519 15.4249 18.7462 15.3444C18.9404 15.2639 19.1168 15.146 19.2654 14.9974C19.414 14.8488 19.5318 14.6725 19.6121 14.4784C19.6924 14.2844 19.7336 14.0765 19.7333 13.8666Z",
    fill: "black"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.1333 24C18.3437 23.9998 18.5519 23.9583 18.7462 23.8777C18.9404 23.7972 19.1168 23.6793 19.2654 23.5307C19.414 23.3821 19.5318 23.2058 19.6121 23.0118C19.6924 22.8177 19.7336 22.6098 19.7333 22.3999C19.7335 22.19 19.6923 21.9821 19.612 21.7882C19.5317 21.5942 19.4139 21.4179 19.2653 21.2693C19.1167 21.1207 18.9403 21.0029 18.7461 20.9224C18.5519 20.8418 18.3436 20.8003 18.1333 20.8001H16.5333V22.3999C16.5331 22.6098 16.5743 22.8177 16.6546 23.0118C16.7349 23.2058 16.8527 23.3821 17.0012 23.5307C17.1498 23.6793 17.3263 23.7972 17.5205 23.8777C17.7148 23.9583 17.923 23.9998 18.1333 24ZM18.1333 19.7332H22.4C22.6103 19.733 22.8185 19.6915 23.0127 19.611C23.207 19.5305 23.3834 19.4126 23.532 19.264C23.6806 19.1155 23.7984 18.9392 23.8787 18.7452C23.959 18.5512 24.0002 18.3433 24 18.1334C24.0002 17.9235 23.959 17.7156 23.8787 17.5216C23.7985 17.3275 23.6807 17.1512 23.5321 17.0026C23.3835 16.854 23.2071 16.7361 23.0128 16.6556C22.8186 16.5751 22.6103 16.5335 22.4 16.5333H18.1333C17.923 16.5335 17.7148 16.5751 17.5205 16.6556C17.3263 16.7361 17.1498 16.854 17.0012 17.0026C16.8527 17.1512 16.7349 17.3275 16.6546 17.5216C16.5743 17.7156 16.5331 17.9235 16.5333 18.1334C16.5331 18.3433 16.5744 18.5512 16.6547 18.7452C16.735 18.9392 16.8528 19.1155 17.0013 19.264C17.1499 19.4126 17.3264 19.5305 17.5206 19.611C17.7148 19.6915 17.923 19.733 18.1333 19.7332Z",
    fill: "black"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 18.1334C7.99981 18.3433 8.04104 18.5512 8.12134 18.7452C8.20164 18.9392 8.31944 19.1155 8.46801 19.264C8.61659 19.4126 8.79302 19.5305 8.98725 19.611C9.18148 19.6915 9.38969 19.733 9.6 19.7332C9.81031 19.733 10.0185 19.6915 10.2128 19.611C10.407 19.5305 10.5834 19.4126 10.732 19.264C10.8806 19.1155 10.9984 18.9392 11.0787 18.7452C11.159 18.5512 11.2002 18.3433 11.2 18.1334V16.5333H9.6C9.38964 16.5335 9.18138 16.5751 8.98711 16.6556C8.79285 16.7361 8.61638 16.8541 8.4678 17.0027C8.31922 17.1513 8.20143 17.3277 8.12117 17.5218C8.0409 17.7158 7.99973 17.9235 8 18.1334ZM12.2667 18.1334V22.3999C12.2664 22.6098 12.3076 22.8177 12.3879 23.0118C12.4682 23.2058 12.586 23.3821 12.7346 23.5307C12.8832 23.6793 13.0596 23.7972 13.2538 23.8777C13.4481 23.9583 13.6563 23.9998 13.8667 24C14.077 23.9998 14.2852 23.9583 14.4795 23.8777C14.6737 23.7972 14.8502 23.6793 14.9988 23.5307C15.1473 23.3821 15.2651 23.2058 15.3454 23.0118C15.4257 22.8177 15.4669 22.6098 15.4667 22.3999V18.1337C15.4669 17.9238 15.4257 17.7159 15.3454 17.5218C15.2651 17.3278 15.1473 17.1515 14.9988 17.0029C14.8502 16.8543 14.6737 16.7364 14.4795 16.6559C14.2852 16.5753 14.077 16.5338 13.8667 16.5336C13.6563 16.5338 13.4481 16.5753 13.2538 16.6559C13.0596 16.7364 12.8832 16.8543 12.7346 17.0029C12.586 17.1515 12.4682 17.3278 12.3879 17.5218C12.3076 17.7159 12.2664 17.9235 12.2667 18.1334Z",
    fill: "black"
  })),
  support: _react["default"].createElement("g", {
    transform: "translate(5 7)"
  }, _react["default"].createElement("path", {
    d: "M 9 0.0236206C 9.62299 0.00744629 10.2887 0 11 0C 21.0833 0 22 1.5 22 8C 22 14.5 21.0833 16 11 16C 10.6595 16 10.3294 15.9982 10.0095 15.9947L 10.0082 15.9949C 10.0077 15.995 10.0071 15.9952 10.0067 15.9955L 5.55469 18.9636C 4.89014 19.4066 4 18.9302 4 18.1315L 4 15.4624C 4 15.4601 3.99835 15.4581 3.99609 15.4575C 1.01367 14.723 0.223999 13.1274 0.046051 10C 0.0114746 9.3927 0 8.72772 0 8C 0 1.95856 0.791901 0.236511 9 0.0236206ZM 2.47714 12.2372C 2.13568 11.5002 2 10.2927 2 8C 1.99951 6.41864 2.03903 5.33221 2.24951 4.4577C 2.41556 3.659 2.50861 3.43878 2.96548 3.12634C 3.3237 2.84076 3.99329 2.52826 5.34534 2.31049C 6.72906 2.08453 8.50272 2.00055 10.9492 2L 11 2C 13.4727 1.99945 15.2614 2.08295 16.6547 2.31049C 18.0067 2.52826 18.6763 2.84076 19.0345 3.12634C 19.4914 3.43878 19.5844 3.659 19.7505 4.4577C 19.961 5.33221 20.0005 6.41864 20 8C 20.0005 9.58136 19.961 10.6678 19.7505 11.5423C 19.5844 12.341 19.4914 12.5612 19.0345 12.8737C 18.6763 13.1592 18.0067 13.4717 16.6547 13.6895C 15.2614 13.9171 13.4727 14.0005 11 14C 10.6648 14 10.3458 13.9983 10.0316 13.9948C 9.73151 14.014 9.15842 14.1841 8.89725 14.3315L 6 16.263L 6 15.4624C 6 14.4967 5.32776 13.7258 4.47443 13.5156C 3.08609 13.1736 2.70114 12.7207 2.47714 12.2372ZM 10.9824 5.88C 12.2809 4.59998 13.5794 4.91998 14.2287 5.56C 16.8257 8.12 11.7788 11.5 10.9824 11.5C 10.1859 11.5 5.13913 8.12 7.73615 5.56C 8.38538 4.91998 9.6839 4.59998 10.9824 5.88Z"
  })),
  'support-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 22 8.07648C 22.0002 14.5118 22.0002 16 11.5 16C 10.9835 16 10.49 15.9964 10.0184 15.9888L 10.0156 15.9896L 5.55469 18.9636C 4.89014 19.4066 4 18.9302 4 18.1315L 4 15.418C 4 15.4165 3.9993 15.4151 3.9982 15.4142C 3.99762 15.4137 3.99692 15.4133 3.99615 15.4131C 0.439423 14.5103 0 12.4014 0 8C 0 1.5 0.958313 0 11.5 0C 22.0002 0 22.0002 1.48822 22 7.92352L 22 8L 22 8.07648ZM 11 6C 12.2985 4.71997 13.5794 4.91998 14.2286 5.56C 16.8257 8.12 11.7788 11.5 10.9824 11.5C 10.1859 11.5 5.13913 8.12 7.73615 5.56C 8.38538 4.91998 9.70151 4.71997 11 6Z",
    transform: "translate(5 7)"
  })),
  thread: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 3.58569 2.55591C 3.00964 2.69867 2.59576 2.83893 2.28473 3C 2.59576 3.16107 3.00964 3.30133 3.58569 3.44409C 4.96814 3.79199 6.84656 4.00153 9 4C 11.1534 4.00153 13.0319 3.79199 14.4143 3.44409C 14.9904 3.30133 15.4042 3.16107 15.7153 3C 15.4042 2.83893 14.9904 2.69867 14.4143 2.55591C 13.0319 2.20801 11.1534 1.99847 9 2C 6.84656 1.99847 4.96814 2.20801 3.58569 2.55591ZM 9 0C 6.73517 0.00152588 4.61359 0.239685 3.10059 0.615662C 2.32495 0.811035 1.60474 1.07886 1.11987 1.36066C 0.663269 1.63049 0 2.15204 0 3C 0 3.84796 0.663269 4.36951 1.11987 4.63934C 1.60474 4.92114 2.32495 5.18896 3.10059 5.38434C 4.61359 5.76031 6.73517 5.99847 9 6C 11.2648 5.99847 13.3864 5.76031 14.8994 5.38434C 15.675 5.18896 16.3953 4.92114 16.8801 4.63934C 17.3367 4.36951 18 3.84796 18 3C 18 2.15204 17.3367 1.63049 16.8801 1.36066C 16.3953 1.07886 15.675 0.811035 14.8994 0.615662C 13.3864 0.239685 11.2648 0.00152588 9 0ZM 3 15.6415L 3 6.38879C 4.56848 6.75916 6.74707 6.99695 8.99933 7L 9.00067 7C 11.2529 6.99695 13.4315 6.75916 15 6.38879L 15 12.5333C 15.6378 12.8946 16.2509 13.2064 16.884 13.3768C 17.7888 13.6309 18.7344 13.6111 19.8818 12.9099C 20.3531 12.6218 20.9686 12.7703 21.2566 13.2416C 21.5446 13.7128 21.3961 14.3283 20.9249 14.6163C 19.2665 15.6299 17.7411 15.6948 16.3434 15.3024C 15.8802 15.1682 15.4322 14.9863 15 14.7811L 15 15.6415L 15 17C 15 17.6904 12.3137 18.25 9 18.25C 5.68628 18.25 3 17.6904 3 17L 3 15.6415ZM 2 15.9562C 1.66284 16.0826 1.362 16.2199 1.11987 16.3607C 0.663269 16.6305 0 17.152 0 18C 0 18.848 0.663269 19.3695 1.11987 19.6393C 1.60474 19.9211 2.32495 20.189 3.10059 20.3843C 4.61359 20.7603 6.73517 20.9985 9 21C 11.2648 20.9985 13.3864 20.7603 14.8994 20.3843C 15.675 20.189 16.3953 19.9211 16.8801 19.6393C 17.3367 19.3695 18 18.848 18 18C 18 17.152 17.3367 16.6305 16.8801 16.3607C 16.638 16.2199 16.3372 16.0826 16 15.9562L 16 17C 16 17.4349 15.7839 17.7568 15.5916 17.9526C 15.4354 18.1039 15.1794 18.2783 14.9703 18.3837C 14.5935 18.5657 14.0343 18.7393 13.4466 18.8629C 12.3055 19.099 10.7033 19.2489 9 19.25C 7.29669 19.2489 5.69452 19.099 4.55341 18.8629C 3.9657 18.7393 3.40649 18.5657 3.02966 18.3837C 2.82062 18.2783 2.56458 18.1039 2.40845 17.9526C 2.21606 17.7568 2 17.4349 2 17L 2 15.9562Z",
    transform: "translate(6 6)"
  })),
  thumbsdown: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5775 14.6887C14.3267 14.341 14.9003 13.852 15.3369 13.278C15.5731 13.7138 15.9303 14.132 16.4732 14.4251C17.47 14.963 19.0051 14.963 20.0019 14.4251C21.3993 13.6709 21.6221 12.0453 21.6942 10.6136C21.7289 9.89036 21.7375 8.95641 21.7376 7.80176C21.7375 6.6471 21.7289 5.71316 21.6942 4.98989C21.6221 3.55818 21.3993 1.9326 20.0019 1.17843C19.0051 0.64048 17.47 0.64048 16.4732 1.17843C15.9618 1.45445 15.6152 1.84159 15.3793 2.24981C15.1401 1.98061 14.8636 1.73596 14.5454 1.51851C13.2538 0.635712 11.5302 0.467453 10.1881 0.336434C9.01426 0.221846 7.84166 0.0692102 6.66298 0.0146944C5.71916 -0.0275649 4.67884 0.00153175 3.71167 0.370819C1.45262 1.23336 0.687679 3.43556 0.264782 5.97296C-0.218098 8.87028 -0.211308 11.5838 1.7682 13.2611C2.69259 14.0444 3.83361 14.3971 4.94181 14.5786C5.00189 14.5882 5.06274 14.5975 5.12437 14.6064C5.03077 15.0508 4.9896 15.4724 4.98756 15.8018C4.98756 18.1346 6.35162 19.5358 7.55798 20.4169C8.09816 20.8114 8.81247 21.098 9.62532 21.0104C10.4377 20.9229 11.0536 20.4929 11.4523 20.0226C12.1947 19.1468 12.3851 17.9516 12.2065 16.9504C12.1218 16.4759 12.1093 16.1422 12.212 15.8557C12.2859 15.6496 12.5205 15.1793 13.5775 14.6887ZM7.11609 14.773C7.30603 14.1159 7.75196 13.4588 8.73756 12.8018C7.67788 12.8018 6.74923 12.7766 5.9474 12.6944C2.58744 12.3497 1.45411 11.0025 2.23758 6.30176C3.02066 1.6032 4.53964 1.76146 8.86905 2.21253L8.87059 2.21269C12.1114 2.55032 14.7376 2.8472 14.7376 6.80176C14.7376 8.44516 14.6536 9.78171 14.3536 10.8018C14.0608 11.7969 13.5624 12.4908 12.7356 12.8745C9.84489 14.2161 10.0423 16.2074 10.2376 17.3018C10.4328 18.3961 9.71331 19.5144 8.73756 18.8018C7.76181 18.0891 6.98756 17.2105 6.98756 15.8018C6.98756 15.4588 7.01696 15.1159 7.11609 14.773ZM19.7376 7.80176C19.7376 3.21842 19.6126 2.80176 18.2376 2.80176C16.8626 2.80176 16.7376 3.21842 16.7376 7.80176C16.7376 12.3851 16.8626 12.8018 18.2376 12.8018C19.6126 12.8018 19.7376 12.3851 19.7376 7.80176Z",
    transform: "translate(5.26244 5.77551)"
  })),
  'thumbsdown-fill': _react["default"].createElement("g", {
    transform: "translate(7.21309 7.32291)"
  }, _react["default"].createElement("path", {
    d: "M5.78691 11.8084C4.72724 11.8084 4.00271 11.6386 3.45685 11.4584C0.249474 10.3997 -0.496537 9.58643 0.286926 4.88565C1.07001 0.187093 2.5186 -0.5453 6.78691 0.308362C9.28691 0.808362 12.7869 0.885648 12.7869 4.88565C12.7869 6.52905 12.703 8.3656 12.4029 9.38565C11.7731 11.5265 6.90882 13.3425 8.28691 15.8856C8.78691 16.8084 7.78691 17.8084 6.78691 17.3856C5.78691 16.9629 5.03691 15.7944 5.03691 14.3856C5.03691 13.276 5.28691 12.8084 5.78691 11.8084Z"
  }), _react["default"].createElement("path", {
    d: "M16.2869 1.38565C17.6619 1.38565 18.7869 1.80232 18.7869 6.38565C18.7869 10.969 17.6619 11.3856 16.2869 11.3856C14.9119 11.3856 13.7869 10.969 13.7869 6.38565C13.7869 1.80232 14.9119 1.38565 16.2869 1.38565Z"
  })),
  thumbsup: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.11609 6.25327C7.30603 6.91034 7.75196 7.56741 8.73756 8.22448C7.67788 8.22448 6.74923 8.24963 5.9474 8.33187C2.58744 8.6765 1.45411 10.0237 2.23758 14.7245C3.02066 19.423 4.53964 19.2648 8.86905 18.8137C9.14666 18.7848 9.43631 18.7546 9.73758 18.7245C12.8823 18.41 14.7376 18.2245 14.7376 14.2245C14.7376 12.5811 14.6536 11.2445 14.3536 10.2245C14.2542 9.8866 14.1311 9.58344 13.9794 9.31537C13.6845 8.79387 13.2817 8.40512 12.7356 8.15169L13.5775 6.33754C14.3267 6.68523 14.9003 7.17426 15.3369 7.74823C15.5731 7.31245 15.9303 6.89419 16.4732 6.60115C17.1608 6.23008 17.8831 6.22448 18.2376 6.22448C18.5921 6.22448 19.3143 6.23008 20.0019 6.60115C20.8289 7.04747 21.2248 7.78428 21.4188 8.43103C21.5624 8.9347 21.6562 9.65668 21.6942 10.4126C21.7289 11.1359 21.7375 12.0698 21.7376 13.2245C21.7375 14.3791 21.7289 15.3131 21.6942 16.0364C21.6562 16.7923 21.5624 17.5143 21.4188 18.0179C21.2248 18.6647 20.8289 19.4015 20.0019 19.8478C19.3143 20.2189 18.5921 20.2245 18.2376 20.2245C17.8831 20.2245 17.1608 20.2189 16.4732 19.8478C15.9618 19.5718 15.6152 19.1846 15.3793 18.7764C15.1401 19.0456 14.8636 19.2903 14.5454 19.5077C13.2538 20.3905 11.5302 20.5588 10.1881 20.6898C10.1027 20.6981 10.0187 20.7063 9.93658 20.7146C9.65345 20.7428 9.37742 20.7715 9.10868 20.7994L9.10752 20.7996C8.20887 20.8929 7.39167 20.9778 6.66298 21.0115C5.71916 21.0538 4.67884 21.0247 3.71167 20.6554C1.45262 19.7929 0.687679 17.5907 0.264782 15.0533C-0.218098 12.156 -0.211308 9.44247 1.7682 7.76513C2.69259 6.98185 3.83361 6.62916 4.94181 6.44761C5.00189 6.43799 5.06274 6.42876 5.12437 6.41988C5.03077 5.97543 4.9896 5.55387 4.98756 5.22448C4.98756 2.89168 6.35162 1.49043 7.55798 0.609369C8.09816 0.21485 8.81247 -0.0717593 9.62532 0.0158339C10.4377 0.103374 11.0536 0.533314 11.4523 1.00362C12.1947 1.87944 12.3851 3.07465 12.2065 4.0758C12.1218 4.55031 12.1093 4.88402 12.212 5.17057C12.2859 5.37664 12.5205 5.84698 13.5775 6.33754L12.7356 8.15169C9.84489 6.81018 10.0423 4.8188 10.2376 3.72448C10.4328 2.63016 9.71331 1.51184 8.73756 2.22448C7.76181 2.93711 6.98756 3.81576 6.98756 5.22448C6.98756 5.56741 7.01696 5.91034 7.11609 6.25327ZM19.7376 13.2245C19.7376 17.8078 19.6126 18.2245 18.2376 18.2245C16.8626 18.2245 16.7376 17.8078 16.7376 13.2245C16.7376 8.64114 16.8626 8.22448 18.2376 8.22448C19.6126 8.22448 19.7376 8.64114 19.7376 13.2245Z",
    transform: "translate(5.26244 5.77551)"
  })),
  'thumbsup-fill': _react["default"].createElement("g", {
    transform: "translate(7.21309 7.32291)"
  }, _react["default"].createElement("path", {
    d: "M5.78691 5.67708C4.72724 5.67708 4.00271 5.84685 3.45685 6.02702C0.249474 7.08571 -0.496537 7.89903 0.286926 12.5998C1.07001 17.2984 2.5186 18.0308 6.78691 17.1771C9.28691 16.6771 12.7869 16.5998 12.7869 12.5998C12.7869 10.9564 12.703 9.11985 12.4029 8.0998C11.7731 5.95897 6.90882 4.14298 8.28691 1.59981C8.78691 0.677094 7.78691 -0.322918 6.78691 0.0998077C5.78691 0.522533 5.03691 1.69109 5.03691 3.09981C5.03691 4.20943 5.28691 4.67708 5.78691 5.67708Z"
  }), _react["default"].createElement("path", {
    d: "M16.2869 16.0998C17.6619 16.0998 18.7869 15.6831 18.7869 11.0998C18.7869 6.51647 17.6619 6.09981 16.2869 6.09981C14.9119 6.09981 13.7869 6.51647 13.7869 11.0998C13.7869 15.6831 14.9119 16.0998 16.2869 16.0998Z"
  })),
  twitter: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z"
  })),
  up: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M21.934,6.364c-1.478,-0.284 -3.354,-0.365 -5.934,-0.364c-2.58,-0.001 -4.456,0.08 -5.934,0.364c-1.402,0.264 -2.137,0.66 -2.589,1.113c-0.453,0.452 -0.849,1.187 -1.113,2.589c-0.284,1.478 -0.365,3.354 -0.364,5.934c-0.001,2.58 0.08,4.456 0.364,5.934c0.264,1.402 0.66,2.137 1.113,2.589c0.452,0.453 1.187,0.849 2.589,1.113c1.478,0.284 3.354,0.364 5.934,0.364c2.58,0 4.456,-0.08 5.934,-0.364c1.402,-0.264 2.137,-0.66 2.589,-1.113c0.453,-0.452 0.849,-1.187 1.113,-2.589c0.284,-1.478 0.364,-3.354 0.364,-5.934c0,-2.58 -0.08,-4.456 -0.364,-5.934c-0.264,-1.402 -0.66,-2.137 -1.113,-2.589c-0.452,-0.453 -1.187,-0.849 -2.589,-1.113Zm6.066,9.636c0,-10.5 -1.5,-12 -12,-12c-10.5,0 -12,1.5 -12,12c0,10.5 1.5,12 12,12c10.5,0 12,-1.5 12,-12Z"
  }), _react["default"].createElement("path", {
    d: "M10.11,19.018c0.424,0.354 1.055,0.297 1.408,-0.128c1.391,-1.636 2.76,-3.464 4.482,-4.774c1.749,1.331 3.085,3.1 4.482,4.774c0.353,0.425 0.984,0.482 1.408,0.128c0.42,-0.349 0.476,-0.99 0.127,-1.409c-1.505,-1.799 -3.031,-3.827 -4.964,-5.2c-0.311,-0.219 -0.663,-0.409 -1.053,-0.409c-0.39,0 -0.742,0.19 -1.053,0.409c-1.914,1.359 -3.471,3.41 -4.965,5.201c-0.354,0.424 -0.296,1.055 0.128,1.408Z"
  })),
  'up-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,4c10.5,0 12,1.5 12,12c0,10.5 -1.5,12 -12,12c-10.5,0 -12,-1.5 -12,-12c0,-10.5 1.5,-12 12,-12Zm-4.482,14.89c-0.353,0.424 -0.984,0.482 -1.408,0.128c-0.424,-0.353 -0.482,-0.984 -0.128,-1.408l0.001,-0.001c0.216,-0.26 0.433,-0.524 0.652,-0.79c1.299,-1.581 2.658,-3.235 4.312,-4.41c0.311,-0.219 0.663,-0.409 1.053,-0.409c0.39,0 0.742,0.19 1.053,0.409c1.679,1.193 2.988,2.791 4.285,4.374c0.226,0.277 0.452,0.553 0.68,0.826c0.354,0.425 0.296,1.056 -0.128,1.409c-0.424,0.354 -1.055,0.296 -1.408,-0.128c-0.212,-0.254 -0.423,-0.511 -0.634,-0.768c-1.178,-1.434 -2.365,-2.878 -3.848,-4.006c-1.457,1.108 -2.673,2.584 -3.848,4.009c-0.212,0.257 -0.423,0.513 -0.634,0.765Z"
  })),
  view: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 2.06943 7.14746C 2.04023 7.08008 2.02279 7.03156 2.0125 7C 2.02279 6.96844 2.04023 6.91992 2.06943 6.85254C 2.15181 6.65991 2.2622 6.45642 2.43916 6.18579C 2.80449 5.62134 3.30807 5.00348 4.01971 4.36969C 5.46653 3.06451 7.38721 1.96802 10 2C 12.6128 1.96802 14.5335 3.06451 15.9803 4.36969C 16.6919 5.00348 17.1955 5.62134 17.5608 6.18579C 17.7378 6.45642 17.8482 6.65991 17.9306 6.85254C 17.9598 6.91992 17.9772 6.96844 17.9875 7C 17.9772 7.03156 17.9598 7.08008 17.9306 7.14746C 17.8482 7.34009 17.7378 7.54358 17.5608 7.81421C 17.1955 8.37866 16.6919 8.99652 15.9803 9.63031C 14.5335 10.9355 12.6128 12.032 10 12C 7.38721 12.032 5.46653 10.9355 4.01971 9.63031C 3.30807 8.99652 2.80449 8.37866 2.43916 7.81421C 2.2622 7.54358 2.15181 7.34009 2.06943 7.14746ZM 10 0C 6.88552 0.0319824 4.3062 1.43549 2.68483 2.88031C 1.86238 3.62152 1.18983 4.44116 0.762543 5.09546C 0.543196 5.4342 0.353159 5.7854 0.234196 6.05762C 0.120506 6.32007 0 6.66284 0 7C 0 7.33716 0.120506 7.67993 0.234196 7.94238C 0.353159 8.2146 0.543196 8.5658 0.762543 8.90454C 1.18983 9.55884 1.86238 10.3785 2.68483 11.1197C 4.3062 12.5645 6.88552 13.968 10 14C 13.1145 13.968 15.6938 12.5645 17.3152 11.1197C 18.1376 10.3785 18.8102 9.55884 19.2375 8.90454C 19.4568 8.5658 19.6468 8.2146 19.7658 7.94238C 19.8795 7.67993 20 7.33716 20 7C 20 6.66284 19.8795 6.32007 19.7658 6.05762C 19.6468 5.7854 19.4568 5.4342 19.2375 5.09546C 18.8102 4.44116 18.1376 3.62152 17.3152 2.88031C 15.6938 1.43549 13.1145 0.0319824 10 0ZM 12.5 6.5C 12.6546 6.5 12.8051 6.48248 12.9496 6.44928C 12.9827 6.62781 13 6.81189 13 7C 13 8.65686 11.6569 10 10 10C 8.34315 10 7 8.65686 7 7C 7 5.34314 8.34315 4 10 4C 10.1881 4 10.3722 4.01727 10.5507 4.05042C 10.5175 4.19495 10.5 4.3454 10.5 4.5C 10.5 5.60455 11.3954 6.5 12.5 6.5Z",
    transform: "translate(6 9)"
  })),
  'view-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 10 0C 6.82915 0 4.35131 1.38666 2.68483 2.88031C 1.85171 3.62708 1.20635 4.41302 0.762543 5.09546C 0.541014 5.43604 0.36179 5.76306 0.234196 6.05762C 0.120506 6.32007 0 6.66284 0 7C 0 7.33716 0.120506 7.67993 0.234196 7.94238C 0.36179 8.23694 0.541014 8.56396 0.762543 8.90454C 1.20635 9.58698 1.85171 10.3729 2.68483 11.1197C 4.35131 12.6133 6.82915 14 10 14C 13.1709 14 15.6487 12.6133 17.3152 11.1197C 18.1483 10.3729 18.7937 9.58698 19.2375 8.90454C 19.459 8.56396 19.6382 8.23694 19.7658 7.94238C 19.8795 7.67993 20 7.33716 20 7C 20 6.66284 19.8795 6.32007 19.7658 6.05762C 19.6382 5.76306 19.459 5.43604 19.2375 5.09546C 18.7937 4.41302 18.1483 3.62708 17.3152 2.88031C 15.6487 1.38666 13.1709 0 10 0ZM 12.5 6.5C 12.6546 6.5 12.8051 6.48248 12.9496 6.44928C 12.9827 6.62781 13 6.81189 13 7C 13 8.65686 11.6569 10 10 10C 8.34315 10 7 8.65686 7 7C 7 5.34314 8.34315 4 10 4C 10.1881 4 10.3722 4.01727 10.5507 4.05042C 10.5175 4.19495 10.5 4.3454 10.5 4.5C 10.5 5.60455 11.3954 6.5 12.5 6.5Z",
    transform: "translate(6 9)"
  })),
  'view-back': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19.768,23.89c0.354,-0.424 0.296,-1.055 -0.128,-1.408c-1.645,-1.377 -5.465,-4.762 -6.774,-6.482c1.331,-1.749 5.1,-5.085 6.774,-6.482c0.424,-0.353 0.482,-0.984 0.128,-1.408c-0.353,-0.425 -0.984,-0.482 -1.409,-0.128c-1.839,1.532 -5.799,4.993 -7.2,6.964c-0.219,0.312 -0.409,0.664 -0.409,1.054c0,0.39 0.19,0.742 0.409,1.053c1.373,1.932 5.399,5.462 7.2,6.964l0.001,0.001c0.424,0.354 1.055,0.296 1.408,-0.128Z"
  })),
  'view-close': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M11.121,9.707c-0.39,-0.391 -1.024,-0.391 -1.414,0c-0.391,0.39 -0.391,1.024 0,1.414l4.95,4.95l-4.95,4.95c-0.391,0.39 -0.391,1.023 0,1.414c0.39,0.39 1.024,0.39 1.414,0l4.95,-4.95l4.95,4.95c0.39,0.39 1.023,0.39 1.414,0c0.39,-0.391 0.39,-1.024 0,-1.414l-4.95,-4.95l4.95,-4.95c0.39,-0.39 0.39,-1.024 0,-1.414c-0.391,-0.391 -1.024,-0.391 -1.414,0l-4.95,4.95l-4.95,-4.95Z"
  })),
  'view-close-small': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M 15.4142 3.41421C 16.1952 2.63317 16.1952 1.36681 15.4142 0.585777C 14.6332 -0.195259 13.3668 -0.195259 12.5858 0.585777L 8.00005 5.17156L 3.41423 0.585777C 2.63322 -0.195259 1.36687 -0.195259 0.585861 0.585777C -0.195206 1.36681 -0.195206 2.63317 0.585861 3.41421L 5.17162 7.99996L 0.5858 12.5858C -0.195267 13.3668 -0.195267 14.6332 0.5858 15.4142C 1.36681 16.1952 2.63316 16.1952 3.41417 15.4142L 8.00005 10.8284L 12.5859 15.4142C 13.3669 16.1952 14.6332 16.1952 15.4142 15.4142C 16.1953 14.6332 16.1953 13.3668 15.4142 12.5858L 10.8284 7.99996L 15.4142 3.41421Z",
    transform: "translate(8 8)"
  })),
  'view-forward': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M12.982,23.89c-0.354,-0.424 -0.296,-1.055 0.128,-1.408c1.645,-1.377 5.465,-4.762 6.774,-6.482c-1.331,-1.749 -5.1,-5.085 -6.774,-6.482c-0.424,-0.353 -0.482,-0.984 -0.128,-1.408c0.353,-0.425 0.984,-0.482 1.409,-0.128c1.839,1.532 5.799,4.993 7.2,6.964c0.219,0.312 0.409,0.664 0.409,1.054c0,0.39 -0.19,0.742 -0.409,1.053c-1.373,1.932 -5.399,5.462 -7.2,6.964l-0.001,0.001c-0.424,0.354 -1.055,0.296 -1.408,-0.128Z"
  })),
  'view-reload': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M20.726,14.162c-0.776,-2.415 -3.04,-4.162 -5.713,-4.162c-3.314,0 -6,2.686 -6,6c0,3.314 2.686,6 6,6c2.063,0 3.883,-1.041 4.962,-2.626c0.333,-0.489 0.988,-0.707 1.497,-0.406c0.437,0.26 0.611,0.814 0.342,1.246c-1.411,2.273 -3.929,3.786 -6.801,3.786c-4.418,0 -8,-3.582 -8,-8c0,-4.418 3.582,-8 8,-8c3.53,0 6.525,2.286 7.588,5.458c0.278,-0.429 0.537,-0.848 0.736,-1.175c0.108,-0.178 0.196,-0.324 0.258,-0.428l0.042,-0.07l0.029,-0.05l0.018,-0.03l0.005,-0.008l0.001,-0.002c0.279,-0.476 0.892,-0.636 1.368,-0.357c0.477,0.279 0.636,0.892 0.357,1.369l-0.001,0.001l-0.001,0.002l-0.005,0.009l-0.02,0.034c-0.017,0.028 -0.043,0.072 -0.075,0.125l-0.062,0.105l-0.015,0.025l-0.084,0.139c-0.033,0.055 -0.069,0.114 -0.107,0.176c-0.222,0.365 -0.528,0.86 -0.849,1.35c-0.32,0.49 -0.676,1.006 -0.978,1.389c-0.157,0.198 -0.336,0.402 -0.482,0.54c-0.084,0.077 -0.217,0.181 -0.316,0.243c-0.103,0.062 -0.357,0.201 -0.695,0.178c-0.202,-0.013 -0.369,-0.08 -0.447,-0.113c-0.083,-0.035 -0.195,-0.091 -0.283,-0.141c-0.164,-0.092 -0.372,-0.224 -0.575,-0.363c-0.399,-0.272 -0.884,-0.633 -1.337,-0.98c-0.453,-0.348 -0.892,-0.697 -1.214,-0.954c-0.162,-0.13 -0.296,-0.239 -0.389,-0.314l-0.108,-0.088l-0.029,-0.024l-0.007,-0.006l-0.002,-0.001l-0.001,-0.001c-0.427,-0.35 -0.489,-0.98 -0.139,-1.407c0.35,-0.428 0.98,-0.489 1.407,-0.139l0.036,0.029l0.104,0.085c0.091,0.074 0.221,0.178 0.379,0.305c0.317,0.255 0.74,0.59 1.181,0.928c0.143,0.11 0.285,0.218 0.425,0.323Z"
  })),
  welcome: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M24.518,7.453c0.279,0.487 0.058,1.095 -0.452,1.329l-0.103,0.047c-0.437,0.201 -0.953,0.013 -1.194,-0.404c-1.199,-2.078 -2.928,-3.659 -4.917,-4.673c-0.493,-0.251 -0.741,-0.834 -0.529,-1.346c0.21,-0.509 0.794,-0.755 1.288,-0.511c2.385,1.179 4.46,3.053 5.89,5.53l0.017,0.028Zm-2.539,1.428c0.215,0.371 0.046,0.837 -0.343,1.016l-0.568,0.26c-0.301,0.138 -0.655,0.011 -0.821,-0.276c-0.865,-1.499 -2.094,-2.656 -3.511,-3.425c-0.487,-0.265 -0.736,-0.846 -0.524,-1.358c0.21,-0.509 0.794,-0.756 1.283,-0.504c1.813,0.938 3.388,2.388 4.484,4.287Zm3.225,5.464c-0.13,0.288 -0.264,0.586 -0.336,0.89c-0.28,1.179 0,2.632 0,2.632c0,0 0.513,2.835 0,4.289c-0.855,2.423 -2.471,4.253 -5.113,4.253c-1.282,0 -2.765,-1.207 -3.956,-2.177l-0.001,0l0,0l-0.001,-0.001c-0.388,-0.316 -0.744,-0.606 -1.053,-0.821c-0.807,-0.563 -2.506,-1.542 -3.711,-2.237c-0.67,-0.386 -1.187,-0.684 -1.312,-0.773c-0.631,-0.448 -0.731,-1.306 -0.38,-1.867c0.351,-0.561 1.245,-0.91 1.929,-0.37c0.684,0.54 2.946,1.941 2.946,1.941c0,0 -3.64,-3.678 -4.283,-4.221c-0.644,-0.544 -0.727,-1.5 -0.212,-2.014c0.514,-0.514 1.324,-0.538 1.799,-0.151c0.475,0.387 4.364,4.149 4.364,4.149c0,0 -3.987,-5.03 -4.364,-5.495c-0.376,-0.465 -0.483,-1.281 0,-1.764c0.484,-0.484 1.325,-0.486 1.826,0c0.5,0.486 4.378,5.174 4.378,5.174c0,0 -2.669,-4.478 -2.98,-5.174c-0.31,-0.696 -0.03,-1.597 0.617,-1.84c0.648,-0.242 1.384,-0.054 1.802,0.53c0.115,0.159 0.433,0.744 0.85,1.511c1.112,2.044 2.928,5.382 3.453,5.382c0.477,0 0.511,-0.272 0.577,-0.805l0,0l0,-0.001c0.034,-0.274 0.077,-0.617 0.193,-1.027c0.307,-1.086 2.073,-2.919 3.071,-1.755c0.446,0.521 0.181,1.109 -0.103,1.742Zm0.802,12.595c-2.22,2.422 -3.372,2.045 -4.129,1.488c-1.62,-1.191 -1.406,-1.27 -0.507,-1.605c0.648,-0.24 1.65,-0.612 2.579,-1.626c0.843,-0.92 1.227,-1.771 1.486,-2.346c0.424,-0.939 0.516,-1.142 1.734,0.293c0.609,0.716 1.058,1.374 -1.163,3.796Zm-20.864,-8.729c-0.473,0.081 -0.791,0.535 -0.667,0.999c0.627,2.34 1.901,4.333 3.578,5.839c0.409,0.368 1.038,0.281 1.373,-0.157c0.336,-0.439 0.247,-1.066 -0.159,-1.443c-1.337,-1.242 -2.352,-2.863 -2.86,-4.756c-0.099,-0.37 -0.456,-0.619 -0.834,-0.555l-0.431,0.073Zm-2.709,0.46c0.526,-0.089 1.023,0.26 1.161,0.775c0.681,2.539 2.069,4.699 3.897,6.324c0.414,0.368 0.501,0.995 0.165,1.434c-0.335,0.438 -0.963,0.525 -1.379,0.163c-2.167,-1.887 -3.815,-4.418 -4.615,-7.403c-0.011,-0.041 -0.021,-0.082 -0.032,-0.124c-0.141,-0.542 0.23,-1.071 0.783,-1.165l0.02,-0.004Z"
  })),
  bag: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27 18.5c0 6.5-.917 8-11 8-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976v-5.001c0-1.105.895-1.999 2-1.999h18a2 2 0 0 1 2 1.999V18.5zm-11.018-1.87c1.299-1.28 2.597-.96 3.247-.32 2.597 2.56-2.45 5.94-3.247 5.94-.796 0-5.843-3.38-3.246-5.94.65-.64 1.948-.96 3.246.32z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 5.5a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 1 1 6 0v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5z"
  })),
  'bag-add': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M27 18.5c0 6.5-.917 8-11 8-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976v-5.001c0-1.105.895-1.999 2-1.999h18a2 2 0 0 1 2 1.999V18.5zM16 15a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a.999.999 0 1 0 2 0v-2h1.999a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 5.5a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 6 0v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5z"
  })),
  'bank-account': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16.194 8.096A2.397 2.397 0 0 0 16 8.018V6c.358 0 .735.149.997.264.297.13.676.326 1.077.555a37.817 37.817 0 0 1 2.878 1.864c2.15 1.518 2.548 1.817 4.755 3.61a.999.999 0 1 1-1.414 1.414C22 12 21.9 11.799 19.798 10.317a35.088 35.088 0 0 0-2.716-1.761 9.091 9.091 0 0 0-.888-.46zM15.806 8.096c.09-.04.153-.064.194-.078V6c-.358 0-.735.149-.997.264-.297.13-.676.326-1.077.555a37.817 37.817 0 0 0-2.878 1.864C8.9 10.201 8.5 10.5 6.293 12.293a.999.999 0 1 0 1.414 1.414c2.294-1.707 2.394-1.908 4.495-3.39a35.088 35.088 0 0 1 2.716-1.761c.365-.209.65-.357.888-.46zM7 24a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 22a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1zM21 22a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1zM11 22a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"
  })),
  'bank-circle': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16.194 8.096A2.397 2.397 0 0 0 16 8.018V6c.358 0 .735.149.997.264.297.13.676.326 1.077.555a37.817 37.817 0 0 1 2.878 1.864c2.15 1.518 2.548 1.817 4.755 3.61a.999.999 0 1 1-1.414 1.414C22 12 21.9 11.799 19.798 10.317a35.088 35.088 0 0 0-2.716-1.761 9.091 9.091 0 0 0-.888-.46zM15.806 8.096c.09-.04.153-.064.194-.078V6c-.358 0-.735.149-.997.264-.297.13-.676.326-1.077.555a37.817 37.817 0 0 0-2.878 1.864C8.9 10.201 8.5 10.5 6.293 12.293a.999.999 0 1 0 1.414 1.414c2.294-1.707 2.394-1.908 4.495-3.39a35.088 35.088 0 0 1 2.716-1.761c.365-.209.65-.357.888-.46zM7 24a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 22a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1zM21 22a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1zM11 22a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30 16c0 7.364-6.636 14-14 14S2 23.364 2 16 8.636 2 16 2s14 6.636 14 14zm2 0c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16z"
  })),
  'bank-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32 16c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16zM16.194 8.096A2.395 2.395 0 0 0 16 8.018a2.41 2.41 0 0 0-.194.078 9.096 9.096 0 0 0-.888.46 35.105 35.105 0 0 0-2.716 1.761 50.516 50.516 0 0 0-2.435 1.814 92.19 92.19 0 0 1-2.06 1.576.999.999 0 1 1-1.414-1.414C8.5 10.5 8.9 10.201 11.048 8.683a37.82 37.82 0 0 1 2.878-1.864c.401-.229.78-.425 1.077-.555.262-.115.64-.264.997-.264.358 0 .735.149.997.264.297.13.676.326 1.077.555a37.78 37.78 0 0 1 2.878 1.864c2.15 1.518 2.548 1.817 4.755 3.61a.999.999 0 1 1-1.414 1.414 92.156 92.156 0 0 1-2.06-1.576 50.503 50.503 0 0 0-2.435-1.814 35.085 35.085 0 0 0-2.716-1.761 9.074 9.074 0 0 0-.888-.46zM7 24a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1zm8-3a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0v7zm6 1a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1zm-11-1a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0v7z"
  })),
  card: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.709 21.048C25.95 19.836 26 18.256 26 16c0-2.256-.05-3.836-.291-5.048-.216-1.11-.533-1.577-.864-1.853-.384-.32-1.094-.641-2.597-.844C20.717 8.046 18.726 8 16 8c-2.725 0-4.717.046-6.248.255-1.503.203-2.213.524-2.597.844-.331.276-.648.743-.864 1.853C6.05 12.164 6 13.744 6 16c0 2.256.05 3.836.291 5.048.216 1.11.533 1.577.864 1.853.384.32 1.094.641 2.597.843 1.531.21 3.523.256 6.248.256 2.726 0 4.717-.046 6.248-.256 1.503-.202 2.213-.523 2.597-.843.331-.276.648-.743.864-1.853zM16 26c11 0 12-.833 12-10S27 6 16 6 4 6.833 4 16s1 10 12 10z"
  }), _react["default"].createElement("path", {
    d: "M6 11h20v4H6z"
  })),
  clock: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    d: "M15.64 17a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"
  }), _react["default"].createElement("path", {
    d: "M21.702 19.502a1 1 0 0 1-1.366.366l-5.196-3a1 1 0 0 1 1-1.732l5.196 3a1 1 0 0 1 .366 1.366z"
  })),
  'clock-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-13.34.201a.997.997 0 0 1-.02-.201V9a1 1 0 0 1 2 0v6.425l4.696 2.711a1 1 0 0 1-1 1.732l-5.196-3a.998.998 0 0 1-.48-.667z"
  })),
  docs: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.048 6.291C19.836 6.05 18.256 6 16 6c-2.256 0-3.836.05-5.048.291-1.11.216-1.577.533-1.853.864-.32.384-.641 1.094-.844 2.597C8.046 11.283 8 13.274 8 16c0 2.725.046 4.717.255 6.248.203 1.503.524 2.213.844 2.597.276.331.743.648 1.853.864C12.164 25.95 13.744 26 16 26c2.256 0 3.836-.05 5.048-.291 1.11-.216 1.577-.533 1.853-.864.32-.384.641-1.094.843-2.597.21-1.531.256-3.523.256-6.248 0-2.726-.046-4.717-.256-6.248-.202-1.503-.523-2.213-.843-2.597-.276-.331-.743-.648-1.853-.864zM26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 11a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2h-11a1 1 0 0 1-1-1zM9.5 16a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2h-11a1 1 0 0 1-1-1zM9.5 21a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z"
  })),
  'docs-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12zm-15.5-6a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2h-11zm-1 6a1 1 0 0 1 1-1h11a1 1 0 0 1 0 2h-11a1 1 0 0 1-1-1zm1 4a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8z"
  })),
  'event-add': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-3.664 8.336C25.425 23.247 26 21.1 26 16c0-2.14-.102-3.76-.3-5H6.3c-.198 1.24-.3 2.86-.3 5 0 5.1.576 7.247 1.665 8.336C8.753 25.425 10.9 26 16 26s7.247-.575 8.336-1.664zM11 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 15.5a1 1 0 0 1 1.999 0v2h2a1.001 1.001 0 0 1 0 2h-2v2a1 1 0 0 1-1.999 0v-2h-2a1.001 1.001 0 0 1 0-2h2v-2z"
  })),
  'event-cancel': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-3.664 8.336C25.425 23.247 26 21.1 26 16c0-2.14-.102-3.76-.3-5H6.3c-.198 1.24-.3 2.86-.3 5 0 5.1.576 7.247 1.665 8.336C8.753 25.425 10.9 26 16 26s7.247-.575 8.336-1.664zM11 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.171 17.086a1 1 0 0 1 1.414-1.414L16 17.086l1.414-1.414a1.001 1.001 0 0 1 1.414 1.414L17.414 18.5l1.414 1.414a1 1 0 0 1-1.414 1.414L16 19.914l-1.413 1.414a1.001 1.001 0 0 1-1.414-1.414l1.413-1.414-1.414-1.414z"
  })),
  'event-code': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-3.664 8.336C25.425 23.247 26 21.1 26 16c0-2.14-.101-3.76-.3-5H6.3C6.1 12.24 6 13.86 6 16c0 5.1.575 7.247 1.664 8.336C8.753 25.425 10.9 26 16 26s7.247-.575 8.336-1.664zM11 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z"
  }), _react["default"].createElement("path", {
    d: "M9.082 19.325c-.157-.209-.332-.49-.332-.825 0-.335.175-.617.332-.826h.001c.849-1.104 1.978-1.963 3.077-2.798l.01-.008.546-.418a.976.976 0 0 1 1.31.114.86.86 0 0 1-.121 1.265c-.18.14-.362.277-.543.415-.925.706-1.842 1.404-2.576 2.256.725.838 1.659 1.552 2.579 2.256.181.139.362.276.54.415a.859.859 0 0 1 .121 1.265.976.976 0 0 1-1.31.113h-.001l-.183-.142-.079-.06-.268-.205-.003-.002c-1.097-.837-2.264-1.728-3.099-2.814l-.001-.002zM22.918 19.325c.157-.209.332-.49.332-.825 0-.335-.175-.617-.332-.826h-.001c-.849-1.104-1.978-1.963-3.077-2.798a89.607 89.607 0 0 1-.556-.425.976.976 0 0 0-1.31.112.86.86 0 0 0 .121 1.266c.18.14.361.277.541.415h.002c.925.706 1.842 1.404 2.576 2.256-.725.838-1.659 1.552-2.579 2.256-.181.139-.362.276-.54.415a.859.859 0 0 0-.121 1.265.976.976 0 0 0 1.31.113h.001l.53-.407.003-.002c1.097-.837 2.264-1.728 3.099-2.814l.001-.002z"
  })),
  external: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.536 11.465c.552 0 1 .448 1 1v5.657a.999.999 0 1 1-2 0v-3.243l-5.364 5.364a1 1 0 0 1-1.415-1.414l5.365-5.364h-3.243a.999.999 0 1 1 0-2h5.657z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.586 22.586C23.45 21.722 24 20.014 24 16s-.55-5.722-1.414-6.586C21.722 8.55 20.014 8 16 8s-5.722.55-6.586 1.414C8.55 10.278 8 11.986 8 16s.55 5.722 1.414 6.586C10.278 23.45 11.986 24 16 24s5.722-.55 6.586-1.414zM16 26c8 0 10-2 10-10S24 6 16 6 6 8 6 16s2 10 10 10z"
  })),
  'external-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 8-2 10-10 10S6 24 6 16 8 6 16 6s10 2 10 10zm-5.465-3.535c.001-.552-.447-1-1-1H13.88a.999.999 0 1 0 0 2h3.243l-5.365 5.364a1 1 0 0 0 1.415 1.414l5.364-5.364v3.243a.999.999 0 1 0 2 0v-5.657z"
  })),
  filter: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 11a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1zM10 16a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H11a1 1 0 0 1-1-1zM13 21a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1z"
  })),
  history: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10-4.16 0-7.726-2.54-9.233-6.153l-1.847.77C6.73 24.952 11.008 28 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16h2c0-5.523 4.477-10 10-10s10 4.477 10 10z"
  }), _react["default"].createElement("path", {
    d: "M4.293 17.707a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.415l-1.188 1.293H4.078l-1.37-1.293a1 1 0 0 0-1.415 1.415l3 3zM5.462 19.313a1 1 0 0 0-.541 1.306l1.848-.765a1 1 0 0 0-1.307-.541zM15.64 17a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z"
  }), _react["default"].createElement("path", {
    d: "M21.702 19.502a1 1 0 0 1-1.366.366l-5.196-3a1 1 0 0 1 1-1.732l5.196 3a1 1 0 0 1 .366 1.366z"
  })),
  important: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    d: "M16 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 19c1.5 0 2-5 2-7.5C18 10 17.5 9 16 9s-2 1-2 2.5c0 2.5.5 7.5 2 7.5z"
  })),
  'important-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-12 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2-11.5c0 2.5-.5 7.5-2 7.5s-2-5-2-7.5c0-1.5.5-2.5 2-2.5s2 1 2 2.5z"
  })),
  medium: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-16.719-3.437c.111.1.168.247.153.395v5.344a.615.615 0 0 1-.164.53L10 20.372v.204h3.601v-.204l-1.27-1.54a.638.638 0 0 1-.175-.53V13.68l3.16 6.896h.368l2.715-6.896v5.496c0 .147 0 .175-.096.271l-.977.948v.203h4.741v-.203l-.942-.925a.282.282 0 0 1-.107-.271v-6.8a.282.282 0 0 1 .107-.27l.965-.926V11h-3.341l-2.382 5.942L13.657 11h-3.505v.203l1.13 1.36z"
  })),
  instagram: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 6c5.1 0 7.247.575 8.336 1.664C25.425 8.753 26 10.9 26 16s-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.336C8.753 6.575 10.9 6 16 6zm0-2c10 0 12 2 12 12s-2 12-12 12S4 26 4 16 6 4 16 4z"
  }), _react["default"].createElement("path", {
    d: "M16 9.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.845-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
  })),
  'message-simple-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16.5 24C27.042 24 28 22.5 28 16s-.958-8-11.5-8S5 9.5 5 16c0 4.401.439 6.51 3.996 7.413.002.001.004.003.004.005v2.713a1 1 0 0 0 1.555.833l4.461-2.974.002-.001c.472.007.965.011 1.482.011z"
  })),
  payment: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M16,7c-0.552,0 -1,0.448 -1,1l0,2.019l2,-0.004l0,-2.015c0,-0.552 -0.448,-1 -1,-1Z"
  }), _react["default"].createElement("path", {
    d: "M17,24l0,-2.015l-2,0l0,2.015c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1Z"
  }), _react["default"].createElement("path", {
    d: "M21.909,12.004c0.107,0.542 -0.358,0.995 -0.91,0.995c-0.552,0.001 -0.942,-0.492 -1.25,-0.95c-0.402,-0.598 -0.499,-1.049 -3.749,-1.049c-3.25,0 -4,0 -4,2c0,2 0.606,2 4,2c5.143,0 6,0.8 6,4c0,2.95 -1.275,3.86 -5,3.985c-0.631,0.021 -1.369,0.021 -2,0c-2.872,-0.096 -4.559,-0.785 -4.924,-2.988c-0.091,-0.545 0.372,-0.997 0.924,-0.997c0.552,0 0.925,0.463 1.075,0.995c0.208,0.736 0.99,1.005 3.925,1.005c4,0 4,-0.5 4,-1.998l0,-0.004c0,-1.498 0,-1.998 -4,-1.998c-5.143,0 -6,-1 -6,-4c0,-2.766 1.275,-3.832 5,-3.981c0.631,-0.026 1.369,-0.025 2,-0.004c3.006,0 4.537,1.096 4.909,2.989Z"
  })),
  'payment-docs': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.048 6.291C19.836 6.05 18.256 6 16 6c-2.256 0-3.836.05-5.048.291-1.11.216-1.577.533-1.853.864-.32.384-.641 1.094-.844 2.597C8.046 11.283 8 13.274 8 16c0 2.725.046 4.717.255 6.248.203 1.503.524 2.213.844 2.597.276.331.743.648 1.853.864C12.164 25.95 13.744 26 16 26c2.256 0 3.836-.05 5.048-.291 1.11-.216 1.577-.533 1.853-.864.32-.384.641-1.094.843-2.597.21-1.531.256-3.523.256-6.248 0-2.726-.046-4.717-.256-6.248-.202-1.503-.523-2.213-.843-2.597-.276-.331-.743-.648-1.853-.864zM26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 7a1 1 0 0 0-1 1v2.019l2-.004V8a1 1 0 0 0-1-1zM17 24v-2.015h-2V24a1 1 0 0 0 2 0z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.909 12.004c.107.542-.358.995-.91.995-.552.001-.942-.492-1.25-.95C19.347 11.451 19.25 11 16 11s-4 0-4 2 .606 2 4 2c5.143 0 6 .8 6 4 0 2.95-1.275 3.86-5 3.985-.631.021-1.369.021-2 0-2.872-.096-4.559-.785-4.924-2.988-.091-.545.372-.997.924-.997s.925.463 1.075.995c.208.736.99 1.005 3.925 1.005 4 0 4-.5 4-1.998v-.004C20 17.5 20 17 16 17c-5.143 0-6-1-6-4 0-2.766 1.275-3.832 5-3.981a28.378 28.378 0 0 1 2-.004c3.006 0 4.537 1.096 4.909 2.989z"
  })),
  purse: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19.229 17.06c-.65-.64-1.948-.96-3.247.32-1.298-1.28-2.597-.96-3.246-.32-2.597 2.56 2.45 5.94 3.246 5.94.797 0 5.844-3.38 3.247-5.94z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 11.524a77.266 77.266 0 0 1 2-.024c10.083 0 11 1.5 11 8s-.917 8-11 8c-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976s.792-7.764 9-7.976zM7 19.5c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816 1.384.226 3.158.31 5.604.31H16c2.473 0 4.261-.083 5.655-.31 1.352-.218 2.021-.53 2.38-.816.456-.313.55-.533.715-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816-1.394-.227-3.182-.31-5.655-.31h-.05c-2.447 0-4.22.085-5.605.31-1.352.218-2.021.53-2.38.816-.456.313-.55.533-.715 1.332-.211.874-.25 1.96-.25 3.542z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 4.5a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 6 0v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5z"
  })),
  'purse-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 11.5c-.711 0-1.377.007-2 .024-8.208.213-9 1.935-9 7.976s.792 7.764 9 7.976c.623.017 1.289.024 2 .024 10.083 0 11-1.5 11-8s-.917-8-11-8zm-.018 5.88c1.299-1.28 2.597-.96 3.247-.32 2.597 2.56-2.45 5.94-3.247 5.94-.796 0-5.843-3.38-3.246-5.94.65-.64 1.948-.96 3.246.32z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 4.5a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 6 0v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5z"
  })),
  shirt: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.956 14.112c-.034.525.37 1.01.869.84 1.466-.5 2.22-2.413 2.22-3.877 0-1.465-.755-3.376-2.22-3.877-.498-.17-.903.315-.869.84.038.555.576 1.146.796 1.657.212.49.294 1.128.294 1.38 0 .301-.069.935-.274 1.41-.221.51-.778 1.072-.816 1.627zM7.043 8.038c.035-.525-.37-1.01-.868-.84-1.466.5-2.22 2.413-2.22 3.877 0 1.465.754 3.376 2.22 3.877.498.17.903-.315.868-.84-.037-.555-.575-1.146-.795-1.657a4.142 4.142 0 0 1-.294-1.38c0-.3.068-.935.274-1.409.221-.51.778-1.073.815-1.628z"
  }), _react["default"].createElement("path", {
    d: "M15.954 25.836c7 0 8-1 8-10 0-6.655-.547-8.936-3.662-9.672l-.567 1.922.015.003c.79.173 1.104.41 1.291.638l.001.001c.23.282.498.834.678 2.042l.001.005c.19 1.247.244 2.848.243 5.061.001 2.213-.054 3.814-.243 5.061v.005c-.18 1.208-.449 1.761-.679 2.043-.188.23-.502.465-1.292.638l-.015.003c-.91.204-2.07.25-3.77.25v2zM15.954 25.836c-7 0-8-1-8-10 0-6.655.547-8.936 3.663-9.672l.566 1.922-.015.003c-.79.173-1.104.41-1.29.638l-.002.001c-.23.282-.498.834-.678 2.042v.005c-.19 1.247-.245 2.848-.244 5.061 0 2.213.054 3.814.243 5.061a.02.02 0 0 0 .001.005c.18 1.208.448 1.761.678 2.043h.001c.187.23.501.465 1.291.638l.015.003c.91.204 2.07.25 3.77.25l.001 2z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.704 13.163c-2.762 0-5-2.238-5-5v-1a1 1 0 1 1 2 0v1a3 3 0 0 0 3 3h.5a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0v1c.001 2.762-2.238 5-5 5h-.5z"
  }), _react["default"].createElement("path", {
    d: "M19.183 15.724c-.65-.64-1.948-.96-3.246.32-1.299-1.28-2.597-.96-3.246-.32-2.597 2.56 2.45 5.94 3.246 5.94.796 0 5.843-3.38 3.246-5.94z"
  })),
  'shirt-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.956 14.112c-.034.525.37 1.01.869.84 1.466-.5 2.22-2.413 2.22-3.877 0-1.465-.755-3.376-2.22-3.877-.498-.17-.903.315-.869.84.038.555.576 1.146.796 1.657.212.49.294 1.128.294 1.38 0 .301-.069.935-.274 1.41-.221.51-.778 1.072-.816 1.627zM7.043 8.038c.035-.525-.37-1.01-.868-.84-1.466.5-2.22 2.413-2.22 3.877 0 1.465.754 3.376 2.22 3.877.498.17.903-.315.868-.84-.037-.555-.575-1.146-.795-1.657a4.142 4.142 0 0 1-.294-1.38c0-.3.068-.935.274-1.409.221-.51.778-1.073.815-1.628zM15.954 25.836c-7 0-8-1-8-10 0-6.433.511-8.778 3.359-9.593a.992.992 0 0 1 .278-.073l.026-.006.001.003a1 1 0 0 1 1.086.996v1a3 3 0 0 0 3 3h.5a3 3 0 0 0 3-3v-1a1 1 0 0 1 1.087-.996v-.003l.027.006c.098.01.19.036.278.073 2.848.815 3.358 3.16 3.358 9.593 0 9-1 10-8 10zm-.017-9.792c1.298-1.28 2.597-.96 3.246-.32 2.597 2.56-2.45 5.94-3.246 5.94-.797 0-5.843-3.38-3.246-5.94.649-.64 1.947-.96 3.246.32z"
  })),
  'up-caret': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.4849 20.3931C7.90917 20.7467 8.53973 20.6894 8.8933 20.2651C10.2702 18.62 13.6548 14.7995 15.3751 13.4905C17.1243 14.8215 20.46 18.5905 21.8569 20.2651C22.2104 20.6894 22.841 20.7467 23.2653 20.3931C23.6895 20.0396 23.7465 19.4086 23.393 18.9843C21.8613 17.1447 18.4 13.1847 16.4286 11.7835C16.1173 11.5653 15.7652 11.3749 15.3751 11.3749C14.9849 11.3749 14.6328 11.5653 14.3216 11.7835C12.3899 13.1564 8.8602 17.1828 7.35791 18.9835L7.35686 18.9847C7.0033 19.409 7.06062 20.0396 7.4849 20.3931Z"
  })),
  youtube: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-14.473 3.127l6.48-3.36-6.485-3.383.005 6.742z"
  })),
  'zoom-in': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.25 9.25a5 5 0 1 0 .001 10.001A5 5 0 0 0 14.25 9.25zm-7 5a7 7 0 1 1 13.088 3.456c-.244.431-.212.981.137 1.332l3.984 4.007a1 1 0 1 1-1.418 1.41l-3.97-3.992c-.352-.354-.908-.387-1.341-.138A7 7 0 0 1 7.25 14.25z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.25 11.25a1 1 0 0 1 2 0v2h1.999a1.001 1.001 0 0 1 0 2H15.25v2a1 1 0 0 1-2 0v-2h-2a1.001 1.001 0 0 1 0-2h2v-2z"
  })),
  'zoom-out': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.25 9.25a5 5 0 1 0 .001 10.001A5 5 0 0 0 14.25 9.25zm-7 5a7 7 0 1 1 13.088 3.456c-.244.431-.212.981.137 1.332l3.984 4.007a1 1 0 1 1-1.418 1.41l-3.97-3.992c-.352-.354-.908-.387-1.341-.138A7 7 0 0 1 7.25 14.25z"
  }), _react["default"].createElement("path", {
    d: "M17.249 13.25H11.25a1 1 0 1 0 0 2h5.998a1 1 0 1 0 0-2z"
  })),
  'admin-badge': _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.437 11.023a1 1 0 0 1 .785.977v2.2H18a1 1 0 0 1 .907 1.42l-2.222 4.8a1 1 0 0 1-1.907-.42v-2.2H14a1 1 0 0 1-.908-1.42l2.223-4.8a1 1 0 0 1 1.122-.557z"
  }),
  admin: _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.437 17.023a1 1 0 0 1 .785.977v2.2H23a1 1 0 0 1 .907 1.42l-2.222 4.8a1 1 0 0 1-1.907-.42v-2.2H19a1 1 0 0 1-.907-1.42l2.222-4.8a1 1 0 0 1 1.122-.557zM19.834 16.977C20.714 16.173 21 14.873 21 13a5 5 0 0 0-10 0c0 1.873.286 3.173 1.165 3.977a8.029 8.029 0 0 0-3.6 4.062c-.162.408-.213.939.162 1.168.792.485 1.632-.457 2.105-1.257a5.997 5.997 0 0 1 5.48-2.942c1.132.058 2.373-.055 3.24-.784a8.75 8.75 0 0 0 .282-.247zM19 13c0 1.683-.271 2.241-.47 2.456-.162.176-.68.544-2.53.544-1.85 0-2.368-.368-2.53-.544C13.27 15.24 13 14.683 13 13a3 3 0 1 1 6 0z"
  }),
  'align-center': _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 11a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM10.5 21c0-.552.414-1 .923-1h10.154c.51 0 .923.448.923 1s-.413 1-.923 1H11.423c-.51 0-.923-.448-.923-1z"
  }),
  'align-left': _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 11a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 21c0-.552.414-1 .923-1h10.154c.51 0 .923.448.923 1s-.413 1-.923 1H8.423c-.51 0-.923-.448-.923-1z"
  }),
  'align-right': _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 11a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM7.5 16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-16a1 1 0 0 1-1-1zM13.5 21c0-.552.414-1 .923-1h10.154c.51 0 .923.448.923 1s-.413 1-.923 1H14.423c-.51 0-.923-.448-.923-1z"
  }),
  'battery-bolt': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M30 16a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.75 7.532a1 1 0 0 1 .75.968v5h3a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 14.5 23.5v-5h-3a1 1 0 0 1-.874-1.486l5-9a1 1 0 0 1 1.125-.482zM13.2 16.5h2.3a1 1 0 0 1 1 1v2.14l2.3-4.14h-2.3a1 1 0 0 1-1-1v-2.14l-2.3 4.14z"
  }), _react["default"].createElement("path", {
    d: "M19.824 21.894a20.35 20.35 0 0 0 1.83-.204c1.353-.218 2.022-.53 2.38-.816.457-.313.55-.533.716-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816a21.522 21.522 0 0 0-2.155-.225V8.5c0-.141-.01-.28-.029-.417C26.305 8.472 27 10.34 27 16c0 5.87-.748 7.663-8.32 7.955l1.144-2.061zM12.529 23.917C5.695 23.528 5 21.66 5 16c0-5.87.748-7.663 8.32-7.955l-1.144 2.061c-.682.049-1.287.116-1.83.204-1.353.218-2.022.53-2.38.816-.457.313-.55.533-.716 1.332C7.039 13.332 7 14.418 7 16c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816.63.102 1.338.176 2.155.225V23.5c0 .141.01.28.029.417zM15.626 8.014l.008-.013-.008.013zM16.374 23.986l-.008.013.008-.013z"
  })),
  'battery-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 8.024A77.397 77.397 0 0 1 16 8c10.083 0 11 1.5 11 8s-.917 8-11 8c-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976s.792-7.763 9-7.976zM7 16c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816 1.384.226 3.158.31 5.604.31H16c2.473 0 4.261-.083 5.655-.31 1.352-.218 2.021-.53 2.38-.816.456-.313.55-.533.715-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816C20.26 10.083 18.473 10 16 10h-.05c-2.447 0-4.22.085-5.605.31-1.352.218-2.021.53-2.38.816-.456.313-.55.533-.715 1.332C7.039 13.332 7 14.418 7 16z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 16c0 1.318.033 2.223.208 2.952.138.665.216.849.597 1.11.298.237.856.498 1.983.68 1.153.188 3.13.258 5.17.258H16c2.06 0 4.051-.07 5.212-.259 1.127-.181 1.685-.442 1.983-.68.381-.26.459-.444.597-1.11.175-.728.208-1.633.208-2.951s-.032-2.223-.208-2.952c-.138-.665-.216-.849-.597-1.11-.298-.237-.856-.498-1.983-.68C20.052 11.07 18.061 11 16 11h-.042c-2.04 0-4.017.07-5.17.259-1.127.181-1.685.442-1.983.68-.381.26-.459.444-.597 1.11C8.033 13.776 8 14.681 8 16z"
  }), _react["default"].createElement("path", {
    d: "M30 16a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2z"
  })),
  battery: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 8.024A77.397 77.397 0 0 1 16 8c10.083 0 11 1.5 11 8s-.917 8-11 8c-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976s.792-7.763 9-7.976zM7 16c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816 1.384.226 3.158.31 5.604.31H16c2.473 0 4.261-.083 5.655-.31 1.352-.218 2.021-.53 2.38-.816.456-.313.55-.533.715-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816C20.26 10.083 18.473 10 16 10h-.05c-2.447 0-4.22.085-5.605.31-1.352.218-2.021.53-2.38.816-.456.313-.55.533-.715 1.332C7.039 13.332 7 14.418 7 16z"
  }), _react["default"].createElement("path", {
    d: "M30 16a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2z"
  })),
  'bolt-circle': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.75 7.532a1 1 0 0 1 .75.968v5h3a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 14.5 23.5v-5h-3a1 1 0 0 1-.874-1.486l5-9a1 1 0 0 1 1.125-.482zM13.2 16.5h2.3a1 1 0 0 1 1 1v2.14l2.3-4.14h-2.3a1 1 0 0 1-1-1v-2.14l-2.3 4.14z"
  })),
  'bolt-docs': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.048 6.291C19.836 6.05 18.256 6 16 6c-2.256 0-3.836.05-5.048.291-1.11.216-1.577.533-1.853.864-.32.384-.641 1.094-.844 2.597C8.046 11.283 8 13.274 8 16c0 2.725.046 4.717.255 6.248.203 1.503.524 2.213.844 2.597.276.331.743.648 1.853.864C12.164 25.95 13.744 26 16 26c2.256 0 3.836-.05 5.048-.291 1.11-.216 1.577-.533 1.853-.864.32-.384.641-1.094.843-2.597.21-1.531.256-3.523.256-6.248 0-2.726-.046-4.717-.256-6.248-.202-1.503-.523-2.213-.843-2.597-.276-.331-.743-.648-1.853-.864zM26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.75 7.532a1 1 0 0 1 .75.968v5h3a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 14.5 23.5v-5h-3a1 1 0 0 1-.874-1.486l5-9a1 1 0 0 1 1.125-.482zM13.2 16.5h2.3a1 1 0 0 1 1 1v2.14l2.3-4.14h-2.3a1 1 0 0 1-1-1v-2.14l-2.3 4.14z"
  })),
  bolt: _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.73 4.527a1 1 0 0 1 .77.973v8h4a1 1 0 0 1 .894 1.447l-6 12A1 1 0 0 1 14.5 26.5v-8h-4a1 1 0 0 1-.894-1.447l6-12a1 1 0 0 1 1.124-.526zM12.118 16.5H15.5a1 1 0 0 1 1 1v4.764l3.382-6.764H16.5a1 1 0 0 1-1-1V9.736L12.118 16.5zM26.852 21.726c-.26.408-.444.76-.553 1.09a2.21 2.21 0 0 0-.11.51 1.839 1.839 0 0 0 0 .348c.015.167.052.336.11.513.11.328.293.68.553 1.087.03.046.058.092.09.138.214.327-.202.744-.527.53a15.526 15.526 0 0 0-.138-.09c-.407-.262-.758-.447-1.085-.556a2.205 2.205 0 0 0-.509-.11 1.818 1.818 0 0 0-.346 0 2.205 2.205 0 0 0-.509.11c-.327.11-.678.294-1.085.555a7.978 7.978 0 0 0-.137.09c-.326.215-.74-.202-.526-.529l.09-.138c.255-.403.438-.75.546-1.076.058-.174.095-.34.11-.506a1.956 1.956 0 0 0 0-.367 2.253 2.253 0 0 0-.116-.506c-.11-.323-.297-.669-.558-1.07l-.09-.136c-.219-.325.191-.747.52-.535.046.03.092.06.138.088.415.26.771.443 1.103.55.177.057.347.092.516.105.11.01.217.01.326 0a2.23 2.23 0 0 0 .515-.11c.331-.11.686-.298 1.097-.562l.138-.09c.325-.215.741.202.526.53l-.052.078-.037.06zM9.852 6.726c-.26.408-.444.76-.553 1.09a2.21 2.21 0 0 0-.11.51 1.839 1.839 0 0 0 0 .348c.015.167.052.336.11.513.11.328.293.68.553 1.087.03.046.058.092.09.138.214.327-.202.744-.527.53a15.526 15.526 0 0 0-.138-.09c-.407-.262-.758-.447-1.085-.556a2.205 2.205 0 0 0-.509-.11 1.818 1.818 0 0 0-.346 0 2.205 2.205 0 0 0-.509.11c-.327.11-.678.294-1.085.555a7.978 7.978 0 0 0-.137.09c-.326.215-.74-.202-.526-.529l.09-.138c.255-.403.438-.75.546-1.076.058-.174.095-.34.11-.506a1.956 1.956 0 0 0 0-.367 2.253 2.253 0 0 0-.116-.506c-.11-.323-.297-.669-.558-1.07l-.09-.136c-.219-.325.191-.747.52-.535.046.03.092.06.138.088.415.26.771.443 1.103.55.177.057.347.092.516.105.11.01.217.01.326 0a2.23 2.23 0 0 0 .515-.11c.331-.11.686-.298 1.097-.562l.138-.09c.325-.215.741.202.526.53l-.052.078-.037.06z"
  }),
  briefcase: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 11.024A77.266 77.266 0 0 1 16 11c10.083 0 11 1.5 11 8s-.917 8-11 8c-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976s.792-7.764 9-7.976zM7 19c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816 1.384.226 3.158.31 5.604.31H16c2.473 0 4.261-.083 5.655-.31 1.352-.218 2.021-.53 2.38-.816.456-.313.55-.533.715-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816C20.26 13.083 18.473 13 16 13h-.05c-2.447 0-4.22.085-5.605.31-1.352.218-2.021.53-2.38.816-.456.313-.55.533-.715 1.332C7.039 16.332 7 17.418 7 19z"
  }), _react["default"].createElement("path", {
    d: "M16 6a5 5 0 0 0-5 5v14.5a1 1 0 1 0 2 0V11a3 3 0 0 1 6 0v14.5a1 1 0 1 0 2 0V11a5 5 0 0 0-5-5z"
  })),
  'clubs-fill': _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16zm0-2c7.364 0 14-6.636 14-14S23.364 2 16 2 2 8.636 2 16c0 3.744 1.715 7.299 4.369 9.89l5.559-20.749a1 1 0 0 1 1.932.518l-.068.254c1.221-.41 2.854.362 5.255 2.612 2.833 2.655 4.933 2.646 6.14 2.641 1.16-.005 1.494-.006.86 2.359-1.294 4.83-3.053 10.796-9.5 6-2.638-1.962-4.392-2.486-5.449-2.801a7.38 7.38 0 0 0-.075-.023c-.038-.011-.076-.022-.112-.034L8.166 26.909a.998.998 0 0 1-.177.357C10.304 28.968 13.095 30 16 30z"
  }),
  clubs: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30 16c0 7.364-6.636 14-14 14S2 23.364 2 16 8.636 2 16 2s14 6.636 14 14zm2 0c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.953 5.034a1 1 0 0 0-1.225.707L5.034 25.992a1 1 0 1 0 1.932.517l4.694-20.25a1 1 0 0 0-.707-1.225zm2.107 9.005c.425-1.703.798-3.036 1.225-4.079.429-1.058.766-1.43.912-1.532a.21.21 0 0 0 .022-.023l.017.003c.131-.022.133-.021.353.073l.065.028c.584.23 1.492.826 2.826 2.076 1.584 1.462 3.173 2.338 4.36 2.738a9.906 9.906 0 0 0 2.045.4c-.312 1.161-.627 2.297-1.028 3.334-.405 1.061-.756 1.774-1.284 2.307-.385.41-.719.542-1.131.527-.519-.018-1.447-.289-2.901-1.37-1.746-1.291-3.25-2.073-4.327-2.514a17.612 17.612 0 0 0-1.498-.524c.08-.375.193-.838.344-1.444zm-1.106 1.201l.017.008a.08.08 0 0 1-.017-.008zm-.834-1.685c1.727-6.93 3.174-9.634 8.727-4.43 2.833 2.655 4.933 2.646 6.14 2.641 1.16-.005 1.494-.007.86 2.359-1.294 4.83-3.053 10.796-9.5 6-2.638-1.962-4.392-2.486-5.449-2.801-1.526-.456-1.599-.478-.778-3.769z"
  })),
  compass: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.657 10.343a1 1 0 0 1 .167 1.193L18.288 17.9a1 1 0 0 1-.388.388l-6.364 3.536a1 1 0 0 1-1.36-1.36l3.536-6.364a1 1 0 0 1 .388-.388l6.364-3.536a1 1 0 0 1 1.193.167zm-6.336 4.978l-1.697 3.055 3.055-1.697 1.697-3.055-3.055 1.697z"
  })),
  crosshairs: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    d: "M16 11c-.552 0-1-.392-1-.875v-5.25c0-.483.448-.875 1-.875s1 .392 1 .875v5.25c0 .483-.448.875-1 .875zM16 28c-.552 0-1-.392-1-.875v-5.25c0-.483.448-.875 1-.875s1 .392 1 .875v5.25c0 .483-.448.875-1 .875zM11 16c0 .552-.392 1-.875 1h-5.25C4.392 17 4 16.552 4 16s.392-1 .875-1h5.25c.483 0 .875.448.875 1zM28 16c0 .552-.392 1-.875 1h-5.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h5.25c.483 0 .875.448.875 1z"
  })),
  download: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 7C19.4194 7 21.4374 8.71837 21.9002 11.0012C24.1171 10.9472 26 12.7809 26 15C26 17.2091 24.2091 19 22 19C21.4477 19 21 18.5523 21 18C21 17.4477 21.4477 17 22 17C23.1046 17 24 16.1046 24 15C24 13.8954 23.1046 13 22 13C21.7137 13 21.4301 13.0367 21.1499 13.0962C20.6068 13.2113 20 12.5551 20 12C20 10.3432 18.6569 9 17 9C15.2449 9 14.1626 10.151 13.7245 11.534C13.5099 12.2114 12.7936 12.6737 12.1486 12.3754C11.6937 12.1651 11.282 12 11 12C10.4477 12 10 12.4477 10 13C10.254 14.0159 9.48563 15 8.43845 15H8C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H10C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19H8C6.34314 19 5 17.6569 5 16C5 14.3431 6.34314 13 8 13C8 11.3431 9.34314 10 11 10C11.4651 10 11.9055 10.1058 12.2983 10.2947C12.9955 8.37292 14.8374 7 17 7ZM19.7071 22.7071L16.7071 25.7071C16.3166 26.0976 15.6834 26.0976 15.2929 25.7071L12.2929 22.7071C11.9024 22.3166 11.9024 21.6834 12.2929 21.2929C12.6834 20.9024 13.3166 20.9024 13.7071 21.2929L15 22.5858V17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17V22.5858L18.2929 21.2929C18.6834 20.9024 19.3166 20.9024 19.7071 21.2929C20.0976 21.6834 20.0976 22.3166 19.7071 22.7071Z"
  })),
  'event-check': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-3.664 8.336C25.425 23.247 26 21.1 26 16c0-2.14-.101-3.76-.3-5H6.3C6.1 12.24 6 13.86 6 16c0 5.1.575 7.247 1.664 8.336C8.753 25.425 10.9 26 16 26s7.247-.575 8.336-1.664zM11 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z"
  }), _react["default"].createElement("path", {
    d: "M18.534 15.672L15 19.206l-1.534-1.534a1.001 1.001 0 0 0-1.414 1.414l1.413 1.414-.585-.586 1.399 1.4.013.014a.997.997 0 0 0 .708.293.997.997 0 0 0 .708-.293l.013-.014 4.227-4.228a1 1 0 1 0-1.414-1.414z"
  })),
  food: _react["default"].createElement("path", {
    d: "M10 13a1 1 0 0 1-1-1V9a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3v-2zM12 13V8.875C12 8.392 11.552 8 11 8s-1 .392-1 .875v14.25c0 .483.448.875 1 .875s1-.392 1-.875V13zM12 13v2a3 3 0 0 0 3-3V9a1 1 0 1 0-2 0v3a1 1 0 0 1-1 1zM22 14.89c1.725-.389 3-1.76 3-3.39C25 9.567 23.209 8 21 8c-2.21 0-4 1.567-4 3.5 0 1.63 1.275 3.001 3 3.39v8.235c0 .483.448.875 1 .875s1-.392 1-.875V14.89z"
  }),
  forbidden: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    d: "M7.515 24.485c-.39-.39-.43-.984-.089-1.326L23.16 7.426c.341-.341.935-.302 1.325.089.39.39.43.984.089 1.326L8.84 24.574c-.342.341-.936.302-1.326-.089z"
  })),
  grid: _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.862 12.776c.072-.302.138-.842.138-1.776s-.066-1.474-.138-1.776a2.012 2.012 0 0 0-.017-.069 2.103 2.103 0 0 0-.069-.017C12.474 9.066 11.934 9 11 9s-1.474.066-1.776.138a2.08 2.08 0 0 0-.069.017 2.08 2.08 0 0 0-.017.069C9.066 9.526 9 10.066 9 11s.066 1.474.138 1.776l.017.069.069.017c.302.072.842.138 1.776.138s1.474-.066 1.776-.138l.069-.017.017-.069zm10 0c.072-.302.138-.842.138-1.776s-.066-1.474-.138-1.776a2.012 2.012 0 0 0-.017-.069 2.103 2.103 0 0 0-.069-.017C22.474 9.066 21.934 9 21 9s-1.474.066-1.776.138a2.103 2.103 0 0 0-.069.017l-.017.069C19.066 9.526 19 10.066 19 11s.066 1.474.138 1.776l.017.069.069.017c.302.072.842.138 1.776.138s1.474-.066 1.776-.138l.069-.017.017-.069zm-10 10c.072-.302.138-.842.138-1.776s-.066-1.474-.138-1.776a2.034 2.034 0 0 0-.017-.069 2.034 2.034 0 0 0-.069-.017C12.474 19.066 11.934 19 11 19s-1.474.066-1.776.138a2.012 2.012 0 0 0-.069.017l-.017.069C9.066 19.526 9 20.066 9 21s.066 1.474.138 1.776l.017.069.069.017c.302.072.842.138 1.776.138s1.474-.066 1.776-.138l.069-.017.017-.069zm10 0c.072-.302.138-.842.138-1.776s-.066-1.474-.138-1.776a2.034 2.034 0 0 0-.017-.069 2.034 2.034 0 0 0-.069-.017C22.474 19.066 21.934 19 21 19s-1.474.066-1.776.138a2.034 2.034 0 0 0-.069.017l-.017.069c-.072.302-.138.842-.138 1.776s.066 1.474.138 1.776l.017.069.069.017c.302.072.842.138 1.776.138s1.474-.066 1.776-.138l.069-.017.017-.069zM15 11c0 2.007-.275 2.861-.707 3.293-.432.432-1.286.707-3.293.707s-2.861-.275-3.293-.707C7.275 13.861 7 13.007 7 11s.275-2.861.707-3.293C8.139 7.275 8.993 7 11 7s2.861.275 3.293.707C14.725 8.139 15 8.993 15 11zm10 0c0 2.007-.275 2.861-.707 3.293-.432.432-1.286.707-3.293.707s-2.861-.275-3.293-.707C17.275 13.861 17 13.007 17 11s.275-2.861.707-3.293C18.139 7.275 18.993 7 21 7s2.861.275 3.293.707C24.725 8.139 25 8.993 25 11zM14.293 24.293c.432-.432.707-1.286.707-3.293s-.275-2.861-.707-3.293C13.861 17.275 13.007 17 11 17s-2.861.275-3.293.707C7.275 18.139 7 18.993 7 21s.275 2.861.707 3.293C8.139 24.725 8.993 25 11 25s2.861-.275 3.293-.707zM25 21c0 2.007-.275 2.861-.707 3.293-.432.432-1.286.707-3.293.707s-2.861-.275-3.293-.707C17.275 23.861 17 23.007 17 21s.275-2.861.707-3.293C18.139 17.275 18.993 17 21 17s2.861.275 3.293.707c.432.432.707 1.286.707 3.293z"
  }),
  help: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
  }), _react["default"].createElement("path", {
    d: "M12.464 12.464c-.39.39-.984.43-1.325.089L7.426 8.84c-.341-.342-.302-.936.089-1.326.39-.39.984-.43 1.326-.089l3.712 3.713c.341.341.302.935-.089 1.325zM24.485 24.485c-.39.39-.984.43-1.325.089l-3.713-3.713c-.341-.341-.302-.935.088-1.326.39-.39.985-.43 1.326-.088l3.713 3.713c.341.341.302.935-.089 1.325zM12.464 19.535c.39.39.43.985.089 1.326L8.84 24.574c-.342.341-.936.302-1.326-.089-.39-.39-.43-.984-.089-1.325l3.713-3.713c.341-.341.935-.302 1.325.088zM24.485 7.515c.39.39.43.984.089 1.326l-3.713 3.712c-.341.341-.935.302-1.326-.089-.39-.39-.43-.984-.088-1.325l3.713-3.713c.341-.341.935-.302 1.325.089z"
  })),
  info: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z"
  }), _react["default"].createElement("path", {
    d: "M16 12.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM16 22.25c-.552 0-1-.392-1-.875v-6.25c0-.483.448-.875 1-.875s1 .392 1 .875v6.25c0 .483-.448.875-1 .875z"
  })),
  leader: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.08 10.873c0 1.873-.286 3.173-1.164 3.977a8.034 8.034 0 0 1 3.648 4.188c.124.328.153.708-.052.993-.568.79-1.673-.11-2.129-.97a6 6 0 0 0-10.604 0c-.456.86-1.561 1.76-2.13.97-.205-.285-.175-.665-.051-.993a8.025 8.025 0 0 1 3.649-4.188c-.88-.804-1.166-2.104-1.166-3.977a5 5 0 0 1 10 0zm-2.468 2.456c.198-.215.469-.773.469-2.456a3 3 0 1 0-6 0c0 1.683.272 2.24.47 2.456.163.176.68.544 2.53.544 1.85 0 2.367-.368 2.53-.544z"
  }), _react["default"].createElement("path", {
    d: "M15.098 19.127a1 1 0 0 1 2 0v1.268l1.098-.634a1 1 0 0 1 1 1.732l-1.098.634 1.098.634a1 1 0 1 1-1 1.732l-1.098-.634v1.268a1 1 0 1 1-2 0v-1.268L14 24.493a1 1 0 1 1-1-1.732l1.098-.634L13 21.493a1 1 0 0 1 1-1.732l1.098.634v-1.268z"
  })),
  'leaders-fill': _react["default"].createElement("g", null, _react["default"].createElement("path", {
    d: "M19.08 10.873c0 1.683-.27 2.24-.468 2.456-.163.176-.68.544-2.531.544-1.85 0-2.367-.368-2.53-.544-.198-.215-.47-.773-.47-2.456a3 3 0 1 1 6 0z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16zm3.916-17.15c.878-.804 1.164-2.104 1.164-3.977a5 5 0 1 0-10 0c0 1.873.288 3.173 1.167 3.977a8.025 8.025 0 0 0-3.649 4.188c-.124.328-.154.708.051.993.569.79 1.674-.11 2.13-.97a6 6 0 1 1 10.605 0c.455.86 1.56 1.76 2.128.97.205-.285.176-.665.052-.993a8.034 8.034 0 0 0-3.648-4.188zm-3.818 3.277a1 1 0 0 0-1 1v1.268L14 19.76a1 1 0 1 0-1 1.732l1.098.634-1.098.634a1 1 0 0 0 1 1.732l1.098-.634v1.268a1 1 0 0 0 2 0v-1.268l1.098.634a1 1 0 0 0 1-1.732l-1.098-.634 1.098-.634a1 1 0 1 0-1-1.732l-1.098.634v-1.268a1 1 0 0 0-1-1z"
  })),
  leaders: _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M30 16c0 7.364-6.636 14-14 14S2 23.364 2 16 8.636 2 16 2s14 6.636 14 14zm2 0c0 8.836-7.164 16-16 16S0 24.836 0 16 7.164 0 16 0s16 7.164 16 16z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.08 10.873c0 1.873-.286 3.173-1.164 3.977a8.034 8.034 0 0 1 3.648 4.188c.124.328.153.708-.052.993-.568.79-1.673-.11-2.129-.97a6 6 0 0 0-10.604 0c-.456.86-1.561 1.76-2.13.97-.205-.285-.175-.665-.051-.993a8.025 8.025 0 0 1 3.649-4.188c-.88-.804-1.166-2.104-1.166-3.977a5 5 0 0 1 10 0zm-2.468 2.456c.198-.215.469-.773.469-2.456a3 3 0 1 0-6 0c0 1.683.272 2.24.47 2.456.163.176.68.544 2.53.544 1.85 0 2.367-.368 2.53-.544z"
  }), _react["default"].createElement("path", {
    d: "M15.098 19.127a1 1 0 0 1 2 0v1.268l1.098-.634a1 1 0 0 1 1 1.732l-1.098.634 1.098.634a1 1 0 1 1-1 1.732l-1.098-.634v1.268a1 1 0 1 1-2 0v-1.268L14 24.493a1 1 0 1 1-1-1.732l1.098-.634L13 21.493a1 1 0 0 1 1-1.732l1.098.634v-1.268z"
  }))
}, _defineProperty(_glyphs, "leaders-fill", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  d: "M19.0805 10.8728C19.0805 12.5557 18.8095 13.1137 18.6115 13.3287C18.4485 13.5047 17.9316 13.8727 16.0807 13.8727C14.2307 13.8727 13.7138 13.5047 13.5508 13.3287C13.3528 13.1137 13.0808 12.5557 13.0808 10.8728C13.0808 9.21589 14.4237 7.87295 16.0807 7.87295C17.7376 7.87295 19.0805 9.21589 19.0805 10.8728Z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32ZM19.9155 14.8496C20.7944 14.0457 21.0804 12.7457 21.0804 10.8728C21.0804 8.11194 18.8425 5.87305 16.0807 5.87305C13.3198 5.87305 11.0809 8.11194 11.0809 10.8728C11.0809 12.7457 11.3679 14.0457 12.2468 14.8496C10.5819 15.7606 9.27697 17.2455 8.598 19.0384C8.474 19.3664 8.444 19.7464 8.64899 20.0314C9.21797 20.8204 10.3229 19.9204 10.7789 19.0614C11.7868 17.1645 13.7828 15.8726 16.0807 15.8726C18.3785 15.8726 20.3755 17.1645 21.3834 19.0614C21.8394 19.9204 22.9443 20.8204 23.5123 20.0314C23.7173 19.7464 23.6883 19.3664 23.5643 19.0384C22.8843 17.2455 21.5794 15.7606 19.9155 14.8496ZM16.0981 18.127C15.5461 18.127 15.0981 18.575 15.0981 19.127V20.3949L14 19.7609C13.522 19.4849 12.9105 19.648 12.634 20.127C12.358 20.605 12.522 21.217 13 21.493L14.0981 22.127L13 22.7609C12.522 23.0369 12.358 23.6489 12.634 24.127C12.9105 24.6059 13.522 24.769 14 24.493L15.0981 23.859V25.127C15.0981 25.679 15.5461 26.127 16.0981 26.127C16.6511 26.127 17.0981 25.679 17.0981 25.127V23.859L18.1962 24.493C18.6742 24.769 19.2862 24.605 19.5622 24.127C19.8387 23.648 19.6742 23.0369 19.1962 22.7609L18.0981 22.127L19.1962 21.493C19.6742 21.217 19.8387 20.6059 19.5622 20.127C19.2862 19.6489 18.6742 19.4849 18.1962 19.7609L17.0981 20.3949V19.127C17.0981 18.575 16.6511 18.127 16.0981 18.127Z"
}))), _defineProperty(_glyphs, "list", _react["default"].createElement("path", {
  d: "M10 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM25 10c0 .552-.392 1-.875 1h-11.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h11.25c.483 0 .875.448.875 1zM10 16a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM25 16c0 .552-.392 1-.875 1h-11.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h11.25c.483 0 .875.448.875 1zM10 22a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM25 22c0 .552-.392 1-.875 1h-11.25c-.483 0-.875-.448-.875-1s.392-1 .875-1h11.25c.483 0 .875.448.875 1z"
})), _defineProperty(_glyphs, "meh", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26 15.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-17.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM23 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11 20c0-.552.414-1 .923-1h8.154c.51 0 .923.448.923 1s-.413 1-.923 1h-8.154c-.51 0-.923-.448-.923-1z"
}))), _defineProperty(_glyphs, 'messenger-fill', _react["default"].createElement("g", null, _react["default"].createElement("path", {
  d: "M18.453 17.698l2.35-3.728c.227-.357-.214-.761-.55-.505l-2.524 1.915a.48.48 0 0 1-.578.002l-1.869-1.402a1.201 1.201 0 0 0-1.735.32l-2.35 3.728c-.227.358.214.762.55.506l2.524-1.916a.48.48 0 0 1 .578-.001l1.869 1.402c.56.42 1.362.272 1.735-.32z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-20-.24C8 11.302 11.493 8 16 8s8 3.302 8 7.76c0 4.46-3.493 7.76-8 7.76-.81 0-1.587-.106-2.316-.307a.638.638 0 0 0-.427.032l-1.587.7a.641.641 0 0 1-.898-.566l-.044-1.423a.645.645 0 0 0-.215-.456C8.956 20.108 8 18.093 8 15.76z"
}))), _defineProperty(_glyphs, "messenger", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 8c-4.507 0-8 3.302-8 7.76 0 2.333.956 4.348 2.513 5.74.13.118.209.28.215.456l.044 1.423a.641.641 0 0 0 .898.566l1.587-.7a.638.638 0 0 1 .427-.032c.729.201 1.506.307 2.316.307 4.507 0 8-3.3 8-7.76C24 11.302 20.507 8 16 8zm4.803 5.97l-2.35 3.728a1.201 1.201 0 0 1-1.735.32l-1.869-1.401a.48.48 0 0 0-.578.001l-2.524 1.916c-.336.256-.777-.148-.55-.506l2.35-3.728a1.201 1.201 0 0 1 1.735-.32l1.869 1.402a.48.48 0 0 0 .578-.002l2.524-1.915c.336-.256.777.148.55.505z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 6c5.1 0 7.247.576 8.336 1.665C25.425 8.754 26 10.9 26 16c0 5.1-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.335C8.753 6.576 10.9 6 16 6zm12 10C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12z"
}))), _defineProperty(_glyphs, 'more-fill', _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16.5 28c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1.232-11a2 2 0 1 0 3.463-1.999A2 2 0 0 0 15.267 17zM11 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 11 18zm10.267-1a2 2 0 1 0 3.464-1.999A2 2 0 0 0 21.267 17z"
})), _defineProperty(_glyphs, "more", _react["default"].createElement("path", {
  d: "M17 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 17 18zM11 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 11 18zM23 18a2 2 0 1 1-.002-3.999A2 2 0 0 1 23 18z"
})), _defineProperty(_glyphs, "relaxed", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26 15.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8.375 12.002c-.525-.035-1.01.37-.84.868.5 1.466 2.413 2.221 3.877 2.221 1.465 0 3.376-.755 3.877-2.22.17-.499-.315-.904-.84-.869-.555.037-1.146.575-1.657.795a4.142 4.142 0 0 1-1.38.294c-.301 0-.935-.068-1.41-.274-.51-.22-1.072-.778-1.627-.815zM17.375 12.002c-.525-.035-1.01.37-.84.868.5 1.466 2.413 2.221 3.877 2.221 1.465 0 3.376-.755 3.877-2.22.17-.499-.315-.904-.84-.869-.555.037-1.146.575-1.657.795a4.142 4.142 0 0 1-1.38.294c-.301 0-.935-.068-1.41-.274-.51-.22-1.072-.778-1.627-.815zM16 22.75c1.223 0 2.262-.858 2.494-2 .116-.57-1.496-.75-2.493-.75-.998 0-2.623.116-2.494.75.233 1.142 1.271 2 2.494 2z"
}))), _defineProperty(_glyphs, "rss", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  d: "M10 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 9a1 1 0 0 1 1-1c8.284 0 15 6.716 15 15a1 1 0 1 1-2 0c0-7.18-5.82-13-13-13a1 1 0 0 1-1-1z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M8 15a1 1 0 0 1 1-1 9 9 0 0 1 9 9 1 1 0 1 1-2 0 7 7 0 0 0-7-7 1 1 0 0 1-1-1z"
}))), _defineProperty(_glyphs, "sad", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26 15.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-17.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM23 14a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M21.015 20.5c-.466-2.285-2.55-4-5-4-2.452 0-4.535 1.715-5 4-.26 1.269 3 1.5 5 1.5s5.232-.36 5-1.5zM14 19s.896.5 2 .5c1.105 0 2-.5 2-.5s-.895-1-2-1c-1.104 0-2 1-2 1z"
}))), _defineProperty(_glyphs, 'slack-fill', _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 4c10 0 12 2 12 12s-2 12-12 12S4 26 4 16 6 4 16 4zm-2.746 4.122a1.605 1.605 0 0 1 1.745.347 1.6 1.6 0 0 1 .468 1.131v1.6h-1.6a1.603 1.603 0 0 1-1.48-2.212 1.598 1.598 0 0 1 .867-.866zM9.6 12.267h4.267a1.604 1.604 0 0 1 1.478.988A1.596 1.596 0 0 1 15 14.997a1.602 1.602 0 0 1-1.132.47H9.6a1.605 1.605 0 0 1-1.479-.989 1.595 1.595 0 0 1 .347-1.742 1.601 1.601 0 0 1 1.132-.47zm14.279.988a1.596 1.596 0 0 1-.347 1.742 1.6 1.6 0 0 1-1.132.47h-1.6v-1.6a1.596 1.596 0 0 1 .987-1.478 1.605 1.605 0 0 1 1.745.347c.149.148.266.325.347.519zM19.733 9.6v4.267a1.594 1.594 0 0 1-.987 1.477 1.605 1.605 0 0 1-1.226 0 1.602 1.602 0 0 1-.987-1.477V9.6a1.596 1.596 0 0 1 .987-1.478 1.605 1.605 0 0 1 1.745.347 1.598 1.598 0 0 1 .468 1.131zm-1.6 14.4a1.603 1.603 0 0 0 1.6-1.6 1.595 1.595 0 0 0-.987-1.478 1.605 1.605 0 0 0-.613-.122h-1.6v1.6a1.597 1.597 0 0 0 1.6 1.6zm0-4.267H22.4a1.605 1.605 0 0 0 1.479-.988 1.596 1.596 0 0 0-.347-1.742 1.6 1.6 0 0 0-1.132-.47h-4.267a1.605 1.605 0 0 0-1.478.989A1.596 1.596 0 0 0 17 19.264a1.602 1.602 0 0 0 1.132.47zm-10.012-.988a1.596 1.596 0 0 1 .347-1.742 1.601 1.601 0 0 1 1.132-.47h1.6v1.6a1.596 1.596 0 0 1-.987 1.478 1.605 1.605 0 0 1-1.745-.347 1.597 1.597 0 0 1-.347-.519zm4.146 3.655v-4.267a1.593 1.593 0 0 1 .987-1.477 1.603 1.603 0 0 1 1.745.347 1.6 1.6 0 0 1 .468 1.13V22.4a1.597 1.597 0 0 1-1.6 1.6 1.603 1.603 0 0 1-1.6-1.6z"
})), _defineProperty(_glyphs, "channels", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 6c5.1 0 7.247.576 8.336 1.665C25.425 8.754 26 10.9 26 16c0 5.1-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.335C8.753 6.576 10.9 6 16 6zm12 10C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14.287 10.941a1 1 0 0 1 1.932.518l-.406 1.517h2.052l.545-2.035a1 1 0 0 1 1.932.518l-.407 1.517h1.085a1 1 0 1 1 0 2H19.4l-.536 2h1.156a1 1 0 1 1 0 2h-1.692l-.574 2.142a1 1 0 0 1-1.932-.517l.435-1.625h-2.052l-.574 2.142a1 1 0 1 1-1.932-.517l.436-1.625H11.02a1 1 0 0 1 0-2h1.651l.535-2H12.02a1 1 0 0 1 0-2h1.722l.545-2.035zm2.506 6.035l.536-2h-2.052l-.536 2h2.052z"
}))), _defineProperty(_glyphs, "slack", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 6c5.1 0 7.247.576 8.336 1.665C25.425 8.754 26 10.9 26 16c0 5.1-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.335C8.753 6.576 10.9 6 16 6zm12 10C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13.867 8a1.605 1.605 0 0 0-1.48.988 1.594 1.594 0 0 0 .001 1.224 1.598 1.598 0 0 0 1.479.988h1.6V9.6a1.596 1.596 0 0 0-.988-1.478A1.604 1.604 0 0 0 13.867 8zm0 4.267H9.6a1.604 1.604 0 0 0-1.479.988 1.596 1.596 0 0 0 .347 1.742 1.601 1.601 0 0 0 1.132.47h4.267a1.605 1.605 0 0 0 1.478-.989A1.596 1.596 0 0 0 15 12.736a1.602 1.602 0 0 0-1.132-.47zM24 13.867a1.596 1.596 0 0 0-.987-1.478 1.605 1.605 0 0 0-1.745.347 1.597 1.597 0 0 0-.468 1.13v1.6h1.6a1.605 1.605 0 0 0 1.479-.988c.08-.194.121-.402.121-.611zm-4.267 0V9.6a1.594 1.594 0 0 0-.987-1.478 1.605 1.605 0 0 0-1.745.347 1.6 1.6 0 0 0-.468 1.131v4.267a1.596 1.596 0 0 0 .987 1.477 1.605 1.605 0 0 0 1.226 0 1.601 1.601 0 0 0 .987-1.477zM18.133 24a1.603 1.603 0 0 0 1.6-1.6 1.595 1.595 0 0 0-.987-1.478 1.605 1.605 0 0 0-.613-.122h-1.6v1.6a1.597 1.597 0 0 0 1.6 1.6zm0-4.267H22.4a1.605 1.605 0 0 0 1.479-.988 1.596 1.596 0 0 0-.347-1.742 1.6 1.6 0 0 0-1.132-.47h-4.267a1.605 1.605 0 0 0-1.478.989A1.596 1.596 0 0 0 17 19.264a1.602 1.602 0 0 0 1.132.47zM8 18.133a1.596 1.596 0 0 0 1.6 1.6 1.605 1.605 0 0 0 1.479-.988c.08-.194.121-.402.121-.612v-1.6H9.6a1.605 1.605 0 0 0-1.479.989c-.08.194-.121.402-.121.611zm4.267 0V22.4a1.595 1.595 0 0 0 .987 1.478 1.603 1.603 0 0 0 1.745-.347 1.6 1.6 0 0 0 .468-1.131v-4.266a1.597 1.597 0 0 0-1.6-1.6 1.603 1.603 0 0 0-1.6 1.6z"
}))), _defineProperty(_glyphs, "sticker", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M17.22 10.688c-.352-1.21-2.086-1.21-2.44 0-.405 1.393-.813 2.182-1.361 2.73-.549.549-1.338.957-2.732 1.363-1.21.352-1.21 2.086 0 2.44 1.394.405 2.184.814 2.732 1.361.547.549.955 1.338 1.361 2.732.354 1.21 2.088 1.21 2.44 0 .407-1.393.815-2.183 1.363-2.732.548-.547 1.338-.956 2.73-1.361 1.21-.354 1.21-2.088 0-2.44-1.392-.407-2.182-.815-2.73-1.363-.548-.547-.956-1.337-1.362-2.73zm-2.387 4.144c.482-.48.855-1.04 1.167-1.688.313.647.686 1.207 1.169 1.688.482.482 1.04.856 1.688 1.168-.648.313-1.206.686-1.688 1.169-.483.482-.857 1.04-1.169 1.688-.312-.648-.685-1.206-1.168-1.688-.48-.483-1.04-.857-1.688-1.169.647-.312 1.207-.685 1.688-1.168z"
}), _react["default"].createElement("path", {
  d: "M7.077 23.51a1 1 0 0 0 1.414 1.413l3.556-3.556a1 1 0 0 0-1.414-1.414l-3.556 3.556zM19.956 10.63a1 1 0 0 0 1.415 1.413l3.556-3.556a1 1 0 0 0-1.414-1.414l-3.557 3.556z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 6c5.1 0 7.247.576 8.336 1.665C25.425 8.754 26 10.9 26 16c0 5.1-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.335C8.753 6.576 10.9 6 16 6zm12 10C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12z"
}))), _defineProperty(_glyphs, "terminal", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.232 8.11a1 1 0 0 0 .128 1.408c1.645 1.377 5.465 4.762 6.774 6.482-1.33 1.75-5.1 5.085-6.774 6.482a1 1 0 1 0 1.28 1.536c1.84-1.532 5.8-4.993 7.201-6.965.219-.31.409-.663.409-1.053 0-.39-.19-.742-.409-1.053-1.372-1.932-5.399-5.462-7.2-6.964v-.001a1 1 0 0 0-1.41.128zM13 23a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H14a1 1 0 0 1-1-1z"
}))), _defineProperty(_glyphs, "transactions", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  d: "M16 4C9.373 4 4 9.373 4 16h2c0-5.523 4.477-10 10-10V4zM6.767 19.847A10.003 10.003 0 0 0 16 26v2c-4.991 0-9.271-3.047-11.08-7.383l1.847-.77zM16 28c6.627 0 12-5.373 12-12h-2c0 5.523-4.477 10-10 10v2zM25.233 12.153A10.003 10.003 0 0 0 16 6V4c4.991 0 9.271 3.048 11.08 7.383l-1.847.77z"
}), _react["default"].createElement("path", {
  d: "M26.54 12.694a1 1 0 0 0 .54-1.307l-1.847.766a1 1 0 0 0 1.307.541zM4.293 17.707a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.415l-1.188 1.293H4.078l-1.37-1.293a1 1 0 0 0-1.415 1.415l3 3zM26.293 14.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.415l-1.188-1.293h-2.027l-1.37 1.293a1 1 0 0 1-1.415-1.415l3-3zM5.462 19.313a1 1 0 0 0-.541 1.306l1.848-.765a1 1 0 0 0-1.307-.541z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16 7a1 1 0 0 0-1 1v2.019l2-.004V8a1 1 0 0 0-1-1zM17 24v-2.015h-2V24a1 1 0 0 0 2 0z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M21.909 12.004c.107.542-.358.995-.91.995-.552.001-.942-.492-1.25-.95C19.347 11.451 19.25 11 16 11s-4 0-4 2 .606 2 4 2c5.143 0 6 .8 6 4 0 2.95-1.275 3.86-5 3.985-.631.021-1.369.021-2 0-2.872-.096-4.559-.785-4.924-2.988-.091-.545.372-.997.924-.997s.925.463 1.075.995c.208.736.99 1.005 3.925 1.005 4 0 4-.5 4-1.998v-.004C20 17.5 20 17 16 17c-5.143 0-6-1-6-4 0-2.766 1.275-3.832 5-3.981a28.378 28.378 0 0 1 2-.004c3.006 0 4.537 1.096 4.909 2.989z"
}))), _defineProperty(_glyphs, "web", _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 6.122c-.8.205-1.461.664-2 1.324-.36.441-.667.973-.922 1.58-.467 1.107-.767 2.463-.93 3.974-.068.641-.112 1.31-.133 2H15V6.122zM17 15h3.985a26.403 26.403 0 0 0-.134-2c-.162-1.51-.462-2.867-.929-3.974A6.447 6.447 0 0 0 19 7.446c-.539-.66-1.2-1.119-2-1.324V15zm5.541-3.607c.11.518.202 1.055.273 1.607.083.647.139 1.315.166 2h2.97a9.953 9.953 0 0 0-1.54-4.412 10.053 10.053 0 0 0-3.325-3.2c.643 1.127 1.133 2.487 1.456 4.005zm.01-5.449a12.012 12.012 0 0 1 5.202 7.621c.162.787.247 1.6.247 2.435 0 .834-.085 1.648-.247 2.435a12.012 12.012 0 0 1-9.318 9.318 12 12 0 0 1-3.435.206 11.932 11.932 0 0 1-5.55-1.903 12.012 12.012 0 0 1-5.203-7.621C4.085 17.648 4 16.835 4 16c0-.834.085-1.649.247-2.435a12.012 12.012 0 0 1 9.318-9.318A11.99 11.99 0 0 1 16 4a12.156 12.156 0 0 1 2.435.247c1.492.308 2.882.892 4.116 1.697zm-12.032 1.69a10.053 10.053 0 0 0-2.93 2.954A9.953 9.953 0 0 0 6.05 15h2.97c.028-.685.084-1.353.167-2a19.91 19.91 0 0 1 .273-1.607c.323-1.518.813-2.878 1.455-4.005a10 10 0 0 0-.395.246zM6.049 17a9.951 9.951 0 0 0 1.54 4.412 10.053 10.053 0 0 0 3.325 3.2c-.642-1.127-1.132-2.487-1.455-4.005A19.914 19.914 0 0 1 9.186 19a22.895 22.895 0 0 1-.166-2H6.05zm4.966 0c.021.69.065 1.359.134 2 .162 1.51.462 2.867.929 3.974.255.607.561 1.139.922 1.58.539.66 1.2 1.119 2 1.324V17h-3.985zM17 17v8.878c.8-.205 1.461-.664 2-1.324.36-.441.667-.973.922-1.58.467-1.107.767-2.463.93-3.974.068-.641.112-1.31.133-2H17zm5.98 0a22.914 22.914 0 0 1-.166 2 19.905 19.905 0 0 1-.273 1.607c-.323 1.518-.813 2.878-1.455 4.005a10.053 10.053 0 0 0 3.325-3.2A9.954 9.954 0 0 0 25.95 17h-2.97z"
})), _defineProperty(_glyphs, "wifi", _react["default"].createElement("g", null, _react["default"].createElement("path", {
  d: "M17.314 23a2 2 0 1 0-2.828-2.828A2 2 0 0 0 17.314 23z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.293 13.808a1 1 0 0 1 0-1.415c5.858-5.857 15.355-5.857 21.213 0a1 1 0 0 1-1.414 1.415c-5.077-5.077-13.308-5.077-18.385 0a1 1 0 0 1-1.414 0z"
}), _react["default"].createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M9.536 18.05a1 1 0 0 1 0-1.414 9 9 0 0 1 12.728 0 1 1 0 0 1-1.415 1.414 7 7 0 0 0-9.9 0 1 1 0 0 1-1.413 0z"
}))), _defineProperty(_glyphs, "apple", _react["default"].createElement("path", {
  d: "M16.6437 15.5861C16.3385 16.2848 15.9772 16.928 15.5586 17.5193C14.9881 18.3255 14.5209 18.8835 14.1609 19.1934C13.6027 19.702 13.0048 19.9625 12.3644 19.9773C11.9047 19.9773 11.3504 19.8477 10.705 19.5847C10.0576 19.323 9.46262 19.1934 8.91858 19.1934C8.34801 19.1934 7.73608 19.323 7.08155 19.5847C6.42601 19.8477 5.89793 19.9847 5.49417 19.9983C4.88012 20.0242 4.26806 19.7563 3.65713 19.1934C3.2672 18.8563 2.77947 18.2786 2.1952 17.4601C1.56832 16.586 1.05294 15.5725 0.649179 14.417C0.216767 13.1689 5.70276e-08 11.9603 5.70276e-08 10.7902C5.70276e-08 9.44984 0.292262 8.29382 0.877656 7.32509C1.33773 6.54696 1.94978 5.93315 2.71581 5.48255C3.48185 5.03195 4.30955 4.80232 5.20091 4.78763C5.68863 4.78763 6.32822 4.93713 7.12303 5.23095C7.9156 5.52576 8.42451 5.67526 8.64763 5.67526C8.81444 5.67526 9.37977 5.50045 10.3382 5.15194C11.2445 4.82874 12.0094 4.69492 12.636 4.74763C14.334 4.88343 15.6097 5.54675 16.4581 6.74177C14.9395 7.6536 14.1883 8.93072 14.2032 10.5691C14.2169 11.8452 14.6841 12.9071 15.6022 13.7503C16.0183 14.1417 16.483 14.4441 17 14.6589C16.8879 14.9812 16.7695 15.2898 16.6437 15.5861V15.5861ZM12.7494 0.400111C12.7494 1.40034 12.3806 2.33425 11.6456 3.19867C10.7586 4.22629 9.68574 4.8201 8.5223 4.7264C8.50747 4.6064 8.49888 4.48011 8.49888 4.3474C8.49888 3.38718 8.9207 2.35956 9.66979 1.51934C10.0438 1.09392 10.5194 0.740188 11.0962 0.458011C11.6718 0.180044 12.2162 0.0263202 12.7282 8.94779e-09C12.7431 0.133712 12.7494 0.267436 12.7494 0.400099V0.400111Z",
  transform: "translate(8 5)"
})), _defineProperty(_glyphs, "windows", _react["default"].createElement("path", {
  d: "M0 2.83167L7.7647 1.72197L7.76809 9.58155L0.00709303 9.62793L0 2.83167ZM7.761 10.4871L7.76703 18.3536L0.0060269 17.2338L0.00559175 10.4344L7.761 10.4871ZM8.70226 1.5768L18.9976 0V9.48159L8.70226 9.56736V1.5768ZM19 10.5611L18.9976 20L8.70224 18.4752L8.68781 10.5434L19 10.5611Z",
  transform: "translate(7 6)"
})), _glyphs);
exports.glyphs = glyphs;
var glyphNames = Object.keys(glyphs);
exports.glyphNames = glyphNames;

var Icon = function Icon(_ref) {
  var is = _ref.is,
      glyph = _ref.glyph,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["is", "glyph", "size"]);

  var Component = is;
  return _react["default"].createElement(Component, _extends({
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "1.414",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": glyph,
    viewBox: "0 0 32 32",
    preserveAspectRatio: "xMidYMid meet",
    fill: "currentColor",
    width: size,
    height: size,
    children: glyphs[glyph]
  }, props));
};

Icon.propTypes = {
  is: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element]),
  glyph: _propTypes["default"].oneOf(glyphNames),
  size: _propTypes["default"].number
};
Icon.defaultProps = {
  is: 'svg',
  glyph: 'like',
  size: 32
};
var _default = Icon;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@hackclub/theme/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@hackclub/theme/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var e,t={darker:"#121217",dark:"#17171d",darkless:"#252429",black:"#1f2d3d",steel:"#273444",slate:"#3c4858",muted:"#8492a6",smoke:"#e0e6ed",snow:"#f9fafc",white:"#ffffff",red:"#ec3750",orange:"#ff8c37",yellow:"#f1c40f",green:"#33d6a6",cyan:"#5bc0de",blue:"#338eda",twitter:"#1da1f2",facebook:"#3b5998",instagram:"#e1306c"};/* harmony default export */ __webpack_exports__["default"] = ({breakpoints:[32,48,64,96,128].map(function(e){return e+"em"}),space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,16,20,24,32,48,64,96,128],initialColorModeName:"light",useColorSchemeMediaQuery:!0,colors:Object.assign({},t,{text:t.black,background:t.white,elevated:t.white,sheet:t.snow,sunken:t.smoke,border:t.smoke,placeholder:t.muted,secondary:t.slate,primary:t.red,muted:t.muted,accent:t.blue,modes:{dark:{text:t.white,background:t.dark,elevated:t.darkless,sheet:t.darkless,sunken:t.darker,border:t.darkless,placeholder:t.slate,secondary:t.muted,muted:t.muted,accent:t.cyan}}}),fonts:{heading:'"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',body:'"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',monospace:'"SF Mono", "Roboto Mono", Menlo, Consolas, monospace'},lineHeights:{title:1,heading:1.125,subheading:1.25,caption:1.375,body:1.5},fontWeights:{body:400,bold:700,heading:700},letterSpacings:{title:"-0.009em",headline:"0.009em"},sizes:{widePlus:2048,wide:1536,layoutPlus:1200,layout:1024,copyUltra:980,copyPlus:768,copy:680,narrowPlus:600,narrow:512},radii:{default:8,extra:12,ultra:16,circle:99999},shadows:{text:"0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",small:"0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)",card:"0 4px 8px rgba(0, 0, 0, 0.125)",elevated:"0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)"},text:{heading:{fontWeight:"bold",lineHeight:"heading"},title:{fontSize:[4,5,6],fontWeight:"bold",letterSpacing:"title",lineHeight:"title"},subtitle:{fontSize:[2,3,null,null,4],fontWeight:"body",letterSpacing:"headline",lineHeight:"subheading"},headline:{variant:"text.heading",letterSpacing:"headline",fontSize:4,mt:3,mb:3},subheadline:{variant:"text.heading",letterSpacing:"headline",fontSize:2,mt:0,mb:3},caption:{color:"muted",fontWeight:"medium",letterSpacing:"headline",lineHeight:"caption"}},alerts:{primary:{color:"background",bg:"orange",fontWeight:"body"}},badges:{pill:{borderRadius:"circle"}},buttons:{primary:{bg:"primary",color:"background",cursor:"pointer",fontFamily:"inherit",fontWeight:"bold",borderRadius:"default",svg:{ml:-1,mr:2}},outline:{variant:"buttons.primary",bg:"transparent",color:"primary",border:"2px solid currentColor"}},forms:{input:{bg:"elevated",color:"text",fontFamily:"inherit",borderRadius:"base",boxShadow:"small",transition:"box-shadow .125s ease-in-out",border:0,":hover,:focus":{boxShadow:"card"},"::-webkit-input-placeholder":{color:"placeholder"},"::-moz-placeholder":{color:"placeholder"},":-ms-input-placeholder":{color:"placeholder"},'&[type="search"]::-webkit-search-decoration':{display:"none"}},label:{color:"text",fontWeight:"medium"},hidden:{position:"absolute",height:"1px",width:"1px",overflow:"hidden",clip:"rect(1px, 1px, 1px, 1px)",whiteSpace:"nowrap"}},cards:{primary:{bg:"elevated",color:"text",p:[3,4],borderRadius:"extra",boxShadow:"card",overflow:"hidden",input:{boxShadow:"none !important"}},sunken:{bg:"sunken",p:[3,4],borderRadius:"extra","input, a":{bg:"header",boxShadow:"none !important"}},interactive:{variant:"cards.primary",WebkitTapHighlightColor:"transparent",transition:"transform .125s ease-in-out, box-shadow .125s ease-in-out",":hover,:focus":{transform:"scale(1.0625)",boxShadow:"elevated"}}},layout:{container:{maxWidth:["layout",null,"layoutPlus",null,"wide"],width:"100%",mx:"auto",px:3},wide:{variant:"layout.container",maxWidth:["wide",null,null,null,"widePlus"]},copy:{variant:"layout.container",maxWidth:["copy",null,null,null,"copyPlus"]},narrow:{variant:"layout.container",maxWidth:["narrow",null,"narrowPlus",null,"layout"]}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body",color:"text",margin:0,minHeight:"100vh"},h1:{variant:"text.heading",fontSize:5},h2:{variant:"text.heading",fontSize:4},h3:{variant:"text.heading",fontSize:3},h4:{variant:"text.heading",fontSize:2},h5:{variant:"text.heading",fontSize:1},h6:{variant:"text.heading",fontSize:0},p:{color:"text",fontWeight:"body",lineHeight:"body",my:3},img:{maxWidth:"100%"},hr:{border:0,borderBottom:"1px solid",borderColor:"border"},a:{color:"primary",textDecoration:"underline",textUnderlinePosition:"under",":focus,:hover":{textDecorationStyle:"wavy"}},pre:{fontFamily:"monospace",fontSize:1,p:3,color:"text",bg:"sunken",overflow:"auto",borderRadius:"default",code:Object.assign({},{color:"inherit"},{".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url":{color:"muted"},".comment":{fontStyle:"italic"},".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable":{color:"red"},".atrule, .attr-value, .keyword":{color:"blue"},".selector, .attr-name, .string, .char, .builtin, .inserted":{color:"orange"}})},code:{fontFamily:"monospace",fontSize:"inherit"},"p > code, li > code":{color:"accent",fontSize:1,"::before,::after":{content:'"`"'}},li:{my:2},table:(e={width:"100%",my:4,borderCollapse:"separate",borderSpacing:0},e[["th","td"]]={textAlign:"left",py:"4px",pr:"4px",pl:0,borderColor:"border",borderBottomStyle:"solid"},e),th:{verticalAlign:"bottom",borderBottomWidth:"2px"},td:{verticalAlign:"top",borderBottomWidth:"1px"}}});
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2({}, contextComponents, {}, components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
      ref: ref
    }, etc, {
      components: propComponents
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ "./node_modules/@styled-system/background/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/background/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (background);


/***/ }),

/***/ "./node_modules/@styled-system/border/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/border/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: border, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (border);


/***/ }),

/***/ "./node_modules/@styled-system/color/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/color/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: color, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "./node_modules/@styled-system/core/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/core/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: merge, get, createParser, createStyleFunction, system, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return createParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return createStyleFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "system", function() { return system; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);

var merge = function merge(a, b) {
  var result = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(result, (_assign = {}, _assign[key] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign2;

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign2 = {}, _assign2[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign3 = {}, _assign3[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};


/***/ }),

/***/ "./node_modules/@styled-system/css/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@styled-system/css/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: get, responsive, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsive", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};
/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@styled-system/flexbox/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/flexbox/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: flexbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return flexbox; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);


/***/ }),

/***/ "./node_modules/@styled-system/grid/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/grid/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (grid);


/***/ }),

/***/ "./node_modules/@styled-system/layout/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/layout/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");


var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "./node_modules/@styled-system/position/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@styled-system/position/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: position, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "./node_modules/@styled-system/shadow/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/shadow/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: shadow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var shadow = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (shadow);


/***/ }),

/***/ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@styled-system/should-forward-prop/dist/index.esm.js ***!
  \***************************************************************************/
/*! exports provided: props, createShouldForwardProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShouldForwardProp", function() { return createShouldForwardProp; });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");



var all = Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["background"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["buttonStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"]);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
    return Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"])(prop) && !regex.test(prop);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createShouldForwardProp(props));


/***/ }),

/***/ "./node_modules/@styled-system/space/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/space/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: margin, padding, space, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.margin);
var padding = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.padding);
var space = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"])(margin, padding);
/* harmony default export */ __webpack_exports__["default"] = (space);


/***/ }),

/***/ "./node_modules/@styled-system/typography/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/typography/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: typography, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (typography);


/***/ }),

/***/ "./node_modules/@styled-system/variant/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/variant/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: variant, default, buttonStyle, textStyle, colorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return textStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js");


var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parser;
};
/* harmony default export */ __webpack_exports__["default"] = (variant);
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});


/***/ }),

/***/ "./node_modules/@theme-ui/color-modes/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/color-modes/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: useColorMode, ColorModeProvider, InitializeColorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useColorMode", function() { return useColorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModeProvider", function() { return ColorModeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeColorMode", function() { return InitializeColorMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");





var toVarName = function (key) { return ("--theme-ui-" + key); };

var toVarValue = function (key, value) { return ("var(" + (toVarName(key)) + ", " + value + ")"); };

var join = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.filter(Boolean).join('-');
};

var numberScales = {
  fontWeights: true,
  lineHeights: true
};
var reservedKeys = {
  useCustomProperties: true,
  initialColorModeName: true,
  initialColorMode: true
};

var toPixel = function (key, value) {
  if (typeof value !== 'number') { return value; }
  if (numberScales[key]) { return value; }
  return value + 'px';
}; // convert theme values to custom properties


var toCustomProperties = function (obj, parent, themeKey) {
  var next = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    var value = obj[key];
    var name = join(parent, key);

    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name, key);
      continue;
    }

    if (reservedKeys[key]) {
      next[key] = value;
      continue;
    }

    var val = toPixel(themeKey || key, value);
    next[key] = toVarValue(name, val);
  }

  return next;
};
var objectToVars = function (parent, obj) {
  var vars = {};

  for (var key in obj) {
    if (key === 'modes') { continue; }
    var name = join(parent, key);
    var value = obj[key];

    if (value && typeof value === 'object') {
      vars = Object.assign({}, vars,
        objectToVars(name, value));
    } else {
      vars[toVarName(name)] = value;
    }
  }

  return vars;
}; // create body styles for color modes

var createColorStyles = function (theme) {
  if ( theme === void 0 ) theme = {};

  if (!theme.colors || theme.useBodyStyles === false) { return {}; }

  if (theme.useCustomProperties === false || !theme.colors.modes) {
    return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
      body: {
        color: 'text',
        bg: 'background'
      }
    })(theme);
  }

  var colors = theme.rawColors || theme.colors;
  var modes = colors.modes;
  var styles = objectToVars('colors', colors);
  Object.keys(modes).forEach(function (mode) {
    var key = "&.theme-ui-" + mode;
    styles[key] = objectToVars('colors', modes[mode]);
  });
  return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    body: Object.assign({}, styles,
      {color: 'text',
      bg: 'background'})
  })(theme);
};

var STORAGE_KEY = 'theme-ui-color-mode';
var storage = {
  get: function (init) {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || init;
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  },
  set: function (value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  }
};

var getMediaQuery = function () {
  var darkQuery = '(prefers-color-scheme: dark)';
  var lightQuery = '(prefers-color-scheme: light)';
  var darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
  var lightMQL = window.matchMedia ? window.matchMedia(lightQuery) : {};
  var dark = darkMQL.media === darkQuery && darkMQL.matches;
  if (dark) { return 'dark'; }
  var light = lightMQL.media === lightQuery && lightMQL.matches;
  if (light) { return 'light'; }
  return 'default';
};

var useColorModeState = function (theme) {
  if ( theme === void 0 ) theme = {};

  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(theme.initialColorModeName || 'default');
  var mode = ref[0];
  var setMode = ref[1]; // initialize state

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var stored = storage.get();
    document.body.classList.remove('theme-ui-' + stored);

    if (!stored && theme.useColorSchemeMediaQuery) {
      var query = getMediaQuery();
      setMode(query);
      return;
    }

    if (!stored || stored === mode) { return; }
    setMode(stored);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (!mode) { return; }
    storage.set(mode);
  }, [mode]);

  if (true) {
    if (theme.colors && theme.colors.modes && Object.keys(theme.colors.modes).indexOf(theme.initialColorModeName) > -1) {
      console.warn('The `initialColorModeName` value should be a unique name' + ' and cannot reference a key in `theme.colors.modes`.');
    }
  }

  return [mode, setMode];
};

var useColorMode = function () {
  var ref = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])();
  var colorMode = ref.colorMode;
  var setColorMode = ref.setColorMode;

  if (typeof setColorMode !== 'function') {
    throw new Error("[useColorMode] requires the ColorModeProvider component");
  }

  return [colorMode, setColorMode];
};

var applyColorMode = function (theme, mode) {
  if (!mode) { return theme; }
  var modes = Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["get"])(theme, 'colors.modes', {});
  return _theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["merge"].all({}, theme, {
    colors: Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["get"])(modes, mode, {})
  });
};

var BodyStyles = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
  styles: function (theme) { return createColorStyles(theme); }
}); };

var ColorModeProvider = function (ref) {
  var children = ref.children;

  var outer = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])();
  var ref$1 = useColorModeState(outer.theme);
  var colorMode = ref$1[0];
  var setColorMode = ref$1[1];
  var theme = applyColorMode(outer.theme || {}, colorMode);
  var emotionTheme = Object.assign({}, theme);

  if (theme.useCustomProperties !== false) {
    emotionTheme.colors = toCustomProperties(emotionTheme.colors, 'colors');
  }

  var context = Object.assign({}, outer,
    {theme: theme,
    colorMode: colorMode,
    setColorMode: setColorMode});
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Provider, {
    value: emotionTheme
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["Context"].Provider, {
    value: context
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BodyStyles, {
    key: 'color-mode'
  }), children));
};
var noflash = "(function() { try {\n  var mode = localStorage.getItem('theme-ui-color-mode');\n  if (!mode) return\n  document.body.classList.add('theme-ui-' + mode);\n} catch (e) {} })();";
var InitializeColorMode = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])('script', {
  key: 'theme-ui-no-flash',
  dangerouslySetInnerHTML: {
    __html: noflash
  }
}); };


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/components/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theme-ui/components/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: Box, Flex, Grid, Button, Link, Text, Heading, Image, Card, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Field, Progress, Donut, Spinner, Avatar, Badge, Close, Alert, Divider, Embed, AspectRatio, AspectImage, Container, NavLink, Message, IconButton, MenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return Donut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatio", function() { return AspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectImage", function() { return AspectImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/should-forward-prop */ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js");
/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/space */ "./node_modules/@styled-system/space/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/color */ "./node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var shouldForwardProp = Object(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__["createShouldForwardProp"])(( _styled_system_space__WEBPACK_IMPORTED_MODULE_2__["default"].propNames ).concat( _styled_system_color__WEBPACK_IMPORTED_MODULE_3__["default"].propNames));

var sx = function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(props.sx)(props.theme); };

var base = function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(props.__css)(props.theme); };

var variant = function (ref) {
  var theme = ref.theme;
  var variant = ref.variant;
  var __themeKey = ref.__themeKey; if ( __themeKey === void 0 ) __themeKey = 'variants';

  return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["get"])(theme, __themeKey + '.' + variant, Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["get"])(theme, variant)));
};

var Box = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])('div', {
  shouldForwardProp: shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, _styled_system_space__WEBPACK_IMPORTED_MODULE_2__["default"], _styled_system_color__WEBPACK_IMPORTED_MODULE_3__["default"], sx, function (props) { return props.css; });

var Flex = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(Box)({
  display: 'flex'
});

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var px = function (n) { return typeof n === 'number' ? n + 'px' : n; };

var widthToColumns = function (width) { return Array.isArray(width) ? width.map(widthToColumns) : !!width && ("repeat(auto-fit, minmax(" + (px(width)) + ", 1fr))"); };

var countToColumns = function (n) { return Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === 'number' ? ("repeat(" + n + ", 1fr)") : n); };

var Grid = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var width = ref$1.width;
  var columns = ref$1.columns;
  var gap = ref$1.gap; if ( gap === void 0 ) gap = 3;
  var rest = objectWithoutProperties( ref$1, ["width", "columns", "gap"] );
  var props = rest;

  var gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "grids", __css: {
    display: 'grid',
    gridGap: gap,
    gridTemplateColumns: gridTemplateColumns
  } }));
});

var Button = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "primary" }, props, { __themeKey: "buttons", __css: {
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  fontSize: 'inherit',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 4
} })); });

var Link = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "a", variant: "styles.a" }, props, { __themeKey: "links" })); });

var Text = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "text" })); });

var Heading = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "h2", variant: "heading" }, props, { __themeKey: "text", __css: {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
} })); });

var Image = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "img" }, props, { __themeKey: "images", __css: Object.assign({}, {maxWidth: '100%',
  height: 'auto'},
  props.__css) })); });

var Card = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "cards" })); });

var Label = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "label", variant: "label" }, props, { __themeKey: "forms", __css: {
  width: '100%',
  display: 'flex'
} })); });

var Input = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", variant: "input" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent'
} })); });

function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var SVG = (function (ref) {
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1( ref, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size + '', height: size + '', viewBox: "0 0 24 24", fill: "currentcolor" }, props));
});

var getProps = function (test) { return function (props) {
  var next = {};

  for (var key in props) {
    if (test(key || '')) { next[key] = props[key]; }
  }

  return next;
}; };
var MRE = /^m[trblxy]?$/;
var getMargin = getProps(function (k) { return MRE.test(k); });
var omitMargin = getProps(function (k) { return !MRE.test(k); });

var DownArrow = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M7 10l5 5 5-5z" })
  ); };

var Select = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, getMargin(props), { sx: {
  display: 'flex'
} }),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "select", variant: "select" }, omitMargin(props), { __themeKey: "forms", __css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent'
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( DownArrow, { sx: {
    ml: -28,
    alignSelf: 'center',
    pointerEvents: 'none'
  } })
  ); });

var Textarea = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "textarea", variant: "textarea" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent'
} })); });

function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RadioChecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  ); };

var RadioUnchecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  ); };

var RadioIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( RadioChecked, Object.assign({}, props, { __css: {
    display: 'none',
    'input:checked ~ &': {
      display: 'block'
    }
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( RadioUnchecked, Object.assign({}, props, { __css: {
    display: 'block',
    'input:checked ~ &': {
      display: 'none'
    }
  } }))
  ); };

var Radio = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var className = ref$1.className;
  var sx = ref$1.sx;
  var variant = ref$1.variant; if ( variant === void 0 ) variant = 'radio';
  var rest = objectWithoutProperties$2( ref$1, ["className", "sx", "variant"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, null,
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "radio" }, props, { sx: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  } })),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: RadioIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
    // todo: system props??
    mr: 2,
    borderRadius: 9999,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      bg: 'highlight'
    }
  } })
    );
});

function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CheckboxChecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
  ); };

var CheckboxUnchecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
  ); };

var CheckboxIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( CheckboxChecked, Object.assign({}, props, { __css: {
    display: 'none',
    'input:checked ~ &': {
      display: 'block'
    }
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( CheckboxUnchecked, Object.assign({}, props, { __css: {
    display: 'block',
    'input:checked ~ &': {
      display: 'none'
    }
  } }))
  ); };

var Checkbox = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var className = ref$1.className;
  var sx = ref$1.sx;
  var variant = ref$1.variant; if ( variant === void 0 ) variant = 'checkbox';
  var rest = objectWithoutProperties$3( ref$1, ["className", "sx", "variant"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, null,
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "checkbox" }, props, { sx: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  } })),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: CheckboxIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
    mr: 2,
    borderRadius: 4,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      color: 'primary',
      bg: 'highlight'
    }
  } })
    );
});

var thumb = {
  appearance: 'none',
  width: 16,
  height: 16,
  bg: 'currentcolor',
  border: 0,
  borderRadius: 9999,
  variant: 'forms.slider.thumb'
};
var Slider = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "range", variant: "slider" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  height: 4,
  my: 2,
  cursor: 'pointer',
  appearance: 'none',
  borderRadius: 9999,
  color: 'inherit',
  bg: 'gray',
  ':focus': {
    outline: 'none',
    color: 'primary'
  },
  '&::-webkit-slider-thumb': thumb,
  '&::-moz-range-thumb': thumb,
  '&::-ms-thumb': thumb
} })); });

function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Field = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var Control = ref$1.as; if ( Control === void 0 ) Control = Input;
  var label = ref$1.label;
  var name = ref$1.name;
  var rest = objectWithoutProperties$4( ref$1, ["as", "label", "name"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, getMargin(props),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Label, { htmlFor: name }, label),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Control, Object.assign({}, { ref: ref, id: name, name: name }, omitMargin(props)))
      );
});

var Progress = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "progress", variant: "styles.progress" }, props, { __css: {
  display: 'block',
  width: '100%',
  height: '4px',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  appearance: 'none',
  color: 'primary',
  bg: 'gray',
  borderRadius: 9999,
  border: 'none',
  '&::-webkit-progress-bar': {
    bg: 'transparent'
  },
  '&::-webkit-progress-value': {
    bg: 'currentcolor'
  },
  '&::-moz-progress-bar': {
    bg: 'currentcolor'
  }
} })); });

function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Donut = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 128;
  var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 2;
  var value = ref$1.value; if ( value === void 0 ) value = 0;
  var min = ref$1.min; if ( min === void 0 ) min = 0;
  var max = ref$1.max; if ( max === void 0 ) max = 1;
  var title = ref$1.title;
  var rest = objectWithoutProperties$5( ref$1, ["size", "strokeWidth", "value", "min", "max", "title"] );
  var props = rest;

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - (value - min) / (max - min) * C;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img", 'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max }, props, { __css: {
    color: 'primary'
  } }),
        title && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'title', null, title ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, transform: "rotate(-90 16 16)" })
      );
});

function objectWithoutProperties$6 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var spin = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"])({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});
var Spinner = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 48;
  var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 4;
  var title = ref$1.title; if ( title === void 0 ) title = 'Loading...';
  var duration = ref$1.duration; if ( duration === void 0 ) duration = 500;
  var rest = objectWithoutProperties$6( ref$1, ["size", "strokeWidth", "max", "title", "duration"] );
  var props = rest;

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - 1 / 4 * C;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img" }, props, { __css: {
    color: 'primary',
    overflow: 'visible'
  } }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'title', null, title ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: "circle", cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, __css: {
      transformOrigin: '50% 50%',
      animationName: spin.toString(),
      animationTimingFunction: 'linear',
      animationDuration: duration + 'ms',
      animationIterationCount: 'infinite'
    } })
      );
});

function objectWithoutProperties$7 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Avatar = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 48;
  var rest = objectWithoutProperties$7( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Image, Object.assign({}, { ref: ref, width: size, height: size, variant: "avatar" }, props, { __css: {
  borderRadius: 9999
} }));
});

var Badge = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "badges", __css: {
  display: 'inline-block',
  verticalAlign: 'baseline',
  fontSize: 0,
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  px: 1,
  borderRadius: 2,
  color: 'white',
  bg: 'primary'
} })); });

function objectWithoutProperties$8 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var IconButton = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 32;
  var rest = objectWithoutProperties$8( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "icon" }, props, { __themeKey: "buttons", __css: {
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 1,
  width: size,
  height: size,
  color: 'inherit',
  bg: 'transparent',
  border: 'none',
  borderRadius: 4
} }));
});

function objectWithoutProperties$9 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var x = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentcolor", viewBox: "0 0 24 24" },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
  );
var Close = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var rest = objectWithoutProperties$9( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( IconButton, Object.assign({}, { ref: ref, title: "Close", 'aria-label': "Close", variant: "close" }, props, { children: x }));
});

var Alert = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "alerts", __css: {
  display: 'flex',
  alignItems: 'center',
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'primary',
  borderRadius: 4
} })); });

var Divider = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "hr", variant: "styles.hr" }, props, { __css: {
  color: 'gray',
  m: 0,
  my: 2,
  border: 0,
  borderBottom: '1px solid'
} })); });

function objectWithoutProperties$a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Embed = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 16 / 9;
  var src = ref$1.src;
  var frameBorder = ref$1.frameBorder; if ( frameBorder === void 0 ) frameBorder = 0;
  var allowFullScreen = ref$1.allowFullScreen; if ( allowFullScreen === void 0 ) allowFullScreen = true;
  var width = ref$1.width; if ( width === void 0 ) width = 560;
  var height = ref$1.height; if ( height === void 0 ) height = 315;
  var allow = ref$1.allow;
  var rest = objectWithoutProperties$a( ref$1, ["ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, props, { __css: {
  width: '100%',
  height: 0,
  paddingBottom: 100 / ratio + '%',
  position: 'relative',
  overflow: 'hidden'
} }),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { ref: ref, as: "iframe", src: src, width: width, height: height, frameBorder: frameBorder, allowFullScreen: allowFullScreen, allow: allow, __css: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  } })
    );
});

function objectWithoutProperties$b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var AspectRatio = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 4 / 3;
  var children = ref$1.children;
  var rest = objectWithoutProperties$b( ref$1, ["ratio", "children"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { ref: ref, sx: {
  position: 'relative',
  overflow: 'hidden'
} },
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { sx: {
    width: '100%',
    height: 0,
    paddingBottom: 100 / ratio + '%'
  } }),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, props, { __css: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } }),
        children
      )
    );
});

function objectWithoutProperties$c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var AspectImage = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio;
  var rest = objectWithoutProperties$c( ref$1, ["ratio"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( AspectRatio, { ratio: ratio },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Image, Object.assign({}, { ref: ref }, props, { __css: {
    objectFit: 'cover'
  } }))
  );
});

var Container = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "container" }, props, { __themeKey: "layout", __css: {
  width: '100%',
  maxWidth: 'container',
  mx: 'auto'
} })); });

var NavLink = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Link, Object.assign({}, { ref: ref, variant: "nav" }, props, { __css: {
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  '&:hover, &:focus, &.active': {
    color: 'primary'
  }
} })); });

var Message = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "messages", __css: {
  padding: 3,
  paddingLeft: function (t) { return t.space[3] - t.space[1]; },
  borderLeftWidth: function (t) { return t.space[1]; },
  borderLeftStyle: 'solid',
  borderLeftColor: 'primary',
  borderRadius: 4,
  bg: 'highlight'
} })); });

var MenuIcon = function (ref) {
  var size = ref.size; if ( size === void 0 ) size = 24;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentcolor", viewBox: "0 0 24 24", sx: {
  display: 'block',
  margin: 0
} },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
  );
};
var MenuButton = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( IconButton, Object.assign({}, { ref: ref, title: "Menu", 'aria-label': "Toggle Menu", variant: "menu" }, props),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( MenuIcon, null )
  ); });


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/core/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@theme-ui/core/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: jsx, Context, useThemeUI, merge, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeUI", function() { return useThemeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core/package.json */ "./node_modules/@emotion/core/package.json");
var _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @emotion/core/package.json */ "./node_modules/@emotion/core/package.json", 1);






var getCSS = function (props) {
  if (!props.sx && !props.css) { return undefined; }
  return function (theme) {
    var styles = Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])(props.sx)(theme);
    var raw = typeof props.css === 'function' ? props.css(theme) : props.css;
    return [styles, raw];
  };
};

var parseProps = function (props) {
  if (!props) { return null; }
  var next = {};

  for (var key in props) {
    if (key === 'sx') { continue; }
    next[key] = props[key];
  }

  var css$$1 = getCSS(props);
  if (css$$1) { next.css = css$$1; }
  return next;
};

var jsx$1 = function (type, props) {
  var children = [], len = arguments.length - 2;
  while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

  return _emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"].apply(undefined, [type, parseProps(props) ].concat( children));
};
var Context = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
  __EMOTION_VERSION__: _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__["version"],
  theme: null
});
var useThemeUI = function () { return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Context); };
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
var FORWARD_REF = canUseSymbol ? Symbol.for('react.forward_ref') : 0xeac7;

var isMergeableObject = function (n) {
  return !!n && typeof n === 'object' && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
};

var arrayMerge = function (destinationArray, sourceArray, options) { return sourceArray; };

var merge = function (a, b) { return deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(a, b, {
  isMergeableObject: isMergeableObject,
  arrayMerge: arrayMerge
}); };

merge.all = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return deepmerge__WEBPACK_IMPORTED_MODULE_3___default.a.all(args, {
  isMergeableObject: isMergeableObject,
  arrayMerge: arrayMerge
});
};

var BaseProvider = function (ref) {
  var context = ref.context;
  var children = ref.children;

  return jsx$1(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["ThemeContext"].Provider, {
  value: context.theme
}, jsx$1(Context.Provider, {
  value: context,
  children: children
}));
};

var ThemeProvider = function (ref) {
  var theme = ref.theme;
  var children = ref.children;

  var outer = useThemeUI();

  if (true) {
    if (outer.__EMOTION_VERSION__ !== _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__["version"]) {
      console.warn('Multiple versions of Emotion detected,', 'and theming might not work as expected.', 'Please ensure there is only one copy of @emotion/core installed in your application.');
    }
  }

  var context = typeof theme === 'function' ? Object.assign({}, outer,
    {theme: theme(outer.theme)}) : merge.all({}, outer, {
    theme: theme
  });
  return jsx$1(BaseProvider, {
    context: context,
    children: children
  });
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/css/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@theme-ui/css/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: get, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
var get = function (obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) { return n + 'em'; });
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function (scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') { return '-' + n; }
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var obj;

  return (Object.assign({}, acc,
  ( obj = {}, obj[curr] = positiveOrNegative, obj )));
}, {});

var responsive = function (styles) { return function (theme) {
  var next = {};
  var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
  var mediaQueries = [null ].concat( breakpoints.map(function (n) { return ("@media screen and (min-width: " + n + ")"); }));

  for (var key in styles) {
    var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
    if (value == null) { continue; }

    if (!Array.isArray(value)) {
      next[key] = value;
      continue;
    }

    for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      var media = mediaQueries[i];

      if (!media) {
        next[key] = value[i];
        continue;
      }

      next[media] = next[media] || {};
      if (value[i] == null) { continue; }
      next[media][key] = value[i];
    }
  }

  return next;
}; };

var css = function (args) { return function (props) {
  if ( props === void 0 ) props = {};

  var theme = Object.assign({}, defaultTheme,
    (props.theme || props));
  var result = {};
  var obj = typeof args === 'function' ? args(theme) : args;
  var styles = responsive(obj)(theme);

  for (var key in styles) {
    var x = styles[key];
    var val = typeof x === 'function' ? x(theme) : x;

    if (key === 'variant') {
      var variant = css(get(theme, val))(theme);
      result = Object.assign({}, result,
        variant);
      continue;
    }

    if (val && typeof val === 'object') {
      result[key] = css(val)(theme);
      continue;
    }

    var prop = get(aliases, key, key);
    var scaleName = get(scales, prop);
    var scale = get(theme, scaleName, get(theme, prop, {}));
    var transform = get(transforms, prop, get);
    var value = transform(scale, val, val);

    if (multiples[prop]) {
      var dirs = multiples[prop];

      for (var i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return result;
}; };


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/mdx/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@theme-ui/mdx/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: themed, Styled, components, MDXProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider$1; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");







var tags = ['p', 'b', 'i', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'pre', 'code', 'ol', 'ul', 'li', 'blockquote', 'hr', 'em', 'table', 'tr', 'th', 'td', 'em', 'strong', 'del', // mdx
'inlineCode', 'thematicBreak', // other
'div', // theme-ui
'root'];
var aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div'
};

var alias = function (n) { return aliases[n] || n; };

var themed = function (key) { return function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])(Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["get"])(props.theme, ("styles." + key)))(props.theme); }; };
var Styled = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(themed('div'));
var components = {};
tags.forEach(function (tag) {
  components[tag] = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(alias(tag))(themed(tag));
  Styled[tag] = components[tag];
});

var createComponents = function (comps) {
  var next = Object.assign({}, components);
  Object.keys(comps).forEach(function (key) {
    next[key] = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(comps[key])(themed(key));
  });
  return next;
};

var MDXProvider$1 = function (ref) {
  var components = ref.components;
  var children = ref.children;

  var outer = Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["useMDXComponents"])();
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["MDXProvider"], {
    components: createComponents(Object.assign({}, outer,
      components)),
    children: children
  });
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/theme-provider/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theme-ui/theme-provider/dist/index.esm.js ***!
  \*****************************************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider$1; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/color-modes */ "./node_modules/@theme-ui/color-modes/dist/index.esm.js");
/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/mdx */ "./node_modules/@theme-ui/mdx/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");





var get = function (obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function (scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);

  if (typeof n === 'string') {
    return '-' + n;
  }

  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var obj;
  return Object.assign({}, acc, (obj = {}, obj[curr] = positiveOrNegative, obj));
}, {});

var responsive = function (styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];

      if (value == null) {
        continue;
      }

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};

        if (value[i] == null) {
          continue;
        }

        next[media][key] = value[i];
      }
    }

    return next;
  };
};

var css = function (args) {
  return function (props) {
    if (props === void 0) { props = {}; }
    var theme = Object.assign({}, defaultTheme, props.theme || props);
    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = Object.assign({}, result, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

var BodyStyles = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["Global"], {
  styles: function (theme) {
    if (theme.useBodyStyles === false || theme.styles && !theme.styles.root) { return false; }
    var boxSizing = theme.useBorderBox === false ? null : 'border-box';
    return css({
      '*': {
        boxSizing: boxSizing
      },
      body: {
        margin: 0,
        variant: 'styles.root'
      }
    })(theme);
  }
}); };

var ThemeProvider$1 = function (ref) {
  var theme = ref.theme;
  var components = ref.components;
  var children = ref.children;

  var outer = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["useThemeUI"])();

  if (typeof outer.setColorMode === 'function') {
    return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
      theme: theme
    }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["MDXProvider"], {
      components: components,
      children: children
    }));
  }

  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
    theme: theme
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["ColorModeProvider"], null, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(BodyStyles), Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["MDXProvider"], {
    components: components,
    children: children
  })));
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/fonts.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/fonts.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@font-face{font-family:Whyte;font-style:normal;font-weight:400;src:url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2FWhyte-Regular-412d6af025a4cfe3d36ab0850f3b258f.woff2?v=1582525105493) format(\"woff2\");font-display:swap;}\n@font-face{font-family:Whyte;font-style:normal;font-weight:700;src:url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2FWhyte-Bold-259eea7f642aa1973e3688f57b803286.woff2?v=1582525121432) format(\"woff2\");font-display:swap;}\n@font-face{font-family:WhyteInktrap;font-style:normal;font-weight:700;src:url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2FWhyteInktrap-Bold-d5fda619e54a4948a42c0f133a4ad5ed.woff2?v=1582525136783) format(\"woff2\");font-display:swap;}\n", "",{"version":3,"sources":["D:/site-glitch/components/fonts.css"],"names":[],"mappings":"AAAA,WAAW,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,2JAA2J,CAAC,iBAAiB,CAAC;AAC7O,WAAW,iBAAiB,CAAC,iBAAiB,CAAC,eAAe,CAAC,wJAAwJ,CAAC,iBAAiB,CAAC;AAC1O,WAAW,wBAAwB,CAAC,iBAAiB,CAAC,eAAe,CAAC,+JAA+J,CAAC,iBAAiB,CAAC","file":"fonts.css","sourcesContent":["@font-face{font-family:Whyte;font-style:normal;font-weight:400;src:url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2FWhyte-Regular-412d6af025a4cfe3d36ab0850f3b258f.woff2?v=1582525105493) format(\"woff2\");font-display:swap;}\n@font-face{font-family:Whyte;font-style:normal;font-weight:700;src:url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2FWhyte-Bold-259eea7f642aa1973e3688f57b803286.woff2?v=1582525121432) format(\"woff2\");font-display:swap;}\n@font-face{font-family:WhyteInktrap;font-style:normal;font-weight:700;src:url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2FWhyteInktrap-Bold-d5fda619e54a4948a42c0f133a4ad5ed.woff2?v=1582525136783) format(\"woff2\");font-display:swap;}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
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
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_ref) {
  var Component, ctx, pageProps;
  return _regeneratorRuntime.async(function appGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Component = _ref.Component, ctx = _ref.ctx;
          _context.next = 3;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(Component, ctx));

        case 3:
          pageProps = _context.sent;
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return _react["default"].createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/styled-system/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/styled-system/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: get, createParser, createStyleFunction, compose, system, margin, padding, space, color, layout, typography, flexbox, border, background, position, grid, shadow, boxShadow, textShadow, variant, buttonStyle, textStyle, colorStyle, borders, width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, overflowX, overflowY, opacity, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, zIndex, top, right, bottom, left, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlign", function() { return verticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowX", function() { return overflowX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowY", function() { return overflowY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return backgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return backgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundPosition", function() { return backgroundPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeat", function() { return backgroundRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/layout */ "./node_modules/@styled-system/layout/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/color */ "./node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/typography */ "./node_modules/@styled-system/typography/dist/index.esm.js");
/* harmony import */ var _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/flexbox */ "./node_modules/@styled-system/flexbox/dist/index.esm.js");
/* harmony import */ var _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-system/grid */ "./node_modules/@styled-system/grid/dist/index.esm.js");
/* harmony import */ var _styled_system_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-system/border */ "./node_modules/@styled-system/border/dist/index.esm.js");
/* harmony import */ var _styled_system_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-system/background */ "./node_modules/@styled-system/background/dist/index.esm.js");
/* harmony import */ var _styled_system_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-system/position */ "./node_modules/@styled-system/position/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "system", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"]; });

/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styled-system/space */ "./node_modules/@styled-system/space/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["margin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["padding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["typography"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["flexbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "background", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["background"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["grid"]; });

/* harmony import */ var _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @styled-system/shadow */ "./node_modules/@styled-system/shadow/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["shadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @styled-system/variant */ "./node_modules/@styled-system/variant/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["variant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["buttonStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["textStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["colorStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

 // v4 api shims






















var width = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].width,
    height = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].height,
    minWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minWidth,
    minHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minHeight,
    maxWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxWidth,
    maxHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxHeight,
    size = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].size,
    verticalAlign = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].verticalAlign,
    display = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].display,
    overflow = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflow,
    overflowX = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowX,
    overflowY = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowY;
var opacity = _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["default"].opacity;
var fontSize = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize,
    fontFamily = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily,
    fontWeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontWeight,
    lineHeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeight,
    textAlign = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].textAlign,
    fontStyle = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontStyle,
    letterSpacing = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].letterSpacing;
var alignItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignItems,
    alignContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignContent,
    justifyItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyItems,
    justifyContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyContent,
    flexWrap = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexWrap,
    flexDirection = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexDirection,
    flex = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flex,
    flexGrow = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexGrow,
    flexShrink = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexShrink,
    flexBasis = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexBasis,
    justifySelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifySelf,
    alignSelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignSelf,
    order = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].order;
var gridGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridGap,
    gridColumnGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumnGap,
    gridRowGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRowGap,
    gridColumn = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumn,
    gridRow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRow,
    gridAutoFlow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoFlow,
    gridAutoColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoColumns,
    gridAutoRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoRows,
    gridTemplateColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateColumns,
    gridTemplateRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateRows,
    gridTemplateAreas = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateAreas,
    gridArea = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridArea;
var borderWidth = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderWidth,
    borderStyle = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderStyle,
    borderColor = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderColor,
    borderTop = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderTop,
    borderRight = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRight,
    borderBottom = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderBottom,
    borderLeft = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderLeft,
    borderRadius = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRadius;
var backgroundImage = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundImage,
    backgroundSize = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundSize,
    backgroundPosition = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundPosition,
    backgroundRepeat = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundRepeat;
var zIndex = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].zIndex,
    top = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].top,
    right = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].right,
    bottom = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].bottom,
    left = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].left;

 // v4 style API shim

var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"])({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parse;
};


/***/ }),

/***/ "./node_modules/theme-ui/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/theme-ui/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: jsx, Context, merge, useThemeUI, useColorMode, InitializeColorMode, Styled, components, ThemeProvider, Box, Flex, Grid, Button, Link, Text, Heading, Image, Card, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Field, Progress, Donut, Spinner, Avatar, Badge, Close, Alert, Divider, Embed, AspectRatio, AspectImage, Container, NavLink, Message, IconButton, MenuButton, css, get, BaseStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStyles", function() { return BaseStyles; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemeUI", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["useThemeUI"]; });

/* harmony import */ var _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/color-modes */ "./node_modules/@theme-ui/color-modes/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useColorMode", function() { return _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["useColorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializeColorMode", function() { return _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["InitializeColorMode"]; });

/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/mdx */ "./node_modules/@theme-ui/mdx/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["Styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["components"]; });

/* harmony import */ var _theme_ui_theme_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/theme-provider */ "./node_modules/@theme-ui/theme-provider/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _theme_ui_theme_provider__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"]; });

/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @theme-ui/components */ "./node_modules/@theme-ui/components/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Box"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Heading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Donut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Avatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Badge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Divider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Embed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AspectRatio", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["AspectRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AspectImage", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["AspectImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["NavLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["MenuButton"]; });

/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__["get"]; });









function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var BaseStyles = function BaseStyles(props) {
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])('div', _objectSpread2({}, props, {
    sx: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      variant: 'styles'
    }
  }));
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/meta */ "./components/meta.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_fonts_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/fonts.css */ "./components/fonts.css");
/* harmony import */ var _components_fonts_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_fonts_css__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "D:\\site-glitch\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var _default = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, _App);

  var _super = _createSuper(_default);

  function _default() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_meta__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: _components_theme__WEBPACK_IMPORTED_MODULE_11__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }))));
    }
  }]);

  return _default;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);



/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! D:\site-glitch\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map