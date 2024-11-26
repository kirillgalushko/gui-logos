import { defineComponent as l, computed as n, openBlock as m, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoGoogleOptimize",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "264",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 264",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#B366F6",
          d: "M168.2 131.117c-.46-19.95-16.888-35.815-36.842-35.579H36.36v71.157h61.525v59.84a34.916 34.916 0 0 0 34.194 36.842 36.48 36.48 0 0 0 36.12-36.842z"
        }),
        t("circle", {
          cx: "35.94",
          cy: "131.538",
          r: "35.94",
          fill: "#8430CE"
        }),
        t("path", {
          fill: "#C58AF8",
          d: "M255.913 35.76C255.714 15.951 239.6 0 219.793 0h-97.164c-18.46 1.853-32.513 17.388-32.513 35.94s14.054 34.087 32.513 35.94h62.247v59.779a35.579 35.579 0 1 0 71.097 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
