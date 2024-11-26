import { defineComponent as l, computed as n, openBlock as r, createElementBlock as p, normalizeStyle as d, createElementVNode as e } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoPrerender2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, o = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, i) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "192",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 192",
      style: d(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#F0DA50",
          d: "M64 0v64h32c17.673 0 32-14.327 32-32V0z"
        }),
        e("path", {
          fill: "#4BC69A",
          d: "M32 0C14.327 0 0 14.327 0 32v128c0 17.673 14.327 32 32 32h32V0z"
        }),
        e("path", {
          fill: "#F0DA50",
          d: "M160 128c-17.673 0-32 14.327-32 32v32h64v-64z"
        }),
        e("path", {
          fill: "#5D7B8C",
          d: "M224 0h-32v192h32c17.673 0 32-14.327 32-32V32c0-17.673-14.327-32-32-32"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
