import { defineComponent as n, computed as m, openBlock as l, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoSemanticUi",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#34BDB2",
          d: "M0 0h256v256H0z"
        }),
        t("path", {
          fill: "#FFF",
          d: "M168.461 87.041c-13.516-7.842-25.514-14.009-41.21-13.737-8.98.156-16.69 5.037-18.311 13.97-1.509 8.311 5.879 12.921 13.565 15.751 12.747 4.694 23.844 9.65 36.369 14.869 22.769 9.489 34.444 24.856 33.064 44.573-1.756 25.087-16.854 43.08-40.849 49.012-31.354 7.752-61.801-4.056-87.526-20.54 6.493-9.891 14.026-16.643 20.48-26.474 14.862 6.326 26.538 14.874 42.086 16.207 10.963.94 23.385.417 25.848-12.46 2.22-11.612-7.886-17.837-17.743-21.314-11.735-4.139-23.448-9.202-34.956-13.902-21.273-8.689-29.929-25.684-28.472-45.705 0-11.739 9.74-35.466 33.621-42.846 36.692-11.34 56.908.272 83.515 17.371-7.067 9.346-12.5 15.991-19.481 25.225"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
