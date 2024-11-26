import { defineComponent as h, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoBiomejs2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "222",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 222",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#60A5FA",
          d: "M127.999 0 70.978 98.758c21.635-6.67 44.911-7.659 67.474-2.337l19.27 4.549-18.13 76.878-19.298-4.548c-14.825-3.497-30.278-.032-42.23 9.416A49.7 49.7 0 0 0 64.15 200.04l-17.838-8.63a69.6 69.6 0 0 1 19.444-24.231 69.45 69.45 0 0 1 59.1-13.16l9.037-38.315a108.94 108.94 0 0 0-92.577 20.612C15.234 156.958 0 188.426 0 221.686l256 .008z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
