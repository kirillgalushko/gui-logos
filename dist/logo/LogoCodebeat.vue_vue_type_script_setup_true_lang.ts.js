import { defineComponent as n, computed as m, openBlock as s, createElementBlock as r, normalizeStyle as l, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoCodebeat",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
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
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#27A8E0",
          d: "m57.697 89.561 27.92 58.238 51.045-116.244 56.305 138.983 17.943-40.372H256V128C256 57.31 198.69 0 128 0S0 57.31 0 128v2.166h36.97zM192.58 203.176 135.811 93.428l-50.503 90.877-28.075-64.735-13.69 26.915H1.315C10.286 208.435 63.575 256 128 256s117.79-47.642 126.685-109.593h-35.267z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
