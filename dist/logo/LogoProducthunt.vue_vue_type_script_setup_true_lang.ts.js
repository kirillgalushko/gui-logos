import { defineComponent as s, computed as n, openBlock as h, createElementBlock as r, normalizeStyle as p, createStaticVNode as d } from "vue";
const c = /* @__PURE__ */ s({
  __name: "LogoProducthunt",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(i.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="producthunt-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#DA552F"></stop><stop offset="100%" stop-color="#D04B25"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><path fill="url(#producthunt-gui-asset-a)" d="M128 256c70.694 0 128-57.306 128-128S198.694 0 128 0 0 57.306 0 128s57.306 128 128 128"></path><path fill="#FFF" d="M96 76.8v102.4h19.2v-32h29.056c19.296-.512 34.944-16.16 34.944-35.2 0-19.552-15.648-35.2-34.944-35.2zm48.493 51.2H115.2V96h29.293c8.563 0 15.507 7.168 15.507 16s-6.944 16-15.507 16"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
