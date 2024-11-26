import { defineComponent as n, computed as s, openBlock as l, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoEthnio",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#24373E",
          d: "M128 0c70.687 0 128 57.313 128 128s-57.313 128-128 128S0 198.687 0 128 57.313 0 128 0"
        }),
        t("path", {
          fill: "#F8F4EF",
          d: "M128 46.968c44.774 0 80.98 36.31 80.98 80.98s-36.31 80.98-80.98 80.98-80.98-36.206-80.98-80.98c0-44.67 36.258-80.98 80.98-80.98"
        }),
        t("path", {
          fill: "#8EB0BD",
          d: "M128 79.778c26.593 0 48.222 21.577 48.222 48.222S154.645 176.222 128 176.222s-48.222-21.63-48.222-48.274 21.577-48.17 48.222-48.17"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
