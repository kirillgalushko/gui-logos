import { defineComponent as r, computed as l, openBlock as o, createElementBlock as h, normalizeStyle as n, createStaticVNode as m } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoCoderwall",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, t = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, c) => (o(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(t.value)
    }, c[0] || (c[0] = [
      m('<g fill="#3E8DCC"><circle cx="28.823" cy="28.823" r="28.051"></circle><circle cx="128" cy="28.823" r="28.051"></circle><circle cx="227.177" cy="28.823" r="28.051"></circle><circle cx="128" cy="128" r="28.051"></circle><circle cx="227.177" cy="128" r="28.051"></circle><circle cx="227.177" cy="227.177" r="28.051"></circle></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
