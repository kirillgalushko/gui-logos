import { defineComponent as s, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ s({
  __name: "LogoZendFramework",
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
    return (d, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "124",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 124",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", { fill: "#6FB643" }, [
        t("path", { d: "M120.43 36.02s0-33.818 33.82-33.818h101.456s0 33.819-33.82 33.819zm0 43.213s0-33.819 33.82-33.819h50.727s0 33.82-33.82 33.82zm0 43.213s0-33.818 33.82-33.818h16.907s0 33.818-33.817 33.818z" }),
        t("path", { d: "M109.076 96.055v26.98H.32l70.06-95.568H10.236V.486h113.456L53.956 96.055z" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
