import { defineComponent as e, computed as l, openBlock as r, createElementBlock as f, normalizeStyle as i, createStaticVNode as c } from "vue";
const y = /* @__PURE__ */ e({
  __name: "LogoPycharm",
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
    return (a, t) => (r(), f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: i(p.value)
    }, t[0] || (t[0] = [
      c('<defs><linearGradient id="pycharm-gui-asset-a" x1="-46.686%" x2="90.514%" y1="50%" y2="50%"><stop offset="0%" stop-color="#21D789"></stop><stop offset="100%" stop-color="#07C3F2"></stop></linearGradient><linearGradient id="pycharm-gui-asset-b" x1="-19.16%" x2="105.922%" y1="105.481%" y2="-7.577%"><stop offset="1%" stop-color="#FCF84A"></stop><stop offset="11%" stop-color="#A7EB62"></stop><stop offset="21%" stop-color="#5FE077"></stop><stop offset="27%" stop-color="#32DA84"></stop><stop offset="31%" stop-color="#21D789"></stop><stop offset="58%" stop-color="#21D789"></stop><stop offset="60%" stop-color="#21D789"></stop><stop offset="69%" stop-color="#20D68C"></stop><stop offset="76%" stop-color="#1ED497"></stop><stop offset="83%" stop-color="#19D1A9"></stop><stop offset="90%" stop-color="#13CCC2"></stop><stop offset="97%" stop-color="#0BC6E1"></stop><stop offset="100%" stop-color="#07C3F2"></stop></linearGradient><linearGradient id="pycharm-gui-asset-c" x1="42.23%" x2="61.179%" y1="115.967%" y2="22.253%"><stop offset="0%" stop-color="#21D789"></stop><stop offset="16%" stop-color="#24D888"></stop><stop offset="30%" stop-color="#2FD985"></stop><stop offset="43%" stop-color="#41DC80"></stop><stop offset="55%" stop-color="#5AE079"></stop><stop offset="67%" stop-color="#7AE46F"></stop><stop offset="79%" stop-color="#A1EA64"></stop><stop offset="90%" stop-color="#CFF157"></stop><stop offset="100%" stop-color="#FCF84A"></stop></linearGradient><linearGradient id="pycharm-gui-asset-d" x1="-9.711%" x2="118.641%" y1="144.55%" y2="8.292%"><stop offset="0%" stop-color="#21D789"></stop><stop offset="9%" stop-color="#23D986"></stop><stop offset="17%" stop-color="#2ADE7B"></stop><stop offset="25%" stop-color="#36E669"></stop><stop offset="27%" stop-color="#3BEA62"></stop><stop offset="35%" stop-color="#47EB61"></stop><stop offset="49%" stop-color="#67ED5D"></stop><stop offset="69%" stop-color="#9AF156"></stop><stop offset="92%" stop-color="#E0F64D"></stop><stop offset="100%" stop-color="#FCF84A"></stop></linearGradient><linearGradient id="pycharm-gui-asset-e" x1="105.92%" x2="-8.04%" y1="50.481%" y2="49.366%"><stop offset="39%" stop-color="#FCF84A"></stop><stop offset="46%" stop-color="#ECF74C"></stop><stop offset="61%" stop-color="#C1F451"></stop><stop offset="82%" stop-color="#7EEF5A"></stop><stop offset="100%" stop-color="#3BEA62"></stop></linearGradient></defs><g><polygon fill="url(#pycharm-gui-asset-a)" points="179.493333 40.4 254.293333 102.613333 227.36 157.413333 182.266667 144.906667 143.253333 144.906667"></polygon><polygon fill="url(#pycharm-gui-asset-b)" points="104.133333 80.8 89.6533333 157.413333 88.2666667 183.44 51.76 199.253333 0 204.826667 15.7066667 39.3066667 109.493333 0 167.28 37.8933333"></polygon><polygon fill="url(#pycharm-gui-asset-c)" points="104.133333 80.8 111.173333 228.426667 87.7866667 256 1.42108547e-14 204.826667 72.08 97.4133333"></polygon><polygon fill="url(#pycharm-gui-asset-d)" points="200.72 70.0266667 112.026667 70.0266667 190.4 0"></polygon><polygon fill="url(#pycharm-gui-asset-e)" points="256 229.013333 177.92 255.52 73.9466667 226.24 104.133333 80.8 116.186667 70.0266667 179.493333 64.08 173.76 127.653333 224.106667 108.133333"></polygon><polygon fill="#000" points="48 48 208 48 208 208 48 208"></polygon><path fill="#FFF" d="M67.947 177.76h60v10h-60zM68 68h24.533c14.15 0 22.786 8.311 22.958 20.354l.002.526c0 13.867-10.8 21.067-24.24 21.067h-9.92v17.973H68zm23.627 30.213c6.475 0 10.321-3.788 10.45-8.806l.003-.42c0-5.92-4.107-9.094-10.667-9.094h-10.08v18.32zm31.013-.053V98a30.427 30.427 0 0 1 31.227-30.987 30.9 30.9 0 0 1 23.626 9.227l-8.373 9.68a22.2 22.2 0 0 0-15.333-6.773c-9.995 0-17.225 8.214-17.384 18.325L136.4 98c0 10.267 7.12 18.827 17.387 18.827 6.23 0 10.256-2.204 14.483-5.87l.636-.561q.32-.286.64-.583l8.374 8.454a30.56 30.56 0 0 1-24.56 10.666 30.267 30.267 0 0 1-30.72-30.773"></path></g>', 2)
    ]), 4));
  }
});
export {
  y as _
};
