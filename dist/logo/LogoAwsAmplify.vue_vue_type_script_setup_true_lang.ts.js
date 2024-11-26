import { defineComponent as l, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoAwsAmplify",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, o) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "191",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 191",
      style: r(s.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "aws-amplify-gui-asset-a",
          x1: "100%",
          x2: "0%",
          y1: "22.172%",
          y2: "77.828%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#F90"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#FFC300"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#aws-amplify-gui-asset-a)",
          d: "M55.71 158.476h72.106l18.47 32.508H0l51.364-89.006L72.89 64.706l18.48 32.022zM82.6 47.85l17.744-30.746 100.42 173.88h-35.562zM110.221 0h35.516L256 190.984h-35.56z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
