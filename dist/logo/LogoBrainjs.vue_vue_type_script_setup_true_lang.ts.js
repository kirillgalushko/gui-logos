import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoBrainjs",
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
    return (p, i) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#F3DF49"
        }),
        t("path", {
          fill: "#2E2E2C",
          d: "m175.744 196.096 33.024 18.432-10.112 23.808h-8.704l-7.168-10.88-53.12-14.208zm-41.6-54.784 37.504 29.696v19.328l-50.304 19.456-26.24 1.28-20.224-27.136 19.072-26.112zm55.808-8.832 46.848 28.8-5.76 35.328-18.048 13.312-34.56-19.584v-19.328l-6.528-37.376zm-24.96 2.304 5.888 27.776-28.672-23.936z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
