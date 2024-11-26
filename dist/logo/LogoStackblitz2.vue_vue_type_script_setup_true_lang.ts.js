import { defineComponent as h, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as p, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoStackblitz2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "368",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 368",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("polygon", {
          fill: "#49A2F8",
          points: "109.586274 217.013141 0 217.013141 200.340162 2.84217094e-14 146.413726 150.233087 256 150.233087 55.6451483 367.246227 109.571584 217.013141"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
