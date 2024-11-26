import { defineComponent as l, computed as h, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoKemal",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "174",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 174",
      style: s(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FF4F4F",
          d: "m128.594 0 1.393 3.076.194 167.825-1.587 3.093H0L20.941 3.674A4.185 4.185 0 0 1 25.095 0z"
        }),
        t("path", {
          fill: "#F92727",
          d: "M128.594 0v173.994H256L235.06 3.674A4.185 4.185 0 0 0 230.904 0z"
        }),
        t("polygon", {
          fill: "#000",
          points: "197.0511 105.538 191.4351 105.538 191.3461 0 196.0711 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
