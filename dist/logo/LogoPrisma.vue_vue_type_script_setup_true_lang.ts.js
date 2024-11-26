import { defineComponent as l, computed as m, openBlock as r, createElementBlock as h, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoPrisma",
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
    return (p, t) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "310",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 310",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          "fill-rule": "nonzero",
          d: "M254.313 235.519 148 9.749A17.06 17.06 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.47 17.47 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.93 17.93 0 0 0 11.26-9.722 17.54 17.54 0 0 0-.101-14.76zm-23.802 9.683-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
