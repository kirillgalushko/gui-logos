import { defineComponent as m, computed as h, openBlock as n, createElementBlock as c, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoEmbedly",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "292",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 292",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4EC6E6",
          d: "m128.152 0 103.256 94.579c33.299 30.501 34.231 82.681 2.044 114.353l-68.057 66.966c-20.796 20.462-54.205 20.316-74.821-.328l-66.517-66.608c-31.476-31.519-30.614-82.835 1.903-113.28z"
        }),
        t("path", {
          fill: "#FFF",
          d: "m197.351 126.961-68.538-66.822-76.331 72.49c-7.93 7.93-8.591 30.937.992 40.519l75.009 72.696.33-33.043-52.539-50.227c-5.426-5.425-4.93-11.756.496-17.182l16.356-15.985 78.437 75.711 26.632-26.434c14.631-14.705 13.259-37.62-.844-51.723m-17.687 34.714-10.146 10.146-59.209-57.49 19.371-20.239 49.235 46.922c6.953 6.952 7.701 13.709.749 20.661"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
