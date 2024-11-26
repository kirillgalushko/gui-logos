import { defineComponent as r, computed as s, openBlock as p, createElementBlock as a, normalizeStyle as c, createStaticVNode as n } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoFrontapp",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (l, e) => (p(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "366",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 366",
      style: c(i.value)
    }, e[0] || (e[0] = [
      n('<defs><linearGradient id="frontapp-gui-asset-a" x1="12.519%" x2="88.228%" y1="85.213%" y2="10.023%"><stop offset="0%" stop-color="#FF0057" stop-opacity=".16"></stop><stop offset="86.135%" stop-color="#FF0057"></stop></linearGradient></defs><g><path fill="#001B38" d="M0 60.854C0 27.245 27.245 0 60.854 0h195.143v86.6c0 16.804-13.623 30.427-30.427 30.427h-79.762c-15.805.25-28.565 13.033-28.781 28.846v189.41c0 16.804-13.622 30.427-30.427 30.427H0z"></path><circle cx="147.013" cy="147.015" r="78.993" fill="url(#frontapp-gui-asset-a)" transform="rotate(90 147.013 147.015)"></circle><circle cx="147.013" cy="147.015" r="78.993" fill="url(#frontapp-gui-asset-a)" opacity=".5" transform="rotate(90 147.013 147.015)"></circle></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
