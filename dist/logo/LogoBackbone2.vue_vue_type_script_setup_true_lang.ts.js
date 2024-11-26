import { defineComponent as h, computed as n, openBlock as p, createElementBlock as v, normalizeStyle as m, createElementVNode as e } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoBackbone2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, l) => (p(), v("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "318",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 318",
      style: m(o.value)
    }, l[0] || (l[0] = [
      e("g", null, [
        e("path", {
          fill: "#002A41",
          d: "M0 0v171.945L127.984 244.9v-49.592l-85.62-48.807v-76.66l85.62 48.806V72.956z"
        }),
        e("path", {
          fill: "#0071B5",
          d: "M255.967 0v171.945L127.984 244.9v-49.592l85.619-48.807v-76.66l-85.62 48.806V72.956z"
        }),
        e("path", {
          fill: "#0071B5",
          d: "M0 317.933V145.988l127.984-72.956v49.592l-85.62 48.806v72.761l85.62-48.806v49.592z"
        }),
        e("path", {
          fill: "#002A41",
          d: "M255.967 317.933V145.988L127.984 73.032v49.592l85.619 48.806v72.761l-85.62-48.806v49.592z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
