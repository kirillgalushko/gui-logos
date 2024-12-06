import { defineComponent as v, computed as i, openBlock as o, createElementBlock as m, normalizeStyle as n, createStaticVNode as r } from "vue";
const s = /* @__PURE__ */ v({
  __name: "LogoEvergreen",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const h = t, l = i(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (c, e) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "107",
      version: "1.1",
      viewBox: "0 0 512 107",
      style: n(l.value)
    }, e[0] || (e[0] = [
      r('<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill-rule="nonzero"><path fill="#1F4160" d="M169.12 65.967h-19.15v-10.66h18.065v-6.792H149.97V38.33h19.147v-7.292H141.13v42.249h27.988v-7.319zm33.046 7.319 14.194-42.25h-9.634l-9.66 33.146h-.206l-9.66-33.145h-9.895l14.198 42.249zm50.987-7.319h-19.147v-10.66h18.065v-6.792h-18.065V38.33h19.147v-7.292h-27.988v42.249h27.988zm19.72-28.018v13.468h7.616c4.45 0 7.055-2.549 7.055-6.736 0-4.097-2.751-6.732-7.145-6.732h-7.525m0 19.877v15.46h-8.84v-42.25h17.305c9.72 0 15.284 5.124 15.284 13.469 0 5.416-2.812 10.103-7.672 12.005l8.9 16.776h-10.013l-7.875-15.457h-7.085zm71.811-2.282v-4.777h-17.802v6.443h9.194l-.033.673c-.173 5.24-4.184 8.784-9.95 8.784-7.03 0-11.48-5.593-11.48-14.757 0-8.988 4.188-14.291 11.157-14.291 4.773 0 8.374 2.638 9.66 7.062h8.87c-1.258-8.551-8.693-14.377-18.56-14.377-12.412 0-20.144 8.194-20.144 21.722 0 13.732 7.728 21.986 20.35 21.986 11.77 0 18.738-6.965 18.738-18.471zm19.164-17.595v13.468h7.612c4.45 0 7.055-2.549 7.055-6.736 0-4.097-2.751-6.732-7.142-6.732zm0 19.877v15.46h-8.84v-42.25h17.302c9.72 0 15.283 5.124 15.283 13.469 0 5.416-2.812 10.103-7.672 12.005l8.901 16.776H378.81l-7.875-15.457h-7.086zm62.027 8.141h-19.148v-10.66h18.065v-6.792h-18.065V38.33h19.148v-7.292h-27.989v42.249h27.989zm38.871 0H445.6v-10.66h18.065v-6.792H445.6V38.33h19.147v-7.292h-27.991v42.249h27.991zm19.341 7.319V45.617h.263l19.764 27.669h7.319v-42.25h-8.461V58.56h-.233l-19.734-27.522h-7.379v42.249z"></path><circle cx="53.299" cy="53.299" r="53.299" fill="#38A065"></circle><path fill="#FFF" d="M56.63 73.286v13.325h-6.662V73.286zM53.3 23.318l23.318 46.637H29.981z"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};