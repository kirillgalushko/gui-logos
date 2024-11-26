import { defineComponent as c, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as n, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoDaisyui2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, o = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, i) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "404",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 404",
      style: n(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#1AD1A5",
          d: "M66.406 280.753h123.188c34.017 0 61.594 27.577 61.594 61.594s-27.577 61.594-61.594 61.594H66.406c-34.017 0-61.594-27.577-61.594-61.594s27.577-61.594 61.594-61.594"
        }),
        e("circle", {
          cx: "128",
          cy: "128",
          r: "123.188",
          fill: "#FFF"
        }),
        e("path", {
          fill: "#000",
          "fill-opacity": ".2",
          d: "M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0m0 4.812C59.965 4.812 4.812 59.965 4.812 128S59.965 251.188 128 251.188 251.188 196.035 251.188 128 196.035 4.812 128 4.812"
        }),
        e("circle", {
          cx: "128",
          cy: "128",
          r: "55.188",
          fill: "#FF9903"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
