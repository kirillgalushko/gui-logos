import { defineComponent as l, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoHexo",
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
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "295",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 295",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#0E83CD",
          d: "M128.04 0 .574 73.768.59 221.079l127.754 73.465 127.464-73.769.002-147.23z"
        }),
        t("path", {
          fill: "#FFF",
          d: "m68.242 211.051.01-63.7.01-63.702 11.573-6.768 11.085 6.56.12 26.03.12 26.031h74.075l.12-26.013.12-26.014 11.257-6.505 11.412 6.68-.006 63.658-.005 63.659-11.298 6.31-11.361-6.392-.12-25.885-.12-25.886H91.16l-.12 25.878.034 26.008-11.36 6.663z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
