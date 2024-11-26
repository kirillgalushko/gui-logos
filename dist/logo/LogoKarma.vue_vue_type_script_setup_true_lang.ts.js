import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ l({
  __name: "LogoKarma",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "198",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 198",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#429F87",
          d: "m154.565 138.602 39.246 58.547h62.043l-70.31-103.883zM29.492 169.994l28.736-27.07 45.942 54.225L74.678 88.375l-24.9 40.962z"
        }),
        t("path", {
          fill: "#56C5A8",
          d: "m29.492 169.994 45.186-81.62-28.728 27.084L0 61.23zM249.938.603h-62.043l-37.999 56.144V.603H92.985v58.229l30.344 111.834 7.071 26.483h19.496v-49.138z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
