import { defineComponent as o, computed as s, openBlock as a, createElementBlock as p, normalizeStyle as r, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoNetflix3",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, i = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (a(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(i.value)
    }, e[0] || (e[0] = [
      c('<defs><radialGradient id="netflix-3-gui-asset-a" cx="48.34%" cy="49.419%" r="70.438%" fx="48.34%" fy="49.419%" gradientTransform="matrix(1 0 0 .55088 0 .222)"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#000" stop-opacity="0"></stop></radialGradient></defs><g><polygon fill="#000" fill-rule="nonzero" points="1.80114185e-07 1.13710799e-06 255.904254 1.13710799e-06 255.904254 255.904255 1.80114171e-07 255.904255"></polygon><path fill="#B1060F" stroke="#000" stroke-width="2.956" d="m141.676 41.275-.067 38.361-.068 38.361-3.156-8.905-.006-.017-4.078 85.402c4.01 11.324 6.158 17.369 6.182 17.393.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.821.226 3.388.342 3.483.257.094-.084.145-39.143.114-86.797l-.058-86.644zm-61.538-.115v86.732c0 47.703.047 86.779.104 86.836s3.011-.222 6.565-.62c3.553-.398 8.465-.893 10.914-1.1 3.756-.317 14.97-1.038 16.268-1.046.378-.002.402-1.95.457-36.735l.058-36.734 2.713 7.677.96 2.713 4.077-85.381-1.401-3.96a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path fill="url(#netflix-3-gui-asset-a)" d="M80.138 41.16v48.685l34.296 90.976c.004-2.085.008-3.211.012-5.594l.058-36.734 2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.821.226 3.388.342 3.483.257.064-.058.107-19.21.118-46.227l-34.136-98.14-.016 9.287-.068 38.361-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path fill="#E50914" d="m80.139 41.16 34.365 97.377v-.044l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.812.225 3.37.34 3.48.258l-34.1-96.737v.017l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55-3.332-9.42-6.159-17.408-6.283-17.754l-.225-.628z"></path><path fill="#B1060F" stroke="#000" stroke-width="2.956" d="m141.676 41.275-.067 38.361-.068 38.361-3.156-8.905-.006-.017-4.078 85.402c4.01 11.324 6.158 17.369 6.182 17.393.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.821.226 3.388.342 3.483.257.094-.084.145-39.143.114-86.797l-.058-86.644zm-61.538-.115v86.732c0 47.703.047 86.779.104 86.836s3.011-.222 6.565-.62c3.553-.398 8.465-.893 10.914-1.1 3.756-.317 14.97-1.038 16.268-1.046.378-.002.402-1.95.457-36.735l.058-36.734 2.713 7.677.96 2.713 4.077-85.381-1.401-3.96a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path fill="url(#netflix-3-gui-asset-a)" d="M80.138 41.16v48.685l34.296 90.976c.004-2.085.008-3.211.012-5.594l.058-36.734 2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.821.226 3.388.342 3.483.257.064-.058.107-19.21.118-46.227l-34.136-98.14-.016 9.287-.068 38.361-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path fill="#E50914" d="m80.139 41.16 34.365 97.377v-.044l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7.031.032 2.317.17 5.078.307 8.366.415 18.734 1.304 26.599 2.282 1.812.225 3.37.34 3.48.258l-34.1-96.737v.017l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55-3.332-9.42-6.159-17.408-6.283-17.754l-.225-.628z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
