import { defineComponent as l, computed as s, openBlock as p, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoProcessing",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (p(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "238",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 238",
      style: m(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("path", {
          fill: "#0468FF",
          d: "M140.872 0c34.66 0 64.174 11.477 85.111 32.415C245.464 51.895 256 78.235 256 105.535c0 27.298-10.536 53.638-30.017 73.118-20.728 20.729-49.861 32.185-84.073 32.412l-1.038.003v-57.564c19.82 0 34.6-5.748 44.407-15.555 8.502-8.501 13.157-20.138 13.157-32.415s-4.655-23.913-13.157-32.415c-9.708-9.709-24.292-15.44-43.814-15.553l-.593-.002z"
        }),
        t("polygon", {
          fill: "#1F34AB",
          points: "117.846078 49.8889163 163.897385 84.4273968 48.7691171 237.931754 2.71780975 203.393274"
        }),
        t("polygon", {
          fill: "#85AEFF",
          points: "51.4869268 92.6625142 89.8630162 169.414693 38.3760894 195.158157 0 118.405978"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
