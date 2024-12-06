import { defineComponent as s, computed as o, openBlock as m, createElementBlock as n, normalizeStyle as h, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoWagtail",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "316",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 316",
      style: h(l.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#000",
          d: "M214.75 46.25a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m8.25 56s-8.25-41.5-62.25-30.25c-5.5-18.75-4.5-32.5 7.5-45.25C184.5 9.5 210 19 210 19V4.75C201 .75 192.5 0 183 0c-34.75 0-54 26-62.25 43.5L23 223.25 50.5 218 0 315.5l35.25-6.25 27-76.75c76.5 0 174.5-27.5 160.75-130.25m33-34.75-21.5-20.75-17 20.75zM75 210.25s2.5-.5 7-1.5 10.75-2.5 18.25-4.5q5.625-1.5 12-3.75c4.25-1.5 8.75-3 13-5 4.5-1.75 9-4 13.5-6.5s8.75-5.25 12.75-8.5c1-.75 2-1.5 3-2.5l3-2.5c1.75-1.75 3.75-3.5 5.5-5.5 1.75-1.75 3.25-3.75 4.75-5.75l2.25-3 1-1.5 1-1.5c.5-1 1.25-2 1.75-3s1-2 1.75-3l.75-1.5.75-1.5c.5-1 1-2 1.25-3l2.25-6c.5-2 1.25-4 1.75-5.75s.75-3.75 1.25-5.25c.25-1.75.5-3.25.75-5 .25-1.5.5-3 .5-4.25.25-1.25.25-2.5.5-3.75.25-4.5.25-7 .25-7l4 .25s-.25 2.75-.5 7.25c-.25 1.25-.25 2.5-.5 3.75-.25 1.5-.25 3-.75 4.5-.25 1.5-.75 3.25-1 5-.5 1.75-1 3.5-1.5 5.5s-1.25 3.75-2 6c-.75 2-1.5 4-2.5 6.25l-1.5 3-.75 1.5-.75 1.5c-.5 1-1.25 2-1.75 3.25-.75 1-1.25 2-2 3-.25.5-.75 1-1 1.5l-1 1.5-2.25 3c-1.75 2-3.25 4-5.25 5.75-1.75 2-3.75 3.5-5.75 5.5l-3 2.5c-1 .75-2 1.5-3.25 2.25-4.25 3-8.75 5.75-13.25 8.25-4.5 2.25-9.25 4.5-13.75 6.25s-9 3.25-13.25 4.5-8.25 2.5-12.25 3.25c-7.5 1.75-14 3.25-18.5 4-4 1.5-6.5 2-6.5 2"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};