import { defineComponent as c, computed as s, openBlock as l, createElementBlock as n, normalizeStyle as m, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ c({
  __name: "LogoPlasmic",
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
    return (p, i) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "137",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 137",
      style: m(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#0091FF",
          d: "M256 120.555C252.034 53.306 196.248 0 128 0 59.76 0 3.966 53.306 0 120.555c.23 2.897.7 5.034 1.641 6.88a17.1 17.1 0 0 0 7.471 7.472c3.437 1.752 7.865 1.855 16.31 1.863v-8.548c0-56.648 45.93-102.578 102.578-102.578s102.578 45.93 102.578 102.578v8.548c8.445 0 12.873-.11 16.31-1.863a17.1 17.1 0 0 0 7.47-7.471c.941-1.847 1.411-3.984 1.642-6.881"
        }),
        t("path", {
          fill: "#46A758",
          d: "M128 59.837c-37.768 0-68.385 30.617-68.385 68.385v8.548H33.97v-8.548c0-51.93 42.1-94.03 94.03-94.03s94.03 42.1 94.03 94.03v8.548h-25.645v-8.548c0-37.768-30.617-68.385-68.385-68.385"
        }),
        t("path", {
          fill: "#E54D2E",
          d: "M187.837 136.77v-8.548c0-33.047-26.79-59.837-59.837-59.837s-59.837 26.79-59.837 59.837v8.548h17.096a8.55 8.55 0 0 0 8.548-8.548c0-18.884 15.309-34.192 34.193-34.192s34.193 15.308 34.193 34.192a8.55 8.55 0 0 0 8.548 8.548z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
