import { defineComponent as e, computed as l, openBlock as i, createElementBlock as n, normalizeStyle as r, createStaticVNode as f } from "vue";
const g = /* @__PURE__ */ e({
  __name: "LogoGoland",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (a, t) => (i(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(p.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="goland-gui-asset-a" x1="63.101%" x2="28.874%" y1="29.811%" y2="83.71%"><stop offset="0%" stop-color="#087CFA"></stop><stop offset="2%" stop-color="#0D7BFA"></stop><stop offset="37%" stop-color="#5566F9"></stop><stop offset="66%" stop-color="#8A57F8"></stop><stop offset="88%" stop-color="#AB4EF7"></stop><stop offset="100%" stop-color="#B74AF7"></stop></linearGradient><linearGradient id="goland-gui-asset-b" x1="49.124%" x2="74.872%" y1="38.465%" y2="4.95%"><stop offset="0%" stop-color="#087CFA"></stop><stop offset="2%" stop-color="#0D7BFA"></stop><stop offset="37%" stop-color="#5566F9"></stop><stop offset="66%" stop-color="#8A57F8"></stop><stop offset="88%" stop-color="#AB4EF7"></stop><stop offset="100%" stop-color="#B74AF7"></stop></linearGradient><linearGradient id="goland-gui-asset-c" x1="13.896%" x2="86.031%" y1="71.063%" y2="34.549%"><stop offset="0%" stop-color="#087CFA"></stop><stop offset="10%" stop-color="#1598D3"></stop><stop offset="22%" stop-color="#23B6AA"></stop><stop offset="35%" stop-color="#2DCC8B"></stop><stop offset="46%" stop-color="#35DD74"></stop><stop offset="57%" stop-color="#39E767"></stop><stop offset="67%" stop-color="#3BEA62"></stop></linearGradient></defs><g><polygon fill="url(#goland-gui-asset-a)" points="225.493333 99.0133333 256 166.666667 203.786667 256 171.626667 177.92"></polygon><polygon fill="#B74AF7" points="171.626667 177.92 203.786667 256 122.88 228.186667"></polygon><polygon fill="url(#goland-gui-asset-b)" points="180.346667 72.2933333 163.76 0 71.7866667 0 2.36847579e-15 109.813333 20.7733333 160.266667 0 206.32 148.666667 79.84"></polygon><polygon fill="url(#goland-gui-asset-c)" points="256 54.3466667 148.666667 79.84 0 206.32 95.8933333 256 171.626667 177.92"></polygon><polygon fill="#000" points="48 48 208 48 208 208 48 208"></polygon><path fill="#FFF" d="M63.013 178h60v10h-60zm-4.507-75.84v-.187A33.87 33.87 0 0 1 93.093 68a36.32 36.32 0 0 1 25.947 9.04l-9.147 11.04a24.35 24.35 0 0 0-17.253-6.747c-10.453 0-18.627 8.964-18.95 19.864l-.01.856c0 11.848 7.977 20.592 19.328 20.924l.672.01a23.12 23.12 0 0 0 13.653-3.974v-9.493H92.72V96.987h28.613v28.64a42.86 42.86 0 0 1-28.186 10.48c-20.507 0-34.64-14.427-34.64-33.947m68.96 0v-.187A34.107 34.107 0 0 1 162.64 68c20.052 0 34.535 14.737 34.95 33.107l.01 1a34.107 34.107 0 0 1-34.159 34.149l-.988-.016c-20.373-.133-34.986-15.307-34.986-34.08m54.96 0v-.187a20.027 20.027 0 0 0-19.973-20.64 19.734 19.734 0 0 0-19.8 19.65l.014.99a20.053 20.053 0 0 0 20 20.747 19.734 19.734 0 0 0 19.76-20.56"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
