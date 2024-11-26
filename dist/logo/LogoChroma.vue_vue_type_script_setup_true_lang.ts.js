import { defineComponent as r, computed as h, openBlock as m, createElementBlock as n, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoChroma",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "164",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 164",
      style: s(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("ellipse", {
          cx: "170.667",
          cy: "81.92",
          fill: "#FFDE2D",
          rx: "85.333",
          ry: "81.92"
        }),
        t("ellipse", {
          cx: "85.333",
          cy: "81.92",
          fill: "#327EFF",
          rx: "85.333",
          ry: "81.92"
        }),
        t("path", {
          fill: "#FF6446",
          d: "M170.667 81.92c0 45.243-38.206 81.92-85.334 81.92V81.92zm-85.334 0C85.333 36.677 123.538 0 170.667 0v81.92z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
