import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoHibernate",
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
    return (s, i) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "267",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 267",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#59666C",
          d: "m153.671 178.933-.932 2.757 49.137 83.342 2.781 1.968L256 178.22l-51.342-89.137zM50.273.304 0 89.084l52.234 89.849 49.738-89.85-.134-3.63L52.565 2.11z"
        }),
        t("path", {
          fill: "#BCAE79",
          d: "m50.273.304 51.7 88.78h102.684L152.601.304zm1.961 178.629L102.864 267h101.793l-50.986-88.067z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
