import { defineComponent as h, computed as l, openBlock as n, createElementBlock as p, normalizeStyle as r, createStaticVNode as d } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoChrome",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 0 48 48",
      style: r(o.value)
    }, e[0] || (e[0] = [
      d('<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><g><path fill="#EA4335" d="M5.795 8.361C16.952-4.624 37.64-2.06 45.373 13.107c-5.444.002-13.969-.001-18.586 0-3.349.001-5.51-.075-7.852 1.158-2.753 1.449-4.83 4.135-5.555 7.29z"></path><path fill="#4285F4" d="M16.015 24c0 4.4 3.579 7.98 7.977 7.98s7.976-3.58 7.976-7.98-3.578-7.982-7.976-7.982-7.977 3.58-7.977 7.981"></path><path fill="#34A853" d="M27.088 34.446c-4.477 1.33-9.717-.145-12.587-5.1A7918 7918 0 0 1 3.892 10.898C-5.322 25.02 2.62 44.264 19.346 47.55z"></path><path fill="#FBBC05" d="M31.401 16.018c3.73 3.468 4.542 9.084 2.016 13.439-1.903 3.28-7.977 13.531-10.92 18.495C39.73 49.015 52.294 32.124 46.62 16.018z"></path></g></g></g>', 1)
    ]), 4));
  }
});
export {
  g as _
};
