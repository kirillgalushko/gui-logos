import { defineComponent as h, computed as m, openBlock as p, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoAmplication2",
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
    return (l, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "262",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 262",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#7950ED",
          d: "M0 130.519c0 67.317 49.315 122.613 112.77 130.34V.178C49.314 7.904 0 63.2 0 130.519m256-.006C256 62.853 206.18 7.213 142.053 0v261.199h113.78v-127.08c.167-1.201.167-2.403.167-3.606"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
