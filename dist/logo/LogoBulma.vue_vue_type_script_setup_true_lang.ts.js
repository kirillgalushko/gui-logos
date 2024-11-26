import { defineComponent as l, computed as m, openBlock as r, createElementBlock as h, normalizeStyle as s, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoBulma",
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
    return (p, t) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "373",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 373",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("polygon", {
          fill: "#00D1B2",
          "fill-rule": "nonzero",
          points: "0 256 23.2727273 93.0909091 116.363636 0 232.727273 116.363636 162.909091 186.181818 256 279.272727 116.363636 372.363636"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
