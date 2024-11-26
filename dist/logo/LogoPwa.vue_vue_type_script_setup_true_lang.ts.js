import { defineComponent as l, computed as h, openBlock as p, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoPwa",
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
    return (r, o) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "193",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 193",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#3D3D3D",
          points: "376.818362 158.243566 391.609181 120.840549 434.316067 120.840549 414.048526 64.1021885 439.396722 3.2018623e-05 512.000001 192.769205 458.457706 192.769205 446.051149 158.243566"
        }),
        t("polygon", {
          fill: "#5A0FC8",
          points: "331.139673 192.76973 408.862952 0.000304174426 357.335083 0.000560323934 304.16787 124.572484 266.360657 0.00081647082 226.753837 0.00081647082 186.158952 124.572484 157.530493 67.8076311 131.622821 147.624549 157.926821 192.76973 208.636591 192.76973 245.320394 81.0556311 280.296394 192.76973"
        }),
        t("path", {
          fill: "#3D3D3D",
          d: "M48.912 126.595H80.65q14.421 0 25.683-3.22l8.208-25.287 22.94-70.674a56.5 56.5 0 0 0-5.986-7.858Q113.827 0 79.795 0H0v192.77h48.912zm42.01-82.247q6.901 6.945 6.901 18.59 0 11.733-6.069 18.611-6.653 7.642-24.5 7.642H48.912V37.404h18.476q16.635 0 23.534 6.945"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
