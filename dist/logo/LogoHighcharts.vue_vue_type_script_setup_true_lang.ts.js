import { defineComponent as p, computed as o, openBlock as l, createElementBlock as m, normalizeStyle as a, createStaticVNode as d } from "vue";
const s = /* @__PURE__ */ p({
  __name: "LogoHighcharts",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "243",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 243",
      style: a(h.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#78758C" d="m178.6 119.7-1.8-3.1-60.3-19.7-1.7 2-2.6.6-53.6 125.2.7 3.8L188.4 174l1.1-2.2-9-50z"></path><path fill="#A3EDBA" d="m59.3 228.5 55.5-129.6L.8 61.7z"></path><path fill="#8087E8" d="m157.1.3-42.3 98.6 63.8 20.8.3-.8L157.5 1.2z"></path><path fill="#30426B" d="m178.6 119.7 9.8 54.3 4.5-.1 61.1-26.5 2.7-2.3-3.2-2.7-71.9-24.2z"></path><path fill="#6699A1" d="m188.4 174 12.5 69.4 55.8-98.3zM157.1.3l21.5 119.4 78.1 25.4z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
