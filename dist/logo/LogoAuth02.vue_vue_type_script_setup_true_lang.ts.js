import { defineComponent as n, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoAuth02",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "285",
      version: "1.1",
      viewBox: "0 0 256 285",
      style: s(i.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M220.412 0h-92.415l28.562 89.006h92.416l-74.77 53.077 28.57 89.511c48.128-35.06 63.854-88.12 46.208-142.588zM7.018 89.006h92.416L127.997 0H35.589zc-17.655 54.468-1.92 107.529 46.207 142.588l28.563-89.51zm46.208 142.588 74.77 52.97 74.77-52.97-74.77-53.847z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
