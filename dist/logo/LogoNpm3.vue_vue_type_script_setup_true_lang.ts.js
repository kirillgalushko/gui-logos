import { defineComponent as p, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as h, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoNpm3",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#C12127",
          points: "0 256 0 0 256 0 256 256"
        }),
        t("polygon", {
          fill: "#FFF",
          points: "48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
