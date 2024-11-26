import { defineComponent as p, computed as o, openBlock as a, createElementBlock as l, normalizeStyle as d, createStaticVNode as m } from "vue";
const s = /* @__PURE__ */ p({
  __name: "LogoMixmax",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "203",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 203",
      style: d(i.value)
    }, e[0] || (e[0] = [
      m('<g><path fill="#E55CFF" d="M0 202.999h50.731V.007H0z"></path><path fill="#24235C" d="M102.633.007 0 202.999h50.731L153.364.007z"></path><path fill="#E55CFF" d="M102.633 202.999h50.731V.007h-50.731z"></path><path fill="#24235C" d="M205.27.008 102.635 203h50.73L256 .008z"></path><path fill="#E55CFF" d="M204.982 202.999h50.731V.007h-50.731z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
