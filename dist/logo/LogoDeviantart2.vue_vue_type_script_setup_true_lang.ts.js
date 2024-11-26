import { defineComponent as l, computed as r, openBlock as h, createElementBlock as m, normalizeStyle as s, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoDeviantart2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "414",
      version: "1.1",
      viewBox: "0 0 256 414",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        o("polyline", {
          fill: "#45AD47",
          "fill-rule": "nonzero",
          points: "256 75.2057743 256 0.00442038002 180.796622 0.00442038002 173.292277 7.57354555 137.807068 75.1976767 126.648732 82.7263143 -2.84217094e-14 82.7263143 -2.84217094e-14 185.999628 69.6262347 185.999628 75.8268845 193.499925 -2.84217094e-14 338.396341 -2.84217094e-14 413.599719 75.2013538 413.599719 82.7077236 406.03262 118.194957 338.406463 129.351268 330.879849 256 330.879849 256 227.604512 186.373766 227.604512 180.179188 220.053606 256 75.2057743"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
