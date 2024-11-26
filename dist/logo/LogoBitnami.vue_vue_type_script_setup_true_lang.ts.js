import { defineComponent as e, computed as a, openBlock as p, createElementBlock as l, normalizeStyle as r, createStaticVNode as n } from "vue";
const f = /* @__PURE__ */ e({
  __name: "LogoBitnami",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = a(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, i) => (p(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "287",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 287",
      style: r(s.value)
    }, i[0] || (i[0] = [
      n('<defs><linearGradient id="bitnami-gui-asset-a" x1="14.551%" x2="411.685%" y1="49.972%" y2="49.972%"><stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="bitnami-gui-asset-b" x1="5.239%" x2="379.916%" y1="82.91%" y2="-193.342%"><stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="bitnami-gui-asset-c" x1="62.675%" x2="-363.978%" y1="44.012%" y2="243.704%"><stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="bitnami-gui-asset-d" x1="11.134%" x2="355.291%" y1="19.904%" y2="478.171%"><stop offset="0%" stop-color="#FFF" stop-opacity="0"></stop><stop offset="100%" stop-color="#FFF"></stop></linearGradient><linearGradient id="bitnami-gui-asset-e" x1="53.115%" x2="46.266%" y1="2.534%" y2="110.506%"><stop offset="0%" stop-color="#1A3B54" stop-opacity="0"></stop><stop offset="100%" stop-color="#1A3B54"></stop></linearGradient></defs><g><path fill="#2A5D84" d="m142.4 3.9 99.3 57.3C251 66.6 256 75.5 256 86.9v114c0 10.8-4.9 19.2-14.1 24.6-33 19.1-66.1 38.1-99.1 57.2-9.6 5.6-20 5.5-29.7-.1-32.9-19-65.9-38-98.8-57.1C6.4 221 0 211.9 0 200.4V81.8c0-10.4 4.9-15.7 14.1-21L53.7 38v148.3l74.3 42.9 74.3-42.9v-85.8L128 57.6l-31.2 18v-62c5.6-3.2 11.2-6.5 16.9-9.7 8.7-5.1 19.5-5.3 28.7 0"></path><path fill="#1A3B54" d="M159.2 125.2v36l-15.6 9-15.6 9.1-15.6-9.1-15.6-9v-36l15.6-9 15.6-9 15.6 9z"></path><path fill="url(#bitnami-gui-asset-a)" d="M158.1 125.9 128 108.5l-30.1 17.4 30.1 17.5z"></path><path fill="url(#bitnami-gui-asset-b)" d="m128 178 30.1-17.4v-34.7L128 143.2z"></path><path fill="url(#bitnami-gui-asset-c)" d="m128 178-30.1-17.4v-34.7l30.1 17.3z"></path><path fill="url(#bitnami-gui-asset-d)" d="M97.9 14.3v59.4L128 56.3l75.4 43.5v.3l48.1-27.6c-2.3-4.2-5.7-7.7-10.4-10.4-33.1-19-66.2-38.1-99.3-57.2-8.6-5-19-5-27.6 0-5.4 3.1-10.9 6.2-16.3 9.4"></path><path fill="url(#bitnami-gui-asset-e)" d="M52.6 186.8v-.5c0-50.3.2-98 .2-148.3L14.9 59.8c-8.8 5.1-13.8 11.9-13.8 22v118.6c0 4.9 1.3 9.7 3.6 13.9z"></path></g>', 2)
    ]), 4));
  }
});
export {
  f as _
};
