import { defineComponent as n, computed as h, openBlock as s, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoMapbox2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (s(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "254",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 254",
      style: r(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#485160",
          d: "M128 0c70.695 0 128 56.688 128 126.623s-57.305 126.623-128 126.623S0 196.558 0 126.623 57.305 0 128 0m58.745 68.51c-25.485-25.068-65.8-26.065-90.133-1.994-43.036 42.574-30.346 117.567-29.82 120.55l.016.091s78.182 13.816 121.952-29.484c24.333-24.07 23.47-64.094-2.015-89.163m-44.059 5.698 12.527 25.495 25.772 12.392-25.772 12.392-12.527 25.495-12.526-25.495-25.773-12.392 25.773-12.392z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
