import { defineComponent as i, computed as l, openBlock as p, createElementBlock as r, normalizeStyle as n, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ i({
  __name: "LogoWebstorm",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, s = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(s.value)
    }, t[0] || (t[0] = [
      a('<defs><linearGradient id="webstorm-gui-asset-a" x1="43.896%" x2="66.16%" y1="1.951%" y2="95.244%"><stop offset="28%" stop-color="#07C3F2"></stop><stop offset="94%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="webstorm-gui-asset-b" x1="33.063%" x2="70.362%" y1="15.078%" y2="84.685%"><stop offset="14%" stop-color="#FCF84A"></stop><stop offset="37%" stop-color="#07C3F2"></stop></linearGradient><linearGradient id="webstorm-gui-asset-c" x1="44.416%" x2="56.203%" y1="25.058%" y2="90.203%"><stop offset="28%" stop-color="#07C3F2"></stop><stop offset="94%" stop-color="#087CFA"></stop></linearGradient></defs><g><polygon fill="url(#webstorm-gui-asset-a)" points="34.5066667 231.36 0 26.8266667 63.8133333 0.346666667 104.56 24.56 141.893333 4.42666667 219.68 34.2933333 176.053333 256"></polygon><polygon fill="url(#webstorm-gui-asset-b)" points="256 86.6933333 222.96 5.09333333 163.013333 0 70.48 88.9066667 95.3866667 203.493333 141.893333 236.106667 256 168.4 228 115.893333"></polygon><polygon fill="url(#webstorm-gui-asset-c)" points="204.72 74.5333333 228 115.893333 256 86.6933333 235.44 35.8666667"></polygon><polygon fill="#000" points="48 48 208 48 208 208 48 208"></polygon><path fill="#FFF" d="M67.947 177.76h60v10h-60zm56.8-109.84-8.934 35.013L105.6 67.92H95.44L85.2 102.933 76.293 67.92h-14l17.147 60.027h11.253l9.814-34.747 9.706 34.747H121.6l17.12-60.027zm16.48 51.707 7.813-9.6a27.57 27.57 0 0 0 17.973 7.306c5.334 0 8.694-2.133 8.694-5.68v-.16c0-1.899-.665-3.27-3.058-4.57l-.382-.2-.41-.198-.216-.1-.454-.198-.238-.1-.5-.198-.531-.2-.278-.1-.58-.2-.303-.102-.63-.204-.667-.206-.347-.104-.72-.21-.758-.214-.795-.216-.835-.221-1.605-.416-1.144-.307-.748-.207-.734-.21-.72-.215-.707-.217-.694-.222-.68-.227-.334-.115-.658-.235-.643-.241-.629-.248-.614-.255-.301-.13-.591-.267-.576-.275c-5.582-2.748-8.889-6.796-8.998-14.338l-.002-.574c0-10.792 8.59-17.98 20.68-18.13l.386-.003a34.67 34.67 0 0 1 22.347 7.653l-6.88 9.974a28.1 28.1 0 0 0-15.653-5.92c-5.067 0-7.734 2.32-7.734 5.333v.187c0 2.402.988 3.856 4.09 5.227l.456.196q.237.098.487.194l.518.195.548.196.58.196.611.199.646.2.679.203 1.083.312.767.213.803.217 1.719.452q.426.112.843.225l.826.23q.205.057.407.116l.8.236.781.242.765.247.746.252.728.26.357.131.7.27c7.724 3.045 12.013 7.432 12.138 15.507l.002.524c0 11.946-9.12 18.667-22.106 18.667a38.24 38.24 0 0 1-25.52-9.627"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
