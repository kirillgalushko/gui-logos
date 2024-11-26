import { defineComponent as l, computed as n, openBlock as p, createElementBlock as s, normalizeStyle as m, createElementVNode as e } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoPassport",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, o = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, i) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "320",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 320",
      style: m(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#D6FF00",
          d: "M128 0C57.28 0 0 57.28 0 128h64c0-35.328 28.672-64 64-64z"
        }),
        e("path", {
          fill: "#34E27A",
          d: "M256 128C256 57.28 198.72 0 128 0v64c35.328 0 64 28.672 64 64z"
        }),
        e("path", {
          fill: "#00B9F1",
          d: "M128 256c70.72 0 128-57.28 128-128h-64c0 35.328-28.672 64-64 64z"
        }),
        e("path", {
          fill: "#FFF",
          d: "M64 256V128H0v192h128v-64z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
