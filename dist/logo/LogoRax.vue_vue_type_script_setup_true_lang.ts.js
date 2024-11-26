import { defineComponent as n, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoRax",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F76927",
          d: "m.61.667 62.848 64.059 103.504-.764s23.118 1.788 23.118 30.211c0 28.424-19.61 30.47-19.61 30.47l-42.732 1.146 58.56 61.224S256 171.199 256 94.413 176.607 0 176.607 0zM0 126.313h89.65l127.598 128.36-90.652 1.76z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
