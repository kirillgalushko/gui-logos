import { defineComponent as i, computed as n, openBlock as r, createElementBlock as l, normalizeStyle as a, createStaticVNode as d } from "vue";
const p = /* @__PURE__ */ i({
  __name: "LogoDatocms2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (r(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: a(s.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="datocms-2-gui-asset-a" x1="0%" x2="100%" y1="49.999%" y2="49.999%"><stop offset="0%" stop-color="#FF593D"></stop><stop offset="100%" stop-color="#FF7751"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><path fill="url(#datocms-2-gui-asset-a)" fill-rule="nonzero" d="M128.002.653H0v257.646h128.002c64.017 0 127.998-57.68 127.998-128.805C256 58.368 192.019.653 128.002.653m0 187.36c-32.33-.013-58.528-26.231-58.516-58.56s26.23-58.529 58.559-58.517c32.33.011 58.529 26.228 58.518 58.558a58.52 58.52 0 0 1-58.561 58.518"></path></g>', 2)
    ]), 4));
  }
});
export {
  p as _
};
