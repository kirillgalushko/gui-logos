import { defineComponent as a, computed as i, openBlock as l, createElementBlock as r, normalizeStyle as p, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ a({
  __name: "LogoSolidjs2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, s) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "239",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "256 239 256 239",
      style: p(e.value)
    }, s[0] || (s[0] = [
      n('<defs><linearGradient id="solidjs-2-gui-asset-a" x1="27.5" x2="152" y1="3" y2="63.5" gradientTransform="translate(249.56 233.12)scale(1.61006)" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#76b3e1"></stop><stop offset=".3" stop-color="#dcf2fd"></stop><stop offset="1" stop-color="#76b3e1"></stop></linearGradient><linearGradient id="solidjs-2-gui-asset-b" x1="95.8" x2="74" y1="32.6" y2="105.2" gradientTransform="translate(249.56 233.12)scale(1.61006)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#76b3e1"></stop><stop offset=".5" stop-color="#4377bb"></stop><stop offset="1" stop-color="#1f3b77"></stop></linearGradient><linearGradient id="solidjs-2-gui-asset-c" x1="18.4" x2="144.3" y1="64.2" y2="149.8" gradientTransform="translate(249.56 233.12)scale(1.61006)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#315aa9"></stop><stop offset=".5" stop-color="#518ac8"></stop><stop offset="1" stop-color="#315aa9"></stop></linearGradient><linearGradient id="solidjs-2-gui-asset-d" x1="75.2" x2="24.4" y1="74.5" y2="260.8" gradientTransform="translate(249.56 233.12)scale(1.61006)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4377bb"></stop><stop offset=".5" stop-color="#1a336b"></stop><stop offset="1" stop-color="#1a336b"></stop></linearGradient></defs><g><path fill="#76b3e1" d="M512 289.472s-85.333-62.791-151.347-48.301l-4.829 1.61c-9.66 3.221-17.711 8.05-22.542 14.491l-3.219 4.829-24.152 41.862 41.863 8.051c17.71 11.27 40.251 16.101 61.182 11.27l74.063 14.491z"></path><path fill="url(#solidjs-2-gui-asset-a)" d="M512 289.472s-85.333-62.791-151.347-48.301l-4.829 1.61c-9.66 3.221-17.711 8.05-22.542 14.491l-3.219 4.829-24.152 41.862 41.863 8.051c17.71 11.27 40.251 16.101 61.182 11.27l74.063 14.491z" opacity=".3"></path><path fill="#518ac8" d="m333.282 289.472-6.439 1.611c-27.371 8.05-35.421 33.811-20.932 56.352 16.101 20.931 49.913 32.201 77.284 24.151l99.824-33.811s-85.334-62.792-149.737-48.303"></path><path fill="url(#solidjs-2-gui-asset-b)" d="m333.282 289.472-6.439 1.611c-27.371 8.05-35.421 33.811-20.932 56.352 16.101 20.931 49.913 32.201 77.284 24.151l99.824-33.811s-85.334-62.792-149.737-48.303" opacity=".3"></path><path fill="url(#solidjs-2-gui-asset-c)" d="M465.308 361.925c-18.439-23.036-49.008-32.588-77.283-24.15l-99.823 32.201L256 426.328l180.327 30.592 32.201-57.963c6.441-11.271 4.831-24.15-3.22-37.032"></path><path fill="url(#solidjs-2-gui-asset-d)" d="M433.106 418.277c-18.439-23.036-49.006-32.588-77.282-24.15L256 426.328s85.333 64.402 151.346 48.303l4.83-1.612c27.371-8.049 37.031-33.81 20.93-54.742"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
