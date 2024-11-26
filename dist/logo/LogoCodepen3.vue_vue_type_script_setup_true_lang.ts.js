import { defineComponent as m, computed as h, openBlock as n, createElementBlock as a, normalizeStyle as p, createElementVNode as l } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoCodepen3",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (n(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(o.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#000",
          d: "m127.574.007.222-.005h.41l.28.008.333.018c2.146.142 4.138.844 5.834 1.96l115.73 76.804a12 12 0 0 1 3.174 2.934l.224.306.155.225A12.06 12.06 0 0 1 256 88.941v77.87a12.06 12.06 0 0 1-1.794 6.51l-.132.209-.138.21a12.1 12.1 0 0 1-3.216 3.244l-115.88 76.9a12.05 12.05 0 0 1-6.004 2.085l-.513.024-.323.005h-.21l-.315-.012-.327-.018a12.04 12.04 0 0 1-5.959-2.065L5.649 177.226a12 12 0 0 1-2.789-2.43l-.027-.034a12 12 0 0 1-.723-.955l-.046-.067A12.07 12.07 0 0 1 0 166.854V89.186a12.06 12.06 0 0 1 1.453-5.919l.248-.435.1-.168a12.2 12.2 0 0 1 3.848-3.892L121.168 2.109a12.05 12.05 0 0 1 5.59-2.046l.458-.038zM70.058 142.6l-36.133 24.307 81.959 54.386v-47.865zm115.883-.001-45.826 30.829v47.865l81.957-54.388zm-57.94-38.978-36.233 24.374L128 152.365l36.232-24.37zm-103.78 8.143v32.468l24.132-16.234zm207.537.013-24.112 16.221 24.112 16.221zM115.884 34.686 33.918 89.083l36.143 24.311 45.823-30.826zm24.231.013v47.869l45.823 30.826 36.14-24.308z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
