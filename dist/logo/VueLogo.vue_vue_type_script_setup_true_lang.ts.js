import { defineComponent as n, computed as o, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ n({
  __name: "VueLogo",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMinYMin meet",
      viewBox: "0 -17.5 256 256",
      style: r(l.value)
    }, i[0] || (i[0] = [
      t("path", {
        fill: "#41B883",
        d: "M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z"
      }, null, -1),
      t("path", {
        fill: "#41B883",
        d: "m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0z"
      }, null, -1),
      t("path", {
        fill: "#35495E",
        d: "M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0z"
      }, null, -1)
    ]), 4));
  }
});
export {
  a as _
};
