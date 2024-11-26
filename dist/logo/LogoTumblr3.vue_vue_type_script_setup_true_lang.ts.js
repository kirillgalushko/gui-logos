import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoTumblr3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "446",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 446",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#303D4D",
          d: "M234.576 355.8c-8.28 3.95-24.125 7.387-35.953 7.7-35.64.959-42.56-25.04-42.872-43.921V180.922H245.2v-67.42h-89.113V.042H90.831c-1.071 0-2.946.937-3.192 3.325C83.823 38.093 67.554 99.041 0 123.39v57.533h45.08v145.553c0 49.812 36.757 120.602 133.792 118.95 32.717-.558 69.072-14.283 77.128-26.088z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
