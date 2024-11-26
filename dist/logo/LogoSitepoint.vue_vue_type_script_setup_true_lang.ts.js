import { defineComponent as n, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoSitepoint",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "307",
      version: "1.1",
      viewBox: "0 0 256 307",
      style: s(l.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", null, [
          t("path", {
            fill: "#07508B",
            d: "m249.63 171.958-22.595-21.6-71.426-65.624-30.791 29.24c-2.815 3.83-2.624 9 .574 12.581l28.15 24.243-.097.038 30.256 28.915c3.58 3.983 3.485 9.881-.268 13.71l-81.575 77.516 37.092 35.406 110.68-105.166c8.484-8.08 8.503-21.179 0-29.298z"
          }),
          t("path", {
            fill: "#E57B25",
            d: "m6.343 134.464 22.596 21.543 71.464 65.623 30.772-29.24a9.965 9.965 0 0 0-.574-12.581l-28.15-24.281.096-.058-30.274-28.895c-3.543-3.964-3.447-9.881.287-13.692l81.575-77.553L117.043 0 6.363 105.166c-8.484 8.08-8.484 21.198 0 29.298z"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
