import { defineComponent as n, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as o } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoLoom2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#625DF5",
          d: "M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477zM128 166.73c-21.472 0-38.876-17.403-38.876-38.876S106.528 88.977 128 88.977s38.875 17.404 38.875 38.876c0 21.473-17.403 38.876-38.875 38.876"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
