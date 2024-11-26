import { defineComponent as h, computed as n, openBlock as a, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoVultr2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "221",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 221",
      style: p(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#C9F4FF",
          d: "M89.173 6.095A12.74 12.74 0 0 0 78.385 0H12.8C5.73 0 0 5.73 0 12.8c0 2.413.676 4.778 1.95 6.827l16.884 24.807 84.42-18.285z"
        }),
        t("path", {
          fill: "#51B9FF",
          d: "M103.619 26.636a12.86 12.86 0 0 0-10.85-6.095H27.43A12.739 12.739 0 0 0 16.213 40.29l18.835 29.866 87.222-13.653z"
        }),
        t("path", {
          fill: "#007BFC",
          d: "M34.255 68.937a13.04 13.04 0 0 1-1.158-11.459 12.86 12.86 0 0 1 12.19-8.168h65.342a12.8 12.8 0 0 1 10.85 6.096l58.696 93.074a12.9 12.9 0 0 1 1.95 6.827 13.1 13.1 0 0 1-1.95 6.826l-32.792 51.993a12.86 12.86 0 0 1-21.7 0zm165.303 29.745a12.86 12.86 0 0 0 21.7 0l11.275-17.86L254.05 46.69a12.9 12.9 0 0 0 1.95-6.827 13.1 13.1 0 0 0-1.95-6.827l-17.067-26.94A12.86 12.86 0 0 0 226.133 0H160.55a12.8 12.8 0 0 0-12.801 12.8 12.2 12.2 0 0 0 2.012 6.827z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
