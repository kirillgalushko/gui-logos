import { defineComponent as s, computed as i, openBlock as p, createElementBlock as a, normalizeStyle as c, createStaticVNode as l } from "vue";
const h = /* @__PURE__ */ s({
  __name: "LogoTorBrowser",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, r = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(r.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="tor-browser-gui-asset-a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#420C5D"></stop><stop offset="100%" stop-color="#951AD1"></stop></linearGradient><linearGradient id="tor-browser-gui-asset-b" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#420C5D"></stop><stop offset="100%" stop-color="#951AD1"></stop></linearGradient></defs><g><circle cx="128" cy="128" r="123" fill="#F2E4FF"></circle><path fill="url(#tor-browser-gui-asset-a)" d="M128.263 232.72v-15.517c49.15-.142 88.947-40.02 88.947-89.207 0-49.182-39.797-89.06-88.947-89.203V23.277c57.72.145 104.46 46.968 104.46 104.72 0 57.755-46.74 104.58-104.46 104.723m0-54.31c27.722-.145 50.161-22.652 50.161-50.414 0-27.758-22.439-50.264-50.161-50.41V62.073c36.295.142 65.678 29.596 65.678 65.923 0 36.331-29.383 65.785-65.678 65.927zm0-77.55c14.87.141 26.888 12.23 26.888 27.136 0 14.91-12.018 27-26.888 27.141zM0 127.995C0 198.692 57.304 256 128 256c70.692 0 128-57.308 128-128.004C256 57.304 198.692 0 128 0 57.304 0 0 57.304 0 127.996"></path><path fill="url(#tor-browser-gui-asset-b)" d="M12.5 14.5c63.789 0 115.5 51.487 115.5 115s-51.711 115-115.5 115z" transform="matrix(-1 0 0 1 140.5 0)"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
