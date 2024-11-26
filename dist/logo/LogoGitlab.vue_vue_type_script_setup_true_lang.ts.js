import { defineComponent as p, computed as l, openBlock as a, createElementBlock as o, normalizeStyle as d, createStaticVNode as m } from "vue";
const s = /* @__PURE__ */ p({
  __name: "LogoGitlab",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -10 256 256",
      style: d(i.value)
    }, e[0] || (e[0] = [
      m('<g><path fill="#E24329" d="m128.075 236.075 47.104-144.97H80.97z"></path><path fill="#FC6D26" d="M128.075 236.074 80.97 91.104H14.956z"></path><path fill="#FCA326" d="M14.956 91.104.642 135.16a9.75 9.75 0 0 0 3.542 10.903l123.891 90.012z"></path><path fill="#E24329" d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z"></path><path fill="#FC6D26" d="m128.075 236.074 47.104-144.97h66.015z"></path><path fill="#FCA326" d="m241.194 91.104 14.314 44.056a9.75 9.75 0 0 1-3.543 10.903l-123.89 90.012z"></path><path fill="#E24329" d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
