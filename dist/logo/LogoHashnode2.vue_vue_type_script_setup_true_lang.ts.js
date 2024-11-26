import { defineComponent as h, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as o } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoHashnode2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", { "fill-rule": "evenodd" }, [
        o("path", {
          fill: "#2962FF",
          d: "M17.591 85.533c-23.455 23.455-23.455 61.479 0 84.932l67.943 67.944c23.455 23.453 61.479 23.453 84.932 0l67.944-67.944c23.453-23.455 23.453-61.48 0-84.932L170.466 17.59c-23.455-23.452-61.48-23.452-84.932 0zm140.134 72.193c16.418-16.419 16.418-43.036 0-59.452-16.417-16.419-43.034-16.419-59.45 0-16.419 16.418-16.419 43.033 0 59.452 16.418 16.416 43.033 16.416 59.452 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
