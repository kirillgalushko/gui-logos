import { defineComponent as a, computed as o, openBlock as s, createElementBlock as l, normalizeStyle as u, createStaticVNode as f } from "vue";
const h = /* @__PURE__ */ a({
  __name: "LogoGitup",
  props: {
    width: {},
    height: {}
  },
  setup(r) {
    const e = r, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: u(i.value)
    }, t[0] || (t[0] = [
      f('<defs><filter id="gitup-gui-asset-a" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius="1" result="shadowSpreadOuter1"></feMorphology><feOffset dx="1" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="gitup-gui-asset-c" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feMorphology in="SourceAlpha" operator="dilate" radius="1" result="shadowSpreadOuter1"></feMorphology><feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><clipPath id="gitup-gui-asset-b"><path d="M19.92 28.011 194.686.331C207.413-1.685 219.365 7 221.38 19.726l27.68 174.765c2.016 12.727-6.667 24.679-19.394 26.695L54.9 248.866c-12.727 2.016-24.678-6.668-26.694-19.395L.526 54.706C-1.49 41.979 7.193 30.027 19.92 28.01"></path></clipPath></defs><g><g><path fill="#F5F5F5" d="M19.92 28.011 194.686.331C207.413-1.685 219.365 7 221.38 19.726l27.68 174.765c2.016 12.727-6.667 24.679-19.394 26.695L54.9 248.866c-12.727 2.016-24.678-6.668-26.694-19.395L.526 54.706C-1.49 41.979 7.193 30.027 19.92 28.01" filter="url(#gitup-gui-asset-a)" transform="translate(2.24 2.24)"></path><g clip-path="url(#gitup-gui-asset-b)" transform="translate(2.24 2.24)"><circle cx="129.582" cy="128.848" r="116.671" fill="#FBFBFB" filter="url(#gitup-gui-asset-c)"></circle><circle cx="129.582" cy="128.848" r="72.924" fill="#FCFCFC" filter="url(#gitup-gui-asset-c)"></circle><circle cx="129.582" cy="128.848" r="29.169" fill="#FFF" filter="url(#gitup-gui-asset-c)"></circle></g></g><path fill="#000" fill-opacity=".2" d="m22.203 30.519 174.766-27.68c12.58-1.993 24.393 6.59 26.385 19.17l27.68 174.765c1.993 12.58-6.59 24.393-19.17 26.385L57.098 250.84c-12.58 1.993-24.392-6.59-26.385-19.17L3.033 56.905c-1.993-12.58 6.59-24.393 19.17-26.385m-.085-.534C9.244 32.025.46 44.114 2.5 56.988l27.68 174.766c2.039 12.874 14.129 21.658 27.003 19.62l174.766-27.681c12.874-2.04 21.658-14.129 19.619-27.003l-27.68-174.766c-2.04-12.874-14.13-21.658-27.004-19.62z"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
