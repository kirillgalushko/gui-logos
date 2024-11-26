import { defineComponent as s, computed as r, openBlock as n, createElementBlock as a, normalizeStyle as d, createElementVNode as e } from "vue";
const h = /* @__PURE__ */ s({
  __name: "LogoSurrealdb2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, o) => (n(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "299",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 299",
      style: d(i.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "surrealdb-2-gui-asset-a",
          x1: "31.047%",
          x2: "68.957%",
          y1: "11.705%",
          y2: "88.303%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#FF00A0"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#9600FF"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#surrealdb-2-gui-asset-a)",
          d: "m128 78.568 71.101 39.375v-15.787L128 62.872c-10.575 5.852-61.684 34.103-71.101 39.284 8.747 4.846 100.602 55.589 156.434 86.43v15.726C205.745 208.518 128 251.46 128 251.46a76503 76503 0 0 1-85.333-47.147v-47.146L128 204.312l14.232-7.862-113.798-62.842v78.598L128 267.185c9.813-5.425 92.282-50.987 99.535-55.01v-31.42l-142.202-78.6zM28.434 86.43v31.452l142.202 78.598-42.666 23.589-71.101-39.376v15.787l71.1 39.284c10.576-5.852 61.684-34.103 71.101-39.284-8.746-4.846-100.571-55.589-156.403-86.461V94.293C50.255 90.088 128 47.147 128 47.147a76501 76501 0 0 0 85.333 47.146v47.147L128 94.293l-14.232 7.863 113.767 62.873V86.43L128 31.421c-9.844 5.455-92.282 51.017-99.566 55.01M128 0 0 70.735v157.166l128 70.735 128-70.705V70.735zm113.737 220.038L128 282.91 14.232 220.038V78.598L128 15.726l113.768 62.872z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  h as _
};
