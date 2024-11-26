import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoMicroPython",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M0 0h122.76v199.86h10.48V0H256v256h-56.14V56.14h-10.48V256H66.62V56.14l-10.48.375V256H0zm237.287 208.094h-14.971v25.45h14.97z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
