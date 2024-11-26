import { defineComponent as s, computed as p, openBlock as h, createElementBlock as r, normalizeStyle as a, createStaticVNode as l } from "vue";
const c = /* @__PURE__ */ s({
  __name: "LogoHyper",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "224",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 224",
      style: a(i.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="hyper-gui-asset-a" x1="47.952%" x2="47.952%" y1="97.595%" y2="0%"><stop offset="0%" stop-color="#FFB300"></stop><stop offset="61.372%" stop-color="#DC3939"></stop><stop offset="100%" stop-color="#FF1BB4"></stop></linearGradient></defs><g><path fill="#000" d="M13.18 4.5h229.64c4.517 0 8.18 3.655 8.18 8.163v197.674c0 4.508-3.663 8.163-8.18 8.163H13.18c-4.517 0-8.18-3.655-8.18-8.163V12.663C5 8.155 8.663 4.5 13.18 4.5"></path><path fill="url(#hyper-gui-asset-a)" d="M7.175 14.35v194.583a7.18 7.18 0 0 0 7.178 7.175h227.294a7.175 7.175 0 0 0 7.178-7.175V14.35a7.18 7.18 0 0 0-7.178-7.175H14.353a7.175 7.175 0 0 0-7.178 7.175M0 14.35C0 6.425 6.424 0 14.353 0h227.294C249.574 0 256 6.427 256 14.35v194.583c0 7.925-6.424 14.35-14.353 14.35H14.353C6.426 223.283 0 216.856 0 208.933z"></path><path fill="#FFF" d="M76.15 83.31h38.486v7.473H76.149zM64.406 63.947 30.52 94.393l10.547-26.645-14.887-10.04 33.885-30.443-11.47 28.345z"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
