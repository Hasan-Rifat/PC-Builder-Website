"use strict";
(() => {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 7132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategories_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategories_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategories_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategories_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fcategories_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategories_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/categories/[slug].tsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (_slug_),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.tsx
var _document = __webpack_require__(3104);
// EXTERNAL MODULE: ./src/pages/_app.tsx + 1 modules
var _app = __webpack_require__(6806);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/UI/Products/Product.tsx
var Product = __webpack_require__(8833);
// EXTERNAL MODULE: ./src/components/layouts/MainLayout.tsx + 2 modules
var MainLayout = __webpack_require__(3494);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/categories/[slug].tsx




const Categories = ({ data, slug })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "bg-[#111827]",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "text-3xl text-center text-white py-10",
                children: slug
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "max-w-screen-xl mx-auto",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid grid-cols-3 gap-10  pb-20",
                    children: data?.data?.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(Product/* default */.Z, {
                            product: product
                        }, product._id))
                })
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    try {
        const res = await fetch(`${"https://pc-builder-website-server.vercel.app"}/api/products}`);
        const data = await res.json();
        if (!Array.isArray(data)) {
            // Check if data is not an array
            throw new Error("Data is not an array");
        }
        const paths = data.map((category)=>({
                params: {
                    slug: category._id.toString()
                }
            }));
        return {
            paths,
            fallback: false
        };
    } catch (error) {
        console.error("Error fetching paths:", error);
        return {
            paths: [],
            fallback: false
        };
    }
};
const getStaticProps = async (context)=>{
    try {
        const { params } = context;
        const res = await fetch(`${"https://pc-builder-website-server.vercel.app"}/api/products?category=${params.slug}` // Use 'id' as the parameter
        );
        const data = await res.json();
        return {
            props: {
                data: data,
                slug: params.slug
            }
        };
    } catch (error) {
        console.error("Error fetching props:", error);
        return {
            props: {
                data: [],
                slug: ""
            }
        };
    }
};
Categories.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(MainLayout/* default */.Z, {
        children: page
    });
};
/* harmony default export */ const _slug_ = (Categories); // Export the component

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fcategories%2F%5Bslug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fcategories%2F%5Bslug%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fcategories_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategories_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fcategories_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategories_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fcategories_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fcategories_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/categories/[slug]",
        pathname: "/categories/[slug]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _slug_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,636,61,532,494,833], () => (__webpack_exec__(7132)));
module.exports = __webpack_exports__;

})();