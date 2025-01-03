import { defineComponent as n, computed as c, openBlock as l, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoRedhat",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -31 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#E00",
          d: "M170.758 111.61c16.824 0 41.166-3.47 41.166-23.48.05-1.545-.09-3.09-.416-4.6l-10.02-43.52c-2.313-9.576-4.344-13.92-21.155-22.325C167.288 11.015 138.871 0 130.466 0c-7.827 0-10.1 10.087-19.434 10.087-8.983 0-15.654-7.532-24.06-7.532-8.069 0-13.327 5.5-17.388 16.811 0 0-11.31 31.9-12.763 36.527a8.7 8.7 0 0 0-.296 2.609c0 12.4 48.819 53.055 114.233 53.055m43.749-15.305c2.326 11.015 2.326 12.171 2.326 13.624 0 18.828-21.168 29.278-48.993 29.278-62.886.04-117.972-36.81-117.972-61.165a24.8 24.8 0 0 1 2.03-9.858C29.278 69.261 0 73.295 0 99.144c0 42.336 100.314 94.517 179.742 94.517 60.895 0 76.254-27.543 76.254-49.29 0-17.106-14.794-36.526-41.462-48.119"
        }),
        t("path", {
          fill: "#000",
          d: "M214.507 96.252c2.326 11.015 2.326 12.171 2.326 13.624 0 18.828-21.168 29.278-48.993 29.278-62.886.04-117.972-36.81-117.972-61.165a24.8 24.8 0 0 1 2.03-9.858l4.923-12.184a8.7 8.7 0 0 0-.296 2.555c0 12.4 48.819 53.055 114.233 53.055 16.824 0 41.166-3.47 41.166-23.482.05-1.544-.09-3.089-.416-4.599z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
