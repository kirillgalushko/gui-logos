import { defineComponent as n, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoVue",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "221",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 221",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#41B883",
          d: "M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z"
        }),
        t("path", {
          fill: "#41B883",
          d: "m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0z"
        }),
        t("path", {
          fill: "#35495E",
          d: "M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
