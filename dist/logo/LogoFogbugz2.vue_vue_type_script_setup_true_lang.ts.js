import { defineComponent as i, computed as p, openBlock as r, createElementBlock as a, normalizeStyle as g, createStaticVNode as n } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoFogbugz2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (r(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "307",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 307",
      style: g(s.value)
    }, e[0] || (e[0] = [
      n('<defs><linearGradient id="fogbugz-2-gui-asset-a" x1="-24.513%" x2="130.064%" y1="75.564%" y2="-56.513%"><stop offset="0%" stop-color="#AB68FC"></stop><stop offset="86%" stop-color="#5521B3"></stop></linearGradient><linearGradient id="fogbugz-2-gui-asset-b" x1="104.596%" x2="48.252%" y1="100.586%" y2="48.39%"><stop offset="2%" stop-color="#AA69FF"></stop><stop offset="86%" stop-color="#C6B1FF"></stop></linearGradient></defs><g><path fill="url(#fogbugz-2-gui-asset-a)" d="M89.976 306.862 256 161.802H90.258s-.246 139.468-.282 145.06"></path><path fill="url(#fogbugz-2-gui-asset-b)" d="M166.059 0 0 161.803h165.32S166.024 4.22 166.06 0"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
