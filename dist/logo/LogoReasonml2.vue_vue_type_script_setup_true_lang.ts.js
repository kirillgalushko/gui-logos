import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoReasonml2",
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
    return (p, h) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(o.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "256",
          x: "0",
          y: "0",
          fill: "#DD4B39"
        }),
        t("path", {
          fill: "#FFF",
          d: "M151.33 232.674h-28.85l-14.215-27.038H89.311v27.038H63.807v-97.697h43.9c25.923 0 40.696 12.543 40.696 34.284 0 14.773-6.132 25.644-17.42 31.497zm-62.019-77.35v29.964h18.536c10.313 0 16.306-5.295 16.306-15.19 0-9.617-5.993-14.774-16.306-14.774zm75.398-20.347h77.07v20.347h-51.565v18.258h46.548v20.208l-46.548.14v18.396h52.96v20.348h-78.465z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
