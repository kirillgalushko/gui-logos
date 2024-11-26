import { defineComponent as h, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoCampaignmonitor2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "174",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 174",
      style: p(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#7856FF",
          "fill-rule": "nonzero",
          d: "M254.234 4.152a9.725 9.725 0 0 0-13.565-2.381L1.737 169.047a9.7 9.7 0 0 0 7.968 4.148l.01.01h236.55c5.379 0 9.735-4.366 9.735-9.745V9.57a9.73 9.73 0 0 0-1.766-5.437M15.312 1.76A9.735 9.735 0 0 0 0 9.57v154.177l113.75-93.18L15.321 1.742"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
