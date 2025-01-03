import { defineComponent as l, computed as m, openBlock as n, createElementBlock as c, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoSemaphoreci",
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
    return (r, i) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "160",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 160",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#F06332",
          d: "m26.523 66.618 44.35 44.995c12.778 12.995 33.718 12.995 46.496 0L152.483 75.9c5.047-5.133 13.316-5.133 18.363 0l17.395 17.692L144 138.697c-13.745 13.978-31.785 20.859-49.826 20.859-18.04 0-36.08-6.99-49.825-20.968L0 93.593z"
        }),
        t("path", {
          fill: "#029D74",
          d: "M211.65 20.968 256 66.072l-26.63 27.084-44.35-45.103c-12.886-13.106-33.61-13.106-46.496 0L103.41 83.764c-5.047 5.133-13.316 5.133-18.363 0L67.651 66.072l44.35-45.104c27.489-27.957 72.16-27.957 99.65 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
