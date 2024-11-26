import { defineComponent as e, computed as p, openBlock as s, createElementBlock as l, normalizeStyle as r, createStaticVNode as h } from "vue";
const c = /* @__PURE__ */ e({
  __name: "LogoApiary",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, o = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, i) => (s(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: r(o.value)
    }, i[0] || (i[0] = [
      h('<defs><linearGradient id="apiary-gui-asset-a" x1="100.012%" x2="0%" y1="49.991%" y2="49.991%"><stop offset="0%" stop-color="#37BDA6"></stop><stop offset="100%" stop-color="#8AD3B8"></stop></linearGradient><linearGradient id="apiary-gui-asset-b" x1="100.012%" x2="0%" y1="49.998%" y2="49.998%"><stop offset="50%" stop-color="#4BB6AD"></stop><stop offset="100%" stop-color="#78BBC1"></stop></linearGradient><linearGradient id="apiary-gui-asset-c" x1="-.018%" x2="100.023%" y1="49.998%" y2="49.998%"><stop offset="0%" stop-color="#4379A7"></stop><stop offset="100%" stop-color="#7CC9B8"></stop></linearGradient></defs><g><path fill="#13A049" d="M127.693 36.867v73.58l63.847-36.866V0z" opacity=".5"></path><path fill="#A2CC39" d="M127.693 36.867 63.847 0v73.734l63.846 36.867z" opacity=".5"></path><path fill="url(#apiary-gui-asset-a)" d="m191.54 0-63.847 36.867L63.847 0 0 36.867l127.693 73.734L255.31 36.867z" opacity=".9"></path><path fill="url(#apiary-gui-asset-b)" d="M127.693 110.601 0 36.867v73.734l63.847 36.867v73.658l63.846 36.867 63.847-36.867v-73.658l63.77-36.867V36.867z"></path><path fill="url(#apiary-gui-asset-c)" d="M127.693 110.601v147.392l63.847-36.867v-73.658l63.77-36.867V36.867z"></path><path fill="#231F20" d="M127.693 184.259v73.734l63.847-36.867z" opacity=".05"></path><path fill="#231F20" d="M127.693 258.146v-73.734l-63.846 36.867z" opacity=".1"></path><path fill="#231F20" d="M63.847 73.734 0 110.601l63.847 36.867 63.846-36.867z" opacity=".05"></path><path fill="#231F20" d="m191.54 73.734-63.847 36.867 63.847 36.867 63.77-36.867z" opacity=".05"></path></g>', 2)
    ]), 4));
  }
});
export {
  c as _
};
