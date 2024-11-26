import { defineComponent as i, computed as s, openBlock as l, createElementBlock as p, normalizeStyle as r, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoHaiku2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, a = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "295",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 295",
      style: r(a.value)
    }, e[0] || (e[0] = [
      c('<defs><linearGradient id="haiku-2-gui-asset-a" x1="49.084%" x2="49.084%" y1="4.311%" y2="95.786%"><stop offset="0%" stop-color="#F1CB2B"></stop><stop offset="100%" stop-color="#D62B5F"></stop></linearGradient><linearGradient id="haiku-2-gui-asset-b" x1="143.212%" x2="143.212%" y1="-204.867%" y2="86.05%"><stop offset="0%" stop-color="#F1CB2B"></stop><stop offset="100%" stop-color="#D62B5F"></stop></linearGradient></defs><g><path fill="url(#haiku-2-gui-asset-a)" d="m206.69.891-1.84-.653a8.5 8.5 0 0 0-6.172.864c-12.609 5.145-26.62 10.896-40.565 16.76-2.514 1.056-2.503 4.614.013 5.661l33.83 14.084a3.08 3.08 0 0 1 1.896 2.84c.017 11.08.165 21.452.026 32.547A3.07 3.07 0 0 1 192 75.782l-89.07 37.502c-2.027.853-4.27-.636-4.27-2.836l.004-83.527c0-3.205-1.793-5.64-4.485-6.998a9 9 0 0 0-.792-.382L48.854.677a8.52 8.52 0 0 0-7.51.42A5287 5287 0 0 0 1.885 17.394c-2.49 1.04-2.521 4.55-.054 5.642l33.153 14.657a3.08 3.08 0 0 1 1.832 2.813v106.602c.26 1.163.73 2.16 1.364 2.983.646 1.078 1.71 2.026 3.308 2.783l97.96 46.618.528.206a7.9 7.9 0 0 0 3.53.827l.57-.02a8.034 8.034 0 0 0 7.419-8.042v-32.891c0-1.34.866-2.526 2.144-2.932l36.273-11.528a3.076 3.076 0 0 1 4.007 2.933l-.043 141.388a3.08 3.08 0 0 0 1.913 2.85l1.678.685q.812.329 1.672.489a10.13 10.13 0 0 0 7.062-.191l44.413-18.168c1.706-.746 2.865-1.582 3.592-2.523 1.112-1.17 1.796-2.711 1.796-4.918V26.928c0-2.39-1.089-4.344-2.753-5.74a8.6 8.6 0 0 0-2.523-1.644z"></path><path fill="url(#haiku-2-gui-asset-b)" d="M98.85 228.987a3.08 3.08 0 0 0-1.756-2.808l-49.43-23.491a7.963 7.963 0 0 0-10.458 4.32q-.24.581-.389 1.186v81.225c0 1.227.73 2.336 1.855 2.823l2.587 1.118q.399.162.811.283a8.5 8.5 0 0 0 6.963.23l44.032-17.544a8.69 8.69 0 0 0 5.38-8.027 7 7 0 0 0 .03-.715z"></path></g>', 2)
    ]), 4));
  }
});
export {
  d as _
};
