import { defineComponent as p, computed as i, openBlock as a, createElementBlock as r, normalizeStyle as n, createStaticVNode as l } from "vue";
const d = /* @__PURE__ */ p({
  __name: "LogoJetbrainsSpace2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (a(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(e.value)
    }, o[0] || (o[0] = [
      l('<defs><linearGradient id="jetbrains-space-2-gui-asset-a" x1="45.082%" x2="55.522%" y1="-1.343%" y2="97.61%"><stop offset="0%" stop-color="#FCF84A"></stop><stop offset="32%" stop-color="#ABE682"></stop><stop offset="79%" stop-color="#36CDD2"></stop><stop offset="100%" stop-color="#07C3F2"></stop></linearGradient><linearGradient id="jetbrains-space-2-gui-asset-b" x1="-2.942%" x2="100.445%" y1="38.992%" y2="62.105%"><stop offset="0%" stop-color="#3BEA62"></stop><stop offset="100%" stop-color="#087CFA"></stop></linearGradient><linearGradient id="jetbrains-space-2-gui-asset-c" x1="-3.308%" x2="111.745%" y1="71.807%" y2="15.462%"><stop offset="0%" stop-color="#009AE5"></stop><stop offset="18%" stop-color="#0490DD"></stop><stop offset="49%" stop-color="#1073C6"></stop><stop offset="89%" stop-color="#2346A1"></stop><stop offset="100%" stop-color="#293896"></stop></linearGradient></defs><g><path fill="url(#jetbrains-space-2-gui-asset-a)" d="M46.36 255.991c91.075-7.978 170.982-63.92 209.64-146.768C208.12 40.799 129.873.033 46.36 0Q35.2 0 23.936.99c-38.612 82.903-30.064 180.109 22.424 255"></path><path fill="url(#jetbrains-space-2-gui-asset-b)" d="M24.209 1.024a301.4 301.4 0 0 1 134.685 108.199H256C208.263 40.76 130.062-.03 46.6 0Q35.437 0 24.208 1.024"></path><path fill="url(#jetbrains-space-2-gui-asset-c)" d="M158.894 109.223C147.187 186.6 46.258 255.99 46.258 255.99c91.781-8.67 172.23-63.622 209.742-146.768z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
