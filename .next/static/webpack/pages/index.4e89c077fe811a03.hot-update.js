"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PhotoGallery.tsx":
/*!*************************************!*\
  !*** ./components/PhotoGallery.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/PhotoGallery.tsx\n\n\nconst photos = [\n    \"/photography/IMG_7547.JPG\",\n    \"/photography/IMG_8630.JPG\",\n    \"/photography/IMG_8768.JPG\",\n    \"/photography/IMG_8928.JPG\"\n];\nconst PhotoGallery = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#1E1E1E] p-6 md:p-10 rounded-3xl shadow-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-semibold text-white mb-6\",\n                children: \"Photography\"\n            }, void 0, false, {\n                fileName: \"/Users/rayaankhan/repos/Personal-Website/components/PhotoGallery.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-2xl font-semibold mb-4 animated-gradient-text\",\n                children: \"some of my favourite shots\"\n            }, void 0, false, {\n                fileName: \"/Users/rayaankhan/repos/Personal-Website/components/PhotoGallery.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\",\n                children: photos.map((photo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overflow-hidden rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: photo,\n                            alt: \"Photo \".concat(index + 1),\n                            className: \"w-full h-auto transform hover:scale-110 transition duration-500 ease-in-out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/rayaankhan/repos/Personal-Website/components/PhotoGallery.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/rayaankhan/repos/Personal-Website/components/PhotoGallery.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/rayaankhan/repos/Personal-Website/components/PhotoGallery.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rayaankhan/repos/Personal-Website/components/PhotoGallery.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PhotoGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoGallery);\nvar _c;\n$RefreshReg$(_c, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob3RvR2FsbGVyeS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4QkFBOEI7O0FBRUo7QUFFMUIsTUFBTUMsU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxlQUF5QixJQUFNO0lBQ25DLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXlDOzs7Ozs7MEJBQ3ZELDhEQUFDRTtnQkFBR0YsV0FBVTswQkFBcUQ7Ozs7OzswQkFDbkUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaSCxPQUFPTSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDTjt3QkFBZ0JDLFdBQVU7a0NBQ3pCLDRFQUFDTTs0QkFBSUMsS0FBS0g7NEJBQU9JLEtBQUssU0FBbUIsT0FBVkgsUUFBUTs0QkFBS0wsV0FBVTs7Ozs7O3VCQUQ5Q0s7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7S0FkTVA7QUFnQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG90b0dhbGxlcnkudHN4PzczNGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9QaG90b0dhbGxlcnkudHN4XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHBob3RvcyA9IFsgIFxuICAnL3Bob3RvZ3JhcGh5L0lNR183NTQ3LkpQRycsXG4gICcvcGhvdG9ncmFwaHkvSU1HXzg2MzAuSlBHJyxcbiAgJy9waG90b2dyYXBoeS9JTUdfODc2OC5KUEcnLFxuICAnL3Bob3RvZ3JhcGh5L0lNR184OTI4LkpQRycsXG5dO1xuXG5jb25zdCBQaG90b0dhbGxlcnk6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxRTFFMUVdIHAtNiBtZDpwLTEwIHJvdW5kZWQtM3hsIHNoYWRvdy14bFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBtYi02XCI+UGhvdG9ncmFwaHk8L2gyPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCBhbmltYXRlZC1ncmFkaWVudC10ZXh0XCI+c29tZSBvZiBteSBmYXZvdXJpdGUgc2hvdHM8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgIHtwaG90b3MubWFwKChwaG90bywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cGhvdG99IGFsdD17YFBob3RvICR7aW5kZXggKyAxfWB9IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwaG90b3MiLCJQaG90b0dhbGxlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImgzIiwibWFwIiwicGhvdG8iLCJpbmRleCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PhotoGallery.tsx\n"));

/***/ })

});