import { defineComponent as h, computed as n, openBlock as r, createElementBlock as s, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoGoogleAds",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "230",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 230",
      style: m(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FBBC04",
          d: "M5.888 166.405 90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z"
        }),
        t("path", {
          fill: "#4285F4",
          d: "M250.084 166.402 165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272 20.1-11.68 27.418-37.73 15.536-57.486z"
        }),
        t("ellipse", {
          cx: "42.664",
          cy: "187.924",
          fill: "#34A853",
          rx: "42.664",
          ry: "41.604"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
