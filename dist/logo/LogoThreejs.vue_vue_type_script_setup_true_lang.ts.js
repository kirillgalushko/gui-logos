import { defineComponent as o, computed as n, openBlock as h, createElementBlock as r, normalizeStyle as z, createElementVNode as m } from "vue";
const c = /* @__PURE__ */ o({
  __name: "LogoThreejs",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: z(l.value)
    }, t[0] || (t[0] = [
      m("g", null, [
        m("path", {
          fill: "#000",
          "fill-rule": "nonzero",
          d: "M.087 3.585C-.446 1.427 1.555-.5 3.691.116l62.23 17.916a2.94 2.94 0 0 1 1.578.455l122.73 35.334c.508.01 1.01.155 1.446.416l62.234 17.918c2.138.616 2.807 3.316 1.203 4.858l-187.8 180.649c-1.603 1.542-4.274.77-4.807-1.39L31.353 130.16a3 3 0 0 1-.098-.396Zm53.306 191.71 13.52 54.733 40.714-39.165zm41.938-43.284-39.419 37.995 52.512 15.076zm5.851-.406 13.052 52.903 39.311-37.814zm-63.07-18.174 13.109 53.073 39.372-37.95zm103.704-26.278-40.051 38.606 53.373 15.38zm5.612-1.373 13.322 53.984 40.161-38.631zM79.847 89.239l-40.137 38.64 53.471 15.407zm5.59-1.457 13.094 53.07 39.419-37.996zM22.385 69.759 35.71 123.71l40.108-38.612zm166.192-7.49-39.419 37.995 52.512 15.076zm5.633-1.29 13.28 53.826 40.008-38.484zm-67.86-16.506L87.109 82.25l52.265 15.003zm5.601-1.419 13.112 53.134 39.43-38.007zM64.338 26.48 24.919 64.476 77.431 79.55zm5.638-1.269 13.061 52.937 39.323-37.855zM6.894 7.05l13.323 53.935 40.022-38.577z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
