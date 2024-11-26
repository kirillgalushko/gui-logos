import { defineComponent as h, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoPurescript2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "158",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 158",
      style: s(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#1D222D",
          d: "M51.676 46.77 64.88 59.98l-42.352 42.346 42.352 42.357-13.205 13.196L2.72 108.924A9.26 9.26 0 0 1 0 102.328a9.24 9.24 0 0 1 2.721-6.6zm110.207 69.604 19.987 18.663H94.102l-19.987-18.663zM204.328 0l48.935 48.96A9.27 9.27 0 0 1 256 55.55a9.3 9.3 0 0 1-2.737 6.615l-48.935 48.945-13.2-13.202 42.33-42.351-42.33-42.355zM181.87 69.612l-19.987 18.663H74.115l19.987-18.663zm-19.987-46.774 19.98 18.67h-87.76L74.12 22.837z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
