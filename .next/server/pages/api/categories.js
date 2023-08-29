"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fcategories_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcategories_2Findex_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/categories/index.ts
var categories_namespaceObject = {};
__webpack_require__.r(categories_namespaceObject);
__webpack_require__.d(categories_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./src/libs/connectBD.ts
var connectBD = __webpack_require__(129);
// EXTERNAL MODULE: ./src/model/category.model.ts
var category_model = __webpack_require__(6517);
;// CONCATENATED MODULE: ./src/pages/api/categories/index.ts


async function handler(req, res) {
    await (0,connectBD/* default */.Z)();
    if (req.method === "GET") {
        const result = await category_model/* default */.Z.find();
        res.status(200).json({
            success: true,
            message: "Get all categories successfully",
            data: result
        });
    }
    res.status(404).json({
        success: false,
        message: "Method not allowed",
        data: null
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcategories&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fcategories%2Findex.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fcategories_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcategories_2Findex_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(categories_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(categories_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/categories",
        pathname: "/api/categories",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: categories_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ }),

/***/ 129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

async function connectDB() {
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://hasanrifat:hasanrifat@cluster0.jsj04pb.mongodb.net/Pc-Builder?retryWrites=true&w=majority");
        console.log(`Database is connected successfully`);
    } catch (err) {
        console.error("Failed to connect database", err);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


/***/ }),

/***/ 6517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

// Define the schema
const categorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: String
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Categories || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Categories", categorySchema));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(3929)));
module.exports = __webpack_exports__;

})();