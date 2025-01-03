import { defineComponent as o, computed as m, openBlock as n, createElementBlock as s, normalizeStyle as r, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ o({
  __name: "LogoWebassembly",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(l.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#654FF0",
          d: "M157.29 0H256v255.997H0V0h98.71c-.02.458-.068.911-.068 1.375 0 16.215 13.144 29.36 29.358 29.36s29.36-13.145 29.36-29.36c0-.464-.047-.917-.07-1.375m58.327 228.6h17.598l-26.657-90.632h-26.753L157.853 228.6h17.058l4.444-20.18h30.485zm-93.4 0h16.842l21.609-90.632H144.04l-13.236 62.453h-.216l-12.57-62.453h-15.871l-13.984 61.69h-.217l-11.604-61.69H59.39L78.92 228.6h17.166l13.447-61.69h.216zm67.784-68.291h7.13l8.502 33.258h-23.03z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
