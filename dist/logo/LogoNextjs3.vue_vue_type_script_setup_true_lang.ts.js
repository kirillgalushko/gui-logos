import { defineComponent as o, computed as r, openBlock as n, createElementBlock as l, normalizeStyle as a, createStaticVNode as c } from "vue";
const h = /* @__PURE__ */ o({
  __name: "LogoNextjs3",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (n(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(i.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="nextjs-3-gui-asset-c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="nextjs-3-gui-asset-d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><circle id="nextjs-3-gui-asset-a" cx="128" cy="128" r="128"></circle></defs><g><mask id="nextjs-3-gui-asset-b" fill="#fff"><use xlink:href="#nextjs-3-gui-asset-a"></use></mask><g mask="url(#nextjs-3-gui-asset-b)"><circle cx="128" cy="128" r="128" fill="#000"></circle><path fill="url(#nextjs-3-gui-asset-c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"></path><rect width="17.067" height="102.4" x="163.556" y="76.8" fill="url(#nextjs-3-gui-asset-d)"></rect></g></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
