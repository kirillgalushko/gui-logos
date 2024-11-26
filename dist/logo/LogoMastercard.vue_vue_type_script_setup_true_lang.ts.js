import { defineComponent as o, computed as d, openBlock as r, createElementBlock as h, normalizeStyle as c, createElementVNode as l } from "vue";
const s = /* @__PURE__ */ o({
  __name: "LogoMastercard",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = d(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 -11 70 70",
      style: c(n.value)
    }, t[0] || (t[0] = [
      l("rect", {
        width: "69",
        height: "47",
        x: ".5",
        y: ".5",
        fill: "#fff",
        stroke: "#D9D9D9",
        rx: "5.5"
      }, null, -1),
      l("path", {
        fill: "#ED0006",
        "fill-rule": "evenodd",
        d: "M35.395 34.762a13.5 13.5 0 0 1-8.853 3.298c-7.537 0-13.647-6.181-13.647-13.806s6.11-13.806 13.647-13.806c3.378 0 6.47 1.242 8.853 3.298a13.5 13.5 0 0 1 8.852-3.298c7.537 0 13.648 6.181 13.648 13.806S51.785 38.06 44.247 38.06c-3.378 0-6.47-1.242-8.852-3.298",
        "clip-rule": "evenodd"
      }, null, -1),
      l("path", {
        fill: "#F9A000",
        "fill-rule": "evenodd",
        d: "M35.395 34.762a13.84 13.84 0 0 0 4.795-10.508 13.84 13.84 0 0 0-4.795-10.508 13.5 13.5 0 0 1 8.852-3.298c7.537 0 13.648 6.181 13.648 13.806S51.785 38.06 44.247 38.06c-3.378 0-6.47-1.242-8.852-3.298",
        "clip-rule": "evenodd"
      }, null, -1),
      l("path", {
        fill: "#FF5E00",
        "fill-rule": "evenodd",
        d: "M35.395 13.746a13.84 13.84 0 0 1 4.795 10.508c0 4.208-1.861 7.976-4.795 10.508A13.84 13.84 0 0 1 30.6 24.254c0-4.208 1.86-7.976 4.795-10.508",
        "clip-rule": "evenodd"
      }, null, -1)
    ]), 4));
  }
});
export {
  s as _
};
