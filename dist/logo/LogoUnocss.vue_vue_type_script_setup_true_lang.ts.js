import { defineComponent as n, computed as s, openBlock as l, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoUnocss",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#858585",
          d: "M137.176 195.927c0-32.813 26.6-59.412 59.412-59.412S256 163.114 256 195.927c0 32.812-26.6 59.412-59.412 59.412s-59.412-26.6-59.412-59.412"
        }),
        t("path", {
          fill: "#CCC",
          d: "M137.176 59.412C137.176 26.6 163.776 0 196.588 0S256 26.6 256 59.412v53.471c0 3.28-2.66 5.941-5.941 5.941H143.117a5.94 5.94 0 0 1-5.941-5.94z"
        }),
        t("path", {
          fill: "#4D4D4D",
          d: "M118.824 195.927c0 32.812-26.6 59.412-59.412 59.412S0 228.74 0 195.927v-53.47a5.94 5.94 0 0 1 5.941-5.942h106.942a5.94 5.94 0 0 1 5.941 5.941z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
