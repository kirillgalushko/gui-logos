import { defineComponent as s, computed as p, openBlock as a, createElementBlock as l, normalizeStyle as r, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ s({
  __name: "LogoAppStore",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: r(i.value)
    }, e[0] || (e[0] = [
      n('<circle cx="16" cy="16" r="14" fill="url(#app-store-gui-asset-a)"></circle><path fill="#fff" d="M18.447 8.654a1.106 1.106 0 0 0-.404-1.507 1.096 1.096 0 0 0-1.5.406l-.528.921-.527-.92a1.096 1.096 0 0 0-1.5-.407 1.106 1.106 0 0 0-.404 1.507l1.164 2.032-3.683 6.429H8.098A1.1 1.1 0 0 0 7 18.218a1.1 1.1 0 0 0 1.098 1.104h10.334c.091-.24.186-.65.085-1.027-.153-.567-.717-1.18-1.663-1.18H13.6zm-6.811 11.888c-.187-.21-.607-.543-.975-.653-.561-.168-.987-.063-1.202.029l-.818 1.428a1.106 1.106 0 0 0 .404 1.507 1.095 1.095 0 0 0 1.5-.406z"></path><path fill="#fff" d="M22.23 19.322h1.672A1.1 1.1 0 0 0 25 18.218a1.1 1.1 0 0 0-1.098-1.103h-2.937l-3.308-5.774c-.245.235-.716.834-.788 1.514-.091.873.046 1.609.458 2.329q2.078 3.632 4.158 7.263c.303.528.974.71 1.5.406s.707-.979.404-1.507z"></path><defs><linearGradient id="app-store-gui-asset-a" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#2AC9FA"></stop><stop offset="1" stop-color="#1F65EB"></stop></linearGradient></defs>', 4)
    ]), 4));
  }
});
export {
  d as _
};
