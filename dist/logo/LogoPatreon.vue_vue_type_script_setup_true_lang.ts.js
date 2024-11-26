import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoPatreon",
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
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -4.5 256 256",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FF424D",
          d: "M45.136 0v246.35H0V0zm118.521 0C214.657 0 256 41.343 256 92.343s-41.343 92.343-92.343 92.343-92.343-41.344-92.343-92.343S112.658 0 163.657 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
