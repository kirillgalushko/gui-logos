import { defineComponent as l, computed as p, openBlock as o, createElementBlock as m, normalizeStyle as a, createStaticVNode as r } from "vue";
const s = /* @__PURE__ */ l({
  __name: "LogoHtml5Boilerplate",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, h = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(h.value)
    }, e[0] || (e[0] = [
      r('<g><rect width="256" height="256" x="0" y="0" fill="#222"></rect><path fill="#E08524" d="M114.406 35.277 91.827 99.82l-68.494.189 55.51 41.021-19.948 66.233 56.075-39.7 57.584 42.147-21.079-68.869 54.948-41.021-68.306.189z"></path><path fill="#466770" d="m117.228 34.336 22.768 10.726 19.005 51.937h-18.817L117.228 34.34"></path><path fill="#304A51" d="m156.34 142.239 22.486 11.044 54.42-39.518-22.486-11.975z"></path><path fill="#466770" d="m156.308 142.198 22.518 11.035 21.289 68.839-23.285-11.842-20.522-68.03"></path><path fill="#304A51" d="m62.095 209.618 52.875-37.822 18.535 13.736-49.96 35z"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};
