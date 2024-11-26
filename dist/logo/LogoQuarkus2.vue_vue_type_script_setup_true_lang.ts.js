import { defineComponent as h, computed as o, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoQuarkus2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, m = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: r(m.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4695EB",
          d: "M213.554 0c23.418.08 42.377 19.052 42.443 42.47v171.084c-.066 23.428-19.042 42.404-42.47 42.47h-25.439l-11.661-28.318h37.127c7.774-.1 14.051-6.378 14.152-14.152V42.47c-.1-7.774-6.378-14.051-14.152-14.152H42.47c-7.774.1-14.051 6.378-14.152 14.152v171.084c.1 7.774 6.378 14.051 14.152 14.152h62.607l22.935-48.494 31.625 76.812H42.47C19.042 255.958.066 236.982 0 213.554V42.47C.066 19.042 19.042.066 42.47 0zm-43.983 139.727v45.51l-39.417-22.748zM86.453 94.218v45.51l-39.418-22.762zm80.976-49.231v45.51l-39.417-22.762z"
        }),
        t("path", {
          fill: "#FF004A",
          d: "m86.453 139.727 39.417 22.762-39.417 22.748zm83.118-45.509 39.418 22.748-39.418 22.761zM88.595 44.987l39.417 22.748-39.417 22.761z"
        }),
        t("path", {
          fill: "#091313",
          d: "m86.453 94.218 39.417 22.748v45.523l-39.417-22.762zm83.118 0v45.51l-39.417 22.76v-45.522zm-41.559-26.483 39.417 22.761-39.417 22.761-39.417-22.76z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
