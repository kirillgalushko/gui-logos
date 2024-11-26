import { defineComponent as o, computed as h, openBlock as m, createElementBlock as n, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoBlocs",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, a) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "283",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 283",
      style: p(i.value)
    }, a[0] || (a[0] = [
      t("g", null, [
        t("path", {
          fill: "#FFF",
          d: "M128.338.078a38.8 38.8 0 0 0-19.408 5.2L20.244 56.481A38.82 38.82 0 0 0 .836 90.096v102.407a38.81 38.81 0 0 0 19.408 33.615l88.686 51.204a38.8 38.8 0 0 0 19.408 5.2 38.8 38.8 0 0 0 19.408-5.2l88.686-51.204a38.81 38.81 0 0 0 19.409-33.615V90.096a38.82 38.82 0 0 0-19.409-33.615L147.746 5.278a38.8 38.8 0 0 0-19.408-5.2"
        }),
        t("path", {
          fill: "#298AEC",
          d: "M236.432 56.482 147.746 5.278a38.81 38.81 0 0 0-38.816 0L20.244 56.482A38.81 38.81 0 0 0 .836 90.096v102.407a38.81 38.81 0 0 0 19.408 33.615l88.686 51.204a38.81 38.81 0 0 0 38.816 0l88.686-51.204a38.81 38.81 0 0 0 19.409-33.615V90.096a38.81 38.81 0 0 0-19.409-33.614m7.21 131.123a35.1 35.1 0 0 1-17.55 30.398l-80.203 46.306a35.1 35.1 0 0 1-35.102 0l-80.202-46.306a35.1 35.1 0 0 1-17.55-30.398v-92.61a35.1 35.1 0 0 1 17.55-30.398l80.202-46.305a35.1 35.1 0 0 1 35.102 0l80.203 46.305a35.1 35.1 0 0 1 17.55 30.398z"
        }),
        t("path", {
          fill: "#44546C",
          d: "M73.68 109.916h112.986v9.905H73.68zm0 33.308h112.986v9.905H73.68zm0 33.199h112.986v9.905H73.68z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
