import { defineComponent as l, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoQuay",
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
      height: "236",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 236",
      style: r(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#40B4E5",
          d: "m200.134 0 55.555 117.514-55.555 117.518h-47.295l55.555-117.518L152.84 0zM110.08 99.836l20.056-38.092-2.29-8.868L102.847 0H55.552l48.647 102.898zm17.766 74.433-17.333-39.034-6.314-3.101-48.647 102.898h47.295l25-52.88z"
        }),
        t("path", {
          fill: "#003764",
          d: "M152.842 235.032 97.287 117.514 152.842 0h47.295l-55.555 117.514 55.555 117.518zm-97.287 0L0 117.514 55.555 0h47.296L47.295 117.514l55.556 117.518z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
