import { defineComponent as l, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoCockpit",
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
    return (c, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#000",
          d: "M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128"
        }),
        t("path", {
          fill: "#FFF",
          d: "m86.812 61.672 24.472 24.472-36.909 36.908c-9.628 9.629-.267 18.989 9.361 9.36l55.095-55.094c35.84-35.84 92.673 20.995 56.834 56.834L179.217 150.6l23.268 23.268-27.815 27.815-44.932-44.932 41.455-41.455c7.845-7.845-3.254-18.944-11.099-11.1l-58.037 58.038c-36.64 31.827-87.992-18.99-56.968-56.967z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
