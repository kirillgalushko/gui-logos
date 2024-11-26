import { defineComponent as l, computed as m, openBlock as h, createElementBlock as r, normalizeStyle as s, createElementVNode as o } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoConvox2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "249",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 249",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#4F8CE8",
          d: "m2.36 152.515 124.927 65.694 125.91-65.171v29.895l-125.989 65.328L2.36 182.524zM253.197 98.68v29.887l-125.989 65.336L2.36 128.166v-28.99l124.918 64.683zM127.025 0 256 72.258l-64.727 33.455-64.222 33.762L0 72.188zm.087 30.496L55.194 71.378l71.892 38.062 52.103-27.406 20.79-10.717z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
