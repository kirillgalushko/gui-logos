import { defineComponent as h, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as a, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoTapcart2",
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
      height: "227",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 227",
      style: a(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1B191B",
          d: "m243.563 83.255-70.728-70.727a42.537 42.537 0 0 0-60.295 0L81.066 44.153a70.033 70.033 0 0 1 0 138.319l31.625 31.655a42.54 42.54 0 0 0 46.47 9.271 42.5 42.5 0 0 0 13.825-9.271l70.577-70.757a42.54 42.54 0 0 0 0-60.115M80.1 45.117l.965-.964a70.033 70.033 0 1 0 0 138.318l-.965-.964a96.474 96.474 0 0 1 0-136.39"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
