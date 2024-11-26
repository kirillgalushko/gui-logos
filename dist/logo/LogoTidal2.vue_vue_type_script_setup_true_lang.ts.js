import { defineComponent as n, computed as h, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoTidal2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "171",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 171",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#0A0B09",
          d: "m128.004 85.339 42.664 42.67-42.664 42.667-42.669-42.667zM42.667.002 85.335 42.67 42.667 85.34 0 42.67zm170.666 0L256 42.67l-42.667 42.67-42.666-42.67-42.663 42.669-42.669-42.67L128.004 0l42.663 42.665z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
