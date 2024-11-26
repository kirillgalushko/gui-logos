import { defineComponent as p, computed as l, openBlock as h, createElementBlock as m, normalizeStyle as n, createStaticVNode as r } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoEthereum2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, e) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "427",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 427",
      style: n(i.value)
    }, e[0] || (e[0] = [
      r('<g><path fill="#5A9DED" d="M256 241.65 128 426.8V322.457zm-67.84 65.08-41.09 25.858v33.473z"></path><path fill="#53D3E0" d="M0 241.65 128 426.8V322.457zm67.84 65.08 41.09 25.858v33.473z"></path><polygon fill="#D995D1" points="144.237812 156.998107 229.012833 204.213138 232.017708 213.4 221.923682 222.212077 144.237812 178.854489"></polygon><polygon fill="#A6E276" points="24.0378125 156.998107 108.812833 204.213138 111.817708 213.4 101.723682 222.212077 24.0378125 178.854489" transform="matrix(-1 0 0 1 135.856 0)"></polygon><path fill="#FF9C92" d="m128 0 128 219.203-128 80.608zm18.904 70.317V266.03l83.622-52.631z"></path><path fill="#FFE94D" d="M128 0 0 219.203l128 80.608zm-18.904 70.317V266.03L25.474 213.4z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
