import { defineComponent as e, computed as i, openBlock as l, createElementBlock as a, normalizeStyle as r, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ e({
  __name: "LogoDatagrip",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, p = i(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (f, t) => (l(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(p.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="datagrip-gui-asset-a" x1="48.681%" x2="50.185%" y1="46.207%" y2="99.477%"><stop offset="16%" stop-color="#21D789"></stop><stop offset="54%" stop-color="#419FBC"></stop><stop offset="100%" stop-color="#6B57FF"></stop></linearGradient><linearGradient id="datagrip-gui-asset-b" x1="37.375%" x2="53.526%" y1="64.021%" y2="50%"><stop offset="0%" stop-color="#6B57FF"></stop><stop offset="95%" stop-color="#21D789"></stop></linearGradient><linearGradient id="datagrip-gui-asset-c" x1="34.806%" x2="45.581%" y1="22.767%" y2="53.89%"><stop offset="0%" stop-color="#6B57FF"></stop><stop offset="2%" stop-color="#685CFB"></stop><stop offset="28%" stop-color="#4A91CA"></stop><stop offset="51%" stop-color="#34B7A7"></stop><stop offset="69%" stop-color="#26CE91"></stop><stop offset="80%" stop-color="#21D789"></stop></linearGradient><linearGradient id="datagrip-gui-asset-d" x1="8.271%" x2="124.62%" y1="28.102%" y2="74.034%"><stop offset="8%" stop-color="#21D789"></stop><stop offset="89%" stop-color="#6B57FF"></stop></linearGradient><linearGradient id="datagrip-gui-asset-e" x1="7.221%" x2="101.291%" y1="50%" y2="50%"><stop offset="31%" stop-color="#21D789"></stop><stop offset="49%" stop-color="#59A3B2"></stop><stop offset="77%" stop-color="#B74AF7"></stop><stop offset="100%" stop-color="#FF45ED"></stop></linearGradient></defs><g><polygon fill="url(#datagrip-gui-asset-a)" points="239.68 39.7866667 256 144.586667 225.84 162.133333"></polygon><polygon fill="url(#datagrip-gui-asset-b)" points="239.68 39.7866667 148.026667 3.55271368e-15 122.453333 21.2266667"></polygon><polygon fill="url(#datagrip-gui-asset-c)" points="172.986667 256 30.7733333 142.693333 2.21333333 228.586667"></polygon><polygon fill="url(#datagrip-gui-asset-d)" points="192.8 184.4 0 118.16 172.986667 256"></polygon><polygon fill="url(#datagrip-gui-asset-e)" points="0 1.81333333 0 118.16 222.16 194.506667 239.68 39.7866667"></polygon><polygon fill="#000" points="48 47.68 208 47.68 208 207.68 48 207.68"></polygon><path fill="#FFF" d="M64.24 68.48h25.84c20.592 0 34.911 14.009 35.196 32.375l.004.745c0 18.667-14.4 33.12-35.2 33.12H64.24zM78.8 81.627v40h11.28a18.88 18.88 0 0 0 19.947-19.787v-.24A19.013 19.013 0 0 0 90.08 81.627zm49.067 20.16v-.187a34 34 0 0 1 34.666-34.267 36.35 36.35 0 0 1 26.027 9.094l-9.173 11.066a24.48 24.48 0 0 0-16.848-6.724l-.459.004c-10.554 0-18.863 9.19-19.037 20.286l-.003.541c0 12.107 8.347 21.013 20.08 21.013a23.28 23.28 0 0 0 13.76-3.946v-9.494h-14.667V96.587h28.774v28.773a42.9 42.9 0 0 1-28.294 10.507c-20.64 0-34.826-14.534-34.826-34.08M62.72 177.653h60v10h-60z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
