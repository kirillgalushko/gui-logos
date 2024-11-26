import { defineComponent as m, computed as n, openBlock as h, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoAppcenter2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (h(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: r(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#CB2E63",
          d: "m78.765 0 44.308 9.946v71.578l73.847-51.7v59.648l-73.847 39.77 73.847 39.771v59.648l-73.847-51.7v71.578l-44.308 9.946L0 188.89v-29.824l45.445-29.823L0 99.418V69.594zm.007 149.122-55.134 27.84 55.134 41.754zm0-109.35L23.638 81.526l55.134 27.84zM256 49.719l-59.077-19.893v198.837L256 208.771z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
