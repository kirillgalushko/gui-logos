import { defineComponent as h, computed as s, openBlock as m, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoHoundci",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "251",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 251",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#A873D1",
          d: "M203.94 250.98H6.716c-3.708 0-6.716-2.947-6.716-6.584V6.584C0 2.95 3.007 0 6.716 0h242.568C252.992 0 256 2.948 256 6.584v103.367c-.973-2.95-12.365-36.7-29.97-53.841-18.418-17.933-51.816-32.607-46.85-20.813s4.967 42.517 4.967 42.517l-50.005 19.073-7.5 27.74-61.2 16.136s4.362 31.215 21.953 36.67c11.283 3.5 85.24 11.658 85.24 11.658l-14.04 61.89z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
