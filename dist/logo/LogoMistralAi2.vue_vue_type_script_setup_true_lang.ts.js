import { defineComponent as r, computed as c, openBlock as l, createElementBlock as d, normalizeStyle as g, createStaticVNode as w } from "vue";
const y = /* @__PURE__ */ r({
  __name: "LogoMistralAi2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (x, e) => (l(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "233",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 233",
      style: g(h.value)
    }, e[0] || (e[0] = [
      w('<g><rect width="46.545" height="46.545" x="186.182" y="0" fill="#000"></rect><rect width="46.545" height="46.545" x="209.455" y="0" fill="#F7D046"></rect><rect width="46.545" height="46.545" x="0" y="0" fill="#000"></rect><rect width="46.545" height="46.545" x="0" y="46.545" fill="#000"></rect><rect width="46.545" height="46.545" x="0" y="93.091" fill="#000"></rect><rect width="46.545" height="46.545" x="0" y="139.636" fill="#000"></rect><rect width="46.545" height="46.545" x="0" y="186.182" fill="#000"></rect><rect width="46.545" height="46.545" x="23.273" y="0" fill="#F7D046"></rect><rect width="46.545" height="46.545" x="209.455" y="46.545" fill="#F2A73B"></rect><rect width="46.545" height="46.545" x="23.273" y="46.545" fill="#F2A73B"></rect><rect width="46.545" height="46.545" x="139.636" y="46.545" fill="#000"></rect><rect width="46.545" height="46.545" x="162.909" y="46.545" fill="#F2A73B"></rect><rect width="46.545" height="46.545" x="69.818" y="46.545" fill="#F2A73B"></rect><rect width="46.545" height="46.545" x="116.364" y="93.091" fill="#EE792F"></rect><rect width="46.545" height="46.545" x="162.909" y="93.091" fill="#EE792F"></rect><rect width="46.545" height="46.545" x="69.818" y="93.091" fill="#EE792F"></rect><rect width="46.545" height="46.545" x="93.091" y="139.636" fill="#000"></rect><rect width="46.545" height="46.545" x="116.364" y="139.636" fill="#EB5829"></rect><rect width="46.545" height="46.545" x="209.455" y="93.091" fill="#EE792F"></rect><rect width="46.545" height="46.545" x="23.273" y="93.091" fill="#EE792F"></rect><rect width="46.545" height="46.545" x="186.182" y="139.636" fill="#000"></rect><rect width="46.545" height="46.545" x="209.455" y="139.636" fill="#EB5829"></rect><rect width="46.545" height="46.545" x="186.182" y="186.182" fill="#000"></rect><rect width="46.545" height="46.545" x="23.273" y="139.636" fill="#EB5829"></rect><rect width="46.545" height="46.545" x="209.455" y="186.182" fill="#EA3326"></rect><rect width="46.545" height="46.545" x="23.273" y="186.182" fill="#EA3326"></rect></g>', 1)
    ]), 4));
  }
});
export {
  y as _
};
