import { defineComponent as h, computed as m, openBlock as r, createElementBlock as c, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoCarbide",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "313",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 313",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#4B608E",
          d: "m246.242 88.034-67.755 45.68c-14.259-20.006-44.57-22.517-62.096-5.196-16.55 16.354-14.891 43.847 3.427 58.263 20 15.739 50.843 8.898 61.927-13.679L256 207.606c-12.952 30.076-40.486 64.97-101.181 67.61l3.017 37.056c-50.904-7.363-97.472-39.922-113.774-88.52l-31.504 21.014C2.89 221.06-.6 194.965 3.376 169.7c3.844-24.43 14.655-46.338 31.09-65.035L0 88.651c16.182-18.902 35.398-34.42 58.888-43.999 24.073-9.818 51.158-12.933 76.76-7.597L132.632 0c50.66 7.33 97.24 39.675 113.61 88.034"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
