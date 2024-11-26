import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoMicrosoft3",
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
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(n.value)
    }, o[0] || (o[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#F1511B",
          points: "121.666095 121.666095 0 121.666095 0 0 121.666095 0"
        }),
        e("polygon", {
          fill: "#80CC28",
          points: "256 121.666095 134.335356 121.666095 134.335356 0 256 0"
        }),
        e("polygon", {
          fill: "#00ADEF",
          points: "121.663194 256.002188 0 256.002188 0 134.336095 121.663194 134.336095"
        }),
        e("polygon", {
          fill: "#FBBC09",
          points: "256 256.002188 134.335356 256.002188 134.335356 134.336095 256 134.336095"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
