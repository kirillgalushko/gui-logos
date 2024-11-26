import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoModx2",
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
      height: "266",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 266",
      style: m(n.value)
    }, o[0] || (o[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#00B5DE",
          points: "256.002409 25.5228988 127.614494 25.5228988 109.825807 53.3660612 202.636348 110.599228 202.636348 110.599228 202.636348 110.599228"
        }),
        e("polygon", {
          fill: "#00DECC",
          points: "109.825807 53.3660612 23.9760565 0 23.9760565 128.387915 54.1394824 145.403181 202.636348 110.599228 202.636348 110.599228"
        }),
        e("polygon", {
          fill: "#FF5529",
          points: "230.479511 136.895548 202.636348 119.880282 145.403181 211.917402 230.479511 265.283464"
        }),
        e("polygon", {
          fill: "#FF9640",
          points: "202.636348 119.880282 202.636348 119.880282 202.636348 119.880282 53.3660612 155.457656 0 238.987144 128.387915 238.987144 145.403181 211.917402"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
