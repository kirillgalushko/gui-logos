import { defineComponent as n, computed as o, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoAngular",
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
      style: r(i.value)
    }, l[0] || (l[0] = [
      t("path", {
        fill: "#DD0031",
        d: "M16 2 3 7l2 17 11 6 11-6 2-17z"
      }, null, -1),
      t("path", {
        fill: "#C3002F",
        d: "M16 2v28l11-6 2-17z"
      }, null, -1),
      t("path", {
        fill: "#fff",
        d: "m16 5.094-8.127 18.27h3.03l1.634-4.088h6.898l1.634 4.088h3.03zm2.374 11.662h-4.748L16 11.03z"
      }, null, -1)
    ]), 4));
  }
});
export {
  g as _
};
