import { defineComponent as i, computed as r, openBlock as a, createElementBlock as l, normalizeStyle as p, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoFlattr",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: p(s.value)
    }, e[0] || (e[0] = [
      n('<defs><linearGradient id="flattr-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="99.997%"><stop offset="0%" stop-color="#EA5F29"></stop><stop offset="100%" stop-color="#FABD1F"></stop></linearGradient><linearGradient id="flattr-gui-asset-b" x1="49.997%" x2="49.997%" y1="99.999%" y2=".001%"><stop offset="0%" stop-color="#ABD33C"></stop><stop offset="100%" stop-color="#6CB02F"></stop></linearGradient></defs><g><path fill="url(#flattr-gui-asset-a)" d="M91.794 237.86C31.02 237.86 0 202.797 0 137.335V0l59.535 59.692v69.763c0 27.12 7.175 44.377 31.246 48.252 8.41 1.647 25.91 1.07 37.038 1.07v-41.423c0-.378.051-1.052.148-1.398.466-1.677 1.98-2.905 3.774-2.909 1.015-.002 1.965.526 2.944 1.493l103.172 103.303-69.253.016z" transform="matrix(1 0 0 -1 0 237.86)"></path><path fill="url(#flattr-gui-asset-b)" d="M196.2 196.453V126.69c0-27.12-7.177-44.38-31.246-48.254-8.41-1.645-25.91-1.068-37.038-1.068v41.421c0 .376-.051 1.052-.148 1.398-.466 1.679-1.98 2.906-3.774 2.91-1.015.003-1.965-.527-2.944-1.492L17.877 18.303l69.254-.016h76.81c60.775 0 91.794 35.06 91.794 100.52v137.337z" transform="matrix(1 0 0 -1 0 274.431)"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
