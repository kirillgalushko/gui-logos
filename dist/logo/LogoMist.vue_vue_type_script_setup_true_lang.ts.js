import { defineComponent as o, computed as p, openBlock as a, createElementBlock as l, normalizeStyle as r, createStaticVNode as h } from "vue";
const n = /* @__PURE__ */ o({
  __name: "LogoMist",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, e[0] || (e[0] = [
      h('<defs><linearGradient id="mist-gui-asset-a" x1="253.534%" x2="-6.886%" y1="253.575%" y2="-.904%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#C2C1C1"></stop></linearGradient><linearGradient id="mist-gui-asset-b" x1="209.797%" x2="-1.083%" y1="223.263%" y2="-3.113%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#A2A2A1"></stop></linearGradient><linearGradient id="mist-gui-asset-c" x1="271.964%" x2="7.716%" y1="334.363%" y2="-9.063%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#B3B3B3"></stop></linearGradient></defs><g><circle cx="128" cy="128" r="128" fill="#E9E9E9"></circle><path fill="url(#mist-gui-asset-a)" d="M166.056 207.918c-74.05-6.013-37.626-10.137-144.322-32.129 29.38 22.68 77.144 78.862 144.322 32.129"></path><path fill="url(#mist-gui-asset-b)" d="M242.34 118.06c-70.27-13.917-139.167-61.852-211.5-46.389-1.03.344-2.233.515-1.718 1.03 46.218 8.076 143.12 77.316 213.219 45.36"></path><path fill="url(#mist-gui-asset-c)" d="M223.098 183.692c-36.94-7.903-117.863-69.583-208.752-44.843 79.55 18.213 151.195 62.54 208.752 44.843"></path><path fill="#A4A4A4" d="M235.297 81.808C194.234 51.569 142.69-3.067 95.613 47.274 153 54.318 160.558 63.768 235.297 81.808"></path><path fill="#121212" d="M20.875 175.445c85.047.172 133.67-64.773 221.466-57.385-70.1 35.909-155.834 103.775-221.466 57.385"></path><path fill="#171717" d="M235.125 81.808c-85.734-6.873-130.406 62.368-221.466 57.385C48.193 123.558 150.078 31.64 235.125 81.808"></path><path fill="#212121" d="M172.242 36.621c-49.139-1.718-99.136 41.922-143.463 36.253C60.736 53.459 120.01 4.492 172.242 36.62"></path><path fill="#010101" d="M84.102 219.945c51.028-.172 93.81-45.015 140.027-36.253-37.799 21.649-83.844 66.32-140.027 36.253"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
