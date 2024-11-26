import { defineComponent as i, computed as l, openBlock as m, createElementBlock as n, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ i({
  __name: "LogoTeslaSymbol",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, o = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, s) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      id: "tesla-symbol-gui-asset-Layer_1",
      x: "0",
      y: "0",
      version: "1.1",
      viewBox: "0 0 254.6 253.5",
      style: r(o.value)
    }, s[0] || (s[0] = [
      t("g", {
        id: "tesla-symbol-gui-asset-T",
        transform: "translate(-45.84 -64.297)"
      }, [
        t("path", {
          id: "tesla-symbol-gui-asset-path35",
          d: "m173.1 317.3 35.5-199.5c33.8 0 44.5 3.7 46 18.8 0 0 22.7-8.5 34.1-25.6-44.6-20.7-89.5-21.6-89.5-21.6L173 121.3h.1L147 89.4s-44.9.9-89.5 21.6c11.4 17.2 34.1 25.6 34.1 25.6 1.5-15.1 12.2-18.8 45.8-18.9z",
          class: "tesla-symbol-gui-asset-st0"
        }),
        t("path", {
          id: "tesla-symbol-gui-asset-path37",
          d: "M173.1 80.2c36.1-.3 77.4 5.6 119.7 24 5.7-10.2 7.1-14.7 7.1-14.7-46.2-18.3-89.5-24.5-126.8-24.7-37.2.2-80.5 6.4-126.8 24.7 0 0 2.1 5.5 7.1 14.7 42.3-18.5 83.6-24.3 119.7-24",
          class: "tesla-symbol-gui-asset-st0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
