import { defineComponent as p, computed as i, openBlock as a, createElementBlock as d, normalizeStyle as m, createStaticVNode as o } from "vue";
const s = /* @__PURE__ */ p({
  __name: "LogoHaxe",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const t = l, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, h) => (a(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: m(e.value)
    }, h[0] || (h[0] = [
      o('<g><path fill="#FBC707" d="m127.946 31.99-72.874-8.07L0 .004h63.97l63.976 31.99m0-.004 74.542-6.401L255.892.004h-63.975l-63.971 31.99"></path><path fill="#F68712" d="m127.946 223.905 69.536 2.503 58.41 29.483h-63.975L127.946 223.9"></path><path fill="#F25C19" d="M127.946 223.905H57.854L0 255.89h63.97l63.976-31.992"></path><path fill="#FFF200" d="M31.985 127.949v67.307L0 255.89v-63.97l31.985-63.974"></path><path fill="#FFF200" d="M31.985 127.949 26.702 61.19 0 .004v63.97l31.985 63.973"></path><path fill="#F1471D" d="m223.9 127.949 6.959-70.096L255.892.003v63.971L223.9 127.947"></path><path fill="#F1471D" d="m223.9 127.949 5.846 75.095 26.146 52.847v-63.97L223.9 127.946"></path><path fill="#FAB20B" d="M0 .004 127.946 31.99l-20.583 81.492-75.378 14.467L0 .01"></path><path fill="#F47216" d="M255.892.004 223.9 127.949l-85.942-15.584-10.013-80.379L255.892.01"></path><path fill="#F25C19" d="m255.892 255.891-127.946-31.986 14.463-84.828 81.492-11.122 31.99 127.928"></path><path fill="#F89C0E" d="M0 255.891 31.985 127.95l77.047 17.241 18.914 78.715L0 255.883"></path><path fill="#F68712" d="m127.946 31.99-95.96 95.959 95.96 95.956 95.955-95.956-95.955-95.954"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};