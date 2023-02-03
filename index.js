var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_react_helmet_async = require("react-helmet-async");

// app/styles/css/default2.css
var default2_default = "/build/_assets/default2-YLI6EHER.css";

// app/session.server.js
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant")), import_user = require("~/models/user.server");
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await (0, import_user.getUserById)(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/models/js/variable.js
var REACT_APP_CENTER_NAME = "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130", REACT_APP_URL = "https://guriaba.co.kr", REACT_APP_REAL_URL = "https://guriaba.co.kr", REACT_APP_CENTER_TEL = "031-555-5527", REACT_APP_CENTER_FAX = "031-555-5547", REACT_APP_CENTER_CEO = "\uC774\uAC00\uC601", REACT_APP_CENTER_CODE = "768-94-01502", REACT_APP_CENTER_ADR_1 = "\uACBD\uAE30\uB3C4 \uAD6C\uB9AC\uC2DC \uACBD\uCD98\uB85C248\uBC88\uAE38 17 \uC131\uC9C0\uBE4C\uB529 5\uCE35", REACT_APP_CENTER_ADR_2 = "\uACBD\uAE30\uB3C4 \uAD6C\uB9AC\uC2DC \uC218\uD0DD\uB3D9 531-10 \uC131\uC9C0\uBE4C\uB529 5\uCE35", REACT_APP_CENTER_NORMAL_TIME = "10:00 ~ 20:00", REACT_APP_CENTER_SATURDAY_TIME = "10:00 ~ 18:00", REACT_APP_DAUM_MAP_KEY = "fa1dfda488c27108d6f55617f250a38a";

// app/routes/footer/Footer.js
var Footer_exports = {};
__export(Footer_exports, {
  Footer: () => Footer,
  default: () => Footer_default
});
var import_react3 = require("react"), import_react_router_dom = require("react-router-dom"), import_jquery = __toESM(require("jquery")), import_react4 = require("react");

// app/routes/siteMap/SiteMap.js
var SiteMap_exports = {};
__export(SiteMap_exports, {
  default: () => SiteMap_default
});
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Sitemap() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "Sitemap" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "About" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "Contact" })
    ] })
  ] });
}
var SiteMap_default = Sitemap;

// app/routes/footer/Footer.js
var import_react_dom = __toESM(require("react-dom"));

// app/models/js/common.js
var $ = require("jquery"), jQuery = require("jquery");
function smartskin_HomeButtonAdd(title, code) {
  var sm_LogAnalysisCode = code, sm_HomeButtonTitle = encodeURI(sm_HomeButtonTitle), sm_HomePageUri = document.domain, sm_WebRootPathUri = "http://" + document.domain, iconurl = "";
  sm_HomePageUri.indexOf("smartskin") >= 0 ? sm_HomePageUri = "http://" + document.domain + "/" : sm_HomePageUri.indexOf(".") >= 0 ? (alert(sm_HomePageUri), sm_HomePageUri = "http://" + document.domain + "/") : sm_HomePageUri = "http://" + document.domain, iconurl = "http://" + document.domain + "/board/image/icon_mobile_screen.png";
  var sm_HomeButtonIconUri = sm_WebRootPathUri + $('link[rel="apple-touch-icon-precomposed"]').attr("href"), sm_naver_customUrlScheme = "intent://addshortcut?url=" + sm_HomePageUri + "%3F" + sm_LogAnalysisCode + "&icon=" + iconurl + "&title=" + sm_HomeButtonTitle + "&oq=" + sm_HomeButtonTitle + "&serviceCode=nstore&version=7#Intent;scheme=naversearchapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.search;end", sm_UserAgent = navigator.userAgent.toLowerCase(), sm_BlockDevice1 = sm_UserAgent.indexOf("iphone"), sm_BlockDevice2 = sm_UserAgent.indexOf("ipad"), sm_BlockDevice = sm_BlockDevice1 + sm_BlockDevice2;
  sm_BlockDevice == -2 ? window.open(sm_naver_customUrlScheme) : alert("\uC544\uC774\uD3F0, \uC544\uC774\uD328\uB4DC \uACC4\uC5F4\uC740 \uC9C1\uC811 \uD648\uBC84\uD2BC\uCD94\uAC00\uB97C \uC0AC\uC6A9\uD558\uC154\uC57C\uD569\uB2C8\uB2E4.");
}

// app/routes/footer/Footer.js
var import_jsx_runtime3 = require("react/jsx-runtime");
function Footer() {
  let newWindow = () => {
    window.open("", "", "width=640,height=300"), import_react_dom.default.render(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SiteMap_default, {}), document.getElementById("noEmail"));
  }, githubMin = "https://kucnea.github.io/", goToTop = () => {
    window.pageYOffset = 0, document.getElementById("btn_top").style.display = "block";
  }, introduceOpen = () => {
    document.getElementById("introLi").className === "sitemap_1li sitemap01 first show" ? (document.getElementById("introLi").className = "sitemap_1li sitemap01 first hide", document.getElementById("sitemap_2dul").style.display = "none") : (document.getElementById("introLi").className = "sitemap_1li sitemap01 first show", document.getElementById("sitemap_2dul").style.display = "block");
  }, communityOpen = () => {
    document.getElementById("commuLi").className === "sitemap_1li sitemap04 show" ? (document.getElementById("commuLi").className = "sitemap_1li sitemap04 hide", document.getElementById("sitemap_2dulc").style.display = "none") : (document.getElementById("commuLi").className = "sitemap_1li sitemap04 show", document.getElementById("sitemap_2dulc").style.display = "block");
  }, closeSiteMap = (event) => {
    (event.target.id === "sitemap_mobile_bg_t" || event.target.id === "sitemap_close_i") && ((0, import_jquery.default)(".sitemap_mobile").animate({ marginLeft: "0" }, 200), (0, import_jquery.default)(".sitemap_mobile2").animate({ marginLeft: "0" }, 200), (0, import_jquery.default)(".sitemap_close").slideDown("fast"), (0, import_jquery.default)(".sitemap_close").css("display", "none"), (0, import_jquery.default)(".sitemap_mobile_bg").css("display", "none"));
  }, forceCloseSiteMap = () => {
    (0, import_jquery.default)(".sitemap_mobile").animate({ marginLeft: "0" }, 200), (0, import_jquery.default)(".sitemap_mobile2").animate({ marginLeft: "0" }, 200), (0, import_jquery.default)(".sitemap_close").slideDown("fast"), (0, import_jquery.default)(".sitemap_close").css("display", "none"), (0, import_jquery.default)(".sitemap_mobile_bg").css("display", "none");
  };
  return (0, import_react4.useEffect)(() => {
    (0, import_jquery.default)(function() {
      var menupos = (0, import_jquery.default)("#header").offset().top;
      (0, import_jquery.default)(window).scroll(function() {
        (0, import_jquery.default)(window).scrollTop() >= menupos ? ((0, import_jquery.default)("#btn_top").css("display", "block"), (0, import_jquery.default)("#btn_top").fadeIn(300)) : ((0, import_jquery.default)("#btn_top").css("display", "none"), (0, import_jquery.default)("#btn_top").fadeOut(300));
      });
    });
  }, []), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "fotter_wrap", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "fotter_link", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mobilev" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "address_quick", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/center", children: "\uCE58\uB8CC\uC2E4\uC18C\uAC1C" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/comming", children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_router_dom.Link,
            {
              onClick: () => newWindow,
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "span",
                {
                  title: "\uBCF8 \uC6F9\uC0AC\uC774\uD2B8\uB294 \uAC8C\uC2DC\uB41C \uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uC804\uC790\uC6B0\uD3B8 \uC218\uC9D1 \uD504\uB85C\uADF8\uB7A8\uC774\uB098 \uADF8 \uBC16\uC758 \uAE30\uC220\uC801 \uC7A5\uCE58\uB97C \uC774\uC6A9\uD558\uC5EC \uBB34\uB2E8 \uC218\uC9D1\uB418\uB294 \uAC83\uC744 \uAC70\uBD80\uD569\uB2C8\uB2E4.",
                  alt: "\uC774\uBA54\uC77C\uC8FC\uC18C \uBB34\uB2E8\uC218\uC9D1 \uAC70\uBD80",
                  children: "\uC774\uBA54\uC77C\uC8FC\uC18C\uBB34\uB2E8\uC218\uC9D1\uAC70\uBD80"
                }
              )
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "fotter", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "fotter_in", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "fotter_logo", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "img",
          {
            alt: REACT_APP_CENTER_NAME,
            src: REACT_APP_URL + "/image/toplogo.png"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "fotter_copy", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("address", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("b", { children: REACT_APP_CENTER_NAME }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
              "\uC8FC\uC18C : ",
              REACT_APP_CENTER_ADR_1,
              " | \uB300\uD45C : ",
              REACT_APP_CENTER_CEO
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
              "\uC804\uD654 : ",
              REACT_APP_CENTER_TEL,
              " | \uD329\uC2A4 : ",
              REACT_APP_CENTER_FAX,
              " | \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 :",
              REACT_APP_CENTER_CODE
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "COPYRIGHT \xA9 2023 ALL RIGHTS RESERVED BY \uC774\uBBFC\uD638." }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { marginLeft: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react_router_dom.Link,
            {
              title: "\uC774\uBBFC\uD638",
              to: () => {
                window.open(githubMin);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  alt: "\uC774\uBBFC\uD638",
                  src: REACT_APP_URL + "/image/githubIcon.png",
                  onClick: () => {
                    window.open(githubMin);
                  },
                  style: { width: "54px", height: "15px" }
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "fotter_sns", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "img",
          {
            alt: REACT_APP_CENTER_NAME,
            src: REACT_APP_URL + "/image/toplogo.png"
          }
        ) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "btn_top", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { onClick: () => goToTop(), className: "anchorLink", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { alt: "Go to top", src: REACT_APP_URL + "/image/btn_top.png" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { id: "sitemap_mobile_bg_t", className: "sitemap_mobile_bg", onClick: (event) => closeSiteMap(event) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "sitemap_mobile", id: "sitemap", style: { marginRight: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sitemap_in", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "sitemap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h2", { className: "sound_only", id: "sitemap_title", children: [
          REACT_APP_CENTER_NAME,
          " \uC0AC\uC774\uD2B8\uB9F5"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { className: "sitemap_1li tit hide", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "img",
              {
                alt: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                src: REACT_APP_URL + "/image/toplogo_w.png"
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { id: "introLi", className: "sitemap_1li sitemap01 first hide", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { className: "sitemap_1da", onClick: () => introduceOpen(), children: "\uCE58\uB8CC\uC2E4 \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { id: "introOpen", className: "sitemap_2dli_open", onClick: () => introduceOpen(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sound_only", children: "\uCE58\uB8CC\uC2E4\uC18C\uAC1C \uD558\uC704\uBA54\uB274 \uC5F4\uAE30" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "ul",
              {
                className: "sitemap_2dul",
                id: "sitemap_2dul",
                style: { display: "none" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/center", onClick: () => forceCloseSiteMap(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uCE58\uB8CC\uC2E4 \uC18C\uAC1C" }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/teacher/teacher", onClick: () => forceCloseSiteMap(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/centermore", onClick: () => forceCloseSiteMap(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/comming", onClick: () => forceCloseSiteMap(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/boucher/boucherbaldal", onClick: () => forceCloseSiteMap(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uBC14\uC6B0\uCC98 \uC548\uB0B4" }) }) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "sitemap_1li sitemap02 hide", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/programs/detail", className: "sitemap_1da", onClick: () => forceCloseSiteMap(), children: "\uCE58\uB8CC/\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "sitemap_1li sitemap02 hide", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/introduce/boucher/boucherbaldal", className: "sitemap_1da", onClick: () => forceCloseSiteMap(), children: "\uBC14\uC6B0\uCC98 \uC548\uB0B4" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { className: "sitemap_1li sitemap03 hide", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/consult/askanswer/detail", className: "sitemap_1da", onClick: () => forceCloseSiteMap(), children: "\uC0C1\uB2F4/\uBB38\uC758" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { id: "commuLi", className: "sitemap_1li sitemap04 hide", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { className: "sitemap_1da", onClick: () => communityOpen(), children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { className: "sitemap_2dli_open", onClick: () => communityOpen(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sound_only", children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uD558\uC704\uBA54\uB274 \uC5F4\uAE30" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "ul",
              {
                className: "sitemap_2dul",
                id: "sitemap_2dulc",
                style: { display: "none" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/community/notice/board", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/community/usualquestion", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" }) }) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "telnmail", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          import_react_router_dom.Link,
          {
            style: {
              background: "rgb(250, 250, 250)",
              padding: "15px 10px",
              borderRadius: 5,
              border: "1px solid rgb(239, 239, 239)",
              borderImage: "none",
              color: "rgb(51, 51, 51)",
              fontWeight: "bold"
            },
            href: "#",
            onClick: () => window.location.href = "tel:" + REACT_APP_CENTER_TEL,
            children: [
              "\uB300\uD45C\uC804\uD654 : ",
              REACT_APP_CENTER_TEL
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mobilev_side", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "a",
          {
            style: {
              background: "rgb(139, 186, 31)",
              padding: "15px 14px",
              borderRadius: 5,
              border: "1px solid rgb(139, 186, 31)",
              borderImage: "none",
              color: "rgb(255, 255, 255)",
              fontWeight: "bold"
            },
            href: () => smartskin_HomeButtonAdd(REACT_APP_CENTER_NAME, "cm_id=bookmark"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  style: { width: "12%" },
                  alt: "\uD648 \uD654\uBA74\uC5D0 \uBC14\uB85C\uAC00\uAE30 \uCD94\uAC00",
                  src: REACT_APP_URL + "/image/icon_mobile_screen.png"
                }
              ),
              " ",
              "\uD648 \uD654\uBA74 \uBC14\uB85C\uAC00\uAE30 \uCD94\uAC00",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src: REACT_APP_URL + "/image/btn_desktop_down.png" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "go_admin", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/board/admin/adminpage", style: { color: "rgb(112, 173, 221)" }, children: "\uAD00\uB9AC\uC790" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { className: "tnb", style: { marginTop: 30 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { id: "goToHome", to: "/", onClick: () => forceCloseSiteMap(), children: "\uD648" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { to: "/", onClick: () => forceCloseSiteMap(), children: "\uB85C\uADF8\uC778" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "div",
        {
          className: "sitemap_close",
          id: "sitemap_close",
          style: { display: "none" },
          onClick: (event) => closeSiteMap(event),
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "img",
            {
              id: "sitemap_close_i",
              onClick: (event) => closeSiteMap(event),
              alt: "\uC0AC\uC774\uD2B8\uB9F5 \uB2EB\uAE30",
              src: REACT_APP_URL + "/image/gnbclose.png"
            }
          ) })
        }
      )
    ] }) })
  ] });
}
var Footer_default = Footer;

// app/routes/header/Header.js
var Header_exports = {};
__export(Header_exports, {
  Header: () => Header,
  default: () => Header_default
});
var import_react5 = require("react"), import_react_dom2 = require("react-dom"), import_react_router_dom2 = require("react-router-dom"), import_jquery2 = __toESM(require("jquery")), import_react6 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Header() {
  let newWindow = () => ((0, import_jquery2.default)(".sitemap_mobile").animate({ marginLeft: "260" }, 200), (0, import_jquery2.default)(".sitemap_mobile2").animate({ marginLeft: "260" }, 200), (0, import_jquery2.default)(".sitemap_close").slideDown("fast"), (0, import_jquery2.default)(".sitemap_close").css("display", "block"), (0, import_jquery2.default)(".sitemap_mobile_bg").css("display", "block"), document.getElementById("sitemap_title").tabIndex = -1, document.getElementById("sitemap_title").focus(), !1), addFavorite = (0, import_react5.useCallback)(() => {
    var url = REACT_APP_REAL_URL, title = REACT_APP_CENTER_NAME;
    if (document.all)
      window.external.AddFavorite(url, title);
    else if (window.chrome) {
      var message = title + "\uB97C \uC990\uACA8\uCC3E\uAE30\uC5D0 \uCD94\uAC00\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?";
      window.prompt(message, url);
    } else
      window.sidebar && window.sidebar.addPanel(title, url, "");
  }, []), [naviNum, setNaviNum] = (0, import_react6.useState)(0), menuNavi = (setNum) => {
    setNum !== 0 && setNaviNum(setNum), document.getElementById("menu" + setNum).className = "gnb1d gnb0" + setNum + " first active", document.getElementById("menusub" + setNum).style = "display:block;";
  }, menuNaviOut = (setNum) => {
    setNum !== 0 && setNaviNum(0), document.getElementById("menu" + setNum).className = "gnb1d gnb0" + setNum, document.getElementById("menusub" + setNum).style = "display:none;";
  };
  return (0, import_react6.useEffect)(() => {
    (0, import_jquery2.default)(function() {
      var menupos = (0, import_jquery2.default)("#header").offset().top;
      (0, import_jquery2.default)(window).scroll(function() {
        (0, import_jquery2.default)(window).scrollTop() >= menupos ? ((0, import_jquery2.default)("#header").css("position", "fixed"), (0, import_jquery2.default)("#header").css("top", "0px"), (0, import_jquery2.default)("#header #hd").css("height", "60px"), (0, import_jquery2.default)("#header #logo").css("top", "0px"), (0, import_jquery2.default)("#header #logo img").css("height", "60px"), (0, import_jquery2.default)("#header .pcv").css("display", "none"), (0, import_jquery2.default)("#header .pcv2").css("margin-top", "10px"), (0, import_jquery2.default)("#header .gnb").css("display", "block"), (0, import_jquery2.default)("#header .gnb").css("margin-top", "-28px"), (0, import_jquery2.default)("#header #menuopen .menuopen").css("display", "block")) : ((0, import_jquery2.default)("#header").css("position", "absolute"), (0, import_jquery2.default)("#header").css("top", "0px"), (0, import_jquery2.default)("#header #hd").css("height", "105px"), (0, import_jquery2.default)("#header #logo").css("top", "35px"), (0, import_jquery2.default)("#header #logo img").css("height", "60px"), (0, import_jquery2.default)("#header .pcv").css("display", "block"), (0, import_jquery2.default)("#header .pcv2").css("display", "block"), (0, import_jquery2.default)("#header .pcv2").css("margin-top", "54px"), (0, import_jquery2.default)("#header .gnb").css("display", "block"), (0, import_jquery2.default)("#header .gnb").css("margin-top", "-28px"), (0, import_jquery2.default)("#header #menuopen .menuopen").css("display", "none"));
      });
    });
  }, []), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "header", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { id: "hd", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { id: "hd_h1", children: REACT_APP_CENTER_NAME }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { id: "hd_wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { id: "tnb", className: "pcv", style: { marginTop: "0", right: "5px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/", children: "HOME" }),
          " |",
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_router_dom2.Link,
            {
              title: "\uC990\uACA8\uCC3E\uAE30 \uCD94\uAC00",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { href: "#", onClick: () => addFavorite(), children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { color: "#f3c71d" }, children: "\u2605" }),
                " \uC990\uACA8\uCC3E\uAE30"
              ] })
            }
          ),
          "\u3163"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/admin/adminpage", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("b", { children: "\uAD00\uB9AC\uC790" }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { id: "gnb_wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src: REACT_APP_URL + "/image/toplogo.png",
            alt: REACT_APP_CENTER_NAME
          }
        ) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { id: "GNB", className: "pcv2", style: { marginTop: 28 }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { className: "gnb", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { id: "menu1", className: "gnb1d gnb01 first", onMouseOver: () => menuNavi(1), onMouseOut: () => menuNaviOut(1), children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/center", className: "gnb1d", children: "\uCE58\uB8CC\uC2E4 \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "menusub1", className: "submenu menu01", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uCE58\uB8CC\uC2E4 \uC18C\uAC1C" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/teacher/teacher", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/centermore", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/comming", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/boucher/boucherbaldal", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }) }) })
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { id: "menu2", className: "gnb1d gnb02", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/programs/detail", className: "gnb1d", onMouseOver: () => menuNavi(2), onMouseOut: () => menuNaviOut(2), children: "\uCE58\uB8CC/\uAC80\uC0AC\uD504\uB85C\uADF8\uB7A8" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "menusub2", className: "submenu menu02", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/programs/psytest/detail", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }) })
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { id: "menu3", className: "gnb1d gnb03", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/consult/askanswer/board", className: "gnb1d", onMouseOver: () => menuNavi(3), onMouseOut: () => menuNaviOut(3), children: "\uC0C1\uB2F4/\uBB38\uC758" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "menusub3", className: "submenu menu03", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/consult/askanswer/board", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uC0C1\uB2F4/\uBB38\uC758" }) }) }) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("li", { id: "menu4", className: "gnb1d gnb04", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/community/notice/board", className: "gnb1d", onMouseOver: () => menuNavi(4), onMouseOut: () => menuNaviOut(4), children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "menusub4", className: "submenu menu04", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/community/notice/board", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/community/usualquestion", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" }) }) })
            ] }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "menuopen", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react_router_dom2.Link,
        {
          onClick: () => newWindow(),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "img",
            {
              src: REACT_APP_URL + "/image/sitemap_gnbopen.gif",
              alt: "\uC0AC\uC774\uD2B8\uB9F5 \uC5F4\uAE30"
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "mapopen", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { to: "/board/introduce/comming", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "img",
        {
          src: REACT_APP_URL + "/image/mapopen.gif",
          alt: "\uC624\uC2DC\uB294\uAE38"
        }
      ) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { id: "callopen", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom2.Link, { href: "#", onClick: () => window.location.href = "tel:" + REACT_APP_CENTER_TEL, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: REACT_APP_URL + "/image/callopen.gif", alt: "\uC804\uD654" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "clb" })
    ] })
  ] }) });
}
var Header_default = Header;

// app/routes/header/BranchPcMobile.js
var BranchPcMobile_exports = {};
__export(BranchPcMobile_exports, {
  BranchPcMobile: () => BranchPcMobile,
  default: () => BranchPcMobile_default
});
var import_react7 = require("react"), import_react_dom3 = require("react-dom"), import_react_router_dom3 = require("react-router-dom"), import_react8 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function BranchPcMobile() {
  let [isMobile, setIsMobile] = (0, import_react8.useState)(!1);
  (0, import_react8.useEffect)(() => {
    let mediaQuery = window.matchMedia("(max-width: 979px)");
    setIsMobile(mediaQuery.matches);
    let handleMediaChange2 = (e) => setIsMobile(e.matches);
    if (mediaQuery.addListener(handleMediaChange2), document.getElementById("cssDevice")) {
      var link = document.getElementById("cssDevice");
      isMobile ? link.href = "/styles/css/mobile.css" : link.href = "/styles/css/pc.css";
    } else {
      var link = document.createElement("link");
      link.id = "cssDevice", link.rel = "stylesheet", link.type = "text/css", isMobile ? link.href = "/styles/css/mobile.css" : link.href = "/styles/css/pc.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    if (!document.getElementById("style")) {
      var link = document.createElement("link");
      link.id = "style", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/style.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    if (!document.getElementById("style2")) {
      var link = document.createElement("link");
      link.id = "style2", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/style2.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    if (!document.getElementById("m_bdr")) {
      var link = document.createElement("link");
      link.id = "m_bdr", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/m_bdr.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    if (!document.getElementById("default")) {
      var link = document.createElement("link");
      link.id = "default", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/default.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    return () => mediaQuery.removeListener(handleMediaChange2);
  }, [isMobile]);
  let handleMediaChange = (mediaQuery) => {
    setIsMobile(mediaQuery.matches);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, {});
}
var BranchPcMobile_default = BranchPcMobile;

// app/root.jsx
var import_jsx_runtime6 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: default2_default }
], meta = () => ({
  charset: "utf-8",
  title: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
  viewport: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
  imageToolbar: "no",
  XUACompatible: "IE=10,chrome=1",
  keywords: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
  keywords: "\uAD6C\uB9AC\uC544\uB3D9\uC0C1\uB2F4 \uAD6C\uB9AC\uC5B8\uC5B4\uCE58\uB8CC \uAD6C\uB9AC\uB180\uC774\uCE58\uB8CC \uAD6C\uB9AC\uBBF8\uC220\uCE58\uB8CC \uAD6C\uB9ACaba \uAD6C\uB9ACbcba \uAD6C\uB9ACqba \uAD6C\uB9ACesdm \uAD6C\uB9AC\uC778\uC9C0 \uAD6C\uB9AC\uC778\uC9C0\uD559\uC2B5 \uAD6C\uB9AC\uD559\uC2B5\uCE58\uB8CC \uAD6C\uB9AC\uC870\uAE30\uAD50\uC2E4 \uAD6C\uB9AC\uC5B8\uC5B4 \uAD6C\uB9AC\uCCAD\uC18C\uB144\uC0C1\uB2F4 \uAD6C\uB9AC\uC131\uC778\uC0C1\uB2F4 \uAD6C\uB9AC\uC9C0\uB2A5\uAC80\uC0AC \uAD6C\uB9AC\uC131\uACA9\uAC80\uC0AC \uAD6C\uB9AC\uD480\uBC30\uD130\uB9AC \uAD6C\uB9AC\uAE30\uC9C8\uAC80\uC0AC \uAD6C\uB9AC\uBC1C\uB2EC\uAC80\uC0AC \uAD6C\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uAD6C\uB9AC\uBC1C\uB2EC\uC13C\uD130 \uAD6C\uB9AC\uC544\uB3D9\uC0C1\uB2F4\uC13C\uD130 \uAD6C\uB9AC\uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130 (\uAD6C\uB9AC/\uB0A8\uC591\uC8FC/\uB2E4\uC0B0/\uC1A1\uD30C/\uD558\uB0A8/\uC591\uD3C9)",
  description: "\uC548\uB155\uD558\uC138\uC694. \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC785\uB2C8\uB2E4. \uD658\uC601\uD569\uB2C8\uB2E4.",
  robots: "index, follow",
  Author: "\uC774\uBBFC\uD638",
  refresh: "3600",
  refresh: "Split vertical out",
  HandheldFriendly: "true",
  formatDetection: "telephone=no"
});
async function loader({ request }) {
  return (0, import_node3.json)({
    user: await getUser(request)
  });
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react9.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react9.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BranchPcMobile, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_helmet_async.HelmetProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_helmet_async.Helmet, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: REACT_APP_CENTER_NAME }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { property: "og:image", content: REACT_APP_URL + "/image/visual1.jpg" })
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "hd_ar" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("hr", {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react9.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react9.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react9.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react9.LiveReload, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Footer, {})
    ] })
  ] });
}

// app/routes/board/consult/askanswer/AskAnswerSubmenu.js
var AskAnswerSubmenu_exports = {};
__export(AskAnswerSubmenu_exports, {
  AskAnswerSubmenu: () => AskAnswerSubmenu,
  default: () => AskAnswerSubmenu_default
});
var import_react11 = require("react"), import_react_router_dom4 = require("react-router-dom");
var import_jsx_runtime7 = require("react/jsx-runtime");
function AskAnswerSubmenu() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { id: "lnb_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { id: "lnb", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { children: "\uC0C1\uB2F4/\uBB38\uC758" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "lnb01", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_router_dom4.Link, { to: "/board/consult/askanswer/board", children: "\uC0C1\uB2F4/\uBB38\uC758" }) }) })
  ] }) }) });
}
var AskAnswerSubmenu_default = AskAnswerSubmenu;

// app/routes/board/introduce/teacher/TeacherDetail1.js
var TeacherDetail1_exports = {};
__export(TeacherDetail1_exports, {
  TeacherDetail: () => TeacherDetail,
  default: () => TeacherDetail1_default
});
var import_react13 = require("react"), import_react_router_dom6 = require("react-router-dom");

// app/routes/board/introduce/IntroduceSubMenu.js
var IntroduceSubMenu_exports = {};
__export(IntroduceSubMenu_exports, {
  IntroduceSubMenu: () => IntroduceSubMenu,
  default: () => IntroduceSubMenu_default
});
var import_react12 = require("react"), import_react_router_dom5 = require("react-router-dom");
var import_jsx_runtime8 = require("react/jsx-runtime");
function IntroduceSubMenu() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { id: "lnb_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { id: "lnb", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: "\uC13C\uD130 \uC18C\uAC1C" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb01", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/center", children: "\uC13C\uD130 \uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb02", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/teacher/advisor", children: "\uC790\uBB38\uC704\uC6D0" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb03", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/teacher/ceo", children: "\uC13C\uD130\uC7A5\uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb04", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/teacher/teacher", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb05", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/centermore", children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb06", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/comming", children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb07", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/boucher/boucherbaldal", children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "subNav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { children: "\uC13C\uD130 \uC18C\uAC1C" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb01", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/center", children: "\uC13C\uD130 \uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb02", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/teacher/advisor", children: "\uC790\uBB38\uC704\uC6D0" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb03", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/teacher/ceo", children: "\uC13C\uD130\uC7A5 \uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb04", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/teacher/teacher", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb05", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/centermore", children: "\uB458\uB7EC\uBCF4\uAE30" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb06", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/comming", children: "\uC624\uC2DC\uB294 \uAE38" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "lnb07 last", style: { width: "20%" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/board/introduce/boucher/boucherbaldal", children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }) })
      ] })
    ] })
  ] });
}
var IntroduceSubMenu_default = IntroduceSubMenu;

// app/routes/board/introduce/teacher/TeacherDetail1.js
var import_jsx_runtime9 = require("react/jsx-runtime");
function TeacherDetail() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "fb", children: "\uAE40\uD61C\uC9C4" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uAE40\uD61C\uC9C4"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC5B8\uC5B4\uCE58\uB8CC\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uCCAD\uAC01\uD559\uBD80 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uD559\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uAC15\uB0A8\uAD6C \uBAA9\uB828\uC5B4\uB9B0\uC774\uC9D1",
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
                          "\u73FE) \uB3D9\uB300\uBB38\uC7A5\uC560\uC778\uBCF5\uC9C0\uAD00",
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "2\uAE09 \uC5B8\uC5B4\uC7AC\uD65C\uC0AC(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)",
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
                          "2\uAE09 \uC2EC\uB9AC\uC0C1\uB2F4\uC0AC(\uD55C\uAD6D\uC0C1\uB2F4\uD611\uD68C)",
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
                          "2\uAE09 \uC0AC\uD68C\uBCF5\uC9C0\uC0AC(\uD55C\uAD6D\uC0AC\uD68C\uBCF5\uC9C0\uC0AC\uD611\uD68C)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_router_dom6.Link, { to: "/board/introduce/teacher/teacherdetail6", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_router_dom6.Link, { to: "/board/introduce/teacher/teacherdetail2", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_router_dom6.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail1_default = TeacherDetail;

// app/routes/board/introduce/teacher/TeacherDetail2.js
var TeacherDetail2_exports = {};
__export(TeacherDetail2_exports, {
  TeacherDetail: () => TeacherDetail2,
  default: () => TeacherDetail2_default
});
var import_react14 = require("react"), import_react_router_dom7 = require("react-router-dom");
var import_jsx_runtime10 = require("react/jsx-runtime");
function TeacherDetail2() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "fb", children: "\uCD5C\uC720\uB9BC" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uCD5C\uC720\uB9BC"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC5B8\uC5B4\uC7AC\uD65C\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uBCD1\uB9AC\uD559\uACFC \uD559\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uC774\uD654\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "2\uAE09 \uC5B8\uC5B4\uC7AC\uD65C\uC0AC \uC790\uACA9\uC99D(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom7.Link, { to: "/board/introduce/teacher/teacherdetail1", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom7.Link, { to: "/board/introduce/teacher/teacherdetail3", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom7.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail2_default = TeacherDetail2;

// app/routes/board/introduce/teacher/TeacherDetail3.js
var TeacherDetail3_exports = {};
__export(TeacherDetail3_exports, {
  TeacherDetail: () => TeacherDetail3,
  default: () => TeacherDetail3_default
});
var import_react15 = require("react"), import_react_router_dom8 = require("react-router-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
function TeacherDetail3() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "fb", children: "\uC1A1\uC740\uACBD" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uC1A1\uC740\uACBD"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC5B8\uC5B4\uCE58\uB8CC\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uD55C\uB9BC\uB300\uD559\uAD50 \uBCF4\uAC74\uACFC\uD559\uB300\uD559\uC6D0 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uD559\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
                          "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uCCAD\uAC01\uD559\uBD80 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uD559\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uB300\uC804\uB2E4\uBB38\uD654\uAC00\uC815\uC9C0\uC6D0\uC13C\uD130 \uC5B8\uC5B4\uC9C0\uB3C4\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
                          "\u73FE) \uC11C\uC6B8\uC911\uACC4\uC0AC\uD68C\uBCF5\uC9C0\uAD00 \uC544\uB3D9\uBC1C\uB2EC\uC9C0\uC6D0\uC13C\uD130 \uC5B8\uC5B4\uCE58\uB8CC\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC5B8\uC5B4\uCE58\uB8CC\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC5B8\uC5B4\uC7AC\uD65C\uC0AC 2\uAE09(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom8.Link, { to: "/board/introduce/teacher/teacherdetail2", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom8.Link, { to: "/board/introduce/teacher/teacherdetail5", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom8.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail3_default = TeacherDetail3;

// app/routes/board/introduce/teacher/TeacherDetail4.js
var TeacherDetail4_exports = {};
__export(TeacherDetail4_exports, {
  TeacherDetail: () => TeacherDetail4,
  default: () => TeacherDetail4_default
});
var import_react16 = require("react"), import_react_router_dom9 = require("react-router-dom");
var import_jsx_runtime12 = require("react/jsx-runtime");
function TeacherDetail4() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "fb", children: "\uBC15\uBCF4\uB78C" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uBC15\uBCF4\uB78C"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC5B8\uC5B4\uCE58\uB8CC\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uB8E8\uD130\uB300\uD559\uAD50 \uC5B8\uC5B4\uCE58\uB8CC\uD559 \uC804\uACF5 \uD559\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uD55C\uAD6D\uC5B8\uC5B4\uCE58\uB8CC\uC5F0\uAD6C\uC18C",
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
                          "\u524D) \uC0AC\uB791\uB098\uB214\uBC1C\uB2EC\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
                          "\u524D) \uD558\uB78C\uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "2\uAE09 \uC5B8\uC5B4\uC7AC\uD65C\uC0AC \uC790\uACA9\uC99D(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom9.Link, { to: "/board/introduce/teacher/teacherdetail3", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom9.Link, { to: "/board/introduce/teacher/teacherdetail5", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom9.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail4_default = TeacherDetail4;

// app/routes/board/introduce/teacher/TeacherDetail5.js
var TeacherDetail5_exports = {};
__export(TeacherDetail5_exports, {
  TeacherDetail: () => TeacherDetail5,
  default: () => TeacherDetail5_default
});
var import_react17 = require("react"), import_react_router_dom10 = require("react-router-dom");
var import_jsx_runtime13 = require("react/jsx-runtime");
function TeacherDetail5() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "fb", children: "\uC2EC\uC131\uC2E4" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uC2EC\uC131\uC2E4"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uD559\uC2B5\uC9C0\uB3C4 / \uAC00\uC871\uC0C1\uB2F4 / \uC131\uC778\uC0C1\uB2F4"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC11C\uC6B8\uC5EC\uC790\uB300\uD559\uAD50 \uC0AC\uD68C\uBCF5\uC9C0.\uAE30\uB3C5\uAD50\uB300\uD559\uC6D0 \uAC00\uC871\uC0C1\uB2F4 \uC11D\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uD568\uAED8\uD558\uB294\uC544\uB3D9\uCCAD\uC18C\uB144\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
                          "\u73FE) \uB3C4\uBD09\uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC778\uC9C0\uD559\uC2B5\uC9C0\uB3C4\uC0AC \uC790\uACA9\uC99D(\uD55C\uAD6D\uC778\uC9C0\uD559\uC2B5\uCE58\uB8CC\uD559\uD68C)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_router_dom10.Link, { to: "/board/introduce/teacher/teacherdetail3", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_router_dom10.Link, { to: "/board/introduce/teacher/teacherdetail7", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react_router_dom10.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail5_default = TeacherDetail5;

// app/routes/board/introduce/teacher/TeacherDetail6.js
var TeacherDetail6_exports = {};
__export(TeacherDetail6_exports, {
  TeacherDetail: () => TeacherDetail6,
  default: () => TeacherDetail6_default
});
var import_react18 = require("react"), import_react_router_dom11 = require("react-router-dom");
var import_jsx_runtime14 = require("react/jsx-runtime");
function TeacherDetail6() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "fb", children: "\uCD5C\uC218\uC5F0" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uCD5C\uC218\uC5F0"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC2EC\uB9AC\uAC80\uC0AC / \uB180\uC774\uCE58\uB8CC / \uCCAD\uC18C\uB144\uC0C1\uB2F4 / \uC131\uC778\uC0C1\uB2F4"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50 \uC77C\uBC18\uB300\uD559\uC6D0 \uBC1C\uB2EC \uBC0F \uBC1C\uB2EC\uC784\uC0C1\uC2EC\uB9AC \uC11D\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50 \uC2EC\uB9AC\uD559\uACFC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uC911\uAD6C\uC544\uC774\uC874",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\u524D) \uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50 \uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\u524D) \uC11C\uC6B8\uC2DC \uCCAD\uC18C\uB144 \uC815\uC2E0\uC7AC\uD65C\uC2DC\uC124 \uD478\uB978\uC874",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\u73FE) \uACBD\uAE30\uB3C4\uC758\uB8CC\uC6D0 \uC758\uC815\uBD80\uBCD1\uC6D0",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\u73FE) \uC778\uAC04\uBC1C\uB2EC\uBCF5\uC9C0\uC5F0\uAD6C\uC18C",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\u73FE) \uB298\uD574\uB791\uC778\uC9C0\uC2EC\uB9AC\uC5F0\uAD6C\uC18C",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC815\uC2E0\uAC74\uAC15\uC784\uC0C1\uC2EC\uB9AC\uC0AC(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\uB180\uC774\uC2EC\uB9AC\uC0C1\uB2F4\uC0AC(\uD55C\uAD6D\uBC1C\uB2EC\uC9C0\uC6D0\uD559\uD68C)",
                          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
                          "\uCCAD\uC18C\uB144\uC0C1\uB2F4\uC0AC(\uC5EC\uC131\uAC00\uC871\uBD80)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom11.Link, { to: "/board/introduce/teacher/teacherdetail1", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_router_dom11.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail6_default = TeacherDetail6;

// app/routes/board/introduce/teacher/TeacherDetail7.js
var TeacherDetail7_exports = {};
__export(TeacherDetail7_exports, {
  TeacherDetail: () => TeacherDetail7,
  default: () => TeacherDetail7_default
});
var import_react19 = require("react"), import_react_router_dom12 = require("react-router-dom");
var import_jsx_runtime15 = require("react/jsx-runtime");
function TeacherDetail7() {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "fb", children: "\uC774\uD61C\uC9C4" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uC774\uD61C\uC9C4"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uBBF8\uC220\uCE58\uB8CC\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uCC28\uC758\uACFC\uB300\uD559\uAD50 \uBBF8\uC220\uCE58\uB8CC\uB300\uD559\uC6D0 \uC784\uC0C1\uBBF8\uC220\uCE58\uB8CC\uD559 \uC11D\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uACE0\uB824\uB300\uD559\uAD50 \uAD6C\uB85C\uBCD1\uC6D0",
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
                          "\u524D) \uC778\uCC9C \uD504\uB77C\uC784\uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
                          "\u73FE) \uB0A8\uC591\uC8FC \uAFC8\uC790\uB78C \uC5B8\uC5B4\uC2EC\uB9AC\uBC1C\uB2EC\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uBBF8\uC220\uC2EC\uB9AC\uC0C1\uB2F4\uC0AC 1\uAE09",
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
                          "\uCCAD\uC18C\uB144\uC0C1\uB2F4\uC0AC 2\uAE09(\uC5EC\uC131\uAC00\uC871\uBD80)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_router_dom12.Link, { to: "/board/introduce/teacher/teacherdetail5", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_router_dom12.Link, { to: "/board/introduce/teacher/teacherdetail8", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react_router_dom12.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail7_default = TeacherDetail7;

// app/routes/board/introduce/teacher/TeacherDetail8.js
var TeacherDetail8_exports = {};
__export(TeacherDetail8_exports, {
  TeacherDetail: () => TeacherDetail8,
  default: () => TeacherDetail8_default
});
var import_react20 = require("react"), import_react_router_dom13 = require("react-router-dom");
var import_jsx_runtime16 = require("react/jsx-runtime");
function TeacherDetail8() {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "fb", children: "\uC190\uC815\uADDC" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uC190\uC815\uADDC"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC2EC\uB9AC\uCE58\uB8CC/\uC2EC\uB9AC\uAC80\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uAC00\uD1A8\uB9AD\uB300\uD559\uAD50 \uC0AC\uD68C\uACFC\uD559\uBD80 \uC2EC\uB9AC/\uC0AC\uD68C\uBCF5\uC9C0\uD559\uACFC \uD559\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\uC131\uC2E0\uC5EC\uC790\uB300\uD559\uAD50 \uC77C\uBC18\uB300\uD559\uC6D0 \uC74C\uC545\uCE58\uB8CC\uD559\uACFC \uC74C\uC545\uCE58\uB8CC \uC804\uACF5 \uC11D\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uAD6D\uAD70\uC218\uB3C4\uBCD1\uC6D0",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u524D) \uBD84\uB2F9\uC0C1\uD0D1\uCD08\uB4F1\uD559\uAD50 \uD2B9\uC218\uBC18",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u524D) \uC11C\uC6B8\uC0C1\uB2F4\uC2EC\uB9AC\uC5F0\uAD6C\uC18C",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u524D) \uC11C\uC6B8\uAE4C\uB9AC\uD0C0\uC2A4\uC54C\uCF54\uC62C\uC0C1\uB2F4\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u524D) \uCCAD\uC18C\uB144\uD76C\uB9DD\uC7AC\uB2E8",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u524D) \uB450\uADF8\uB8E8\uC544\uB3D9\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u73FE) \uD55C\uC2E0\uD50C\uB7EC\uC2A4\uCF00\uC5B4",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u73FE) \uC804\uAD6D\uC74C\uC545\uCE58\uB8CC\uC0AC\uD611\uD68C",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u73FE) \uD5EC\uB85C\uC2A4\uB9C8\uC77C",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u73FE) \uB9C8\uC74C\uACFC \uC74C\uC545 \uCE58\uB8CC\uCEE4\uBBA4\uB2C8\uD2F0",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u73FE) \uC131\uC2E0\uC5EC\uB300 \uCD9C\uAC15",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC0C1\uB2F4\uC2EC\uB9AC\uC0AC 2\uAE09(\uD55C\uAD6D\uC0C1\uB2F4\uC2EC\uB9AC\uD559\uD68C)",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\uC784\uC0C1\uC2EC\uB9AC\uC0AC 2\uAE09(\uC0B0\uC5C5\uC778\uB825\uACF5\uB2E8)",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\uCCAD\uC18C\uB144\uC0C1\uB2F4\uC0AC 2\uAE09(\uC5EC\uC131\uAC00\uC871\uBD80)",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\uC74C\uC545\uC911\uC7AC\uC804\uBB38\uAC00(\uC804\uAD6D\uC74C\uC545\uCE58\uB8CC\uC0AC\uD611\uD68C)",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\uC0AC\uD68C\uBCF5\uC9C0\uC0AC 1\uAE09(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)",
                          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
                          "\uC0AC\uD68C\uC870\uC0AC\uBD84\uC11D\uC0AC 2\uAE09(\uC0B0\uC5C5\uC778\uB825\uACF5\uB2E8)"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom13.Link, { to: "/board/introduce/teacher/teacherdetail7", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_react_router_dom13.Link, { to: "/board/introduce/teacher/teacher", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail8_default = TeacherDetail8;

// app/routes/board/introduce/boucher/BoucherBaldal.js
var BoucherBaldal_exports = {};
__export(BoucherBaldal_exports, {
  BoucherBaldal: () => BoucherBaldal,
  default: () => BoucherBaldal_default
});
var import_react22 = require("react"), import_react_router_dom15 = require("react-router-dom");

// app/routes/board/introduce/boucher/BoucherNavi.js
var BoucherNavi_exports = {};
__export(BoucherNavi_exports, {
  BoucherNavi: () => BoucherNavi,
  default: () => BoucherNavi_default
});
var import_react21 = require("react"), import_react_router_dom14 = require("react-router-dom");
var import_jsx_runtime17 = require("react/jsx-runtime");
function BoucherNavi() {
  let location = (0, import_react_router_dom14.useLocation)(), [activeClass, setActiveClass] = (0, import_react21.useState)("");
  return (0, import_react21.useEffect)(() => {
    location.pathname === "/board/introduce/boucher/boucherbaldal" ? (document.getElementById("boucherlist").getElementsByTagName("li").className = "off", document.getElementById("baldal").className = "on") : location.pathname === "/board/introduce/boucher/boucherchild" ? (document.getElementById("boucherlist").getElementsByTagName("li").className = "off", document.getElementById("child").className = "on") : location.pathname === "/board/introduce/boucher/bouchercure" ? (document.getElementById("boucherlist").getElementsByTagName("li").className = "off", document.getElementById("cure").className = "on") : (document.getElementById("boucherlist").getElementsByTagName("li").className = "off", document.getElementById("baldal").className = "on");
  }, [location]), /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_jsx_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "tabgroup", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "tabnavi", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { id: "boucherlist", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { id: "baldal", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom14.Link, { to: "/board/introduce/boucher/boucherbaldal", children: "\uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { id: "child", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom14.Link, { to: "/board/introduce/boucher/boucherchild", children: "\uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("li", { id: "cure", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react_router_dom14.Link, { to: "/board/introduce/boucher/bouchercure", children: "\uCE58\uB8CC\uC9C0\uC6D0\uC11C\uBE44\uC2A4" }) })
  ] }) }) }) });
}
var BoucherNavi_default = BoucherNavi;

// app/routes/board/introduce/boucher/BoucherBaldal.js
var import_jsx_runtime18 = require("react/jsx-runtime");
function BoucherBaldal() {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("article", { id: "ctt", className: "ctt_voucher1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { children: "\uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb07 a {color:#a99808;}
    .subNav ul li.lnb07 a {background-color: #89BCC1;}
    
    .tabgroup li {width:25%;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\uBC14\uC6B0\uCC98 \uC548\uB0B4" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "fb", children: "\uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(BoucherNavi, {}),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "style",
              {
                dangerouslySetInnerHTML: {
                  __html: `
    .tit {background: #fafafa; padding: 10px 10px; border-bottom: solid 1px #ddd; border-top: solid 1px #ddd; line-height: 18px;}
    
    dl.TopBoxBlue { position:relative; border:1px solid #ddd; background:#fbfbfb; padding:25px 55px 25px 0; display:inline-block;}
    dl.TopBoxBlue dt { float:left; color:#ddd; font-family:'SeoulNamsanCEB', Sans-serif; font-size:23px; width:265px; margin-right:-265px; border-right:1px solid #999; text-align:center;}
    dl.TopBoxBlue dt p{display:table-cell; width:inherit; vertical-align:middle; line-height:120%; height:70px;  color:#777;}
    dl.TopBoxBlue dd { margin-left:305px; color:#666;}
    dl.TopBoxBlue dd p{ display:table-cell; height:80px; vertical-align:middle; line-height:160%; font-family:'Nanum Gothic', serif; font-size:16px; color:#999; }
    
    @media screen and (max-width:700px) { 
    /* \uD68C\uC0AC\uC18C\uAC1C */
    dl.TopBoxBlue {padding:20px 5px 45px 0;}
    dl.TopBoxBlue dt {border-right:none;}
    dl.TopBoxBlue dt p {height:20px;}
    dl.TopBoxBlue dd p {display:inline-block;}
    dl.TopBoxBlue dd  {display:inline-block; margin-left:20px; margin-top:50px; color:#666;}
    
    .tabgroup li {width:50%;}
    }
    
    `
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("dl", { className: "TopBoxBlue", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: "\uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4 " }) }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { children: [
                "\uC815\uC2E0\uC801\u318D\uAC10\uAC01\uC801 \uC7A5\uC560\uC544\uB3D9\uC758 \uC778\uC9C0, \uC758\uC0AC\uC18C\uD1B5, \uC801\uC751\uD589\uB3D9, \uAC10\uAC01\xB7\uC6B4\uB3D9 \uB4F1\uC758 \uAE30\uB2A5 \uD5A5\uC0C1\uACFC \uD589\uB3D9 \uBC1C\uB2EC\uC744 \uC704\uD55C \uC801\uC808\uD55C \uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4.",
                " "
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { id: "ctt_con", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "table",
                {
                  className: "self_table ",
                  border: 0,
                  cellSpacing: 0,
                  cellPadding: 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("b", { children: "\u25B6" }),
                      "\uC9C0\uC6D0\uB300\uC0C1"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC5F0\uB839 : \uB9CC 18\uC138 \uBBF8\uB9CC \uC7A5\uC560\uC544\uB3D9",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\u203B \uB300\uC0C1\uC544\uB3D9\uC774 \uFF62\uCD08\uFF65\uC911\uB4F1\uAD50\uC721\uBC95\uFF63 \uC81C2\uC870\uC5D0 \uB530\uB978 \uD559\uAD50\uC5D0 \uC7AC\uD559 \uC911\uC778(\uD734\uD559\uC0DD\uC740 \uC81C\uC678) \uACBD\uC6B0\uC5D0\uB294 \uB9CC 20\uC138\uAC00 \uB418\uB294 \uB2EC\uAE4C\uC9C0 \uC9C0\uC6D0 \uC5F0\uC7A5\uAC00\uB2A5(\uC7AC\uD559\uC99D\uBA85\uC11C \uCCA8\uBD80)" }),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uC7A5\uC560\uC720\uD615 : \uB1CC\uBCD1\uBCC0, \uC9C0\uC801, \uC790\uD3D0\uC131, \uCCAD\uAC01, \uC5B8\uC5B4, \uC2DC\uAC01 \uC7A5\uC560 \uC544\uB3D9",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uC18C\uB4DD\uAE30\uC900 : \uC804\uAD6D\uAC00\uAD6C \uD3C9\uADE0\uC18C\uB4DD\uC758 150% \uC774\uD558\uC778 \uAC00\uAD6C",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\u203B \uB2E8, \uC7A5\uC560\uC544 2\uBA85 \uC774\uC0C1 \uAC00\uAD6C, \uBD80\uBAA8 \uC911 1\uBA85 \uC774\uC0C1\uC774 \uC911\uC99D\uC7A5\uC560\uC778(1,2\uAE09 \uBC0F 3\uAE09 \uC911\uBCF5\uC7A5\uC560) \uAC00\uC815\uC740 \uC18C\uB4DD\uAE30\uC900\uC774 \uC804\uAD6D\uAC00\uAD6C\uD3C9\uADE0\uC18C\uB4DD 150%\uB97C \uCD08\uACFC\uD558\uB294 \uACBD\uC6B0\uB77C\uB3C4 \uC2DC\u318D\uAD70\u318D\uAD6C\uCCAD\uC7A5\uC774 \uC778\uC815\uD558\uB294 \uACBD\uC6B0 \uC608\uC0B0\uBC94\uC704 \uB0B4\uC5D0\uC11C \uC9C0\uC6D0 \uAC00\uB2A5" }),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("b", { children: "\u25B6" }),
                      "\uC9C0\uC6D0\uB0B4\uC6A9"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC5B8\uC5B4, \uCCAD\uB2A5(\u807D\u80FD), \uBBF8\uC220, \uC74C\uC545, \uD589\uB3D9, \uB180\uC774, \uC2EC\uB9AC\uC6B4\uB3D9\u318D\uC7AC\uD65C\uC2EC\uB9AC, \uAC10\uAC01\u318D\uC6B4\uB3D9 \uB4F1 \uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4 \uC81C\uACF5",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uC7A5\uC560 \uC870\uAE30 \uBC1C\uACAC \uBC0F \uBC1C\uB2EC\uC9C4\uB2E8\uC11C\uBE44\uC2A4 \uC911\uC7AC\uB97C \uC704\uD55C \uBD80\uBAA8 \uC0C1\uB2F4 \uC11C\uBE44\uC2A4 \uB4F1 \uC9C0\uC6D0",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "\u203B \uBB3C\uB9AC\uCE58\uB8CC, \uC791\uC5C5\uCE58\uB8CC \uB4F1 \uC758\uB8CC\uAE30\uAD00\uC5D0\uC11C \uD589\uD574\uC9C0\uB294 \uC758\uB8CC\uC9C0\uC6D0\uC740 \uC9C0\uC6D0 \uBD88\uAC00" }),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uC9C0\uC6D0\uAE08\uC561",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uCD1D 25\uB9CC\uC6D0",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                      "table",
                      {
                        width: "100%",
                        className: "self_table2 ",
                        style: {
                          borderTopColor: "rgb(142, 145, 159)",
                          borderTopWidth: 2,
                          borderTopStyle: "solid"
                        },
                        border: 0,
                        cellSpacing: 0,
                        cellPadding: 0,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("colgroup", { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("col", { width: "" }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("col", { width: "20%" }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("col", { width: "15%" })
                          ] }),
                          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tr", { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "col", children: "\uC18C\uB4DD\uAE30\uC900" }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "col", children: "\uBC14\uC6B0\uCC98 \uC9C0\uC6D0\uC561" }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "col", children: "\uBCF8\uC778\uBD80\uB2F4\uAE08" })
                          ] }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tbody", { children: [
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tr", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "row", children: "\uAE30\uCD08\uC0DD\uD65C\uC218\uAE09\uC790(\uB2E4\uD615)" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "\uC6D4 25\uB9CC\uC6D0" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "\uBA74\uC81C" })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tr", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "row", children: "\uCC28\uC0C1\uC704 \uACC4\uCE35(\uAC00\uD615)" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "\uC6D4 23\uB9CC\uC6D0" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "2\uB9CC\uC6D0" })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tr", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "row", children: "\uCC28\uC0C1\uC704 \uCD08\uACFC \uC804\uAD6D\uAC00\uAD6C \uD3C9\uADE0 \uC18C\uB4DD 50%\uC774\uD558(\uB098\uD615)" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "\uC6D4 21\uB9CC\uC6D0" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "4\uB9CC\uC6D0" })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tr", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "row", children: "\uC804\uAD6D\uAC00\uAD6C\uD3C9\uADE0\uC18C\uB4DD 100%\uC774\uD558(\uB77C\uD615)" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "\uC6D4 19\uB9CC\uC6D0" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "6\uB9CC\uC6D0" })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("tr", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { scope: "row", children: "\uC804\uAD6D\uAC00\uAD6C\uD3C9\uADE0\uC18C\uB4DD 150%\uC774\uD558(\uB9C8\uD615)" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "\uC6D4 17\uB9CC\uC6D0" }),
                              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("td", { children: "8\uB9CC\uC6D0 " })
                            ] })
                          ] })
                        ]
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("b", { children: "\u25B6" }),
                      "\uC2E0\uCCAD\uBC29\uBC95"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC8FC\uC18C\uC9C0 \uC74D\u318D\uBA74\u318D\uB3D9 \uC8FC\uBBFC\uC13C\uD130",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uC2E0\uCCAD\uAE30\uAC04 : \uB9E4\uC6D4 1\uC77C~27\uC77C\uAE4C\uC9C0 (\uC775\uC6D4 1\uC77C\uBD80\uD130 \uC11C\uBE44\uC2A4 \uAC1C\uC2DC)",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uC81C\uCD9C\uC11C\uB958",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
                        "\u318D\uC2E0\uCCAD\uC11C(\uC74D\u318D\uBA74\u318D\uB3D9 \uC8FC\uBBFC\uC13C\uD130 \uBE44\uCE58)",
                        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                        "\u318D\uC2E0\uBD84\uC99D\uACFC \uC18C\uB4DD\uC99D\uBA85 \uC790\uB8CC ",
                        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                        "\u318D\uC601\uC720\uC544(\uB9CC6\uC138\uBBF8\uB9CC)\uC758 \uACBD\uC6B0 \uC758\uC0AC\uC9C4\uB2E8\uC11C\uC640 \uAC80\uC0AC\uC790\uB8CC \uC81C\uCD9C(*\uCD5C\uADFC 6\uAC1C\uC6D4 \uC774\uB0B4)",
                        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                        "\u318D\uBC14\uC6B0\uCC98 \uCE74\uB4DC \uBC1C\uAE09(\uC7AC\uBC1C\uAE09) \uBC0F \uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5\u2027\uC774\uC6A9 \uB3D9\uC758\uC11C",
                        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {})
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("b", { children: "\u25B6" }),
                      "\uBB38\uC758"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC8FC\uC18C\uC9C0 \uAD00\uD560 \uC8FC\uBBFC\uC13C\uD130, \uBCF4\uAC74\uBCF5\uC9C0\uCF5C\uC13C\uD130 \u260E129",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {}),
                      "- \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react_router_dom15.Link, { href: "#", onClick: () => window.location.href = "tel:" + REACT_APP_CENTER_TEL, children: [
                        "\u260E ",
                        REACT_APP_CENTER_TEL
                      ] })
                    ] }) })
                  ] })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "style",
                {
                  dangerouslySetInnerHTML: {
                    __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
                  }
                }
              )
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var BoucherBaldal_default = BoucherBaldal;

// app/routes/board/introduce/teacher/TeacherDetail.js
var TeacherDetail_exports = {};
__export(TeacherDetail_exports, {
  TeacherDetail: () => TeacherDetail9,
  default: () => TeacherDetail_default
});
var import_react23 = require("react"), import_react_router_dom16 = require("react-router-dom");
var import_jsx_runtime19 = require("react/jsx-runtime");
function TeacherDetail9() {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "\uC13C\uD130\uC7A5 \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "fb", children: "\uC13C\uD130\uC7A5 \uC18C\uAC1C" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uD55C\uD61C\uB9BC"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC13C\uD130\uC7A5/\uC5B8\uC5B4\uCE58\uB8CC\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825 \uBC0F \uAD50\uC721"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uCCAD\uAC01\uD559\uBD80 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uD559\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
                          "\uB2E8\uAD6D\uB300\uD559\uAD50 \uD2B9\uC218\uAD50\uC721\uB300\uD559\uC6D0 \uC5B8\uC5B4\uCE58\uB8CC \uC11D\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uC0BC\uC804\uC885\uD569\uC0AC\uD68C\uBCF5\uC9C0\uAD00 \uC544\uB3D9\uBC1C\uB2EC\uC9C0\uC6D0\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
                          "\u524D) \uB9D1\uC740 \uC218 \uBCD1\uC6D0 \uC7AC\uD65C\uC758\uD559\uACFC",
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
                          "\u524D) \uD568\uAED8\uD558\uB294\uC544\uB3D9\uCCAD\uC18C\uB144\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
                          "\u524D) \uC911\uACC4\uC885\uD569\uC0AC\uD68C\uBCF5\uC9C0\uAD00 \uC544\uB3D9\uBC1C\uB2EC\uC9C0\uC6D0\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uBA74\uD5C8 \uBC0F \uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: "1\uAE09 \uC5B8\uC5B4\uC7AC\uD65C\uC0AC \uC790\uACA9\uC99D(\uBCF4\uAC74\uBCF5\uC9C0\uBD80)"
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                "a",
                {
                  href: "./board.php?bo_table=teacher&wr_id=136",
                  className: "btn_b01",
                  children: "\uB2E4\uC74C\uAE00"
                }
              ) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("a", { href: "./board.php?bo_table=teacher&page=", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var TeacherDetail_default = TeacherDetail9;

// app/routes/board/programs/psytest/PsyTestNaviTab.js
var PsyTestNaviTab_exports = {};
__export(PsyTestNaviTab_exports, {
  PsyTestNaviTab: () => PsyTestNaviTab,
  default: () => PsyTestNaviTab_default
});
var import_react24 = require("react"), import_react_router_dom17 = require("react-router-dom");
var import_jsx_runtime20 = require("react/jsx-runtime");
function PsyTestNaviTab() {
  let location = (0, import_react_router_dom17.useLocation)(), [activeClass, setActiveClass] = (0, import_react24.useState)("");
  return (0, import_react24.useEffect)(() => {
    location.pathname === "/board/programs/psytest/detail" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curedetail").className = "on") : location.pathname === "/board/programs/psytest/simlitest" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curelang").className = "on") : (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curedetail").className = "on");
  }, [location]), /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "tabgroup", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "tabnavi", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("ul", { id: "curelist", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curedetail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { to: "/board/programs/psytest/detail", children: "\uC804\uCCB4" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curelang", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { to: "/board/programs/psytest/simlitest", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uC2EC\uB9AC\uD3C9\uAC00" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curenotice", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uBC1C\uB2EC\uD3C9\uAC00" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "cureplay", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uC790\uD3D0\uAC80\uC0AC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "cureart", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uAE30\uC9C8\uAC80\uC0AC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curesense", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uC131\uACA9\uAC80\uC0AC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curegroup", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uBD80\uBAA8\uC591\uC721\uC2A4\uD2B8\uB808\uC2A4\uAC80\uC0AC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "mim\uAC80\uC0AC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uC560\uCC29\uC720\uD615\uAC80\uC0AC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uD589\uB3D9\uD3C9\uAC00" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uC5B8\uC5B4\uD3C9\uAC00" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uB180\uC774\uD3C9\uAC00" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom17.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "\uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8" }) }) })
  ] }) }) }) });
}
var PsyTestNaviTab_default = PsyTestNaviTab;

// app/routes/board/introduce/boucher/BoucherChild.js
var BoucherChild_exports = {};
__export(BoucherChild_exports, {
  BoucherChild: () => BoucherChild,
  default: () => BoucherChild_default
});
var import_react25 = require("react"), import_react_router_dom18 = require("react-router-dom");
var import_jsx_runtime21 = require("react/jsx-runtime");
function BoucherChild() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("article", { id: "ctt", className: "ctt_voucher2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { children: "\uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb07 a {color:#a99808;}
    .subNav ul li.lnb07 a {background-color: #89BCC1;}
    
    .tabgroup li {width:25%;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "\uBC14\uC6B0\uCC98 \uC548\uB0B4" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "fb", children: "\uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BoucherNavi, {}),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              "style",
              {
                dangerouslySetInnerHTML: {
                  __html: `
    .tit {background: #fafafa; padding: 10px 10px; border-bottom: solid 1px #ddd; border-top: solid 1px #ddd; line-height: 18px;}
    
    dl.TopBoxBlue { position:relative; border:1px solid #ddd; background:#fbfbfb; padding:25px 55px 25px 0; display:inline-block;}
    dl.TopBoxBlue dt { float:left; color:#ddd; font-family:'SeoulNamsanCEB', Sans-serif; font-size:23px; width:265px; margin-right:-265px; border-right:1px solid #999; text-align:center;}
    dl.TopBoxBlue dt p{display:table-cell; width:inherit; vertical-align:middle; line-height:120%; height:70px;  color:#777;}
    dl.TopBoxBlue dd { margin-left:305px; color:#666;}
    dl.TopBoxBlue dd p{ display:table-cell; height:80px; vertical-align:middle; line-height:160%; font-family:'Nanum Gothic', serif; font-size:16px; color:#999; }
    
    @media screen and (max-width:700px) { 
    /* \uD68C\uC0AC\uC18C\uAC1C */
    dl.TopBoxBlue {padding:20px 5px 45px 0;}
    dl.TopBoxBlue dt {border-right:none;}
    dl.TopBoxBlue dt p {height:20px;}
    dl.TopBoxBlue dd p {display:inline-block;}
    dl.TopBoxBlue dd  {display:inline-block; margin-left:20px; margin-top:50px; color:#666;}
    
    .tabgroup li {width:50%;}
    }
    
    `
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("dl", { className: "TopBoxBlue", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: "\uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
                "\uBB38\uC81C\uD589\uB3D9\uC758 \uC870\uAE30 \uBC1C\uACAC\uACFC \uAC1C\uC785\uC744 \uD1B5\uD558\uC5EC \uBB38\uC81C\uD589\uB3D9\uC744 \uAC10\uC18C\uC2DC\uD0A4\uACE0, \uC815\uC11C\uD589\uB3D9\uC7A5\uC560\uB85C\uC758 \uBC1C\uC804\uC744 \uB9C9\uC544 \uC815\uC0C1\uC801 \uC131\uC7A5\uC744 \uC9C0\uC6D0 \uD569\uB2C8\uB2E4.",
                " "
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { id: "ctt_con", children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "table",
                {
                  className: "self_table ",
                  border: 0,
                  cellSpacing: 0,
                  cellPadding: 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("b", { children: "\u25B6" }),
                      "\uC9C0\uC6D0\uB300\uC0C1"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC18C\uB4DD \uBC0F \uC5F0\uB839 : \uAE30\uC900 \uC911\uC704\uC18C\uB4DD 140% \uC774\uD558 \uAC00\uC815\uC758 \uB9CC 18\uC138 \uC774\uD558 \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC9C0\uC5ED \uC5EC\uAC74\uC5D0 \uB530\uB77C \uC124\uC815",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uB2E4\uC74C \uC911 \uC5B4\uB290 \uD558\uB098\uB97C \uCDA9\uC871\uD558\uB294 \uBB38\uC81C\uD589\uB3D9 \uC704\uD5D8\uAD70 \uC544\uB3D9 \uC911 \uC11C\uBE44\uC2A4 \uC9C0\uC6D0\uC774 \uC6B0\uC120\uC801\uC73C\uB85C \uD544\uC694\uD558\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uC544\uB3D9",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "\xA0\xA0\xA0(\uB2E8, \uC7A5\uC560\uC544\uB3D9\uC758 \uACBD\uC6B0 \uBC1C\uB2EC\uC7AC\uD65C\uC11C\uBE44\uC2A4\uC5D0\uC11C \uC81C\uC678\uB418\uB294 9\uAC1C \uC720\uD615)",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                        "\u318D\uC9C0\uCCB4, \uC815\uC2E0, \uC2E0\uC7A5, \uC2EC\uC7A5, \uD638\uD761\uAE30, \uAC04\uC7A5, \uC548\uBA74, \uC7A5\uB8E8 \uBC0F \uC694\uB8E8, \uAC04\uC9C8\uB9CC \uD3EC\uD568",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                        "\u318D\uBC1C\uAE09\uC77C\uB85C\uBD80\uD130 1\uB144 \uC774\uB0B4\uC758 \uC758\uC0AC \uC9C4\uB2E8\uC11C\xB7\uC18C\uACAC\uC11C, \uC784\uC0C1\uC2EC\uB9AC\uC0AC\uC18C\uACAC\uC11C, \uCCAD\uC18C\uB144\uC0C1\uB2F4\uC0AC\uC18C\uACAC\uC11C",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                        "\u318D\uC815\uC2E0\uBCF4\uAC74\uC13C\uD130\uC7A5\uC774 \uCD94\uCC9C\uD55C \uC544\uB3D9\xB7\uCCAD\uC18C\uB144",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                        "\u318D\uCD08\xB7\uC911\uB4F1\uAD50\uC721\uBC95\uC5D0 \uC758\uD55C \uC815\uAD50\uC0AC, \uC804\uBB38\uC0C1\uB2F4\uAD50\uC0AC, \uBCF4\uAC74\uAD50\uC0AC, \uC720\uCE58\uC6D0 \uC7A5, \uC5B4\uB9B0\uC774\uC9D1 \uC6D0\uC7A5\uC774 \uCD94\uCC9C\uD55C \uC544\uB3D9",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uCD94\uCC9C\uC2DC\uC5D0\uB294 \uCD94\uCC9C\uC790\uAC00\u300C\uC815\uC2E0\uBCF4\uAC74\uC0AC\uC5C5\uC548\uB0B4\u300D\uC758 \uC544\uB3D9\xB7\uCCAD\uC18C\uB144 \uC2EC\uCE35\uC0AC\uC815\uD3C9\uAC00\uB3C4\uAD6C \uC911 \uC5B4\uB290 \uD558\uB098\uB97C \uD65C\uC6A9\uD558\uC5EC \uAC80\uC0AC\uD55C \uD6C4 \uC808\uB2E8\uC810 \uC774\uC0C1\uC778 \uACBD\uC6B0",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uCD94\uCC9C\uC11C, \uAC80\uC0AC\uACB0\uACFC\uB294 3\uAC1C\uC6D4 \uC774\uB0B4 \uC791\uC131\uB41C \uAC83\uB9CC \uC778\uC815",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uC6B0\uC120\uC21C\uC704 : \u2460 \uBB38\uC81C\uD589\uB3D9\uC758 \uC218\uC900,\u2461 \uB2E4\uBB38\uD654\xB7\uC870\uC190\xB7\uD55C\uBD80\uBAA8 \uAC00\uC815",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("b", { children: "\u25B6" }),
                      "\uC9C0\uC6D0\uB0B4\uC6A9"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC2EC\uB9AC\uC0C1\uB2F4, \uB180\uC774, \uC5B8\uC5B4, \uC778\uC9C0, \uBBF8\uC220, \uC2EC\uB9AC\uC6B4\uB3D9 \uB4F1 \uC81C\uACF5",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uBD80\uAC00\uC11C\uBE44\uC2A4 : \uC2EC\uB9AC\uAC80\uC0AC, \uC0AC\uD68C\uC131\uD5A5\uC0C1\uD504\uB85C\uADF8\uB7A8, \uBD80\uBAA8\uD6C8\uB828 \uB4F1",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uC9C0\uC6D0\uAE08\uC561",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uC6D4 112,000\uC6D0 ~ 144,000\uC6D0 (\uBCF8\uC778 \uBD80\uB2F4\uAE08 : \uC6D4 16,000\uC6D0~48,000\uC6D0)",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uB4F1\uAE09\uBCC4\uC0C1\uC774",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("td", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { style: { textAlign: "right" }, children: "\uC6D416\uB9CC\uC6D0(\uBCF8\uC778\uBD80\uB2F4\uAE08 30%\uAE4C\uC9C0 \uCC28\uB4F1\uBD80\uACFC) / \uAE30\uAC04 : 12\uAC1C\uC6D4 / \uC7AC\uD310\uC815 : 1\uD68C(\uCD5C\uB3002\uB144)" }),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
                        "table",
                        {
                          width: "100%",
                          className: "self_table2 ",
                          style: {
                            borderTopColor: "rgb(142, 145, 159)",
                            borderTopWidth: 2,
                            borderTopStyle: "solid"
                          },
                          border: 0,
                          cellSpacing: 0,
                          cellPadding: 0,
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("colgroup", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("col", { width: "" }),
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("col", { width: "20%" }),
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("col", { width: "15%" })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("tr", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { scope: "col", children: "\uC18C\uB4DD\uAE30\uC900" }),
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { scope: "col", children: "\uBC14\uC6B0\uCC98 \uC9C0\uC6D0\uC561" }),
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { scope: "col", children: "\uBCF8\uC778\uBD80\uB2F4\uAE08" })
                            ] }) }),
                            /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("tbody", { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("tr", { children: [
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("th", { scope: "row", children: [
                                  "\uC218\uAE09\uC790, \uCC28\uC0C1\uC704\u223C\uD3C9\uADE0\uC18C\uB4DD50%\uC774\uD558",
                                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                                  "(1\uB4F1\uAE09)"
                                ] }),
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { children: "\uC6D4 144,000\uC6D0" }),
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { children: "\uC6D4 16,000\uC6D0" })
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("tr", { children: [
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("th", { scope: "row", children: [
                                  "\uD3C9\uADE0\uC18C\uB4DD50%\uCD08\uACFC\u223C120%\uC774\uD558",
                                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                                  "(2\uB4F1\uAE09)"
                                ] }),
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { children: "\uC6D4 128,000\uC6D0" }),
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { children: "\uC6D4 32,000\uC6D0" })
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("tr", { children: [
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("th", { scope: "row", children: [
                                  "\uD3C9\uADE0\uC18C\uB4DD100\uCD08\uACFC\u223C140%\uC774\uD558",
                                  /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                                  "(3\uB4F1\uAE09)"
                                ] }),
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { children: "\uC6D4 112,000\uC6D0" }),
                                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("td", { children: "\uC6D4 48,000\uC6D0" })
                              ] })
                            ] })
                          ]
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("b", { children: "\u25B6" }),
                      "\uC2E0\uCCAD\uBC29\uBC95"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC8FC\uC18C\uC9C0 \uC74D\u318D\uBA74\u318D\uB3D9 \uC8FC\uBBFC\uC13C\uD130",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uC2E0\uCCAD\uAE30\uAC04 : \uB9E4\uC6D4 1\uC77C~27\uC77C\uAE4C\uC9C0 (\uC775\uC6D4 1\uC77C\uBD80\uD130 \uC11C\uBE44\uC2A4 \uAC1C\uC2DC)",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      "- \uC81C\uCD9C\uC11C\uB958",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                        "\u318D\uC2E0\uCCAD\uC11C(\uC74D\u318D\uBA74\u318D\uB3D9 \uC8FC\uBBFC\uC13C\uD130 \uBE44\uCE58)",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                        "\u318D\uC2E0\uBD84\uC99D",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                        "\u318D\uAC74\uAC15\uBCF4\uD5D8\uC99D, \uAC74\uAC15\uBCF4\uD5D8\uB8CC \uB0A9\uBD80\uD655\uC778\uC11C\uB958 ",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {}),
                        "\u318D\uC758\uC0AC\uC9C4\uB2E8\uC11C.\uC18C\uACAC\uC11C, \uC784\uC0C1\uC2EC\uB9AC\uC0AC \uC18C\uACAC\uC11C, \uCCAD\uC18C\uB144\uC0C1\uB2F4\uC0AC \uC18C\uACAC\uC11C, \uD559\uAD50 \uAD50\uC0AC \uB610\uB294 \uD559\uAD50\uC7A5 \uCD94\uCC9C\uC11C, \uC815\uC2E0\uBCF4\uAC74\uC13C\uD130 \uCD94\uCC9C\uC758\uB8B0\uC11C(\uD0DD1) ",
                        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("b", { children: "\u25B6" }),
                      "\uBB38\uC758"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_react_router_dom18.Link, { href: "#", onClick: () => window.location.href = "tel:" + REACT_APP_CENTER_TEL, children: [
                        "\u260E ",
                        REACT_APP_CENTER_TEL
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("br", {})
                    ] }) })
                  ] })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "style",
                {
                  dangerouslySetInnerHTML: {
                    __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
                  }
                }
              )
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var BoucherChild_default = BoucherChild;

// app/routes/board/introduce/boucher/BoucherCure.js
var BoucherCure_exports = {};
__export(BoucherCure_exports, {
  BoucherCure: () => BoucherCure,
  default: () => BoucherCure_default
});
var import_react26 = require("react"), import_react_router_dom19 = require("react-router-dom");
var import_jsx_runtime22 = require("react/jsx-runtime");
function BoucherCure() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("article", { id: "ctt", className: "ctt_voucher4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: "\uCE58\uB8CC\uC9C0\uC6D0\uC11C\uBE44\uC2A4" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb07 a {color:#a99808;}
    .subNav ul li.lnb07 a {background-color: #89BCC1;}
    
    .tabgroup li {width:25%;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "\uBC14\uC6B0\uCC98 \uC548\uB0B4" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC9C0\uC6D0\uC11C\uBE44\uC2A4" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(BoucherNavi, {}),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "style",
              {
                dangerouslySetInnerHTML: {
                  __html: `
    .tit {background: #fafafa; padding: 10px 10px; border-bottom: solid 1px #ddd; border-top: solid 1px #ddd; line-height: 18px;}
    
    dl.TopBoxBlue { position:relative; border:1px solid #ddd; background:#fbfbfb; padding:25px 55px 25px 0; display:inline-block;}
    dl.TopBoxBlue dt { float:left; color:#ddd; font-family:'SeoulNamsanCEB', Sans-serif; font-size:23px; width:265px; margin-right:-265px; border-right:1px solid #999; text-align:center;}
    dl.TopBoxBlue dt p{display:table-cell; width:inherit; vertical-align:middle; line-height:120%; height:70px;  color:#777;}
    dl.TopBoxBlue dd { margin-left:305px; color:#666;}
    dl.TopBoxBlue dd p{ display:table-cell; height:80px; vertical-align:middle; line-height:160%; font-family:'Nanum Gothic', serif; font-size:16px; color:#999; }
    
    @media screen and (max-width:700px) { 
    /* \uD68C\uC0AC\uC18C\uAC1C */
    dl.TopBoxBlue {padding:20px 5px 45px 0;}
    dl.TopBoxBlue dt {border-right:none;}
    dl.TopBoxBlue dt p {height:20px;}
    dl.TopBoxBlue dd p {display:inline-block;}
    dl.TopBoxBlue dd  {display:inline-block; margin-left:20px; margin-top:50px; color:#666;}
    
    .tabgroup li {width:50%;}
    }
    
    `
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("dl", { className: "TopBoxBlue", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("dt", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { children: "\uCE58\uB8CC\uC9C0\uC6D0\uC11C\uBE44\uC2A4" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("p", { children: [
                "\uD2B9\uC218\uAD50\uC721\uB300\uC0C1\uC790\uC758 \uC7A5\uC560 \uAD50\uC815, \uC7A5\uC560 \uACBD\uAC10 \uBC0F 2\uCC28 \uC7A5\uC560 \uC608\uBC29\uACFC \uC7A5\uC560 \uAC1C\uC120\uC744 \uD1B5\uD55C \uC0AC\uD68C\uC801\uC751\uB825 \uD5A5\uC0C1. \uAD50\uC721\uC744 \uD6A8\uC728\uC801\uC73C\uB85C \uC2E4\uC2DC \uD558\uAE30 \uC704\uD55C \uC11C\uBE44\uC2A4",
                " "
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { id: "ctt_con", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "table",
                {
                  className: "self_table ",
                  border: 0,
                  cellSpacing: 0,
                  cellPadding: 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: "\u25B6" }),
                      "\uC9C0\uC6D0\uB300\uC0C1"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uC720,\uCD08,\uC911,\uACE0 \uAD50\uC721\uACFC\uC815\uC5D0 \uC7AC\uD559\uD558\uB294 ",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("u", { children: "\uD2B9\uC218\uAD50\uC721\uB300\uC0C1\uC790" }),
                      " \uC911, \uCE58\uB8CC\uC9C0\uC6D0\uC774 \uD544\uC694\uD55C \uD559\uC0DD \uBC0F ",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("u", { children: "\uB9CC 3\uC138 \uBBF8\uB9CC\uC758 \uC7A5\uC560 \uC601\uC544" }),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      "\xA0\xA0\xA0\xA0* \uD2B9\uC218\uAD50\uC721\uAE30\uAD00\uC774 \uC544\uB2CC \uC5B4\uB9B0\uC774\uC9D1 \uB4F1\uC758 \uAE30\uAD00\uC5D0 \uC7AC\uC6D0 \uC911\uC778 \uC6D0\uC544 \uBC0F \uCDE8\uC545 \uC5F0\uAE30.\uC720\uC608\uC790\uB294 \uC81C\uC678",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      "- \uACBD\uAE30\uB3C4\uAD50\uC721\uCCAD \uC18C\uC18D \uD2B9\uC218\uAD50\uC721\uB300\uC0C1\uC790 \uC911 ",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("u", { children: "\uCE58\uB8CC\uC9C0\uC6D0, \uBC29\uACFC\uD6C4 \uC11C\uBE44\uC2A4 \uB300\uC0C1 \uD559\uC0DD" }),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: "\u25B6" }),
                      "\uC9C0\uC6D0\uB0B4\uC6A9"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uBB3C\uB9AC, \uC791\uC5C5, \uC5B8\uC5B4, \uCCAD\uB2A5, \uC74C\uC545, \uBBF8\uC220, \uD589\uB3D9, \uAC10\uAC01\uD1B5\uD569, \uC2EC\uB9AC\uC6B4\uB3D9 (\uC218\uC601, \uC2B9\uB9C8 \uBD88\uAC00)",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      "- \uC9C0\uC6D0\uAE08\uC561",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      "- \uC6D4 150,000\uC6D0",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: "\u25B6" }),
                      "\uC2E0\uCCAD\uBC29\uBC95"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uAD50\uC721\uCCAD, \uD2B9\uC218\uAD50\uC721\uC9C0\uC6D0\uC13C\uD130(031-334-7552), \uD2B9\uC218\uD559\uAD50 \uD559\uC0DD\uC740 \uD574\uB2F9 \uD559\uAD50",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {})
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("th", { style: { textAlign: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("b", { children: "\u25B6" }),
                      "\uBB38\uC758"
                    ] }) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("td", { style: { textAlign: "left" }, children: [
                      "- \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_react_router_dom19.Link, { href: "#", onClick: () => window.location.href = "tel:" + REACT_APP_CENTER_TEL, children: [
                        "\u260E ",
                        REACT_APP_CENTER_TEL
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("br", {})
                    ] }) })
                  ] })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "style",
                {
                  dangerouslySetInnerHTML: {
                    __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
                  }
                }
              )
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var BoucherCure_default = BoucherCure;

// app/routes/board/community/CommunitySubmenu.js
var CommunitySubmenu_exports = {};
__export(CommunitySubmenu_exports, {
  CommunitySubmenu: () => CommunitySubmenu,
  default: () => CommunitySubmenu_default
});
var import_react27 = require("react"), import_react_router_dom20 = require("react-router-dom");
var import_jsx_runtime23 = require("react/jsx-runtime");
function CommunitySubmenu() {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { id: "lnb_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { id: "lnb", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h2", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { className: "lnb01", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_router_dom20.Link, { to: "/board/community/notice/board", children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { className: "lnb02 last", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_router_dom20.Link, { to: "/board/community/usualquestion", children: "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
    
    #GNB @media all and (min-width:981px) and (max-width:2000px){
        #board_container {width:980px; margin:0 auto;}
    
            
    }
    @media all and (min-width:1px) and (max-width:980px){
        #board_container {width:auto !important; padding:0 10px; margin:0 auto;}
    
    }
    `
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "subNav", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h1", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { className: "lnb01", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_router_dom20.Link, { to: "/board/community/notice/board", children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("li", { className: "lnb02", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_router_dom20.Link, { to: "/board/community/usualquestion", children: "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38" }) })
      ] })
    ] })
  ] });
}
var CommunitySubmenu_default = CommunitySubmenu;

// app/routes/board/programs/psytest/SimliTest.js
var SimliTest_exports = {};
__export(SimliTest_exports, {
  SimliTest: () => SimliTest,
  default: () => SimliTest_default
});
var import_react30 = require("react"), import_react_router_dom22 = require("react-router-dom");

// app/routes/board/programs/ProgSubMenu.js
var ProgSubMenu_exports = {};
__export(ProgSubMenu_exports, {
  ProgSubMenu: () => ProgSubMenu,
  default: () => ProgSubMenu_default
});
var import_react28 = require("react"), import_react_router_dom21 = require("react-router-dom"), import_react29 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function ProgSubMenu() {
  let location = (0, import_react_router_dom21.useLocation)(), showSubMenu = (setNum) => {
    var list = document.getElementById("prog" + setNum);
    list.style.display === "none" ? (list.style.display = "block", list.style.transition = "max-height 0.5s ease-out", list.style.maxHeight = "380px") : (list.style.maxHeight = "0px", list.style.transition = "max-height 0.5s ease-in", list.style.display = "none");
  };
  return (0, import_react29.useEffect)(() => {
    if (location.pathname !== "/board/programs/detail") {
      let isCure = location.pathname.startsWith("/board/programs/cure");
      var pageNum = 0;
      isCure ? pageNum = 1 : pageNum = 2;
      var list = document.getElementById("prog" + pageNum);
      list.style.display = "block", list.style.transition = "max-height 0.5s ease-out", list.style.maxHeight = "380px";
    }
  }, [location]), /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { id: "lnb_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { id: "lnb", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h2", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("li", { className: "lnb01", onClick: () => showSubMenu(1), children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { style: { color: "#a99808", fontSize: "13px", fontWeight: "700" }, children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("ul", { id: "prog1", className: "lnb_sub", style: { display: "none", overflow: "hidden", maxHeight: "0px", transition: "max-height 0.5s ease-in" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC804\uCCB4 \uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC5B8\uC5B4\uCE58\uB8CC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/notice", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC778\uC9C0\uD559\uC2B5" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/play", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uB180\uC774\uCE58\uB8CC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/art", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uBBF8\uC220\uCE58\uB8CC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/sense", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/group", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uADF8\uB8F9\uCE58\uB8CC " }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/family", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uAC00\uC871\uC0C1\uB2F4" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("li", { className: "lnb01", onClick: () => showSubMenu(2), children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { style: { color: "#a99808", fontSize: "13px", fontWeight: "700" }, children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("ul", { id: "prog2", className: "lnb_sub", style: { display: "none", overflow: "hidden", maxHeight: "0px", transition: "max-height 0.5s ease-in" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/programs/psytest/detail", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC804\uCCB4 \uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC2EC\uB9AC\uD3C9\uAC00" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uBC1C\uB2EC\uD3C9\uAC00" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC790\uD3D0\uAC80\uC0AC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uAE30\uC9C8\uAC80\uC0AC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC131\uACA9\uAC80\uC0AC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uBD80\uBAA8\uC591\uC721\uC2A4\uD2B8\uB808\uC2A4\uAC80\uC0AC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "mim\uAC80\uC0AC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC560\uCC29\uC720\uD615\uAC80\uC0AC" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uD589\uB3D9\uD3C9\uAC00" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uC5B8\uC5B4\uD3C9\uAC00" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_router_dom21.Link, { to: "/board/cureprogram/language", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { children: "\uB180\uC774\uD3C9\uAC00" }) }) })
        ] })
      ] })
    ] })
  ] }) }) });
}
var ProgSubMenu_default = ProgSubMenu;

// app/routes/board/programs/psytest/SimliTest.js
var import_jsx_runtime25 = require("react/jsx-runtime");
function SimliTest() {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("article", { id: "ctt", className: "ctt_program_1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h1", { children: "\uC2EC\uB9AC\uD3C9\uAC00" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "fb", children: "\uC2EC\uB9AC\uD3C9\uAC00" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PsyTestNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { children: "\uC2EC\uB9AC\uD3C9\uAC00" }),
              /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text1", children: "\uAC01 \uC0C1\uD669\uC5D0 \uB9DE\uB294 \uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8\uC744 \uC704\uD55C \uCCB4\uACC4\uC801\uC778 \uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4." }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("p", { className: "text2", children: [
                  "\uC801\uC751\uC5D0\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uACAA\uB294\xA0\uC544\uB3D9\xA0\uBC0F\xA0\uCCAD\uC18C\uB144,\xA0\uC131\uC778\uC744\xA0\uB300\uC0C1\uC73C\uB85C\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC778\uC9C0\uC801\xA0\uB2A5\uB825\uACFC\xA0\uC815\uC11C\xA0\uC0C1\uD0DC,\xA0\uC131\uACA9\xA0\uD2B9\uC131,\xA0\uC0AC\uD68C\uC131,\xA0\uAC00\uC871\uAD00\uACC4\xA0\uB4F1\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC804\uBC18\uC801\uC778\xA0\uC601\uC5ED\uC5D0\xA0\uB300\uD55C\xA0\uAC1D\uAD00\uC801\uC778\xA0\uD3C9\uAC00\uB97C\xA0\uC2E4\uC2DC\uD558\uC5EC\xA0\uBD80\uC801\uC751\uC5D0\xA0\uB300\uD55C\xA0\uC6D0\uC778\uC744\xA0\uBC1D\uD600\uB0B4\uACE0,\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uAC1C\uC778\uC758\xA0\uAC15\uC810\uACFC\xA0\uC57D\uC810\uC744\xA0\uD30C\uC545\uD558\uC5EC\xA0\uAC00\uC7A5\xA0\uC801\uD569\uD558\uACE0\xA0\uD6A8\uC728\uC801\uC778\xA0\uC0C1\uB2F4\uBC29\uBC95\uC744\xA0\uBAA8\uC0C9\uD558\uB294\xA0\uACFC\uC815\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC2EC\uB9AC\uD3C9\uAC00\uB294\xA0\uD604\uC7AC\xA0\uC801\uC751\uC5D0\xA0\uD2B9\uBCC4\uD55C\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uBCF4\uC774\uC9C0\xA0\uC54A\uB354\uB77C\uB3C4\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC790\uAE30\xA0\uC774\uD574\xA0\uBC0F\xA0\uC7A0\uC7AC\uB825\xA0\uAC1C\uBC1C,\xA0\uC9C4\uB85C\xA0\uD0D0\uC0C9,\xA0\uBD80\uC801\uC751\xA0\uD589\uB3D9\uC758\xA0\uC608\uBC29\uC744\xA0\uC704\uD558\uC5EC\uC11C\uB3C4\xA0\uC2E4\uC2DC\uB429\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uD2B9\uD788\xA0\uC544\uB3D9\xA0\uBC0F\xA0\uCCAD\uC18C\uB144\uC5D0\uAC8C\xA0\uC778\uC9C0\uC801,\xA0\uC0AC\uD68C\uC801,\xA0\uC2EC\uB9AC\uC801\uC73C\uB85C\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC911\uC694\uD55C\xA0\uBCC0\uD654\uAC00\xA0\uC77C\uC5B4\uB098\uB294\xA0\uC2DC\uAE30(\uCD08\uB4F1\uD559\uAD50\xA0\uCDE8\uD559\xA0\uC804,\xA0\uCD08\uB4F1\uD559\uAD50\xA04~5\uD559\uB144,\xA0\uC911\uD559\uAD50\xA03\uD559\uB144,\xA0\uACE0\uB4F1\uD559\uAD50\xA01\uD559\uB144)\uC5D0\uB294\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC6D0\uB9CC\uD55C\xA0\uD559\uAD50\uC0DD\uD65C\xA0\uC801\uC751\uACFC\xA0\uD559\uC5C5\uB2A5\uB825\uC758\xA0\uD5A5\uC0C1,\xA0\uC7A0\uC7AC\uB825\xA0\uAC1C\uBC1C,\xA0\uC9C4\uB85C\xA0\uC120\uD0DD\xA0\uB4F1\uC744\xA0\uC704\uD574\xA0",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {}),
                  "\uC2EC\uB9AC\uD3C9\uAC00\uB97C\xA0\uBC1B\uC544\xA0\uBCF4\uB294\xA0\uAC83\uC774\xA0\uBC14\uB78C\uC9C1\uD569\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("p", { className: "text1", children: "\uAC80\uC0AC \uB300\uC0C1" }),
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { style: { fontWeight: "1000", fontSize: "1.2em" }, children: "\uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC815\uC11C\xA0\uC870\uC808\uC758\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uACAA\uB294\xA0\uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uD559\uC2B5\uC5D0\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uBCF4\uC774\uB294\xA0\uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uB610\uB798\xA0\uAD00\uACC4\uC5D0\uC11C\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uBCF4\uC774\uB294\xA0\uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { style: { paddingBottom: "21px" }, children: "\uACF5\uACA9\uC131\xA0\uC870\uC808\uC774\xA0\uC5B4\uB824\uC6B4\xA0\uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { style: { fontWeight: "1000", fontSize: "1.2em" }, children: "\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uD559\uC5C5\uC774\uB098\xA0\uC9C4\uB85C\uC758\xA0\uACE0\uBBFC\uC774\xA0\uAE4A\uC740\xA0\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC774\uC131\xA0\uBB38\uC81C\uB098\xA0\uCE5C\uAD6C\uAD00\uACC4\uC5D0\uC11C\xA0\uAC08\uB4F1\uC744\xA0\uACAA\uAC70\uB098\xA0\uB530\uB3CC\uB9BC\uC744\xA0\uB2F9\uD558\uB294\xA0\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC778\uD130\uB137,\xA0\uCEF4\uD4E8\uD130\xA0\uAC8C\uC784\xA0\uB4F1\uC5D0\xA0\uBE60\uC838\uB4DC\uB294\xA0\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uAC00\uCD9C,\xA0\uBE44\uD589,\xA0\uD3ED\uD589\xA0\uB4F1\uC744\xA0\uC800\uC9C0\uB974\uB294\xA0\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC6B0\uC6B8\uD558\uAC70\uB098\xA0\uB9E4\uC0AC\uC5D0\xA0\uBB34\uAE30\uB825\uD55C\xA0\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { style: { paddingBottom: "21px" }, children: "\uBD80\uBAA8\xA0\uD639\uC740\xA0\uD615\uC81C\uC640\xA0\uC9C0\uC18D\uC801\uC73C\uB85C\xA0\uC2EC\uD55C\xA0\uAC08\uB4F1\uC744\xA0\uACAA\uB294\xA0\uCCAD\uC18C\uB144" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { style: { fontWeight: "1000", fontSize: "1.2em" }, children: "\uC131\uC778" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC790\uC2E0\uC758\xA0\uC131\uACA9\uC5D0\xA0\uB300\uD558\uC5EC\xA0\uACE0\uBBFC\uC774\xA0\uB418\uB294\xA0\uC131\uC778" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uB300\uC778\uAD00\uACC4\uB098\xA0\uC9C1\uC7A5\uC0DD\uD65C\uC5D0\xA0\uC5B4\uB824\uC6C0\uC774\xA0\uC788\uB294\xA0\uC131\uC778" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC2EC\uB9AC\uC801\uC778\xA0\uC2A4\uD2B8\uB808\uC2A4\uB098\xA0\uC815\uC11C\uC801\uC73C\uB85C\xA0\uBD88\uC548\uD558\uACE0\xA0\uC6B0\uC6B8\uAC10\uC774\xA0\uC2EC\uD55C\xA0\uC131\uC778" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC790\uB140\xA0\uC591\uC721\uC5D0\uC11C\uC758\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uD63C\uC790\uC11C\xA0\uD574\uACB0\uD558\uAE30\xA0\uC5B4\uB824\uC6B4\xA0\uC131\uC778" }),
                  /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { children: "\uC77D\uAE30 \uC7A5\uC560 \uC544\uB3D9" })
                ] })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var SimliTest_default = SimliTest;

// app/routes/board/introduce/teacher/Advisor.js
var Advisor_exports = {};
__export(Advisor_exports, {
  Advisor: () => Advisor,
  default: () => Advisor_default
});
var import_react31 = require("react"), import_react_router_dom23 = require("react-router-dom");
var import_jsx_runtime26 = require("react/jsx-runtime");
function Advisor() {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(import_jsx_runtime26.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "\uC790\uBB38\uAD50\uC218 \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "fb", children: "\uC790\uBB38\uAD50\uC218 \uC18C\uAC1C" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("p", { className: "bu1", children: [
          REACT_APP_CENTER_NAME,
          "\uC758 \uC790\uBB38\uAD50\uC218\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("td", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                        "span",
                        {
                          className: "add_title",
                          style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                          children: "\uC774\uC9C0\uD61C"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "add_title_slogun", children: "\uAD6D\uC81C\uB300\uD559\uAD50 \uC0C1\uB2F4\uC2EC\uB9AC\uCE58\uB8CC\uACFC \uAD50\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uAD6D\uBBFC\uB300\uD559\uAD50 \uAD50\uC721\uC2EC\uB9AC, \uC0C1\uB2F4 \uBC0F \uD2B9\uC218\uAD50\uC721\uD559 \uBC15\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uAD6D\uBBFC\uB300\uD559\uAD50 \uC0C1\uB2F4\uC2EC\uB9AC\uD559 \uC11D\uC0AC"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uAD6D\uBBFC\uB300\uD559\uAD50 \uD559\uC0DD\uC0DD\uD65C\uC0C1\uB2F4\uC13C\uD130 \uCD1D\uAD04\uC5C5\uBB34",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uCCAD\uC18C\uB144\uC0C1\uB2F4\uD559\uD68C\xA0\uC0C1\uB2F4\uC804\uBB38\uAC00\xA01\uAE09",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uAD50\uC721\uC2EC\uB9AC\uD559\uD68C\xA0\uD559\uC2B5\uCEE8\uC124\uD134\uD2B8",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uC0C1\uB2F4\uC2EC\uB9AC\uD559\uD68C\xA0\uC0C1\uB2F4\uC2EC\uB9AC\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uC0C1\uB2F4\uD559\uD68C\xA0\uC804\uBB38\uC0C1\uB2F4\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uC0AC\uC9C4\uCE58\uB8CC\uD559\uD68C\xA0\uBD80\uD559\uD68C\uC7A5,\xA0\uC218\uB828\uAC10\uB3C5",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uC601\uC0C1\uC601\uD654\uCE58\uB8CC\uD559\uD68C\xA0\uC11C\uC6B8\uACBD\uAE30\uC9C0\uD68C\uC7A5,\xA0\uC804\uBB38\uC218\uB828\uAC10\uB3C5",
                          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
                          "\uD55C\uAD6D\uB3C5\uC11C\uCE58\uB8CC\uD559\uD68C\xA0\uB300\uC678\uAD50\uB958\uC704\uC6D0\uC7A5,\xA0\uC218\uB828\uAC10\uB3C5"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb02 a {color:#a99808;}
    .subNav ul li.lnb02 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var Advisor_default = Advisor;

// app/routes/board/introduce/teacher/Teacher.js
var Teacher_exports = {};
__export(Teacher_exports, {
  IntroduceTeacher: () => IntroduceTeacher,
  default: () => Teacher_default
});
var import_react32 = require("react"), import_react_router_dom24 = require("react-router-dom");
var import_jsx_runtime27 = require("react/jsx-runtime");
function IntroduceTeacher() {
  return (0, import_react32.useEffect)(() => {
    if (document.getElementById("teacher_css")) {
      var link = document.getElementById("teacher_css");
      link.href = "/styles/css/teacher_css.css";
    } else {
      var link = document.createElement("link");
      link.id = "teacher_css", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/teacher_css.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    return () => {
    };
  }), /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "fb", children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", { className: "bu1", children: "\uC601\uC5ED\uBCC4\xA0\uC804\uBB38 \uCE58\uB8CC\uC0AC \uC120\uC0DD\uB2D8\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4" }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("h2", { id: "container_title_photo", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: " \uBAA9\uB85D" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { id: "bo_gall", style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
          "form",
          {
            name: "fboardlist",
            id: "fboardlist",
            action: "./board_list_update.php",
            onSubmit: "return fboardlist_submit(this);",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "teacher" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "page", defaultValue: 1 }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "sw", defaultValue: "" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { id: "gall_ul", children: [
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "5 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail6", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail6", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail6", className: "add_title", children: "\uCD5C\uC218\uC5F0" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uC2EC\uB9AC\uAC80\uC0AC / \uB180\uC774\uCE58\uB8CC / \uCCAD\uC18C\uB144\uC0C1\uB2F4 / \uC131\uC778\uC0C1\uB2F4" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block", color: "#666" }, children: [
                        "\uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50 \uC77C\uBC18\uB300\uD559\uC6D0 \uBC1C\uB2EC \uBC0F \uBC1C\uB2EC\uC784\uC0C1\uC2EC\uB9AC \uC11D\uC0AC",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50 \uC2EC\uB9AC\uD559\uACFC"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uC911\uAD6C\uC544\uC774\uC874",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uC774\uD654\uC5EC\uC790\uB300\uD559\uAD50 \uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uC11C\uC6B8\uC2DC \uCCAD\uC18C\uB144 \uC815\uC2E0\uC7AC\uD65C\uC2DC\uC124 \uD478\uB978\uC874",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uACBD\uAE30\uB3C4\uC758\uB8CC\uC6D0 \uC758\uC815\uBD80\uBCD1\uC6D0",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uC778\uAC04\uBC1C\uB2EC\uBCF5\uC9C0\uC5F0\uAD6C\uC18C",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uB298\uD574\uB791\uC778\uC9C0\uC2EC\uB9AC\uC5F0\uAD6C\uC18C",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail6" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail6", children: " " }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "10 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail1", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail1", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail1", className: "add_title", children: "\uAE40\uD61C\uC9C4" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uC5B8\uC5B4\uCE58\uB8CC\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "div",
                        {
                          style: {
                            lineHeight: "22px",
                            display: "inline-block",
                            color: "#666"
                          },
                          children: "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uCCAD\uAC01\uD559\uBD80 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uD559\uC0AC"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uAC15\uB0A8\uAD6C \uBAA9\uB828\uC5B4\uB9B0\uC774\uC9D1",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uB3D9\uB300\uBB38\uC7A5\uC560\uC778\uC885\uD569\uBCF5\uC9C0\uAD00",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail1" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail1", children: " " }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "9 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail2", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail2", className: "add_title", children: "\uCD5C\uC720\uB9BC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uC5B8\uC5B4\uC7AC\uD65C\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "div",
                        {
                          style: {
                            lineHeight: "22px",
                            display: "inline-block",
                            color: "#666"
                          },
                          children: "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uBCD1\uB9AC\uD559\uACFC \uD559\uC0AC"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uC774\uD654\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail2" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail2", children: " " }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "8 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail3", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail3", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail3", className: "add_title", children: "\uC1A1\uC740\uACBD" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uC5B8\uC5B4\uCE58\uB8CC\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
                        "div",
                        {
                          style: {
                            lineHeight: "22px",
                            display: "inline-block",
                            color: "#666"
                          },
                          children: [
                            "\uD55C\uB9BC\uB300\uD559\uAD50 \uBCF4\uAC74\uACFC\uD559\uB300\uD559\uC6D0 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uD559\uC0AC",
                            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                            "\uD55C\uB9BC\uB300\uD559\uAD50 \uC5B8\uC5B4\uCCAD\uAC01\uD559\uBD80 \uC5B8\uC5B4\uBCD1\uB9AC\uD559 \uC11D\uC0AC"
                          ]
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uB300\uC804\uB2E4\uBB38\uD654\uAC00\uC815\uC9C0\uC6D0\uC13C\uD130 \uC5B8\uC5B4\uC9C0\uB3C4\uC0AC",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uC11C\uC6B8\uC911\uACC4\uC0AC\uD68C\uBCF5\uC9C0\uAD00 \uC544\uB3D9\uBC1C\uB2EC\uC9C0\uC6D0\uC13C\uD130 \uC5B8\uC5B4\uCE58\uB8CC\uC0AC",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC5B8\uC5B4\uCE58\uB8CC\uC0AC"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail3" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail3", children: " " }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "6 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail5", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail5", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail5", className: "add_title", children: "\uC2EC\uC131\uC2E4" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uD559\uC2B5\uC9C0\uB3C4 / \uAC00\uC871\uC0C1\uB2F4 / \uC131\uC778\uC0C1\uB2F4" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { style: { lineHeight: "22px", display: "inline-block", color: "#666" }, children: "\uC11C\uC6B8\uC5EC\uC790\uB300\uD559\uAD50 \uC0AC\uD68C\uBCF5\uC9C0\u2024\uAE30\uB3C5\uAD50\uB300\uD559\uC6D0 \uAC00\uC871\uC0C1\uB2F4 \uC11D\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uD568\uAED8\uD558\uB294\uC544\uB3D9\uCCAD\uC18C\uB144\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uB3C4\uBD09\uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail5" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail5", children: " " }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "3 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail7", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail7", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail7", className: "add_title", children: "\uC774\uD61C\uC9C4" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uBBF8\uC220\uCE58\uB8CC\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { style: { lineHeight: "22px", display: "inline-block", color: "#666" }, children: "\uCC28\uC758\uACFC\uB300\uD559\uAD50 \uBBF8\uC220\uCE58\uB8CC\uB300\uD559\uC6D0 \uC784\uC0C1\uBBF8\uC220\uCE58\uB8CC\uD559 \uC11D\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uACE0\uB824\uB300\uD559\uAD50 \uAD6C\uB85C\uBCD1\uC6D0",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uC778\uCC9C \uD504\uB77C\uC784\uC544\uB3D9\uBC1C\uB2EC\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uB0A8\uC591\uC8FC \uAFC8\uC790\uB78C \uC5B8\uC5B4\uC2EC\uB9AC\uBC1C\uB2EC\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail7" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail7", children: " " }) })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_li_teacher ", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "sound_only", children: "1 " }),
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("ul", { className: "gall_con", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "gall_href", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail8", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "profile", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
                        "img",
                        {
                          src: REACT_APP_URL + "/image/no_image.png",
                          align: "absmiddle",
                          border: 0
                        }
                      ) }),
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { className: "pr_btn", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail8", children: "\uD504\uB85C\uD544 \uBCF4\uAE30" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("li", { className: "gall_text_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail8", className: "add_title", children: "\uC190\uC815\uADDC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("b", { style: { color: "#333" }, children: "\uC2EC\uB9AC\uCE58\uB8CC/\uC2EC\uB9AC\uAC80\uC0AC" }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block", color: "#666" }, children: [
                        "\uAC00\uD1A8\uB9AD\uB300\uD559\uAD50 \uC0AC\uD68C\uACFC\uD559\uBD80 \uC2EC\uB9AC/\uC0AC\uD68C\uBCF5\uC9C0\uD559\uACFC \uD559\uC0AC",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\uC131\uC2E0\uC5EC\uC790\uB300\uD559\uAD50 \uC77C\uBC18\uB300\uD559\uC6D0 \uC74C\uC545\uCE58\uB8CC\uD559\uACFC \uC74C\uC545\uCE58\uB8CC \uC804\uACF5 \uC11D\uC0AC"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { style: { lineHeight: "22px", display: "inline-block" }, children: [
                        "\u524D) \uAD6D\uAD70\uC218\uB3C4\uBCD1\uC6D0",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uBD84\uB2F9\uC0C1\uD0D1\uCD08\uB4F1\uD559\uAD50 \uD2B9\uC218\uBC18",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uC11C\uC6B8\uC0C1\uB2F4\uC2EC\uB9AC\uC5F0\uAD6C\uC18C",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uC11C\uC6B8\uAE4C\uB9AC\uB530\uC2A4\uC54C\uCF54\uC62C\uC0C1\uB2F4\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uCCAD\uC18C\uB144\uD76C\uB9DD\uC7AC\uB2E8",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u524D) \uB450\uADF8\uB8E8\uC544\uB3D9\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uD55C\uC2E0\uD50C\uB7EC\uC2A4\uCF00\uC5B4",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uC804\uAD6D\uC74C\uC545\uCE58\uB8CC\uC0AC\uD611\uD68C",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uD5EC\uB85C\uC2A4\uB9C8\uC77C",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uB9C8\uC74C\uACFC \uC74C\uC545 \uCE58\uB8CC\uCEE4\uBBA4\uB2C8\uD2F0",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uC131\uC2E0\uC5EC\uB300 \uCD9C\uAC15",
                        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                        "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("p", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail8" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_react_router_dom24.Link, { to: "/board/introduce/teacher/teacherdetail8", children: " " }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "bo_fx" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "bo_sch", style: { marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("fieldset", { id: "bo_sch", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("legend", { children: "\uAC8C\uC2DC\uBB3C \uAC80\uC0C9" }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("form", { name: "fsearch", method: "get", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "teacher" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("input", { type: "hidden", name: "sop", defaultValue: "and" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { htmlFor: "sfl", className: "sound_only", children: "\uAC80\uC0C9\uB300\uC0C1" }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("select", { name: "sfl", id: "sfl", children: [
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "wr_subject", children: "\uC81C\uBAA9" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "wr_content", children: "\uB0B4\uC6A9" }),
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "wr_subject||wr_content", children: "\uC81C\uBAA9+\uB0B4\uC6A9" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { htmlFor: "stx", className: "sound_only", children: [
              "\uAC80\uC0C9\uC5B4",
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("strong", { className: "sound_only", children: " \uD544\uC218" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "input",
              {
                type: "text",
                name: "stx",
                defaultValue: "",
                required: "",
                id: "stx",
                className: "frm_input required",
                size: 15,
                maxLength: 20
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              "input",
              {
                type: "image",
                defaultValue: "\uAC80\uC0C9",
                src: REACT_APP_URL + "/image/btn_sch.gif",
                title: "\uAC80\uC0C9",
                className: "btn_sch"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb04 a {color:#a99808;}
    .subNav ul li.lnb04 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Teacher_default = IntroduceTeacher;

// app/routes/board/programs/cure/CureNaviTab.js
var CureNaviTab_exports = {};
__export(CureNaviTab_exports, {
  CureNaviTab: () => CureNaviTab,
  default: () => CureNaviTab_default
});
var import_react33 = require("react"), import_react_router_dom25 = require("react-router-dom");
var import_jsx_runtime28 = require("react/jsx-runtime");
function CureNaviTab() {
  let location = (0, import_react_router_dom25.useLocation)(), [activeClass, setActiveClass] = (0, import_react33.useState)("");
  return (0, import_react33.useEffect)(() => {
    location.pathname === "/board/programs/cure/detail" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curedetail").className = "on") : location.pathname === "/board/programs/cure/language" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curelang").className = "on") : location.pathname === "/board/programs/cure/notice" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curenotice").className = "on") : location.pathname === "/board/programs/cure/play" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("cureplay").className = "on") : location.pathname === "/board/programs/cure/art" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("cureart").className = "on") : location.pathname === "/board/programs/cure/sense" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curesense").className = "on") : location.pathname === "/board/programs/cure/group" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curegroup").className = "on") : location.pathname === "/board/programs/cure/family" ? (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curefamily").className = "on") : (document.getElementById("curelist").getElementsByTagName("li").className = "off", document.getElementById("curedetail").className = "on");
  }, [location]), /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "tabgroup", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "tabnavi", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("ul", { id: "curelist", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curedetail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/detail", children: "\uC804\uCCB4" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "cureaba", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "ABA" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "cureesdm", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "ESDM" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curechild", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uCCAD\uC18C\uB144\uC0C1\uB2F4" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "cureadult", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/detail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uC131\uC778\uC0C1\uB2F4" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curelang", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/language", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uC5B8\uC5B4\uCE58\uB8CC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curenotice", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/notice", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uC778\uC9C0\uD559\uC2B5" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "cureplay", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/play", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uB180\uC774\uCE58\uB8CC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "cureart", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/art", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uBBF8\uC220\uCE58\uB8CC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curesense", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/sense", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curegroup", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/group", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uADF8\uB8F9\uCE58\uB8CC" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/cure/family", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uAC00\uC871\uC0C1\uB2F4" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("li", { id: "curefamily", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_router_dom25.Link, { to: "/board/programs/psytest/detail", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: "\uAC80\uC0AC\uD504\uB85C\uADF8\uB7A8" }) }) })
  ] }) }) }) });
}
var CureNaviTab_default = CureNaviTab;

// app/routes/board/community/notice/Detail1.js
var Detail1_exports = {};
__export(Detail1_exports, {
  NoticeDetail: () => NoticeDetail,
  default: () => Detail1_default
});
var import_react34 = require("react"), import_react_router_dom26 = require("react-router-dom");
var import_jsx_runtime29 = require("react/jsx-runtime");
function NoticeDetail() {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(import_jsx_runtime29.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { id: "bo_v_table", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h1", { id: "bo_v_title", children: "\uD648\uD398\uC774\uC9C0 \uC624\uD508 \uC548\uB0B4 " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { id: "bo_v_con", children: [
              "\uC548\uB155\uD558\uC138\uC694.",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
              "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130(\uAD6C. \uD568\uAED8\uD558\uB294\uC544\uB3D9\uCCAD\uC18C\uB144\uC13C\uD130) \uD648\uD398\uC774\uC9C0\uAC00 \uC624\uD508\uD558\uC600\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
              "PC\uC640 \uC2A4\uB9C8\uD2B8\uD3F0\uC5D0\uC11C \uBCF4\uB2E4 \uAC04\uD3B8\uD558\uAC8C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
              "\uC55E\uC73C\uB85C \uB9CE\uC740 \uAD00\uC2EC \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {}),
              "\uAC10\uC0AC\uD569\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("section", { id: "bo_vc", style: { display: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("h2", { children: "\uB313\uAE00\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { id: "bo_v_top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("ul", { className: "bo_v_nb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_router_dom26.Link, { to: "/board/community/notice/detail2", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
            " "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_react_router_dom26.Link, { to: "/board/community/notice/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    #bo_v_con { margin-top: 20px;}    
`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail1_default = NoticeDetail;

// app/routes/board/community/notice/Detail2.js
var Detail2_exports = {};
__export(Detail2_exports, {
  NoticeDetail: () => NoticeDetail2,
  default: () => Detail2_default
});
var import_react35 = require("react"), import_react_router_dom27 = require("react-router-dom");
var import_jsx_runtime30 = require("react/jsx-runtime");
function NoticeDetail2() {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { id: "bo_v_table", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h1", { id: "bo_v_title", children: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 OPEN EVENT " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { id: "bo_v_con", children: [
              "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130\uC5D0\uC11C \uC624\uD508 \uC774\uBCA4\uD2B8\uB97C \uC9C4\uD589\uC911\uC785\uB2C8\uB2E4. ",
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("br", {}),
              "\uC774\uBCA4\uD2B8 \uAE30\uAC04 \uC911 \uCD08\uAE30\uC0C1\uB2F4\uC744 \uBB34\uB8CC\uB85C \uC9C4\uD589\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. ",
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("br", {}),
              "\uB9CE\uC740 \uAD00\uC2EC \uB9CE\uC740 \uCC38\uC5EC \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4. ^\u3161^ ",
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("br", {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { id: "bo_v_img", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("img", { alt: "\uACF5\uC9C0\uC0AC\uD56D2", src: REACT_APP_URL + "/image/noticedetail2.jpg" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("section", { id: "bo_vc", style: { display: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h2", { children: "\uB313\uAE00\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { id: "bo_v_top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("ul", { className: "bo_v_nb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_router_dom27.Link, { to: "/board/community/notice/detail1", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_router_dom27.Link, { to: "/board/community/notice/detail3", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
            " "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_router_dom27.Link, { to: "/board/community/notice/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    #bo_v_con { margin-top: 20px;}    
`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail2_default = NoticeDetail2;

// app/routes/board/community/notice/Detail3.js
var Detail3_exports = {};
__export(Detail3_exports, {
  NoticeDetail: () => NoticeDetail3,
  default: () => Detail3_default
});
var import_react36 = require("react"), import_react_router_dom28 = require("react-router-dom");
var import_jsx_runtime31 = require("react/jsx-runtime");
function NoticeDetail3() {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { id: "bo_v_table", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h1", { id: "bo_v_title", children: "\uC0AC\uD68C\uC801 \uAC70\uB9AC\uB450\uAE30 4\uB2E8\uACC4 \uAE30\uAC04 \uC815\uC0C1 \uC218\uC5C5 " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { id: "bo_v_con", children: [
              "\uC0AC\uD68C\uC801 \uAC70\uB9AC\uB450\uAE30 4\uB2E8\uACC4 \uAE30\uAC04 \uB3D9\uC548 \uBCF8 \uC13C\uD130\uB294 ",
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {}),
              "\uBC29\uC5ED\uC218\uCE59\uC744 \uC900\uC218\uD558\uBA70 \uC815\uC0C1 \uC218\uC5C5 \uC9C4\uD589\uB429\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {}),
              "\uAC10\uC0AC\uD569\uB2C8\uB2E4 ^^",
              /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { id: "bo_v_img", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("img", { alt: "\uACF5\uC9C0\uC0AC\uD56D2", src: REACT_APP_URL + "/image/noticedetail3.png" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("section", { id: "bo_vc", style: { display: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { children: "\uB313\uAE00\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { id: "bo_v_top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("ul", { className: "bo_v_nb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_router_dom28.Link, { to: "/board/community/notice/detail2", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_router_dom28.Link, { to: "/board/community/notice/detail3", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
            " "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_react_router_dom28.Link, { to: "/board/community/notice/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    #bo_v_con { margin-top: 20px;}    
`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail3_default = NoticeDetail3;

// app/routes/board/community/notice/Detail4.js
var Detail4_exports = {};
__export(Detail4_exports, {
  NoticeDetail: () => NoticeDetail4,
  default: () => Detail4_default
});
var import_react37 = require("react"), import_react_router_dom29 = require("react-router-dom");
var import_jsx_runtime32 = require("react/jsx-runtime");
function NoticeDetail4() {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(import_jsx_runtime32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { id: "bo_v_table", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h1", { id: "bo_v_title", children: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC6B4\uC601\uC2DC\uAC04 \uC548\uB0B4 " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { id: "bo_v_con", children: [
              "\uC548\uB155\uD558\uC138\uC694. \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC6B4\uC601 \uC2DC\uAC04\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {}),
              "\uAC01 \uCE58\uB8CC\uBCC4 \uC120\uC0DD\uB2D8\uAED8\uC11C \uAC00\uB2A5\uD55C \uC218\uC5C5 \uC2DC\uAC04\uC740 \uC0C1\uC774\uD558\uBBC0\uB85C ",
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {}),
              "\uC13C\uD130\uB85C \uC804\uD654 \uC8FC\uC2DC\uAC70\uB098 \uCE74\uCE74\uC624\uD1A1\uC73C\uB85C \uBB38\uC758 \uC8FC\uC2DC\uBA74 \uC790\uC138\uD558\uAC8C \uC2DC\uAC04 \uC548\uB0B4\uB97C \uD574 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4. ",
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {}),
              "\uAC10\uC0AC\uD569\uB2C8\uB2E4. ^^",
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {})
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { id: "bo_v_img", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { alt: "\uACF5\uC9C0\uC0AC\uD56D2", src: REACT_APP_URL + "/image/noticedetail4.png" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("section", { id: "bo_vc", style: { display: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h2", { children: "\uB313\uAE00\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { id: "bo_v_top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("ul", { className: "bo_v_nb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_router_dom29.Link, { to: "/board/community/notice/detail3", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_router_dom29.Link, { to: "/board/community/notice/detail5", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
            " "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_router_dom29.Link, { to: "/board/community/notice/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    #bo_v_con { margin-top: 20px;}    
`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail4_default = NoticeDetail4;

// app/routes/board/community/notice/Detail5.js
var Detail5_exports = {};
__export(Detail5_exports, {
  NoticeDetail: () => NoticeDetail5,
  default: () => Detail5_default
});
var import_react38 = require("react"), import_react_router_dom30 = require("react-router-dom");
var import_jsx_runtime33 = require("react/jsx-runtime");
function NoticeDetail5() {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { id: "bo_v_table", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h1", { id: "bo_v_title", children: "\uC2E0\uD559\uAE30 \uC885\uD569 \uC2EC\uB9AC\uAC80\uC0AC/\uBC1C\uB2EC \uAC80\uC0AC 10% \uD560\uC778 " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { id: "bo_v_con", children: [
              "\uC548\uB155\uD558\uC138\uC694.",
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC2E0\uD559\uAE30 ",
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("u", { children: "EVENT" }),
              " \uC9C4\uD589\uD569\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              "\uAC80\uC0AC \uD560\uC778\uC740 \uC120\uCC29\uC21C\uC73C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              "\uBB38\uC758\uC0AC\uD56D\uC740 ",
              REACT_APP_CENTER_TEL,
              "\uB85C \uC5F0\uB77D\uC8FC\uC2DC\uBA74",
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              "\uC790\uC138\uD55C \uC0C1\uB2F4 \uB3C4\uC640\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {}),
              "\uAC10\uC0AC\uD569\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("section", { id: "bo_vc", style: { display: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("h2", { children: "\uB313\uAE00\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { id: "bo_v_top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("ul", { className: "bo_v_nb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_router_dom30.Link, { to: "/board/community/notice/detail4", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
            " "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_router_dom30.Link, { to: "/board/community/notice/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    #bo_v_con { margin-top: 20px;}    
`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail5_default = NoticeDetail5;

// app/routes/board/consult/askanswer/Detail.js
var Detail_exports = {};
__export(Detail_exports, {
  AskAnswerDetail: () => AskAnswerDetail,
  default: () => Detail_default
});
var import_react39 = require("react"), import_react_router_dom31 = require("react-router-dom");
var import_jsx_runtime34 = require("react/jsx-runtime");
function AskAnswerDetail() {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(AskAnswerSubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { children: "\uC0C1\uB2F4/\uBB38\uC758" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("span", { className: "fb", children: "\uC0C1\uB2F4/\uBB38\uC758" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "bu1", children: "\uBB38\uC758\uAC00 \uB9CE\uC544 \uC628\uB77C\uC778 \uC0C1\uB2F4\uC740 \uC900\uBE44\uC911\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { id: "bo_v_table", children: "\uC0C1\uB2F4/\uBB38\uC758" }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h1", { id: "bo_v_title", children: "\uBB38\uC758\uAC00 \uB9CE\uC544 \uC628\uB77C\uC778 \uC0C1\uB2F4\uC740 \uC900\uBE44\uC911\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4. " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { id: "bo_v_top", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/consult/askbaord/detail?idx=1", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/consult/askbaord/detail?idx=1", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("ul", { className: "bo_v_com", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/write", className: "btn_b01", children: "\uC218\uC815" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/board", className: "btn_b01", children: "\uC0AD\uC81C" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/write", className: "btn_b02", children: "\uAE00\uC4F0\uAE30" }) }),
              " "
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { id: "bo_v_img" }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { id: "bo_v_con", children: [
              " ",
              "\uBB38\uC758\uAC00 \uB9CE\uC544 \uC628\uB77C\uC778 \uC0C1\uB2F4\uC740 \uC900\uBE44\uC911\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {}),
              "\uB300\uD45C\uBC88\uD638 ",
              REACT_APP_CENTER_TEL,
              "\uB85C \uC5F0\uB77D\uC8FC\uC2DC\uBA74 \uCE5C\uC808\uD788 \uC548\uB0B4\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {}),
              "\uAC10\uC0AC\uD569\uB2C8\uB2E4!"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("section", { id: "bo_vc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h2", { children: "\uB2F5\uBCC0\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { id: "bo_v_bot", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("ul", { className: "bo_v_nb", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/consult/askbaord/detail?idx=1", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/consult/askbaord/detail?idx=1", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("ul", { className: "bo_v_com", children: [
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/write", className: "btn_b01", children: "\uC218\uC815" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/board", className: "btn_b01", children: "\uC0AD\uC81C" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_router_dom31.Link, { to: "/board/consult/askanswer/write", className: "btn_b02", children: "\uAE00\uC4F0\uAE30" }) }),
              " "
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb03 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail_default = AskAnswerDetail;

// app/routes/board/community/notice/Detail.js
var Detail_exports2 = {};
__export(Detail_exports2, {
  NoticeDetail: () => NoticeDetail6,
  default: () => Detail_default2
});
var import_react40 = require("react"), import_react_router_dom32 = require("react-router-dom");
var import_jsx_runtime35 = require("react/jsx-runtime");
function NoticeDetail6() {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { id: "bo_v_table", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h1", { id: "bo_v_title", children: "\uD648\uD398\uC774\uC9C0 \uC624\uD508 \uC548\uB0B4 " }) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("section", { id: "bo_v_atc", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { id: "bo_v_con", children: [
              "\uC548\uB155\uD558\uC138\uC694.",
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
              "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130(\uAD6C. \uD568\uAED8\uD558\uB294\uC544\uB3D9\uCCAD\uC18C\uB144\uC13C\uD130) \uD648\uD398\uC774\uC9C0\uAC00 \uC624\uD508\uD558\uC600\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
              "PC\uC640 \uC2A4\uB9C8\uD2B8\uD3F0\uC5D0\uC11C \uBCF4\uB2E4 \uAC04\uD3B8\uD558\uAC8C \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
              "\uC55E\uC73C\uB85C \uB9CE\uC740 \uAD00\uC2EC \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.",
              /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {}),
              "\uAC10\uC0AC\uD569\uB2C8\uB2E4."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("section", { id: "bo_vc", style: { display: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { children: "\uB313\uAE00\uBAA9\uB85D" }),
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { id: "bo_vc_empty", children: "\uB4F1\uB85D\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { id: "bo_v_top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("ul", { className: "bo_v_nb", children: [
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_router_dom32.Link, { to: "/board/community/notice/deatil?idx=1", className: "btn_b01", children: "\uC774\uC804\uAE00" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_router_dom32.Link, { to: "/board/community/notice/deatil?idx=3", className: "btn_b01", children: "\uB2E4\uC74C\uAE00" }) }),
            " "
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("ul", { className: "bo_v_com", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react_router_dom32.Link, { to: "/board/community/notice/board", className: "btn_b01", children: "\uBAA9\uB85D" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    #bo_v_con { margin-top: 20px;}    
`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Detail_default2 = NoticeDetail6;

// app/routes/board/community/UsualQuestion.js
var UsualQuestion_exports = {};
__export(UsualQuestion_exports, {
  UsualQuestion: () => UsualQuestion,
  default: () => UsualQuestion_default
});
var import_react41 = require("react"), import_react_router_dom33 = require("react-router-dom");
var import_react42 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
function UsualQuestion() {
  let [idxNum, setIdxNum] = (0, import_react42.useState)(0), [idxStyle, setIdxStyle] = (0, import_react42.useState)(), openpanel = (setNum) => {
    idxNum === setNum && document.getElementById("panelm" + setNum).className !== "panel" ? (document.getElementById("panelm" + setNum).style = "display:none;", document.getElementById("panelm" + setNum).className = "panel", document.getElementById("listm" + setNum).className = "") : (idxNum !== 0 && (document.getElementById("panelm" + idxNum).style = "display:none;", document.getElementById("panelm" + idxNum).className = "panel", document.getElementById("listm" + idxNum).className = ""), document.getElementById("panelm" + setNum).style = "display:block;", document.getElementById("panelm" + setNum).className = "panel open", document.getElementById("listm" + setNum).className = "active"), setIdxNum(setNum);
  }, [isMobile, setIsMobile] = (0, import_react42.useState)(!1);
  return (0, import_react42.useEffect)(() => {
    if (document.getElementById("usualcss")) {
      var link = document.getElementById("usualcss");
      link.href = "/styles/css/usualcss.css";
    } else {
      var link = document.createElement("link");
      link.id = "usualcss", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/usualcss.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    if (document.getElementById("fd_style")) {
      var link = document.getElementById("fd_style");
      link.href = "/styles/css/fd_style.css";
    } else {
      var link = document.createElement("link");
      link.id = "fd_style", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/fd_style.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    return () => {
    };
  }), /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { children: "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "fb", children: "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "bu1", children: "\uC790\uC8FC \uBB38\uC758\uB418\uB294 \uB0B4\uC6A9\uB4E4\uC758 \uC9C8\uBB38\uACFC \uB2F5\uBCC0\uC785\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("h2", { id: "container_title", children: [
          "\uC790\uC8FC\uBB3B\uB294\uC9C8\uBB38\uB2F5\uBCC0",
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { className: "sound_only", children: " \uBAA9\uB85D" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { id: "bo_list", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "bo_fx" }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
            "form",
            {
              name: "fboardlist",
              id: "fboardlist",
              action: "./board_list_update.php",
              onsubmit: "return fboardlist_submit(this);",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "faq" }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "page", defaultValue: 1 }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "sw", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "tbl_head01 tbl_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("ul", { id: "fd_accordion", className: "accordion", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(1), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react_router_dom33.Link, { className: "accordion-opener", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uC804\uD654\uC608\uC57D\uC774 \uD544\uC694\uD55C\uAC00\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm1",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: [
                                "\uBAA8\uB4E0 \uC0C1\uB2F4\uC740 \uC608\uC57D\uC81C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uC804\uD654 \uC8FC\uC2DC\uBA74 \uAC00\uB2A5\uD55C \uB0A0\uC9DC\uC640 \uC2DC\uAC04 \uCE5C\uC808\uD788 \uC0C1\uB2F4\uD574 \uB4DC\uB9AC\uBA70, \uC0C1\uB2F4 \uB0A0 \uB9DE\uB294 \uC2DC\uAC04\uC5D0 \uBC29\uBB38\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4. \uBC29\uBB38\uC77C \uD558\uB8E8 \uC804 \uC608\uC57D\uD655\uC778 \uBB38\uC790 \uB4DC\uB9BD\uB2C8\uB2E4.",
                                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
                                "\uD3C9\uC77C 10\uC2DC~19\uC2DC, \uD1A0\uC694\uC77C 9\uC2DC~15\uC2DC(\uC77C\uC694\uC77C,\uACF5\uD734\uC77C \uD734\uBB34)"
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(2), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uC0C1\uB2F4\uC2DC\uAC04\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm2",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: "\uCC98\uC74C \uC13C\uD130\uB97C \uBC29\uBB38\uD560 \uB54C \uCD08\uAE30\uC0C1\uB2F4\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4. \uCD08\uAE30 \uC0C1\uB2F4 \uC18C\uC694\uC2DC\uAC04\uC740 \uC544\uB3D9\uAD00\uCC30 20~30\uBD84, \uBD80\uBAA8\uC0C1\uB2F4 20~30\uBD84, \uD3C9\uADE0 50\uBD84 \uC18C\uC694\uB41C\uB2E4\uACE0 \uC0DD\uAC01\uD558\uC2DC\uBA74 \uB429\uB2C8\uB2E4. \uBAA8\uB4E0 \uCE58\uB8CC \uC18C\uC694\uC2DC\uAC04\uC740 40\uBD84, \uBD80\uBAA8\uC0C1\uB2F4 10\uBD84\uC73C\uB85C \uCD1D 50\uBD84\uC785\uB2C8\uB2E4."
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(3), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uC8FC\uCC28\uC7A5\uC774\uC6A9\uC740 \uAC00\uB2A5\uD55C\uAC00\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm3",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: [
                                "\uC13C\uD130 \uAC74\uBB3C \uC785\uAD6C \uB9DE\uC740\uD3B8\uC5D0 4\uACF5\uC601\uC8FC\uCC28\uC7A5\uC5D0 \uC8FC\uCC28\uD558\uC2DC\uBA74 \uC8FC\uCC28\uAD8C\uC744 \uBC1C\uBD80\uD574\uB4DC\uB9BD\uB2C8\uB2E4. ",
                                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
                                "\uB354 \uAD81\uAE08\uD558\uC2E0 \uC0AC\uD56D\uC740 \uC804\uD654 \uC8FC\uC2DC\uBA74 \uCE5C\uC808\uD788 \uC0C1\uB2F4 \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm4", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(4), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uAC80\uC0AC\uBE44\uC6A9\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm4",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: "\uC544\uC774\uB9C8\uB2E4 \uB9DE\uB294 \uAC80\uC0AC\uC758 \uC885\uB958\uC640 \uB0B4\uC6A9\uC774 \uBAA8\uB450 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC804\uD654\uBB38\uC758\uD574\uC8FC\uC2DC\uBA74 \uC790\uC138\uD788 \uC548\uB0B4\uD574\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm5", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(5), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uCE58\uB8CC \uC18C\uC694\uC2DC\uAC04\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm5",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: "\uBAA8\uB4E0 \uCE58\uB8CC \uC18C\uC694\uC2DC\uAC04\uC740 \uBD80\uBAA8\uC0C1\uB2F4 \uD3EC\uD568 50\uBD84\uC785\uB2C8\uB2E4. \uB2E8, \uC544\uB3D9\uC758 \uD2B9\uC131\uC0C1 \uC2DC\uAC04\uC774 \uC870\uC808\uB420 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm6", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(6), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uCE58\uB8CC \uAD50\uC721\uACFC\uC815\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm6",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: [
                                "1. \uC0C1\uB2F4\uC608\uC57D : \uBC29\uBB38\uC804 \uC804\uD654 \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uBC29\uBB38\uC0C1\uB2F4 \uC77C\uC815\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4.",
                                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
                                "2. \uCD08\uAE30\uC0C1\uB2F4 : \uBD80\uBAA8\uB2D8\uACFC \uC544\uB3D9\uC774 \uC13C\uD130\uC5D0 \uD568\uAED8 \uB0B4\uC6D0\uD558\uC5EC \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uC5B4\uB5A4 \uCE58\uB8CC\uAD50\uC721\uC774 \uD544\uC694\uD55C\uC9C0 \uACB0\uC815\uD569\uB2C8\uB2E4.",
                                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
                                "3. \uCE58\uB8CC\uAD50\uC721 \uBC0F \uD3C9\uAC00 : \uC544\uC774\uC5D0\uAC8C \uD544\uC694\uD55C \uAC1C\uC778\uBCC4 \uB9DE\uCDA4\uCE58\uB8CC\uAC00 \uC9C4\uD589\uB418\uBA70 \uB3D9\uC2DC\uC5D0 \uD3C9\uAC00\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4."
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm7", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(7), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uC5B4\uB5A4 \uCE58\uB8CC\uB97C \uBC1B\uC544\uC57C \uD558\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm7",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: [
                                "\uC6D0\uC778\uC5D0 \uB530\uB978 \uCE58\uB8CC\uBC29\uBC95\uC774 \uC544\uC774\uB9C8\uB2E4 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                                /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {}),
                                "\uB9DE\uCDA4\uAC80\uC0AC\uB97C \uC9C4\uD589\uD55C \uD6C4 \uC6D0\uC778\uC744 \uD30C\uC545\uD558\uC5EC \uB9DE\uB294 \uCE58\uB8CC\uB97C \uAD8C\uC720 \uB4DC\uB9AC\uAC70\uB098, \uD589\uB3D9\uAD00\uCC30 \uD6C4 \uC0C1\uB2F4\uC744 \uD1B5\uD558\uC5EC \uCE58\uB8CC\uB97C \uAD8C\uC720 \uB4DC\uB9BD\uB2C8\uB2E4."
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm8", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(8), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uBD80\uBAA8\uB3C4 \uD568\uAED8 \uCC38\uC5EC\uD558\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm8",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: "\uBCF4\uD1B5 \uC544\uC774\uC640 \uC120\uC0DD\uB2D8 1:1\uCE58\uB8CC\uB85C \uC9C4\uD589\uB418\uACE0 \uC788\uC73C\uB098 \uC544\uC774\uC758 \uBD84\uB9AC\uAC00 \uBD88\uAC00\uB2A5 \uD55C \uACBD\uC6B0, \uBD80\uBAA8\uB2D8\uC758 \uAC1C\uC120\uC774 \uD544\uC694\uD55C \uACBD\uC6B0 \uD568\uAED8 \uCC38\uC5EC\uD558\uC5EC \uC9C4\uD589\uD558\uAE30\uB3C4 \uD569\uB2C8\uB2E4. \uB610\uD55C \uCE58\uB8CC \uD6C4 \uC120\uC0DD\uB2D8\uACFC \uBD80\uBAA8\uB2D8\uC758 \uC0C1\uB2F4\uC2DC\uAC04\uC744 \uAC16\uC2B5\uB2C8\uB2E4."
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm9", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(9), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uB300\uAE30\uC2E4\uC774 \uC788\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm9",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: "\uD734\uAC8C\uC2E4\uACFC \uB300\uAE30\uC2E4 \uACF5\uAC04\uC774 \uB9C8\uB828\uB418\uC5B4 \uC788\uC73C\uBA70, \uBE44\uCE58\uB41C \uB3C4\uC11C\uB97C \uC774\uC6A9\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("li", { id: "listm10", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { onClick: () => openpanel(10), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("a", { className: "accordion-opener", href: "#open-panel", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { margin: "0 10px" }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_q.gif" }) }),
                      "\uC0C1\uB2F4 \uBC1B\uC740 \uAE30\uB85D\uC774 \uB0A8\uB098\uC694?",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
                      "div",
                      {
                        id: "panelm10",
                        className: "panel",
                        style: { visibility: "visible", display: "none" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { style: { marginRight: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("img", { src: REACT_APP_URL + "/image/icon_a.gif" }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
                            "div",
                            {
                              style: {
                                position: "relative",
                                left: 60,
                                top: "-20px",
                                width: "80%",
                                lineHeight: "18px"
                              },
                              children: "\uC13C\uD130\uB294 \uBCD1\uC6D0\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC5D0 \uAE30\uB85D\uC744 \uB0A8\uAE30\uAC70\uB098 \uC800\uC7A5\uD560 \uC758\uBB34\uB3C4, \uAD00\uB828\uAE30\uAD00\uC5D0 \uC81C\uACF5\uD560 \uC758\uBB34\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4. \uAE30\uB85D \uB54C\uBB38\uC5D0 \uBD88\uC774\uC775\uC744 \uB2F9\uD558\uC2E4 \uC77C\uC740 \uC804\uD600 \uAC71\uC815\uD558\uC9C0 \uC54A\uC73C\uC154\uB3C4 \uB429\uB2C8\uB2E4."
                            }
                          )
                        ]
                      }
                    )
                  ] })
                ] }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "bo_sch", style: { marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("fieldset", { id: "bo_sch", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("legend", { children: "\uAC8C\uC2DC\uBB3C \uAC80\uC0C9" }),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("form", { name: "fsearch", method: "get", children: [
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "faq" }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: "sop", defaultValue: "and" }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("label", { htmlFor: "sfl", className: "sound_only", children: "\uAC80\uC0C9\uB300\uC0C1" }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("select", { name: "sfl", id: "sfl", children: [
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("option", { value: "wr_subject", children: "\uC81C\uBAA9" }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("option", { value: "wr_content", children: "\uB0B4\uC6A9" }),
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("option", { value: "wr_subject||wr_content", children: "\uC81C\uBAA9+\uB0B4\uC6A9" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("label", { htmlFor: "stx", className: "sound_only", children: [
              "\uAC80\uC0C9\uC5B4",
              /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("strong", { className: "sound_only", children: " \uD544\uC218" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "input",
              {
                type: "text",
                name: "stx",
                defaultValue: "",
                required: "",
                id: "stx",
                className: "frm_input required",
                size: 15,
                maxLength: 20
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
              "input",
              {
                type: "image",
                defaultValue: "\uAC80\uC0C9",
                src: REACT_APP_URL + "/image/btn_sch.gif",
                title: "\uAC80\uC0C9",
                className: "btn_sch"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb02 a {color:#a99808;}
    .subNav ul li.lnb02 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("br", {})
      ] })
    ] })
  ] });
}
var UsualQuestion_default = UsualQuestion;

// app/routes/board/consult/askanswer/Board.js
var Board_exports = {};
__export(Board_exports, {
  AskAnswerBoard: () => AskAnswerBoard,
  default: () => Board_default
});
var import_react43 = require("react"), import_react_router_dom34 = require("react-router-dom");
var import_jsx_runtime37 = require("react/jsx-runtime");
function AskAnswerBoard() {
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(AskAnswerSubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
    
    #GNB @media all and (min-width:981px) and (max-width:2000px){
        #board_container {width:980px; margin:0 auto;}
    
            
    }
    @media all and (min-width:1px) and (max-width:980px){
        #board_container {width:auto !important; padding:0 10px; margin:0 auto;}
    
    }
    `
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: "\uC0C1\uB2F4/\uBB38\uC758" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "fb", children: "\uC0C1\uB2F4/\uBB38\uC758" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("p", { className: "bu1", children: "\uBB38\uC758\uAC00 \uB9CE\uC544 \uC628\uB77C\uC778 \uC0C1\uB2F4\uC740 \uC900\uBE44\uC911\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("h2", { id: "container_title", children: [
          "\uC0C1\uB2F4/\uBB38\uC758",
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "sound_only", children: " \uBAA9\uB85D" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { id: "bo_list", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "bo_fx", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("ul", { className: "btn_bo_user", children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_router_dom34.Link, { to: "/board/consult/askanswer/write", className: "btn_b02", children: "\uBB38\uC758\uD558\uAE30" }) }),
            " "
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
            "form",
            {
              name: "fboardlist",
              id: "fboardlist",
              action: "./board_list_update.php",
              onSubmit: "return fboardlist_submit(this);",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "qna" }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "page", defaultValue: 1 }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "sw", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "tbl_head01 tbl_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("table", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("colgroup", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("col", { width: "" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("col", { width: "18%" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("col", { width: "15%", align: "center" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("col", { width: "1%" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("col", { width: "1%" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("caption", { children: "\uC0C1\uB2F4/\uBB38\uC758 \uBAA9\uB85D" }),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("th", { scope: "col", children: "\uC81C\uBAA9" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("th", { scope: "col", children: "\uAE00\uC4F4\uC774" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("th", { scope: "col", children: "\uC9C4\uD589\uD604\uD669" })
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("tr", { className: "bo_notice", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("td", { className: "td_subject", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_react_router_dom34.Link, { to: "/board/consult/askanswer/detail?idx=1", children: [
                      "\uBB38\uC758\uAC00 \uB9CE\uC544 \uC628\uB77C\uC778 \uC0C1\uB2F4\uC740 \uC900\uBE44\uC911\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uAC10\uC0AC\uD569\uB2C8\uB2E4.",
                      " "
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("td", { className: "td_name sv_use", children: "\uAD00\uB9AC*" }),
                    /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("td", { className: "", style: { width: 60 }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                        "div",
                        {
                          style: {
                            padding: "4px 2px 0 10px",
                            width: 60,
                            height: 20,
                            background: "#5AD103",
                            color: "#fff",
                            fontWeight: "bold",
                            margin: "0 auto"
                          },
                          children: "\uD655\uC778\uC911"
                        }
                      ),
                      " "
                    ] })
                  ] }) })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "bo_fx", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("ul", { className: "btn_bo_user", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_router_dom34.Link, { onClick: () => alert("\uD604\uC7AC\uB294 \uBB38\uC758\uAC00 \uC5B4\uB835\uC2B5\uB2C8\uB2E4. \uC8C4\uC1A1\uD569\uB2C8\uB2E4."), className: "btn_b02", children: "\uBB38\uC758\uD558\uAE30" }) }),
                  " "
                ] }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("nav", { className: "pg_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("span", { className: "pg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "sound_only", children: "\uC5F4\uB9B0" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("strong", { className: "pg_current", children: "1" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "sound_only", children: "\uD398\uC774\uC9C0" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react_router_dom34.Link, { to: "/board/consult/askanswer/board?idx=3", className: "pg_page pg_end", children: "\uB9E8\uB05D" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "bo_sch", style: { marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("fieldset", { id: "bo_sch", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("legend", { children: "\uAC8C\uC2DC\uBB3C \uAC80\uC0C9" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("form", { name: "fsearch", method: "get", children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "qna" }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("input", { type: "hidden", name: "sop", defaultValue: "and" }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("label", { htmlFor: "sfl", className: "sound_only", children: "\uAC80\uC0C9\uB300\uC0C1" }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("select", { name: "sfl", id: "sfl", children: [
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "wr_subject", children: "\uC81C\uBAA9" }),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "wr_content", children: "\uB0B4\uC6A9" }),
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: "wr_subject||wr_content", children: "\uC81C\uBAA9+\uB0B4\uC6A9" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("label", { htmlFor: "stx", className: "sound_only", children: [
              "\uAC80\uC0C9\uC5B4",
              /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("strong", { className: "sound_only", children: " \uD544\uC218" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              "input",
              {
                type: "text",
                name: "stx",
                defaultValue: "",
                required: "",
                id: "stx",
                className: "frm_input required",
                size: 15,
                maxLength: 20
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              "input",
              {
                type: "image",
                defaultValue: "\uAC80\uC0C9",
                src: REACT_APP_URL + "/image/consult/btn_sch.gif",
                title: "\uAC80\uC0C9",
                className: "btn_sch"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb03 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Board_default = AskAnswerBoard;

// app/routes/board/consult/askanswer/Write.js
var Write_exports = {};
__export(Write_exports, {
  AskAnswerWrite: () => AskAnswerWrite,
  default: () => Write_default
});
var import_react44 = require("react"), import_react_router_dom35 = require("react-router-dom");
var import_jsx_runtime38 = require("react/jsx-runtime");
function AskAnswerWrite() {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(AskAnswerSubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
    
    #GNB @media all and (min-width:981px) and (max-width:2000px){
        #board_container {width:980px; margin:0 auto;}
    
            
    }
    @media all and (min-width:1px) and (max-width:980px){
        #board_container {width:auto !important; padding:0 10px; margin:0 auto;}
    
    }
    `
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: "\uC0C1\uB2F4/\uBB38\uC758" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "fb", children: "\uC0C1\uB2F4/\uBB38\uC758" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("p", { className: "bu1", children: "\uAD81\uAE08\uD55C \uC810\uC744 \uBB38\uC758\uD574\uC8FC\uC138\uC694. \uC2E0\uC18D\uD558\uAC8C \uB2F5\uBCC0\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("section", { id: "bo_w", children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h2", { id: "container_title", children: "\uC0C1\uB2F4/\uBB38\uC758 \uAE00\uC4F0\uAE30" }),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
            "form",
            {
              name: "fwrite",
              id: "fwrite",
              action: "http://www.gurislp.com/board/bbs/write_update.php",
              onSubmit: "return fwrite_submit(this);",
              method: "post",
              encType: "multipart/form-data",
              autoComplete: "off",
              style: { width: "100%" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "uid", defaultValue: 23012405234873 }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "w", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "qna" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "wr_id", defaultValue: 0 }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "sst", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "sod", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("input", { type: "hidden", name: "page", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "tbl_frm01 tbl_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("table", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tbody", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { htmlFor: "wr_name", children: [
                      "\uC774\uB984",
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_name",
                        defaultValue: "",
                        id: "wr_name",
                        required: "",
                        className: "frm_input required",
                        size: 10,
                        maxLength: 20
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { style: { visibility: "hidden", display: "none" }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { htmlFor: "wr_email", children: "\uC774\uBA54\uC77C" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_email",
                        defaultValue: "sendmail@naver.com",
                        id: "wr_email",
                        className: "frm_input email",
                        size: 50,
                        maxLength: 100
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { htmlFor: "wr_1", children: [
                      "\uC5F0\uB77D\uCC98",
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_1",
                        defaultValue: "",
                        id: "wr_1",
                        className: "frm_input",
                        size: 20,
                        maxLength: 20
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: "\uC635\uC158" }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("td", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        "input",
                        {
                          type: "checkbox",
                          id: "secret",
                          name: "secret",
                          defaultValue: "secret"
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { htmlFor: "secret", children: "\uBE44\uBC00\uAE00" })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { htmlFor: "wr_subject", children: [
                      "\uC81C\uBAA9",
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { id: "autosave_wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_subject",
                        defaultValue: "",
                        id: "wr_subject",
                        required: "",
                        className: "frm_input required",
                        size: 30,
                        maxLength: 255
                      }
                    ) }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { htmlFor: "wr_content", children: [
                      "\uB0B4\uC6A9",
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("td", { className: "wr_content", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "sound_only", children: "\uC6F9\uC5D0\uB514\uD130 \uC2DC\uC791" }),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        "textarea",
                        {
                          id: "wr_content",
                          name: "wr_content",
                          className: "",
                          maxLength: 65536,
                          style: { width: "100%" },
                          defaultValue: ""
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "sound_only", children: "\uC6F9 \uC5D0\uB514\uD130 \uB05D" }),
                      " "
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("label", { htmlFor: "wr_password", children: [
                      "\uBE44\uBC00\uBC88\uD638",
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                      "input",
                      {
                        type: "password",
                        name: "wr_password",
                        id: "wr_password",
                        required: "",
                        className: "frm_input required",
                        maxLength: 20
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { scope: "row", children: "\uC790\uB3D9\uB4F1\uB85D\uBC29\uC9C0" }),
                    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("td", { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("fieldset", { id: "captcha", className: "captcha", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("legend", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("label", { htmlFor: "captcha_key", children: "\uC790\uB3D9\uB4F1\uB85D\uBC29\uC9C0" }) }),
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                          "img",
                          {
                            src: "http://www.gurislp.com/board/plugin/kcaptcha/kcaptcha_image.php?t=1674505429459",
                            alt: "",
                            id: "captcha_img"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
                          "button",
                          {
                            type: "button",
                            id: "captcha_mp3",
                            style: { cursor: "pointer" },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", {}),
                              "\uC22B\uC790\uC74C\uC131\uB4E3\uAE30"
                            ]
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("button", { type: "button", id: "captcha_reload", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", {}),
                          "\uC0C8\uB85C\uACE0\uCE68"
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                          "input",
                          {
                            type: "text",
                            name: "captcha_key",
                            id: "captcha_key",
                            required: "",
                            className: "captcha_box required",
                            size: 6,
                            maxLength: 6
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { id: "captcha_info", children: "\uC790\uB3D9\uB4F1\uB85D\uBC29\uC9C0 \uC22B\uC790\uB97C \uC21C\uC11C\uB300\uB85C \uC785\uB825\uD558\uC138\uC694." })
                      ] }),
                      " "
                    ] })
                  ] })
                ] }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "btn_confirm", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    "input",
                    {
                      type: "submit",
                      defaultValue: "\uC791\uC131\uC644\uB8CC",
                      id: "btn_submit",
                      accessKey: "s",
                      className: "btn_submit"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react_router_dom35.Link, { to: "/board/consult/askanswer/board", className: "btn_cancel", children: "\uCDE8\uC18C" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb03 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Write_default = AskAnswerWrite;

// app/routes/board/programs/psytest/Detail.js
var Detail_exports3 = {};
__export(Detail_exports3, {
  Detail: () => Detail,
  default: () => Detail_default3
});
var import_react45 = require("react"), import_react_router_dom36 = require("react-router-dom");
var import_jsx_runtime39 = require("react/jsx-runtime");
function Detail() {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("article", { id: "ctt", className: "ctt_program", children: [
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h1", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("span", { className: "fb", children: "\uC804\uCCB4" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(PsyTestNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uC2EC\uB9AC\uD3C9\uAC00" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC801\uC751\uC5D0\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uACAA\uB294\xA0\uC544\uB3D9\xA0\uBC0F\xA0\uCCAD\uC18C\uB144,\xA0\uC131\uC778\uC744\xA0\uB300\uC0C1\uC73C\uB85C\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC778\uC9C0\uC801\xA0\uB2A5\uB825\uACFC\xA0\uC815\uC11C\xA0\uC0C1\uD0DC,\xA0\uC131\uACA9\xA0\uD2B9\uC131,\xA0\uC0AC\uD68C\uC131,\xA0\uAC00\uC871\uAD00\uACC4\xA0\uB4F1\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC804\uBC18\uC801\uC778\xA0\uC601\uC5ED\uC5D0\xA0\uB300\uD55C\xA0\uAC1D\uAD00\uC801\uC778\xA0\uD3C9\uAC00\uB97C\xA0\uC2E4\uC2DC\uD558\uC5EC\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uBD80\uC801\uC751\uC5D0\xA0\uB300\uD55C\xA0\uC6D0\uC778\uC744\xA0\uBC1D\uD600\uB0B4\uACE0,\xA0\uAC1C\uC778\uC758\xA0\uAC15\uC810\uACFC\xA0\uC57D\uC810\uC744\xA0\uD30C\uC545\uD558\uC5EC\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uAC00\uC7A5\xA0\uC801\uD569\uD558\uACE0\xA0\uD6A8\uC728\uC801\uC778\xA0\uC0C1\uB2F4\uBC29\uBC95\uC744\xA0\uBAA8\uC0C9\uD558\uB294\xA0\uACFC\uC815\uC785\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC2EC\uB9AC\uD3C9\uAC00\uB294\xA0\uD604\uC7AC\xA0\uC801\uC751\uC5D0\xA0\uD2B9\uBCC4\uD55C\xA0\uC5B4\uB824\uC6C0\uC744\xA0\uBCF4\uC774\uC9C0\xA0\uC54A\uB354\uB77C\uB3C4\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC790\uAE30\xA0\uC774\uD574\xA0\uBC0F\xA0\uC7A0\uC7AC\uB825\xA0\uAC1C\uBC1C,\xA0\uC9C4\uB85C\xA0\uD0D0\uC0C9,\xA0\uBD80\uC801\uC751\xA0\uD589\uB3D9\uC758\xA0\uC608\uBC29\uC744\xA0\uC704\uD558\uC5EC\uC11C\uB3C4\xA0\uC2E4\uC2DC\uB429\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uD2B9\uD788\xA0\uC544\uB3D9\xA0\uBC0F\xA0\uCCAD\uC18C\uB144\uC5D0\uAC8C\xA0\uC778\uC9C0\uC801,\xA0\uC0AC\uD68C\uC801,\xA0\uC2EC\uB9AC\uC801\uC73C\uB85C\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC911\uC694\uD55C\xA0\uBCC0\uD654\uAC00\xA0\uC77C\uC5B4\uB098\uB294\xA0\uC2DC\uAE30(\uCD08\uB4F1\uD559\uAD50\xA0\uCDE8\uD559\xA0\uC804,\xA0\uCD08\uB4F1\uD559\uAD50\xA04~5\uD559\uB144,\xA0\uC911\uD559\uAD50\xA03\uD559\uB144,\xA0\uACE0\uB4F1\uD559\uAD50\xA01\uD559\uB144)\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC5D0\uB294\xA0\uC6D0\uB9CC\uD55C\xA0\uD559\uAD50\uC0DD\uD65C\xA0\uC801\uC751\uACFC\xA0\uD559\uC5C5\uB2A5\uB825\uC758\xA0\uD5A5\uC0C1,\xA0\uC7A0\uC7AC\uB825\xA0\uAC1C\uBC1C,\xA0\uC9C4\uB85C\xA0\uC120\uD0DD\xA0\uB4F1\uC744\xA0\uC704\uD574\xA0\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC2EC\uB9AC\uD3C9\uAC00\uB97C\xA0\uBC1B\uC544\xA0\uBCF4\uB294\xA0\uAC83\uC774\xA0\uBC14\uB78C\uC9C1\uD569\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react_router_dom36.Link, { to: "/board/programs/psytest/simlitest", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uBC1C\uB2EC\uD3C9\uAC00\xA0(K-Bayley-\u2162)" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC601\uC720\uC544\uC758\xA0\uBC1C\uB2EC\xA0\uC218\uC900\uC744\xA0\uAC01\xA0\uC601\uC5ED(\uC778\uC9C0,\xA0\uC5B8\uC5B4,\xA0\uC815\uC11C,\xA0\uC0AC\uD68C\uC131)\uBCC4\uB85C\xA0\uD3C9\uAC00\uD558\uB294\xA0\uACFC\uC815\uC73C\uB85C,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC2E4\uC81C\xA0\uBC1C\uB2EC\xA0\uC5F0\uB839\xA0\uBC0F\xA0\uC601\uC5ED\uBCC4\xA0\uC138\uBD80\xA0\uD2B9\uC131\uC744\xA0\uAC1D\uAD00\uC801\uC778\xA0\uC9C0\uD45C\uB85C\xA0\uC54C\uB824\uC8FC\uC5B4\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC544\uB3D9\uC758\xA0\uBC1C\uB2EC\uC801\xA0\uAC15\uC810\uACFC\xA0\uC57D\uC810\uC744\xA0\uD30C\uC545\uD560\xA0\uC218\xA0\uC788\uB3C4\uB85D\xA0\uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uD2B9\uD788\xA0\uBC1C\uB2EC\uC774\xA0\uC9C0\uC5F0\uB418\uAC70\uB098\xA0\uC774\uC0C1\uC774\xA0\uC758\uC2EC\uB418\uB294\xA0\uC544\uB3D9\uC744\xA0\uC870\uAE30\uC5D0\xA0\uBC1C\uACAC\uD558\uC5EC,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC774\uB97C\xA0\uC608\uBC29\uD558\uAC70\uB098\xA0\uCD5C\uC18C\uD654\uD558\uB294\uB370\xA0\uB3C4\uC6C0\uC744\xA0\uC904\xA0\uC218\xA0\uC788\uC2B5\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uBC1C\uB2EC\uD3C9\uAC00\uB294\xA0\uC544\uB3D9\uC5D0\xA0\uB300\uD55C\xA0\uC815\uBCF4\xA0\uBFD0\xA0\uC544\uB2C8\uB77C\xA0\uBD80\uBAA8\xA0\uBC0F\xA0\uBD80\uBAA8-\uC790\uB140\xA0\uAD00\uACC4,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uC801\uC808\uD55C\xA0\uC591\uC721\xA0\uBC29\uBC95\uC5D0\xA0\uB300\uD55C\xA0\uC815\uBCF4\uB3C4\xA0\uC81C\uACF5\uD569\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uC790\uD3D0\uAC80\uC0AC\xA0(ADOS-2)" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC758\uC0AC\uC18C\uD1B5,\xA0\uC0AC\uD68C\uC801\xA0\uC0C1\uD638\uC791\uC6A9,\xA0\uB180\uC774,\xA0\uADF8\uB9AC\uACE0\xA0\uC81C\uD55C\uB418\uACE0\xA0\uC0C1\uB3D9\uC801\uC778\xA0\uD589\uB3D9\uC744\xA0\uAC80\uC0AC\uD558\uB294\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uD45C\uC900\uD654\uB41C\xA0\uAC80\uC0AC\xA0\uB3C4\uAD6C\uC785\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "ADOS-2\uB294\xA0\uC790\uD3D0\uB85C\xA0\uC778\uD574\xA0\uB098\uD0C0\uB098\uB294\xA0\uD589\uB3D9\uB4E4\uC744\xA0\uC774\uB04C\uC5B4\uB0BC\xA0\uC218\xA0\uC788\uB294\xA0\uB2E4\uC591\uD55C\xA0\uD65C\uB3D9\uC73C\uB85C\xA0\uAD6C\uC131\uB418\uC5B4\xA0\uC788\uC2B5\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {}),
                "\uAC80\uC0AC\xA0\uB300\uC0C1\uC790\uC758\xA0\uCE58\uB8CC\xA0\uACC4\uD68D\xA0\uADF8\uB9AC\uACE0\xA0\uAD50\uC721\uC801\xA0\uBC30\uCE58\uC640\xA0\uAD00\uB828\uB41C\xA0\uC815\uBCF4\uB97C\xA0\uC5BB\uC744\xA0\uC218\xA0\uC788\uC2B5\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uAE30\uC9C8\uAC80\uC0AC" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uC131\uACA9\uAC80\uC0AC" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uBD80\uBAA8\uC591\uC721\uC2A4\uD2B8\uB808\uC2A4\uAC80\uC0AC" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "mim\uAC80\uC0AC" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uC560\uCC29\uC720\uD615\uAC80\uC0AC" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uD589\uB3D9\uD3C9\uAC00" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uC5B8\uC5B4\uD3C9\uAC00" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "text1", children: "\uB180\uC774\uD3C9\uAC00" }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("p", { className: "text2", children: [
                "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uC804\uD654\uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("ul", {})
            ] }) }) })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Detail_default3 = Detail;

// app/routes/board/community/notice/Board.js
var Board_exports2 = {};
__export(Board_exports2, {
  NoticeBoard: () => NoticeBoard,
  default: () => Board_default2
});
var import_react46 = require("react"), import_react_router_dom37 = require("react-router-dom");
var import_jsx_runtime40 = require("react/jsx-runtime");
function NoticeBoard() {
  return (0, import_react46.useEffect)(() => {
    if (!document.getElementById("noticecss")) {
      var link = document.createElement("link");
      link.id = "noticecss", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/noticecss.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, []), /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { children: "\uCEE4\uBBA4\uB2C8\uD2F0" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("p", { className: "bu1", children: "\uC0C8\uB85C\uC6B4 \uC18C\uC2DD\uACFC \uC815\uBCF4\uB97C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4." }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("h2", { id: "container_title", children: [
          "\uACF5\uC9C0\uC0AC\uD56D",
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "sound_only", children: " \uBAA9\uB85D" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("div", { id: "bo_list", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bo_fx", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("ul", { className: "btn_bo_user", children: [
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react_router_dom37.Link, { onClick: () => window.alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."), className: "btn_b02", children: "\uC791\uC131\uD558\uAE30" }) }),
            " "
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(
            "form",
            {
              name: "fboardlist",
              id: "fboardlist",
              action: "./board_list_update.php",
              onSubmit: "return fboardlist_submit(this);",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "notice" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sst", defaultValue: "wr_num, wr_reply" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sod", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "page", defaultValue: 1 }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sw", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "tbl_head01 tbl_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("table", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("caption", { children: "\uACF5\uC9C0\uC0AC\uD56D \uBAA9\uB85D" }),
                  /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("th", { scope: "col", children: "\uC81C\uBAA9" }),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("th", { scope: "col", children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("a", { children: "\uC791\uC131\uC77C" }) })
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tr", { className: "", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("td", { className: "td_subject", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react_router_dom37.Link, { to: "/board/community/notice/detail5", children: [
                          "\uC2E0\uD559\uAE30 \uC885\uD569 \uC2EC\uB9AC\uAC80\uC0AC/\uBC1C\uB2EC \uAC80\uC0AC 10% \uD560\uC778",
                          " "
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_hot.gif",
                            alt: "\uC778\uAE30\uAE00"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_file.gif",
                            alt: "\uCCA8\uBD80\uD30C\uC77C"
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { className: "td_date", children: "23-02-02" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tr", { className: "", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("td", { className: "td_subject", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react_router_dom37.Link, { to: "/board/community/notice/detail4", children: [
                          "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uC6B4\uC601\uC2DC\uAC04 \uC548\uB0B4",
                          " "
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_hot.gif",
                            alt: "\uC778\uAE30\uAE00"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_file.gif",
                            alt: "\uCCA8\uBD80\uD30C\uC77C"
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { className: "td_date", children: "22-08-23" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tr", { className: "", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("td", { className: "td_subject", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react_router_dom37.Link, { to: "/board/community/notice/detail3", children: [
                          "\uC0AC\uD68C\uC801 \uAC70\uB9AC\uB450\uAE30 4\uB2E8\uACC4 \uAE30\uAC04 \uC815\uC0C1 \uC218\uC5C5",
                          " "
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_hot.gif",
                            alt: "\uC778\uAE30\uAE00"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_file.gif",
                            alt: "\uCCA8\uBD80\uD30C\uC77C"
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { className: "td_date", children: "22-07-13" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tr", { className: "", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("td", { className: "td_subject", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react_router_dom37.Link, { to: "/board/community/notice/detail2", children: [
                          "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 OPEN EVENT",
                          " "
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_hot.gif",
                            alt: "\uC778\uAE30\uAE00"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_file.gif",
                            alt: "\uCCA8\uBD80\uD30C\uC77C"
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { className: "td_date", children: "22-03-22" })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("tr", { className: "", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("td", { className: "td_subject", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_react_router_dom37.Link, { to: "/board/community/notice/detail1", children: [
                          "\uD648\uD398\uC774\uC9C0 \uC624\uD508 \uC548\uB0B4",
                          " "
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_hot.gif",
                            alt: "\uC778\uAE30\uAE00"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/community/icon_file.gif",
                            alt: "\uCCA8\uBD80\uD30C\uC77C"
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("td", { className: "td_date", children: "22-02-24" })
                    ] })
                  ] })
                ] }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("div", { className: "bo_sch", style: { marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("fieldset", { id: "bo_sch", children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("legend", { children: "\uAC8C\uC2DC\uBB3C \uAC80\uC0C9" }),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("form", { name: "fsearch", method: "get", children: [
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "notice" }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("input", { type: "hidden", name: "sop", defaultValue: "and" }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("label", { htmlFor: "sfl", className: "sound_only", children: "\uAC80\uC0C9\uB300\uC0C1" }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("select", { name: "sfl", id: "sfl", children: [
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "wr_subject", children: "\uC81C\uBAA9" }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "wr_content", children: "\uB0B4\uC6A9" }),
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: "wr_subject||wr_content", children: "\uC81C\uBAA9+\uB0B4\uC6A9" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("label", { htmlFor: "stx", className: "sound_only", children: [
              "\uAC80\uC0C9\uC5B4",
              /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("strong", { className: "sound_only", children: " \uD544\uC218" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
              "input",
              {
                type: "text",
                name: "stx",
                defaultValue: "",
                required: "",
                id: "stx",
                className: "frm_input required",
                size: 15,
                maxLength: 20
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
              "input",
              {
                type: "image",
                defaultValue: "\uAC80\uC0C9",
                alt: "\uAC80\uC0C9",
                src: REACT_APP_URL + "/image/community/btn_sch.gif",
                title: "\uAC80\uC0C9",
                className: "btn_sch"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb04 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    .subNav ul li {width:33.3%;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Board_default2 = NoticeBoard;

// app/routes/board/community/notice/Write.js
var Write_exports2 = {};
__export(Write_exports2, {
  NoticeWrite: () => NoticeWrite,
  default: () => Write_default2
});
var import_react47 = require("react"), import_react_router_dom38 = require("react-router-dom");
var import_jsx_runtime41 = require("react/jsx-runtime");
function NoticeWrite() {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(import_jsx_runtime41.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "subtop_u" }),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CommunitySubmenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `
    
    #GNB .gnb {margin-top:-28px;}
    @media all and (min-width:981px) and (max-width:2000px){
        #board_container {width:980px; margin:0 auto;}
    
            
    }
    @media all and (min-width:1px) and (max-width:980px){
        #board_container {width:auto !important; padding:0 10px; margin:0 auto;}
    
    }
    `
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { children: "\uACF5\uC9C0\uC0AC\uD56D" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "fb", children: "\uACF5\uC9C0\uC0AC\uD56D" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("p", { className: "bu1", children: "\uACF5\uC9C0\uC0AC\uD56D\uC744 \uC785\uB825\uD558\uC138\uC694." }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("section", { id: "bo_w", children: [
          /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("h2", { id: "container_title", children: "\uACF5\uC9C0\uC0AC\uD56D \uAE00\uC4F0\uAE30" }),
          /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
            "form",
            {
              name: "fwrite",
              id: "fwrite",
              action: "http://www.gurislp.com/board/bbs/write_update.php",
              onSubmit: "return fwrite_submit(this);",
              method: "post",
              encType: "multipart/form-data",
              autoComplete: "off",
              style: { width: "100%" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "uid", defaultValue: 23012405234873 }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "w", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "qna" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "wr_id", defaultValue: 0 }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "sca", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "sst", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "sod", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("input", { type: "hidden", name: "page", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "tbl_frm01 tbl_wrap", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("table", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("tbody", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("label", { htmlFor: "wr_name", children: [
                      "\uC774\uB984",
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_name",
                        defaultValue: "",
                        id: "wr_name",
                        required: "",
                        className: "frm_input required",
                        size: 10,
                        maxLength: 20
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("tr", { style: { visibility: "hidden", display: "none" }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("label", { htmlFor: "wr_email", children: "\uC774\uBA54\uC77C" }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_email",
                        defaultValue: "sendmail@naver.com",
                        id: "wr_email",
                        className: "frm_input email",
                        size: 50,
                        maxLength: 100
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("label", { htmlFor: "wr_subject", children: [
                      "\uC81C\uBAA9",
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { id: "autosave_wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                      "input",
                      {
                        type: "text",
                        name: "wr_subject",
                        defaultValue: "",
                        id: "wr_subject",
                        required: "",
                        className: "frm_input required",
                        size: 30,
                        maxLength: 255
                      }
                    ) }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("tr", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("th", { scope: "row", children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("label", { htmlFor: "wr_content", children: [
                      "\uB0B4\uC6A9",
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("strong", { className: "sound_only", children: "\uD544\uC218" })
                    ] }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("td", { className: "wr_content", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "sound_only", children: "\uC6F9\uC5D0\uB514\uD130 \uC2DC\uC791" }),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        "textarea",
                        {
                          id: "wr_content",
                          name: "wr_content",
                          className: "",
                          maxLength: 65536,
                          style: { width: "100%" },
                          defaultValue: ""
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { className: "sound_only", children: "\uC6F9 \uC5D0\uB514\uD130 \uB05D" }),
                      " "
                    ] })
                  ] })
                ] }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("div", { className: "btn_confirm", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                    "input",
                    {
                      type: "submit",
                      defaultValue: "\uC791\uC131\uC644\uB8CC",
                      id: "btn_submit",
                      accessKey: "s",
                      className: "btn_submit"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(import_react_router_dom38.Link, { to: "/board/community/notice/board", className: "btn_cancel", children: "\uCDE8\uC18C" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb03 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("br", {})
      ] })
    ] })
  ] });
}
var Write_default2 = NoticeWrite;

// app/routes/board/programs/cure/Language.js
var Language_exports = {};
__export(Language_exports, {
  CureLanguage: () => CureLanguage,
  default: () => Language_default
});
var import_react48 = require("react"), import_react_router_dom39 = require("react-router-dom");
var import_jsx_runtime42 = require("react/jsx-runtime");
function CureLanguage() {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("article", { id: "ctt", className: "ctt_program_1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { children: "\uC5B8\uC5B4\uCE58\uB8CC" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "fb", children: "\uC5B8\uC5B4\uCE58\uB8CC" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("h2", { children: "\uC5B8\uC5B4\uCE58\uB8CC" }),
              /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text1", children: "\uAC01 \uC544\uB3D9\uC5D0\uAC8C \uB9DE\uB294 \uCCB4\uACC4\uC801\uC778 \uC5B8\uC5B4\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4." }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { className: "text2", children: [
                  "\uB610\uB798\uC5D0 \uBE44\uD574 \uC5B8\uC5B4 \uBC1C\uB2EC\uC774 \uB290\uB9B0 \uC544\uB3D9, \uB2E8\uC5B4 \uC758\uBBF8 \uC774\uD574\uAC00 \uBD80\uC871\uD55C \uC544\uB3D9, ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC870\uC74C \uBB38\uC81C \uB610\uB294 \uB9D0\uB354\uB4EC \uBB38\uC81C\uB97C \uAC00\uC9C4 \uC544\uB3D9, \uAE30\uD0C0 \uB9D0\u318D\uC5B8\uC5B4 \uBB38\uC81C\uB97C \uAC00\uC9C4 \uC544\uB3D9 \uC744 \uB300\uC0C1\uC73C\uB85C \uD558\uBA70, ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC544\uB3D9\uC758 \uD604\uC7AC \uC5B8\uC5B4\uC218\uC900\uC5D0 \uAD00\uD55C \uC790\uC138\uD55C \uD3C9\uAC00\uB97C \uBC14\uD0D5\uC73C\uB85C ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC544\uB3D9\uC5D0\uAC8C \uB9DE\uB294 \uCCB4\uACC4\uC801\uC778 \uC5B8\uC5B4\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uB610\uD55C \uBD80\uBAA8\uB2D8 \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uC544\uB3D9\uC758 \uC5B8\uC5B4\uCE58\uB8CC\uAC00 \uCE58\uB8CC\uC2E4 \uB0B4\uC758 \uC0C1\uD669\uC5D0\uC11C \uBFD0\uB9CC \uC544\uB2C8\uB77C ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uAC00\uC815 \uD658\uACBD\uC5D0\uC11C\uB3C4 \uC5F0\uC7A5\uB420 \uC218 \uC788\uB3C4\uB85D \uD558\uC5EC \uC774\uB8E8\uC5B4\uC9C8 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text2_img", children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("img", { alt: "\uC5B8\uC5B4\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_language.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text1", children: "\uCE58\uB8CC \uB300\uC0C1" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { children: "\uC5B8\uC5B4 \uBC1C\uB2EC\uC774 \uC9C0\uC5F0\uB41C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { children: "\uC774\uD574\uB294 \uAC00\uB2A5\uD558\uC9C0\uB9CC \uD45C\uD604\uC774 \uC798 \uB418\uC9C0 \uC54A\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { children: "\uB9D0\uC5D0 \uB300\uD55C \uC774\uD574\uAC00 \uBD80\uC871\uD55C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { children: "\uBC1C\uC74C\uC774 \uBD80\uC815\uD655\uD55C \uC544\uB3D9 \uBC0F \uC131\uC778(\uC870\uC74C\uC7A5\uC560)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { children: "\uB9D0\uC744 \uB354\uB4EC\uAC70\uB098 \uC9C0\uB098\uCE58\uAC8C \uBE68\uB9AC \uC774\uC57C\uAE30 \uD558\uB294 \uC544\uB3D9 \uBC0F \uC131\uC778 (\uC720\uCC3D\uC131\uC7A5\uC560)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { children: "\uC77D\uAE30 \uC7A5\uC560 \uC544\uB3D9" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("p", { className: "text1", children: "\uAE30\uB300\uD6A8\uACFC" }),
                /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("p", { className: "text2", style: { width: "100%" }, children: [
                  "\uC5B8\uC5B4\uCE58\uB8CC\uB294 \uC5B8\uC5B4\uB9CC\uC758 \uBB38\uC81C\uAC00 \uC544\uB2D9\uB2C8\uB2E4. \uC774\uAC83\uC740 \uC5B8\uC5B4\uAC00 \uC778\uAC04\uC758 \uAC00\uC7A5 \uAE30\uBCF8\uC801\uC778 \uC758\uC0AC\uC18C\uD1B5 \uC218\uB2E8\uC774\uB77C\uB294 \uB370\uC5D0 \uAE30\uC778\uD569\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC601\uC720\uC544\uAE30\uC758 \uC5B8\uC5B4\uB294 \uAC00\uC871\uACFC \uD568\uAED8 \uBC1C\uB2EC\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC5B4\uB9B0\uC774\uC9D1\uC774\uB098 \uC720\uCE58\uC6D0\uC744 \uB2E4\uB2C8\uAC8C \uB418\uBA74\uC11C ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uB610\uB798\uC9D1\uB2E8\uACFC \uC120\uC0DD\uB2D8\uACFC \uC0C1\uD638\uC791\uC6A9\uC744 \uC2DC\uC791\uD558\uAC8C \uB418\uACE0, ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uBD80\uC815\uD655\uD55C \uBC1C\uC74C\uC774\uB098 \uB9D0\uB354\uB4EC \uB4F1\uC758 \uC5B8\uC5B4\uC7A5\uC560\uB294 \uC544\uB3D9\uC758 \uC0AC\uD68C\uC131\uC5D0 \uBD80\uC815\uC801\uC778 \uC601\uD5A5\uC744 \uBBF8\uCE58\uAC8C \uB418\uBA70 \uD2B9\uD788 \uC790\uC2E0\uAC10\uC744 \uC783\uACE0 \uC704\uCD95\uB418\uAE30 \uC27D\uC2B5\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC5B8\uC5B4\uCE58\uB8CC\uB97C \uD1B5\uD574 \uC544\uB3D9\uC740 \uAE0D\uC815\uC801\uC778 \uC790\uC544\uC0C1\uC744 \uD68C\uBCF5\uD558\uAC8C \uB418\uACE0 ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC0AC\uD68C\uC131\uC774 \uBC1C\uB2EC\uD558\uAC8C \uB418\uBA70 \uC5B8\uC5B4\uAC00 \uC544\uB2CC \uB098\uBA38\uC9C0 \uBD84\uC57C\uC5D0 \uB300\uD574 \uC790\uC2E0\uAC10\uC744 \uAC00\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC5B8\uC5B4\uCE58\uB8CC\uB294 \uB2E4\uB978 \uC2EC\uB9AC\uCE58\uB8CC\uBD84\uC57C\uC640 \uB2EC\uB9AC \uC9D1\uC911\uC801\uC778 \uAD50\uC721\uC744 \uD1B5\uD574 \uBE60\uB974\uAC8C \uD6A8\uACFC\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uADF8\uB7EC\uBBC0\uB85C \u201C\uC560\uAC00 \uB9D0\uC774 \uB2A6\uC744 \uC218\uB3C4 \uC788\uC9C0\u201D \uD639\uC740 \u201C\uBCC4 \uAC70 \uC544\uB2CC \uBB38\uC81C\uB85C \uD638\uB4E4\uAC11\uC774\uB2E4\u201D\uB77C\uBA70 ",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {}),
                  "\uC18C\uADF9\uC801\uC73C\uB85C \uB300\uC751\uD560 \uAC83\uC774 \uC544\uB2C8\uB77C \uC870\uAE08\uC774\uB77C\uB3C4 \uC544\uC26C\uC6B4 \uBD80\uBD84\uC774 \uC788\uB2E4\uBA74 \uBE68\uB9AC \uC804\uBB38\uAC00\uC758 \uB3C4\uC6C0\uC744 \uBC1B\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("br", {})
                ] })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Language_default = CureLanguage;

// app/routes/board/introduce/teacher/CEO.js
var CEO_exports = {};
__export(CEO_exports, {
  CEO: () => CEO,
  default: () => CEO_default
});
var import_react49 = require("react"), import_react_router_dom40 = require("react-router-dom");
var import_jsx_runtime43 = require("react/jsx-runtime");
function CEO() {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(import_jsx_runtime43.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { children: "\uC13C\uD130\uC7A5 \uC18C\uAC1C" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { children: "HOME" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("span", { className: "fb", children: "\uC13C\uD130\uC7A5 \uC18C\uAC1C" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("p", { className: "bu1", children: [
          REACT_APP_CENTER_NAME,
          "\uC758 \uC13C\uD130\uC7A5\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("article", { id: "bo_v", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("section", { id: "bo_v_atc", style: { fontFamily: "'\uB098\uB214\uACE0\uB515','Nanum Gothic'" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("h2", { id: "bo_v_atc_title", children: "\uBCF8\uBB38" }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { id: "gall_ul", children: [
              /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { className: "td_web_img", style: {}, children: [
                /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { id: "bo_v_img" }),
                /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("a", { href: "", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "profile", style: { margin: "0 auto" } }),
                  " "
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { style: { float: "left" }, children: "\xA0\xA0\xA0\xA0\xA0" }),
              /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                "div",
                {
                  width: "100%",
                  id: "sub_11",
                  style: { float: "left", maxWidth: 550 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("table", { width: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("tbody", { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                      "span",
                      {
                        className: "add_title",
                        style: { marginBottom: "5px", fontSize: "2em", color: "#333", fontWeight: "bold", display: "block", paddingBottom: "3px" },
                        children: "\uC774\uAC00\uC601 \uC13C\uD130\uC7A5"
                      }
                    ) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uCE58\uB8CC\uBD84\uC57C"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC13C\uD130\uC7A5 / ABA / ESDM"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uD559\uB825"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\uC11C\uC6B8\uB300\uD559\uAD50 \uC544\uB3D9\uD559 \uBC15\uC0AC\uACFC\uC815",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uAC00\uD1A8\uB9AD\uB300\uD559\uAD50 \uC77C\uBC18\uB300\uD559\uC6D0 \uBC1C\uB2EC\uC2EC\uB9AC\uD559 \uC11D\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uAC00\uD1A8\uB9AD\uB300\uD559\uAD50 \uC2EC\uB9AC\uD559\uC0AC, \uC544\uB3D9\uD559\uC0AC",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uC5F0\uC138\uB300\uD559\uAD50 \uBBF8\uB798\uAD50\uC721\uC6D0 \uC751\uC6A9\uD589\uB3D9\uBD84\uC11D",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "University of California Santa Barbara Applied Behavior Analysis"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uC790\uACA9\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        }
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "BCBA(\uAD6D\uC81C\uC751\uC6A9\uD589\uB3D9\uBD84\uC11D\uC804\uBB38\uAC00\uC790\uACA9) [BACB]",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uC784\uC0C1\uC2EC\uB9AC\uC0AC(\uBCF4\uAC74\uBCF5\uC9C0\uBD80 \uC0B0\uC5C5\uC778\uB825\uACF5\uB2E8)",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uCCAD\uC18C\uB144\uC0C1\uB2F4\uC0AC(\uC5EC\uC131\uAC00\uC871\uBD80)",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uB180\uC774\uC2EC\uB9AC\uC0C1\uB2F4\uC0AC(\uD55C\uAD6D\uBC1C\uB2EC\uC9C0\uC6D0\uD559\uD68C)"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uAD50\uC721\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "ADOS-2 Introductory Workshop",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "ESDM Advanced Workshop, University of Wollongong, Australia",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "ESDM Introductory Workshop, University of California Davis",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "PECS LEVEL 1 Training Workshop",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "PECS LEVEL 2 Training Workshop",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "DIR FloorTime 101 Workshop",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "K-WPPSI-V \uD55C\uAD6D\uC6E9\uC2AC\uB7EC \uC720\uC544\uC9C0\uB2A5\uAC80\uC0AC \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "K-WISC-V \uD55C\uAD6D\uC6E9\uC2AC\uB7EC \uC544\uB3D9 \uC9C0\uB2A5\uAC80\uC0AC \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "K-WAIS-IV \uD55C\uAD6D\uC6E9\uC2AC\uB7EC \uC131\uC778 \uC9C0\uB2A5\uAC80\uC0AC \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "K-CBCL \uC544\uB3D9\uCCAD\uC18C\uB144 \uD589\uB3D9\uD3C9\uAC00\uCC99\uB3C4 \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uBCA0\uC77C\uB9AC \uC601\uC720\uC544 \uBC1C\uB2EC\uAC80\uC0AC \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uCE58\uB8CC\uB180\uC774 \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uC815\uC2E0\uC57D\uBB3C\uD559 \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uB180\uC774\uD3C9\uAC00 \uC6CC\uD06C\uC0F5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\uC544\uB3D9\uC2EC\uB9AC\uD3C9\uAC00 \uC6CC\uD06C\uC0F5"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "th",
                      {
                        style: {
                          paddingTop: "1.000em",
                          textAlign: "left",
                          color: "#333"
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
                            "i",
                            {
                              className: "fa fa-chevron-circle-right",
                              style: { marginRight: "0.250em", color: "#7d9d4e" }
                            }
                          ),
                          "\uACBD\uB825\uC0AC\uD56D"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(
                      "td",
                      {
                        style: {
                          paddingTop: 5,
                          paddingLeft: 5,
                          color: "#666",
                          lineHeight: "1.750em"
                        },
                        children: [
                          " ",
                          "\u524D) \uAC15\uBD81aba\uC544\uB3D9\uBC1C\uB2EC\uC5F0\uAD6C\uC18C \uBD80\uC6D0\uC7A5",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uB298\uD574\uB791 \uC778\uC9C0\uC2EC\uB9AC\uC5F0\uAD6C\uC18C",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uAC00\uD1A8\uB9AD\uB300\uD559\uAD50 \uC544\uB3D9\uC2EC\uB9AC\uCE58\uB8CC\uC5F0\uAD6C\uC2E4",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uB3D9\uC791\uC544\uC774\uC874",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uD30C\uB780aba\uC5B8\uC5B4\uD589\uB3D9\uC5F0\uAD6C\uC18C",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uD55C\uAD6Daba\uD589\uB3D9\uBC1C\uB2EC\uC5F0\uAD6C\uC18C \uC218\uB828",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uC778\uCC9C WEE\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uD589\uBCF5\uC815\uC2E0\uAC74\uAC15\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uC11C\uC6B8\uBC1C\uB2EC\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uD589\uBCF5\uC815\uC2E0\uAC74\uAC15\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u524D) \uB2E4\uC815\uD55C\uC9C0\uC5ED\uC544\uB3D9\uC13C\uD130",
                          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
                          "\u73FE) \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130"
                        ]
                      }
                    ) })
                  ] }) })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { style: { clear: "both", height: 30 } }),
            /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { id: "bo_v_img" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { id: "bo_v_bot" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb03 a {color:#a99808;}
    .subNav ul li.lnb03 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    .self_table th {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:18px; padding:20px 0;}
    .self_table th span {font-size:15px; font-weight:bold;}
    .self_table th span b {color: rgb(140, 178, 29);}
    .self_table td {font-family:"\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size:13px; line-height:22px;}
    .self_table td span {color:rgb(140, 118, 79); padding-left:15px; display:inline-block;}
    
    
    .self_table2 th {line-height: 16px; color: #292c2f; font-weight: normal; border-bottom: 1px solid #ccc;  border-width: 0 0 1px 1px; background-color: #f7f7f8; text-align:center;}
    .self_table2 th, .boardList td {padding: 9px 3px;}
    .self_table2 td {line-height: 16px; color: #666; border: 1px solid #ccc; border-width: 0 0 1px 1px; text-align:center; padding:5px 0;}
    `
            }
          }
        )
      ] })
    ] })
  ] });
}
var CEO_default = CEO;

// app/routes/board/introduce/CenterMore.js
var CenterMore_exports = {};
__export(CenterMore_exports, {
  IntroduceCenterMore: () => IntroduceCenterMore,
  default: () => CenterMore_default
});
var import_react50 = require("react"), import_react_router_dom41 = require("react-router-dom");
var import_react51 = require("react");
var import_jquery3 = require("jquery"), import_jsx_runtime44 = require("react/jsx-runtime");
function IntroduceCenterMore() {
  let [idxNum, setIdxNum] = (0, import_react51.useState)(0), [idxStyle, setIdxStyle] = (0, import_react51.useState)(), openFancybox = (setNum) => {
    setNum < 1 && (setNum = 14), setNum > 14 && (setNum = 1), setIdxNum(setNum);
    let imgFileNames = [
      "\uB300\uAE30\uC2E41.jpg",
      "\uB300\uAE30\uC2E42.jpg",
      "\uBCF5\uB3C4.jpg",
      "\uC5B8\uC5B4\uCE58\uB8CC\uC2E41.jpg",
      "noticecurecenter1.jpg",
      "\uC778\uC9C0\uD559\uC2B5\uCE58\uB8CC\uC2E42.jpg",
      "\uB180\uC774\uCE58\uB8CC\uC2E41.jpg",
      "\uB180\uC774\uCE58\uB8CC\uC2E42.jpg",
      "\uB180\uC774\uCE58\uB8CC\uC2E43.jpg",
      "\uBBF8\uC220\uCE58\uB8CC\uC2E4.jpg",
      "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uC2E41.jpg",
      "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uC2E42.jpg",
      "\uADF8\uB8F9\uCE58\uB8CC\uC2E41.jpg",
      "\uADF8\uB8F9\uCE58\uB8CC\uC2E42.jpg"
    ];
    document.getElementById("fancybox").style = "display: block;", document.getElementById("fancyboxImage").src = REACT_APP_URL + "/image/centermoreImg/" + imgFileNames[setNum - 1];
  }, closeFancybox = () => {
    document.getElementById("fancybox").style = "display: none;";
  }, clickOuter = (event) => {
    event.target.id === "fancybox" && closeFancybox();
  };
  return (0, import_react51.useEffect)(() => {
    if (document.getElementById("cm_style")) {
      var link = document.getElementById("fd_style");
      link.href = "/styles/css/cm_style.css";
    } else {
      var link = document.createElement("link");
      link.id = "fd_style", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/cm_style.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
    return () => {
    };
  }, []), /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_jsx_runtime44.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("h2", { children: [
      "00 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("br", {}),
      "00 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { id: "left_container_board", children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb05 a {color:#a99808;}
    .subNav ul li.lnb05 a {background-color: #89BCC1;}
    `
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "hgroup", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("p", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { children: "HOME" }) }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { children: "\uC13C\uD130 \uC18C\uAC1C" }),
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "fb", children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }),
            " "
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { id: "bo_gall", style: { width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "bo_fx" }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
            "form",
            {
              name: "fboardlist",
              id: "fboardlist",
              action: "./board_list_update.php",
              onSubmit: "return fboardlist_submit(this);",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", name: "bo_table", defaultValue: "gallery" }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", name: "sfl", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", name: "stx", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", name: "spt", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", name: "page", defaultValue: 1 }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", name: "sw", defaultValue: "" }),
                /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("ul", { id: "gall_ul", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "14 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(1), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uB300\uAE30\uC2E41.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(1), children: "\uB300\uAE30\uC2E41" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "13 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(2), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uB300\uAE30\uC2E42.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(2), children: "\uB300\uAE30\uC2E42" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "12 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(3), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uBCF5\uB3C4.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(3), children: "\uBCF5\uB3C4" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "11 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(4), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uC5B8\uC5B4\uCE58\uB8CC\uC2E41.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(4), children: "\uC5B8\uC5B4\uCE58\uB8CC\uC2E41" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "10 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(5), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/noticecurecenter1.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(5), children: "\uC778\uC9C0\uD559\uC2B5\uCE58\uB8CC\uC2E41" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "9 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(6), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uC778\uC9C0\uD559\uC2B5\uCE58\uB8CC\uC2E42.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(6), children: "\uC778\uC9C0\uD559\uC2B5\uCE58\uB8CC\uC2E42" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "8 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(7), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uB180\uC774\uCE58\uB8CC\uC2E41.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(7), children: "\uB180\uC774\uCE58\uB8CC\uC2E41" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "7 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(8), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uB180\uC774\uCE58\uB8CC\uC2E42.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(8), children: "\uB180\uC774\uCE58\uB8CC\uC2E42" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "6 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(9), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uB180\uC774\uCE58\uB8CC\uC2E43.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(9), children: "\uB180\uC774\uCE58\uB8CC\uC2E43" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "5 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(10), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uBBF8\uC220\uCE58\uB8CC\uC2E4.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(10), children: "\uBBF8\uC220\uCE58\uB8CC\uC2E4" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "4 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(11), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uC2E41.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(11), children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uC2E41" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "1 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(12), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uC2E42.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(12), children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uC2E42" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "3 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(13), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uADF8\uB8F9\uCE58\uB8CC\uC2E41.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(13), children: "\uADF8\uB8F9\uCE58\uB8CC\uC2E41" })
                        }
                      )
                    ] }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_li ", style: { width: 248 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "sound_only", children: "2 " }),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("ul", { className: "gall_con", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("li", { className: "gall_href", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_react_router_dom41.Link, { onClick: () => openFancybox(14), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            src: REACT_APP_URL + "/image/centermoreImg/\uADF8\uB8F9\uCE58\uB8CC\uC2E42.jpg",
                            alt: "",
                            width: "248px",
                            height: 124,
                            style: {}
                          }
                        ),
                        " "
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                        "div",
                        {
                          style: {
                            marginTop: 10,
                            marginBottom: 10,
                            paddingLeft: 10,
                            paddingRight: 10,
                            height: 25,
                            fontWeight: "bold"
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_react_router_dom41.Link, { onClick: () => openFancybox(14), children: "\uADF8\uB8F9\uCE58\uB8CC\uC2E42" })
                        }
                      )
                    ] }) })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("input", { type: "hidden", id: "is_guest_check", defaultValue: "" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: "http://www.gurislp.com/board/skin/board/simple_gallery_skin/source/jquery.fancybox.css?v=2.1.5",
            type: "text/css",
            media: "screen"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: "http://www.gurislp.com/board/skin/board/simple_gallery_skin/source/helpers/jquery.fancybox-buttons.css?v=1.0.5",
            type: "text/css",
            media: "screen"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: "http://www.gurislp.com/board/skin/board/simple_gallery_skin/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7",
            type: "text/css",
            media: "screen"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "div",
      {
        id: "fancybox",
        className: "fancybox-overlay fancybox-overlay-fixed",
        style: { width: "auto", height: "auto", display: "none" },
        onClick: (event) => clickOuter(event),
        children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          "div",
          {
            id: "fancyboxinner",
            className: "fancybox-wrap fancybox-desktop fancybox-type-image fancybox-opened",
            tabIndex: -1,
            style: {
              width: 810,
              height: "auto",
              position: "absolute",
              top: "20%",
              left: "30%",
              opacity: 1,
              overflow: "visible"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
              "div",
              {
                className: "fancybox-skin",
                style: { padding: 15, width: "auto", height: "auto" },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "fancybox-outer", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                      "div",
                      {
                        className: "fancybox-inner",
                        style: { overflow: "visible", width: 780, height: 585 },
                        children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                          "img",
                          {
                            id: "fancyboxImage",
                            className: "fancybox-image",
                            src: "",
                            alt: ""
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                      import_react_router_dom41.Link,
                      {
                        title: "Previous",
                        className: "fancybox-nav fancybox-prev",
                        onClick: () => openFancybox(idxNum - 1),
                        children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", {})
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                      import_react_router_dom41.Link,
                      {
                        title: "Next",
                        className: "fancybox-nav fancybox-next",
                        onClick: () => openFancybox(idxNum + 1),
                        children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", {})
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
                    import_react_router_dom41.Link,
                    {
                      title: "Close",
                      className: "fancybox-item fancybox-close",
                      onClick: () => closeFancybox()
                    }
                  )
                ]
              }
            )
          }
        )
      }
    )
  ] });
}
var CenterMore_default = IntroduceCenterMore;

// app/routes/board/introduce/DaumMapTry.js
var DaumMapTry_exports = {};
__export(DaumMapTry_exports, {
  default: () => DaumMap
});
var import_react52 = require("react");
function DaumMap() {
  let container = document.getElementById("map"), options = {
    center: new window.daum.maps.LatLng(35.85133, 127.734086),
    level: 3
  }, map = new window.daum.maps.Map(container, options);
  console.log("loading kakaomap");
}

// app/routes/board/programs/cure/Detail.js
var Detail_exports4 = {};
__export(Detail_exports4, {
  Detail: () => Detail2,
  default: () => Detail_default4
});
var import_react53 = require("react"), import_react_router_dom42 = require("react-router-dom");
var import_jsx_runtime45 = require("react/jsx-runtime");
function Detail2() {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(import_jsx_runtime45.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("article", { id: "ctt", className: "ctt_program", children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h1", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("span", { className: "fb", children: "\uC804\uCCB4" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "ABA" }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                "1.\xA0\uC870\uAE30\uC9D1\uC911\xA0\uD504\uB85C\uADF8\uB7A8\xA0-\xA0\uC870\uAE30\xA0\uC9D1\uC911\xA0\uD504\uB85C\uADF8\uB7A8\uC740\xA0\uD559\uB839\uAE30\xA0\uC774\uC804\xA0\uC544\uB3D9\uC744\xA0\uB300\uC0C1\uC73C\uB85C",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "EIBI(\uC870\uAE30\uC9D1\uC911\xA0\uD589\uB3D9\uC801\xA0\uC911\uC7AC)\xA0\uBAA8\uB378\uC758\xA0\uC9D1\uC911\uC801\xA0ABA\xA0\uC811\uADFC\uC744\xA0\uD1B5\uD558\uC5EC\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uBC1C\uB2EC\uC758\xA0\uCC28\uC774\uB97C\xA0\uCD5C\uC18C\uD654\uD558\uACE0\xA0\uC77C\uBC18\uD654\uB41C\xA0\uD658\uACBD\uC5D0\xA0\uC801\uC751\uD560\xA0\uC218\xA0\uC788\uB3C4\uB85D\xA0\uAC1C\uC785\uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "2.\xA0\uC0AC\uD68C\uC131\uD504\uB85C\uADF8\uB7A8\xA0-\xA0\uC0AC\uD68C\uC131\xA0\uD504\uB85C\uADF8\uB7A8\uC740\xA0\uC544\uB3D9\uC774\xA0\uC18C\uADF8\uB8F9\xA0\uC548\uC5D0\uC11C\xA0\uC0C1\uD638\uC791\uC6A9,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uB610\uB798\uC640\uC758\xA0\uC0C1\uD638\uC791\uC6A9\uC744\xA0\uAC15\uD654\uD558\uACE0\xA0\uC774\xA0\uACFC\uC815\uC5D0\uC11C\xA0\uC5B8\uC5B4\uD655\uC7A5\uC744\xA0\uBAA9\uC801\uC73C\uB85C\xA0\uD569\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC774\uB97C\xA0\uC704\uD574\xA0\uB2E4\uC591\uD55C\xA0\uADF8\uB985\uD65C\uB3D9\uACFC\xA0\uAC8C\uC784\uB4F1\uC774\xA0\uC774\uB8E8\uC5B4\xA0\uC9D1\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uAD81\uADF9\uC801\uC73C\uB85C\xA0\uADF8\uB8F9\xA0\uD65C\uB3D9\xA0\uC0C1\uD669\uC5D0\xA0\uD544\uC694\uD55C\xA0\uC801\uC751\xA0\uB2A5\uB825\xA0\uD568\uC591\uC744\xA0\uD1B5\uD574\uC11C\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC544\uB3D9\uC774\xA0\uD1B5\uD569\xA0\uAD50\uC721\xA0\uD658\uACBD\uC5D0\uC11C\xA0\uB3C5\uB9BD\uC801\uC73C\uB85C\xA0\uAE30\uB2A5\uD560\xA0\uC218\xA0\uC788\uB3C4\uB85D\xA0\uD6C8\uB828\uD558\uB294\xA0\uACFC\uC815\uC785\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "ESDM" }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                "12~48\uAC1C\uC6D4\uC758\xA0\uC790\uD3D0\xA0\uC2A4\uD399\uD2B8\uB7FC\xA0\uC9C4\uB2E8\uC744\xA0\uBC1B\uC558\uAC70\uB098\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uBC1C\uB2EC\xA0\uC9C0\uC5F0\uC5D0\xA0\uB300\uD55C\xA0\uAC1C\uC785\uC774\xA0\uD544\uC694\uD55C\xA0\uC601\uC720\uC544\uB97C\xA0\uB300\uC0C1\uC73C\uB85C\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC804\uBC18\uC801\xA0\uBC1C\uB2EC\xA0\uC601\uC5ED\uC758\xA0\uAE30\uB2A5\uD5A5\uC0C1\uC744\xA0\uB3C4\uBAA8\uD569\uB2C8\uB2E4.\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uBD80\uBAA8\uAD50\uC721\uC744\xA0\uD1B5\uD558\uC5EC\xA0\uBD80\uBAA8\uAC00\xA0\uC2B5\uB4DD\uD55C\xA0ESDM\xA0\uAE30\uC220\uB4E4\uB85C\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC77C\uC0C1\uC0DD\uD65C\uC5D0\uC11C\xA0\uC544\uB3D9\uACFC\uC758\xA0\uC0C1\uD638\uC791\uC6A9\uC744\xA0\uCD5C\uB300\uD654\uD558\uC5EC\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC2B5\uB4DD\uD55C\xA0\uD589\uB3D9\uB4E4\uC758\xA0\uC77C\uBC18\uD654\xA0\uBC0F\xA0\uC0C8\uB85C\uC6B4\xA0\uD589\uB3D9\uC744\xA0\uAC00\uB974\uCE58\uB294\xA0\uAC83\uC73C\uB85C\xA0\uBC1C\uB2EC\uC758\xA0\uC99D\uC9C4\uC744\xA0\uBAA9\uD45C\uB85C\uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "6\uAC1C\uC6D4 \uB2E8\uC704\uB85C \uC9C4\uD589\uB418\uBA70, \uD504\uB85C\uADF8\uB7A8 \uC9C4\uD589 \uC911 \uBD80\uBAA8\uAD50\uC721\uC774 \uD544\uC218\uC801\uC73C\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. ",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC8FC\uC5D0 2~3\uD68C, \uD55C \uD68C\uAE30\uB2F9 80\uBD84 \uAC1C\uC785\uC744 \uAE30\uBCF8\uC73C\uB85C \uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uCCAD\uC18C\uB144\uC0C1\uB2F4" }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                "\uCCAD\uC18C\uB144\uAE30\uB294\xA0\uC544\uB3D9\uAE30\uC5D0\uC11C\xA0\uC131\uC778\uAE30\uC5D0\xA0\uC774\uB974\uB294\xA0\uACFC\uB3C4\uAE30\uB85C\uC11C,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC2E0\uCCB4\uC801\xA0\uBCC0\uD654\uC5D0\xA0\uB530\uB978\xA0\uC2EC\uB9AC\uC801\xA0\uBCC0\uD654\uAC00\xA0\uB450\uB4DC\uB7EC\uC9C0\uACE0,\xA0\uC790\uC544\uC815\uCCB4\uAC10\uC744\xA0\uD615\uC131\uD558\uACE0,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uBD80\uBAA8\uB85C\uBD80\uD130\uC758\xA0\uB3C5\uB9BD\uC744\xA0\uC900\uBE44\uD558\uB294\xA0\uC2DC\uAE30\uC785\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC774\uC5D0\xA0\uCCAD\uC18C\uB144\uB4E4\uC740\xA0\uD559\uC5C5\uC774\uB098\xA0\uC9C4\uB85C\uC5D0\xA0\uB300\uD55C\xA0\uACE0\uBBFC\uC774\xA0\uAE4A\uC5B4\uC9C0\uACE0,\xA0\uBD80\uBAA8\uC640\uC758\xA0\uAC08\uB4F1\uC774\xA0\uB354\uC6B1\xA0\uBE48\uBC88\uD574\uC9D1\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uB610\uD55C\xA0\uC678\uBAA8\uB098\xA0\uC2E0\uCCB4\uC5D0\xA0\uB300\uD55C\xA0\uACE0\uBBFC\uC774\xA0\uB9CE\uC544\uC9C0\uACE0,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uCE5C\uAD6C\xA0\uAD00\uACC4\uC5D0\xA0\uB354\uC6B1\xA0\uB9CE\uC774\xA0\uBAB0\uB450\uD558\uACE0\xA0\uAC08\uB4F1\uC744\xA0\uACBD\uD5D8\uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uB354\uBD88\uC5B4\xA0\uC544\uC9C1\xA0\uC790\uAE30\xA0\uC870\uC808\uB825\uC774\uB098\xA0\uB3C4\uB355\uC131\uC774\xA0\uCDA9\uBD84\uD788\xA0\uBC1C\uB2EC\xA0\uB418\uC9C0\xA0\uC54A\uC544\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC57D\uBB3C\uC774\uB098\xA0\uC911\uB3C5,\xA0\uD3ED\uB825,\xA0\uAC00\uCD9C,\xA0\uBE44\uD589\xA0\uD589\uB3D9\uC5D0\xA0\uC27D\uAC8C\xA0\uC601\uD5A5\uC744\xA0\uBC1B\uC2B5\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC774\uC5D0\xA0\uCCAD\uC18C\uB144\xA0\uC0C1\uB2F4\uC740\xA0\uCCAD\uC18C\uB144\uC774\xA0\uD559\uC5C5\xA0\uBC0F\xA0\uC9C4\uB85C,\xA0\uCE5C\uAD6C\xA0\uAD00\uACC4,\xA0\uBD80\uBAA8\xA0\uAD00\uACC4\uB97C\xA0\uC798\xA0\uC138\uC6B0\uACE0,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uBE44\uD589\xA0\uD589\uB3D9\uC744\xA0\uC608\uBC29\uD558\uACE0,\xA0\uC790\uC2E0\uC758\xA0\uC7A0\uC7AC\xA0\uAC00\uB2A5\uC131\uC744\xA0\uCD5C\uB300\uD55C\xA0\uC2E4\uD604\uD560\xA0\uC218\xA0\uC788\uB3C4\uB85D\xA0\uB3D5\uAE30\xA0\uC704\uD55C\xA0\uACFC\uC815\uC785\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uCCAD\uC18C\uB144\xA0\uC0C1\uB2F4\uC740\xA0\uC77C\uB300\uC77C\uB85C\xA0\uC9C4\uD589\uB418\uBA70,\xA0\uC5B8\uC5B4\xA0\uBC0F\xA0\uC0C1\uD638\uC791\uC6A9\uC744\xA0\uD1B5\uD558\uC5EC\xA0\uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC0C1\uB2F4\xA0\uACFC\uC815\uC744\xA0\uD1B5\uD558\uC5EC\xA0\uCCAD\uC18C\uB144\uC740\xA0\uC790\uC2E0\uC758\xA0\uBC1C\uB2EC\xA0\uACFC\uC5C5\uC744\xA0\uC131\uACF5\uC801\uC73C\uB85C\xA0\uB2EC\uC131\uD558\uACE0,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uAC74\uAC15\uD55C\xA0\uC131\uC778\uC73C\uB85C\xA0\uC131\uC7A5\uD558\uAE30\xA0\uC704\uD55C\xA0\uBC11\uAC70\uB984\uC744\xA0\uB2E8\uB2E8\uD788\xA0\uB2E4\uC9C0\uAC8C\xA0\uB429\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uC131\uC778\uC0C1\uB2F4" }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                "\uC131\uC778\xA0\uC0C1\uB2F4\uC740\xA0\uC790\uB140\xA0\uC591\uC721,\xA0\uBD80\uBD80\xA0\uAD00\uACC4,\xA0\uAC00\uC871\xA0\uAC08\uB4F1,\xA0\uAC1C\uC778\uC758\xA0\uC131\uACA9\xA0\uD2B9\uC131\uC73C\uB85C\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uD798\uB4E4\uC5B4\uD558\uB294\xA0\uC131\uC778\uB4E4\uC744\xA0\uB300\uC0C1\uC73C\uB85C\xA0\uC2EC\uB9AC\xB7\uC815\uC11C\uC801\xA0\uC5B4\uB824\uC6C0\uC758\xA0\uD574\uACB0,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uD6A8\uC728\uC801\uC778\xA0\uB300\uC778\xA0\uAD00\uACC4\uC640\xA0\uC0AC\uD68C\xA0\uC801\uC751\xA0\uB2A5\uB825\uC758\xA0\uD5A5\uC0C1,\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC790\uB140\uC5D0\xA0\uB300\uD55C\xA0\uC62C\uBC14\uB978\xA0\uC774\uD574\uC640\xA0\uC790\uB140\xA0\uC591\uC721\uD0DC\uB3C4\xA0\uAC1C\uC120\xA0\uB4F1\uC744\xA0\uBAA9\uD45C\uB85C\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uC0C1\uB2F4\uC790\uC640\uC758\xA0\uC77C\uB300\uC77C\xA0\uAD00\uACC4\uC5D0\uC11C\xA0\uC9C4\uD589\uB418\uB294\xA0\uACFC\uC815\uC785\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", {})
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uC5B8\uC5B4\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                  "\uB610\uB798\uC5D0 \uBE44\uD574 \uC5B8\uC5B4 \uBC1C\uB2EC\uC774 \uB290\uB9B0 \uC544\uB3D9, \uB2E8\uC5B4 \uC758\uBBF8 \uC774\uD574\uAC00 \uBD80\uC871\uD55C \uC544\uB3D9,",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC870\uC74C \uBB38\uC81C \uB610\uB294 \uB9D0\uB354\uB4EC \uBB38\uC81C\uB97C \uAC00\uC9C4 \uC544\uB3D9, \uAE30\uD0C0 \uB9D0\u318D\uC5B8\uC5B4 \uBB38\uC81C\uB97C \uAC00\uC9C4 \uC544\uB3D9\uC744 \uB300\uC0C1\uC73C\uB85C \uD558\uBA70,",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC544\uB3D9\uC758 \uD604\uC7AC \uC5B8\uC5B4\uC218\uC900\uC5D0 \uAD00\uD55C \uC790\uC138\uD55C \uD3C9\uAC00\uB97C \uBC14\uD0D5\uC73C\uB85C ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC544\uB3D9\uC5D0\uAC8C \uB9DE\uB294 \uCCB4\uACC4\uC801\uC778 \uC5B8\uC5B4\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uB610\uD55C \uBD80\uBAA8\uB2D8 \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uC544\uB3D9\uC758 \uC5B8\uC5B4\uCE58\uB8CC\uAC00 \uCE58\uB8CC\uC2E4 \uB0B4\uC758 \uC0C1\uD669\uC5D0\uC11C \uBFD0\uB9CC \uC544\uB2C8\uB77C ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uAC00\uC815 \uD658\uACBD\uC5D0\uC11C\uB3C4 \uC5F0\uC7A5\uB420 \uC218 \uC788\uB3C4\uB85D \uD558\uC5EC",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC77C\uC0C1\uC0DD\uD65C\uC5D0\uC11C \uBCF4\uB2E4 \uB2A5\uB960\uC801\uC778 \uC758\uC0AC\uC18C\uD1B5\uC774 \uC774\uB8E8\uC5B4\uC9C8 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/language", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "R", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { alt: "\uC5B8\uC5B4\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_language.gif" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uB180\uC774\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                  "\uC790\uC2E0\uC758 \uC0DD\uAC01\uC774\uB098 \uB290\uB08C\uC744 \uC5B8\uC5B4\uB85C \uC804\uB2EC\uD558\uB294\uB370 \uC81C\uD55C\uC774 \uC788\uB294 \uC544\uB3D9\uB4E4\uC5D0\uAC8C \uD589\uB3D9\uD45C\uD604\uC744 \uD1B5\uD574\uC11C",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC815\uC11C,\uD589\uB3D9,\uBC1C\uB2EC\uC0C1\uC758 \uBB38\uC81C\uB97C \uD574\uACB0\uD569\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC544\uB3D9\uC758 \uBD88\uC548\uAC10\uC744 \uC644\uD654\uC2DC\uD0A4\uACE0 \uC548\uC815\uC801\uC73C\uB85C \uC560\uCC29\uC774 \uD615\uC131\uB418\uB3C4\uB85D \uB3C4\uC6B0\uBA70 ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC0AC\uD68C\uC801 \uC0C1\uD638\uC791\uC6A9 \uC695\uAD6C\uC640 \uC790\uC2E0\uAC10\uC744 \uC99D\uC9C4\uC2DC\uCF1C \uD0C0\uC778\uACFC \uC801\uC808\uD55C \uC0C1\uD638\uC791\uC6A9\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC804\uBC18\uC801 \uBC1C\uB2EC\uC744 \uAC00\uC18D\uD654\uC2DC\uD0A4\uB294 \uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/play", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "R", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { alt: "\uB180\uC774\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_play.gif" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uBBF8\uC220\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                  "\uB9D0\uB85C \uC790\uC2E0\uC744 \uCDA9\uBD84\uD788 \uD45C\uD604\uD558\uAE30\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uB294 \uC544\uC774\uB4E4\uC758 \uC7A0\uC7AC\uB825\uC744",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uCD5C\uB300\uD55C \uBC1C\uD718\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC8FC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/art", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "R", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { alt: "\uBBF8\uC220\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_art.gif" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uAC10\uAC01\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                  "\uC544\uB3D9\uC758 \uAC10\uAC01\uD1B5\uD569\uAE30\uB2A5, \uB180\uC774\uC218\uC900, \uBC1C\uB2EC\uC5F0\uB839 \uB4F1\uC5D0 \uB530\uB77C ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC801\uC808\uD558\uAC8C \uC870\uC808\uB41C \uC804\uC815\uAC10\uAC01, \uACE0\uC720\uC218\uC6A9\uC131 \uAC10\uAC01, \uCD09\uAC01\uC744 \uC81C\uACF5\uD558\uBA70",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC774\uB7EC\uD55C \uAC10\uAC01\uB4E4\uC744 \uD1B5\uD569\uD558\uC5EC \uC544\uB3D9\uC774 \uC790\uBC1C\uC801\uC73C\uB85C \uC801\uC751\uBC18\uC751\uC744 \uB9CC\uB4E4 \uC218 \uC788\uB3C4\uB85D \uB3D5\uC2B5\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/sense", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "R", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { alt: "\uBBF8\uC220\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_sense.gif" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uC778\uC9C0\uD559\uC2B5" }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                  "\uCE5C\uAD6C\uB4E4\uACFC \uD568\uAED8 \uD559\uC2B5\uC5D0 \uCC38\uC5EC\uD558\uACE0 \uC7A0\uC7AC\uB825\uC744 \uCD5C\uB300\uD55C \uBC1C\uD718\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC778\uC9C0\uBC1C\uB2EC\uACFC \uD559\uC2B5\uB2A5\uB825 \uBA74\uC5D0\uC11C \uBD80\uC9C4\uC774\uB098 \uC9C0\uCCB4\uB97C \uBCF4\uC774\uB294 \uC544\uB3D9 \uBC0F \uCCAD\uC18C\uB144\uC758 ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC778\uC9C0\uD559\uC2B5 \uC218\uC900\uACFC \uAC1C\uBCC4 \uD2B9\uC131\uC744 \uD3C9\uAC00\uD558\uC5EC ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC5B4\uB824\uC6C0\uC744 \uBCF4\uC774\uB294 \uC778\uC9C0\uC601\uC5ED \uBC0F \uD559\uC2B5\uB2A5\uB825\uC758 \uBC1C\uB2EC\uC744 \uB3D5\uB294 \uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/notice", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "R", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { alt: "\uC778\uC9C0\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_notice.gif" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uADF8\uB8F9\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                  "\uC0AC\uD68C\uC131 \uADF8\uB8F9 \uD6C8\uB828 \uD504\uB85C\uADF8\uB7A8\uC740 \uB610\uB798 \uBC0F \uD0C0\uC778\uACFC\uC758 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uAD00\uACC4 \uB9FA\uAE30\uC640 ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uB2E4\uC591\uD55C \uC0C1\uD669\uC5D0 \uC801\uC808\uD558\uAC8C \uB300\uCC98\uD558\uB294 \uAE30\uC220\uC774 \uBD80\uC871\uD558\uC5EC \uD559\uAD50\uC0DD\uD65C\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uB294 ",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                  "\uC544\uB3D9 \uBC0F \uCCAD\uC18C\uB144\uB4E4\uC5D0\uAC8C \uB300\uC778 \uAD00\uACC4 \uB2A5\uB825\uC744 \uD5A5\uC0C1\uC2DC\uCF1C\uC8FC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/group", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "R", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("img", { alt: "\uADF8\uB8F9\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_group.gif" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text1", children: "\uAC00\uC871\uC0C1\uB2F4" }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("p", { className: "text2", children: [
                "\uAC00\uC871 \uAD6C\uC131\uC6D0 \uAC04\uC758 \uAD00\uACC4\uAD6C\uC870\uC640 \uC0C1\uD638\uC791\uC6A9\uC744 \uBCC0\uD654\uC2DC\uCF1C ",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uB300\uC778\uAD00\uACC4 \uAE30\uC220\uACFC \uC801\uC751\uB2A5\uB825\uC744 \uD5A5\uC0C1\uC2DC\uD0B4\uC73C\uB85C\uC368 \uAC1C\uC778\uACFC \uAC00\uC871\uC774 \uAC74\uAC15\uD558\uACE0",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {}),
                "\uAE30\uB2A5\uC801\uC778 \uC0DD\uD65C\uC744 \uD558\uB3C4\uB85D \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uCE58\uB8CC\uC785\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_react_router_dom42.Link, { to: "/board/cureprogram/family", children: "\uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
            ] }) }) })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Detail_default4 = Detail2;

// app/routes/board/programs/cure/Family.js
var Family_exports = {};
__export(Family_exports, {
  CureFamily: () => CureFamily,
  default: () => Family_default
});
var import_react54 = require("react"), import_react_router_dom43 = require("react-router-dom");
var import_jsx_runtime46 = require("react/jsx-runtime");
function CureFamily() {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(import_jsx_runtime46.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("article", { id: "ctt", className: "ctt_program_2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { children: "\uAC00\uC871\uC0C1\uB2F4" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("span", { className: "fb", children: "\uAC00\uC871\uC0C1\uB2F4" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              "style",
              {
                dangerouslySetInnerHTML: {
                  __html: `
     ul.dept  {margin-top:5px;}
     .cont_program_list li.L2 li.dept {background-image:none;}
     ul.dept li {list-style-type:none; background-image:none;}
     `
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h2", { children: "\uAC00\uC871\uC0C1\uB2F4" }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("p", { className: "text2", children: [
                  "\uAC00\uC871 \uAD6C\uC131\uC6D0 \uAC04\uC758 \uAD00\uACC4\uAD6C\uC870\uC640 \uC0C1\uD638\uC791\uC6A9\uC744 \uBCC0\uD654\uC2DC\uCF1C ",
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("br", {}),
                  "\uB300\uC778\uAD00\uACC4 \uAE30\uC220\uACFC \uC801\uC751\uB2A5\uB825\uC744 \uD5A5\uC0C1\uC2DC\uD0B4\uC73C\uB85C\uC368 \uAC1C\uC778\uACFC \uAC00\uC871\uC774 \uAC74\uAC15\uD558\uACE0",
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("br", {}),
                  "\uAE30\uB2A5\uC801\uC778 \uC0DD\uD65C\uC744 \uD558\uB3C4\uB85D \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uCE58\uB8CC\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text1", children: "\uC0C1\uB2F4 \uB300\uC0C1" }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uC131\uACA9 \uBC0F \uAC00\uCE58\uAD00\uC758 \uCC28\uC774, \uC678\uB3C4, \uC131\uC801 \uBB38\uC81C, \uC758\uC0AC\uC18C\uD1B5\uC758 \uBD80\uB0B4 \uB4F1\uC73C\uB85C \uC778\uD55C \uBD80\uBD80 \uBD88\uD654" }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uBCC4\uAC70, \uC774\uD63C, \uC7AC\uD63C \uB4F1 \uAC00\uC871\uC758 \uBD84\uB9AC, \uC7AC\uACB0\uD569\uC73C\uB85C \uC778\uD55C \uAC00\uC871\uC6D0\uAC04\uC758 \uAC08\uB4F1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uACE0\uBD80, \uD615\uC81C, \uCE5C\uC778\uCC99\uAC04 \uAC08\uB4F1 \uB4F1 \uAC00\uC871\uAD00\uACC4\uC0C1\uC758 \uC5EC\uB7EC\uC6C0" }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uBC30\uC6B0\uC790\uC758 \uC5B8\uC5B4\uC801, \uC2E0\uCCB4\uC801 \uD3ED\uB825, \uC790\uB140\uD559\uB300, \uC54C\uCF54\uC62C \uB0A8\uC6A9 \uB4F1\uC73C\uB85C \uC778\uD55C \uAC00\uC871 \uB0B4 \uBD88\uD654" }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uC7A5\uC560\uC544, \uCE58\uB9E4\uB178\uC778 \uB4F1 \uD2B9\uBCC4\uD55C \uBCF4\uD638\uB97C \uC694\uD558\uB294 \uAC00\uC871\uC6D0\uC73C\uB85C \uC778\uD55C \uACFC\uC911\uD55C \uC5ED\uD560 \uBD80\uB2F4\uACFC \uAC08\uB4F1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uC790\uB140\uC640\uC758 \uAD00\uACC4 \uD68C\uBCF5\uC744 \uC6D0\uD558\uB294 \uAC00\uC871" }),
                  /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uC790\uB140 \uC591\uC721\uC5D0 \uAD00\uD574 \uC758\uACAC\uCDA9\uB3CC\uC774 \uC77C\uC5B4\uB098\uB294 \uAC00\uC871" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("p", { className: "text1", children: "\uAD6C\uC131 \uBC0F \uCE58\uB8CC\uC2DC\uAC04" }),
                /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("li", { children: "\uAC00\uC871 \uAC1C\uBCC4 \uBC0F \uC9D1\uB2E8\uC0C1\uB2F4 / \uB9E4\uD68C 50\uBD84 \uC9C4\uD589" }) })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Family_default = CureFamily;

// app/routes/board/programs/cure/Notice.js
var Notice_exports = {};
__export(Notice_exports, {
  CureNotice: () => CureNotice,
  default: () => Notice_default
});
var import_react55 = require("react"), import_react_router_dom44 = require("react-router-dom");
var import_jsx_runtime47 = require("react/jsx-runtime");
function CureNotice() {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("article", { id: "ctt", className: "ctt_program_5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { children: "\uC778\uC9C0\uD559\uC2B5" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "fb", children: "\uC778\uC9C0\uD559\uC2B5" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("h2", { children: "\uC778\uC9C0\uD559\uC2B5" }),
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "text1", children: [
                  "\uCE5C\uAD6C\uB4E4\uACFC \uD568\uAED8 \uD559\uC2B5\uC5D0 \uCC38\uC5EC\uD558\uACE0 ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uC7A0\uC7AC\uB825\uC744 \uCD5C\uB300\uD55C \uBC1C\uD718\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "text2", children: [
                  "\uC778\uC9C0\uBC1C\uB2EC\uACFC \uD559\uC2B5\uB2A5\uB825 \uBA74\uC5D0\uC11C \uBD80\uC9C4\uC774\uB098 \uC9C0\uCCB4\uB97C \uBCF4\uC774\uB294 ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uC544\uB3D9 \uBC0F \uCCAD\uC18C\uB144\uC758 \uC778\uC9C0\uD559\uC2B5 \uC218\uC900\uACFC \uAC1C\uBCC4 \uD2B9\uC131\uC744 \uD3C9\uAC00\uD558\uC5EC ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uC5B4\uB824\uC6C0\uC744 \uBCF4\uC774\uB294 \uC778\uC9C0\uC601\uC5ED \uBC0F \uD559\uC2B5\uB2A5\uB825\uC758 \uBC1C\uB2EC\uC744 \uB3D5\uB294 \uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\xA0"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text2_img", children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("img", { alt: "\uC778\uC9C0\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_notice.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text1", children: "\uCE58\uB8CC \uB300\uC0C1" }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { children: "\uC778\uC9C0\uBC1C\uB2EC\uC5D0 \uC5B4\uB824\uC6C0\uC744 \uAC00\uC9C4 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { children: "\uCDE8\uD559 \uC804 \uC544\uB3D9\uC73C\uB85C \uAE30\uCD08\uC801\uC778 \uC0AC\uBB3C\uAC1C\uB150 \uC774\uD574\uAC00 \uC5B4\uB824\uC6B4 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { children: "\uC218, \uAC1C\uB150, \uC2DC\uAC04, \uACF5\uAC04\uAC1C\uB150 \uB4F1\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { children: "\uAE00\uC790 \uC77D\uAE30, \uC4F0\uAE30\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uB294 \uD559\uB839\uAE30 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { children: "\uC9C0\uB2A5\uC740 \uC815\uC0C1\uC774\uB098 \uD559\uC2B5\uC7A5\uC560\uB85C \uD559\uC2B5\uC5D0 \uC5B4\uB824\uC6C0\uC744 \uAC00\uC9C4 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { children: "\uD559\uC2B5\uC774 \uBD80\uC9C4\uD55C \uC544\uB3D9" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("p", { className: "text1", children: "\uAE30\uB300 \uD6A8\uACFC" }),
                /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("p", { className: "text2", style: { width: "100%" }, children: [
                  " ",
                  "\uC778\uC9C0\uD559\uC2B5\uCE58\uB8CC\uB97C \uD1B5\uD574 \uC544\uB3D9\uC740 \uAE30\uBCF8\uC801\uC73C\uB85C \uD559\uC2B5\uD560 \uD0DC\uB3C4\uB97C \uAC16\uCD94\uB294 \uD6C8\uB828\uC744 \uBC1B\uAC8C \uB429\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uC778\uC9C0\uCE58\uB8CC\uB294 \uC9D1\uC911\uB825\uC774 \uB192\uC544\uC9C0\uACE0 \uC549\uC544\uC788\uB294 \uC2DC\uAC04\uC774 \uC810\uCC28 \uB298\uC5B4\uB098\uB294 \uD6A8\uACFC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uD544\uAE30\uAD6C \uBC0F \uD559\uC2B5\uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uB294 \uB2A5\uB825\uC774 \uAC1C\uBC1C\uB418\uBA70, \uC218\uC900\uBCC4 \uD559\uC2B5\uC9C0\uB3C4\uB97C \uD1B5\uD574 \uAE30\uCD08\uD559\uC2B5\uB2A5\uB825\uC744 \uAE30\uB974\uAC8C \uB429\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uD559\uB839\uAE30 \uC774\uC804\uC758 \uC544\uC774\uB4E4\uC5D0\uAC8C\uB294 \uC218\uC640 \uD55C\uAE00\uC744, \uD559\uB839\uAE30 \uC544\uC774\uB4E4\uC740 \uC77D\uAE30, \uC4F0\uAE30, \uB9D0\uD558\uAE30\uB294 \uBB3C\uB860 ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uC218\uD559 \uB4F1\uC758 \uACFC\uBAA9\uB4E4\uC744 \uC9C0\uB3C4\uD558\uAC8C \uB418\uB294\uB370, \uC774\uB97C \uD1B5\uD574 \uC544\uB3D9\uB4E4\uC740 \uC758\uC0AC\uC18C\uD1B5 \uB2A5\uB825\uC774 \uD655\uC7A5\uB418\uACE0 \uC790\uAE30\uD45C\uD604 \uB2A5\uB825\uC774 \uB298\uC5B4\uB098\uAC8C \uB429\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  "\uC774\uB97C \uD1B5\uD574 \uC544\uB3D9\uC740 \uBB38\uC81C\uD589\uB3D9\uC744 \uC870\uC808\uD558\uB294 \uD798\uC774 \uC0DD\uAE30\uACE0 \uC790\uC2E0\uAC10\uC744 \uD68C\uBCF5\uD558\uAC8C \uB429\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("br", {}),
                  " "
                ] })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Notice_default = CureNotice;

// app/routes/board/community/Community.js
var Community_exports = {};
__export(Community_exports, {
  Community: () => Community,
  default: () => Community_default
});
var import_react56 = require("react"), import_react_router_dom45 = require("react-router-dom");
var import_jsx_runtime48 = require("react/jsx-runtime");
function Community({ match }) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_jsx_runtime48.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_react_router_dom45.Outlet, {}) });
}
var Community_default = Community;

// app/routes/board/introduce/Introduce.js
var Introduce_exports = {};
__export(Introduce_exports, {
  Introduce: () => Introduce,
  default: () => Introduce_default
});
var import_react57 = require("react"), import_react_router_dom46 = require("react-router-dom");
var import_jsx_runtime49 = require("react/jsx-runtime");
function Introduce({ match }) {
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_jsx_runtime49.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react_router_dom46.Outlet, {}) });
}
var Introduce_default = Introduce;

// app/routes/board/programs/cure/Group.js
var Group_exports = {};
__export(Group_exports, {
  CureGroup: () => CureGroup,
  default: () => Group_default
});
var import_react58 = require("react"), import_react_router_dom47 = require("react-router-dom");
var import_jsx_runtime50 = require("react/jsx-runtime");
function CureGroup() {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("article", { id: "ctt", className: "ctt_program_8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h1", { children: "\uADF8\uB8F9\uCE58\uB8CC" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#3bb3c3;}
    #lnb>ul>li.lnb01 a {color:#3bb3c3;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "fb", children: "\uADF8\uB8F9\uCE58\uB8CC" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("h2", { children: "\uADF8\uB8F9\uD504\uB85C\uADF8\uB7A8" }),
              /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text1", children: "\uADF8\uB8F9\uD504\uB85C\uADF8\uB7A8\uC758 \uBAA9\uD45C" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("p", { className: "text2", children: [
                  "\uC0AC\uD68C\uC131 \uADF8\uB8F9 \uD6C8\uB828 \uD504\uB85C\uADF8\uB7A8\uC740 \uB610\uB798 \uBC0F \uD0C0\uC778\uACFC\uC758 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uAD00\uACC4 \uB9FA\uAE30\uC640 ",
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
                  "\uB2E4\uC591\uD55C \uC0C1\uD669\uC5D0 \uC801\uC808\uD558\uAC8C \uB300\uCC98\uD558\uB294 \uAE30\uC220\uC774 \uBD80\uC871\uD558\uC5EC",
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
                  "\uD559\uAD50\uC0DD\uD65C\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uB294 \uC544\uB3D9 \uBC0F \uCCAD\uC18C\uB144\uB4E4\uC5D0\uAC8C ",
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {}),
                  "\uB300\uC778 \uAD00\uACC4 \uB2A5\uB825\uC744 \uD5A5\uC0C1\uC2DC\uCF1C\uC8FC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text1", children: "\uADF8\uB8F9\uD504\uB85C\uADF8\uB7A8\uC758 \uC885\uB958 : \uC9DD\uCE58\uB8CC, \uAC10\uAC01\uD1B5\uD569\uADF8\uB8F9, \uC0AC\uD68C\uC131\uD5A5\uC0C1 \uADF8\uB8F9, \uC758\uC0AC\uC18C\uD1B5\uD5A5\uC0C1 \uADF8\uB8F9" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uB610\uB798\uB4E4\uACFC \uC5B4\uC6B8\uB824 \uB180\uAE30 \uC5B4\uB824\uC6B4 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uB300\uC778\uAD00\uACC4\uC5D0 \uC5B4\uB824\uC6C0\uC744 \uB290\uB07C\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uC9C0\uB098\uCE58\uAC8C \uC18C\uADF9\uC801\uC774\uAC70\uB098 \uB2E4\uB978 \uC0AC\uB78C \uC55E\uC5D0 \uB098\uC11C\uAE30\uB97C \uC5B4\uB824\uC6CC\uD558\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uC790\uAE30\uD45C\uD604\uC744 \uC798 \uBABB\uD574\uC11C \uC9D1\uB2E8 \uB0B4\uC5D0\uC11C \uC18C\uC678\uB418\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uC0B0\uB9CC\uD558\uACE0 \uCDA9\uB3D9\uC801\uC774\uC5B4\uC11C \uB610\uB798\uB4E4\uB85C\uBD80\uD130 \uBE44\uB09C\uC744 \uBC1B\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uACF5\uACA9\uC801\uC778 \uC544\uB3D9" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text1", children: "\uADF8\uB8F9\uD504\uB85C\uADF8\uB7A8\uC758 \uBAA9\uD45C" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uADDC\uCE59\uC758 \uD544\uC694\uC131\uC744 \uC778\uC2DD\uD558\uACE0 \uB530\uB97C \uC218 \uC788\uB2E4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uD0C0\uC778\uC758 \uC0C1\uD669\uACFC \uB9C8\uC74C\uC744 \uC774\uD574\uD558\uB294 \uACF5\uAC10\uB2A5\uB825\uC744 \uAE30\uB97C \uC218 \uC788\uB2E4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uAE0D\uC815\uC801\uC778 \uC790\uAE30 \uD45C\uD604\uB825\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uB2E4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uC790\uC2E0\uC758 \uBC14\uB78C\uC9C1\uD558\uC9C0 \uBABB\uD55C \uD589\uB3D9\uC744 \uD1B5\uC81C\uD560 \uC218 \uC788\uB2E4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uB610\uB798 \uAD00\uACC4\uC5D0 \uB300\uD574 \uC774\uD574\uD558\uACE0, \uC870\uC808\uD558\uACE0 \uD0C0\uD611\uD558\uB294 \uACFC\uC815\uC744 \uD1B5\uD574\uC11C \uBB38\uC81C \uD574\uACB0\uB2A5\uB825\uC744 \uAE30\uB97C \uC218 \uC788\uB2E4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uD6C8\uB828 \uACFC\uC815\uC744 \uD1B5\uD574 \uC9D1\uB2E8 \uD65C\uB3D9\uC758 \uC990\uAC70\uC6C0\uC744 \uACBD\uD5D8\uD560 \uC218 \uC788\uB2E4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "\uC874\uC911\uD558\uACE0 \uBC30\uB824\uD558\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 \uC790\uC874\uAC10\uC744 \uD68C\uBCF5\uD560 \uC218 \uC788\uB2E4" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("p", { className: "text1", children: "\uADF8\uB8F9\uC758 \uC6B4\uC601" }),
                /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("li", { children: "60\uBD84 \uC218\uC5C5, 20\uBD84 \uD559\uBD80\uBAA8 \uC0C1\uB2F4" }) })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Group_default = CureGroup;

// app/routes/board/programs/cure/Sense.js
var Sense_exports = {};
__export(Sense_exports, {
  CureSense: () => CureSense,
  default: () => Sense_default
});
var import_react59 = require("react"), import_react_router_dom48 = require("react-router-dom");
var import_jsx_runtime51 = require("react/jsx-runtime");
function CureSense() {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("article", { id: "ctt", className: "ctt_program_4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h1", { children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "fb", children: "\uAC10\uAC01\uD1B5\uD569" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("h2", { children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC" }),
              /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("p", { className: "text1", children: [
                  "\uD2B9\uBCC4\uD55C \uAE30\uB2A5\uD6C8\uB828( \uC5F0\uD544 \uC950\uAE30, \uD3C9\uADE0\uB300 \uAC77\uAE30 )\uC774 \uC544\uB2C8\uB77C ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uAE30\uB2A5\uC744 \uC62C\uBC14\uB974\uAC8C \uC218\uD589\uD560 \uC218 \uC788\uB3C4\uB85D",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("u", { children: "\uAE30\uCD08\uC801\uC778 \uAC10\uAC01\uAE30\uB2A5\uACFC \uC6B4\uB3D9\uB2A5\uB825\uC744 \uBC1C\uB2EC" }),
                  "\uC2DC\uD0A4\uB294 \uCE58\uB8CC\uC785\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("p", { className: "text2", children: [
                  "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uB294 \uC791\uC5C5\uCE58\uB8CC\uC758 \uCE58\uB8CC\uC811\uADFC\uBC95 \uC911 \uD558\uB098\uB85C \uC8FC\uBCC0\uD658\uACBD\uC5D0 \uC801\uC808\uD558\uAC8C \uBC18\uC751\uD560 \uC218 \uC788\uB3C4\uB85D, ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uB1CC\uC5D0\uC11C \uAC10\uAC01\uC744 \uC870\uC9C1\uD654\uD558\uB294 \uAC83\uC744 \uB3D5\uB294 \uCE58\uB8CC\uB85C, \uD2B9\uC815 \uAC10\uAC01\uC5D0 \uACFC\uBBFC\uD55C \uBC18\uC751\uC744 \uBCF4\uC774\uAC70\uB098 ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uD2B9\uC815 \uC790\uADF9\uC5D0 \uACFC\uB3C4\uD558\uAC8C \uC9D1\uCC29\uD558\uC5EC \uC77C\uC0C1\uC0DD\uD65C\uC5D0 \uC2EC\uAC01\uD55C \uC81C\uD55C\uC744 \uBC1B\uACE0 \uC788\uB294 ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uC544\uB3D9 \uBC0F \uC804\uBC18\uC801\uC778 \uAC10\uAC01\uD1B5\uD569\uC758 \uBB38\uC81C\uB85C \uC778\uD574 ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uC6B4\uB3D9\uC870\uC808 \uBC0F \uD589\uB3D9\uC758 \uC870\uC808, \uBC1C\uB2EC\uC758 \uC9C0\uC5F0\uC744 \uBCF4\uC774\uB294 \uC544\uB3D9\uC744 \uB300\uC0C1\uC73C\uB85C ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uB2E4\uC591\uD55C \uAC10\uAC01\uB3C4\uAD6C\uB97C \uC774\uC6A9\uD558\uC5EC \uAC10\uAC01\uD1B5\uD569\uAE30\uB2A5 \uD5A5\uC0C1\uC744 \uB3C4\uBAA8\uD558\uB294 \uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "(\uC77C\uB300\uC77C \uCE58\uB8CC \uD639\uC740 \uC18C\uADF8\uB8F9\uC73C\uB85C \uC2E4\uC2DC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.) ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uC544\uC774\uAC00 \uD544\uC694\uB85C \uD558\uB294 \uAC10\uAC01\uC744 \uC801\uC808\uD788 \uC81C\uACF5\uD574 \uC8FC\uACE0, ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uB1CC\uC5D0\uC11C \uC870\uC9C1\uD654\uD558\uB3C4\uB85D \uB3C4\uC640\uC8FC\uBA70 \uC544\uC774\uAC00 \uC5B4\uB5A4 \uAC10\uAC01\uC774 \uD544\uC694\uD55C\uC9C0, ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uC9C0\uAE08 \uC77C\uC0C1\uC0DD\uD65C\uC5D0\uC11C \uC5B4\uB5A4 \uC810\uC774 \uD798\uB4E0\uC9C0\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uBCF4\uB2E4 \uC6D0\uD65C\uD788 \uD560 \uC218 \uC788\uB3C4\uB85D ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\uCE58\uB8CC \uBC0F \uC81C\uC5B8\uC744 \uD574\uB4DC\uB9AC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("br", {}),
                  "\xA0"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text2_img", children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("img", { alt: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_sense.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text1", children: "\uCE58\uB8CC \uB300\uC0C1" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uD53C\uBD80 \uC811\uCD09, \uC6C0\uC9C1\uC784, \uBE5B \uB610\uB294 \uC18C\uB9AC\uC5D0 \uACFC\uBBFC \uB610\uB294 \uACFC\uC18C \uBC18\uC751\uC744 \uBCF4\uC774\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC27D\uAC8C \uC0B0\uB9CC\uD574\uC9C0\uAC70\uB098 \uCDA9\uB3D9\uC801\uC774\uACE0 \uC790\uC544\uC870\uC808\uC774 \uBD80\uC871\uD55C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC0AC\uD68C\uC801 \uB610\uB294 \uAC10\uC815\uC801 \uBB38\uC81C\uB97C \uAC00\uC9C4 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uD65C\uB3D9\uC218\uC900\uC774 \uB192\uAC70\uB098 \uB0AE\uC740 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC2E0\uCCB4\uC801\uC73C\uB85C \uB454\uD558\uAC70\uB098 \uC8FC\uC758\uBD80\uC871\uC744 \uBCF4\uC774\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC790\uC2E0\uC744 \uD3B8\uC548\uD558\uAC8C \uD558\uAC70\uB098 \uAC00\uB77C\uC549\uD788\uB294 \uB2A5\uB825\uC774 \uBD80\uC871\uD55C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC790\uC544\uAC1C\uB150\uC774 \uBD80\uC871\uD55C \uC544\uB3D9" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("p", { className: "text1", children: "\uAC10\uAC01\uD1B5\uD569\uCE58\uB8CC\uB294 \uC5B4\uB5BB\uAC8C\uD558\uB098\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uAC10\uAC01 \uC785\uB825 \uC870\uC815\uD558\uAE30" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC790\uC138\uBC18\uC751 \uD5A5\uC0C1\uD558\uAE30" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC6B4\uB3D9\uACC4\uD68D\uB2A5\uB825 \uD5A5\uC0C1\uD558\uAE30" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC2E0\uCCB4 \uC774\uBBF8\uC9C0, \uC6C0\uC9C1\uC784, \uC704\uCE58\uC5D0 \uB300\uD55C \uAC10\uAC01 \uD1B5\uD569" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uD658\uACBD\uC5D0\uC11C\uC758 \uACF5\uAC04 \uC778\uC2DD, \uD658\uACBD \uB0B4\uC758 \uC704\uCE58 \uAD00\uACC4\uC5D0 \uB300\uD55C \uAC10\uAC01 \uD1B5\uD569" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uB3D9\uC791\uC758 \uC21C\uC11C\uB098 \uB9AC\uB4EC, \uD0C0\uC774\uBC0D\uC5D0 \uB300\uD55C \uAC10\uAC01 \uD1B5\uD569" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC2E0\uCCB4 \uC88C\uC6B0\uB97C \uD611\uB3D9\uC801\uC73C\uB85C \uC6C0\uC9C1\uC774\uB294 \uB2A5\uB825" }),
                  /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("li", { children: "\uC2DC\uAC01\uC5D0 \uC758\uD55C \uAC10\uAC01-\uC778\uC9C0 \uB2A5\uB825, \uCCAD\uAC01\uC5D0 \uC758\uD55C \uB300\uD654 \uB2A5\uB825 \uD5A5\uC0C1\uD558\uAE30" })
                ] })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Sense_default = CureSense;

// app/routes/board/programs/cure/Play.js
var Play_exports = {};
__export(Play_exports, {
  CurePlay: () => CurePlay,
  default: () => Play_default
});
var import_react60 = require("react"), import_react_router_dom49 = require("react-router-dom");
var import_jsx_runtime52 = require("react/jsx-runtime");
function CurePlay() {
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("article", { id: "ctt", className: "ctt_program_3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { children: "\uB180\uC774\uCE58\uB8CC" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#3bb3c3;}
    #lnb>ul>li.lnb01 a {color:#3bb3c3;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("span", { className: "fb", children: "\uB180\uC774\uCE58\uB8CC" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("h2", { children: "\uB180\uC774\uCE58\uB8CC" }),
              /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text1", children: "\uB2E4\uC591\uD55C \uB180\uC774\uB97C \uD65C\uC6A9\uD55C \uD589\uB3D9\uC73C\uB85C \uCC3D\uC758\uC801\uC778 \uC0AC\uACE0 \uBC0F \uC758\uC0AC\uC18C\uD1B5\uC744 \uCD09\uC9C4\uD569\uB2C8\uB2E4." }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "text2", children: [
                  "\uC790\uC2E0\uC758 \uC0DD\uAC01\uC774\uB098 \uB290\uB08C\uC744 \uC5B8\uC5B4\uB85C \uC804\uB2EC\uD558\uB294\uB370 \uC81C\uD55C\uC774 \uC788\uB294 \uC544\uB3D9\uB4E4\uC5D0\uAC8C ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uD589\uB3D9\uD45C\uD604\uC744 \uD1B5\uD574\uC11C \uC815\uC11C,\uD589\uB3D9,\uBC1C\uB2EC\uC0C1\uC758 \uBB38\uC81C\uB97C \uD574\uACB0\uD569\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC544\uB3D9\uC758 \uBD88\uC548\uAC10\uC744 \uC644\uD654\uC2DC\uD0A4\uACE0 \uC548\uC815\uC801\uC73C\uB85C \uC560\uCC29\uC774 \uD615\uC131\uB418\uB3C4\uB85D \uB3C4\uC6B0\uBA70 ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC0AC\uD68C\uC801 \uC0C1\uD638\uC791\uC6A9 \uC695\uAD6C\uC640 \uC790\uC2E0\uAC10\uC744 \uC99D\uC9C4\uC2DC\uCF1C \uD0C0\uC778\uACFC \uC801\uC808\uD55C \uC0C1\uD638\uC791\uC6A9\uC774 \uAC00\uB2A5\uD558\uB3C4\uB85D ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC804\uBC18\uC801 \uBC1C\uB2EC\uC744 \uAC00\uC18D\uD654\uC2DC\uD0A4\uB294 \uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2_img", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("img", { alt: "\uB180\uC774\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_play.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text1", children: "\uB180\uC774\uCE58\uB8CC\uAC00 \uBB34\uC5C7\uC778\uAC00\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "text2", style: { width: "100%" }, children: [
                  "\uC544\uC774\uB4E4\uC758 \uB180\uC774\uB294 \uC790\uAE30\uD45C\uD604\uC758 \uC218\uB2E8\uBFD0 \uC544\uB2C8\uB77C \uBB34\uD55C\uD55C \uC7A0\uC7AC\uB825\uC744 \uC9C0\uB2C8\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC5B4\uB978\uC740 \uC5B8\uC5B4\uB85C\uC368 \uC790\uC2E0\uC758 \uB2E4\uC591\uD55C \uAC10\uC815\uC744 \uD45C\uD604\uD558\uC9C0\uB9CC \uC544\uB3D9\uC740 \uB180\uC774\uAC00 \uBC14\uB85C \uC5B8\uC5B4\uC785\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB530\uB77C\uC11C \uB180\uC774\uB294 \uC544\uB3D9\uC758 \uC815\uC11C\uBC1C\uB2EC, \uC5B8\uC5B4\uBC1C\uB2EC, \uC778\uC9C0\uBC1C\uB2EC\uC744 \uCE21\uC815\uD558\uB294 \uD558\uB098\uC758 \uB3C4\uAD6C\uC774\uBA70 ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB2E4\uC591\uD55C \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uAC70\uB098 \uC131\uC7A5\uC744 \uCD09\uC9C4\uC2DC\uD0A4\uB294 \uD558\uB098\uC758 \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB180\uC774\uCE58\uB8CC\uB294 \uB180\uC774\uCE58\uB8CC \uC804\uBB38\uAC00\uAC00 \uC544\uB3D9\uC758 \uB180\uC774\uB97C \uAD00\uCC30\uD558\uACE0 \uD574\uC11D\uD558\uC5EC ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB180\uC774\uC5D0 \uD568\uAED8 \uCC38\uC5EC\uD558\uC5EC \uC9C0\uC9C0\uD558\uACE0 \uACF5\uAC10\uD574\uC8FC\uB294 \uAC00\uC6B4\uB370 ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC544\uB3D9\uC758 \uAC08\uB4F1, \uC88C\uC808, \uBD84\uB178, \uC2AC\uD514, \uBD88\uC548 \uB4F1\uC774 \uB180\uC774\uB97C \uD1B5\uD574 \uC790\uC720\uB86D\uAC8C \uBC1C\uC0B0\uB418\uACE0 \uC544\uB3D9\uC740 \uC790\uC2E0\uC744 \uC774\uD574\uD558\uACE0 \uC218\uC6A9\uD558\uAC8C \uB418\uBA70",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uADF8 \uACFC\uC815\uC5D0\uC11C \uC0AC\uD68C\uC131, \uC778\uC9C0, \uC815\uC11C \uBC1C\uB2EC\uC744 \uB3C4\uBAA8\uD558\uAC8C \uB429\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uBCF8 \uAE30\uAD00\uC5D0\uC11C\uB294 \uCE58\uB8CC\uC0AC\uC640 \uC544\uB3D9 \uAC04 \uB180\uC774\uB97C \uD1B5\uD574 ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC560\uCC29 \uC99D\uC9C4\uACFC \uC815\uC11C, \uC778\uC9C0, \uC5B8\uC5B4\uBC1C\uB2EC\uC744 \uB3C4\uBAA8\uD558\uB294 \uCE58\uB8CC \uB180\uC774\uC801 \uC811\uADFC, \uAC8C\uC784\uC758 \uADDC\uCE59\uC744 \uBC30\uC6B0\uACE0 ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC8FC\uC758 \uC0B0\uB9CC\uACFC \uCDA9\uB3D9\uC131\uC744 \uC870\uC808\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 \uAC8C\uC784 \uB180\uC774\uCE58\uB8CC, \uC2EC\uB9AC\uC801\uC778 \uBB38\uC81C\uB97C \uD574\uACB0\uD558\uB294 \uD558\uB098\uC758 \uB3C4\uAD6C\uB85C ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uBBF8\uC220\uC774\uB098 \uBAA8\uB798\uB180\uC774\uB97C \uC774\uC6A9\uD55C \uBBF8\uC220 \uB180\uC774\uCE58\uB8CC, \uBAA8\uB798 \uB180\uC774 \uCE58\uB8CC \uB4F1\uC758 \uD504\uB85C\uADF8\uB7A8\uC744 \uC544\uB3D9\uC758 \uD2B9\uC131\uC5D0 \uB9DE\uAC8C \uC2E4\uC2DC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text1", children: "\uBC1C\uB2EC\uB180\uC774\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "text2", style: { width: "100%" }, children: [
                  "\uBC1C\uB2EC \uB2E8\uACC4\uC758 \uCD08\uAE30\uC5D0 \uC788\uB294 \uC544\uB3D9\uB4E4\uC740 \uAC70\uC758 \uBAA8\uB4E0 \uD65C\uB3D9\uC5D0 \uB180\uC774\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC73C\uBA70, ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "'\uC544\uB3D9\uC758 \uB180\uC774'\uAC00 \uC544\uB3D9\uC744 \uC9C0\uC801, \uC0AC\uD68C\uC801, \uC815\uC11C\uC801, \uC2E0\uCCB4\uC801\uC73C\uB85C \uBC1C\uB2EC\uC2DC\uD0A4\uB294 \uC911\uC694\uD55C \uBC29\uBC95\uC744 \uC778\uC2DD\uD558\uC9C0 \uBABB\uD560\uC9C0\uB3C4 \uBAA8\uB985\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC5B4\uB9B0 \uC544\uB3D9\uC740 \uD0C0\uACE0\uB09C \uD0D0\uC0C9\uAC00\uB85C \uC870\uC6A9\uD560 \uB54C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB180\uACE0 \uACBD\uD5D8\uD558\uB294 \uAC00\uC6B4\uB370 \uC2DC\uD589\uCC29\uC624\uB97C \uD1B5\uD574\uC11C \uBC30\uC6B0\uAC8C \uB429\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB610\uD55C \uC131\uC7A5\uD558\uBA74\uC11C \uB180\uC774\uB97C \uD1B5\uD574 \uC790\uC2E0\uC758 \uACBD\uD5D8\uACFC \uAC10\uC815, \uC18C\uB9DD\uC744 \uD45C\uD604\uD558\uAC8C \uB429\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB180\uC774\uCE58\uB8CC\uB294 \uBC1C\uB2EC\uC9C0\uC5F0\uC774 \uC788\uB294 \uC544\uB3D9\uB4E4\uC5D0\uAC8C\uB294 \uC990\uAC81\uACE0 \uC790\uC5F0\uC2A4\uB7F0 \uC0C1\uD669\uC5D0\uC11C \uB180\uC774\uD558\uBA74\uC11C ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC2E0\uCCB4 \uC0AC\uC6A9 \uB2A5\uB825\uC744 \uC219\uB2EC\uD558\uACE0 \uC5B8\uC5B4\uB97C \uC2B5\uB4DD\uD558\uBA70, \uB2E4\uC591\uD55C \uAC83\uC744 \uD0D0\uC0C9\uD558\uACE0 \uD310\uB2E8\uD558\uBA74\uC11C \uBC1C\uB2EC\uC744 \uCD09\uC9C4\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB610\uD55C \uC601\uC720\uC544\uAE30\uC5D0 \uACB0\uD54D\uB418\uC5C8\uB358 \uBD80\uBD84\uC744 \uB180\uC774\uCE58\uB8CC \uACFC\uC815 \uC18D\uC5D0\uC11C ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC544\uB3D9\uC5D0\uAC8C \uC560\uC815\uACFC \uC990\uAC70\uC6B4 \uAC10\uAC01, \uC811\uCD09\uC744 \uBCF4\uCDA9\uD574 \uC90C\uC73C\uB85C\uC368 \uC2E4\uC81C \uC5B4\uBA38\uB2C8\uC640 \uC560\uCC29 \uC99D\uC9C4\uACFC \uC544\uB3D9 \uAC1C\uC778\uC758 \uBC1C\uB2EC\uC9C0\uC5F0\uC744 \uC62C\uB824 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text1", children: "\uC815\uC11C\uB180\uC774\uCE58\uB8CC" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("p", { className: "text2", style: { width: "100%" }, children: [
                  "\uC544\uB3D9\uB4E4\uC774 \uCCB4\uD5D8\uD558\uB294 \uD604\uC2E4\uC138\uACC4\uC758 \uACBD\uD5D8\uC740 \uC885\uC885 \uB180\uC774\uB97C \uD1B5\uD574 \uC804\uB2EC\uB429\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC5B4\uB978\uB4E4\uC740 \uC5B8\uC5B4\uB77C\uB294 \uB9E4\uAC1C\uCCB4\uB85C \uAC10\uC815, \uC88C\uC808, \uAC71\uC815, \uAC1C\uC778\uC801\uC778 \uBB38\uC81C \uB4F1\uC744 \uC758\uC0AC\uC18C\uD1B5 \uD558\uC9C0\uB9CC ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC544\uB3D9\uC740 \uB180\uC774\uC640 \uD65C\uB3D9\uC73C\uB85C \uC758\uC0AC\uC18C\uD1B5 \uD569\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC544\uB3D9\uC740 \uC131\uC7A5\uD558\uBA74\uC11C \uACBD\uD5D8\uD558\uB294 \uBD88\uC548, \uB450\uB824\uC6C0, \uD63C\uB780, \uC88C\uC808, \uACF5\uACA9\uC758 \uC695\uAD6C \uB4F1\uC744 \uB180\uC774\uB97C \uD1B5\uD574 \uD45C\uD604\uD558\uACE0 ",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uC544\uB3D9\uACFC \uD568\uAED8 \uD558\uB294 \uC804\uBB38\uC801\uC778 \uCE58\uB8CC\uC0AC\uAC00 \uC774\uB7EC\uD55C \uACFC\uC815\uC744 \uB3C4\uC640 \uC544\uB3D9\uC758 \uC131\uC7A5\uC744 \uB3C4\uBAA8\uD569\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                  "\uB530\uB77C\uC11C \uC9C0\uAE08 \uC544\uB3D9\uC774 \uC11C\uC788\uB294 \uADF8 \uC790\uB9AC\uC5D0\uC11C \uC0C8\uB85C\uC6B4 \uC790\uC544\uC0C1\uC744 \uD615\uC131\uD558\uC5EC \uAC74\uAC15\uD55C \uBC1C\uB2EC\uC744 \uCD09\uC9C4\uC2DC\uD0A4\uACE0 \uC131\uC7A5\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text1", children: "\uB180\uC774\uCE58\uB8CC\uB294 \uC5B4\uB5A4 \uC544\uB3D9\uB4E4\uC774 \uBC1B\uB098\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("b", { children: "\uBC1C\uB2EC\uBB38\uC81C" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", style: { width: "100%" }, children: "- \uC9C0\uC801\uC7A5\uC560, \uC790\uD3D0, \uC5B8\uC5B4, \uCCAD\uAC01, \uC2E0\uCCB4\uC7A5\uC560 \uB4F1\uC758 \uBC1C\uB2EC\uC0C1\uC758 \uC5B4\uB824\uC6C0\uACFC \uC815\uC11C\uC801\uC778 \uC5B4\uB824\uC6C0\uC744 \uAC00\uC9C4 \uC544\uB3D9" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("b", { children: "\uC815\uC11C\uBB38\uC81C" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uBC18\uC751\uC774 \uBCC4\uB85C \uC5C6\uACE0 \uBB34\uD45C\uC815\uD55C \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uACE0\uC9D1\uC774 \uC13C \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC9D1 \uC774\uC678\uC758 \uC7A5\uC18C\uC5D0\uC11C \uB9D0\uC744 \uD558\uC9C0 \uC54A\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC190\uD1B1\uC744 \uBB3C\uC5B4\uB72F\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uAC10\uC815\uC758 \uAE30\uBCF5\uC774 \uC2EC\uD55C \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD2B9\uC815\uC0C1\uD669, \uC7A5\uC18C, \uB3D9\uBB3C\uC744 \uBB34\uC11C\uC6CC\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD53C\uD574\uC758\uC2DD\uC774 \uC788\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uBA4D\uD558\uAC8C \uD5C8\uACF5\uC744 \uC751\uC2DC\uD558\uACE0 \uC6B0\uC6B8\uD574\uD558\uB294 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC5C4\uB9C8\uC640 \uB5A8\uC5B4\uC9C0\uAE30 \uD798\uB4E4\uC5B4\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC2E0\uACBD\uC9C8\uACFC \uC9DC\uC99D\uC774 \uC2EC\uD55C \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uAC71\uC815\uC774\uB098 \uBD88\uC548\uC774 \uB9CE\uC740 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD2B9\uBCC4\uD55C \uC774\uC0C1\uC5C6\uC774 \uC5EC\uAE30\uC800\uAE30 \uC544\uD504\uB2E4\uACE0\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC9C0\uB098\uCE58\uAC8C \uAC81\uC774 \uB9CE\uC740 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uAC15\uBC15\uC801 \uC0AC\uACE0,\uC9D1\uCC29,\uD589\uB3D9\uC744 \uBCF4\uC774\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uBD88\uD589\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD558\uAC70\uB098 \uC2AC\uD37C\uD558\uACE0 \uC6B0\uC6B8\uD574\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { style: { listStyleType: "none" }, children: "\xA0" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("b", { children: "\uD559\uC2B5\uBB38\uC81C" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uACF5\uBD80\uD558\uAE30 \uC2EB\uC5B4\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC2DC\uD5D8\uC5D0 \uB300\uD55C \uBD88\uC548\uC774 \uC2EC\uD55C \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD559\uAD50\uC131\uC801\uC774 \uAC11\uC790\uAE30 \uB5A8\uC5B4\uC9C4 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC219\uC81C\uB098 \uACFC\uC81C\uBB3C\uC744 \uB290\uB9AC\uAC8C \uD558\uB294 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("b", { children: "\uD589\uB3D9\uBB38\uC81C" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC8FC\uC758\uC9D1\uC911\uC744 \uC798 \uBABB\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uAC70\uC9D3\uB9D0\uC744 \uC790\uC8FC \uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD654\uB97C \uC798 \uB0B4\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC5B4\uB978\uC5D0\uAC8C \uBC18\uD56D\uC801\uC774\uACE0 \uBB38\uC81C\uD589\uB3D9\uC744 \uBCF4\uC774\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC0AC\uB78C\uC774\uB098 \uB3D9\uBB3C\uC5D0\uAC8C \uC794\uC778\uD55C \uC9D3\uC744 \uD558\uAC70\uB098 \uAD34\uB86D\uD788\uB294 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uBB3C\uAC74\uC744 \uB358\uC9C0\uAC70\uB098 \uBD80\uC218\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uB0A8\uC758 \uBB3C\uAC74\uC744 \uD6D4\uCE58\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uACE0\uC9D1\uC774 \uC138\uACE0 \uC790\uAE30\uC8FC\uC7A5\uB9CC \uB0B4\uC138\uC6B0\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC804\uC790\uC624\uB77D\uACFC \uCEF4\uD4E8\uD130\uAC8C\uC784\uC5D0 \uC9C0\uB098\uCE58\uAC8C \uBE60\uC838\uC788\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\xA0" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("b", { children: "\uCE5C\uAD6C\uAD00\uACC4 \uBB38\uC81C" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uB610\uB798\uC640 \uC798 \uC5B4\uC6B8\uB9AC\uC9C0 \uBABB\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uCE5C\uAD6C\uB4E4\uC744 \uC655\uB530\uC2DC\uD0A4\uB294 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uCE5C\uAD6C\uB4E4\uC5D0\uAC8C \uB180\uB9BC\uC744 \uB2F9\uD558\uAC70\uB098 \uC655\uB530\uB97C \uB2F9\uD558\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uCE5C\uAD6C\uB97C \uB54C\uB9AC\uAC70\uB098 \uAD34\uB86D\uD788\uB294 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { className: "text2", children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("b", { children: "\uAE30\uD0C0" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC7A0\uC744 \uC798 \uBABB\uC790\uAC70\uB098 \uC545\uBABD\uC744 \uAFB8\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("li", { children: [
                    "\uB208\uC744 \uAE5C\uBC15\uC774\uAC70\uB098 \uCF67\uC18C\uB9AC\uB97C \uB0B4\uAC70\uB098 \uC5B4\uAE68\uB97C \uC6C0\uCC14\uAC70\uB9AC\uB294 \uB4F1",
                    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("br", {}),
                    "\uD2F1\uD589\uB3D9\uC744 \uB098\uD0C0\uB0B4\uB294 \uC544\uC774"
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD654\uB97C \uC798 \uB0B4\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC2E0\uCCB4\uC801 \uD639\uC740 \uC131\uC801 \uD559\uB300\uB97C \uBC1B\uC740 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC57C\uB1E8\uC99D\uACFC \uAC19\uC740 \uB300\uC18C\uBCC0 \uBB38\uC81C\uB97C \uC9C0\uB2CC \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uD615\uC81C\uAC04 \uC2EC\uD55C \uACBD\uC7C1\uC73C\uB85C \uC2F8\uC6C0\uC774 \uB9CE\uC740 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uACE0\uC9D1\uC774 \uC138\uACE0 \uC790\uAE30\uC8FC\uC7A5\uB9CC \uB0B4\uC138\uC6B0\uB294 \uC544\uC774" }),
                  /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("li", { children: "\uC720\uCE58\uC6D0\uC774\uB098 \uD559\uAD50\uC0DD\uD669\uC5D0 \uC801\uC751\uC744 \uC798 \uBABB\uD558\uB294 \uC544\uC774" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("p", { children: "\xA0" })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Play_default = CurePlay;

// app/routes/board/introduce/Comming.js
var Comming_exports = {};
__export(Comming_exports, {
  IntroduceComming: () => IntroduceComming,
  default: () => Comming_default
});
var import_react61 = require("react"), import_react_router_dom50 = require("react-router-dom");
var import_jquery4 = __toESM(require("jquery")), import_jsx_runtime53 = require("react/jsx-runtime");
function IntroduceComming() {
  let daumUrl = "http://map.kakao.com", daumMapUrl2 = "https://map.kakao.com/?itemId=1511471507", [loadFlag, setLoadFlag] = (0, import_react61.useState)(!1), [isMobile, setIsMobile] = (0, import_react61.useState)(), [preIsMobile, setPreIsMobile] = (0, import_react61.useState)(), [isReady, setIsReady] = (0, import_react61.useState)(!1);
  (0, import_react61.useEffect)(() => {
    if (document.getElementById("kakaomap")) {
      let script = document.getElementById("kakaomap");
      console.log("loadFlag in listener: " + loadFlag), script.addEventListener("load", () => {
        window.kakao.maps.load(() => {
          var container;
          document.getElementById("cssDevice").href.substr(33, 2) == "pc" ? container = document.getElementById("map1") : container = document.getElementById("map2");
          var options = {
            center: new window.kakao.maps.LatLng(37.6016109, 127.1439133),
            level: 3
          }, map = new kakao.maps.Map(container, options), imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2013/map/marker_map04.png", imageSize = new kakao.maps.Size(40, 40), imageOption = { offset: new kakao.maps.Point(15, 35) }, markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption), markerPosition = new kakao.maps.LatLng(37.6016109, 127.1439133), marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
          });
          marker.setMap(map);
          var duamMapUrl = "https://map.kakao.com/?itemId=1511471507", content = '<div id="markert" class="roughmap_maker_label" style="margin-bottom:40px;"><a href="' + daumMapUrl2 + '" target="_blank"><span class="roughmap_lebel_text"}>' + REACT_APP_CENTER_NAME + "</span></a>", overlayPosition = new kakao.maps.LatLng(37.6016109, 127.1439133), customOverlay = new kakao.maps.CustomOverlay({
            map,
            position: overlayPosition,
            content,
            yAnchor: 1
          }), zoomControl = new kakao.maps.ZoomControl();
          map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT), setLoadFlag(!0), console.log("loadFlag in end of listener: " + loadFlag);
        });
      }), console.log("preIsMobile : " + preIsMobile + ", isMobile : " + isMobile);
      let mediaQuery = window.matchMedia("(max-width: 979px)");
      setIsMobile(mediaQuery.matches);
      let handleMediaChange2 = (e) => setIsMobile(e.matches);
      mediaQuery.addListener(handleMediaChange2), isMobile !== preIsMobile && preIsMobile !== void 0 && (console.log("reload"), window.location.reload()), setPreIsMobile(isMobile), (0, import_jquery4.default)("document").children("kakao").ready(function() {
        setIsReady(!0);
      }), console.log("ready1 : " + isReady), preIsMobile !== void 0 && isReady === !0 && document.getElementById("map1").style.overflow !== "hidden" && document.getElementById("cssDevice").href.substr(33, 2) === "pc" && window.location.reload(), preIsMobile !== void 0 && isReady === !0 && document.getElementById("map2").style.overflow !== "hidden" && document.getElementById("cssDevice").href.substr(33, 2) !== "pc" && window.location.reload();
    } else {
      let script = document.createElement("script");
      script.id = "kakaomap", script.async = "true", script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=" + REACT_APP_DAUM_MAP_KEY + "&autoload=false", document.getElementsByTagName("head")[0].appendChild(script);
      var link = document.createElement("link");
      link.id = "roughmapLander", link.rel = "stylesheet", link.type = "text/css", link.href = "/styles/css/roughmapLander.css", link.media = "all", document.getElementsByTagName("head")[0].appendChild(link);
    }
  }, [loadFlag, isMobile, isReady]);
  let handleMediaChange = (mediaQuery) => {
    setIsMobile(mediaQuery.matches);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("article", { id: "ctt", className: "ctt_map", children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { children: "\uCC3E\uC544\uC624\uC2DC\uB294\uAE38" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb01 a {color:#a99808;}
    #lnb>ul>li.lnb06 a {color:#a99808;}
    .subNav ul li.lnb06 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { children: "\uC13C\uD130 \uC18C\uAC1C" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "fb", children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "map_area_pc", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
                "div",
                {
                  className: "root_daum_roughmap root_daum_roughmap_landing",
                  id: "daumRoughmapContainer1488352285516",
                  style: { width: 785 },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "wrap_map", style: { width: "785px", height: "400px" }, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                      "div",
                      {
                        className: "map",
                        style: {
                          overflow: "hidden"
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                          "div",
                          {
                            id: "map1",
                            style: {
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: "100%",
                              height: "100%",
                              touchAction: "none",
                              maxWidth: "785px",
                              maxHeight: "400px"
                            }
                          }
                        )
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "wrap_controllers hide", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                        import_react_router_dom50.Link,
                        {
                          className: "tit_controllers",
                          onClick: () => window.open(daumMapUrl2),
                          target: "_blank",
                          children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                            "img",
                            {
                              src: "//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png",
                              width: 72,
                              height: 16,
                              alt: "\uCE74\uCE74\uC624\uB9F5",
                              style: { display: "block", width: 72, height: 16 }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "wrap_btn_roadview", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                        import_react_router_dom50.Link,
                        {
                          className: "txt",
                          target: "_blank",
                          onClick: () => window.open(daumMapUrl2),
                          children: "\uAE38\uCC3E\uAE30"
                        }
                      ) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uC8FC\uC18C" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "\uC9C0\xA0\xA0 \uBC88 : ",
                REACT_APP_CENTER_ADR_2
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "\uB3C4\uB85C\uBA85 : ",
                REACT_APP_CENTER_ADR_1,
                "  ",
                " "
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uB300\uD45C\uC804\uD654" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "TEL: ",
                REACT_APP_CENTER_TEL
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "\uC5C5\uBB34\uC2DC\uAC04 : \uD3C9\uC77C ",
                REACT_APP_CENTER_NORMAL_TIME,
                " / \uD1A0 ",
                REACT_APP_CENTER_SATURDAY_TIME,
                " (\uC77C,\uACF5\uD734\uC77C \uD734\uBB34)",
                " "
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uC8FC\uCC28" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("ul", { className: "list_type", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                " \uAC74\uBB3C \uC55E, \uD639\uC740 \uAC74\uBB3C \uC55E\uC5D0 \uC790\uB9AC\uAC00 \uC5C6\uC744 \uACBD\uC6B0 ",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
                "\uC81C 5 \uACF5\uC601\uC8FC\uCC28\uC7A5\uC5D0 \uC8FC\uCC28\uD558\uACE0 \uC624\uC2DC\uBA74 \uC8FC\uCC28\uAD8C \uBC1C\uBD80\uD574\uB4DC\uB9BD\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
                "\uC81C 4, 5 \uACF5\uC601 \uC8FC\uCC28\uC7A5\uC758 \uACBD\uC6B0 \uC7A5\uC560\uC778\uC99D\uC774 \uC788\uC73C\uC2DC\uBA74 \uBB34\uB8CC\uC8FC\uCC28 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {})
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uAD50\uD1B5" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("ul", { className: "list_type", children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uAD6C\uB9AC\uC5ED(\uACBD\uC758,\uC911\uC559\uC120) 2\uBC88 3\uBC88 \uCD9C\uAD6C \uB3C4\uBCF4 3\uBD84" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uAD6C\uB9AC\uC5ED, \uAD6C\uB9AC\uC5ED\uC785\uAD6C(\uC911), \uB86F\uB370\uBC31\uD654\uC810" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uC77C\uBC18\uBC84\uC2A4 : 1-4, 3, 9, 9-1, 10-5, 15, 23, 30, 65, 65-1, 93, 95, 97, 165, 166-1, 167, 167-1, 2000-1, 2000-3, 2000-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uC9C1\uD589/\uAE09\uD589 : 115-6,1330-2,1330-4, 1330-44, 8005, 8409" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uC88C\uC11D\uBC84\uC2A4 : 330-1" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uB9C8\uC744\uBC84\uC2A4 : 2, 2-1, 5, 6, 7, 8" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "map_area_mobile", children: [
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
                "div",
                {
                  className: "root_daum_roughmap root_daum_roughmap_landing",
                  id: "daumRoughmapContainer1488352322282",
                  style: { width: 330 },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "wrap_map", style: { height: 230 }, children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                      "div",
                      {
                        className: "map",
                        style: {
                          overflow: "hidden"
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                          "div",
                          {
                            id: "map2",
                            style: {
                              position: "absolute",
                              left: 0,
                              top: 0,
                              width: "100%",
                              height: "100%",
                              touchAction: "none"
                            }
                          }
                        )
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", { className: "wrap_controllers hide", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_router_dom50.Link, { onClick: () => window.open(daumMapUrl2), className: "tit_controllers", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
                        "img",
                        {
                          src: "//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png",
                          width: 72,
                          height: 16,
                          alt: "\uCE74\uCE74\uC624\uB9F5",
                          style: { display: "block", width: 72, height: 16 }
                        }
                      ) }),
                      /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: "wrap_btn_roadview", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_react_router_dom50.Link, { onClick: () => window.open(daumMapUrl2), className: "txt", children: "\uAE38\uCC3E\uAE30" }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uC8FC\uC18C" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "\uC9C0\xA0\xA0 \uBC88 : ",
                REACT_APP_CENTER_ADR_1
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "\uB3C4\uB85C\uBA85 : ",
                REACT_APP_CENTER_ADR_2,
                " ",
                " "
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uB300\uD45C\uC804\uD654" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: REACT_APP_CENTER_TEL }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                "\uC5C5\uBB34\uC2DC\uAC04 : \uD3C9\uC77C ",
                REACT_APP_CENTER_NORMAL_TIME,
                " / \uD1A0 ",
                REACT_APP_CENTER_SATURDAY_TIME,
                " (\uC77C,\uACF5\uD734\uC77C \uD734\uBB34)",
                " "
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uC8FC\uCC28" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("ul", { className: "list_type", children: /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("p", { className: "bu2", children: [
                " \uAC74\uBB3C \uC55E, \uD639\uC740 \uAC74\uBB3C \uC55E\uC5D0 \uC790\uB9AC\uAC00 \uC5C6\uC744 \uACBD\uC6B0 ",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
                "\uC81C 5 \uACF5\uC601\uC8FC\uCC28\uC7A5\uC5D0 \uC8FC\uCC28\uD558\uACE0 \uC624\uC2DC\uBA74 \uC8FC\uCC28\uAD8C \uBC1C\uBD80\uD574\uB4DC\uB9BD\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {}),
                "\uC81C 4, 5 \uACF5\uC601 \uC8FC\uCC28\uC7A5\uC758 \uACBD\uC6B0 \uC7A5\uC560\uC778\uC99D\uC774 \uC788\uC73C\uC2DC\uBA74 \uBB34\uB8CC\uC8FC\uCC28 \uAC00\uB2A5\uD569\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("br", {})
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("h2", { className: "tit1", children: "\uAD50\uD1B5" }),
              /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("ul", { className: "list_type", children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uAD6C\uB9AC\uC5ED(\uACBD\uC758,\uC911\uC559\uC120) 2\uBC88 3\uBC88 \uCD9C\uAD6C \uB3C4\uBCF4 3\uBD84" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uAD6C\uB9AC\uC5ED, \uAD6C\uB9AC\uC5ED\uC785\uAD6C(\uC911), \uB86F\uB370\uBC31\uD654\uC810" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uC77C\uBC18\uBC84\uC2A4 : 1-4, 3, 9, 9-1, 10-5, 15, 23, 30, 65, 65-1, 93, 95, 97, 165, 166-1, 167, 167-1, 2000-1, 2000-3, 2000-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uC9C1\uD589/\uAE09\uD589 : 115-6,1330-2,1330-4, 1330-44, 8005, 8409" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uC88C\uC11D\uBC84\uC2A4 : 330-1" }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("p", { className: "bu2", children: "\uB9C8\uC744\uBC84\uC2A4 : 2, 2-1, 5, 6, 7, 8" })
              ] })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Comming_default = IntroduceComming;

// app/routes/board/introduce/DaumMap.js
var DaumMap_exports = {};
__export(DaumMap_exports, {
  DaumMap: () => DaumMap2,
  default: () => DaumMap_default
});
var import_react62 = require("react"), import_jsx_runtime54 = require("react/jsx-runtime"), DaumMap2 = () => ((0, import_react62.useEffect)(() => {
  let { kakao: kakao2 } = window;
  kakao2.maps.load(() => {
    console.log("123");
    let container = document.getElementById("map"), options = {
      center: new kakao2.maps.LatLng(35.85133, 127.734086),
      level: 3
    }, map = new kakao2.maps.Map(container, options);
    console.log("loading kakaomap");
  });
}, []), /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { id: "map" }) })), DaumMap_default = DaumMap2;

// app/routes/board/programs/cure/Art.js
var Art_exports = {};
__export(Art_exports, {
  CureArt: () => CureArt,
  default: () => Art_default
});
var import_react63 = require("react"), import_react_router_dom51 = require("react-router-dom");
var import_jsx_runtime55 = require("react/jsx-runtime");
function CureArt() {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(import_jsx_runtime55.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("article", { id: "ctt", className: "ctt_program_6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h1", { children: "\uBBF8\uC220\uCE58\uB8CC" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#3bb3c3;}
    #lnb>ul>li.lnb01 a {color:#3bb3c3;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("span", { className: "fb", children: "\uBBF8\uC220\uCE58\uB8CC" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("div", { className: "cont_program_list", children: [
              /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("h2", { children: "\uBBF8\uC220\uCE58\uB8CC" }),
              /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("li", { className: "L2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("p", { className: "text1", children: [
                  "\uB9D0\uB85C \uC790\uC2E0\uC744 \uCDA9\uBD84\uD788 \uD45C\uD604\uD558\uAE30\uC5D0 \uC5B4\uB824\uC6C0\uC774 \uC788\uB294 \uC544\uC774\uB4E4\uC758 \uC7A0\uC7AC\uB825\uC744",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  " \uCD5C\uB300\uD55C \uBC1C\uD718\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC8FC\uB294 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("p", { className: "text2", children: [
                  "\uC815\uC11C\uBB38\uC81C \uBC0F \uB9D0\xB7\uC5B8\uC5B4\uC7A5\uC560\uB97C \uAC00\uC9C4 \uC544\uB3D9\uACFC \uCCAD\uC18C\uB144\uC5D0\uAC8C \uAC1C\uC778\uC758 \uD2B9\uC131 \uBC0F \uBC1C\uB2EC\uC218\uC900\uC744 \uACE0\uB824\uD558\uC5EC ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uBBF8\uC220\uB9E4\uCCB4\uB97C \uD65C\uC6A9\uD55C \uC801\uD569\uD55C \uCE58\uB8CC\uAE30\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uC544\uB3D9\uB4E4\uC774 \uC88B\uC544\uD558\uB294 \uBBF8\uC220\uB180\uC774\uB97C \uD1B5\uD574 \uC815\uC11C\uC801 \uAD00\uACC4\uB97C \uD615\uC131\uD558\uAE30 \uB54C\uBB38\uC5D0 ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uD3B8\uC548\uD558\uACE0 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC544\uB3D9 \uC790\uC2E0\uC744 \uD45C\uD604\uD558\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4. ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uB610\uD55C \uB2E4\uC591\uD55C \uBBF8\uC220\uC7AC\uB8CC\uB97C \uB9CC\uC9C0\uACE0 \uB290\uB07C\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uC544\uB3D9 \uB0B4\uBA74\uC5D0 \uC7A0\uC7AC\uB41C \uAC10\uC815\uC744 \uBC1C\uACAC\uD558\uACE0 \uC870\uC808\uD560 \uC218 \uC788\uB294 \uB2A5\uB825\uC744 \uD5A5\uC0C1\uC2DC\uCF1C\uC90D\uB2C8\uB2E4. \xA0"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text2_img", children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("img", { alt: "\uBBF8\uC220\uCE58\uB8CC", src: REACT_APP_URL + "/image/cureprogram/cure_art.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text1", children: "\uCE58\uB8CC \uB300\uC0C1" }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text2", children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC8FC\uC758\uB825 \uACB0\uD54D \uBC0F \uACFC\uC789\uD589\uB3D9\uC744 \uBCF4\uC774\uB294 \uC544\uB3D9(ADHD)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC790\uC2E0\uAC10\uC774 \uC5C6\uACE0 \uC704\uCD95\uB41C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC2EC\uB9AC\uC801\uC73C\uB85C \uBD88\uC548\uAC10\uC744 \uB290\uB07C\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uBC1C\uB2EC\uC774 \uC9C0\uC5F0\uB418\uAC70\uB098 \uB2A6\uB418\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC790\uD3D0\uC131\uD5A5\uC774 \uC788\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uACE0\uC9D1\uC774 \uC138\uACE0 \uC9DC\uC99D\uC774 \uB9CE\uAC70\uB098 \uACF5\uACA9\uC801\uC778 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC720\uCE58\uC6D0\uC774\uB098 \uD559\uAD50\uC5D0 \uC801\uC751\uC744 \uBABB\uD558\uB294 \uC544\uB3D9" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { style: { width: "50%", float: "left" }, children: /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("ul", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC2EC\uB9AC \uBC0F \uC815\uC11C \uBB38\uC81C\uB85C \uD589\uB3D9\uC5D0 \uBB38\uC81C\uB97C \uBCF4\uC774\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uB610\uB798\uC640 \uC5B4\uC6B8\uB9AC\uC9C0 \uBABB\uD558\uACE0 \uC0AC\uD68C\uC131\uC774 \uBD80\uC871\uD55C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC815\uC11C \uBC0F \uD589\uB3D9\uBB38\uC81C\uB85C \uC778\uD558\uC5EC \uBC1C\uB2EC\uC774 \uC9C0\uCCB4\uB41C \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uC120\uCC9C\uC801 \uC694\uC778\uC73C\uB85C \uC778\uD574 \uC9C0\uB2A5\uC774 \uB0AE\uC740 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uBC30\uC124 \uBB38\uC81C\uB098 \uC218\uBA74 \uBB38\uC81C\uB97C \uBCF4\uC774\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uACF5\uACA9\uC131, \uAC70\uC9D3\uB9D0, \uB3C4\uBCBD \uB4F1\uC758 \uD589\uB3D9\uBB38\uC81C\uB97C \uBCF4\uC774\uB294 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uCDA9\uB3D9\uC870\uC808 \uBC0F \uC695\uAD6C\uC9C0\uC5F0\uC774 \uC5B4\uB824\uC6B4 \uC544\uB3D9" }),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("li", { children: "\uBAA8\uC640\uC758 \uBD84\uB9AC\uAC00 \uC5B4\uB824\uC6B4 \uC544\uB3D9" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { children: "\xA0" }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "line" }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("p", { className: "text1", children: "\uAE30\uB300 \uD6A8\uACFC" }),
                /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)("p", { className: "text2", style: { width: "100%" }, children: [
                  "\uBBF8\uC220\uCE58\uB8CC\uB294 \uD615\uC0C1\uC744 \uD1B5\uD574\uC11C \uC8FC\uBCC0\uC758 \uC138\uACC4\uC5D0 \uB300\uD55C \uAC10\uC815\uACFC \uC0AC\uACE0, \uAC1C\uB150 \uB4F1\uC744 \uAD6C\uC870\uD654\uD558\uB294 \uC2DC\uAC01\uC801 \uC0AC\uACE0\uB97C \uBC1C\uB2EC\uC2DC\uD0A4\uBA70, ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uB9D0\uB85C \uD45C\uD604\uD558\uAE30 \uBD88\uAC00\uB2A5\uD558\uAC70\uB098 \uC5B4\uB824\uC6B4 \uACBD\uD5D8\uACFC \uAC10\uC815\uB4E4\uC744 \uD45C\uD604\uD560 \uC218 \uC788\uB3C4\uB85D \uB3C4\uC640\uC90D\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uAC10\uC131\uACFC \uC9C0\uAC01\uC744 \uC790\uADF9\uD560 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uBBF8\uC220\uD65C\uB3D9\uC758 \uAC10\uAC01\uC801 \uACBD\uD5D8\uC740 \uAC10\uC131\uC801 \uBCF4\uC0C1\uACFC \uCE58\uC720 \uBC0F \uC2A4\uD2B8\uB808\uC2A4\uB97C \uAC10\uC18C\uD0A4\uBA70, ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uC790\uC2E0\uC758 \uAC10\uC815\uC744 \uBBF8\uC220\uB85C \uD45C\uD604\uD558\uB294 \uACFC\uC815\uC744 \uD1B5\uD574 \uCE74\uD0C0\uB974\uC2DC\uC2A4\uB97C \uACBD\uD5D8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uB610\uD55C \uBBF8\uC220\uC791\uD488\uC758 \uCC3D\uC870\uACFC\uC815\uC740 \uC790\uC544\uAC1C\uB150\uC744 \uD615\uC131\uD558\uACE0 \uC704\uD5D8\uD55C \uC0C1\uD669\uC744 \uC774\uACA8\uB0BC \uC6A9\uAE30\uB97C \uC8FC\uACE0 ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uC2B5\uB4DD\uD558\uC5EC \uC0B6\uC744 \uD48D\uC694\uB86D\uAC8C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uBBF8\uC220\uCE58\uB8CC\uC5D0 \uC788\uC5B4 \uCE58\uC720, \uBCF4\uC0C1, \uD68C\uBCF5\uC758 \uC911\uC2EC\uC778 \uCE58\uB8CC\uC0AC\uB294 ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uB0B4\uB2F4\uC790\uC640 \uAC1C\uC778\uC801 \uC131\uC7A5\uACFC \uC790\uC874\uAC10\uC744 \uBD81\uB3CB\uC6CC\uC8FC\uB294 \uC6A9\uAE30, \uC778\uC815 \uBC0F \uAE0D\uC815\uC801 \uD655\uC2E0\uC744 \uC8FC\uB294 \uAD00\uACC4\uB97C \uB9FA\uAC8C \uB418\uBA70 ",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {}),
                  "\uC774\uB97C \uAE30\uBC18\uC73C\uB85C \uC0C1\uD638\uAD00\uACC4\uB97C \uBC1C\uB2EC\uC2DC\uD0A4\uBA70 \uC758\uC0AC\uC18C\uD1B5\uC744 \uC99D\uC9C4\uC2DC\uD0B5\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("br", {})
                ] })
              ] }) })
            ] })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Art_default = CureArt;

// app/routes/board/introduce/Center.js
var Center_exports = {};
__export(Center_exports, {
  IntroduceCenter: () => IntroduceCenter,
  default: () => Center_default
});
var import_react64 = require("react"), import_react_router_dom52 = require("react-router-dom");
var import_jsx_runtime56 = require("react/jsx-runtime");
function IntroduceCenter() {
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_jsx_runtime56.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "subtop", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(IntroduceSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("article", { id: "ctt", className: "ctt_company", children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h1", { children: "\uC13C\uD130 \uC18C\uAC1C" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
#GNB ul li.gnb01 a {color:#a99808;}
#lnb>ul>li.lnb01 a {color:#a99808;}
.subNav ul li.lnb01 a {background-color: #89BCC1;}
`
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { children: "\uC13C\uD130 \uC18C\uAC1C" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { children: "HOME" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { className: "fb", children: "\uC13C\uD130 \uC18C\uAC1C" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "style",
              {
                dangerouslySetInnerHTML: {
                  __html: `

.container_block_history {float:left;}
.container_block_history h2 {float:left; text-align: center; text-align: justify; color: rgb(102, 102, 102); line-height: 60px; letter-spacing: -2px; font-family: "\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size: 35px; font-weight: bold; color:#949494;}
.container_block_history p {float:left;  margin-left:40px;  padding-top:10px; text-align: justify; color: rgb(102, 102, 102); line-height: 23px; letter-spacing: -1px; font-family: "\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size: 13px;}

.sub_tit {margin-bottom:10px;}
.cont_company_fotter {float:right; margin-top:30px; padding-right:20px; font-family: "\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size: 13px;}
.cont_company_fotter span {font-size:20px; font-weight:bold; color:#333;}
.container_block_left {width:45%;}
@media screen and (max-width:700px) { 
/* \uD68C\uC0AC\uC18C\uAC1C */
.container_block_left {width:100%; float:left; text-align:left;}
.container_block_right {width:100%; float:left;}
}


  `
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cont_company_tit", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tit", children: [
              "\uB9C8\uC74C\uC744 \uB098\uB204\uB294 \uB530\uB73B\uD55C \uC138\uC0C1\xA0",
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("b", { children: REACT_APP_CENTER_NAME })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "container_box_left", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "tit", children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h2", { children: "\uC0C1\uB2F4\uC2DC\uAC04" }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("p", { children: [
                "\uD3C9\uC77C : ",
                REACT_APP_CENTER_NORMAL_TIME,
                " / \uD1A0 ",
                REACT_APP_CENTER_SATURDAY_TIME,
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("br", {}),
                "(\uC77C,\uACF5\uD734\uC77C \uD734\uBB34)",
                " "
              ] })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "container_box_right", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("img", { alt: "", src: REACT_APP_URL + "/image/sub_tmp_img.jpg", border: 0 }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "container_block" }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "container_block_left", children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "sub_block", children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_tit", children: "\uD558\uB098. \uBB38\uC81C\uD574\uACB0\uC744 \uC704\uD55C \uB178\uB825" }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_txt", children: "\uC544\uC774\uB4E4\uC758 \uBC1C\uB2EC\uACFC\uC815 \uC911 \uB098\uD0C0\uB0A0 \uC218 \uC788\uB294 \uB2E4\uC591\uD55C \uBB38\uC81C\uB97C \uD568\uAED8 \uACE0\uBBFC\uD558\uACE0 \uD574\uACB0 \uD574 \uB098\uAC00\uB3C4\uB85D \uB178\uB825 \uD558\uACA0\uC2B5\uB2C8\uB2E4." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "sub_block", children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_tit", children: "\uD558\uB098. \uCCB4\uACC4\uC801\uC778 \uCE58\uB8CC\uAD50\uC721" }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_txt", children: "\uC544\uC774\uC640\uC758 \uC778\uACA9\uC801 \uAD00\uACC4\uB97C \uBC14\uD0D5\uC73C\uB85C, \uC801\uC808\uD55C \uC0C1\uD638\uC791\uC6A9\uC744 \uD1B5\uD574 \uC62C\uBC14\uB978 \uC6B4\uB3D9\uAE30\uB2A5 \uC2B5\uB4DD\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC5B8\uC5B4, \uC778\uC9C0, \uC0AC\uD68C\uC131 \uBC1C\uB2EC \uB4F1 \uD3EC\uAD04\uC801\uC778 \uBC1C\uB2EC\uACFC\uC815\uC744 \uACE0\uB824\uD558\uC5EC \uC7AC\uD65C\uCE58\uB8CC\uAD50\uC721\uC744 \uD574 \uB098\uAC00\uACA0\uC2B5\uB2C8\uB2E4." })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "container_block_right", children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "sub_block", children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_tit", children: "\uD558\uB098. \uC7A0\uC7AC\uB2A5\uB825 \uADF9\uB300\uD654" }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_txt", children: "\uC544\uC774\uC758 \uBBF8\uB798 \uAC00\uB2A5\uC131\uC744 \uBC14\uD0D5\uC73C\uB85C \uC544\uC774 \uB208\uB192\uC774\uC5D0 \uB9DE\uCDB0 \uC544\uC774\uC758 \uC7A0\uC7AC\uB2A5\uB825\uC744 \uCD5C\uB300\uD55C \uC774\uB04C\uC5B4 \uB0B4\uC5B4 \uCE58\uB8CC\uC2E4 \uBFD0 \uC544\uB2C8\uB77C \uAC00\uC815 \uBC0F \uC0AC\uD68C\uD65C\uB3D9\uC73C\uB85C \uC774\uC5B4\uC9C0\uB3C4\uB85D \uD558\uB294\uB370 \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC2B5\uB2C8\uB2E4." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "sub_block", children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_tit", children: "\uD558\uB098. \uBC1D\uC740 \uC6C3\uC74C\uC774 \uB118\uCE58\uB294 \uC13C\uD130" }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_txt", children: "\uBD80\uBAA8\uB2D8\uC758 \uC785\uC7A5\uC5D0\uC11C \uBD80\uBAA8\uB2D8\uC758 \uB9C8\uC74C\uC73C\uB85C, \uC544\uC774\uC758 \uD589\uBCF5\uACFC \uC131\uC7A5\uC744 \uC704\uD558\uC5EC \uCD5C\uC120\uC744 \uB2E4\uD558\uACA0\uC2B5\uB2C8\uB2E4." })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
              "style",
              {
                dangerouslySetInnerHTML: {
                  __html: `

.container_block_history {float:left;}
.container_block_history h2 {float:left; text-align: center; text-align: justify; color: rgb(102, 102, 102); line-height: 60px; letter-spacing: -2px; font-family: "\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size: 35px; font-weight: bold; color:#949494;}
.container_block_history p {float:left;  margin-left:40px;  padding-top:10px; text-align: justify; color: rgb(102, 102, 102); line-height: 23px; letter-spacing: -1px; font-family: "\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size: 13px;}


.cont_company_fotter {float:right; margin-top:30px; padding-right:20px; font-family: "\uB9D1\uC740 \uACE0\uB515", Malgun Gothic, "\uB098\uB214\uACE0\uB515", NanumGothic, "\uB3CB\uC6C0", dotum; font-size: 13px;}
.cont_company_fotter span {font-size:20px; font-weight:bold; color:#333;}
.sub_txt {line-height:22px;}
  `
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: "container_block_bottom", children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_tit", children: "\uC544\uC774\uB294 \uAC74\uAC15\uD55C \uBBF8\uB798\uC758 \uC8FC\uC778\uC785\uB2C8\uB2E4!" }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "sub_txt", children: "\uC544\uC774\uB4E4\uC758 \uB9C8\uC74C \uC18D\uC5D0 \uB354 \uD06C\uACE0 \uC544\uB984\uB2E4\uC6B4 \uC138\uC0C1\uC744 \uAFC8\uAFC0 \uC218 \uC788\uB3C4\uB85D \uD56D\uC0C1 \uB178\uB825\uD560 \uAC83\uC744 \uC57D\uC18D \uB4DC\uB9BD\uB2C8\uB2E4." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cont_company_fotter" }),
            /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: "cont_company_fotter" })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Center_default = IntroduceCenter;

// app/routes/board/admin/AdminPage.js
var AdminPage_exports = {};
__export(AdminPage_exports, {
  AdminPage: () => AdminPage,
  default: () => AdminPage_default
});
var import_react65 = require("react");
var import_jsx_runtime57 = require("react/jsx-runtime");
function AdminPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("h1", { children: "Sitemap" }),
    /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { children: "Home" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { children: "About" }),
      /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { children: "Contact" })
    ] })
  ] });
}
var AdminPage_default = AdminPage;

// app/routes/board/programs/Detail.js
var Detail_exports5 = {};
__export(Detail_exports5, {
  Detail: () => Detail3,
  default: () => Detail_default5
});
var import_react66 = require("react"), import_react_router_dom53 = require("react-router-dom");
var import_jsx_runtime58 = require("react/jsx-runtime");
function Detail3() {
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(import_jsx_runtime58.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "subtop3", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("br", {}),
      "\uC18C\uAC1C\uB450\uBC88\uC9F8\uC904"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "mobile_subtop", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "head_copy", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("h2", { children: [
      "000 \uC18C\uAC1C",
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("br", {}),
      "000 \uC18C\uAC1C"
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "subtop_140" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "subtop_u" }),
    /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { id: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ProgSubMenu, {}),
      /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("article", { id: "ctt", className: "ctt_program", children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { children: "\uCE58\uB8CC/\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { id: "ctt_con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
    #GNB ul li.gnb02 a {color:#a99808;}
    #lnb>ul>li.lnb01 a {color:#a99808;}
    .subNav ul li.lnb01 a {background-color: #89BCC1;}
    `
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { id: "left_container", children: [
            /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("div", { className: "hgroup", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "\uCE58\uB8CC/\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("p", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "home", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "HOME" }) }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { className: "fb", children: "\uC804\uCCB4" }),
                " "
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(CureNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("span", { children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(PsyTestNaviTab, {}),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text1", children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("p", { className: "text2", children: [
                "\uC544\uB3D9 \uBC0F \uC131\uC778\uC758 \uAC74\uAC15\uD55C \uBC1C\uB2EC\uACFC \uC2EC\uB9AC\uC801 \uC790\uC6D0\uC744 \uC704\uD55C \uB2E4\uC591\uD55C \uD504\uB85C\uADF8\uB7A8 \uD655\uC778",
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react_router_dom53.Link, { to: "/board/programs/cure/detail", children: "\uCE58\uB8CC \uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
            ] }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("div", { className: "cont_program_list", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("li", { className: "L", children: [
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("p", { className: "text1", children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8" }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)("p", { className: "text2", children: [
                "\uAC1C\uC778\uC5D0 \uB9DE\uCD98 \uB2E4\uC591\uD55C \uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8 \uD655\uC778\xA0",
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("br", {})
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("li", { className: "none", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(import_react_router_dom53.Link, { to: "/board/programs/psytest/detail", children: "\uAC80\uC0AC \uD504\uB85C\uADF8\uB7A8 \uC790\uC138\uD788\uBCF4\uAE30" }) }) })
            ] }) }) })
          ] }),
          " "
        ] })
      ] })
    ] })
  ] });
}
var Detail_default5 = Detail3;

// app/routes/section/MobileVisual.js
var MobileVisual_exports = {};
__export(MobileVisual_exports, {
  default: () => MobileVisual_default
});
var import_react67 = require("react");
var import_jsx_runtime59 = require("react/jsx-runtime");
function MobileVisual() {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_jsx_runtime59.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "voucher_mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("b", { children: "\uBC1C\uB2EC\uC7AC\uD65C, \uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0, \uAD50\uC721\uCCAD" }),
      " \uBC14\uC6B0\uCC98 \uC81C\uACF5\uAE30\uAD00",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "http://www.gurislp.com/board/bbs/content.php?co_id=voucher1", children: "\uBC14\uB85C\uAC00\uAE30 +" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "slidebox_mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { className: "slide02", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "http://www.gurislp.com/board/bbs/board.php?bo_table=teacher", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("ul", { className: "cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("li", { className: "left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: "\uC601\uC5ED\uBCC4 \uC804\uBB38 \uCE58\uB8CC\uC0AC\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { className: "right", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: REACT_APP_URL + "/image/icon_plus.gif" }) }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { className: "slide03", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "http://www.gurislp.com/board/bbs/board.php?bo_table=gallery", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("ul", { className: "cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("li", { className: "left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { className: "right", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: REACT_APP_URL + "/image/icon_plus.gif" }) }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { className: "slide04", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("a", { href: "http://www.gurislp.com/board/bbs/content.php?co_id=map", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("ul", { className: "cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("li", { className: "left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("h2", { children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: "\uAD50\uD1B5\uD3B8 \uBC0F \uC704\uCE58 \uC548\uB0B4\uC785\uB2C8\uB2E4" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("li", { className: "right", children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("img", { src: REACT_APP_URL + "/image/icon_plus.gif" }) }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { style: { float: "left" }, children: "\xA0" })
    ] })
  ] });
}
var MobileVisual_default = MobileVisual;

// app/routes/section/Visual.js
var Visual_exports = {};
__export(Visual_exports, {
  Visual: () => Visual,
  default: () => Visual_default
});
var import_react68 = require("react"), import_react_router_dom54 = require("react-router-dom");
var import_jsx_runtime60 = require("react/jsx-runtime");
function Visual() {
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("section", { id: "visual", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "rslides_container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("ul", { className: "rslides centered-btns centered-btns1", id: "slider1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        "li",
        {
          id: "centered-btns1_s0",
          style: {
            transition: "opacity 500ms ease-in-out",
            float: "none",
            display: "block",
            position: "absolute",
            zIndex: 1,
            opacity: 0
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("img", { alt: "visual1", src: REACT_APP_URL + "/image/visual1.jpg" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
        "li",
        {
          className: "centered-btns1_on",
          id: "centered-btns1_s1",
          style: {
            transition: "opacity 500ms ease-in-out",
            float: "left",
            display: "list-item",
            position: "relative",
            zIndex: 2,
            opacity: 1
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("img", { alt: "visual2", src: REACT_APP_URL + "/image/visual2.jpg" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react_router_dom54.Link, { className: "centered-btns_nav centered-btns1_nav prev", href: "#", children: "Previous" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { className: "centered-btns_nav centered-btns1_nav next", href: "#", children: "Next" }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("ul", { className: "centered-btns_tabs centered-btns1_tabs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { className: "centered-btns1_s1", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { className: "centered-btns1_s1", href: "#", children: "1" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("li", { className: "centered-btns1_s2 centered-btns_here", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("a", { className: "centered-btns1_s2", href: "#", children: "2" }) })
    ] })
  ] }) });
}
var Visual_default = Visual;

// app/routes/index copy.jsx
var index_copy_exports = {};
__export(index_copy_exports, {
  default: () => Index
});
var import_react71 = require("@remix-run/react");

// app/utils.js
var import_react69 = require("@remix-run/react"), import_react70 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react69.useMatches)(), route = (0, import_react70.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/index copy.jsx
var import_jsx_runtime61 = require("react/jsx-runtime");
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("main", { className: "relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "img",
          {
            className: "h-full w-full object-cover",
            src: "https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg",
            alt: "Sonic Youth On Stage"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "Indie Stack" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("img", { src: "http://localhost:3000/image/bg_arrow_down.png" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl", children: "Check the README.md file for instructions on how to get this project deployed." }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
          import_react71.Link,
          {
            to: "/notes",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: [
              "View Notes for ",
              user.email
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
            import_react71.Link,
            {
              to: "/join",
              className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
              children: "Sign up"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
            import_react71.Link,
            {
              to: "/login",
              className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
              children: "Log In"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { href: "https://remix.run", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "img",
          {
            src: "https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg",
            alt: "Remix",
            className: "mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "mt-6 flex flex-wrap justify-center gap-8", children: [
      {
        src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
        alt: "Fly.io",
        href: "https://fly.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
        alt: "SQLite",
        href: "https://sqlite.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
        alt: "Tailwind",
        href: "https://tailwindcss.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
        alt: "Cypress",
        href: "https://www.cypress.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
        alt: "MSW",
        href: "https://mswjs.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
        alt: "Vitest",
        href: "https://vitest.dev"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
        alt: "Testing Library",
        href: "https://testing-library.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
        alt: "Prettier",
        href: "https://prettier.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
        alt: "ESLint",
        href: "https://eslint.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
        alt: "TypeScript",
        href: "https://typescriptlang.org"
      }
    ].map((img) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
      "a",
      {
        href: img.href,
        className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0",
        children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("img", { alt: img.alt, src: img.src, className: "object-contain" })
      },
      img.href
    )) }) })
  ] }) });
}

// app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
async function action({ request }) {
  return logout(request);
}
async function loader2() {
  return (0, import_node4.redirect)("/");
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
var import_react72 = require("@remix-run/react"), import_react73 = require("react"), import_react_router_dom55 = require("react-router-dom");
var import_jsx_runtime62 = require("react/jsx-runtime");
function Index2() {
  let user = useOptionalUser(), [visualNum, setVisualNum] = (0, import_react73.useState)(0), visual0Chg = (setNum) => {
    setVisualNum(setNum), visualNum % 2 == 0 ? (document.getElementById("visual0").className = "centered-btns1_s1", document.getElementById("visual1").className = "centered-btns1_s2 centered-btns_here", document.getElementById("centered-btns1_s0").className = "", document.getElementById("centered-btns1_s0").style = "display:block; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;", document.getElementById("centered-btns1_s1").className = "centered-btns1_on", document.getElementById("centered-btns1_s1").style = "display:list-item; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;", setVisualNum(1)) : (document.getElementById("visual1").className = "centered-btns1_s2", document.getElementById("visual0").className = "centered-btns1_s1 centered-btns_here", document.getElementById("centered-btns1_s1").className = "", document.getElementById("centered-btns1_s1").style = "display:list-item; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;", document.getElementById("centered-btns1_s0").className = "centered-btns1_on", document.getElementById("centered-btns1_s0").style = "display:block; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;", setVisualNum(0));
  };
  return (0, import_react73.useEffect)(() => {
    let timer = setInterval(() => {
      document.getElementById("visual0").className == "centered-btns1_s1 centered-btns_here" ? (document.getElementById("visual0").className = "centered-btns1_s1", document.getElementById("visual1").className = "centered-btns1_s2 centered-btns_here", document.getElementById("centered-btns1_s0").className = "", document.getElementById("centered-btns1_s0").style = "display:block; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;", document.getElementById("centered-btns1_s1").className = "centered-btns1_on", document.getElementById("centered-btns1_s1").style = "display:list-item; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;", setVisualNum(1)) : (document.getElementById("visual1").className = "centered-btns1_s2", document.getElementById("visual0").className = "centered-btns1_s1 centered-btns_here", document.getElementById("centered-btns1_s1").className = "", document.getElementById("centered-btns1_s1").style = "display:list-item; float:none; position: absolute; opacity:0; z-index:1; transition: opacity 500ms ease-in-out 0s;", document.getElementById("centered-btns1_s0").className = "centered-btns1_on", document.getElementById("centered-btns1_s0").style = "display:block; float:left; position: relative; opacity:1; z-index:2; transition: opacity 500ms ease-in-out 0s;", setVisualNum(0));
    }, 5e3);
    return () => clearInterval(timer);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_jsx_runtime62.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("section", { id: "visual", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "rslides_container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { className: "rslides centered-btns centered-btns1", id: "slider1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "li",
          {
            id: "centered-btns1_s0",
            className: "centered-btns1_on",
            style: {
              transition: "opacity 500ms ease-in-out",
              float: "left",
              display: "block",
              position: "relative",
              zIndex: 2,
              opacity: 1
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "visual1", src: REACT_APP_URL + "/image/visual1.jpg" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "li",
          {
            className: "",
            id: "centered-btns1_s1",
            style: {
              transition: "opacity 500ms ease-in-out",
              float: "none",
              display: "list-item",
              position: "absolute",
              zIndex: 1,
              opacity: 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "visual2", src: REACT_APP_URL + "/image/visual2.jpg" })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { className: "centered-btns_nav centered-btns1_nav prev", onClick: () => visual0Chg(visualNum), children: "Previous" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { className: "centered-btns_nav centered-btns1_nav next", onClick: () => visual0Chg(visualNum), children: "Next" }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { className: "centered-btns_tabs centered-btns1_tabs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { id: "visual0", className: "centered-btns1_s1 centered-btns_here", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { className: "centered-btns1_s1", onClick: () => visual0Chg(1), children: "1" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { id: "visual1", className: "centered-btns1_s2", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { className: "centered-btns1_s2", onClick: () => visual0Chg(0), children: "2" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "voucher_mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("b", { children: "\uBC1C\uB2EC\uC7AC\uD65C, \uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0, \uAD50\uC721\uCCAD" }),
      " \uBC14\uC6B0\uCC98 \uC81C\uACF5\uAE30\uAD00",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/introduce/boucher/boucherbaldal", children: "\uBC14\uB85C\uAC00\uAE30 +" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "slidebox_mobile", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "slide02", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/introduce/teacher/teacher", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { className: "cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("h2", { children: "\uCE58\uB8CC\uC0AC \uC18C\uAC1C" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: "\uC601\uC5ED\uBCC4 \uC804\uBB38 \uCE58\uB8CC\uC0AC\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "right", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: REACT_APP_URL + "/image/icon_plus.gif" }) }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "slide03", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/introduce/centermore", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { className: "cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("h2", { children: "\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: "\uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130 \uB458\uB7EC\uBCF4\uAE30" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "right", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: REACT_APP_URL + "/image/icon_plus.gif" }) }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "slide04", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/introduce/comming", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { className: "cell", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "left", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("h2", { children: "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: "\uAD50\uD1B5\uD3B8 \uBC0F \uC704\uCE58 \uC548\uB0B4\uC785\uB2C8\uB2E4" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "right", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { src: REACT_APP_URL + "/image/icon_plus.gif" }) }) })
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { style: { float: "left" }, children: "\xA0" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { id: "sCtnt", children: [
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "sInner", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "sEmpl group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "voucher", children: [
          "\u318D \uAD6C\uB9AC\uC5B8\uC5B4\uC2EC\uB9AC\uC0C1\uB2F4\uC13C\uD130\uB294",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("b", { children: "\uBC1C\uB2EC\uC7AC\uD65C\uBC14\uC6B0\uCC98, \uC6B0\uB9AC\uC544\uC774\uC2EC\uB9AC\uC9C0\uC6D0, \uAD50\uC721\uCCAD \uBC14\uC6B0\uCC98" }),
          " \uC81C\uACF5\uAE30\uAD00\uC785\uB2C8\uB2E4.",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/introduce/boucher/boucherbaldal", children: "\uBC14\uC6B0\uCC98 \uC548\uB0B4 \uBC14\uB85C\uAC00\uAE30" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "img_tile", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/introduce/center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                title: "",
                alt: "\uCE58\uB8CC\uC2E4\uC18C\uAC1C",
                src: REACT_APP_URL + "/image/item_01.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uCE58\uB8CC\uC2E4\uC18C\uAC1C" }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/introduce/centermore", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                alt: "\uC13C\uD130\uB458\uB7EC\uBCF4\uAE30",
                src: REACT_APP_URL + "/image/item_02.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uC13C\uD130\uB458\uB7EC\uBCF4\uAE30" }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/programs/detail", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                title: "",
                alt: "\uCE58\uB8CC\uD504\uB85C\uADF8\uB7A8",
                src: REACT_APP_URL + "/image/item_03.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uCE58\uB8CC/\uAC80\uC0AC\uD504\uB85C\uADF8\uB7A8" }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/introduce/teacher/teacher", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                alt: "\uCE58\uB8CC\uC0AC\uC18C\uAC1C",
                src: REACT_APP_URL + "/image/item_04.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uCE58\uB8CC\uC0AC\uC18C\uAC1C" }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/introduce/comming", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                alt: "\uCC3E\uC544\uC624\uC2DC\uB294\uAE38",
                src: REACT_APP_URL + "/image/item_05.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uCC3E\uC544\uC624\uC2DC\uB294\uAE38" }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/consult/askanswer/board", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                alt: "\uC628\uB77C\uC778\uC0C1\uB2F4",
                src: REACT_APP_URL + "/image/item_06.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uC628\uB77C\uC778\uC0C1\uB2F4" }) })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "item", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/introduce/boucher/boucherbaldal", children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "img",
              {
                width: 60,
                height: 60,
                alt: "\uBC14\uC6B0\uCC98\uC548\uB0B4",
                src: REACT_APP_URL + "/image/item_07.png"
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "text_box", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "subject", children: "\uBC14\uC6B0\uCC98\uC548\uB0B4" }) })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "sNoti group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("dl", { className: "noti01", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("dt", { children: "\uCE58\uB8CC\uAD50\uC721\uACFC\uC815" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "img", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uC0C1\uB2F4\uC608\uC57D", src: REACT_APP_URL + "/image/empl05.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("span", { className: "ex", children: [
                  "\uC13C\uD130 \uBC29\uBB38 \uC804, \uC804\uD654 \uB610\uB294 \uC628\uB77C\uC778 \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uBC29\uBB38\uC0C1\uB2F4 \uC77C\uC815\uC744 \uC608\uC57D\uD569\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("br", {})
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "img", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uCD08\uAE30\uC0C1\uB2F4", src: REACT_APP_URL + "/image/empl06.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "ex", children: "\uBD80\uBAA8\uB2D8\uACFC \uC544\uB3D9\uC774 \uC13C\uD130\uC5D0 \uD568\uAED8 \uB0B4\uC6D0\uD558\uC5EC \uC0C1\uB2F4\uC744 \uD1B5\uD574 \uC5B4\uB5A4 \uCE58\uB8CC\uAD50\uC721\uC774 \uD544\uC694\uD55C\uC9C0 \uACB0\uC815\uD569\uB2C8\uB2E4." })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { className: "img", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uCE58\uB8CC\uAD50\uC721\uD3C9\uAC00", src: REACT_APP_URL + "/image/empl07.gif" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("span", { className: "ex", children: [
                  "\uC544\uC774\uC5D0\uAC8C \uD544\uC694\uD55C \uAC1C\uC778\uBCC4 \uB9DE\uCDA4\uCE58\uB8CC\uAC00 \uC9C4\uD589\uB418\uBA70 \uB3D9\uC2DC\uC5D0 \uD3C9\uAC00\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4.",
                  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("br", {})
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "more", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/programs/detail", children: [
              "\uB354\uBCF4\uAE30",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uB354\uBCF4\uAE30", src: REACT_APP_URL + "/image/ico_more.png" }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("dl", { className: "noti02", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("dt", { children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "blit2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/community/usualquestion", children: "\uC804\uD654\uC608\uC57D\uC774 \uD544\uC694\uD55C\uAC00\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "blit2" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "blit2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/community/usualquestion", children: "\uC0C1\uB2F4\uC2DC\uAC04\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "blit2" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "blit2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/community/usualquestion", children: "\uC8FC\uCC28\uC7A5\uC774\uC6A9\uC740 \uAC00\uB2A5\uD55C\uAC00\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "blit2" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "blit2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/community/usualquestion", children: "\uAC80\uC0AC\uBE44\uC6A9\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "blit2" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("li", { className: "blit2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/community/usualquestion", children: "\uCE58\uB8CC \uC18C\uC694\uC2DC\uAC04\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?" }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("li", { className: "blit2" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "more", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/community/usualquestion", children: [
              "\uB354\uBCF4\uAE30",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uB354\uBCF4\uAE30", src: REACT_APP_URL + "/image/ico_more.png" }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("dl", { className: "noti03 last", children: [
          /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("dt", { children: "\uC0C1\uB2F4/\uBB38\uC758" }),
          /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("dd", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "more", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { to: "/board/consult/askanswer/board", children: [
              "\uB354\uBCF4\uAE30",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uB354\uBCF4\uAE30", src: REACT_APP_URL + "/image/ico_more.png" }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("p", { className: "tx01", children: [
                "\uC5F0\uB77D\uC8FC\uC2DC\uBA74 \uCE5C\uC808\uD788 \uC0C1\uB2F4\uD574\uB4DC\uB9BD\uB2C8\uB2E4.",
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("br", {}),
                "\uD3C9\uC77C ",
                REACT_APP_CENTER_NORMAL_TIME,
                " / \uD1A0 ",
                REACT_APP_CENTER_SATURDAY_TIME,
                " (\uC77C,\uACF5\uD734\uC77C \uD734\uBB34)",
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("abbr", { style: { color: "rgb(244, 116, 36)" }, children: "* \uBCF8 \uC13C\uD130\uB294 \uC608\uC57D\uC81C\uB85C \uC6B4\uC601\uB429\uB2C8\uB2E4." }),
                /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("img", { alt: "\uBB38\uC758", src: REACT_APP_URL + "/image/ico_ask.png" }),
                  /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_react72.Link, { to: "/board/consult/askanswer/board", children: "\uC0C1\uB2F4 \uBB38\uC758\uD558\uAE30" })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("p", { className: "tx02", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(import_react72.Link, { href: "#", onClick: () => window.location.href = "tel:" + REACT_APP_CENTER_TEL, children: [
                "\xA0\xA0",
                REACT_APP_CENTER_TEL
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader3,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react74 = require("@remix-run/react"), React60 = __toESM(require("react"));
var import_user2 = require("~/models/user.server");
var import_jsx_runtime63 = require("react/jsx-runtime");
async function loader3({ request }) {
  return await getUserId(request) ? (0, import_node5.redirect)("/") : (0, import_node5.json)({});
}
async function action2({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/notes"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node5.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node5.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node5.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await (0, import_user2.verifyLogin)(email, password);
  return user ? createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo
  }) : (0, import_node5.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}
var meta2 = () => ({
  title: "Login"
});
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react74.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react74.useActionData)(), emailRef = React60.useRef(null), passwordRef = React60.useRef(null);
  return React60.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_react74.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
          import_react74.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          }
        )
      ] })
    ] })
  ] }) }) });
}

// app/routes/notes.jsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react75 = require("@remix-run/react");
var import_note = require("~/models/note.server"), import_jsx_runtime64 = require("react/jsx-runtime");
async function loader4({ request }) {
  let userId = await requireUserId(request), noteListItems = await (0, import_note.getNoteListItems)({ userId });
  return (0, import_node6.json)({ noteListItems });
}
function NotesPage() {
  let data = (0, import_react75.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react75.Link, { to: ".", children: "Notes" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { children: user.email }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react75.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react75.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("hr", {}),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("p", { className: "p-4", children: "No notes yet" }) : /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
          import_react75.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          }
        ) }, note.id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_react75.Outlet, {}) })
    ] })
  ] });
}

// app/routes/notes/$noteId.jsx
var noteId_exports = {};
__export(noteId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action3,
  default: () => NoteDetailsPage,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node"), import_react76 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant")), import_note2 = require("~/models/note.server");
var import_jsx_runtime65 = require("react/jsx-runtime");
async function loader5({ request, params }) {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await (0, import_note2.getNote)({ userId, id: params.noteId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node7.json)({ note });
}
async function action3({ request, params }) {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await (0, import_note2.deleteNote)({ userId, id: params.noteId }), (0, import_node7.redirect)("/notes");
}
function NoteDetailsPage() {
  let data = (0, import_react76.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("h3", { className: "text-2xl font-bold", children: data.note.title }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("p", { className: "py-6", children: data.note.body }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("hr", { className: "my-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_react76.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      }
    ) })
  ] });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] });
}
function CatchBoundary() {
  let caught = (0, import_react76.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { children: "Note not found" });
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// app/routes/notes/index.jsx
var notes_exports2 = {};
__export(notes_exports2, {
  default: () => NoteIndexPage
});
var import_react77 = require("@remix-run/react"), import_jsx_runtime66 = require("react/jsx-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_react77.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." })
  ] });
}

// app/routes/notes/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => NewNotePage
});
var import_node8 = require("@remix-run/node"), import_react78 = require("@remix-run/react"), React61 = __toESM(require("react")), import_note3 = require("~/models/note.server");
var import_jsx_runtime67 = require("react/jsx-runtime");
async function action4({ request }) {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node8.json)(
      { errors: { title: "Title is required", body: null } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node8.json)(
      { errors: { title: null, body: "Body is required" } },
      { status: 400 }
    );
  let note = await (0, import_note3.createNote)({ title, body, userId });
  return (0, import_node8.redirect)(`/notes/${note.id}`);
}
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react78.useActionData)(), titleRef = React61.useRef(null), bodyRef = React61.useRef(null);
  return React61.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.title ? (_b2 = titleRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.body && ((_d2 = bodyRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
    import_react78.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { children: "Title: " }),
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.title ? !0 : void 0,
                "aria-errormessage": (_b = actionData == null ? void 0 : actionData.errors) != null && _b.title ? "title-error" : void 0
              }
            )
          ] }),
          ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { children: "Body: " }),
            /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6",
                "aria-invalid": (_d = actionData == null ? void 0 : actionData.errors) != null && _d.body ? !0 : void 0,
                "aria-errormessage": (_e = actionData == null ? void 0 : actionData.errors) != null && _e.body ? "body-error" : void 0
              }
            )
          ] }),
          ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          }
        ) })
      ]
    }
  );
}

// app/routes/join.jsx
var join_exports = {};
__export(join_exports, {
  action: () => action5,
  default: () => Join,
  loader: () => loader6,
  meta: () => meta3
});
var import_node9 = require("@remix-run/node"), import_react79 = require("@remix-run/react"), React62 = __toESM(require("react"));
var import_user3 = require("~/models/user.server");
var import_jsx_runtime68 = require("react/jsx-runtime");
async function loader6({ request }) {
  return await getUserId(request) ? (0, import_node9.redirect)("/") : (0, import_node9.json)({});
}
async function action5({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node9.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node9.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await (0, import_user3.getUserByEmail)(email))
    return (0, import_node9.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await (0, import_user3.createUser)(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: !1,
    redirectTo
  });
}
var meta3 = () => ({
  title: "Sign Up"
});
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react79.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react79.useActionData)(), emailRef = React62.useRef(null), passwordRef = React62.useRef(null);
  return React62.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)(import_react79.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
        import_react79.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        }
      )
    ] }) })
  ] }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e8bcca8a", entry: { module: "/build/entry.client-JZFPK3QJ.js", imports: ["/build/_shared/chunk-X2EN7YGU.js", "/build/_shared/chunk-MCRHK6YC.js", "/build/_shared/chunk-OK5KZHZF.js", "/build/_shared/chunk-GP5N67D4.js", "/build/_shared/chunk-6EJ7SM6C.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KMYOO7PR.js", imports: ["/build/_shared/chunk-XXDWJZXM.js", "/build/_shared/chunk-PQS4MNIV.js", "/build/_shared/chunk-STERA366.js", "/build/_shared/chunk-OCVX57L5.js", "/build/_shared/chunk-BYPAF6MZ.js", "/build/_shared/chunk-WBOSGNRV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/admin/AdminPage": { id: "routes/board/admin/AdminPage", parentId: "root", path: "board/admin/AdminPage", index: void 0, caseSensitive: void 0, module: "/build/routes/board/admin/AdminPage-Y56N2DZS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/Community": { id: "routes/board/community/Community", parentId: "root", path: "board/community/Community", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/Community-VD76KGJD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/CommunitySubmenu": { id: "routes/board/community/CommunitySubmenu", parentId: "root", path: "board/community/CommunitySubmenu", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/CommunitySubmenu-N4YTP2UB.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/UsualQuestion": { id: "routes/board/community/UsualQuestion", parentId: "root", path: "board/community/UsualQuestion", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/UsualQuestion-AYTLDLOA.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Board": { id: "routes/board/community/notice/Board", parentId: "root", path: "board/community/notice/Board", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Board-GBSJO5IJ.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Detail": { id: "routes/board/community/notice/Detail", parentId: "root", path: "board/community/notice/Detail", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Detail-4FWULN3E.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Detail1": { id: "routes/board/community/notice/Detail1", parentId: "root", path: "board/community/notice/Detail1", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Detail1-OA5Z4FC2.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Detail2": { id: "routes/board/community/notice/Detail2", parentId: "root", path: "board/community/notice/Detail2", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Detail2-BZPMV3II.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Detail3": { id: "routes/board/community/notice/Detail3", parentId: "root", path: "board/community/notice/Detail3", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Detail3-W55CCEZ6.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Detail4": { id: "routes/board/community/notice/Detail4", parentId: "root", path: "board/community/notice/Detail4", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Detail4-ZW2DATC4.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Detail5": { id: "routes/board/community/notice/Detail5", parentId: "root", path: "board/community/notice/Detail5", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Detail5-6GTDOVEM.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/community/notice/Write": { id: "routes/board/community/notice/Write", parentId: "root", path: "board/community/notice/Write", index: void 0, caseSensitive: void 0, module: "/build/routes/board/community/notice/Write-EIBC5HN7.js", imports: ["/build/_shared/chunk-GAD2TO55.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/consult/askanswer/AskAnswerSubmenu": { id: "routes/board/consult/askanswer/AskAnswerSubmenu", parentId: "root", path: "board/consult/askanswer/AskAnswerSubmenu", index: void 0, caseSensitive: void 0, module: "/build/routes/board/consult/askanswer/AskAnswerSubmenu-FICLYNBC.js", imports: ["/build/_shared/chunk-GPS3JPRB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/consult/askanswer/Board": { id: "routes/board/consult/askanswer/Board", parentId: "root", path: "board/consult/askanswer/Board", index: void 0, caseSensitive: void 0, module: "/build/routes/board/consult/askanswer/Board-W34DYMPA.js", imports: ["/build/_shared/chunk-GPS3JPRB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/consult/askanswer/Detail": { id: "routes/board/consult/askanswer/Detail", parentId: "root", path: "board/consult/askanswer/Detail", index: void 0, caseSensitive: void 0, module: "/build/routes/board/consult/askanswer/Detail-B5NGXXOM.js", imports: ["/build/_shared/chunk-GPS3JPRB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/consult/askanswer/Write": { id: "routes/board/consult/askanswer/Write", parentId: "root", path: "board/consult/askanswer/Write", index: void 0, caseSensitive: void 0, module: "/build/routes/board/consult/askanswer/Write-Q4G66QN2.js", imports: ["/build/_shared/chunk-GPS3JPRB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/Center": { id: "routes/board/introduce/Center", parentId: "root", path: "board/introduce/Center", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/Center-XBAXMKBI.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/CenterMore": { id: "routes/board/introduce/CenterMore", parentId: "root", path: "board/introduce/CenterMore", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/CenterMore-UVN5GQ2M.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/Comming": { id: "routes/board/introduce/Comming", parentId: "root", path: "board/introduce/Comming", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/Comming-Y2MMHHJX.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/DaumMap": { id: "routes/board/introduce/DaumMap", parentId: "root", path: "board/introduce/DaumMap", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/DaumMap-WZBL5M3J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/DaumMapTry": { id: "routes/board/introduce/DaumMapTry", parentId: "root", path: "board/introduce/DaumMapTry", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/DaumMapTry-B35RZO6K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/Introduce": { id: "routes/board/introduce/Introduce", parentId: "root", path: "board/introduce/Introduce", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/Introduce-W7HDOVIP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/IntroduceSubMenu": { id: "routes/board/introduce/IntroduceSubMenu", parentId: "root", path: "board/introduce/IntroduceSubMenu", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/IntroduceSubMenu-L65PIOPC.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/boucher/BoucherBaldal": { id: "routes/board/introduce/boucher/BoucherBaldal", parentId: "root", path: "board/introduce/boucher/BoucherBaldal", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/boucher/BoucherBaldal-TM5VGUHZ.js", imports: ["/build/_shared/chunk-LUOVFJUO.js", "/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/boucher/BoucherChild": { id: "routes/board/introduce/boucher/BoucherChild", parentId: "root", path: "board/introduce/boucher/BoucherChild", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/boucher/BoucherChild-IXFQYWDB.js", imports: ["/build/_shared/chunk-LUOVFJUO.js", "/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/boucher/BoucherCure": { id: "routes/board/introduce/boucher/BoucherCure", parentId: "root", path: "board/introduce/boucher/BoucherCure", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/boucher/BoucherCure-DWE3NO3W.js", imports: ["/build/_shared/chunk-LUOVFJUO.js", "/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/boucher/BoucherNavi": { id: "routes/board/introduce/boucher/BoucherNavi", parentId: "root", path: "board/introduce/boucher/BoucherNavi", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/boucher/BoucherNavi-IBMOXBWM.js", imports: ["/build/_shared/chunk-LUOVFJUO.js", "/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/Advisor": { id: "routes/board/introduce/teacher/Advisor", parentId: "root", path: "board/introduce/teacher/Advisor", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/Advisor-AWGFLHJ4.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/CEO": { id: "routes/board/introduce/teacher/CEO", parentId: "root", path: "board/introduce/teacher/CEO", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/CEO-GIT43ANE.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/Teacher": { id: "routes/board/introduce/teacher/Teacher", parentId: "root", path: "board/introduce/teacher/Teacher", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/Teacher-A5AD7IEN.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail": { id: "routes/board/introduce/teacher/TeacherDetail", parentId: "root", path: "board/introduce/teacher/TeacherDetail", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail-N4WDJF4T.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail1": { id: "routes/board/introduce/teacher/TeacherDetail1", parentId: "root", path: "board/introduce/teacher/TeacherDetail1", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail1-P2YBQ3MN.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail2": { id: "routes/board/introduce/teacher/TeacherDetail2", parentId: "root", path: "board/introduce/teacher/TeacherDetail2", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail2-JNCOWI46.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail3": { id: "routes/board/introduce/teacher/TeacherDetail3", parentId: "root", path: "board/introduce/teacher/TeacherDetail3", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail3-LHFVAA3H.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail4": { id: "routes/board/introduce/teacher/TeacherDetail4", parentId: "root", path: "board/introduce/teacher/TeacherDetail4", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail4-JSY36J3G.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail5": { id: "routes/board/introduce/teacher/TeacherDetail5", parentId: "root", path: "board/introduce/teacher/TeacherDetail5", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail5-O4X7DZQJ.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail6": { id: "routes/board/introduce/teacher/TeacherDetail6", parentId: "root", path: "board/introduce/teacher/TeacherDetail6", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail6-3V4KOR26.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail7": { id: "routes/board/introduce/teacher/TeacherDetail7", parentId: "root", path: "board/introduce/teacher/TeacherDetail7", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail7-NTXIVNCF.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/introduce/teacher/TeacherDetail8": { id: "routes/board/introduce/teacher/TeacherDetail8", parentId: "root", path: "board/introduce/teacher/TeacherDetail8", index: void 0, caseSensitive: void 0, module: "/build/routes/board/introduce/teacher/TeacherDetail8-2FQY766W.js", imports: ["/build/_shared/chunk-VBZP5FID.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/Detail": { id: "routes/board/programs/Detail", parentId: "root", path: "board/programs/Detail", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/Detail-MAOASZGB.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js", "/build/_shared/chunk-J73UULND.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/ProgSubMenu": { id: "routes/board/programs/ProgSubMenu", parentId: "root", path: "board/programs/ProgSubMenu", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/ProgSubMenu-NLPHCV4A.js", imports: ["/build/_shared/chunk-SLXF63IE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Art": { id: "routes/board/programs/cure/Art", parentId: "root", path: "board/programs/cure/Art", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Art-TTRD74UT.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/CureNaviTab": { id: "routes/board/programs/cure/CureNaviTab", parentId: "root", path: "board/programs/cure/CureNaviTab", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/CureNaviTab-JCE3FUTM.js", imports: ["/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Detail": { id: "routes/board/programs/cure/Detail", parentId: "root", path: "board/programs/cure/Detail", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Detail-A326S7K3.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Family": { id: "routes/board/programs/cure/Family", parentId: "root", path: "board/programs/cure/Family", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Family-VGBQYT5F.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Group": { id: "routes/board/programs/cure/Group", parentId: "root", path: "board/programs/cure/Group", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Group-Y6P2HCST.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Language": { id: "routes/board/programs/cure/Language", parentId: "root", path: "board/programs/cure/Language", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Language-KODQHHUL.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Notice": { id: "routes/board/programs/cure/Notice", parentId: "root", path: "board/programs/cure/Notice", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Notice-PFYUG72A.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Play": { id: "routes/board/programs/cure/Play", parentId: "root", path: "board/programs/cure/Play", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Play-MC2ZOMRO.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/cure/Sense": { id: "routes/board/programs/cure/Sense", parentId: "root", path: "board/programs/cure/Sense", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/cure/Sense-JSJ7QS7F.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-LAIF2OTT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/psytest/Detail": { id: "routes/board/programs/psytest/Detail", parentId: "root", path: "board/programs/psytest/Detail", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/psytest/Detail-JKAGQ5LL.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-J73UULND.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/psytest/PsyTestNaviTab": { id: "routes/board/programs/psytest/PsyTestNaviTab", parentId: "root", path: "board/programs/psytest/PsyTestNaviTab", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/psytest/PsyTestNaviTab-OCVB6LSS.js", imports: ["/build/_shared/chunk-J73UULND.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/board/programs/psytest/SimliTest": { id: "routes/board/programs/psytest/SimliTest", parentId: "root", path: "board/programs/psytest/SimliTest", index: void 0, caseSensitive: void 0, module: "/build/routes/board/programs/psytest/SimliTest-V6FDZ3CS.js", imports: ["/build/_shared/chunk-SLXF63IE.js", "/build/_shared/chunk-J73UULND.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/footer/Footer": { id: "routes/footer/Footer", parentId: "root", path: "footer/Footer", index: void 0, caseSensitive: void 0, module: "/build/routes/footer/Footer-KMMJBHIQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/header/BranchPcMobile": { id: "routes/header/BranchPcMobile", parentId: "root", path: "header/BranchPcMobile", index: void 0, caseSensitive: void 0, module: "/build/routes/header/BranchPcMobile-DLZTXNUV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/header/Header": { id: "routes/header/Header", parentId: "root", path: "header/Header", index: void 0, caseSensitive: void 0, module: "/build/routes/header/Header-E6D5RWQD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index copy": { id: "routes/index copy", parentId: "root", path: "index copy", index: void 0, caseSensitive: void 0, module: "/build/routes/index copy-NJB3HXHF.js", imports: ["/build/_shared/chunk-J2ZVAEHL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-BMMYMVDX.js", imports: ["/build/_shared/chunk-4XSTL2H3.js", "/build/_shared/chunk-J2ZVAEHL.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-EADX3R3L.js", imports: ["/build/_shared/chunk-JA76ZJ7B.js", "/build/_shared/chunk-FPOB764B.js", "/build/_shared/chunk-J2ZVAEHL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-YI66J7CE.js", imports: ["/build/_shared/chunk-JA76ZJ7B.js", "/build/_shared/chunk-FPOB764B.js", "/build/_shared/chunk-J2ZVAEHL.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-3OR2ZPKL.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-KJIAAFPG.js", imports: ["/build/_shared/chunk-EXA2H3AC.js", "/build/_shared/chunk-FPOB764B.js", "/build/_shared/chunk-J2ZVAEHL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes/$noteId": { id: "routes/notes/$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes/$noteId-NPTMKLCE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/notes/index": { id: "routes/notes/index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes/index-UOCCBAWW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/notes/new": { id: "routes/notes/new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes/new-RLRYD3IR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/section/MobileVisual": { id: "routes/section/MobileVisual", parentId: "root", path: "section/MobileVisual", index: void 0, caseSensitive: void 0, module: "/build/routes/section/MobileVisual-QF7KECLH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/section/Visual": { id: "routes/section/Visual", parentId: "root", path: "section/Visual", index: void 0, caseSensitive: void 0, module: "/build/routes/section/Visual-H4BZABMF.js", imports: ["/build/_shared/chunk-4XSTL2H3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/siteMap/SiteMap": { id: "routes/siteMap/SiteMap", parentId: "root", path: "siteMap/SiteMap", index: void 0, caseSensitive: void 0, module: "/build/routes/siteMap/SiteMap-6RDQCUCR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-E8BCCA8A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/board/consult/askanswer/AskAnswerSubmenu": {
    id: "routes/board/consult/askanswer/AskAnswerSubmenu",
    parentId: "root",
    path: "board/consult/askanswer/AskAnswerSubmenu",
    index: void 0,
    caseSensitive: void 0,
    module: AskAnswerSubmenu_exports
  },
  "routes/board/introduce/teacher/TeacherDetail1": {
    id: "routes/board/introduce/teacher/TeacherDetail1",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail1",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail1_exports
  },
  "routes/board/introduce/teacher/TeacherDetail2": {
    id: "routes/board/introduce/teacher/TeacherDetail2",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail2",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail2_exports
  },
  "routes/board/introduce/teacher/TeacherDetail3": {
    id: "routes/board/introduce/teacher/TeacherDetail3",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail3",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail3_exports
  },
  "routes/board/introduce/teacher/TeacherDetail4": {
    id: "routes/board/introduce/teacher/TeacherDetail4",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail4",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail4_exports
  },
  "routes/board/introduce/teacher/TeacherDetail5": {
    id: "routes/board/introduce/teacher/TeacherDetail5",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail5",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail5_exports
  },
  "routes/board/introduce/teacher/TeacherDetail6": {
    id: "routes/board/introduce/teacher/TeacherDetail6",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail6",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail6_exports
  },
  "routes/board/introduce/teacher/TeacherDetail7": {
    id: "routes/board/introduce/teacher/TeacherDetail7",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail7",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail7_exports
  },
  "routes/board/introduce/teacher/TeacherDetail8": {
    id: "routes/board/introduce/teacher/TeacherDetail8",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail8",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail8_exports
  },
  "routes/board/introduce/boucher/BoucherBaldal": {
    id: "routes/board/introduce/boucher/BoucherBaldal",
    parentId: "root",
    path: "board/introduce/boucher/BoucherBaldal",
    index: void 0,
    caseSensitive: void 0,
    module: BoucherBaldal_exports
  },
  "routes/board/introduce/teacher/TeacherDetail": {
    id: "routes/board/introduce/teacher/TeacherDetail",
    parentId: "root",
    path: "board/introduce/teacher/TeacherDetail",
    index: void 0,
    caseSensitive: void 0,
    module: TeacherDetail_exports
  },
  "routes/board/programs/psytest/PsyTestNaviTab": {
    id: "routes/board/programs/psytest/PsyTestNaviTab",
    parentId: "root",
    path: "board/programs/psytest/PsyTestNaviTab",
    index: void 0,
    caseSensitive: void 0,
    module: PsyTestNaviTab_exports
  },
  "routes/board/introduce/boucher/BoucherChild": {
    id: "routes/board/introduce/boucher/BoucherChild",
    parentId: "root",
    path: "board/introduce/boucher/BoucherChild",
    index: void 0,
    caseSensitive: void 0,
    module: BoucherChild_exports
  },
  "routes/board/introduce/boucher/BoucherCure": {
    id: "routes/board/introduce/boucher/BoucherCure",
    parentId: "root",
    path: "board/introduce/boucher/BoucherCure",
    index: void 0,
    caseSensitive: void 0,
    module: BoucherCure_exports
  },
  "routes/board/introduce/boucher/BoucherNavi": {
    id: "routes/board/introduce/boucher/BoucherNavi",
    parentId: "root",
    path: "board/introduce/boucher/BoucherNavi",
    index: void 0,
    caseSensitive: void 0,
    module: BoucherNavi_exports
  },
  "routes/board/community/CommunitySubmenu": {
    id: "routes/board/community/CommunitySubmenu",
    parentId: "root",
    path: "board/community/CommunitySubmenu",
    index: void 0,
    caseSensitive: void 0,
    module: CommunitySubmenu_exports
  },
  "routes/board/introduce/IntroduceSubMenu": {
    id: "routes/board/introduce/IntroduceSubMenu",
    parentId: "root",
    path: "board/introduce/IntroduceSubMenu",
    index: void 0,
    caseSensitive: void 0,
    module: IntroduceSubMenu_exports
  },
  "routes/board/programs/psytest/SimliTest": {
    id: "routes/board/programs/psytest/SimliTest",
    parentId: "root",
    path: "board/programs/psytest/SimliTest",
    index: void 0,
    caseSensitive: void 0,
    module: SimliTest_exports
  },
  "routes/board/introduce/teacher/Advisor": {
    id: "routes/board/introduce/teacher/Advisor",
    parentId: "root",
    path: "board/introduce/teacher/Advisor",
    index: void 0,
    caseSensitive: void 0,
    module: Advisor_exports
  },
  "routes/board/introduce/teacher/Teacher": {
    id: "routes/board/introduce/teacher/Teacher",
    parentId: "root",
    path: "board/introduce/teacher/Teacher",
    index: void 0,
    caseSensitive: void 0,
    module: Teacher_exports
  },
  "routes/board/programs/cure/CureNaviTab": {
    id: "routes/board/programs/cure/CureNaviTab",
    parentId: "root",
    path: "board/programs/cure/CureNaviTab",
    index: void 0,
    caseSensitive: void 0,
    module: CureNaviTab_exports
  },
  "routes/board/community/notice/Detail1": {
    id: "routes/board/community/notice/Detail1",
    parentId: "root",
    path: "board/community/notice/Detail1",
    index: void 0,
    caseSensitive: void 0,
    module: Detail1_exports
  },
  "routes/board/community/notice/Detail2": {
    id: "routes/board/community/notice/Detail2",
    parentId: "root",
    path: "board/community/notice/Detail2",
    index: void 0,
    caseSensitive: void 0,
    module: Detail2_exports
  },
  "routes/board/community/notice/Detail3": {
    id: "routes/board/community/notice/Detail3",
    parentId: "root",
    path: "board/community/notice/Detail3",
    index: void 0,
    caseSensitive: void 0,
    module: Detail3_exports
  },
  "routes/board/community/notice/Detail4": {
    id: "routes/board/community/notice/Detail4",
    parentId: "root",
    path: "board/community/notice/Detail4",
    index: void 0,
    caseSensitive: void 0,
    module: Detail4_exports
  },
  "routes/board/community/notice/Detail5": {
    id: "routes/board/community/notice/Detail5",
    parentId: "root",
    path: "board/community/notice/Detail5",
    index: void 0,
    caseSensitive: void 0,
    module: Detail5_exports
  },
  "routes/board/consult/askanswer/Detail": {
    id: "routes/board/consult/askanswer/Detail",
    parentId: "root",
    path: "board/consult/askanswer/Detail",
    index: void 0,
    caseSensitive: void 0,
    module: Detail_exports
  },
  "routes/board/community/notice/Detail": {
    id: "routes/board/community/notice/Detail",
    parentId: "root",
    path: "board/community/notice/Detail",
    index: void 0,
    caseSensitive: void 0,
    module: Detail_exports2
  },
  "routes/board/community/UsualQuestion": {
    id: "routes/board/community/UsualQuestion",
    parentId: "root",
    path: "board/community/UsualQuestion",
    index: void 0,
    caseSensitive: void 0,
    module: UsualQuestion_exports
  },
  "routes/board/consult/askanswer/Board": {
    id: "routes/board/consult/askanswer/Board",
    parentId: "root",
    path: "board/consult/askanswer/Board",
    index: void 0,
    caseSensitive: void 0,
    module: Board_exports
  },
  "routes/board/consult/askanswer/Write": {
    id: "routes/board/consult/askanswer/Write",
    parentId: "root",
    path: "board/consult/askanswer/Write",
    index: void 0,
    caseSensitive: void 0,
    module: Write_exports
  },
  "routes/board/programs/psytest/Detail": {
    id: "routes/board/programs/psytest/Detail",
    parentId: "root",
    path: "board/programs/psytest/Detail",
    index: void 0,
    caseSensitive: void 0,
    module: Detail_exports3
  },
  "routes/board/community/notice/Board": {
    id: "routes/board/community/notice/Board",
    parentId: "root",
    path: "board/community/notice/Board",
    index: void 0,
    caseSensitive: void 0,
    module: Board_exports2
  },
  "routes/board/community/notice/Write": {
    id: "routes/board/community/notice/Write",
    parentId: "root",
    path: "board/community/notice/Write",
    index: void 0,
    caseSensitive: void 0,
    module: Write_exports2
  },
  "routes/board/programs/cure/Language": {
    id: "routes/board/programs/cure/Language",
    parentId: "root",
    path: "board/programs/cure/Language",
    index: void 0,
    caseSensitive: void 0,
    module: Language_exports
  },
  "routes/board/introduce/teacher/CEO": {
    id: "routes/board/introduce/teacher/CEO",
    parentId: "root",
    path: "board/introduce/teacher/CEO",
    index: void 0,
    caseSensitive: void 0,
    module: CEO_exports
  },
  "routes/board/introduce/CenterMore": {
    id: "routes/board/introduce/CenterMore",
    parentId: "root",
    path: "board/introduce/CenterMore",
    index: void 0,
    caseSensitive: void 0,
    module: CenterMore_exports
  },
  "routes/board/introduce/DaumMapTry": {
    id: "routes/board/introduce/DaumMapTry",
    parentId: "root",
    path: "board/introduce/DaumMapTry",
    index: void 0,
    caseSensitive: void 0,
    module: DaumMapTry_exports
  },
  "routes/board/programs/cure/Detail": {
    id: "routes/board/programs/cure/Detail",
    parentId: "root",
    path: "board/programs/cure/Detail",
    index: void 0,
    caseSensitive: void 0,
    module: Detail_exports4
  },
  "routes/board/programs/cure/Family": {
    id: "routes/board/programs/cure/Family",
    parentId: "root",
    path: "board/programs/cure/Family",
    index: void 0,
    caseSensitive: void 0,
    module: Family_exports
  },
  "routes/board/programs/cure/Notice": {
    id: "routes/board/programs/cure/Notice",
    parentId: "root",
    path: "board/programs/cure/Notice",
    index: void 0,
    caseSensitive: void 0,
    module: Notice_exports
  },
  "routes/board/programs/ProgSubMenu": {
    id: "routes/board/programs/ProgSubMenu",
    parentId: "root",
    path: "board/programs/ProgSubMenu",
    index: void 0,
    caseSensitive: void 0,
    module: ProgSubMenu_exports
  },
  "routes/board/community/Community": {
    id: "routes/board/community/Community",
    parentId: "root",
    path: "board/community/Community",
    index: void 0,
    caseSensitive: void 0,
    module: Community_exports
  },
  "routes/board/introduce/Introduce": {
    id: "routes/board/introduce/Introduce",
    parentId: "root",
    path: "board/introduce/Introduce",
    index: void 0,
    caseSensitive: void 0,
    module: Introduce_exports
  },
  "routes/board/programs/cure/Group": {
    id: "routes/board/programs/cure/Group",
    parentId: "root",
    path: "board/programs/cure/Group",
    index: void 0,
    caseSensitive: void 0,
    module: Group_exports
  },
  "routes/board/programs/cure/Sense": {
    id: "routes/board/programs/cure/Sense",
    parentId: "root",
    path: "board/programs/cure/Sense",
    index: void 0,
    caseSensitive: void 0,
    module: Sense_exports
  },
  "routes/board/programs/cure/Play": {
    id: "routes/board/programs/cure/Play",
    parentId: "root",
    path: "board/programs/cure/Play",
    index: void 0,
    caseSensitive: void 0,
    module: Play_exports
  },
  "routes/board/introduce/Comming": {
    id: "routes/board/introduce/Comming",
    parentId: "root",
    path: "board/introduce/Comming",
    index: void 0,
    caseSensitive: void 0,
    module: Comming_exports
  },
  "routes/board/introduce/DaumMap": {
    id: "routes/board/introduce/DaumMap",
    parentId: "root",
    path: "board/introduce/DaumMap",
    index: void 0,
    caseSensitive: void 0,
    module: DaumMap_exports
  },
  "routes/board/programs/cure/Art": {
    id: "routes/board/programs/cure/Art",
    parentId: "root",
    path: "board/programs/cure/Art",
    index: void 0,
    caseSensitive: void 0,
    module: Art_exports
  },
  "routes/board/introduce/Center": {
    id: "routes/board/introduce/Center",
    parentId: "root",
    path: "board/introduce/Center",
    index: void 0,
    caseSensitive: void 0,
    module: Center_exports
  },
  "routes/board/admin/AdminPage": {
    id: "routes/board/admin/AdminPage",
    parentId: "root",
    path: "board/admin/AdminPage",
    index: void 0,
    caseSensitive: void 0,
    module: AdminPage_exports
  },
  "routes/board/programs/Detail": {
    id: "routes/board/programs/Detail",
    parentId: "root",
    path: "board/programs/Detail",
    index: void 0,
    caseSensitive: void 0,
    module: Detail_exports5
  },
  "routes/header/BranchPcMobile": {
    id: "routes/header/BranchPcMobile",
    parentId: "root",
    path: "header/BranchPcMobile",
    index: void 0,
    caseSensitive: void 0,
    module: BranchPcMobile_exports
  },
  "routes/section/MobileVisual": {
    id: "routes/section/MobileVisual",
    parentId: "root",
    path: "section/MobileVisual",
    index: void 0,
    caseSensitive: void 0,
    module: MobileVisual_exports
  },
  "routes/siteMap/SiteMap": {
    id: "routes/siteMap/SiteMap",
    parentId: "root",
    path: "siteMap/SiteMap",
    index: void 0,
    caseSensitive: void 0,
    module: SiteMap_exports
  },
  "routes/section/Visual": {
    id: "routes/section/Visual",
    parentId: "root",
    path: "section/Visual",
    index: void 0,
    caseSensitive: void 0,
    module: Visual_exports
  },
  "routes/footer/Footer": {
    id: "routes/footer/Footer",
    parentId: "root",
    path: "footer/Footer",
    index: void 0,
    caseSensitive: void 0,
    module: Footer_exports
  },
  "routes/header/Header": {
    id: "routes/header/Header",
    parentId: "root",
    path: "header/Header",
    index: void 0,
    caseSensitive: void 0,
    module: Header_exports
  },
  "routes/index copy": {
    id: "routes/index copy",
    parentId: "root",
    path: "index copy",
    index: void 0,
    caseSensitive: void 0,
    module: index_copy_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/notes/$noteId": {
    id: "routes/notes/$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: noteId_exports
  },
  "routes/notes/index": {
    id: "routes/notes/index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_exports2
  },
  "routes/notes/new": {
    id: "routes/notes/new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
