import { defineComponent as l, computed as n, openBlock as h, createElementBlock as v, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoMparticle2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "214",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 214",
      style: r(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M256 106.654v53.308l-85.333 53.32v-53.32zm-85.333 0v53.308l-85.334 53.32v-53.32zm-85.334 0v53.308L0 213.282v-53.32zM256 0v53.32l-85.333 53.321v-53.32zm-85.333 0v53.32l-85.334 53.321v-53.32zM85.333 0v53.32L0 106.642v-53.32z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
