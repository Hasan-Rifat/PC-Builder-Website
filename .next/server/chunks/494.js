"use strict";
exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 3494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layouts_MainLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./src/components/shared/Header.tsx





const Header = ()=>{
    const { data: session } = (0,react_.useSession)();
    const data = [
        {
            id: 1,
            text: "Processor"
        },
        {
            id: 2,
            text: "Motherboard"
        },
        {
            id: 3,
            text: "RAM"
        },
        {
            id: 4,
            text: "Power Supply Unit"
        },
        {
            id: 5,
            text: "Storage Device"
        },
        {
            id: 6,
            text: "Monitor"
        },
        {
            id: 7,
            text: "Others"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w-screen-xl mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "navbar bg-base-100",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            className: "btn btn-ghost normal-case text-xl",
                            children: "NZXT"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "dropdown dropdown-end mr-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "btn bg-white text-black hover:bg-white hover:text-black",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/pc-builder",
                                        className: "uppercase",
                                        children: "PC Builder"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "dropdown dropdown-end mr-4 uppercase",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        tabIndex: 0,
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                children: "categories"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx(bi_.BiSolidDownArrow, {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        tabIndex: 0,
                                        className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                                        children: data.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: `/categories/${item.text.toLowerCase()}`,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: item.text
                                                    })
                                                })
                                            }, item.id))
                                    })
                                ]
                            }),
                            session ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "dropdown dropdown-end",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("label", {
                                        tabIndex: 0,
                                        className: "btn btn-ghost btn-circle avatar",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "w-10 rounded-full",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                src: session?.user?.image || "",
                                                height: 50,
                                                width: 50,
                                                alt: "profile picture"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        tabIndex: 0,
                                        className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    children: [
                                                        "Name: ",
                                                        session?.user?.name
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    onClick: ()=>(0,react_.signOut)(),
                                                    children: "Logout"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "dropdown dropdown-end",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "uppercase",
                                    onClick: ()=>(0,react_.signIn)("github", {
                                            callbackUrl: `${"https://pc-builder-website-omega.vercel.app"}`
                                        }),
                                    children: "Login"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const shared_Header = (Header);

;// CONCATENATED MODULE: ./src/components/shared/Footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "bg-neutral text-neutral-content ",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w-screen-xl mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "footer items-center p-4 ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "items-center grid-flow-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                width: "36",
                                height: "36",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                className: "fill-current",
                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "Copyright \xa9 2023 - All right reserved"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    className: "fill-current",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    className: "fill-current",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    className: "fill-current",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const shared_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/layouts/MainLayout.tsx



const MainLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(shared_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(shared_Footer, {})
        ]
    });
};
/* harmony default export */ const layouts_MainLayout = (MainLayout);


/***/ })

};
;