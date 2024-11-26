import { defineComponent as o, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ o({
  __name: "LogoCSharp",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, l) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(i.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#05930C"
        }),
        t("path", {
          fill: "#FFF",
          "fill-opacity": ".1",
          d: "m38.903 36.1 180.833 181.166C196.483 241.16 163.974 256 128 256 57.308 256 0 198.692 0 128c0-36.06 14.91-68.636 38.903-91.9"
        }),
        t("path", {
          fill: "#FFF",
          d: "M121.72 174.2a59.1 59.1 0 0 1-28 5.92 44.92 44.92 0 0 1-34.44-13.84 51.12 51.12 0 0 1-12.92-36.36 53.56 53.56 0 0 1 14.56-39.08A49.4 49.4 0 0 1 97.96 76a59.2 59.2 0 0 1 23.76 4v12.6a48 48 0 0 0-24-6.04 36.68 36.68 0 0 0-28 11.6 43.72 43.72 0 0 0-10.8 31A41.6 41.6 0 0 0 69 158.52a34.32 34.32 0 0 0 26.48 10.92 49.7 49.7 0 0 0 26.28-6.76zm89.32-68.36-1.6 7.44h-18.4l-4.4 21.12h19.76l-1.88 7.44h-19.36l-6.2 28h-8.84l6.04-28h-17.6l-5.92 28H144l5.92-28h-18.56l1.4-7.44h18.64l4.28-21.08H136.2l1.48-7.44h19.48l5.92-28.28H172l-5.92 28.28h17.72l6.04-28.28h8.64l-5.92 28.28zm-28.68 7.44H164.6L160 134.4h17.84z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
