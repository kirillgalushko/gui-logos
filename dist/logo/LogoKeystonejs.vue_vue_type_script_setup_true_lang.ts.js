import { defineComponent as n, computed as l, openBlock as r, createElementBlock as h, normalizeStyle as p, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoKeystonejs",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, o) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(i.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "keystonejs-gui-asset-a",
          x1: "0%",
          x2: "50%",
          y1: "0%",
          y2: "71.921%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#5AE8FA"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#2684FF"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#keystonejs-gui-asset-a)",
          d: "M59.669 0H196.33c20.748 0 28.273 2.16 35.858 6.217s13.537 10.01 17.594 17.594C253.84 31.397 256 38.921 256 59.67v136.66c0 20.748-2.16 28.272-6.217 35.858-4.057 7.584-10.009 13.537-17.594 17.594-7.585 4.056-15.11 6.217-35.858 6.217H59.67c-20.748 0-28.272-2.16-35.858-6.217-7.584-4.057-13.537-10.01-17.594-17.594S0 217.079 0 196.33V59.67c0-20.75 2.16-28.273 6.217-35.86 4.057-7.584 10.01-13.537 17.594-17.594C31.397 2.161 38.921 0 59.67 0m13.687 66.048v132.934h29.23V156.16l16.757-16.943 40.029 59.765h36.677l-56.971-80.43 51.945-52.504H154.53l-51.945 55.11v-55.11z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
