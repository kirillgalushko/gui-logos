import { defineComponent as m, computed as n, openBlock as h, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoWebpack2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, l) => (h(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "290",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 290",
      style: s(o.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#FFF",
          points: "128 0.0483018868 256 72.4528302 256 217.310189 128 289.714717 0 217.310189 0 72.4528302"
        }),
        t("path", {
          fill: "#8ED6FB",
          d: "m233.153 212.287-100.902 57.14V224.99l62.889-34.632zm6.907-6.231V86.654l-36.902 21.3v76.8zm-217.6 6.23 100.903 57.094v-44.438l-62.889-34.584zm-6.907-6.23V86.654l36.903 21.3v76.8zm4.3-127.13 103.51-58.543v42.99L57.045 99.84l-.532.29zm215.86 0L132.251 20.382v42.99l66.27 36.515.531.29z"
        }),
        t("path", {
          fill: "#1C78C0",
          d: "m123.363 214.847-62.02-34.15v-67.574l62.02 35.792zm8.888 0 62.02-34.101v-67.623l-62.02 35.792zM65.497 105.298l62.31-34.246 62.26 34.246-62.26 35.937z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
