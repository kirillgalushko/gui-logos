import { defineComponent as h, computed as l, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as t } from "vue";
const a = /* @__PURE__ */ h({
  __name: "LogoGoogleAnalytics",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "284",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 284",
      style: p(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#F9AB00",
          d: "M256.003 247.933a35.224 35.224 0 0 1-39.376 35.161c-18.044-2.67-31.266-18.371-30.826-36.606V36.845C185.365 18.591 198.62 2.881 216.687.24a35.22 35.22 0 0 1 39.316 35.16z"
        }),
        t("path", {
          fill: "#E37400",
          d: "M35.101 213.193c19.386 0 35.101 15.716 35.101 35.101 0 19.386-15.715 35.101-35.101 35.101S0 267.68 0 248.295s15.715-35.102 35.101-35.102m92.358-106.387c-19.477 1.068-34.59 17.406-34.137 36.908v94.285c0 25.588 11.259 41.122 27.755 44.433a35.16 35.16 0 0 0 42.146-34.56V142.089a35.22 35.22 0 0 0-35.764-35.282"
        })
      ], -1)
    ]), 4));
  }
});
export {
  a as _
};
