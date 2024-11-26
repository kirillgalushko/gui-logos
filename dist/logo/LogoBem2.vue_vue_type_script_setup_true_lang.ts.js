import { defineComponent as l, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ l({
  __name: "LogoBem2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "220",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 220",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#010101",
          d: "M146.335 187.82h108.833v31.347H146.335z"
        }),
        t("path", {
          fill: "#F7B334",
          d: "M130.075 187.82v-56.947H78.937v56.947z"
        }),
        t("path", {
          fill: "#010101",
          d: "M108.047 62.171h-41.96L34.092 0H.262v187.82H79.2v-56.947h66.874V100.05c0-21.42-15.473-37.878-38.026-37.878m12.587 50.94h-11.538l-13.113-2.874v-2.874h24.651z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
