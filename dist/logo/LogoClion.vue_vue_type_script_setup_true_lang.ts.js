import { defineComponent as p, computed as i, openBlock as l, createElementBlock as n, normalizeStyle as r, createStaticVNode as f } from "vue";
const g = /* @__PURE__ */ p({
  __name: "LogoClion",
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
    return (a, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(e.value)
    }, t[0] || (t[0] = [
      f('<defs><linearGradient id="clion-gui-asset-a" x1="0%" x2="115.015%" y1="50%" y2="50%"><stop offset="0%" stop-color="#FF318C"></stop><stop offset="15%" stop-color="#FB348C"></stop><stop offset="28%" stop-color="#F03C8C"></stop><stop offset="42%" stop-color="#DE4A8C"></stop><stop offset="54%" stop-color="#C45D8B"></stop><stop offset="67%" stop-color="#A2778B"></stop><stop offset="79%" stop-color="#79958A"></stop><stop offset="91%" stop-color="#49B98A"></stop><stop offset="100%" stop-color="#21D789"></stop></linearGradient><linearGradient id="clion-gui-asset-b" x1="53.816%" x2="43.444%" y1="17.257%" y2="151.488%"><stop offset="9%" stop-color="#21D789"></stop><stop offset="90%" stop-color="#009AE5"></stop></linearGradient><linearGradient id="clion-gui-asset-c" x1="93.049%" x2="-9.597%" y1="9.981%" y2="113.191%"><stop offset="9%" stop-color="#21D789"></stop><stop offset="90%" stop-color="#009AE5"></stop></linearGradient><linearGradient id="clion-gui-asset-d" x1="32.388%" x2="91.688%" y1="46.039%" y2="52.244%"><stop offset="9%" stop-color="#21D789"></stop><stop offset="90%" stop-color="#009AE5"></stop></linearGradient></defs><g><polygon fill="url(#clion-gui-asset-a)" points="92.0266667 100.106667 97.5733333 0 155.786667 32.2666667"></polygon><polygon fill="url(#clion-gui-asset-b)" points="92.0266667 100.106667 97.5733333 0 23.6533333 46.5866667 -7.10542736e-15 188.213333"></polygon><polygon fill="url(#clion-gui-asset-c)" points="250.906667 76.72 217.973333 9.76 155.786667 32.2666667 92.0266667 100.106667 1.42108547e-14 188.213333 83.0133333 248.64 187.36 154.533333"></polygon><polygon fill="url(#clion-gui-asset-d)" points="208 146.773333 208 208 107.466667 208 151.653333 242.186667 215.653333 256 256 164.666667"></polygon><polygon fill="#000" points="48 48 208 48 208 208 48 208"></polygon><path fill="#FFF" d="M67.947 177.76h60v10h-60zm60.186-109.92h13.334v49.04h26.266V128h-39.6zM63.676 98.815l.004-.655a30.773 30.773 0 0 1 31.547-31.307 31.23 31.23 0 0 1 23.84 9.334l-8.4 9.786a22.35 22.35 0 0 0-15.494-6.826c-10.073 0-17.356 8.266-17.517 18.481l-.003.532c0 10.373 7.174 19.013 17.52 19.013 6.934 0 11.147-2.666 16-7.093l8.32 8.587a30.93 30.93 0 0 1-24.826 10.666 30.533 30.533 0 0 1-30.99-30.518"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
