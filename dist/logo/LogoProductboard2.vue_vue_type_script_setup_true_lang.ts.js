import { defineComponent as l, computed as p, openBlock as s, createElementBlock as r, normalizeStyle as h, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoProductboard2",
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
    return (m, o) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "168",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 168",
      style: h(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#FF2638",
          points: "85.326959 83.9967251 170.653918 167.99345 0 167.99345"
        }),
        t("polygon", {
          fill: "#FFC600",
          points: "0 0 85.326959 83.9967251 170.653918 0"
        }),
        t("polygon", {
          fill: "#0079F2",
          points: "85.3406727 83.9967251 170.667632 167.99345 255.994591 83.9967251 170.667632 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
