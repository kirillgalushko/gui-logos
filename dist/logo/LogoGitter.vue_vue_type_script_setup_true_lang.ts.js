import { defineComponent as s, computed as h, openBlock as r, createElementBlock as p, normalizeStyle as n, createStaticVNode as a } from "vue";
const l = /* @__PURE__ */ s({
  __name: "LogoGitter",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (r(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(o.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="gitter-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FB0766"></stop><stop offset="100%" stop-color="#C50948"></stop></linearGradient></defs><g><path fill="url(#gitter-gui-asset-a)" d="M0 0h256v256H0z"></path><path fill="#FFF" d="M83.914 62.873h12.525v82.661H83.914zm76.149 20.039h12.524v62.622h-12.524zm-50.599 0h12.524v110.466h-12.524zm25.049 0h12.525v110.466h-12.525z"></path></g>', 2)
    ]), 4));
  }
});
export {
  l as _
};
