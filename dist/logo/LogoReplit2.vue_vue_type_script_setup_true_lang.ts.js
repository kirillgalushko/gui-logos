import { defineComponent as n, computed as m, openBlock as p, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoReplit2",
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
    return (l, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "308",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 308",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F26207",
          d: "M0 19.2C0 8.596 8.596 0 19.2 0h89.6C119.404 0 128 8.596 128 19.2v83.2H19.2C8.596 102.4 0 93.804 0 83.2zm128 83.2h108.8c10.604 0 19.2 8.596 19.2 19.2v64c0 10.604-8.596 19.2-19.2 19.2H128zM0 224c0-10.604 8.596-19.2 19.2-19.2H128V288c0 10.604-8.596 19.2-19.2 19.2H19.2C8.596 307.2 0 298.604 0 288z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
