import { defineComponent as m, computed as l, openBlock as r, createElementBlock as h, normalizeStyle as p, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoTerraform2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, o) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "291",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 291",
      style: p(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#4040B2",
          points: "176.485057 188.994162 256.000302 143.127442 256.000302 51.2485453 176.485057 97.2122358"
        }),
        t("path", {
          fill: "#5C4EE5",
          d: "m88.243 51.249 79.515 45.963v91.782L88.243 143.08M0 91.83l79.515 45.916v-91.83L0 0m88.243 244.994 79.515 45.915v-91.83l-79.515-45.915"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
