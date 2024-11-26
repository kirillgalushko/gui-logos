import { defineComponent as o, computed as i, openBlock as a, createElementBlock as f, normalizeStyle as l, createStaticVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "LogoBrackets",
  props: {
    width: {},
    height: {}
  },
  setup(r) {
    const e = r, s = i(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, t) => (a(), f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(s.value)
    }, t[0] || (t[0] = [
      d('<defs><filter id="brackets-gui-asset-b" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.273992301 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><filter id="brackets-gui-asset-c" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.273992301 0"></feColorMatrix><feMerge><feMergeNode in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><linearGradient id="brackets-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#29ABE2"></stop><stop offset="47.57%" stop-color="#28A9E1"></stop><stop offset="66.39%" stop-color="#23A2DC"></stop><stop offset="80.12%" stop-color="#1A96D4"></stop><stop offset="91.3%" stop-color="#0E85C9"></stop><stop offset="100%" stop-color="#0071BC"></stop></linearGradient></defs><g><path fill="#115A91" d="M256 204.8c0 28.16-23.04 51.2-51.2 51.2H51.2C23.04 256 0 232.96 0 204.8V51.2C0 23.04 23.04 0 51.2 0h153.6C232.96 0 256 23.04 256 51.2z"></path><path fill="#FFF" d="M204.8 28.16c12.705 0 23.04 10.335 23.04 23.04v128c0 12.705-10.335 23.04-23.04 23.04H51.2c-12.705 0-23.04-10.335-23.04-23.04v-128c0-12.705 10.335-23.04 23.04-23.04z"></path><path fill="url(#brackets-gui-asset-a)" d="M204.8 28.16c12.705 0 23.04 10.335 23.04 23.04v128c0 12.705-10.335 23.04-23.04 23.04H51.2c-12.705 0-23.04-10.335-23.04-23.04v-128c0-12.705 10.335-23.04 23.04-23.04zm0-28.16H51.2C23.04 0 0 23.04 0 51.2v128c0 28.16 23.04 51.2 51.2 51.2h153.6c28.16 0 51.2-23.04 51.2-51.2v-128C256 23.04 232.96 0 204.8 0"></path><g fill="#4D4D4D"><path d="M143.36 0v122.88h-64V92.16h35.84v-64H79.36V0z" filter="url(#brackets-gui-asset-b)" transform="translate(56.32 53.76)"></path><path d="M64 0v28.16H28.16v64H64v30.72H0V0z" filter="url(#brackets-gui-asset-c)" transform="translate(56.32 53.76)"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};
