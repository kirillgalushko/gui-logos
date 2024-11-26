import { defineComponent as m, computed as n, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoFramer2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "384",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 384",
      style: l(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M0 0h256v128H128zm0 128h128l128 128H128v128L0 256z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
