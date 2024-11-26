import { defineComponent as o, computed as p, openBlock as a, createElementBlock as l, normalizeStyle as s, createStaticVNode as d } from "vue";
const r = /* @__PURE__ */ o({
  __name: "LogoChrome2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(h.value)
    }, e[0] || (e[0] = [
      d('<g><path fill="#FFF" d="M128.003 199.216c39.335 0 71.221-31.888 71.221-71.223S167.338 56.77 128.003 56.77 56.78 88.658 56.78 127.993s31.887 71.223 71.222 71.223"></path><path fill="#229342" d="M35.89 92.997Q27.92 79.192 17.154 64.02a127.98 127.98 0 0 0 110.857 191.981q17.671-24.785 23.996-35.74 12.148-21.042 31.423-60.251v-.015a63.993 63.993 0 0 1-110.857.017Q46.395 111.19 35.89 92.998"></path><path fill="#FBC116" d="M128.008 255.996A127.97 127.97 0 0 0 256 127.997 128 128 0 0 0 238.837 64q-36.372-3.585-53.686-3.585-19.632 0-57.152 3.585l-.014.01a63.99 63.99 0 0 1 55.444 31.987 63.99 63.99 0 0 1-.001 64.01z"></path><path fill="#1A73E8" d="M128.003 178.677c27.984 0 50.669-22.685 50.669-50.67s-22.685-50.67-50.67-50.67c-27.983 0-50.669 22.686-50.669 50.67s22.686 50.67 50.67 50.67"></path><path fill="#E33B2E" d="M128.003 64.004H238.84a127.973 127.973 0 0 0-221.685.015l55.419 95.99.015.008a63.993 63.993 0 0 1 55.415-96.014z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
