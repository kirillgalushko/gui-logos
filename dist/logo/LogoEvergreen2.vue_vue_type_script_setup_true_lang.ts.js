import { defineComponent as l, computed as r, openBlock as h, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoEvergreen2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { "fill-rule": "nonzero" }, [
          t("circle", {
            cx: "128",
            cy: "128",
            r: "128",
            fill: "#38A065"
          }),
          t("path", {
            fill: "#FFF",
            d: "M135.97 176.049v31.88h-15.94v-31.88zM128 56.5l55.79 111.579H72.21z"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
