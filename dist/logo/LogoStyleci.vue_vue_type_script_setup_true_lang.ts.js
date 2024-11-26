import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoStyleci",
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
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#E44041"
        }),
        t("path", {
          fill: "#FFF",
          d: "M153.49 185.36c-6.776 2.51-18.07 4.518-28.109 4.518-31.372 0-51.45-21.082-51.45-61.489 0-43.67 23.34-62.744 51.2-62.744 12.297 0 21.583 2.76 28.109 5.772l8.03-35.89c-5.52-3.011-19.073-7.027-38.65-7.027-49.944 0-95.12 32.878-95.12 102.399 0 53.709 29.113 96.626 90.603 96.626 19.074 0 34.133-3.514 40.91-6.525zm30.87 39.655h44.173V31.01H184.36z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
