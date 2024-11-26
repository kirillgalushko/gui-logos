import { defineComponent as r, computed as h, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ r({
  __name: "LogoTurret",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "384",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 384",
      style: p(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("polygon", {
          fill: "#195DE6",
          points: "208 288 192 160 224 160 240 144 240 0 192 0 192 48 160 48 160 0 96 0 96 48 64 48 64 0 16 0 16 144 32 160 64 160 48 288 16 288 0 304 0 384 256 384 256 304 240 288"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
