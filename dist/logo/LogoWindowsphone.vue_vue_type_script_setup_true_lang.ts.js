import { defineComponent as h, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoWindowsphone",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 0 48 48",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#00B6F0" }, [
          t("path", { d: "m0 6.796 19.616-2.663.009 18.863-19.607.11zm19.607 18.373.015 18.88L.015 41.36V25.043zm2.378-21.385L47.994 0v22.756l-26.01.206zM48 25.347 47.994 48l-26.01-3.66-.036-19.036z" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
