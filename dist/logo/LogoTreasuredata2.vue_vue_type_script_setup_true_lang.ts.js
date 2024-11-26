import { defineComponent as o, computed as r, openBlock as i, createElementBlock as p, normalizeStyle as d, createStaticVNode as l } from "vue";
const u = /* @__PURE__ */ o({
  __name: "LogoTreasuredata2",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (i(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "174",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 174",
      style: d(s.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="treasuredata-2-gui-asset-a" x1="28.028%" x2="65.934%" y1="64.775%" y2="20.384%"><stop offset="0%" stop-color="#85F"></stop><stop offset="100%" stop-color="#00B6FF"></stop></linearGradient><linearGradient id="treasuredata-2-gui-asset-b" x1="49.198%" x2="57.126%" y1="50.864%" y2="43.347%"><stop offset="7%" stop-color="#FFF"></stop><stop offset="89%" stop-color="#009FFF"></stop></linearGradient><linearGradient id="treasuredata-2-gui-asset-c" x1="19.368%" x2="129.609%" y1="222.565%" y2="308.848%"><stop offset="7%" stop-color="#FFF"></stop><stop offset="89%" stop-color="#009FFF"></stop></linearGradient><linearGradient id="treasuredata-2-gui-asset-d" x1="11.015%" x2="75.43%" y1="39.462%" y2="63.266%"><stop offset="0%" stop-color="#4036C1"></stop><stop offset="98%" stop-color="#539EFF"></stop></linearGradient></defs><g><path fill="url(#treasuredata-2-gui-asset-a)" d="M136.783 169.368 252.361 53.773a12.38 12.38 0 0 0 0-17.539L222.002 5.858A19.92 19.92 0 0 0 207.884 0h-159.6A20 20 0 0 0 34.15 5.858L3.685 36.287A12.28 12.28 0 0 0 0 44.932a12.28 12.28 0 0 0 3.51 8.718l.175.175 115.578 115.596a12.38 12.38 0 0 0 17.538 0z"></path><path fill="url(#treasuredata-2-gui-asset-b)" d="M33.22 6.787a17.54 17.54 0 0 1 15.977-4.805l200.709 40.706a6.156 6.156 0 0 1 4.788 7.244 5.7 5.7 0 0 1-.386 1.21 12.28 12.28 0 0 0-1.947-14.908L222.002 5.858A19.92 19.92 0 0 0 207.884 0h-159.6A20 20 0 0 0 34.15 5.858z" opacity=".4"></path><path fill="url(#treasuredata-2-gui-asset-c)" d="m211.795 8.892-11.68 23.73 49.79 10.066a6.156 6.156 0 0 1 4.789 7.244 5.7 5.7 0 0 1-.386 1.21 12.28 12.28 0 0 0-1.947-14.908L222.002 5.858A19.92 19.92 0 0 0 207.884 0h-1.543a6.103 6.103 0 0 1 5.454 8.874z" opacity=".4"></path><path fill="url(#treasuredata-2-gui-asset-d)" d="M254.308 51.212a6.14 6.14 0 0 0-3.192-8.068 5.7 5.7 0 0 0-1.21-.385L200.114 32.62l-66.996 135.204a8.225 8.225 0 0 1-9.804 4.209 12.38 12.38 0 0 0 13.47-2.666L252.36 53.773a11.1 11.1 0 0 0 1.947-2.561"></path></g>', 2)
    ]), 4));
  }
});
export {
  u as _
};
