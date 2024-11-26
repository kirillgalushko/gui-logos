import { defineComponent as h, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoCrystal",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M93.365 0 0 93.741l34.258 128.376L163.011 256 256 161.882 222.117 35.388zM6.776 95.247l124.988-32.754-34.258 124.612z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
