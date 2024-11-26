import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoCrateio",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "192",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 192",
      style: p(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("polygon", {
          fill: "#009DC7",
          points: "192 64 192 0 128 0 128 64 -3.55271368e-14 64 -3.55271368e-14 128 63.9999218 128 63.9999218 192 128 192 128 128 256 128 256 64"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
