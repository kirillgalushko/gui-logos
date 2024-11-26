import { defineComponent as l, computed as h, openBlock as p, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoKibana",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "328",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 328",
      style: s(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#F04E98",
          points: "256 0 -4.7684239e-17 0 2.20275616e-13 294.78912"
        }),
        t("path", {
          fill: "#343741",
          d: "M0 122.88v171.91l122.194-140.71C85.862 134.277 44.288 122.88 0 122.88"
        }),
        t("path", {
          fill: "#00BFB3",
          d: "M148.59 170.54 23.2 314.945l-11.069 12.738h238.736C237.77 263.13 200.302 207.496 148.59 170.54"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
