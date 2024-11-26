import { defineComponent as l, computed as p, openBlock as a, createElementBlock as o, normalizeStyle as d, createStaticVNode as n } from "vue";
const m = /* @__PURE__ */ l({
  __name: "LogoOsquery",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, e) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "255",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 255",
      style: d(i.value)
    }, e[0] || (e[0] = [
      n('<g><path fill="#A596FF" d="M255.215.258v63.736l-63.605 63.605v-63.87z"></path><path fill="#000" d="M128.006.258v63.736l63.605 63.605v-63.87z"></path><path fill="#A596FF" d="M255.346 254.804H191.61l-63.605-63.605h63.867z"></path><path fill="#000" d="M255.346 127.595H191.61L128.005 191.2h63.867z"></path><path fill="#A596FF" d="M.801 254.936V191.2l63.605-63.605v63.869z"></path><path fill="#000" d="M128.01 254.936V191.2l-63.605-63.605v63.869z"></path><path fill="#A596FF" d="M.672.386h63.736l63.605 63.605H64.145z"></path><path fill="#000" d="M.672 127.594h63.736l63.605-63.605H64.145z"></path></g>', 1)
    ]), 4));
  }
});
export {
  m as _
};
