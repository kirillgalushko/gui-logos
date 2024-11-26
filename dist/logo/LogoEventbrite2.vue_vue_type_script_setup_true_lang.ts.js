import { defineComponent as l, computed as r, openBlock as c, createElementBlock as h, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoEventbrite2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (c(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#F05537"
        }),
        t("path", {
          fill: "#FFF",
          "fill-rule": "nonzero",
          d: "M117.475 82.729c19.297-4.288 38.595 3.574 49.315 18.582L81.502 120.61c2.859-18.345 16.676-33.592 35.973-37.88m49.792 70.756c-6.671 9.768-16.915 16.677-28.589 19.297-19.297 4.288-38.832-3.573-49.553-18.82l85.527-19.298 13.818-3.097 26.682-5.956c-.238-5.717-.953-11.435-2.144-16.914-10.72-45.98-57.653-74.806-104.586-64.086s-76.235 56.462-65.276 102.68 57.653 74.806 104.585 64.085c27.636-6.194 49.077-24.776 60.036-48.361z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
