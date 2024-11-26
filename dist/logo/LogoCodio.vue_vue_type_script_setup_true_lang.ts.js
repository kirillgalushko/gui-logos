import { defineComponent as m, computed as l, openBlock as n, createElementBlock as p, normalizeStyle as d, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoCodio",
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
    return (r, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: d(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#A3BAF0",
          d: "m125.306 214.373.934 77.731 1.68 3.46 127.679-73.75-72.306-41.811-55.373 31.94z"
        }),
        t("path", {
          fill: "#4474E1",
          d: "m.24 221.813 127.68 73.75v-83.54l-55.293-31.94v-67L4.955 74.393H.24z"
        }),
        t("path", {
          fill: "#C7D6F7",
          d: "m2.966 75.967 67.378 38.918 2.283 1.318 55.293-31.94 55.373 31.94 72.306-41.81L127.919.641.242 74.392z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
