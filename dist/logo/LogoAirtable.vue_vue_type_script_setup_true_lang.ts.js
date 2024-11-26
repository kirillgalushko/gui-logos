import { defineComponent as h, computed as c, openBlock as a, createElementBlock as m, normalizeStyle as n, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoAirtable",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, o = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, i) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "215",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 215",
      style: n(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#FFBF00",
          d: "M114.259 2.701 18.86 42.176c-5.305 2.195-5.25 9.73.089 11.847l95.797 37.989a35.54 35.54 0 0 0 26.208 0l95.799-37.99c5.337-2.115 5.393-9.65.086-11.846L141.442 2.7a35.55 35.55 0 0 0-27.183 0"
        }),
        e("path", {
          fill: "#26B5F8",
          d: "M136.35 112.757v94.902c0 4.514 4.55 7.605 8.746 5.942l106.748-41.435a6.39 6.39 0 0 0 4.035-5.941V71.322c0-4.514-4.551-7.604-8.747-5.941l-106.748 41.434a6.39 6.39 0 0 0-4.035 5.942"
        }),
        e("path", {
          fill: "#ED3049",
          d: "m111.423 117.654-31.68 15.296-3.217 1.555L9.65 166.548C5.411 168.593 0 165.504 0 160.795V71.72c0-1.704.874-3.175 2.046-4.283a7.3 7.3 0 0 1 1.618-1.213c1.598-.959 3.878-1.215 5.816-.448l101.41 40.18c5.155 2.045 5.56 9.268.533 11.697"
        }),
        e("path", {
          fill: "#000",
          "fill-opacity": ".25",
          d: "m111.423 117.654-31.68 15.296L2.045 67.438a7.3 7.3 0 0 1 1.618-1.213c1.598-.959 3.878-1.215 5.816-.448l101.41 40.18c5.155 2.045 5.56 9.268.533 11.697"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
