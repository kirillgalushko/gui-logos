import { defineComponent as n, computed as h, openBlock as r, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoMonday2",
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
    return (s, i) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "156",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 156",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#F62B54",
          d: "M31.846 153.489a31.97 31.97 0 0 1-27.86-16.167 30.91 30.91 0 0 1 .875-31.823l57.373-90.096A31.99 31.99 0 0 1 90.556.015a31.93 31.93 0 0 1 27.41 16.896c5.349 10.113 4.68 22.28-1.725 31.774L58.904 138.78a31.98 31.98 0 0 1-27.058 14.709"
        }),
        t("path", {
          fill: "#FC0",
          d: "M130.256 153.488c-11.572 0-22.22-6.187-27.812-16.13a30.81 30.81 0 0 1 .875-31.737l57.264-89.89A31.94 31.94 0 0 1 188.93.016c11.669.255 22.244 6.782 27.592 16.993a30.81 30.81 0 0 1-2.066 31.92l-57.252 89.889a31.93 31.93 0 0 1-26.948 14.671"
        }),
        t("ellipse", {
          cx: "226.466",
          cy: "125.324",
          fill: "#00CA72",
          rx: "29.538",
          ry: "28.918"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
