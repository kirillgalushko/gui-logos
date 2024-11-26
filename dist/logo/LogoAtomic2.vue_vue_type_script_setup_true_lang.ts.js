import { defineComponent as h, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoAtomic2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "232",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 232",
      style: s(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#1E6EFA",
          d: "M177.68 230.745H34.967C15.655 230.745 0 215.089 0 195.778c0-19.315 15.653-34.976 34.967-34.986l80.866-.04a37.19 37.19 0 0 1 32.238 18.617z"
        }),
        t("path", {
          fill: "#FF3C5A",
          d: "M26.491 141.083 97.848 17.489C107.504.765 128.889-4.965 145.614 4.691c16.727 9.657 22.463 31.043 12.815 47.775l-40.399 70.052a37.19 37.19 0 0 1-32.242 18.61z"
        }),
        t("path", {
          fill: "#FFC5CE",
          d: "m179.954 54.98 71.357 123.594c9.657 16.725 3.926 38.11-12.799 47.767s-38.116 3.931-47.78-12.79l-40.47-70.012a37.19 37.19 0 0 1 .005-37.228z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
