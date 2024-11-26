import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoTwitch",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "-6 0 268 268",
      style: s(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#5A3E85",
          d: "M17.458 0 0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717zm64.008 116.405H128V69.844h-23.275zm63.997 0h23.27V69.844h-23.27z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
