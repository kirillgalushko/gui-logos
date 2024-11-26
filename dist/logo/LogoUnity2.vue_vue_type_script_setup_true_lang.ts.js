import { defineComponent as h, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoUnity2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "263",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 263",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#222C37" }, [
        i("path", { d: "m166.872 131.237 45.91-79.275 22.184 79.275-22.185 79.256zm-22.376 12.874 45.916 79.262-79.966-20.486-57.77-58.776zm45.906-105.033-45.906 79.275h-91.82l57.77-58.78zm65.539 65.18L227.933.06l-104.54 27.925-15.475 27.207-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232 15.497 27.207 104.528 27.92L255.94 158.22l-15.906-26.982z" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
