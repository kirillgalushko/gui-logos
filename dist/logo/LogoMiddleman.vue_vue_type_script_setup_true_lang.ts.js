import { defineComponent as h, computed as o, openBlock as m, createElementBlock as p, normalizeStyle as r, createStaticVNode as n } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoMiddleman",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, l = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(l.value)
    }, e[0] || (e[0] = [
      n('<g><rect width="256" height="256" x="0" y="0" fill="#F1C761" rx="22"></rect><g fill="#000" fill-opacity=".35"><path d="M118.097 189.197V68.218L88.676 72.35l-22.499 43.601-21.381-38.41-24.732 3.909v95.353l23.28 3.964v-60.35l22.777 42.931h.503L90.63 120.25v64.871zM19.561 53.983v12.505l108.864-18.033V32.49zm0 147.887 108.864 21.438v-15.911L19.561 189.308z"></path></g><g fill="#FFF"><path d="M128.425 32.489v15.966L237.29 66.488V53.983zm108.361 144.314V81.45l-24.731-3.908-21.382 38.409-22.499-43.6-29.42-4.133v120.979l27.467-4.076v-64.87l24.006 43.097h.502l22.778-42.93v60.349zm-108.361 46.505L237.29 201.87v-12.562l-108.864 18.089z"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
