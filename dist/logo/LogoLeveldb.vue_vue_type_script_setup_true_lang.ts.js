import { defineComponent as h, computed as p, openBlock as n, createElementBlock as d, normalizeStyle as m, createElementVNode as e } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoLeveldb",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, o = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, i) => (n(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "329",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 329",
      style: m(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#D4EB95",
          d: "M128 72.17 0 135.367v128.535l128 64.268 128-64.268V135.367z"
        }),
        e("path", {
          fill: "#96DC75",
          d: "M128 51.745 0 114.94v128.536l128 64.268 128-64.268V114.94z"
        }),
        e("path", {
          fill: "#317342",
          d: "M128 0 0 63.197v128.535L128 256l128-64.268V63.197z",
          opacity: ".553"
        }),
        e("path", {
          fill: "#34954C",
          d: "M128 122.795 0 62.638v128.908L128 256l128-64.454V62.638z",
          opacity: ".553"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
