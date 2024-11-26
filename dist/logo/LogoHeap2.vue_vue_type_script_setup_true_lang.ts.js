import { defineComponent as l, computed as r, openBlock as n, createElementBlock as m, normalizeStyle as d, createElementVNode as e } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoHeap2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, o = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "415",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 415",
      style: d(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("rect", {
          width: "47.999",
          height: "235.196",
          x: "0",
          y: "89.613",
          fill: "#000"
        }),
        e("rect", {
          width: "47.999",
          height: "179.196",
          x: "104.025",
          y: "0",
          fill: "#000"
        }),
        e("rect", {
          width: "47.999",
          height: "179.196",
          x: "104.025",
          y: "235.229",
          fill: "#31D891"
        }),
        e("rect", {
          width: "47.999",
          height: "235.196",
          x: "208.001",
          y: "89.613",
          fill: "#31D891"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
