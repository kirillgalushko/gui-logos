import { defineComponent as s, computed as n, openBlock as p, createElementBlock as r, normalizeStyle as l, createStaticVNode as d } from "vue";
const g = /* @__PURE__ */ s({
  __name: "LogoKotlin3",
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
    return (h, e) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(i.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="kotlin-3-gui-asset-a" x1="99.991%" x2=".01%" y1="-.011%" y2="100.01%"><stop offset=".344%" stop-color="#E44857"></stop><stop offset="46.89%" stop-color="#C711E1"></stop><stop offset="100%" stop-color="#7F52FF"></stop></linearGradient></defs><g><polygon fill="url(#kotlin-3-gui-asset-a)" fill-rule="nonzero" points="256 256 0 256 0 0 256 0 128 127.948759"></polygon></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
