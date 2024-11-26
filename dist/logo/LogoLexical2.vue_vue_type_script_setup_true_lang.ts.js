import { defineComponent as n, computed as p, openBlock as e, createElementBlock as g, normalizeStyle as h, createStaticVNode as s } from "vue";
const r = /* @__PURE__ */ n({
  __name: "LogoLexical2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const o = l, i = p(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (y, t) => (e(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "243",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 243",
      style: h(i.value)
    }, t[0] || (t[0] = [
      s('<g><polygon fill="#76B6FF" points="43.3898305 75.9322034 91.1186441 75.9322034 91.1186441 97.6271186 43.3898305 97.6271186"></polygon><polygon fill="#000" points="101.966102 75.9322034 149.694915 75.9322034 149.694915 97.6271186 101.966102 97.6271186"></polygon><polygon fill="#76B6FF" points="160.542373 75.9322034 180.067797 75.9322034 180.067797 97.6271186 160.542373 97.6271186"></polygon><polygon fill="#76B6FF" points="43.3898305 110.644068 121.491525 110.644068 121.491525 132.338983 43.3898305 132.338983"></polygon><polygon fill="#76B6FF" points="132.338983 110.644068 180.067797 110.644068 180.067797 132.338983 132.338983 132.338983"></polygon><polygon fill="#000" points="43.3898305 145.355932 91.1186441 145.355932 91.1186441 167.050847 43.3898305 167.050847"></polygon><polygon fill="#76B6FF" points="101.966102 145.355932 149.694915 145.355932 149.694915 167.050847 101.966102 167.050847"></polygon><polygon fill="#000" points="160.542373 145.355932 180.067797 145.355932 180.067797 167.050847 160.542373 167.050847"></polygon><path fill="#000" d="M236.475 0v21.695H212.61v199.593h23.865v21.695H169.22v-21.695h21.695V21.695H169.22V0zm-56.407 32.542v21.695H21.695v134.509h158.373v21.695H0V32.542zm75.932 0v177.899h-32.542v-21.695h10.847V54.237h-10.847V32.542z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
