import { defineComponent as i, computed as a, openBlock as n, createElementBlock as h, normalizeStyle as r, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoCodacy",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const e = m, l = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(l.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#000",
          "fill-rule": "nonzero",
          d: "m41.416 104.612-37.07-9.919A128.13 128.13 0 0 1 63.964 17.13l19.174 33.183a89.73 89.73 0 0 0-41.722 54.3m63.35-63.248-9.97-37.069A128.3 128.3 0 0 1 127.875 0v38.348a90 90 0 0 0-23.11 3.016m46.477 0 9.92-37.018a128.18 128.18 0 0 1 77.564 59.516l-33.235 19.173a89.73 89.73 0 0 0-54.249-41.67M0 127.825h38.348a89.2 89.2 0 0 0 3.016 23.111l-37.069 9.92A127.8 127.8 0 0 1 0 127.826m17.129 63.913 33.388-19.174a91 91 0 0 0 14.214 18.51l-27.15 27.098a127.8 127.8 0 0 1-20.452-26.434m46.835 46.784 19.174-33.183a89.1 89.1 0 0 0 44.688 11.964v38.348a127.16 127.16 0 0 1-63.862-17.129m141.477-65.855 33.183 19.225a128.18 128.18 0 0 1-77.615 59.464l-9.92-37.07a89.73 89.73 0 0 0 54.352-41.62m46.017-10.482-36.865-10.124a89.4 89.4 0 0 0 0-46.426l37.172-9.92a128.1 128.1 0 0 1-.307 66.47"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
