var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), { PassThrough } = require("stream"), { Response } = require("@remix-run/node"), { RemixServer } = require("@remix-run/react"), { renderToPipeableStream } = require("react-dom/server"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
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
  meta: () => meta
});
var import_react = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-SWMUKIFG.css";

// app/root.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], meta = () => ({
  description: "A cool blog built with Remix",
  keywords: "remix, react, javascript"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title || "Remix Blog"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "navbar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Link, {
            to: "/",
            className: "logo",
            children: "Remix"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "nav",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Link, {
                to: "/posts",
                children: "Posts"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 57,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix!"
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: `Holy smokes you're here! Let's do this. Welcome to the v1 stable release of Remix! Just so we're all clear, this is newly open sourced, so stable means "the API is stable", it doesn\u2019t mean we don't have any bugs \u{1F605} (though, we think we're doing alright). Let us know if you think you found one on GitHub. Getting Started`
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 5,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var routes_default = Home;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Posts() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
      fileName: "app/routes/posts.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/posts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var posts_default = Posts;

// app/routes/posts/$postId.jsx
var postId_exports = {};
__export(postId_exports, {
  action: () => action,
  default: () => postId_default,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// app/routes/posts/$postId.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  let post = await db.post.findUnique({
    where: { id: params.postId }
  });
  if (!post)
    throw new Error("Post not found");
  return { post };
}, action = async ({ request, params }) => {
  if ((await request.formData()).get("_method") === "delete") {
    if (!await db.post.findUnique({
      where: { id: params.postId }
    }))
      throw new Error("Post not found");
    return await db.post.delete({ where: { id: params.postId } }), (0, import_node.redirect)("/posts");
  }
};
function Post() {
  let { post } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: post.title
          }, void 0, !1, {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            to: "/posts",
            className: "btn btn-reserve",
            children: "Back"
          }, void 0, !1, {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: post.body
      }, void 0, !1, {
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
            }, void 0, !1, {
              fileName: "app/routes/posts/$postId.jsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "btn btn-delete",
              children: "Delete"
            }, void 0, !1, {
              fileName: "app/routes/posts/$postId.jsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/posts/$postId.jsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/posts/$postId.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var postId_default = Post;

// app/routes/posts/index.jsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => posts_default2,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async () => ({
  posts: await db.post.findMany({
    take: 20,
    select: { id: !0, title: !0, createdAt: !0 },
    orderBy: { createdAt: "desc" }
  })
});
function PostItems() {
  let { posts } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Posts"
          }, void 0, !1, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 34,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
            to: "/posts/new",
            className: "btn",
            children: "New Post"
          }, void 0, !1, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 35,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "posts-list",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Link, {
            to: post.id,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                children: post.title
              }, void 0, !1, {
                fileName: "app/routes/posts/index.jsx",
                lineNumber: 43,
                columnNumber: 29
              }, this),
              new Date(post.createdAt).toLocaleString()
            ]
          }, void 0, !0, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 42,
            columnNumber: 25
          }, this)
        }, post.id, !1, {
          fileName: "app/routes/posts/index.jsx",
          lineNumber: 41,
          columnNumber: 21
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 32,
    columnNumber: 9
  }, this);
}
var posts_default2 = PostItems;

// app/routes/posts/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => new_default
});
var import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let form = await request.formData(), title = form.get("title"), body = form.get("body"), fields = { title, body };
  console.log(fields);
  let post = await db.post.create({ data: fields });
  return (0, import_node2.redirect)(`/posts/${post.id}`);
};
function NewPost() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "New Post"
          }, void 0, !1, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
            to: "/posts",
            className: "btn btn-reverse",
            children: "Back"
          }, void 0, !1, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 23,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 30,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "title",
                  id: "title"
                }, void 0, !1, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 31,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 34,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  name: "body",
                  id: "body"
                }, void 0, !1, {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 35,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/posts/new.jsx",
              lineNumber: 33,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-block",
              children: "Add Post"
            }, void 0, !1, {
              fileName: "app/routes/posts/new.jsx",
              lineNumber: 37,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/posts/new.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var new_default = NewPost;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cf66662c", entry: { module: "/build/entry.client-GPLRJ6G7.js", imports: ["/build/_shared/chunk-L5SCQNBU.js", "/build/_shared/chunk-4BT3XYWX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F7PCMNFZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-YVR6MBA7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-BERKRKTD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$postId": { id: "routes/posts/$postId", parentId: "routes/posts", path: ":postId", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$postId-ATZ7DUJ5.js", imports: ["/build/_shared/chunk-TY3IWNG2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-XSYVYOWH.js", imports: ["/build/_shared/chunk-TY3IWNG2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/new": { id: "routes/posts/new", parentId: "routes/posts", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/new-G27GBID6.js", imports: ["/build/_shared/chunk-TY3IWNG2.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CF66662C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "routes/posts",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
