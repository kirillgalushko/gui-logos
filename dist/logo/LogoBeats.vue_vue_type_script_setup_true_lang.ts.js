import { defineComponent as n, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoBeats",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "328",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 328",
      style: s(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#07C",
          d: "M208.262 138.798c-14.691 38.558-51.908 66.004-95.623 66.004H0V0h112.638C169.2 0 215.04 45.851 215.04 102.401c0 12.84-2.464 25.074-6.778 36.397"
        }),
        t("path", {
          fill: "#343741",
          d: "M208.262 138.798c-15.826-10.024-34.534-15.917-54.663-15.917H.001v81.921h112.638c43.715 0 80.932-27.446 95.623-66.004"
        }),
        t("path", {
          fill: "#00BFB3",
          d: "M232.316 159.811c-21.451 44.529-67.036 75.337-119.678 75.337H0v92.54h153.599c56.562 0 102.401-45.85 102.401-102.4 0-24.91-8.902-47.727-23.684-65.477"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
