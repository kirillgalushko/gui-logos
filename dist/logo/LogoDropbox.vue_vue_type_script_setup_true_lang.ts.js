import { defineComponent as n, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoDropbox",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, i = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, o) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -1.5 48 48",
      style: s(i.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#0F82E2" }, [
          t("path", { d: "m24 26.033-9.88 8.313L0 25.054l9.764-7.88zl14.236-8.862L48 25.054l-14.12 9.292zM14.12 0 0 9.292l9.764 7.88L24 8.312zm9.909 27.822L14.12 36.11l-4.24-2.791v3.128L24.028 45l14.15-8.553V33.32l-4.241 2.791zM48 9.292 33.88 0 24 8.313l14.236 8.86z" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
