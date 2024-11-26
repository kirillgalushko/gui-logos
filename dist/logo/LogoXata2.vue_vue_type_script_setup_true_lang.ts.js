import { defineComponent as h, computed as n, openBlock as p, createElementBlock as a, normalizeStyle as m, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ h({
  __name: "LogoXata2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, o = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, i) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "260",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 260",
      style: m(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#06D6A0",
          d: "M216.514 259.317c17.957-17.916 29.972-40.317 33.4-62.274 3.43-21.959-2.007-41.676-15.115-54.814l-67.708 67.55z"
        }),
        e("path", {
          fill: "#FFBE0B",
          d: "M39.487 259.704C21.53 241.788 9.515 219.388 6.086 197.429s2.008-41.675 15.116-54.814l67.708 67.55z"
        }),
        e("path", {
          fill: "#FF0075",
          d: "M0 68.049a95.64 95.64 0 0 0 28.092 67.596l.001-.002 67.7 67.541a95.643 95.643 0 0 0-.159-135.258l-.001.002-67.7-67.54A95.64 95.64 0 0 0 0 68.048"
        }),
        e("path", {
          fill: "#0076FF",
          d: "M256 67.661a95.64 95.64 0 0 1-28.092 67.597l-.002-.003-67.699 67.541a95.645 95.645 0 0 1 .158-135.257l.002.001L228.067 0A95.64 95.64 0 0 1 256 67.661"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
