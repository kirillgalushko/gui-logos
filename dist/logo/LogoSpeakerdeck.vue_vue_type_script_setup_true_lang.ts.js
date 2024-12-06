import { defineComponent as s, computed as c, openBlock as n, createElementBlock as m, normalizeStyle as r, createElementVNode as h } from "vue";
const l = /* @__PURE__ */ s({
  __name: "LogoSpeakerdeck",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "160",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 160",
      style: r(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#009287",
          d: "M106.932 100H50C22.386 100 0 77.614 0 50S22.386 0 50 0h66.421c11.046 0 20 8.954 20 20s-8.954 20-20 20H48.977c-5.522 0-10 4.477-10 10s4.478 10 10 10h56.933c27.614 0 50 22.386 50 50s-22.386 50-50 50H20c-11.046 0-20-8.954-20-20s8.954-20 20-20h86.932c5.523 0 10-4.477 10-10s-4.477-10-10-10m42.082 60c13.299-8.994 22.804-23.332 25.554-40h32.275c5.43 0 9.832-4.477 9.832-10V50c0-5.523-4.402-10-9.832-10h-58.632c4.67-5.308 7.51-12.316 7.51-20s-2.84-14.692-7.51-20h68.464C238.393 0 256 17.909 256 40v80c0 22.091-17.607 40-39.325 40z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};