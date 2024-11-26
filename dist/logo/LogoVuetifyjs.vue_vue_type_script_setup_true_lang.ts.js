import { defineComponent as n, computed as p, openBlock as h, createElementBlock as s, normalizeStyle as m, createElementVNode as e } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoVuetifyjs",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, l = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, i) => (h(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "222",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 222",
      style: m(l.value)
    }, i[0] || (i[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#1697F6",
          points: "130.710957 49.5638261 79.6681739 137.991652 128 221.754435 192.014609 110.877217 256 0 159.307826 0"
        }),
        e("polygon", {
          fill: "#AEDDFF",
          points: "64.0145391 110.877217 67.3668174 116.708174 115.11513 33.9657739 134.733913 0 128 0 0 0"
        }),
        e("path", {
          fill: "#1867C0",
          d: "M159.308 0C183.503 79.623 128 221.754 128 221.754l-48.332-83.762z"
        }),
        e("path", {
          fill: "#7BC6FF",
          d: "M134.734 0C32.794 0 67.367 116.708 67.367 116.708z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};
