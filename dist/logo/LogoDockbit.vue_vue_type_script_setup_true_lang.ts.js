import { defineComponent as l, computed as a, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const m = /* @__PURE__ */ l({
  __name: "LogoDockbit",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, s = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "286",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 286",
      style: p(s.value)
    }, o[0] || (o[0] = [
      t("defs", null, [
        t("linearGradient", {
          id: "dockbit-gui-asset-a",
          x1: "77.041%",
          x2: "22.841%",
          y1: "13.184%",
          y2: "87.539%"
        }, [
          t("stop", {
            offset: "0%",
            "stop-color": "#7236DC"
          }),
          t("stop", {
            offset: "100%",
            "stop-color": "#3F37AE"
          })
        ])
      ], -1),
      t("g", null, [
        t("path", {
          fill: "url(#dockbit-gui-asset-a)",
          d: "M240.481 60.13 143.525 4.16a31.05 31.05 0 0 0-31.046 0L15.523 60.13A31.06 31.06 0 0 0 0 87.018v111.955c0 11.09 5.92 21.338 15.523 26.883l96.956 55.984a31.05 31.05 0 0 0 31.046 0l96.956-55.984A31.04 31.04 0 0 0 256 198.973V87.018a31.06 31.06 0 0 0-15.519-26.888m-9.315 135.918a9.32 9.32 0 0 1-4.658 8.07l-22.684 13.098a9.32 9.32 0 0 1-9.315 0l-22.688-13.098a9.32 9.32 0 0 1-4.654-8.07v-26.196c0-3.329 1.775-6.4 4.654-8.066l22.688-13.098a9.32 9.32 0 0 1 9.315 0l22.684 13.098a9.31 9.31 0 0 1 4.658 8.066z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  m as _
};
