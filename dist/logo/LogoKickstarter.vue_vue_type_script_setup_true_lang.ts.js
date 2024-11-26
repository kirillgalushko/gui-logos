import { defineComponent as h, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoKickstarter",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "-17 0 290 290",
      style: p(s.value)
    }, t[0] || (t[0] = [
      i("g", { fill: "#05CE78" }, [
        i("path", { d: "m209.302 144.583 26.28-26.105c27.224-27.042 27.224-71.087 0-98.129s-71.564-27.043-98.788 0l-9.569 9.504C114.557 11.781 93.667 0 69.812 0 31.267 0 0 31.059 0 69.346v150.34c0 38.287 31.267 69.346 69.812 69.346 23.855 0 44.745-11.781 57.413-29.854l9.569 9.505c27.224 27.043 71.564 27.043 98.788 0s27.224-71.086 0-98.129z" })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
