import { defineComponent as h, computed as l, openBlock as r, createElementBlock as m, normalizeStyle as p, createElementVNode as o } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoSnowpack",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "205",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 205",
      style: p(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#000",
          "fill-rule": "nonzero",
          d: "M253.964 185.078 138.764 5.88A12.8 12.8 0 0 0 127.998 0a12.8 12.8 0 0 0-10.768 5.88L2.03 185.078a12.8 12.8 0 0 0-.468 13.056 12.8 12.8 0 0 0 11.236 6.664h230.398c4.684 0 8.992-2.556 11.236-6.668a12.79 12.79 0 0 0-.468-13.052M127.997 36.472l34.156 53.127h-34.156l-25.6 25.6-15.224-15.224z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
