import { defineComponent as r, computed as s, openBlock as h, createElementBlock as m, normalizeStyle as l, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ r({
  __name: "LogoDropmark",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "348",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 348",
      style: l(n.value)
    }, i[0] || (i[0] = [
      t("defs", null, [
        t("path", {
          id: "dropmark-gui-asset-a",
          d: "M128 0S0 91.067 0 219.067c0 70.704 57.296 128 128 128s128-57.296 128-128C256 91.067 128 0 128 0m0 293.312-68.68-79.051h30.61v-90.308h76.142v90.308h30.609z"
        })
      ], -1),
      t("g", null, [
        t("use", {
          "xlink:href": "#dropmark-gui-asset-a",
          fill: "#38DEDF"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
