import { defineComponent as s, computed as n, openBlock as r, createElementBlock as l, normalizeStyle as p, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ s({
  __name: "LogoInsomnia",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(i.value)
    }, e[0] || (e[0] = [
      a('<defs><linearGradient id="insomnia-gui-asset-a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#7400E1"></stop><stop offset="100%" stop-color="#4000BF"></stop></linearGradient></defs><g><path fill="#FFF" fill-rule="nonzero" d="M128 249.491c67.098 0 121.492-54.393 121.492-121.491S195.098 6.508 128 6.508 6.509 60.902 6.509 128 60.902 249.491 128 249.491"></path><path fill="#4000BF" fill-rule="nonzero" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.307 128-128C256 57.308 198.693 0 128 0m0 13.017c63.503 0 114.983 51.48 114.983 114.983S191.503 242.983 128 242.983 13.017 191.503 13.017 128 64.497 13.017 128 13.017"></path><path fill="url(#insomnia-gui-asset-a)" d="M129.446 36.881c50.324 0 91.119 40.796 91.119 91.119s-40.795 91.118-91.12 91.118c-50.323 0-91.118-40.795-91.118-91.118 0-12.298 2.437-24.028 6.854-34.733 6.449 8.783 16.85 14.484 28.581 14.484 19.57 0 35.435-15.865 35.435-35.435 0-11.732-5.701-22.132-14.484-28.581 10.705-4.417 22.434-6.854 34.733-6.854"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};