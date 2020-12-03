webpackHotUpdate_N_E("pages/ingreso",{

/***/ "./src/components/formLogin.js":
/*!*************************************!*\
  !*** ./src/components/formLogin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\andrew.martinez\\Desktop\\Probar projecto\\tareas-iniciales-crear-aplicacion-react\\frontend\\src\\components\\formLogin.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var SimLogin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SimLogin, _Component);

  var _super = _createSuper(SimLogin);

  function SimLogin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SimLogin);

    _this = _super.call(this, props);
    _this.state = {
      valid: true,
      email: '',
      password: '',
      registrationErrors: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSumbit = _this.handleSumbit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SimLogin, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSumbit",
    value: function handleSumbit(e) {
      e.preventDefault();
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('https://vercel-new-3u38pfowq.vercel.app/api/login', {
        "email": this.state.email,
        "passwd": this.state.password
      }).then(function (Response) {
        console.log("post realizado correctamente", Response);

        if (Response.data.found == undefined) {
          var rol = Response.data.Rol;

          if (rol == "CUSTOMER") {
            console.log(rol);
          } else {
            console.log(rol);
          }
        } else {
          console.log(Response.data.found);
        }
      })["catch"](function (error) {
        console.log("¿QUE QUERES?", error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "formLogin",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
            onSubmit: this.handleSumbit,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
              children: "Ingreso"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              children: "Email *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "inputIngreso",
              autoComplete: "off",
              type: "email",
              name: "email",
              value: this.state.email,
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              children: "Contrase\xF1a *"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "inputIngreso",
              autoComplete: "off",
              type: "password",
              name: "password",
              value: this.state.password,
              onChange: this.handleChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              href: "/empty",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                className: "recContr",
                children: " Recuperar contrase\xF1a"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 43
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              href: "/registro",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                disabled: this.valid,
                className: "btnPrimario",
                type: "submit",
                children: " Ingresar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 46
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 28
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            href: "/registro",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              className: "btnSecundario",
              children: "Registrarse"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 57
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, this);
    }
  }]);

  return SimLogin;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SimLogin);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybUxvZ2luLmpzIl0sIm5hbWVzIjpbIlNpbUxvZ2luIiwicHJvcHMiLCJzdGF0ZSIsInZhbGlkIiwiZW1haWwiLCJwYXNzd29yZCIsInJlZ2lzdHJhdGlvbkVycm9ycyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdW1iaXQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZm91bmQiLCJ1bmRlZmluZWQiLCJyb2wiLCJSb2wiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDTUEsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFdBQUssRUFBRSxJQURFO0FBRVRDLFdBQUssRUFBRSxFQUZFO0FBR1RDLGNBQVEsRUFBRSxFQUhEO0FBSVRDLHdCQUFrQixFQUFFO0FBSlgsS0FBYjtBQU9BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFYZTtBQVlsQjs7OztpQ0FFWUUsQyxFQUFHO0FBQ1osV0FBS0MsUUFBTCwrRkFDS0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBRGQsRUFDcUJILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUQ5QjtBQUdIOzs7aUNBRVlKLEMsRUFBRztBQUNaQSxPQUFDLENBQUNLLGNBQUY7QUFEWSx3QkFLUixLQUFLYixLQUxHO0FBQUEsVUFHUkUsS0FI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SjtBQTZCSDs7OztFQXJGa0J5QiwrQzs7QUF5RlI1Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmdyZXNvLjk5OGI3ZTllZDkwMGIwOTc0ZTdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5jbGFzcyBTaW1Mb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvbkVycm9yczogJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VtYml0ID0gdGhpcy5oYW5kbGVTdW1iaXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1bWJpdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwczovL3ZlcmNlbC1uZXctM3UzOHBmb3dxLnZlcmNlbC5hcHAvYXBpL2xvZ2luJywge1xyXG4gICAgICAgICAgICBcImVtYWlsXCI6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgIFwicGFzc3dkXCI6IHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKFJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCByZWFsaXphZG8gY29ycmVjdGFtZW50ZVwiLCBSZXNwb25zZSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoUmVzcG9uc2UuZGF0YS5mb3VuZCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm9sID0gUmVzcG9uc2UuZGF0YS5Sb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvbCA9PSBcIkNVU1RPTUVSXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9sKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhSZXNwb25zZS5kYXRhLmZvdW5kKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLCv1FVRSBRVUVSRVM/XCIsIGVycm9yKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtTG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdW1iaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SW5ncmVzbzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsICo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dEluZ3Jlc29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRyYXNlw7FhICo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dEluZ3Jlc29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZW1wdHlcIiA+PHAgY2xhc3NOYW1lPVwicmVjQ29udHJcIj4gUmVjdXBlcmFyIGNvbnRyYXNlw7FhPC9wPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWdpc3Ryb1wiID48YnV0dG9uIGRpc2FibGVkPXt0aGlzLnZhbGlkfSBjbGFzc05hbWU9XCJidG5QcmltYXJpb1wiIHR5cGU9XCJzdWJtaXRcIj4gSW5ncmVzYXI8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0cm9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48YnV0dG9uIGNsYXNzTmFtZT1cImJ0blNlY3VuZGFyaW9cIj5SZWdpc3RyYXJzZTwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW1Mb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==