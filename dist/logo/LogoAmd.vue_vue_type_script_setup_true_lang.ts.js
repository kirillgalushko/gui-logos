import { defineComponent as m, computed as i, openBlock as l, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoAmd",
  props: {
    width: {},
    height: {}
  },
  setup(n) {
    const e = n, h = i(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      x: "0",
      y: "0",
      version: "1.1",
      viewBox: "0 0 276.7 66",
      style: s(h.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("path", { d: "M65.1 61.6H49.6L45 50.3H19.4l-4.3 11.3H0L23 4.4h16.5zM31.6 18l-8.5 22.3h17.6zm89.1-13.6h12.4v57.2h-14.3V26l-15.4 17.9h-2.2l-15.4-18v35.6H71.6V4.4H84l18.4 21.3zm48.5 0c20.9 0 31.7 13 31.7 28.7 0 16.4-10.4 28.5-33.2 28.5H144V4.4zm-10.9 46.7h9.3c14.3 0 18.6-9.7 18.6-18.1 0-9.9-5.3-18.1-18.8-18.1h-9.1z" }),
        t("polygon", { points: "258.7,18 229.2,18 211.2,0 276.7,0 276.7,65.4 258.7,47.5" }),
        t("polygon", { points: "229.2,47.5 229.2,21.6 210.7,40.1 210.7,66 236.6,66 255.1,47.5" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
