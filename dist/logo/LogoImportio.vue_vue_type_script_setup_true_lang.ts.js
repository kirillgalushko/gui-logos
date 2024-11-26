import { defineComponent as n, computed as r, openBlock as m, createElementBlock as l, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoImportio",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "306",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 306",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#001761",
          d: "M167.785 56.146v156.411h-79.57V56.146C28.422 75.7-8.295 135.81 1.607 197.937 11.507 260.063 65.09 305.782 128 305.782s116.492-45.72 126.393-107.845c9.902-62.126-26.815-122.236-86.608-141.791"
        }),
        t("circle", {
          cx: "128",
          cy: "39.785",
          r: "39.785",
          fill: "#267CF9"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
