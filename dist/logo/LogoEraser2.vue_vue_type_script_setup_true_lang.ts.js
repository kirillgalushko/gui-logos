import { defineComponent as n, computed as l, openBlock as r, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoEraser2",
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
    return (p, i) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "98",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 98",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#EB043B",
          d: "M121.5 97.041H7.542c-5.844 0-9.466-8.093-6.461-14.424l37.08-77.97C39.56 1.764 41.989 0 44.664 0h76.838z"
        }),
        t("path", {
          fill: "#0085FF",
          d: "M134.54 0h113.92c5.843 0 9.464 8.093 6.46 14.424l-37.081 77.97c-1.357 2.844-3.826 4.607-6.461 4.607H134.54z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
