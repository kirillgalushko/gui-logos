import { defineComponent as n, computed as o, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const f = /* @__PURE__ */ n({
  __name: "CssLogo",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, l) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: s(i.value)
    }, l[0] || (l[0] = [
      t("path", {
        fill: "#1172B8",
        d: "M6 28 4 3h24l-2 25-10 3z"
      }, null, -1),
      t("path", {
        fill: "#3AD",
        d: "M26 5H16v24.5l8-2.5z"
      }, null, -1),
      t("path", {
        fill: "#fff",
        d: "M19.5 17.5h-10L9 14l8-2.5H9l-.5-3H24l-.5 3.5-6.5 2.5h6L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1z"
      }, null, -1)
    ]), 4));
  }
});
export {
  f as _
};
