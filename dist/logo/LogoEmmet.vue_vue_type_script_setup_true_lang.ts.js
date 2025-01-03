import { defineComponent as m, computed as h, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoEmmet",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "127.555",
          cy: "128.184",
          r: "127.555",
          fill: "#1C1C20"
        }),
        t("path", {
          fill: "#BAFFA9",
          d: "m178.496 124.737-14.205-14.205 7.306-30.035-30.441 6.9-13.8-13.8 68.187-17.047z"
        }),
        t("path", {
          fill: "#7ACB16",
          d: "M154.956 218.901 33.192 97.138 101.38 80.09l13.8 13.8-48.706 12.176 27.6 27.6 32.064-7.712-8.117 31.658 27.6 27.6 12.176-48.705 14.205 14.206z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
