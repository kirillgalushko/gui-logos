import { defineComponent as n, computed as l, openBlock as a, createElementBlock as m, normalizeStyle as r, createElementVNode as h } from "vue";
const p = /* @__PURE__ */ n({
  __name: "LogoSentry",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -14.5 256 256",
      style: r(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#362D59",
          d: "M148.368 12.403a23.935 23.935 0 0 0-41.003 0L73.64 70.165c52.426 26.174 87.05 78.177 90.975 136.642h-23.679c-3.918-50.113-34.061-94.41-79.238-116.448l-31.213 53.97a81.6 81.6 0 0 1 47.307 62.375h-54.38a3.895 3.895 0 0 1-3.178-5.69l15.069-25.626a55 55 0 0 0-17.221-9.738L3.167 191.277a23.27 23.27 0 0 0 8.662 31.982 23.9 23.9 0 0 0 11.583 3.075h74.471a99.43 99.43 0 0 0-41.003-88.72l11.84-20.5c35.679 24.504 55.754 66.038 52.79 109.22h63.094c2.99-65.43-29.047-127.512-84.107-162.986l23.935-41.002a3.947 3.947 0 0 1 5.382-1.384c2.716 1.486 103.993 178.208 105.89 180.258a3.895 3.895 0 0 1-3.486 5.792h-24.396q.46 9.789 0 19.528h24.499A23.53 23.53 0 0 0 256 202.91a23 23 0 0 0-3.178-11.685z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
