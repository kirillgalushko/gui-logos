import { defineComponent as l, computed as h, openBlock as p, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoVerdaccio2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "216",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 216",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#405236",
          points: "217.6 76.8 148.114286 215.771429 107.885714 215.771429 0 1.42108547e-14 69.4857143 1.42108547e-14 128 117.028571 148.114286 76.8"
        }),
        t("polygon", {
          fill: "#CD4000",
          points: "128 51.2 128 40.2285714 166.4 40.224 171.881143 29.2571429 146.285714 29.2571429 146.285714 18.2857143 177.371429 18.2811429 181.028571 10.9668571 164.571429 10.9714286 164.571429 0 256 1.62409768e-14 230.4 51.2"
        }),
        t("path", {
          fill: "#4A5E3F",
          d: "m62.693 10.971 87.675 175.932-9.02 17.897h-26.687L17.746 10.971z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
