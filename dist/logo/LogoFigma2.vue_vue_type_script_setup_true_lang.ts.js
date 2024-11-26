import { defineComponent as p, computed as o, openBlock as a, createElementBlock as l, normalizeStyle as s, createStaticVNode as c } from "vue";
const n = /* @__PURE__ */ p({
  __name: "LogoFigma2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "384",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 384",
      style: s(i.value)
    }, e[0] || (e[0] = [
      c('<g><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"></path><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"></path><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"></path><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"></path><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
