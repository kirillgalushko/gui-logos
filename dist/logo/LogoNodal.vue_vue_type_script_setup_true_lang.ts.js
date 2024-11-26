import { defineComponent as h, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as d, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoNodal",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: d(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#138EE2",
          d: "M192.083 0 127.84 43.18l.233 1.398 62.406 41.603 1.604.04.803-1.359.155-82.975z"
        }),
        t("path", {
          fill: "#00BDFF",
          d: "m62.92 174.229-.211 78.21 1.624 3.894 63.925-42.408-.443-2.282-58.764-39.317-4.718-1.215zM192.083 0v86.221L64.915.998l-.79 3.538L251.05 212.488l4.95 1.816V42.777z"
        }),
        t("path", {
          fill: "#00E1FF",
          d: "M0 42.944v170.778l64.333 42.61v-85.221l127.75 85.555 63.584-42.611L64.915.999z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
