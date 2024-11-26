import { defineComponent as c, computed as n, openBlock as d, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ c({
  __name: "LogoNotion",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const l = i, o = n(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (a, t) => (d(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: m(o.value)
    }, t[0] || (t[0] = [
      e("path", {
        fill: "#fff",
        "fill-rule": "evenodd",
        d: "m5.716 29.218-3.44-4.285A5.75 5.75 0 0 1 1 21.33V5.815c0-1.954 1.564-3.576 3.58-3.714l15.952-1.089a5.2 5.2 0 0 1 3.263.873l5.604 3.789A3.59 3.59 0 0 1 31 8.644v17.64c0 1.912-1.537 3.495-3.512 3.617L9.783 30.99c-1.576.097-3.099-.567-4.067-1.773",
        "clip-rule": "evenodd"
      }, null, -1),
      e("path", {
        fill: "#000",
        d: "M11.248 13.579v-.203c0-.515.413-.942.944-.978l3.871-.258 5.354 7.883v-6.919l-1.378-.184v-.096c0-.521.422-.95.96-.978l3.523-.18v.506a.495.495 0 0 1-.42.483l-.848.143v11.206l-1.063.365c-.89.306-1.879-.021-2.387-.789l-5.198-7.843v7.486l1.6.306-.022.148c-.07.465-.472.817-.957.838l-3.979.178c-.053-.5.322-.947.839-1.002l.523-.055v-9.98z"
      }, null, -1),
      e("path", {
        fill: "#000",
        "fill-rule": "evenodd",
        d: "M20.675 2.967 4.723 4.056c-.955.065-1.696.833-1.696 1.759V21.33c0 .87.3 1.715.851 2.402l3.44 4.285a2.78 2.78 0 0 0 2.336 1.018l17.705-1.09c.907-.055 1.613-.783 1.613-1.662V8.644a1.65 1.65 0 0 0-.735-1.364l-5.604-3.79a3.12 3.12 0 0 0-1.958-.523m-15.16 3.09c-.222-.164-.117-.506.162-.526l15.105-1.084a2.08 2.08 0 0 1 1.349.374l3.03 2.147a.145.145 0 0 1-.08.265l-15.997.87a2.08 2.08 0 0 1-1.347-.4zm2.819 4.774c0-.52.42-.95.956-.978l16.913-.922c.523-.028.964.374.964.88v15.274c0 .519-.419.948-.954.978l-16.806.957c-.582.033-1.073-.415-1.073-.979z",
        "clip-rule": "evenodd"
      }, null, -1)
    ]), 4));
  }
});
export {
  r as _
};
