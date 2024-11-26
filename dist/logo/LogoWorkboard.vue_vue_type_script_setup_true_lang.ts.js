import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoWorkboard",
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
    return (p, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#51BBD6",
          d: "M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0s128 57.308 128 128"
        }),
        t("path", {
          fill: "#FFF",
          d: "M101.98 110.076V75.414l55.816 18.733zm55.816 54.715L101.98 181.7v-34.878zm36.932-83.095-92.748-33.03v-16.07h-25.6v190.95h25.6v-14.86l92.748-28.366v-25.6l-68.407-25.6 68.407-21.403z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
