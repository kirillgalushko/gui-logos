import { defineComponent as i, computed as o, openBlock as n, createElementBlock as a, normalizeStyle as c, createElementVNode as h } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoVtbBank",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const t = m, l = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (n(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2500",
      height: "916",
      viewBox: "0 0.01 93.845 34.405",
      style: c(l.value)
    }, e[0] || (e[0] = [
      h("path", {
        fill: "#009fdf",
        d: "M27.02 4.41H4.81l1.6-4.4h22.21zm-.8 2.2H4l-1.6 4.4h22.21zm-2.4 6.58H1.6L0 17.59h22.19z"
      }, null, -1),
      h("path", {
        fill: "#0a2973",
        d: "M79.94 28.6h4A3.49 3.49 0 0 0 87 27.41a3.82 3.82 0 0 0 .78-2.51 3.48 3.48 0 0 0-1.37-3 4 4 0 0 0-2.51-.64h-3.96zm-5.25 4.43V6.61h17.19l-1.51 4.43H79.94v5.85h4.25c3.43 0 5.21.82 6.44 1.87a7.78 7.78 0 0 1 2.61 6.26 7.59 7.59 0 0 1-3.11 6.54c-1.65 1.14-3.38 1.46-6.9 1.46zm-15.22 0v-22h-7.64V6.61h21.21l-1.51 4.43h-6.76v22zM38.3 17.19h3a6.4 6.4 0 0 0 1.83-.14 2.89 2.89 0 0 0 2-3 2.67 2.67 0 0 0-2-2.93 7.3 7.3 0 0 0-2-.18H38.3zm0 4.57v6.93h3.66a3.93 3.93 0 0 0 2.83-.78 3.45 3.45 0 0 0 1.1-2.72 3.76 3.76 0 0 0-.7-2.26c-.78-1-1.74-1.19-3.38-1.19zm8.46-2.79v.09a9.3 9.3 0 0 1 2.47 1.42 6.23 6.23 0 0 1 2.24 5.17c0 3.61-1.92 6.22-5.07 7a13.5 13.5 0 0 1-3.84.37h-9.51V6.61h8.46a15.6 15.6 0 0 1 4 .37c3.06.82 5.07 2.93 5.07 6.26a5.85 5.85 0 0 1-1.69 4.3 6.4 6.4 0 0 1-2.08 1.41z"
      }, null, -1)
    ]), 4));
  }
});
export {
  r as _
};
