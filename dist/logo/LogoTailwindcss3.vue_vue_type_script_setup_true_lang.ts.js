import { defineComponent as n, computed as l, openBlock as r, createElementBlock as c, normalizeStyle as d, createElementVNode as e } from "vue";
const a = /* @__PURE__ */ n({
  __name: "LogoTailwindcss3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, i) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "154",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 154",
      style: d(s.value)
    }, i[0] || (i[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "tailwindcss-3-gui-asset-a",
          x1: "-2.778%",
          x2: "100%",
          y1: "32%",
          y2: "67.556%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#2298BD"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#0ED7B5"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#tailwindcss-3-gui-asset-a)",
          d: "M128 0Q76.8 0 64 51.2 83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2 19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
