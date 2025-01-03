import { defineComponent as i, computed as n, openBlock as p, createElementBlock as r, normalizeStyle as a, createStaticVNode as l } from "vue";
const c = /* @__PURE__ */ i({
  __name: "LogoJson",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(s.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="json-gui-asset-a" x1="15.791%" x2="91.009%" y1="14.737%" y2="85.228%"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="json-gui-asset-b" x1="82.136%" x2="-3.113%" y1="85.237%" y2="14.79%"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient></defs><g><path fill="url(#json-gui-asset-a)" d="M127.783 190.56c56.637 77.208 112.064-21.55 111.982-80.94C239.67 39.404 168.5.16 127.737.16 62.309.159 0 54.232 0 128.216 0 210.45 71.425 256 127.737 256c-12.743-1.835-55.21-10.934-55.78-108.747-.385-66.154 21.58-92.585 55.688-80.958.764.283 37.622 14.823 37.622 62.32 0 47.296-37.484 61.944-37.484 61.944"></path><path fill="url(#json-gui-asset-b)" d="M127.717 66.241c-37.424-12.899-83.269 17.946-83.269 79.726C44.448 246.844 119.201 256 128.263 256 193.691 256 256 201.926 256 127.943 256 45.709 184.575.159 128.263.159c15.597-2.16 84.065 16.88 84.065 110.458 0 61.026-51.124 94.248-84.376 80.054-.764-.283-37.623-14.823-37.623-62.32 0-47.297 37.388-62.11 37.388-62.11"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
