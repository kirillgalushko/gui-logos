import { defineComponent as n, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const a = /* @__PURE__ */ n({
  __name: "LogoBlitzjs2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "394",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 394",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#6700EB",
          d: "M65.062 196.687a78.8 78.8 0 0 1 62.965 31.42l64.178 85.287a5.25 5.25 0 0 1 .47 5.569l-36.994 71.675c-1.775 3.44-6.533 3.843-8.863.754L0 196.687zm44.12-194.596L256 196.796h-65.062a78.8 78.8 0 0 1-62.965-31.42L63.795 80.089a5.25 5.25 0 0 1-.47-5.568l36.994-71.677c1.774-3.439 6.532-3.843 8.862-.753"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};