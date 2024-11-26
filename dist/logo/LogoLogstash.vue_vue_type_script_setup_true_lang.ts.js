import { defineComponent as n, computed as l, openBlock as s, createElementBlock as p, normalizeStyle as m, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoLogstash",
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
    return (r, i) => (s(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "307",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 307",
      style: m(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FEC514",
          d: "M122.435 189.217H0V0h11.13c61.474 0 111.305 49.83 111.305 111.304z"
        }),
        t("path", {
          fill: "#343741",
          d: "M116.87 306.086h5.565V189.217H0c0 64.545 52.324 116.87 116.87 116.87"
        }),
        t("polygon", {
          fill: "#00BFB3",
          points: "150.261099 306.086291 256 306.086291 256 189.21698 150.261099 189.21698"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
