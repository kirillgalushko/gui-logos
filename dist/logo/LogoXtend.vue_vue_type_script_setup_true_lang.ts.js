import { defineComponent as m, computed as n, openBlock as l, createElementBlock as c, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoXtend",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (l(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "212",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 212",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "m44.94 8.28 80.104 95.605-84.791 99.926c-2.452 2.89-.398 7.326 3.392 7.326h31.12c1.499 0 2.92-.657 3.89-1.8l91.612-107.825L88.386 2.59a6.53 6.53 0 0 0-5.03-2.365H48.7c-4.165 0-6.435 4.863-3.76 8.056M4.678 33.83l59.09 70.319L.71 178.668c-1.637 1.934-.262 4.898 2.271 4.898h26.13l69.315-80.968L34.323 26.66H8.018c-3.707 0-5.725 4.33-3.34 7.169m203.29-31.692-50.22 61.379 24.167 26.177L250.114 9.01c3.009-3.559.479-9.01-4.181-9.01h-33.456a5.83 5.83 0 0 0-4.509 2.137m-52.23 134.041 61.004 73.243a4.77 4.77 0 0 0 3.662 1.716h30.794c4.087 0 6.299-4.787 3.65-7.9l-77.368-90.902z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
