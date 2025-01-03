import { defineComponent as s, computed as l, openBlock as m, createElementBlock as n, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoGrowthBook2",
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
    return (r, i) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "272",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 272",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#029DD1",
          d: "M83.655 96.975 256 0s-16.248 14.293-15.534 45.232C241.228 78.205 256 90.466 256 90.466l-20.252-9.227-158.537 62.063s-3.849-10.785-3.912-18.913c-.163-20.054 10.356-27.414 10.356-27.414"
        }),
        t("path", {
          fill: "#0047BD",
          d: "m46.99 160.371 188.3-68.879s-16.249 14.293-15.534 45.234c.762 32.972 15.533 45.232 15.533 45.232l-26.307-10.127-169.01 33.27s-3.277-9.94-3.339-17.316c-.16-20.055 10.358-27.414 10.358-27.414"
        }),
        t("path", {
          fill: "#4817A1",
          d: "m10.357 216.229 198.674-35.64s-16.248 14.292-15.534 45.232c.762 32.972 15.534 45.233 15.534 45.233H11.84S.175 263.968 0 242.614c-.16-20.056 10.357-26.385 10.357-26.385"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
