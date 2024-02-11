import {
  require_db
} from "/build/_shared/chunk-TY3IWNG2.js";
import {
  Link,
  init_esm
} from "/build/_shared/chunk-L5SCQNBU.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/routes/posts/new.jsx
init_esm();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewPost() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "New Post"
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/posts",
            className: "btn btn-reverse",
            children: "Back"
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 23,
            columnNumber: 13
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "form-control",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "title",
                  children: "Title"
                }, void 0, false, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 30,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "title",
                  id: "title"
                }, void 0, false, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 31,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/new.jsx",
              lineNumber: 29,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "form-control",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "body",
                  children: "Post Body"
                }, void 0, false, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 34,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  name: "body",
                  id: "body"
                }, void 0, false, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 35,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/posts/new.jsx",
              lineNumber: 33,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-block",
              children: "Add Post"
            }, void 0, false, {
              fileName: "app/routes/posts/new.jsx",
              lineNumber: 37,
              columnNumber: 17
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/new.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var new_default = NewPost;
export {
  new_default as default
};
//# sourceMappingURL=/build/routes/posts/new-G27GBID6.js.map
