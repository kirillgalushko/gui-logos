import { defineComponent as h, computed as m, openBlock as n, createElementBlock as s, normalizeStyle as c, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoLightstep2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "193",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 193",
      style: c(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#039C49",
          d: "M128.423 127.761c17.349 0 31.412-14.064 31.412-31.412s-14.063-31.412-31.412-31.412S97.012 79.001 97.012 96.35s14.063 31.412 31.411 31.412"
        }),
        t("path", {
          fill: "#121C21",
          d: "M119.419.438 17.853 54.885c-1.047.628-1.884 1.675-2.094 2.722L.053 127.76c-.209 1.048.21 1.885 1.047 2.304l132.768 62.614c1.047.42 2.304.42 3.56 0l84.812-38.531c1.256-.629 2.094-1.676 2.304-2.932l31.411-140.726c.21-1.047-.418-2.303-1.675-2.512h-.418L121.303.228c-.419-.419-1.256-.21-1.884.21m15.496 186.796-121.04-56.96h43.139l101.146 14.449zm28.69-41.883 49.84 7.12-71.62 32.669zM61.201 125.667l38.322-75.39 118.109-13.611-56.75 103.24zM221.193 31.22 102.037 45.042 122.35 5.045l123.972 7.33zM96.173 45.67l-64.916 7.54L115.23 8.395zM20.367 59.492l73.085-8.376-37.694 74.132H5.707zm199.78 89-54.029-7.748L224.125 35.41l25.548-19.056z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
