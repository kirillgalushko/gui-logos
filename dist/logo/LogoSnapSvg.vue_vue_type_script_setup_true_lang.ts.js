import { defineComponent as a, computed as p, openBlock as i, createElementBlock as r, normalizeStyle as l, createStaticVNode as d } from "vue";
const g = /* @__PURE__ */ a({
  __name: "LogoSnapSvg",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, e = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, s) => (i(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "425",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 425",
      style: l(e.value)
    }, s[0] || (s[0] = [
      d('<defs><radialGradient id="snap-svg-gui-asset-c" cx="16.423%" cy="143%" r="295.571%" fx="16.423%" fy="143%"><stop offset="0%" stop-color="#00BC85"></stop><stop offset="100%" stop-color="#149D91"></stop></radialGradient><radialGradient id="snap-svg-gui-asset-d" cx="16.423%" cy="-43%" r="357.004%" fx="16.423%" fy="-43%"><stop offset="0%" stop-color="#00BC85"></stop><stop offset="100%" stop-color="#149D91"></stop></radialGradient><radialGradient id="snap-svg-gui-asset-e" cx="11.467%" cy="-40.458%" r="343.189%" fx="11.467%" fy="-40.458%"><stop offset="0%" stop-color="#004473"></stop><stop offset="100%" stop-color="#00345F"></stop></radialGradient><linearGradient id="snap-svg-gui-asset-a" x1="50%" x2="50%" y1="-352.926%" y2="96.718%"><stop offset="0%" stop-color="#002E3B"></stop><stop offset="100%" stop-color="#002639"></stop></linearGradient><linearGradient id="snap-svg-gui-asset-b" x1="50%" x2="50%" y1="-2.808%" y2="428.759%"><stop offset="0%" stop-color="#002E3B"></stop><stop offset="100%" stop-color="#002639"></stop></linearGradient></defs><g><path fill="url(#snap-svg-gui-asset-a)" d="M65.7 330.3.107 362.385l127.292 62 127.64-62.194-65.76-32.539-61.928 30.754z"></path><path fill="url(#snap-svg-gui-asset-b)" d="M57.602 98.175v-.02l69.93-34.107 69.934 34.106L255.004 62.2 127.484 0 0 62.18v.055l57.554 35.964z"></path><path fill="url(#snap-svg-gui-asset-c)" d="m.156 298.428 62.915-30.803 64.714 32.042L.156 362.462z"></path><path fill="url(#snap-svg-gui-asset-d)" d="M196.678 99.41v100.768l-70.342 34.424 64.686 32.339 62.979-30.797V62.19l-57.323 35.976z"></path><path fill="url(#snap-svg-gui-asset-e)" d="m255.004 298.216-197.415-98.25V98.182L0 62.23v173.702l255.004 126.321z"></path></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
