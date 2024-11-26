import { defineComponent as l, computed as s, openBlock as r, createElementBlock as c, normalizeStyle as n, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ l({
  __name: "LogoTelegram",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: n(o.value)
    }, t[0] || (t[0] = [
      a('<circle cx="16" cy="16" r="14" fill="url(#telegram-gui-asset-a)"></circle><path fill="#fff" d="M22.987 10.209c.124-.806-.642-1.441-1.358-1.127L7.365 15.345c-.514.225-.476 1.003.056 1.173l2.942.937c.562.179 1.17.086 1.66-.253l6.632-4.582c.2-.138.418.147.247.323l-4.774 4.922c-.463.477-.371 1.286.186 1.636l5.345 3.351c.6.376 1.37-.001 1.483-.726z"></path><defs><linearGradient id="telegram-gui-asset-a" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#37BBFE"></stop><stop offset="1" stop-color="#007DBB"></stop></linearGradient></defs>', 3)
    ]), 4));
  }
});
export {
  m as _
};
