import { defineComponent as i, computed as l, openBlock as p, createElementBlock as r, normalizeStyle as a, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoCyclejs",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, o = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(o.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="cyclejs-gui-asset-a" x1="29.184%" x2="86.484%" y1="99.591%" y2=".354%"><stop offset="41.47%" stop-color="#51D3D9"></stop><stop offset="100%" stop-color="#C8FF8C"></stop></linearGradient><linearGradient id="cyclejs-gui-asset-b" x1="34.118%" x2="94.65%" y1="106.866%" y2="20.552%"><stop offset="41.47%" stop-color="#51D3D9"></stop><stop offset="100%" stop-color="#5A919B"></stop></linearGradient></defs><g><path fill="url(#cyclejs-gui-asset-a)" d="M255.96 198.32c-.12 2.6-.84 5.16-2.16 7.48l-24.24 42a16.33 16.33 0 0 1-14.16 8.2H80.88c-5.84 0-11.24-3.12-14.16-8.16L2.2 136.2C.72 133.64 0 130.84 0 128s.56-5.8 2.28-8.68L66.76 8.16C69.68 3.12 75.08 0 80.88 0H215.4c5.84 0 11.24 3.12 14.16 8.16 0 0 23.32 38.2 25 40.92s1.4 6.16 1.4 8.96c0 2.4-.68 5.68-1.32 8.28s-20.16 81.72-20.16 81.72l-42.6-90.6h-87.32L63.68 128l40.88 70.56h87.28z"></path><path fill="url(#cyclejs-gui-asset-b)" d="m224.84 127.96 29.6 62.76a16.31 16.31 0 0 1-.64 15.12l-61.92-7.24z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
