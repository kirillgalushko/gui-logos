import { defineComponent as l, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ l({
  __name: "LogoPagekite",
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
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "285",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 285",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#E80022",
          d: "M206.052 203.265C237.813 190.014 256 183.436 256 183.436L189.698 0 0 40.15s4.022 11.406 10.833 56.141L152.495 64.46z"
        }),
        t("path", {
          fill: "#B6B1B1",
          d: "M22.837 187.856c3.068 27.315 6.069 58.652 9.577 96.507a2594 2594 0 0 1 88.56-43.423l-25.941-69.291z"
        }),
        t("path", {
          fill: "#748282",
          d: "M13.422 114.016c2.152 15.307 4.524 33.606 7.085 55.417l85.945-20.253 30.88 84.2a2291 2291 0 0 1 50.227-22.289L141.076 86.93z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
