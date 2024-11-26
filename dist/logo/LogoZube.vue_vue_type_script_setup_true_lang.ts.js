import { defineComponent as n, computed as h, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoZube",
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
      height: "178",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 178",
      style: s(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#0D83DD",
          d: "m0 63.228 119.833 63.23v50.744L0 113.972zM119.834 0 8.994 58.483 57.08 83.855l62.754-33.111zm16.333 0v50.744L207.914 88.6l-71.747 37.856V177.2L256 113.971V63.229z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
