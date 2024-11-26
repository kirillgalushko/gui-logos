import { defineComponent as l, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoAutoit",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "114.75",
          fill: "#5D83AC"
        }),
        t("path", {
          fill: "#F0F0F0",
          d: "M0 128C0 57.308 57.308 0 128 0s128 57.308 128 128-57.308 128-128 128S0 198.692 0 128M128 25.5C71.39 25.5 25.5 71.39 25.5 128S71.39 230.5 128 230.5 230.5 184.61 230.5 128 184.61 25.5 128 25.5"
        }),
        t("path", {
          fill: "#F0F0F0",
          d: "m206.41 166-58.52-84.7q-3.08-4.478-7.49-7.49-4.41-3.01-10.99-3.01-6.861 0-11.34 3.22-4.481 3.221-7.42 7.28L50.59 166h34.3l43.96-62.16 16.8 24.78a377 377 0 0 1 4.97 7.21q2.589 3.851 4.55 6.37-3.361-.28-7.91-.28h-32.27L97.49 166z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
