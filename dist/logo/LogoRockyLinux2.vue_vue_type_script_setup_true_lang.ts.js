import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoRockyLinux2",
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
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#10B981",
          d: "M248.877 170.21C253.492 156.996 256 142.79 256 128 256 57.307 198.692 0 128 0S0 57.307 0 128c0 34.979 14.03 66.681 36.77 89.784l129.84-129.84L198.668 120zm-23.381 40.73-58.885-58.884-92.214 92.213C90.703 251.8 108.86 256 128 256c39.05 0 74.019-17.488 97.496-45.06"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
