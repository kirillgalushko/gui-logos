import { defineComponent as n, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoInfer",
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
    return (p, i) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#7D29E4",
          d: "M256 128c0 70.693-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128"
        }),
        t("path", {
          fill: "#FFF",
          d: "M169.888 125.664h-50.092V63.24c0-2.881-1.413-5.217-5.216-5.217-3.612 0-5.215 2.336-5.215 5.216v130.608c0 2.88 1.413 5.216 5.216 5.216 3.612 0 5.215-2.335 5.215-5.216v-57.752h50.092c2.88 0 5.215-1.412 5.215-5.215 0-3.614-2.335-5.216-5.215-5.216"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
