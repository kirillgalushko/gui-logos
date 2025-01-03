import { defineComponent as a, computed as h, openBlock as n, createElementBlock as m, normalizeStyle as c, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ a({
  __name: "LogoNodemon",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "292",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 292",
      style: c(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#76D04B",
          d: "M120.947 289.19a13.76 13.76 0 0 0 13.77 0l114.08-65.83a13.77 13.77 0 0 0 6.893-11.935V79.664a13.79 13.79 0 0 0-6.886-11.934L134.724 1.846a13.79 13.79 0 0 0-13.785 0L6.889 67.73A13.79 13.79 0 0 0 0 79.664v131.77c0 4.918 2.627 9.465 6.892 11.925l114.054 65.83"
        }),
        t("path", {
          fill: "#4F4D3F",
          d: "m201.701 114.111-5.087-2.928c7.823-11.539 12.498-28.888 6.636-54.825 0 0-13.202 36.999-39.74 35.773L132.437 74.25a8.1 8.1 0 0 0-3.813-1.109h-.717a8.2 8.2 0 0 0-3.824 1.109L93.006 92.13c-26.535 1.23-39.74-35.773-39.74-35.773-5.866 25.936-1.183 43.285 6.638 54.825l-5.087 2.929a8.39 8.39 0 0 0-4.19 7.271l.153 107.332c0 1.498.775 2.885 2.09 3.614a4 4 0 0 0 4.155 0l41.164-23.572c2.605-1.547 4.189-4.276 4.189-7.26v-50.142c0-2.99 1.584-5.762 4.177-7.243l17.529-10.094a8.27 8.27 0 0 1 4.193-1.13 8.16 8.16 0 0 1 4.162 1.129l17.523 10.094a8.33 8.33 0 0 1 4.183 7.242v50.143c0 2.983 1.605 5.733 4.194 7.26l41.154 23.57a4.06 4.06 0 0 0 4.184 0 4.17 4.17 0 0 0 2.077-3.614l.134-107.332c-.003-3.018-1.586-5.784-4.186-7.27z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};
