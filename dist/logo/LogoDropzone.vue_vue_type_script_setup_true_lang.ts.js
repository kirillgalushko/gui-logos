import { defineComponent as m, computed as n, openBlock as p, createElementBlock as s, normalizeStyle as c, createElementVNode as t } from "vue";
const l = /* @__PURE__ */ m({
  __name: "LogoDropzone",
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
    return (r, o) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(h.value)
    }, o[0] || (o[0] = [
      t("g", { fill: "#028BF4" }, [
        t("path", { d: "M128 42.667c-47.129 0-85.333 38.204-85.333 85.333v85.333H128c47.129 0 85.333-38.204 85.333-85.333S175.13 42.667 128 42.667M128 192H64v-64c0-35.346 28.654-64 64-64s64 28.654 64 64-28.65 64-64 64" }),
        t("path", { d: "M128 85.333c-23.563 0-42.667 19.104-42.667 42.667v42.667H128c23.563 0 42.667-19.104 42.667-42.667S151.563 85.333 128 85.333m0 64h-21.333V128c0-11.78 9.553-21.333 21.333-21.333s21.333 9.553 21.333 21.333-9.55 21.333-21.333 21.333" }),
        t("path", { d: "M128 0H0v256h128c70.692 0 128-57.308 128-128S198.692 0 128 0m0 234.667H21.333V128C21.333 69.092 69.092 21.333 128 21.333S234.667 69.092 234.667 128 186.912 234.667 128 234.667" })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};