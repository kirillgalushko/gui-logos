import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoBuildkite2",
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
      height: "171",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 171",
      style: m(n.value)
    }, o[0] || (o[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#30F2A2",
          points: "0 0 85.3333333 41.8133333 85.3333333 127.146667 0 85.3333333"
        }),
        e("polygon", {
          fill: "#30F2A2",
          points: "171.52 7.10542736e-15 256 41.8133333 171.52 85.3333333"
        }),
        e("polygon", {
          fill: "#14CC80",
          points: "171.52 0 85.3333333 41.8133333 85.3333333 127.146667 171.52 85.3333333"
        }),
        e("polygon", {
          fill: "#14CC80",
          points: "256 41.8133333 171.52 85.3333333 171.52 170.666667 256 127.146667"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
