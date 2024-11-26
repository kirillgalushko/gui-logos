import { defineComponent as e, computed as n, openBlock as p, createElementBlock as g, normalizeStyle as s, createStaticVNode as h } from "vue";
const r = /* @__PURE__ */ e({
  __name: "LogoElmClassic",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const o = i, l = n(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, t) => (p(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(l.value)
    }, t[0] || (t[0] = [
      h('<g><polygon fill="#5FB4CB" points="128 135.022029 7.02282105 256 248.977971 256"></polygon><polygon fill="#EEA400" points="202.332313 195.311075 256 248.979554 256 141.643388"></polygon><polygon fill="#596277" points="120.977971 128 0 7.02202921 0 248.979554"></polygon><polygon fill="#5FB4CB" points="256 113.806284 256 0 142.192924 0"></polygon><polygon fill="#8CD636" points="195.583504 67.4342159 255.872312 127.723024 195.308589 188.286748 135.01978 127.99794"></polygon><polygon fill="#8CD636" points="7.02123737 0 62.7461228 55.7256772 183.875335 55.7256772 128.149658 0"></polygon><polygon fill="#EEA400" points="128 120.978763 183.321839 65.6561315 72.6773689 65.6561315"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
