import { defineComponent as l, computed as m, openBlock as n, createElementBlock as c, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoWhatwg",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "115.2",
          fill: "#FFF"
        }),
        t("path", {
          fill: "#3C790A",
          d: "M128 256c70.692 0 128-57.308 128-128S198.692 0 128 0 0 57.308 0 128s57.308 128 128 128m0-25.6c-56.554 0-102.4-45.846-102.4-102.4S71.446 25.6 128 25.6 230.4 71.446 230.4 128 184.554 230.4 128 230.4"
        }),
        t("path", {
          fill: "#3C790A",
          d: "M97.28 97.28c0-30.72 61.44-38.4 58.88-5.12 0 23.04-40.96 33.28-40.96 58.88v17.92h25.6v-10.24c0-23.04 43.52-30.72 43.52-69.12-5.12-56.32-115.2-56.32-115.2 7.68zm17.92 81.92h25.6v25.6h-25.6z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
