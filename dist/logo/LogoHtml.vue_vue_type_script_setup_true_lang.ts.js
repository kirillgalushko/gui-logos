import { defineComponent as n, computed as o, openBlock as m, createElementBlock as p, normalizeStyle as d, createElementVNode as e } from "vue";
const f = /* @__PURE__ */ n({
  __name: "LogoHtml",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, l) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: d(i.value)
    }, l[0] || (l[0] = [
      e("path", {
        fill: "#E44D26",
        d: "M6 28 4 3h24l-2 25-10 3z"
      }, null, -1),
      e("path", {
        fill: "#F16529",
        d: "M26 5H16v24.5l8-2.5z"
      }, null, -1),
      e("path", {
        fill: "#fff",
        d: "M9.5 17.5 8.5 8H24l-.5 3h-12l.5 3.5h11L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4z"
      }, null, -1)
    ]), 4));
  }
});
export {
  f as _
};
