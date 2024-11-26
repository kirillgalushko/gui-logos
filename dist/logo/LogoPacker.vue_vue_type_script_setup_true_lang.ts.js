import { defineComponent as l, computed as h, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoPacker",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "413",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 413",
      style: r(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("polyline", {
          fill: "#1DAEFF",
          points: "0.356848485 50.5963636 135.493818 127.861818 135.493818 412.696727 0.356848485 335.446788"
        }),
        t("path", {
          fill: "#1D94DD",
          d: "M202.395 83.892 55.505.188v58.127l99.887 57.065v174.429l47.01 26.71c29.092 16.6 52.908 6.655 52.908-22.11V166.417c0-28.78-23.816-65.916-52.907-82.525"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
