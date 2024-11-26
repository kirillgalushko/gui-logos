import { defineComponent as r, computed as s, openBlock as h, createElementBlock as l, normalizeStyle as n, createStaticVNode as d } from "vue";
const g = /* @__PURE__ */ r({
  __name: "LogoTrello",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, o = s(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, e) => (h(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(o.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="trello-gui-asset-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#0091E6"></stop><stop offset="100%" stop-color="#0079BF"></stop></linearGradient></defs><g><g><rect width="256" height="256" x="0" y="0" fill="url(#trello-gui-asset-a)" rx="25"></rect><rect width="78.08" height="112" x="144.64" y="33.28" fill="#FFF" rx="12"></rect><rect width="78.08" height="176" x="33.28" y="33.28" fill="#FFF" rx="12"></rect></g></g>', 2)
    ]), 4));
  }
});
export {
  g as _
};
