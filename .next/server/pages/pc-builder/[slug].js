"use strict";
(() => {
var exports = {};
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 4474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpc_builder_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fpc_builder_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps),
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

// NAMESPACE OBJECT: ./src/pages/pc-builder/[slug].tsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (_slug_),
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./Redux/hooks.ts
var hooks = __webpack_require__(3383);
// EXTERNAL MODULE: ./Redux/features/pcBuilder/pcBuilderSlice.ts
var pcBuilderSlice = __webpack_require__(3324);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/UI/Products/SelectProduct.tsx





const SelectProduct = ({ product, slug })=>{
    const router = (0,router_.useRouter)();
    const { _id, averageRating, category, description, image, price, productName, status, individualRating, keyFeatures, reviews } = product;
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleAddToCart = (product, slug)=>{
        const id = product._id;
        const name = product.productName;
        const price = product.price;
        const image = product.image;
        switch(slug){
            case "Processor":
                dispatch((0,pcBuilderSlice/* setProcessor */.Is)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            case "Motherboard":
                dispatch((0,pcBuilderSlice/* setMotherboard */.N0)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            case "RAM":
                dispatch((0,pcBuilderSlice/* setRam */.De)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            case "Power Supply Unit":
                dispatch((0,pcBuilderSlice/* setPowerSupplyUnit */.g0)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            case "Storage Device":
                dispatch((0,pcBuilderSlice/* setStorageDevice */.P_)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            case "Monitor":
                dispatch((0,pcBuilderSlice/* setMonitor */.LL)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            case "Others":
                dispatch((0,pcBuilderSlice/* setOther */.fr)({
                    id,
                    name,
                    price,
                    image
                }));
                dispatch((0,pcBuilderSlice/* setTotal */.o1)(price));
                dispatch((0,pcBuilderSlice/* setCount */.kM)());
                break;
            default:
                break;
        }
        router.push("/pc-builder");
    };
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "text-gray-600 body-font overflow-hidden  shadow-[0px_4px_80px_rgba(0,0,0,0.4)] rounded-xl",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                className: "text-white text-lg title-font font-medium mb-1",
                                children: productName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex ",
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
                                                className: "py-2 rounded-3xl  px-10 bg-primary title-font font-medium text-xl text-white badge badge-primary",
                                                children: [
                                                    "$",
                                                    price
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mb-2 text-white",
                                children: keyFeatures.map((keyFeature, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-end gap-5 ",
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
                                className: "flex items-end gap-2  text-white",
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
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: ()=>handleAddToCart(product, slug),
                            className: "bg-indigo-700 text-white px-5 py-2 rounded-lg",
                            children: "Add"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Products_SelectProduct = (SelectProduct);

// EXTERNAL MODULE: ./src/components/layouts/MainLayout.tsx + 2 modules
var MainLayout = __webpack_require__(3494);
;// CONCATENATED MODULE: ./src/pages/pc-builder/[slug].tsx



const PcBuilderItems = ({ data, slug })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w-screen-xl mx-auto",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid grid-cols-1 gap-5 mt-10  pb-20",
                children: data?.data?.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(Products_SelectProduct, {
                        slug: slug,
                        product: product
                    }, product._id))
            })
        })
    });
};
PcBuilderItems.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime.jsx(MainLayout/* default */.Z, {
        children: page
    });
};
async function getServerSideProps(context) {
    /*  if (typeof window === "undefined") {
    return { props: { data: [] } };
  } */ // Fetch data from external API
    try {
        const { slug } = context.params;
        const res = await fetch(`${"https://pc-builder-website-server.vercel.app"}/api/products?category=${slug}`);
        const data = await res.json();
        // Pass data to the page via props
        return {
            props: {
                data: data,
                slug
            }
        };
    } catch (error) {
        return {
            props: {
                data: [],
                slug: ""
            }
        };
    }
}
/* harmony default export */ const _slug_ = (PcBuilderItems);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fpc-builder%2F%5Bslug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fpc-builder%2F%5Bslug%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fpc_builder_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths");
const next_route_loaderkind_PAGES_page_2Fpc_builder_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fpc_builder_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps");
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
        page: "/pc-builder/[slug]",
        pathname: "/pc-builder/[slug]",
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
var __webpack_exports__ = __webpack_require__.X(0, [769,636,61,532,494], () => (__webpack_exec__(4474)));
module.exports = __webpack_exports__;

})();