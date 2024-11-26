import { defineComponent as l, computed as p, openBlock as s, createElementBlock as m, normalizeStyle as h, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoHtmx2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = p(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (s(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "168",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 168",
      style: h(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#111",
          points: "181.394935 42.749283 256 74.2039835 256 96.0617321 181.394935 127.078518 175.477838 105.581524 230.646979 84.8771384 175.477838 64.0931689"
        }),
        t("polygon", {
          fill: "#111",
          points: "74.6050654 42.7484751 6.6060424e-14 74.2039835 1.83634114e-13 96.0617321 74.6050654 127.078518 80.5221623 105.581524 25.3530206 84.8771384 80.5221623 64.0931689"
        }),
        t("polygon", {
          fill: "#4065C5",
          points: "144.339858 -1.59458264e-15 170.003907 -1.59458264e-15 112.990192 167.110525 85.996093 167.110525"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
