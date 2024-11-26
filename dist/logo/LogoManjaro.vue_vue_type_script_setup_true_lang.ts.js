import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoManjaro",
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
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#35BF5C",
          d: "M256 0v256h-74.925V0zm-90.54 90.536V256H90.535V90.536zm0-90.536v74.925H74.67V256H0V0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
