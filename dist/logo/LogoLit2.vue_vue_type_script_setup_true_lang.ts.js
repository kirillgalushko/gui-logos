import { defineComponent as n, computed as p, openBlock as h, createElementBlock as m, normalizeStyle as s, createElementVNode as e } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoLit2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, l = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, i) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "320",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 320",
      style: s(l.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#00E8FF",
          points: "64 192 89.9257031 147.272598 128.15876 128.15876 192.133047 192.133047 202.966055 253.886973 192 320 128 256 89.9257031 230.385117"
        }),
        e("path", {
          fill: "#283198",
          d: "M128 256V128l64-64v128zM0 256l64 64 9.202-60.602L64 192l-37.542 23.71z"
        }),
        e("path", {
          fill: "#324FFF",
          d: "M64 192V64l64-64v128zm128 128V192l64-64v128zM0 256V128l64 64z"
        }),
        e("polygon", {
          fill: "#0FF",
          points: "64 320 64 192 128 256"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
