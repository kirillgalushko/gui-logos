import { defineComponent as n, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const v = /* @__PURE__ */ n({
  __name: "LogoPuppet2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "395",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 395",
      style: r(o.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#FFAE1A",
          d: "M256 256V138.204h-90.155l-48.049-48.307V0H0v117.796h90.155l48.307 48.307v62.256l-48.307 48.307H0v117.796h117.796v-89.897l48.307-48.307H256zM39.265 39.265h39.266v39.266H39.265zm39.266 315.673H39.265v-39.265h39.266z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
