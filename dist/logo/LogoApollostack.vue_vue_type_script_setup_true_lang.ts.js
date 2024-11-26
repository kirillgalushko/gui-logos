import { defineComponent as l, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as c, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoApollostack",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(h.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#112B49",
          d: "M160.227 178.519h27.63L143.75 64.049h-30.549l-44.107 114.47h27.632l7.208-19.39h41.675l-7.544-21.456h-27.44l17.85-49.254zm91.112-84.751a6.64 6.64 0 0 0-8.185-4.627 6.65 6.65 0 0 0-4.628 8.183A114.7 114.7 0 0 1 242.704 128c0 63.248-51.456 114.702-114.704 114.702S13.297 191.248 13.297 128C13.297 64.751 64.752 13.296 128 13.296c26.793 0 52.718 9.518 73.179 26.456a15.9 15.9 0 0 0-1.238 6.173c0 8.835 7.162 15.997 15.997 15.997s15.997-7.162 15.997-15.997-7.162-15.997-15.997-15.997c-1.701 0-3.338.271-4.876.763C188.022 11.056 158.513 0 128 0 57.421 0 0 57.42 0 128c0 70.579 57.421 127.999 128 127.999S256 198.579 256 128a128 128 0 0 0-4.661-34.232"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
