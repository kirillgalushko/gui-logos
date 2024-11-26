import { defineComponent as s, computed as h, openBlock as a, createElementBlock as n, normalizeStyle as r, createStaticVNode as m } from "vue";
const c = /* @__PURE__ */ s({
  __name: "LogoNationalPaymentSystemMir",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (a(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2500",
      height: "708",
      viewBox: "252.448 288.608 776.384 219.776",
      style: r(o.value)
    }, e[0] || (e[0] = [
      m('<path fill="#4DB45E" d="M461.664 288.608v.096c-.096 0-30.336-.096-38.4 28.8-7.392 26.496-28.224 99.616-28.8 101.632h-5.76s-21.312-74.752-28.8-101.728c-8.064-28.896-38.4-28.8-38.4-28.8h-69.056v219.776h69.088V377.855h5.76l40.32 130.528h47.968l40.32-130.432h5.76v130.432h69.088V288.608zm252.384 0s-20.256 1.824-29.76 23.041L635.36 419.136h-5.76V288.608h-69.088v219.776h65.248s21.216-1.92 30.721-23.04l47.968-107.488h5.76v130.528h69.088V288.608zm95.968 99.808v119.968h69.088v-70.048h74.849c32.64 0 60.256-20.832 70.528-49.888H810.016z"></path><linearGradient id="national-payment-system-mir-gui-asset-a" x1="1065.561" x2="1779.66" y1="-978.524" y2="-978.524" gradientTransform="matrix(.32 0 0 .32 459.34 646.84)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#00b4e6"></stop><stop offset="1" stop-color="#088ccb"></stop></linearGradient><path fill="url(#national-payment-system-mir-gui-asset-a)" d="M953.984 288.608H800.32c7.68 41.856 39.071 75.424 79.647 86.368a110.5 110.5 0 0 0 28.896 3.841h118.432c1.056-4.992 1.536-10.08 1.536-15.36.001-41.345-33.503-74.849-74.847-74.849"></path>', 3)
    ]), 4));
  }
});
export {
  c as _
};
