import { defineComponent as n, computed as h, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoVagrant2",
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
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "266",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 266",
      style: r(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#1159CC",
          d: "m221.102 0 34.894 20.41-58.187 33.84v.04l58.187-33.88v24.253L177.863 236.26l-49.887 28.8v.004l-.003-.003-.002.003-.001-.004-49.406-28.579L0 45.414V20.41L34.9 0l58.231 34.149-.199.114.155.063v23.06l34.889 81.596v27.26l.006-.003v-27.257l34.933-81.596V34.105h.044zM71.579 46.548 58.193 54.25l-.001.04z"
        }),
        t("polygon", {
          fill: "#127EFF",
          points: "221.101749 4.904663e-15 162.95893 34.1048578 162.914753 34.1048578 162.914753 57.3862827 127.981571 138.981713 127.981571 166.239093 104.733279 179.75734 58.192518 74.7921298 58.192518 54.2496961 93.1312219 34.1490351 34.9000488 0 0 20.4099019 0 45.4142407 78.5637649 236.480963 127.976049 265.063662 127.976049 193.275587 151.268518 179.75734 150.959277 179.580631 197.80928 74.7921298 197.80928 54.2496961 255.996276 20.4099019"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
