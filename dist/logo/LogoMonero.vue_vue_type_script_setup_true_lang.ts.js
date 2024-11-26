import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoMonero",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = l(() => ({
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
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#F60",
          d: "M127.998 0C57.318 0 0 57.317 0 127.999c0 14.127 2.29 27.716 6.518 40.43H44.8V60.734l83.2 83.2 83.198-83.2v107.694h38.282c4.231-12.714 6.521-26.303 6.521-40.43C256 57.316 198.681 0 127.998 0"
        }),
        t("path", {
          fill: "#4C4C4C",
          d: "m108.867 163.062-36.31-36.311v67.765H18.623c22.47 36.863 63.051 61.48 109.373 61.48s86.907-24.617 109.374-61.48h-53.933V126.75l-36.31 36.31-19.13 19.129-19.128-19.128z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
