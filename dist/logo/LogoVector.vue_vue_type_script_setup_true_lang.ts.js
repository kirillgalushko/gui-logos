import { defineComponent as p, computed as r, openBlock as f, createElementBlock as l, normalizeStyle as i, createStaticVNode as F } from "vue";
const n = /* @__PURE__ */ p({
  __name: "LogoVector",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const o = s, e = r(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, t) => (f(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "301",
      version: "1.1",
      viewBox: "0 0 256 301",
      style: i(e.value)
    }, t[0] || (t[0] = [
      F('<defs><linearGradient id="vector-gui-asset-a" x1="13.523%" x2="86.414%" y1="74.679%" y2="25.305%"><stop offset="0%" stop-color="#10E7FF"></stop><stop offset="10.3%" stop-color="#33D5FF"></stop><stop offset="25.5%" stop-color="#60BDFF"></stop><stop offset="40.8%" stop-color="#86AAFF"></stop><stop offset="56%" stop-color="#A39AFF"></stop><stop offset="71%" stop-color="#B790FF"></stop><stop offset="85.8%" stop-color="#C489FF"></stop><stop offset="100%" stop-color="#C887FF"></stop></linearGradient><linearGradient id="vector-gui-asset-b" x1="21.006%" x2="96.466%" y1="54.033%" y2="27.047%"><stop offset="0%" stop-color="#10E7FF"></stop><stop offset="10.3%" stop-color="#33D5FF"></stop><stop offset="25.5%" stop-color="#60BDFF"></stop><stop offset="40.8%" stop-color="#86AAFF"></stop><stop offset="56%" stop-color="#A39AFF"></stop><stop offset="71%" stop-color="#B790FF"></stop><stop offset="85.8%" stop-color="#C489FF"></stop><stop offset="100%" stop-color="#C887FF"></stop></linearGradient></defs><g><path fill="url(#vector-gui-asset-a)" d="M128 300.346 0 225.26V75.087L128 0l128 75.087V225.26zM17.89 214.677l109.858 64.504 109.858-64.504V85.67L128 21.165 17.89 85.67z"></path><path fill="url(#vector-gui-asset-b)" d="m183.181 109.354-44.85 78.866 14.614 25.701 59.464-104.567zm-50.142 0L88.19 188.22l14.614 25.701 59.465-104.567zm-89.448 0 59.464 104.567 14.614-25.7-44.85-78.867zm0 0 59.464 104.567 14.614-25.7-44.85-78.867zm89.448 0L88.19 188.22l14.614 25.701 59.465-104.567z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};
