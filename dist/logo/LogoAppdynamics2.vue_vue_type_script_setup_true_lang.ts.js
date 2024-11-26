import { defineComponent as h, computed as m, openBlock as p, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoAppdynamics2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "286",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 286",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M99.576 0C185.966 0 256 70.033 256 156.424c0 53.713-27.073 101.103-68.318 129.269L164.6 233.27c21.8-18.465 35.64-46.04 35.64-76.846 0-55.595-45.07-100.663-100.664-100.663-4.33 0-8.596.273-12.782.804L63.707 4.132A157 157 0 0 1 99.577 0M36.448 78.73l78.258 178.635c-4.309.558-8.702.846-13.163.846C45.463 258.21 0 212.748 0 156.667c0-31.31 14.17-59.31 36.448-77.936"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
