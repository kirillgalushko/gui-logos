import { defineComponent as n, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoProgress",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "277",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 277",
      style: l(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#5CE500",
          d: "M63.017 260.487 2.769 223.492l60.248-35.871zm30.83 16.292V172.754L0 115.906l65.32-38.532 91.541 55.952v104.53zm90.932-12.793V119.229L57.516 41.861 128.24 0 256 74.049V221.17z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
