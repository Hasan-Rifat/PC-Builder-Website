"use strict";
(() => {
var exports = {};
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 7817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpc_builder_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpc_builder_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/pc-builder/index.tsx
var pc_builder_namespaceObject = {};
__webpack_require__.r(pc_builder_namespaceObject);
__webpack_require__.d(pc_builder_namespaceObject, {
  "default": () => (pc_builder),
  getServerSideProps: () => (getServerSideProps)
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
// EXTERNAL MODULE: ./src/components/layouts/MainLayout.tsx + 2 modules
var MainLayout = __webpack_require__(3494);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./Redux/hooks.ts
var hooks = __webpack_require__(3383);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/UI/Products/ShowPcBuilderPD.tsx



const ShowPcBuilderPD = ({ data: { id, name, price, image } })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            " ",
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap gap-5 items-center justify-around flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "max-w-[200px] h-[200px]",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: "ecommerce",
                            className: "p-5",
                            src: image,
                            width: 200,
                            height: 200,
                            layout: "responsive"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                className: "text-black text-lg title-font font-medium mb-1",
                                children: [
                                    "Name: ",
                                    name
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "flex ",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "flex  py-2 ",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-2 items-center ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-black",
                                                children: " Price:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "py-2 rounded-3xl  px-10 bg-primary title-font font-medium text-xl text-white badge badge-primary",
                                                children: [
                                                    "$",
                                                    price
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Products_ShowPcBuilderPD = (ShowPcBuilderPD);

;// CONCATENATED MODULE: ./src/pages/pc-builder/index.tsx





const PcBuilder = ({ data })=>{
    const { monitor, motherboard, other, powerSupplyUnit, processor, ram, storageDevice, total, count } = (0,hooks/* useAppSelector */.C)((state)=>state.pcBuilder);
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "bg-[#111827]",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w-screen-xl mx-auto py-20",
            children: data && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1  gap-6 w-full",
                children: [
                    data?.data?.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex  justify-between items-center ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "text-black",
                                            children: [
                                                " ",
                                                item.name
                                            ]
                                        }),
                                        item.name === "Monitor" && monitor.name && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                                data: monitor
                                            })
                                        }),
                                        item.name === "Motherboard" && motherboard.name && /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                            data: motherboard
                                        }),
                                        item.name === "Others" && other.name && /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                            data: other
                                        }),
                                        item.name === "Power Supply Unit" && powerSupplyUnit.name && /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                            data: powerSupplyUnit
                                        }),
                                        item.name === "Processor" && processor.name && /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                            data: processor
                                        }),
                                        item.name === "RAM" && ram.name && /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                            data: ram
                                        }),
                                        item.name === "Storage Device" && storageDevice.name && /*#__PURE__*/ jsx_runtime.jsx(Products_ShowPcBuilderPD, {
                                            data: storageDevice
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "border-indigo-700 border px-10 py-1 rounded-lg",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: `/pc-builder/${item.name}`,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: " text-gray-800 text-sm font-semibold line-clamp-1 text-left",
                                                children: "choose"
                                            })
                                        })
                                    })
                                })
                            ]
                        }, item._id)),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-5 items-center ",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "leading-0  ",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "text-gray-800 px-6 rounded-2xl bg-success text-xl py-1",
                                    children: [
                                        "total price : $",
                                        total
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    disabled: count < 7,
                                    className: `btn bg-white text-gray-800`,
                                    children: "Complete Build"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
PcBuilder.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(MainLayout/* default */.Z, {
        children: page
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    try {
        if (true) {
            return {
                props: {
                    data: []
                }
            };
        }
        const res = await fetch(`${"https://pc-builder-website-kappa.vercel.app/"}/api/categories`);
        const data = await res.json();
        // Pass data to the page via props
        return {
            props: {
                data: data
            }
        };
    } catch (error) {
        return {
            props: {
                data: []
            }
        };
    }
}
/* harmony default export */ const pc_builder = (PcBuilder);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fpc-builder&preferredRegion=&absolutePagePath=private-next-pages%2Fpc-builder%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fpc_builder_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(pc_builder_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2Fpc_builder_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2Findex_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pc_builder_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/pc-builder",
        pathname: "/pc-builder",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: pc_builder_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,636,61,532,494], () => (__webpack_exec__(7817)));
module.exports = __webpack_exports__;

})();