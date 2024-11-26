import { defineComponent as l, computed as p, openBlock as i, createElementBlock as a, normalizeStyle as n, createStaticVNode as r } from "vue";
const f = /* @__PURE__ */ l({
  __name: "LogoDataspell",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, o) => (i(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(e.value)
    }, o[0] || (o[0] = [
      r('<defs><linearGradient id="dataspell-gui-asset-a" x1="111.945%" x2="11.893%" y1="50.038%" y2="50.038%"><stop offset="0%" stop-color="#21D789"></stop><stop offset="91.7%" stop-color="#FCF84A"></stop></linearGradient><linearGradient id="dataspell-gui-asset-b" x1="49.967%" x2="49.967%" y1="9.168%" y2="157.332%"><stop offset="0%" stop-color="#21D789"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="dataspell-gui-asset-c" x1="148.041%" x2="-.965%" y1="124.788%" y2="14.925%"><stop offset="10.5%" stop-color="#21D789"></stop><stop offset="96.7%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="dataspell-gui-asset-d" x1="84.527%" x2="39.512%" y1="-7.697%" y2="70.416%"><stop offset="23.5%" stop-color="#21D789"></stop><stop offset="74%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="dataspell-gui-asset-e" x1="49.867%" x2="49.867%" y1="-24.305%" y2="65.375%"><stop offset="8.4%" stop-color="#878585"></stop><stop offset="53.8%" stop-color="#000"></stop></linearGradient></defs><g><polygon fill="url(#dataspell-gui-asset-a)" points="164.5328 0 169.6 104 40 155.2 0 51.7328"></polygon><polygon fill="#21D789" points="256 60.8 144 109.3328 164.5328 0"></polygon><polygon fill="url(#dataspell-gui-asset-b)" points="137.3328 84.8 256 60.8 256 173.0672 174.4 203.7344 141.0656 173.3328"></polygon><polygon fill="url(#dataspell-gui-asset-c)" points="88 52 169.8736 64.6672 256 172.0688 173.3296 204 141.4304 172.3328"></polygon><polygon fill="url(#dataspell-gui-asset-d)" points="52.8 0 169.6 64.5328 129.3328 256 61.3328 256 2.4 195.2"></polygon><polygon fill="url(#dataspell-gui-asset-e)" points="206 50 50 50 50 206 206 206"></polygon><path fill="#FFF" d="M125.4 179.133H67.333v9.534H125.4zM68 70h22.808c18.504 0 30.986 12.48 30.986 28.832 0 16.354-12.48 29.264-30.986 29.264L68 128.528zm12.91 12.05v34.857h9.898c10.328 0 17.645-6.885 17.645-17.213 0-10.33-6.887-17.644-17.645-17.644zM128 119.68l7.54-9.1c5.2 4.42 10.92 7.02 17.42 7.02 5.2 0 8.58-2.08 8.58-5.46v-.26c0-3.38-2.08-4.94-11.7-7.54-11.96-2.86-19.5-6.24-19.5-17.94v-.26c0-10.66 8.58-17.68 20.54-17.68 8.58 0 15.86 2.6 21.84 7.54l-6.76 9.62c-5.2-3.64-10.4-5.72-15.34-5.72s-7.54 2.34-7.54 5.2v.26c0 3.9 2.6 5.2 12.74 7.8 11.96 3.12 18.72 7.28 18.72 17.68v.26c0 11.7-8.84 18.2-21.58 18.2-8.84-.26-17.94-3.38-24.96-9.62"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
