import { defineComponent as i, computed as r, openBlock as p, createElementBlock as a, normalizeStyle as h, createStaticVNode as n } from "vue";
const l = /* @__PURE__ */ i({
  __name: "LogoSourcetree",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "322",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 322",
      style: h(s.value)
    }, t[0] || (t[0] = [
      n('<defs><linearGradient id="sourcetree-gui-asset-a" x1="49.928%" x2="49.928%" y1="90.721%" y2="36.288%"><stop offset="18%" stop-color="#0052CC"></stop><stop offset="100%" stop-color="#2684FF"></stop></linearGradient></defs><g><path fill="#2684FF" d="M255.462 127.52C255.462 57.094 198.369 0 127.942 0 65.17-.089 11.677 45.531 1.855 107.528s26.949 121.917 86.672 141.236v63.895a8.97 8.97 0 0 0 8.968 8.968h60.532a8.97 8.97 0 0 0 8.968-8.968v-63.85c52.674-16.961 88.406-65.95 88.466-121.288m-127.52 43.09c-23.811 0-43.113-19.301-43.113-43.112 0-23.81 19.302-43.112 43.112-43.112s43.112 19.302 43.112 43.112-19.302 43.113-43.112 43.113"></path><path fill="url(#sourcetree-gui-asset-a)" d="M127.941 0v84.43c23.81 0 43.112 19.302 43.112 43.112s-19.302 43.112-43.112 43.112a39.413 39.413 0 0 1 39.413 39.414v38.785c59.746-19.322 96.533-79.262 86.71-141.281C244.243 45.553 190.735-.085 127.942 0"></path></g>', 2)
    ]), 4));
  }
});
export {
  l as _
};
