import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoFlickr3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "114",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 114",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FF0084",
          d: "M199.111 113.778c31.42 0 56.889-25.47 56.889-56.89C256 25.476 230.53 0 199.111 0s-56.889 25.475-56.889 56.889c0 31.42 25.47 56.889 56.89 56.889"
        }),
        t("path", {
          fill: "#0063DC",
          d: "M56.889 113.778c31.42 0 56.889-25.47 56.889-56.89C113.778 25.476 88.308 0 56.888 0 25.47 0 0 25.475 0 56.889c0 31.42 25.47 56.889 56.889 56.889"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
