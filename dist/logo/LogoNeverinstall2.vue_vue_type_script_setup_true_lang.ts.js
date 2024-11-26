import { defineComponent as n, computed as l, openBlock as p, createElementBlock as s, normalizeStyle as g, createStaticVNode as h } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoNeverinstall2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const o = e, i = l(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (m, t) => (p(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "246",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 246",
      style: g(i.value)
    }, t[0] || (t[0] = [
      h('<g><polygon fill="#5B29FF" points="85.6609176 99.0987469 0 148.132566 0 49.8679504"></polygon><polygon fill="#2962FF" points="85.6623398 99.0774137 170.338371 49.8471149 256 99.0774137 256 196.160166 170.338371 245.390963 170.338371 148.30821"></polygon><polygon fill="#FFC629" points="85.6609176 0 0 49.8213016 85.6609176 99.0518137 170.33766 49.8213016"></polygon><path fill="#FAFAFA" d="m0 49.821 85.66 49.23 84.678-49.23L85.66 0zm15.983-.041 69.655 40.032 68.854-40.032L85.637 9.268z"></path><polygon fill="#FFBC00" points="85.6538065 89.8557504 85.6538065 9.34027628 15.9999556 49.8491771"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
