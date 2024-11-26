import { defineComponent as l, computed as n, openBlock as p, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoGoogleKeep",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "352",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 352",
      style: s(h.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("path", {
          fill: "#FFBA00",
          d: "M232 352H24c-13.28 0-24-10.72-24-24V24C0 10.72 10.72 0 24 0h144l88 88v240c0 13.28-10.72 24-24 24"
        }),
        t("polygon", {
          fill: "#FF9500",
          points: "168 0 256 88 168 88"
        }),
        t("path", {
          fill: "#FFF",
          d: "M156 236v20h-56v-20zm-28.08-115.999.78.006c28.323.46 51.14 23.56 51.14 51.993 0 18.56-9.72 34.8-24.32 44h-55.2C85.68 206.8 76 190.56 76 172c0-28.72 23.28-52 52-52z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
