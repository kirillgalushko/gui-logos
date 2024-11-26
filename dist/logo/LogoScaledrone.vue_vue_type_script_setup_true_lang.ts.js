import { defineComponent as s, computed as p, openBlock as r, createElementBlock as c, normalizeStyle as a, createStaticVNode as l } from "vue";
const h = /* @__PURE__ */ s({
  __name: "LogoScaledrone",
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
    return (n, e) => (r(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(i.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="scaledrone-gui-asset-a" x1="75.094%" x2="26.264%" y1="93.381%" y2="8.971%"><stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop><stop offset="47.52%" stop-color="#6466BB"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient></defs><g><g><circle cx="128" cy="128" r="128" fill="url(#scaledrone-gui-asset-a)" opacity=".5"></circle><path fill="#6466BB" d="M205.6 83.2 238.9 64c-30-52-96.6-69.9-148.6-39.8-52 30-69.9 96.6-39.8 148.6L17.1 192c30 52 96.6 69.9 148.6 39.8 52.1-30 69.9-96.6 39.9-148.6"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
