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

// app/routes/posts/index.jsx
init_esm();
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostItems() {
  const { posts } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Posts"
          }, void 0, false, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 34,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: "/posts/new",
            className: "btn",
            children: "New Post"
          }, void 0, false, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 35,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "posts-list",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: post.id,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                children: post.title
              }, void 0, false, {
                fileName: "app/routes/posts/index.jsx",
                lineNumber: 43,
                columnNumber: 29
              }, this),
              new Date(post.createdAt).toLocaleString()
            ]
          }, void 0, true, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, post.id, false, {
          fileName: "app/routes/posts/index.jsx",
          lineNumber: 41,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}
var posts_default = PostItems;
export {
  posts_default as default
};
//# sourceMappingURL=/build/routes/posts/index-XSYVYOWH.js.map
