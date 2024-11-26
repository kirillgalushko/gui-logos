import { defineComponent as h, computed as n, openBlock as p, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoChartjs",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#36A2EB",
          d: "M248.572 148.807c-41.32.811-32.713 26.969-61.833 33.584-29.582 6.72-34.252-72.248-63.826-72.248-29.579 0-36.13 76.709-73.166 129.37l-1.057 1.491 79.404 45.836 120.478-69.551z"
        }),
        t("path", {
          fill: "#FFCE56",
          d: "M248.572 146.426c-13.832-17.752-23.214-38.16-43.4-38.16-35.72 0-26.32 58.271-65.798 58.271-39.482 0-43.633-62.679-88.358-3.759-14.252 18.774-25.723 39.707-34.734 59.515l111.812 64.549 120.478-69.551z"
        }),
        t("path", {
          fill: "#FE6184",
          d: "M7.613 170.564c13.555-37.538 19.405-67.94 45.283-67.94 39.478 0 48.875 110.908 82.718 99.625 33.838-11.278 30.077-71.432 82.719-71.432 10.02 0 20.25 6.138 30.241 16.067v70.405l-120.478 69.55L7.613 217.29z",
          opacity: ".8"
        }),
        t("path", {
          fill: "#E7E9ED",
          d: "M128 295.56 0 221.673V73.89L128 0l128 73.89v147.78zM15.039 212.99 128 278.2l112.961-65.21V82.572L128 17.362 15.039 82.572z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
