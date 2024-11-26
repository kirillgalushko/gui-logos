import { defineComponent as h, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoPayload",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "305",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 305",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M116.204 0 256 84.031v159.5l-105.265 60.896v-159.5L10.772 61.008zM105.49 171.121v124.463L0 232.13z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
