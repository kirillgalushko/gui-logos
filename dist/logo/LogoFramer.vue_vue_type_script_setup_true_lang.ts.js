import { defineComponent as o, computed as h, openBlock as d, createElementBlock as m, normalizeStyle as r, createElementVNode as l } from "vue";
const u = /* @__PURE__ */ o({
  __name: "LogoFramer",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (d(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: r(n.value)
    }, t[0] || (t[0] = [
      l("path", {
        fill: "#fff",
        "fill-rule": "evenodd",
        d: "M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14",
        "clip-rule": "evenodd"
      }, null, -1),
      l("path", {
        fill: "#05F",
        "fill-rule": "evenodd",
        d: "M9 20.334h7V27z",
        "clip-rule": "evenodd"
      }, null, -1),
      l("path", {
        fill: "#0AF",
        d: "M16 13.667H9v6.666h14z"
      }, null, -1),
      l("path", {
        fill: "#8DF",
        d: "m9 7 7 6.667h7V7z"
      }, null, -1)
    ]), 4));
  }
});
export {
  u as _
};
