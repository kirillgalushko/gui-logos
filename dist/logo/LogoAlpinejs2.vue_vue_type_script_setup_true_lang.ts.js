import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoAlpinejs2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = p(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (s(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "118",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 118",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#77C1D2",
          points: "199.111112 0 256 56.6393762 199.111112 113.278752 142.222222 56.6393762"
        }),
        t("polygon", {
          fill: "#2D3441",
          points: "56.8888888 0 174.826667 117.420507 61.0488889 117.420507 0 56.6393762"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
