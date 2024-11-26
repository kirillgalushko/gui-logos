import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoVercel3",
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
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "222",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 222",
      style: l(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("polygon", {
          fill: "#000",
          points: "128 0 256 221.705007 0 221.705007"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
