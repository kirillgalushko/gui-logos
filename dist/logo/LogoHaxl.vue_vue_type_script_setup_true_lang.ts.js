import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoHaxl",
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
    return (p, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "325",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 325",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#4E69A2",
          d: "m149.334 0-29.867 59.734 25.6 51.2L200.533 0zM204.8 25.6 153.6 128l25.6 51.2L256 25.6zm-187.733 0 17.066 34.134H51.2l119.467 238.933h68.267l-17.067-34.134H204.8L85.333 25.6zM0 298.667h51.2l51.2-102.4-25.6-51.2zm55.466 25.6h51.2l29.866-59.734-25.6-51.2z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
