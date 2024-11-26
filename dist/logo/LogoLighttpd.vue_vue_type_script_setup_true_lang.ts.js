import { defineComponent as l, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as d, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoLighttpd",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "211",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 211",
      style: d(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#316682",
          d: "m46.081 194.998 19.847-18.585-.138-.87-15.164-10.227-4.643 27.742z"
        }),
        t("path", {
          fill: "#8194A6",
          d: "m46.081 194.998 5.015-28.526 1.176-.216L251.732 4.664 256 0l-7.561 4.193L31.524 151.445l-.177 1.234z"
        }),
        t("path", {
          fill: "#D9E2E9",
          d: "M31.347 152.679 256 0 0 123.839z"
        }),
        t("path", {
          fill: "#D7E0E5",
          d: "m117.239 210.672-66.143-44.2L256 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
