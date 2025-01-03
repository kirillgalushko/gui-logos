import { defineComponent as n, computed as s, openBlock as m, createElementBlock as r, normalizeStyle as l, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoParsehub",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, o = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#21BBD1",
          d: "M64.046 126.72c0-36.7 29.858-66.56 66.56-66.56 36.7 0 66.56 29.86 66.56 66.56s-29.86 66.56-66.56 66.56c-36.702 0-66.56-29.859-66.56-66.56"
        }),
        t("path", {
          fill: "#20222D",
          d: "M256 20.48C256 9.216 246.12 0 234.856 0h-104.25C59.915 0 0 56.027 0 126.72V256h31.086V126.72c0-53.64 44.761-97.28 98.4-97.28s97.838 43.639 97.838 97.28S183.027 224 129.388 224c-25.735 0-52.588-10.06-67.217-26.432V256h68.435C201.298 256 256 197.413 256 126.72z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
