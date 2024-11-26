import { defineComponent as o, computed as l, openBlock as v, createElementBlock as n, normalizeStyle as r, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoPerplexity2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (v(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "298",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 298",
      style: r(m.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#3F7E8B",
          d: "m34.831 0 84.689 78.028V.18h16.486v78.197L221.074 0v88.964H256v128.322h-34.819v79.218l-85.175-74.833v75.692H119.52v-74.459l-84.593 74.508v-80.126H0V88.964h34.831zm72.26 105.248H16.487v95.753h18.42v-30.204zm-55.68 72.775v83.052l68.109-59.988v-84.926zm85.069 22.27v-84.212l68.128 61.865v39.34h.088v42.94zm84.701.708h18.333v-95.753h-89.93l71.597 64.87zM204.588 88.964V37.457l-55.904 51.507zm-97.368 0H51.317V37.457z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
