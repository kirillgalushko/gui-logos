import { defineComponent as o, computed as n, openBlock as l, createElementBlock as m, normalizeStyle as r, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoAdobePremiere",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: r(i.value)
    }, t[0] || (t[0] = [
      c("path", {
        fill: "#00005B",
        d: "M2 12.133c0-3.547 0-5.32.69-6.675A6.33 6.33 0 0 1 5.458 2.69C6.813 2 8.586 2 12.133 2h7.734c3.547 0 5.32 0 6.675.69a6.33 6.33 0 0 1 2.768 2.768c.69 1.355.69 3.128.69 6.675v7.734c0 3.547 0 5.32-.69 6.675a6.33 6.33 0 0 1-2.768 2.768c-1.355.69-3.128.69-6.675.69h-7.734c-3.547 0-5.32 0-6.675-.69a6.33 6.33 0 0 1-2.768-2.768C2 25.187 2 23.414 2 19.867z"
      }, null, -1),
      c("path", {
        fill: "#99F",
        d: "M8 21.796V9.208c0-.086.035-.135.117-.135 1.21 0 2.418-.073 3.627-.073 1.963 0 4.088.684 4.833 2.777.176.514.27 1.04.27 1.59q0 1.578-.703 2.606c-1.307 1.913-3.573 1.884-5.605 1.884v3.926c.016.117-.081.172-.175.172H8.14c-.093 0-.14-.05-.14-.16m2.55-10.362v4.11c.806.06 1.65.067 2.423-.195.854-.251 1.322-1.005 1.322-1.908.024-.77-.387-1.509-1.088-1.786-.764-.324-1.83-.344-2.656-.22m7.882.778h2.053a.26.26 0 0 1 .245.197c.15.35.169.77.17 1.148a4.4 4.4 0 0 1 1.252-1.054 3.16 3.16 0 0 1 1.676-.443c.097-.015.183.075.17.177v2.383q0 .138-.189.138c-.87-.063-2.222.152-2.854.867v6.196q0 .177-.15.177h-2.204c-.108.017-.204-.085-.188-.197v-6.728c0-.901.018-1.83-.113-2.723-.02-.082.055-.159.132-.138"
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
