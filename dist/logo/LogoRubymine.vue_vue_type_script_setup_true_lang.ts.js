import { defineComponent as p, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as n, createStaticVNode as f } from "vue";
const h = /* @__PURE__ */ p({
  __name: "LogoRubymine",
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
    return (a, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(e.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="rubymine-gui-asset-a" x1="55.271%" x2="39.509%" y1="73.825%" y2="35.404%"><stop offset="0%" stop-color="#FE2857"></stop><stop offset="6%" stop-color="#FE3052"></stop><stop offset="33%" stop-color="#FD533B"></stop><stop offset="58%" stop-color="#FC6C2A"></stop><stop offset="81%" stop-color="#FC7B20"></stop><stop offset="100%" stop-color="#FC801D"></stop></linearGradient><linearGradient id="rubymine-gui-asset-b" x1="19.047%" x2="50.141%" y1="2.917%" y2="36.328%"><stop offset="0%" stop-color="#6B57FF"></stop><stop offset="100%" stop-color="#FE2857"></stop></linearGradient><linearGradient id="rubymine-gui-asset-c" x1="9.775%" x2="73.277%" y1="8%" y2="97.512%"><stop offset="0%" stop-color="#6B57FF"></stop><stop offset="30%" stop-color="#FE2857"></stop><stop offset="63%" stop-color="#FE2857"></stop><stop offset="64%" stop-color="#FE3052"></stop><stop offset="70%" stop-color="#FD533B"></stop><stop offset="76%" stop-color="#FC6C2A"></stop><stop offset="81%" stop-color="#FC7B20"></stop><stop offset="85%" stop-color="#FC801D"></stop></linearGradient></defs><g><polygon fill="url(#rubymine-gui-asset-a)" points="212.906667 0 139.653333 26.24 81.92 0 62.9066667 47.8933333 50.6133333 47.8933333 50.6133333 189.28 228.4 190.826667 256 50.0266667"></polygon><polygon fill="url(#rubymine-gui-asset-b)" points="210.72 91.8666667 93.7333333 22.5333333 210.72 159.653333"></polygon><polygon fill="url(#rubymine-gui-asset-c)" points="106.56 249.333333 202.24 236.586667 187.386667 208.026667 210.72 208.026667 210.72 159.653333 93.7066667 22.32 0 45.3333333 0.106666667 179.733333 53.9733333 256 106.266667 249.36 106.506667 249.333333"></polygon><polygon fill="#000" points="50.6666667 48 210.666667 48 210.666667 208 50.6666667 208"></polygon><path fill="#FFF" d="M70.613 177.76h60v10h-60zm59.28-109.84h14.267l15.813 25.44 15.814-25.44h14.266v60.133h-13.146V88.8l-16.934 25.68h-.346L142.88 89.067v38.986h-12.987zM70.667 68h27.466q11.414 0 17.494 6.08a18.67 18.67 0 0 1 5.146 13.733V88a18.67 18.67 0 0 1-3.573 11.867 20.64 20.64 0 0 1-9.307 6.746l14.694 21.334H107.12L94.667 109.52H83.76v18.453H70.667zm26.666 29.093a11 11 0 0 0 7.387-2.426 8 8 0 0 0 2.667-6.187v-.16a7.6 7.6 0 0 0-2.667-6.427 12.08 12.08 0 0 0-7.627-2.16h-13.28v17.254z"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
