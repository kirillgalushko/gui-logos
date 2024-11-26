import { defineComponent as m, computed as h, openBlock as l, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoStackoverflow3",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, o) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "304",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 304",
      style: r(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#BCBBBB",
          points: "216.329708 276.187929 216.329708 194.976776 243.28341 194.976776 243.28341 303.14163 0 303.14163 0 194.976776 26.9537015 194.976776 26.9537015 276.187929"
        }),
        t("path", {
          fill: "#F48023",
          d: "m56.708 187.276 132.318 27.654 5.6-26.604L62.31 160.672zm17.502-63.009 122.517 57.058 11.202-24.503L85.412 99.414zm33.955-60.208 103.964 86.462 17.152-20.653-103.964-86.462zM175.375 0 153.67 16.102l80.511 108.515 21.703-16.102zM53.906 248.884h135.119V221.93H53.907z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
