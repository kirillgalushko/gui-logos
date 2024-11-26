import { defineComponent as n, computed as h, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoCodeclimate2",
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
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "142",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 142",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#2B2B2B",
          d: "m84.841 28.3 28.773 28.772 28.772 29.51 27.297 27.296-28.772 28.035-27.297-26.559L84.84 86.582l-8.115 6.64-36.887 37.625-11.067 11.066L0 113.878l10.329-12.541zM171.16 0 256 84.104l-28.772 29.51-56.07-56.07-19.919 19.92-28.772-28.772z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
