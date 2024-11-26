import { defineComponent as h, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as d, createElementVNode as e } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoGooglePlay3",
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
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "283",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 283",
      style: d(o.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("path", {
          fill: "#EA4335",
          d: "M119.553 134.916 1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"
        }),
        e("path", {
          fill: "#FBBC04",
          d: "M239.37 113.814 181.715 80.79l-64.898 56.95 65.162 64.28 57.216-32.67a31.345 31.345 0 0 0 0-55.537z"
        }),
        e("path", {
          fill: "#4285F4",
          d: "M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"
        }),
        e("path", {
          fill: "#34A853",
          d: "m120.436 141.274 61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
