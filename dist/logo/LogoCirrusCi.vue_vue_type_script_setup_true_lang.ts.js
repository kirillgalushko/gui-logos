import { defineComponent as h, computed as c, openBlock as r, createElementBlock as n, normalizeStyle as m, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoCirrusCi",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (r(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#000"
        }),
        t("path", {
          fill: "#FAFAFA",
          d: "M164.966 70.5c12.594 0 22.795 10.241 22.795 22.863a22.84 22.84 0 0 1-7.912 17.318A22.84 22.84 0 0 1 187.761 128c0 6.92-3.066 13.126-7.913 17.32a22.84 22.84 0 0 1 7.913 17.317c0 12.496-9.998 22.658-22.418 22.86l-.377.003H73.783a5.545 5.545 0 0 1-.194-11.086l.194-.004h91.183c6.46 0 11.706-5.266 11.706-11.773 0-6.42-5.107-11.633-11.448-11.77l-.258-.004H73.783a5.545 5.545 0 0 1-.194-11.086l.194-.004h91.183c6.46 0 11.706-5.266 11.706-11.773 0-6.42-5.107-11.633-11.448-11.77l-.258-.003H73.783a5.545 5.545 0 0 1-.194-11.087l.194-.003h91.183c6.46 0 11.706-5.267 11.706-11.774 0-6.42-5.107-11.633-11.448-11.77l-.258-.003a5.545 5.545 0 1 1 0-11.09"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
