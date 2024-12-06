import { defineComponent as l, computed as m, openBlock as n, createElementBlock as c, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoBugsnag",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, h) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(o.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("rect", {
          width: "242.538",
          height: "242.54",
          x: "6.731",
          y: "6.731",
          fill: "#84A7FF"
        }),
        t("path", {
          fill: "#173647",
          d: "M242.538 13.46v229.082H13.462V13.46zM256 0H0v256h256z"
        }),
        t("path", {
          fill: "#173647",
          d: "m95.66 36.081 9.643 5.626.078 75.985h22.978c27.533-.2 38.54 17.89 38.784 36.537.332 25.153-26.476 43.685-53.282 31.107-11.558-5.421-20.472-18.818-20.839-31.615l-.012-1.034-.032-22.62H78.33v20.41c-.663 24.6 17.764 50.386 48.875 52.99 31.218 2.615 55.482-19.662 55.482-50.233 0-28.879-20.19-48.98-49.07-48.98h-7.924l.002-12.95h5.286c35.602.049 60.73 23.455 63.774 55.39 3.459 36.268-23.125 69.008-61.42 69.357h-1.165c-41.731 0-65.45-29.415-65.488-63.321v-35.033h26.684l-.072-63.299-14.11 7.06v43.133h-12.09V52.619zm34.529 93.987h-24.676v22.648c-.003 14.3 11.917 25.334 26.218 25.34 14.045.002 23.487-11.493 23.506-22.878l-.008-.62c.002-14.3-10.742-24.488-25.04-24.49m.617 14.214a9.637 9.637 0 1 1 0 19.274 9.637 9.637 0 0 1 0-19.274"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};