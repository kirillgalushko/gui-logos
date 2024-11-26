import { defineComponent as s, computed as r, openBlock as p, createElementBlock as d, normalizeStyle as a, createStaticVNode as l } from "vue";
const n = /* @__PURE__ */ s({
  __name: "LogoEdgio2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (p(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(i.value)
    }, e[0] || (e[0] = [
      l('<defs><radialGradient id="edgio-2-gui-asset-b" cx="104.362%" cy="13.088%" r="94.575%" fx="104.362%" fy="13.088%"><stop offset="0%" stop-color="#01B07D"></stop><stop offset="100%" stop-color="#01B07D" stop-opacity="0"></stop></radialGradient><radialGradient id="edgio-2-gui-asset-c" cx="68.749%" cy="120.916%" r="68.487%" fx="68.749%" fy="120.916%"><stop offset="0%" stop-color="#00AAE5"></stop><stop offset="100%" stop-color="#00AAE5" stop-opacity="0"></stop></radialGradient><linearGradient id="edgio-2-gui-asset-a" x1="3.185%" x2="57.325%" y1="2.866%" y2="58.917%"><stop offset="0%" stop-color="#793092"></stop><stop offset="100%" stop-color="#6144A1"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#edgio-2-gui-asset-a)"></rect><rect width="256" height="256" x="0" y="0" fill="url(#edgio-2-gui-asset-b)"></rect><rect width="256" height="256" x="0" y="0" fill="url(#edgio-2-gui-asset-c)"></rect><polygon fill="#FFF" points="170.908427 77.2014079 187.133362 47.9481495 68.8666627 47.9481495 68.8666627 208.051403 187.133362 208.051403 170.989449 178.757831 100.749379 178.757831 100.749379 141.938707 156.504312 141.938707 165.486678 112.645136 100.749379 112.645136 100.749379 77.2014079"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
