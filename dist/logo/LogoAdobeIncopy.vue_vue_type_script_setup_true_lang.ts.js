import { defineComponent as l, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoAdobeIncopy",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "250",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 250",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "249.6",
          x: "0",
          y: "0",
          fill: "#49021F",
          rx: "42.5"
        }),
        t("path", {
          fill: "#F36",
          d: "M102.93 65.297v109.394q0 1.718-1.546 1.718h-20.78q-1.376 0-1.374-1.718V65.297q0-1.373 1.546-1.374h20.78a1.215 1.215 0 0 1 1.373 1.374m81.916 91.02v17.688a1.69 1.69 0 0 1-.858 1.545 34.4 34.4 0 0 1-8.436 1.997l-.667.064q-4.578.458-8.887.509l-1.073.006a52.4 52.4 0 0 1-19.062-3.263 39.4 39.4 0 0 1-14.254-9.273 42.1 42.1 0 0 1-9.016-14.082 46.9 46.9 0 0 1-3.177-17.345 44.1 44.1 0 0 1 6.01-23.099 42.74 42.74 0 0 1 16.352-15.586l.564-.3q10.905-5.835 25.502-5.838c3.388-.062 6.776.14 10.133.601a47 47 0 0 1 5.839 1.288c.612.424.942 1.15.858 1.89l-.171 17.688q0 1.544-1.374 1.202a31 31 0 0 0-5.84-1.46 53 53 0 0 0-8.586-.6 30.4 30.4 0 0 0-12.708 2.575 20.24 20.24 0 0 0-8.93 7.728q-3.264 5.152-3.263 13.052 0 8.931 3.864 14.082a20.9 20.9 0 0 0 9.789 7.299 34.8 34.8 0 0 0 11.935 2.146c2.41.011 4.818-.097 7.216-.325l1.027-.104a30 30 0 0 0 5.84-1.116q1.371-.342 1.373 1.03"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};