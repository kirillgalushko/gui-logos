import { defineComponent as n, computed as m, openBlock as s, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoCss3Official",
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
    return (p, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "232",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 232",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#444",
          d: "m100.902 231.618 116.456-38.653L256 0H37.867L29.57 43.056h174.812l-5.443 27.49H23.862L15.3 113.602h174.823l-9.602 49.284-70.547 23.076-60.955-23.076 4.16-21.528H10.123L0 192.965z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
