import { defineComponent as o, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoDescript2",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "302",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 302",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#0062FF",
          d: "M0 274.036c0 16.462 10.683 27.139 27.151 27.139l79.33.001c47.324 0 86.037-16.005 112.357-44.025H0zM106.481.002 27.151 0C10.683 0 0 10.678 0 27.14v16.886h218.838C192.518 16.006 153.805.002 106.48.002m69.231 193.5c0 13.318 8.68 21.959 22.06 21.959h47.536c5.389-13.367 9.01-28.06 10.692-43.918h-58.227c-13.382 0-22.06 8.64-22.06 21.959m-65.888-85.719c0 13.32 8.68 21.959 22.06 21.959H256c-1.683-15.857-5.303-30.552-10.692-43.918H131.885c-13.382 0-22.06 8.64-22.06 21.959m22.046 85.719c0-13.32-8.68-21.959-22.061-21.959H0v43.918h109.809c13.381 0 22.06-8.64 22.06-21.96m-65.888-85.719c0-13.32-8.68-21.959-22.061-21.959H0v43.918h43.92c13.382 0 22.062-8.64 22.062-21.959"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
