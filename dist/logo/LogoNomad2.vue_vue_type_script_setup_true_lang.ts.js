import { defineComponent as n, computed as h, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoNomad2",
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
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#00CA8E",
          d: "M128.044 0 0 73.865v147.773l127.956 73.865L256 221.638V73.865zm57.123 162.582-34.098 19.685-41.217-22.542v47.105L71.14 231.393v-98.428l30.76-18.806 42.622 22.453V88.541l40.645-24.431z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
