import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoAdobe3",
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
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "227",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 227",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FA0F00",
          d: "m128.024 83.527 60.288 143.042h-39.513l-18.038-45.554H86.642zM256 0v226.54L161.353 0zM94.684 0 0 226.54V0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
