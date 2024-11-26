import { defineComponent as p, computed as i, openBlock as r, createElementBlock as l, normalizeStyle as n, createStaticVNode as f } from "vue";
const g = /* @__PURE__ */ p({
  __name: "LogoMps2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(e.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="mps-2-gui-asset-a" x1="75.7%" x2="-19.467%" y1="132.917%" y2="11.033%"><stop offset="6%" stop-color="#087CFA"></stop><stop offset="87%" stop-color="#21D789"></stop></linearGradient><linearGradient id="mps-2-gui-asset-b" x1="76.465%" x2="28.668%" y1="92.417%" y2="-29.467%"><stop offset="5%" stop-color="#087CFA"></stop><stop offset="18%" stop-color="#0A84F0"></stop><stop offset="39%" stop-color="#1099D6"></stop><stop offset="67%" stop-color="#19BAAD"></stop><stop offset="87%" stop-color="#21D789"></stop></linearGradient><linearGradient id="mps-2-gui-asset-c" x1="33.801%" x2="64.854%" y1="103.028%" y2="-21.398%"><stop offset="12%" stop-color="#21D789"></stop><stop offset="36%" stop-color="#6AE274"></stop><stop offset="58%" stop-color="#A9EB62"></stop><stop offset="77%" stop-color="#D6F255"></stop><stop offset="92%" stop-color="#F2F64D"></stop><stop offset="100%" stop-color="#FCF84A"></stop></linearGradient></defs><g><polygon fill="url(#mps-2-gui-asset-a)" points="0 256 256 256 127.402667 127.658667 1.5158245e-14 0"></polygon><polygon fill="url(#mps-2-gui-asset-b)" points="256 256 127.402667 127.658667 256 0"></polygon><polygon fill="url(#mps-2-gui-asset-c)" points="191.573333 191.616 127.402667 127.658667 256 0"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
