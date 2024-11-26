import { defineComponent as h, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoStenciljs2",
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
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "197",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 197",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "m193.065 138.495-53.333 58.428H41.599L94.4 138.495zM256 69.248l-53.305 58.427H0l53.305-58.427zM214.399 0l-53.087 58.428h-98.38L116.1 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
