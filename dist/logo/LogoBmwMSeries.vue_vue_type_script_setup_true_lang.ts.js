import { defineComponent as i, computed as o, openBlock as p, createElementBlock as d, normalizeStyle as a, createStaticVNode as n } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoBmwMSeries",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (m, t) => (p(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      viewBox: "0 0 192.756 192.756",
      style: a(l.value)
    }, t[0] || (t[0] = [
      n('<g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0z"></path><path fill="#33a0d1" d="M41.517 65.083H63.49l-33.012 59.935H8.504z"></path><path fill="#373485" d="M63.49 65.083h23.718l-33.012 59.935H30.478z"></path><path fill="#c52b30" d="M87.208 65.083h23.626l-33.011 59.935H54.196z"></path><path fill="#e6e6e7" d="M118.26 65.083h22.043l.687 26.952 14.844-26.952h19.463l1.498 59.935h-20.609V97.532l-13.793 27.486h-19.571l.315-26.782-14.117 26.782H85.248z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
