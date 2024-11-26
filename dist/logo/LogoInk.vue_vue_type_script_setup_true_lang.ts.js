import { defineComponent as p, computed as s, openBlock as a, createElementBlock as l, normalizeStyle as h, createStaticVNode as r } from "vue";
const f = /* @__PURE__ */ p({
  __name: "LogoInk",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(o.value)
    }, e[0] || (e[0] = [
      r('<defs><linearGradient id="ink-gui-asset-a" x1="38.264%" x2="58.004%" y1="9.702%" y2="40.206%"><stop offset="0%" stop-color="#DB221A"></stop><stop offset="100%" stop-color="#9E020B"></stop></linearGradient><linearGradient id="ink-gui-asset-b" x1="0%" x2="59.127%" y1="58.373%" y2="44.552%"><stop offset="0%" stop-color="#87D152"></stop><stop offset="100%" stop-color="#5CA82C"></stop></linearGradient><linearGradient id="ink-gui-asset-c" x1="55.987%" x2="47.766%" y1="94.205%" y2="50%"><stop offset="0%" stop-color="#39BE90"></stop><stop offset="100%" stop-color="#2C8A72"></stop></linearGradient></defs><g><path fill="url(#ink-gui-asset-a)" d="m25.549 25.331 1.123 4.457 41.545 41.77L110.66 28.89l.344-3.559z"></path><path fill="#F6B937" d="m68.131 67.84-.663 2.595 23.206 96.788 39.524-39.523-59.286-59.511z"></path><path fill="#FFD500" d="m185.89 67.59 40.422-40.572 4.357-1.251v84.192l-3.458-.449z"></path><path fill="#FFF67D" d="m136.189 0 94.48 25.767-42.29 41.854-8.907 4.805-80.85 20.64-7.142-1.869L68.131 67.84z"></path><path fill="#5ACDA5" d="m188.379 67.621-3.387 1.616-21.259 20.66.48 1.89-.63 2.751 22.457 89.828 1.902 3.139.194 2.25 39.524 39.374 2.936 1.031L256 135.388z"></path><path fill="url(#ink-gui-asset-b)" d="M25.913 145.433v84.872l5.026-1.101 41.32-41.917-43.341-40.948z"></path><path fill="#AFE682" d="m25.913 230.305 42.436-43.018 3.91-1.986 92.297-22.906 23.386 25.11-1.041 2.4-37.391 38.738-3.504 1.436-25.03 25.411z"></path><path fill="#7DD769" d="m164.213 91.787-3.362 1.891-32.113 31.551-.629 2.662 59.833 59.614z"></path><path fill="#AADC50" d="m188.379 67.621-60.27 60.27L91.48 91.197z"></path><path fill="url(#ink-gui-asset-c)" d="m146.088 230.16 41.854-42.655 42.654 42.655z"></path><path fill="#DC4B1E" d="m0 120.248 68.349 67.039 3.236-1.761 20.773-18.078-.789-3.235L68.131 67.84 25.549 25.331z"></path><path fill="#AABE55" d="m68.349 187.287 59.76-59.396 36.395 36.249z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
