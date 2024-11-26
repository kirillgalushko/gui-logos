import { defineComponent as n, computed as m, openBlock as l, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoWaypoint2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "167",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 167",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#14C6CB",
          d: "m256 0-31.961 55.366L192.078 0zM85.344 36.952H64.016l53.32 92.381-21.328 36.952L0 0h106.672l53.351 92.38 10.664-18.475L128 0h42.687l21.328 36.952 21.329 36.953-53.32 92.38z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
