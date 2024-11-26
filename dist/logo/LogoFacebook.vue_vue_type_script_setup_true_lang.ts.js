import { defineComponent as n, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoFacebook",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = l(() => ({
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
      viewBox: "0 0 48 48",
      style: s(i.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#4460A0" }, [
          t("path", { d: "M25.638 48H2.65A2.65 2.65 0 0 1 0 45.35V2.65A2.65 2.65 0 0 1 2.65 0h42.7A2.65 2.65 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255z" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
