import { defineComponent as h, computed as n, openBlock as m, createElementBlock as l, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoBrotli",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, i) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#EA3",
          d: "M94.88 251.608C26.612 233.316-13.9 163.146 4.391 94.879 22.684 26.613 92.854-13.9 161.121 4.392S269.9 92.854 251.608 161.121c-18.292 68.266-88.462 108.779-156.729 90.487"
        }),
        t("path", {
          fill: "#FFF",
          d: "M101.607 226.5c-13.6-3.644-12.809-50.698 1.768-105.098s37.418-95.547 51.018-91.902 12.809 50.698-1.768 105.098-37.418 95.547-51.018 91.902m74.759-32.754c-6.8-1.822-6.404-25.35.884-52.55s18.71-47.773 25.51-45.95c6.8 1.822 6.404 25.349-.885 52.549s-18.709 47.773-25.509 45.95M53.24 160.755c-6.8-1.823-6.404-25.35.885-52.55s18.709-47.773 25.509-45.95c6.8 1.821 6.404 25.348-.884 52.548s-18.71 47.774-25.51 45.952"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
