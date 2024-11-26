import { defineComponent as h, computed as r, openBlock as n, createElementBlock as l, normalizeStyle as m, createElementVNode as e } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoZeroheight2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, o) => (n(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "310",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 310",
      style: m(s.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "zeroheight-2-gui-asset-a",
          x1: "15.751%",
          x2: "84.249%",
          y1: "100%",
          y2: "0%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#EC407A"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#FFA000"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#zeroheight-2-gui-asset-a)",
          d: "m22.627 0 22.64 48.24H0zM0 55.862h45.268v215.841H0zm0 223.463h45.268v26.242H0zm80.54-231.21 31.352-31.323L256 161.012l-144.834 148.31-31.295-29.732 113.762-118.369L80.541 48.13z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
