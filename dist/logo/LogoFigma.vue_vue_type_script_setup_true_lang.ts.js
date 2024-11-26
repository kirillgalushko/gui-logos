import { defineComponent as l, computed as p, openBlock as a, createElementBlock as o, normalizeStyle as s, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoFigma",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (a(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      viewBox: "-50 0 300 300",
      style: s(i.value)
    }, e[0] || (e[0] = [
      c('<path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50" style="fill:#0acf83;"></path><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50" style="fill:#a259ff;"></path><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50" style="fill:#f24e1e;"></path><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" style="fill:#ff7262;"></path><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50" style="fill:#1abcfe;"></path>', 5)
    ]), 4));
  }
});
export {
  d as _
};
