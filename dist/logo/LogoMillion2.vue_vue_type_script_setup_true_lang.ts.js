import { defineComponent as e, computed as a, openBlock as r, createElementBlock as l, normalizeStyle as n, createStaticVNode as p } from "vue";
const c = /* @__PURE__ */ e({
  __name: "LogoMillion2",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, o) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "182",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 182",
      style: n(i.value)
    }, o[0] || (o[0] = [
      p('<defs><radialGradient id="million-2-gui-asset-a" cx="50%" cy="49.999%" r="32.306%" fx="50%" fy="49.999%" gradientTransform="translate(0 -380193.475)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient><radialGradient id="million-2-gui-asset-b" cx="50.061%" cy="104.167%" r="67.301%" fx="50.061%" fy="104.167%" gradientTransform="translate(0 -35820434.112)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient><radialGradient id="million-2-gui-asset-c" cx="99.122%" cy="34.222%" r="42.521%" fx="99.122%" fy="34.222%" gradientTransform="translate(0 -56809933.375)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient><radialGradient id="million-2-gui-asset-d" cx=".878%" cy="34.21%" r="42.506%" fx=".878%" fy="34.21%" gradientTransform="translate(0 -5447320.88)skewY(90)"><stop offset="0%" stop-color="#845CE7"></stop><stop offset="100%" stop-color="#AF73D8"></stop></radialGradient></defs><g><path fill="url(#million-2-gui-asset-a)" d="M64.995 153.355c11.777-16.858 35.745-28.399 63.396-28.399 27.65 0 51.62 11.54 63.397 28.4-11.778 16.856-35.746 28.397-63.397 28.397s-51.619-11.54-63.396-28.398"></path><path fill="url(#million-2-gui-asset-b)" d="M64.567 28.097C76.337 11.418 100.289 0 127.923 0c27.633 0 51.586 11.418 63.356 28.097-11.77 16.679-35.723 28.097-63.356 28.097S76.337 44.776 64.567 28.097"></path><path fill="url(#million-2-gui-asset-c)" d="M129.133 91.209c-17.124 16.54-40.349 25.831-64.566 25.831S17.124 107.748 0 91.21l64.567-63.112z"></path><path fill="url(#million-2-gui-asset-d)" d="M256 91.24c-17.124 16.54-40.35 25.831-64.567 25.831s-47.443-9.292-64.567-25.831l64.567-63.143z"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
