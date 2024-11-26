import { defineComponent as s, computed as i, openBlock as h, createElementBlock as a, normalizeStyle as r, createStaticVNode as p } from "vue";
const l = /* @__PURE__ */ s({
  __name: "LogoCodefactor",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const c = e, o = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (m, t) => (h(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "77",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 77",
      style: r(o.value)
    }, t[0] || (t[0] = [
      p('<defs><linearGradient id="codefactor-gui-asset-a" x1="-.002%" x2="100.002%" y1="49.998%" y2="49.998%"><stop offset="0%" stop-color="#0AA1A5"></stop><stop offset="100%" stop-color="#50D690"></stop></linearGradient><linearGradient id="codefactor-gui-asset-b" x1="-.002%" x2="100.002%" y1="49.998%" y2="49.998%"><stop offset="0%" stop-color="#0AA1A5"></stop><stop offset="100%" stop-color="#50D690"></stop></linearGradient></defs><g><path fill="#232344" d="M137.667 31.7c-4.242 0-9.114 2.057-9.114 18.056 0 15.998 4.872 18.048 9.114 18.048 2.639 0 6.16-.792 7.92-6.968.508-1.781 2.23-2.928 4.063-2.848 2.684.105 4.497 2.764 3.733 5.368-2.384 8.156-7.56 12.14-15.716 12.14-11.802 0-17.295-8.18-17.295-25.744 0-17.56 5.493-25.74 17.295-25.74 8.156 0 13.332 3.98 15.72 12.136.76 2.604-1.053 5.263-3.737 5.371-1.833.074-3.555-1.07-4.064-2.85-1.76-6.174-5.28-6.968-7.919-6.968m47.194 24.239c0-8.017-2.754-12.084-8.19-12.084-5.431 0-8.185 4.067-8.185 12.084 0 8.013 2.754 12.077 8.188 12.077 5.43 0 8.187-4.064 8.187-12.077m-8.19-19.56c10.466 0 16.231 6.946 16.231 19.56 0 12.61-5.765 19.554-16.228 19.554-10.467 0-16.229-6.943-16.229-19.554 0-12.618 5.762-19.56 16.229-19.56zm47.193 18.696c0-6.92-3.242-11.22-8.47-11.22-6.877 0-7.905 7.567-7.905 12.084 0 4.51 1.028 12.077 7.905 12.077 5.228 0 8.47-4.297 8.47-11.216V55.07zm0-14.633v-15.21c0-2.186 1.753-3.956 3.914-3.956s3.914 1.77 3.914 3.956v45.764c0 2.011-1.613 3.64-3.597 3.64-2.506-.053-3.618-1.37-3.736-3.59-2.203 2.923-5.563 4.45-9.889 4.45-9.407 0-15.022-7.312-15.022-19.557 0-12.067 5.73-19.56 14.953-19.56 3.973 0 7.236 1.418 9.463 4.063m24.813 11.036h15.86c-.931-5.124-3.535-7.623-7.93-7.623-4.392 0-6.996 2.495-7.93 7.623m24.001.278q.051.394.08.778c.276 3.213-2.185 5.988-5.378 5.988h-18.95c.575 6.472 3.353 9.498 8.679 9.498 2.59 0 4.545-.788 5.915-2.27 2.192-2.366 3.96-3.216 6.294-2.108 2.029.958 2.66 3.106 1.3 5.225-2.788 4.34-7.382 6.63-13.583 6.63-10.787 0-16.726-6.972-16.726-19.631 0-12.569 5.785-19.491 16.298-19.491 9.306 0 14.883 5.423 16.071 15.385zm14.396 22.88c-2.046 0-3.702-1.674-3.702-3.74V28.608c0-2.063 1.656-3.736 3.698-3.736h22.92c2.047 0 3.702 1.673 3.702 3.736 0 2.067-1.655 3.74-3.701 3.74h-18.648V45.58h14.378c2.043 0 3.698 1.677 3.698 3.74 0 2.067-1.655 3.74-3.698 3.74h-14.378v17.835c0 2.064-1.659 3.74-3.705 3.74h-.568zm55.722-15.246h-8.602c-3.022 0-6.622.76-6.622 4.384 0 3.695 3.436 4.246 5.482 4.246 5.403 0 9.516-3.681 9.742-8.63m-7.11-23.015c9.78 0 14.95 4.852 14.95 14.022v20.537c0 2.046-1.642 3.694-3.66 3.687-2.792-.055-3.768-1.624-3.706-4.05-2.659 3.161-6.657 4.925-11.359 4.925-7.518 0-12.38-4.573-12.38-11.648 0-7.463 5.207-11.576 14.663-11.576h8.61V50.76c0-4.708-2.308-6.904-7.26-6.904-2.859 0-4.898.683-5.972 2.216q-.258.366-.456.767c-.687 1.374-2.032 2.266-3.548 2.266-2.817 0-4.81-2.931-3.65-5.521q.312-.705.725-1.356c2.064-3.217 5.87-5.852 13.043-5.852m41.213 31.645c3.903 0 5.918-2.66 6.873-4.605.617-1.258 1.917-2.01 3.304-2.01h.767c2.74 0 4.535 2.906 3.332 5.398-2.52 5.64-7.47 8.693-14.276 8.693-10.464 0-16.229-6.95-16.229-19.557 0-12.443 5.612-19.373 15.81-19.56 5.867-.105 11.036 3.143 14.047 7.953l.115.199c1.534 2.58-.39 5.87-3.367 5.87-1.474 0-2.84-.827-3.468-2.175a9 9 0 0 0-.683-1.217c-1.401-2.067-3.444-3.154-6.225-3.154-5.43 0-8.184 4.067-8.184 12.084s2.753 12.08 8.184 12.08m48.047-6.403c0-2.43 1.116-3.778 3.681-3.74 2.213 0 4.008 1.812 4.008 4.05v.411c0 8.575-5.03 13.406-13.753 13.151-6.93-.205-12.374-6.148-12.374-13.15v-17.84h-5.298c-1.987 0-3.597-1.624-3.597-3.628 0-2.008 1.61-3.632 3.594-3.632h5.667l.098-8.78c.024-1.987 1.624-3.586 3.593-3.586h.181c1.984 0 3.59 1.627 3.59 3.632v8.734h12.14c1.987 0 3.59 1.624 3.59 3.632 0 2.004-1.603 3.629-3.59 3.629H414.34v17.113c0 5.682 2.816 6.407 5.267 6.407 3.694 0 5.34-1.973 5.34-6.403m38.934-5.682c0-8.016-2.754-12.08-8.188-12.08s-8.187 4.067-8.187 12.084c0 8.013 2.753 12.077 8.19 12.077 5.428 0 8.181-4.064 8.181-12.077zm-8.188-19.557c10.467 0 16.229 6.947 16.229 19.561 0 12.61-5.762 19.554-16.229 19.554s-16.228-6.943-16.228-19.554c0-12.618 5.761-19.56 16.228-19.56m44.06 0c7.895 0 12.245 5.159 12.245 14.524v1.869c0 2.185-1.753 3.956-3.914 3.956s-3.914-1.771-3.914-3.956v-1.15c0-5.152-1.987-7.766-5.908-7.766-4.863 0-8.261 3.844-8.261 9.351v17.477c0 2.182-1.75 3.952-3.91 3.952-2.162 0-3.915-1.77-3.915-3.952v-29.71c0-1.977 1.534-3.706 3.486-3.73 2.962-.046 3.823 1.568 3.861 3.82 2.385-3.043 5.922-4.688 10.23-4.688z"></path><g><path fill="#F44A6A" d="M16.567 8.365c0 4.622-3.709 8.365-8.282 8.365C3.71 16.73 0 12.987 0 8.365S3.709 0 8.285 0c4.573 0 8.282 3.743 8.282 8.365m0 29.495c0 4.618-3.709 8.365-8.282 8.365C3.71 46.225 0 42.478 0 37.86c0-4.622 3.709-8.366 8.285-8.366 4.573 0 8.282 3.744 8.282 8.366m0 29.49c0 4.622-3.709 8.366-8.282 8.366C3.71 75.716 0 71.972 0 67.35s3.709-8.366 8.285-8.366c4.573 0 8.282 3.744 8.282 8.366"></path><path fill="url(#codefactor-gui-asset-a)" d="M35.301 0c-4.573 0-8.281 3.743-8.281 8.365s3.708 8.365 8.281 8.365h31.37c4.573 0 8.278-3.743 8.278-8.365S71.244 0 66.667 0h-31.37z"></path><path fill="url(#codefactor-gui-asset-b)" d="M35.301 29.49c-4.573 0-8.281 3.748-8.281 8.366 0 4.622 3.708 8.369 8.281 8.369H53.21c4.573 0 8.281-3.747 8.281-8.365 0-4.622-3.708-8.366-8.281-8.366H35.3z"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  l as _
};
