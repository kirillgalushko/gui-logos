import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoMockflow2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, n = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, o) => (s(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "220",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 220",
      style: m(n.value)
    }, o[0] || (o[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#7957FF",
          points: "146.285714 152.380952 219.428571 100.977778 146.285714 100.977778"
        }),
        e("polygon", {
          fill: "#1B7CE2",
          points: "90.0063492 84.1142857 51.8095238 141.206349 48.7619048 146.08254 48.5587302 146.08254 0 219.428571 0 0"
        }),
        e("polygon", {
          fill: "#7957FF",
          points: "219.428571 48.7619048 146.285714 48.7619048 146.285714 -3.60910596e-15 256 -3.60910596e-15"
        }),
        e("polygon", {
          fill: "#F845C6",
          points: "146.285714 0 146.285714 219.428571 48.7619048 146.08254 51.8095238 141.206349 90.0063492 84.1142857"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
