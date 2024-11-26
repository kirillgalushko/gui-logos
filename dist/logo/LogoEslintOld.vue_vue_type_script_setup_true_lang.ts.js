import { defineComponent as l, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoEslintOld",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "263",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 263",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#3A33D1",
          d: "M100.034 262.106.598 172.57 28.45 41.694 155.626.354l99.436 89.535-27.851 130.876zm-48.086-106.18 59.291 53.307 75.828-24.695 16.645-78.004-59.291-53.417-75.828 24.805z"
        }),
        t("path", {
          fill: "#6464E2",
          d: "M181.301 223.92H74.359l-53.525-92.69 53.525-92.69h106.942l53.525 92.69zM93.18 191.283h69.3l34.705-60.053-34.705-60.053h-69.3L58.584 131.23z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
