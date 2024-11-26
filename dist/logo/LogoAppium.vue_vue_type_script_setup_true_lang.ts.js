import { defineComponent as n, computed as h, openBlock as p, createElementBlock as c, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoAppium",
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
    return (r, t) => (p(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#662D91",
          d: "M.295 119.397c24.814 57.004 87.778 66.563 162.925 18.246 34.66 32.08 43.295 70.11 14.374 108.392C162.341 252.451 145.586 256 128 256 57.308 256 0 198.692 0 128c0-2.89.106-5.758.295-8.602m117.059-24.744c11.205-46.695 42.494-73.48 91.678-65.737C237.702 52.39 256 88.056 256 128c0 50.395-29.126 93.979-71.46 114.857 38.457-54.784 7.03-112.584-67.186-148.204M128 0c27.435 0 52.85 8.635 73.687 23.33-69.951-8.132-102.984 50.175-98.37 130.694-45.452 13.941-82.48 3.669-102.048-44.047C10.03 47.819 63.427 0 128 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
