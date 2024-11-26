import { defineComponent as l, computed as r, openBlock as h, createElementBlock as m, normalizeStyle as s, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoPagekit",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "320",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 320",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("polygon", {
          fill: "#212121",
          "fill-rule": "nonzero",
          points: "0 0 0 320 128 320 128 272 48 272 48 45.3333333 208 45.3333333 208 224 128 224 128 272 256 272 256 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
