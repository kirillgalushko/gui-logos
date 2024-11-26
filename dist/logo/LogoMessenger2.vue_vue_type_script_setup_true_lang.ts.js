import { defineComponent as i, computed as p, openBlock as r, createElementBlock as l, normalizeStyle as a, createStaticVNode as c } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoMessenger2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(s.value)
    }, e[0] || (e[0] = [
      c('<defs><radialGradient id="messenger-2-gui-asset-a" cx="19.247%" cy="99.465%" r="108.96%" fx="19.247%" fy="99.465%"><stop offset="0%" stop-color="#09F"></stop><stop offset="60.975%" stop-color="#A033FF"></stop><stop offset="93.482%" stop-color="#FF5280"></stop><stop offset="100%" stop-color="#FF7061"></stop></radialGradient></defs><g><path fill="url(#messenger-2-gui-asset-a)" d="M128 0C55.894 0 0 52.818 0 124.16c0 37.317 15.293 69.562 40.2 91.835 2.09 1.871 3.352 4.493 3.438 7.298l.697 22.77c.223 7.262 7.724 11.988 14.37 9.054L84.111 243.9a10.22 10.22 0 0 1 6.837-.501c11.675 3.21 24.1 4.92 37.052 4.92 72.106 0 128-52.818 128-124.16S200.106 0 128 0"></path><path fill="#FFF" d="m51.137 160.47 37.6-59.653c5.98-9.49 18.788-11.853 27.762-5.123l29.905 22.43a7.68 7.68 0 0 0 9.252-.027l40.388-30.652c5.39-4.091 12.428 2.36 8.82 8.085l-37.6 59.654c-5.981 9.489-18.79 11.852-27.763 5.122l-29.906-22.43a7.68 7.68 0 0 0-9.25.027l-40.39 30.652c-5.39 4.09-12.427-2.36-8.818-8.085"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};
