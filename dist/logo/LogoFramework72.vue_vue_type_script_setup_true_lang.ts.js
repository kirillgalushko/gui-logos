import { defineComponent as n, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoFramework72",
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
    return (l, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#EE350F",
          d: "M0 128c0-30.764 10.853-58.992 28.939-81.067H227.06L85.735 248.858C35.811 231.4 0 183.882 0 128m237.562-66.219C249.264 81.101 256 103.764 256 128c0 70.692-57.308 128-128 128-8.47 0-16.746-.823-24.756-2.392zM45.813 29.867C68.05 11.225 96.713 0 128 0s59.951 11.225 82.187 29.867z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
