"use strict";
(() => {
var exports = {};
exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 6024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproduct_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_details_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproduct_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_details_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fproduct_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_details_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/product-details/[id].tsx
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (_id_),
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/UI/Products/ProductDetails.tsx



const ProductDetails = ({ data })=>{
    const { _id, averageRating, category, description, image, price, productName, status, individualRating, keyFeatures, reviews } = data;
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "text-gray-600 body-font overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "py-24",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 500,
                        height: 500,
                        alt: "ecommerce",
                        className: "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",
                        src: image
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                className: "text-sm title-font text-white tracking-widest  my-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-medium badge badge-accent",
                                        children: "catagories :"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: " ml-3",
                                        children: category
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-white flex gap-5 items-center my-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "font-medium badge badge-primary",
                                        children: "status : "
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "text-lg ",
                                        children: status
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: "text-white text-3xl title-font font-medium mb-1",
                                children: productName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex my-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "flex items-center",
                                        children: [
                                            [
                                                ...Array(averageRating)
                                            ].map((star, i)=>/*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    fill: "currentColor",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    className: "w-4 h-4 text-indigo-500",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                    })
                                                }, i)),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "text-white ml-3",
                                                children: [
                                                    averageRating,
                                                    " Reviews"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                className: "py-1 rounded-3xl  px-10 bg-primary title-font font-medium text-xl text-white",
                                                children: [
                                                    "$",
                                                    price
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "leading-relaxed text-white",
                                children: description
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "my-5 text-white",
                                children: keyFeatures.map((keyFeature, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-end gap-5 mb-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "badge badge-primary",
                                                children: keyFeature.keyName
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: keyFeature.value
                                            })
                                        ]
                                    }))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-end gap-2 mb-4 text-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "badge badge-primary",
                                        children: "total reviews"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "badge badge-accent",
                                        children: reviews
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Products_ProductDetails = (ProductDetails);

// EXTERNAL MODULE: ./src/components/layouts/MainLayout.tsx + 2 modules
var MainLayout = __webpack_require__(3494);
;// CONCATENATED MODULE: ./src/pages/product-details/[id].tsx



const ProductDetailsPage = ({ data, id })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "bg-[#111827]",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w-screen-xl mx-auto px-5",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "",
                children: data && /*#__PURE__*/ jsx_runtime.jsx(Products_ProductDetails, {
                    data: data,
                    id: id
                })
            })
        })
    });
};
const getStaticPaths = async ()=>{
    const res = await fetch(`${"https://pc-builder-website-server.vercel.app"}/api/products`);
    const data = await res.json();
    const paths = data?.data?.map((category)=>({
            params: {
                id: category._id
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    try {
        const { params } = context;
        const res = await fetch(`${"https://pc-builder-website-server.vercel.app"}/api/products/${params.id}` // Use 'id' as the parameter
        );
        const data = await res.json();
        return {
            props: {
                data: data?.data,
                id: params.id
            }
        };
    } catch (error) {
        console.error("Error fetching props:", error);
        return {
            props: {
                data: [],
                id: ""
            }
        };
    }
};
ProductDetailsPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(MainLayout/* default */.Z, {
        children: page
    });
};
/* harmony default export */ const _id_ = (ProductDetailsPage); // Export the component

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fproduct-details%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproduct-details%2F%5Bid%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fproduct_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_details_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fproduct_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_details_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fproduct_details_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproduct_details_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/product-details/[id]",
        pathname: "/product-details/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _id_namespaceObject
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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

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
var __webpack_exports__ = __webpack_require__.X(0, [769,636,61,532,494], () => (__webpack_exec__(6024)));
module.exports = __webpack_exports__;

})();