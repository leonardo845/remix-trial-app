import {
  require_db
} from "/build/_shared/chunk-TY3IWNG2.js";
import {
  Link,
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-L5SCQNBU.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/routes/posts/$postId.jsx
init_esm();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Post() {
  const { post } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: post.title
          }, void 0, false, {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/posts",
            className: "btn btn-reserve",
            children: "Back"
          }, void 0, false, {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: post.body
      }, void 0, false, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-footer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "_method",
              value: "delete"
            }, void 0, false, {
              fileName: "app/routes/posts/$postId.jsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-delete",
              children: "Delete"
            }, void 0, false, {
              fileName: "app/routes/posts/$postId.jsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/posts/$postId.jsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/$postId.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var postId_default = Post;
export {
  postId_default as default
};
//# sourceMappingURL=/build/routes/posts/$postId-ATZ7DUJ5.js.map
