import { defineComponent as p, computed as i, openBlock as a, createElementBlock as m, normalizeStyle as v, createStaticVNode as z } from "vue";
const s = /* @__PURE__ */ p({
  __name: "LogoMesos",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, e = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, l) => (a(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "291",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 291",
      style: v(e.value)
    }, l[0] || (l[0] = [
      z('<g><path fill="#FFF" d="M190.18 177.17v-63.366l-54.642 31.735z"></path><path fill="#00AEDE" d="M186.645 107.622 131.907 75.97v63.379zm-61.852 31.725V75.968L70.016 107.62zm-3.541-69.46L66.527 38.052v63.472z"></path><path fill="#FFF" d="m186.645 183.26-54.738-31.624v63.368zm-61.852 31.745v-63.371L70.016 183.26z"></path><path fill="#00AEDE" d="m252.113 145.538-54.818-31.73v63.36zM59.399 101.524V38.052L4.263 69.887z"></path><path fill="#FFF" d="m121.252 221.095-54.725-31.72v63.451z"></path><path fill="#00AEDE" d="M59.399 252.827v-63.45l-55.136 31.72z"></path><path fill="#FFF" d="m121.252 145.538-54.725-31.73v63.36z"></path><path fill="#00AEDE" d="M190.18 101.524V38.052l-54.642 31.835z"></path><path fill="#FFF" d="M131.909.319v63.357l54.738-31.72zM70.015 31.956l54.777 31.72V.32zm116.63 226.954-54.738-31.616v63.348zm-61.852 31.734v-63.352l-54.777 31.62z"></path><path fill="#00AEDE" d="M255.66 215.005v-63.371l-54.676 31.627zM59.399 177.17v-63.465L4.263 145.539zm-3.527 6.09L.656 151.635v63.368zm199.788-43.913V75.968l-54.676 31.652zm-3.547-69.46-54.818-31.835v63.472zm0 151.208-54.818-31.72v63.451z"></path><path fill="#FFF" d="M190.18 252.827v-63.45l-54.642 31.72z"></path><path fill="#00AEDE" d="M55.872 107.622.656 75.97v63.379z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};