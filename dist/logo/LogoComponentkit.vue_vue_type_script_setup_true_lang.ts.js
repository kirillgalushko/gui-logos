import { defineComponent as m, computed as h, openBlock as l, createElementBlock as p, normalizeStyle as r, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoComponentkit",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#39BCD3",
          d: "m92.748 135.605 77.82 77.82L127.991 256l-77.82-77.82zm120.677-50.188L256 127.992l-77.82 77.82-42.575-42.575zM128.008 0l42.575 42.575L42.575 170.583 0 128.008z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
