import { defineComponent as l, computed as n, openBlock as c, createElementBlock as s, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoWebDev2",
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
    return (p, i) => (c(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "218",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 218",
      style: m(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#00C9DB",
          d: "M226.859 160.16h-86.308c-.97 0-2.91 0-3.88.969l-64.973 51.397q-1.455 1.455 0 2.91c0 .97.97.97 1.94.97h154.19c15.517 0 29.093-13.578 28.124-30.063-.97-15.516-14.547-26.184-29.093-26.184"
        }),
        t("path", {
          fill: "#0D55FF",
          d: "M156.445 106.018c-.97-7.758-4.849-15.516-10.667-20.365L45.893 6.133c-12.607-9.698-30.062-7.758-39.76 4.849s-7.758 30.062 4.849 39.76l72.731 58.185-72.731 58.185c-12.607 9.698-14.547 27.154-4.849 39.76 9.698 12.607 27.153 14.547 39.76 4.85l99.885-81.46c6.788-5.819 10.667-13.577 10.667-22.305z"
        }),
        t("path", {
          fill: "#7000F2",
          d: "M255.952 188.282c0 15.516-12.607 28.123-28.123 28.123s-28.123-12.607-28.123-28.123 12.607-28.123 28.123-28.123 28.123 12.607 28.123 28.123"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
