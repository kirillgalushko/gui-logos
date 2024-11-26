import { defineComponent as h, computed as m, openBlock as s, createElementBlock as r, normalizeStyle as d, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoCodesandbox2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: d(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#000",
          d: "M256 0v256H0V0zm-26.182 26.182H26.182v203.636h203.636z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
