import { defineComponent as h, computed as m, openBlock as r, createElementBlock as l, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoOpera",
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
    return (d, o) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "-1 0 48 48",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#D00003" }, [
          t("path", { d: "M23.007 0C9.93 0 0 9.095 0 23.771 0 36.451 9.198 48 23 48c13.803 0 23-11.549 23-24.229C46 9.111 36.085 0 23.007 0m0 4.24c7.403 0 8.91 9.999 8.91 19.078 0 8.41-.839 19.67-8.82 19.67s-9.013-11.37-9.013-19.78c0-9.078 1.518-18.968 8.923-18.968" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
