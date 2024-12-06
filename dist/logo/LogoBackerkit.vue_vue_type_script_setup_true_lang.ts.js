import { defineComponent as l, computed as n, openBlock as m, createElementBlock as c, normalizeStyle as r, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoBackerkit",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "249",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 249",
      style: r(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#2D2E2B",
          d: "M207.506 218.149h-87.96l43.98-95.695.042.09.04-.09h.82l27.504 60.497 13.47 30.527 2.12 4.67zm47.942 23.373L170.756 56.456c-.536-1.07-1.24-1.982-2.384-2.521v-15.69h40.599v-1.22l-11.146-17.742L208.97 1.54V0h-48.267v54.16c-.913.559-1.585 1.368-2.05 2.296l-46.023 99.596-30.12-65.82c-.826-1.646-1.925-3.024-4.676-3.024h-2.75c-2.473 0-3.85 1.378-4.677 3.024l-58.86 127.38-2.13 4.724L.55 241.522c-1.651 3.572.552 7.154 4.676 7.154h23.922l4.718.031 117.787-.031h99.123c4.124 0 6.323-3.582 4.671-7.154"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};