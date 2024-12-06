import { defineComponent as c, computed as h, openBlock as s, createElementBlock as n, normalizeStyle as m, createElementVNode as l } from "vue";
const a = /* @__PURE__ */ c({
  __name: "LogoPassbolt2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (s(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "233",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 233",
      style: m(o.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#D40000",
          d: "m137.909 0 .39.007 1.086.051a25.6 25.6 0 0 1 14.8 6.01l.83.732.785.757 93.125 93.552c9.328 9.37 9.411 24.007.374 33.645l-.63.649-.648.621-96.55 89.485c-9.764 9.055-24.814 9.33-34.677.77l-.68-.612-.652-.631-53.948-54.162a1.65 1.65 0 0 1 .25-2.535c11.387-7.646 19.674-19.064 23.264-32.166l.343-1.316.325-1.384a1.65 1.65 0 0 1 1.325-1.249l.282-.024h40.247c.81 0 1.484.584 1.623 1.354l.027.297v15.627c0 4.744 3.549 8.668 8.138 9.204l.555.048.575.016h19.802c4.744 0 8.668-3.549 9.204-8.137l.047-.556.017-.575v-15.627c0-.81.584-1.484 1.354-1.624l.296-.027h7.065c4.831 0 8.78-3.574 9.312-8.244l.047-.566.016-.565V112.55c0-4.854-3.597-8.877-8.248-9.418l-.563-.048-.564-.016H85.162a1.65 1.65 0 0 1-1.549-1.08c-4.751-12.897-14.17-23.69-26.375-30.362l-1.23-.653-1.236-.62a1.65 1.65 0 0 1-.586-2.459l.204-.227 65.401-60.585c4.397-4.077 9.959-6.508 15.765-6.964l1.105-.079.859-.036zM28.649 93.497c15.816 0 28.65 12.58 28.65 28.115s-12.834 28.115-28.65 28.115S0 137.147 0 121.612s12.834-28.115 28.65-28.115"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};