import { defineComponent as h, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoGoogleCloudRun",
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
    return (a, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "231",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 231",
      style: r(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4285F4",
          d: "M75.39 0a23.1 23.1 0 0 0-19.72 11.76L3.054 102.995a22.96 22.96 0 0 0 0 22.879l52.598 91.997a23.54 23.54 0 0 0 19.719 12.18h105.216a23.46 23.46 0 0 0 19.74-12.12l52.598-91.477a23.44 23.44 0 0 0 3.074-11.61c0-4.004-1.025-8.01-3.074-11.61L200.326 11.76A23.12 23.12 0 0 0 180.606 0z"
        }),
        t("path", {
          fill: "#000",
          "fill-opacity": ".07",
          "fill-rule": "nonzero",
          d: "m236.495 155.027-36.17 62.905a23.46 23.46 0 0 1-19.739 12.12H140.51l-58.472-58.995 17.238-55.583-17.238-56.22 17.705 11.893 23.806 24.019-11.12-35.912 83.375 56.008z"
        }),
        t("path", {
          fill: "#FFF",
          d: "m82.038 59.254 17.705 11.893 13.88 44.618-13.633 43.278-17.952 12.014 17.343-55.796zm45.347 19.836 8.593 27.792h32.989zm68.42 36.172-83.376 55.795 17.343-55.795-17.343-56.008z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
