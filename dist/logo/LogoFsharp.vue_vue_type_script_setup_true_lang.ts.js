import { defineComponent as l, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ l({
  __name: "LogoFsharp",
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
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "243",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 243",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#378BBA",
          d: "M0 121.492 121.492 0v60.746l-60.746 60.746 60.746 60.745v60.746z"
        }),
        t("path", {
          fill: "#378BBA",
          d: "m78.102 121.492 43.39-43.39v86.78z"
        }),
        t("path", {
          fill: "#30B9DB",
          d: "M256 121.492 130.17 0v60.746l60.745 60.746-60.746 60.745v60.746z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
