import { defineComponent as h, computed as l, openBlock as a, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoLaunchdarkly2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M129.865 255.306a5.64 5.64 0 0 1-5.073-3.157 5.36 5.36 0 0 1 .507-5.637l59.98-82.584-105.02 42.899a5.8 5.8 0 0 1-2.255.479 5.64 5.64 0 0 1-5.384-4.059 5.41 5.41 0 0 1 2.311-6.172l92.365-54.54-162.632-9.357a5.637 5.637 0 0 1 0-11.106l162.717-9.33-92.393-54.538a5.41 5.41 0 0 1-2.311-6.173 5.64 5.64 0 0 1 5.355-4.059 5.2 5.2 0 0 1 2.255.507l105.048 42.955-59.98-82.555a5.36 5.36 0 0 1-.507-5.638A5.64 5.64 0 0 1 129.894 0c1.48.01 2.894.62 3.917 1.691L253.347 121.2a9.076 9.076 0 0 1 0 12.824L133.755 253.672a5.44 5.44 0 0 1-3.89 1.634"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
