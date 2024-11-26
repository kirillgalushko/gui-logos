import { defineComponent as h, computed as s, openBlock as l, createElementBlock as n, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoFetch",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(c.value)
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
          d: "M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0m0 25.6c56.554 0 102.4 45.846 102.4 102.4S184.554 230.4 128 230.4 25.6 184.554 25.6 128 71.446 25.6 128 25.6"
        }),
        t("path", {
          fill: "#3C790A",
          d: "M87.04 140.8a153.6 153.6 0 0 0 51.2-51.2c-.424-15.317 6.682-28.306 15.872-29.013s16.984 11.136 17.408 26.453c15.317.424 27.16 8.218 26.453 17.408s-13.696 16.296-29.013 15.872a153.6 153.6 0 0 0-51.2 51.2c.274 9.908-2.644 19.308-7.655 24.658s-11.354 5.838-16.64 1.28-8.71-13.47-8.985-23.378c-15.317-.424-27.16-8.218-26.453-17.408S71.723 140.376 87.04 140.8"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
