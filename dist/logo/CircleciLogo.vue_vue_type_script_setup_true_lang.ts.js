import { defineComponent as h, computed as m, openBlock as n, createElementBlock as c, normalizeStyle as l, createElementVNode as s } from "vue";
const d = /* @__PURE__ */ h({
  __name: "CircleciLogo",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "#000",
      viewBox: "0 0 32 32",
      style: l(o.value)
    }, t[0] || (t[0] = [
      s("path", { d: "M11.953 16a3.8 3.8 0 0 1 3.801-3.807c2.1 0 3.813 1.713 3.813 3.807s-1.713 3.807-3.813 3.807A3.814 3.814 0 0 1 11.953 16m3.802-16C8.287 0 2.031 5.12.255 12.031c-.015.052-.015.095-.015.163 0 .416.339.771.765.771h6.448a.73.73 0 0 0 .687-.448c1.333-2.88 4.24-4.896 7.62-4.896 4.62 0 8.38 3.76 8.38 8.385s-3.76 8.385-8.385 8.385c-3.375 0-6.285-2-7.615-4.896-.129-.255-.385-.448-.687-.448H1.005a.76.76 0 0 0-.765.765c0 .052.02.1.02.161C2.021 26.88 8.287 32 15.755 32c8.833 0 16-7.167 16-16 0-8.828-7.167-16-16-16" }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};
