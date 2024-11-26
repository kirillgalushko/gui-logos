import { defineComponent as n, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoEsbuild",
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
    return (p, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#FFCF00"
        }),
        t("path", {
          fill: "#191919",
          d: "M69.285 58.715 138.571 128l-69.286 69.285-16.97-16.97L104.629 128 52.315 75.685zm76.8 0L215.371 128l-69.286 69.285-16.97-16.97L181.429 128l-52.314-52.315z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
