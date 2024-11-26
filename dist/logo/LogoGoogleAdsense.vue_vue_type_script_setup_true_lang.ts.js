import { defineComponent as h, computed as n, openBlock as s, createElementBlock as c, normalizeStyle as m, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ h({
  __name: "LogoGoogleAdsense",
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
    return (p, i) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "227",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 227",
      style: m(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FBBC04",
          d: "M161.8 62.158c11.581-19.822 4.705-45.154-15.355-56.603C126.376-5.878 100.723.899 89.142 20.72q-.765 1.333-1.44 2.715L48.553 90.41a49 49 0 0 0-2.401 4.112L5.495 164.681l72.65 40.721 40.45-69.566a40 40 0 0 0 2.402-4.112l39.15-66.983a46 46 0 0 0 1.654-2.583"
        }),
        t("path", {
          fill: "#34A853",
          d: "M78.483 205.189c-11.515 20.142-37.49 27.553-57.434 15.931-19.954-11.63-27.036-36.847-15.513-56.982s37.267-27.578 57.22-15.956c19.954 11.63 27.241 36.872 15.727 56.998"
        }),
        t("path", {
          fill: "#4285F4",
          d: "M235.257 75.417c-19.83-11.429-45.17-4.661-56.661 15.134l-41.478 71.67c-11.428 19.755-4.678 45.033 15.076 56.46l.107.062c19.835 11.433 45.18 4.66 56.67-15.142l41.469-71.663c11.426-19.76 4.67-45.042-15.09-56.468z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
