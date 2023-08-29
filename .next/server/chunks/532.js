exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 3324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   De: () => (/* binding */ setRam),
/* harmony export */   Is: () => (/* binding */ setProcessor),
/* harmony export */   LL: () => (/* binding */ setMonitor),
/* harmony export */   N0: () => (/* binding */ setMotherboard),
/* harmony export */   P_: () => (/* binding */ setStorageDevice),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fr: () => (/* binding */ setOther),
/* harmony export */   g0: () => (/* binding */ setPowerSupplyUnit),
/* harmony export */   kM: () => (/* binding */ setCount),
/* harmony export */   o1: () => (/* binding */ setTotal)
/* harmony export */ });
/* unused harmony export pcBuilderSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    processor: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    ram: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    motherboard: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    storageDevice: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    powerSupplyUnit: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    monitor: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    other: {
        id: "",
        name: "",
        price: 0,
        image: ""
    },
    total: 0,
    count: 0
};
const pcBuilderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "pcBuilder",
    initialState,
    reducers: {
        setProcessor: (state, action)=>{
            state.processor = action.payload;
        },
        setRam: (state, action)=>{
            state.ram = action.payload;
        },
        setMotherboard: (state, action)=>{
            state.motherboard = action.payload;
        },
        setStorageDevice: (state, action)=>{
            state.storageDevice = action.payload;
        },
        setPowerSupplyUnit: (state, action)=>{
            state.powerSupplyUnit = action.payload;
        },
        setMonitor: (state, action)=>{
            state.monitor = action.payload;
        },
        setOther: (state, action)=>{
            state.other = action.payload;
        },
        setTotal: (state, action)=>{
            state.total += action.payload;
        },
        setCount: (state)=>{
            state.count += 1;
        }
    }
});
// Action creators are generated for each case reducer function
const { setProcessor, setRam, setMotherboard, setStorageDevice, setPowerSupplyUnit, setMonitor, setOther, setTotal, setCount } = pcBuilderSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pcBuilderSlice.reducer);


/***/ }),

/***/ 6806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./Redux/features/pcBuilder/pcBuilderSlice.ts
var pcBuilderSlice = __webpack_require__(3324);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./Redux/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: {
        pcBuilder: pcBuilderSlice/* default */.ZP
    }
});

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime.jsx(react_.SessionProvider, {
            session: pageProps.session,
            children: getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }))
        })
    });
}


/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;