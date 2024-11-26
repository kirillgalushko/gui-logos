import { defineComponent as m, computed as l, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoHhvm",
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
    return (s, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "382",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 382",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FFF",
          d: "m131.015 127.065 117.088.003-117.088 115.396z"
        }),
        t("path", {
          fill: "#878787",
          d: "M.002 257.489h116.672L.002 375.955zM.001 120.581 121.948 1l.061 121.501L.001 244.185zm256 12.152v124.388L131.02 381.188V256.832zm-.044-14.864-117.087-.003L255.957.723z"
        }),
        t("path", {
          fill: "#F7852F",
          d: "m121.909 247.908-113.513-.003L121.909 134.32z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
